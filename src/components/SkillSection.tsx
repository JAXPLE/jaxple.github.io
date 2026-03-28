import { SKILLS_DATA } from '../data/portfolio';

export const SkillSection: React.FC = () => (
  <div className="space-y-8">
    {SKILLS_DATA.map((skill) => (
      <div key={skill.category} className="space-y-3">
        <h4 className="font-mono text-xs tracking-[0.2em] text-[#52525b] font-bold">
          {skill.category}
        </h4>
        <div className="flex flex-wrap gap-2">
          {skill.items.split(', ').map((item) => (
            <span 
              key={item}
              className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-[#a1a1aa] text-sm font-medium hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 pointer-events-none"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);
