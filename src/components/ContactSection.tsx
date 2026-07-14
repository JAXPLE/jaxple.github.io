import { useEffect, useRef, useState } from 'react';
import type { ContactContent } from '../data/portfolio';

const EMAIL_ADDRESS = 'jaxple@gmail.com';
const GITHUB_URL = 'https://github.com/JAXPLE';
const LINKEDIN_URL = 'https://www.linkedin.com/in/jaxple';
const COPY_FEEDBACK_DURATION_MS = 2000;

interface ContactSectionProps {
  content: ContactContent;
}

/**
 * 보안 컨텍스트에서 클립보드 API를 사용해 텍스트를 복사합니다.
 */
async function copyWithClipboardApi(text: string) {
  if (!navigator.clipboard || !window.isSecureContext) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * 클립보드 API를 사용할 수 없을 때 임시 입력 요소로 텍스트를 복사합니다.
 */
function copyWithFallback(text: string) {
  if (!document.body) {
    return false;
  }

  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.setAttribute('readonly', '');
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  textArea.style.top = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    return document.execCommand('copy');
  } catch {
    return false;
  } finally {
    document.body.removeChild(textArea);
  }
}

export function ContactSection({ content }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const resetTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current === null) {
        return;
      }

      window.clearTimeout(resetTimerRef.current);
    };
  }, []);

  const handleCopyEmail = async () => {
    const copiedWithApi = await copyWithClipboardApi(EMAIL_ADDRESS);
    if (!copiedWithApi && !copyWithFallback(EMAIL_ADDRESS)) {
      return;
    }

    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current);
    }

    setCopied(true);
    resetTimerRef.current = window.setTimeout(() => {
      setCopied(false);
      resetTimerRef.current = null;
    }, COPY_FEEDBACK_DURATION_MS);
  };

  const linkClassName =
    'inline-flex min-h-11 items-center border-b border-transparent text-sm text-[var(--color-muted)] transition-colors duration-200 hover:border-[var(--color-muted)] hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-text)]';

  return (
    <footer
      id="contact"
      className="scroll-mt-10 border-t border-[var(--color-line)] pt-16 pb-4 md:pt-20"
    >
      <p className="font-mono text-xs tracking-[0.18em] text-[var(--color-muted)] uppercase">
        {content.eyebrow}
      </p>
      <h2 className="mt-6 max-w-3xl text-[clamp(2rem,6vw,4.25rem)] leading-[1.03] font-medium tracking-[-0.05em] text-[var(--color-text)]">
        {content.title}
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-muted)] md:text-lg">
        {content.description}
      </p>

      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        <button
          type="button"
          aria-label={`${content.emailLabel}: ${EMAIL_ADDRESS}`}
          onClick={handleCopyEmail}
          className={`inline-flex min-h-11 items-center border-b text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-text)] ${
            copied
              ? 'border-[var(--color-success)] text-[var(--color-success)]'
              : 'border-[var(--color-text)] text-[var(--color-text)] hover:border-[var(--color-muted)] hover:text-[var(--color-muted)]'
          }`}
        >
          <span aria-live="polite">{copied ? content.copyComplete : EMAIL_ADDRESS}</span>
        </button>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={linkClassName}>
          {content.githubLabel} ↗
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={linkClassName}>
          {content.linkedinLabel} ↗
        </a>
      </div>

      <p className="mt-20 font-mono text-[11px] tracking-[0.08em] text-[var(--color-muted)]">
        © 2026 JwonLEE
      </p>
    </footer>
  );
}
