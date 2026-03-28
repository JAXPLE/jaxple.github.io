import { SKILLS_DATA } from '../data/portfolio';

export const SkillSection: React.FC = () => (
  <div className="space-y-4">
    {SKILLS_DATA.map((skill) => (
      <div 
        key={skill.category}
        className="rounded-2xl border border-white/5 bg-[#09090b]/50 backdrop-blur-sm p-5 space-y-3"
      >
        <h4 className="font-mono text-xs tracking-[0.2em] text-[#52525b] font-bold">
          {skill.category}
        </h4>
        <div className="flex flex-wrap gap-2">
          {skill.items.split(', ').map((item) => (
            <span 
              key={item}
              className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-[#a1a1aa] text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);
