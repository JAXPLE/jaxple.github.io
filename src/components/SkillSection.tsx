import type { Skill } from '../data/portfolio';

interface SkillSectionProps {
  skills: Skill[];
}

export function SkillSection({ skills }: SkillSectionProps) {
  return (
    <dl>
      {skills.map((skill) => (
        <div
          key={skill.category}
          className="grid gap-3 border-b border-[var(--color-line)] py-7 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8"
        >
          <dt className="font-mono text-xs tracking-[0.12em] text-[var(--color-muted)] uppercase">
            {skill.category}
          </dt>
          <dd className="text-base leading-7 text-[var(--color-text)]">
            {skill.items.join(' · ')}
          </dd>
        </div>
      ))}
    </dl>
  );
}
