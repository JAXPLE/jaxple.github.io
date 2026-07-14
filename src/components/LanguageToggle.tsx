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
      className="inline-flex rounded-md border border-white/10 bg-white/[0.025] p-1"
    >
      {LANGUAGE_OPTIONS.map((option) => {
        const isActive = language === option.language;

        return (
          <button
            key={option.language}
            type="button"
            aria-label={getOptionLabel(option.language)}
            aria-pressed={isActive}
            onClick={() => handleChange(option.language)}
            className={`min-w-10 rounded px-2.5 py-1.5 font-mono text-[11px] font-bold tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 ${
              isActive
                ? 'bg-white/[0.1] text-white'
                : 'text-[#71717a] hover:bg-white/[0.05] hover:text-[#d4d4d8]'
            }`}
          >
            {option.text}
          </button>
        );
      })}
    </div>
  );
}
