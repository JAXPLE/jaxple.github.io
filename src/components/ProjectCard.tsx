import React, { useState } from 'react';
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
  desc: string | string[];
  tech: string[];
  links?: LinkType[];
}

interface ProjectCardProps {
  project: ProjectType;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isActive, setIsActive] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const getIcon = (type: string) => {
    if (type === 'github') return <Github size={14} />;
    return <BookOpen size={14} />;
  };

  const hasLinks = project.links && project.links.length > 0;

  return (
    <div 
      className={`relative p-4 md:p-5 rounded-xl border transition-all duration-300 cursor-default ${isActive ? 'border-[#52525b] bg-[#121214] shadow-[0_8px_24px_rgba(0,0,0,0.3)]' : 'border-[#27272a] bg-[#09090b]'}`}
      onTouchStart={() => setIsTouch(true)}
      onMouseEnter={() => { if (!isTouch) setIsActive(true); }}
      onMouseLeave={() => { if (!isTouch) setIsActive(false); }}
      onClick={() => { if (isTouch) setIsActive(!isActive); }}
    >
      <div className="flex justify-between items-start mb-2 relative z-10">
        <h3 className={`font-medium flex items-center gap-2 transition-colors ${isActive ? 'text-green-400' : 'text-white'}`}>
          <ChevronRight size={14} className={`transition-all duration-300 ${isActive ? 'text-green-400 translate-x-1' : 'text-[#52525b]'}`} />
          {project.title}
        </h3>
        <span className="font-mono text-[10px] text-[#52525b] mt-1 shrink-0 ml-2">{project.period}</span>
      </div>
      
      <div className={`text-sm ml-5 leading-relaxed mb-4 relative z-10 transition-colors duration-500 ${isActive ? 'text-[#d4d4d8]' : 'text-[#a1a1aa]'}`}>
        {Array.isArray(project.desc) ? (
          <ul className="list-disc pl-4 space-y-1.5 marker:text-[#52525b]">
            {project.desc.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        ) : (
          <p>{project.desc}</p>
        )}
      </div>
      
      {/* 기술 스택 / 링크 전환 영역 */}
      <div className="relative ml-5 h-8">
        {/* 기술 스택 태그 */}
        <div
          className="absolute inset-0 flex flex-wrap gap-2 content-start transition-all duration-300 will-change-[opacity,transform]"
          style={{
            opacity: hasLinks && isActive ? 0 : 1,
            transform: hasLinks && isActive ? 'translateY(-4px)' : 'translateY(0)',
            pointerEvents: hasLinks && isActive ? 'none' : 'auto',
          }}
        >
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-[10px] px-2 py-1 rounded-md bg-[#18181b] border border-[#27272a] text-[#d4d4d8]">
              {t}
            </span>
          ))}
        </div>

        {/* 활성화 시 링크 버튼 */}
        {hasLinks && (
          <div
            className="absolute inset-0 flex flex-wrap gap-2 content-start transition-all duration-300 will-change-[opacity,transform]"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'translateY(0)' : 'translateY(4px)',
              pointerEvents: isActive ? 'auto' : 'none',
            }}
          >
            {project.links!.map((linkItem, idx) => (
              <a
                key={idx}
                href={linkItem.url}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#27272a]/95 border border-[#3f3f46] text-[#e4e4e7] text-[10px] font-mono font-medium transition-all duration-200 hover:scale-[1.03] ${linkItem.hoverClass}`}
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
