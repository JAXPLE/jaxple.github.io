import { SKILLS_DATA } from '../data/portfolio';

export const SkillSection: React.FC = () => (
  <div className="p-5 rounded-xl bg-[#09090b] border border-[#27272a]">
    <ul className="font-mono text-xs text-[#a1a1aa] space-y-3">
      {SKILLS_DATA.map((skill) => (
        <li key={skill.category} className="flex gap-4">
          <span className="text-[#71717a] w-16">{skill.category}</span>
          <span className="text-white">{skill.items}</span>
        </li>
      ))}
    </ul>
  </div>
);
