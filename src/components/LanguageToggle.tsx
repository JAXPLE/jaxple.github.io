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
    <div
      role="group"
      aria-label={label}
      className="inline-flex shrink-0 items-center gap-2"
    >
      {LANGUAGE_OPTIONS.map((option, index) => {
        const isActive = language === option.language;

        return (
          <Fragment key={option.language}>
            {index > 0 && (
              <span aria-hidden="true" className="h-3 w-px bg-white/10" />
            )}
            <button
              type="button"
              aria-label={getOptionLabel(option.language)}
              aria-pressed={isActive}
              onClick={() => handleChange(option.language)}
              className={`group inline-flex min-h-8 min-w-8 items-center justify-center gap-1.5 rounded-sm px-1 font-mono text-[10px] font-bold tracking-widest transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 ${
                isActive ? 'text-[#e4e4e7]' : 'text-[#52525b] hover:text-[#a1a1aa]'
              }`}
            >
              <span
                aria-hidden="true"
                className={`h-1 w-1 rounded-full transition-colors duration-200 ${
                  isActive ? 'bg-[#d4d4d8]' : 'bg-transparent group-hover:bg-[#52525b]'
                }`}
              />
              {option.text}
            </button>
          </Fragment>
        );
      })}
    </div>
  );
}
