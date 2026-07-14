export type Language = 'ko' | 'en';

export interface LocalizedMetadata {
  title: string;
  description: string;
  keywords: string;
  openGraphTitle: string;
  openGraphDescription: string;
}

const DEFAULT_LANGUAGE: Language = 'ko';
const LANGUAGE_STORAGE_KEY = 'portfolio_language';

export function resolveLanguage(): Language {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  const queryLanguage = new URL(window.location.href).searchParams.get('lang');
  if (isLanguage(queryLanguage)) {
    return queryLanguage;
  }

  const storedLanguage = readStoredLanguage();
  if (storedLanguage) {
    return storedLanguage;
  }

  return DEFAULT_LANGUAGE;
}

export function persistLanguage(language: Language) {
  if (typeof window === 'undefined') {
    return;
  }

  storeLanguage(language);

  const url = new URL(window.location.href);
  if (language === DEFAULT_LANGUAGE) {
    url.searchParams.delete('lang');
  } else {
    url.searchParams.set('lang', language);
  }

  const nextUrl = `${url.pathname}${url.search}${url.hash}`;
  window.history.replaceState(window.history.state, '', nextUrl);
}

function storeLanguage(language: Language) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    return;
  }
}

export function syncDocumentMetadata(language: Language, metadata: LocalizedMetadata) {
  if (typeof document === 'undefined') {
    return;
  }

  document.documentElement.lang = language;
  document.title = metadata.title;
  updateMetaContent('meta[name="description"]', metadata.description);
  updateMetaContent('meta[name="keywords"]', metadata.keywords);
  updateMetaContent('meta[property="og:title"]', metadata.openGraphTitle);
  updateMetaContent('meta[property="og:description"]', metadata.openGraphDescription);

  if (typeof window === 'undefined') {
    return;
  }

  updateMetaContent('meta[property="og:url"]', window.location.href);
}

function isLanguage(value: string | null): value is Language {
  return value === 'ko' || value === 'en';
}

function readStoredLanguage(): Language | null {
  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return isLanguage(storedLanguage) ? storedLanguage : null;
  } catch {
    return null;
  }
}

function updateMetaContent(selector: string, content: string) {
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    return;
  }

  element.content = content;
}
