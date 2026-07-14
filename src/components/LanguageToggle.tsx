import { Fragment } from 'react';
import type { Language } from '../i18n';

interface LanguageToggleProps {
  language: Language;
  label: string;
  koreanLabel: string;
  englishLabel: string;
  onChange: (language: Language) => void;
}

const LANGUAGE_OPTIONS: Array<{ language: Language; text: string }> = [
  { language: 'ko', text: 'KO' },
  { language: 'en', text: 'EN' },
];

export function LanguageToggle({
  language,
  label,
  koreanLabel,
  englishLabel,
  onChange,
}: LanguageToggleProps) {
  const handleChange = (nextLanguage: Language) => {
    if (nextLanguage === language) {
      return;
    }

    onChange(nextLanguage);
  };

  const getOptionLabel = (option: Language) => {
    if (option === 'ko') {
      return koreanLabel;
    }

    return englishLabel;
  };

  return (
    <div role="group" aria-label={label} className="flex items-center font-mono text-xs">
      {LANGUAGE_OPTIONS.map((option, index) => {
        const isActive = language === option.language;

        return (
          <Fragment key={option.language}>
            {index > 0 ? (
              <span aria-hidden="true" className="text-[var(--color-line-strong)]">
                /
              </span>
            ) : null}
            <button
              type="button"
              aria-label={getOptionLabel(option.language)}
              aria-pressed={isActive}
              onClick={() => handleChange(option.language)}
              className={`inline-flex min-h-11 min-w-11 items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-text)] ${
                isActive
                  ? 'text-[var(--color-text)]'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
              }`}
            >
              {option.text}
            </button>
          </Fragment>
        );
      })}
    </div>
  );
}
