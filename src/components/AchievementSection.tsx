import type { Achievement } from '../data/portfolio';

interface AchievementSectionProps {
  achievements: Achievement[];
}

export function AchievementSection({ achievements }: AchievementSectionProps) {
  return (
    <div className="grid border-b border-[var(--color-line)] md:grid-cols-3">
      {achievements.map((achievement, index) => (
        <a
          key={`${achievement.projectId}-${achievement.value}`}
          href={`#${achievement.projectId}`}
          className={`group flex min-h-44 flex-col justify-between py-7 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-text)] md:px-7 ${
            index > 0
              ? 'border-t border-[var(--color-line)] md:border-t-0 md:border-l'
              : ''
          } ${index === 0 ? 'md:pr-7' : ''}`}
        >
          <span className="text-[clamp(1.75rem,4vw,2.4rem)] font-semibold tracking-[-0.04em] text-[var(--color-text)]">
            {achievement.value}
          </span>
          <span className="mt-8 max-w-[15rem] text-sm leading-6 text-[var(--color-muted)] transition-colors duration-200 group-hover:text-[var(--color-text)]">
            {achievement.label}
          </span>
        </a>
      ))}
    </div>
  );
}
