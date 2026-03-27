import { ChevronRight, Github, BookOpen } from 'lucide-react';

interface LinkType {
  icon: string;
  text: string;
  url: string;
  hoverClass: string;
}

interface ProjectType {
  id: string;
  title: string;
  period: string;
  desc: string;
  tech: string[];
  links?: LinkType[];
}

interface ProjectCardProps {
  project: ProjectType;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getIcon = (type: string) => {
    if (type === 'github') return <Github size={14} />;
    return <BookOpen size={14} />;
  };

  const hasLinks = project.links && project.links.length > 0;

  return (
    <div className="group relative p-4 md:p-5 rounded-xl bg-[#09090b] border border-[#27272a] hover:border-[#52525b] hover:bg-[#121214] transition-all duration-500 cursor-default">
      <div className="flex justify-between items-start mb-2 relative z-10">
        <h3 className="text-white font-medium flex items-center gap-2 group-hover:text-green-400 transition-colors">
          <ChevronRight size={14} className="text-[#52525b] group-hover:text-green-400 transition-transform duration-300 group-hover:translate-x-1" />
          {project.title}
        </h3>
        <span className="font-mono text-[10px] text-[#52525b] mt-1 shrink-0 ml-2">{project.period}</span>
      </div>
      
      <p className="text-sm text-[#a1a1aa] ml-5 leading-relaxed mb-4 relative z-10 group-hover:text-[#d4d4d8] transition-colors duration-500">
        {project.desc}
      </p>
      
      {/* Tech Stack Region */}
      <div className="relative ml-5">
        <div className={`flex flex-wrap gap-2 transition-all duration-500 ease-in-out ${hasLinks ? 'opacity-100 group-hover:opacity-0 group-hover:-translate-y-2 pointer-events-auto group-hover:pointer-events-none' : ''}`}>
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-[10px] px-2 py-1 rounded-md bg-[#18181b] border border-[#27272a] text-[#d4d4d8]">
              {t}
            </span>
          ))}
        </div>

        {/* Hover Buttons Region (Absolute overlaying the tech stack) */}
        {hasLinks && (
          <div className="absolute top-[-2px] left-0 flex flex-wrap gap-2 w-full opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 z-20">
            {project.links!.map((linkItem, idx) => (
              <a 
                key={idx}
                href={linkItem.url} 
                target="_blank" 
                rel="noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-[#27272a]/95 backdrop-blur-sm border border-[#3f3f46] text-[#e4e4e7] text-xs font-mono font-medium shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] ${linkItem.hoverClass}`}
              >
                {getIcon(linkItem.icon)}
                {linkItem.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
