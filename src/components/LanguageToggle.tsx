import { Languages } from 'lucide-react';
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
      className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-[#121214]/95 p-1 shadow-[0_12px_36px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:flex-col"
    >
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-full text-[#71717a]"
      >
        <Languages size={15} strokeWidth={1.7} />
      </span>
      <span
        aria-hidden="true"
        className="mx-1 h-5 w-px bg-white/10 lg:mx-0 lg:my-1 lg:h-px lg:w-5"
      />
      {LANGUAGE_OPTIONS.map((option) => {
        const isActive = language === option.language;

        return (
          <button
            key={option.language}
            type="button"
            aria-label={getOptionLabel(option.language)}
            aria-pressed={isActive}
            onClick={() => handleChange(option.language)}
            className={`h-9 min-w-9 rounded-full px-2 font-mono text-[10px] font-black tracking-widest transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#121214] ${
              isActive
                ? 'bg-[#d4d4d8] text-[#0d0d0e] shadow-[0_0_20px_rgba(212,212,216,0.18)]'
                : 'text-[#71717a] hover:bg-white/[0.06] hover:text-[#d4d4d8]'
            }`}
          >
            {option.text}
          </button>
        );
      })}
    </div>
  );
}
