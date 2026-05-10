import { SKILLS_DATA } from '../data/portfolio';

export const SkillSection: React.FC = () => (
  <div className="space-y-3">
    {SKILLS_DATA.map((skill) => (
      <div
        key={skill.category}
        className="grid grid-cols-1 sm:grid-cols-[140px_minmax(0,1fr)] gap-3 rounded-lg border border-white/10 bg-[#121214] p-4"
      >
        <h4 className="font-mono text-xs tracking-[0.16em] text-[#8b8b93] font-bold pt-1">
          {skill.category}
        </h4>
        <div className="flex flex-wrap gap-2">
          {skill.items.split(', ').map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[#d4d4d8] text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);
