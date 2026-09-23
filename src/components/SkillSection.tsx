import type { Skill } from '../data/portfolio';

interface SkillSectionProps {
  skills: Skill[];
}

const SkillItems = ({ items }: { items: string[] }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((item) => (
      <li
        key={item}
        className="whitespace-nowrap rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-sm font-medium leading-6 text-[#d4d4d8]"
      >
        {item}
      </li>
    ))}
  </ul>
);

export const SkillSection: React.FC<SkillSectionProps> = ({ skills }) => (
  <div className="space-y-3">
    {skills.map((skill, index) => (
      <div
        key={skill.category}
        data-scroll-reveal
        className={`rounded-lg border border-white/10 bg-[#121214] p-4 ${'groups' in skill ? 'space-y-4' : 'grid grid-cols-1 gap-3 sm:grid-cols-[140px_minmax(0,1fr)]'}`}
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <h3 className="font-mono text-xs tracking-[0.16em] text-[#a1a1aa] font-bold pt-1">
          {skill.category}
        </h3>
        {'groups' in skill ? (
          <div className="divide-y divide-white/[0.06]">
            {skill.groups.map((group) => (
              <div
                key={group.label}
                className="grid grid-cols-1 items-start gap-2 py-3 first:pt-0 last:pb-0 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-3"
              >
                <h4 className="text-sm font-medium leading-6 text-[#a1a1aa] sm:pt-1">
                  {group.label}
                </h4>
                <SkillItems items={group.items} />
              </div>
            ))}
          </div>
        ) : (
          <SkillItems items={skill.items.split(', ')} />
        )}
      </div>
    ))}
  </div>
);
