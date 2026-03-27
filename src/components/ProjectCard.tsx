import React, { useState } from 'react';
import { ChevronRight, Github, BookOpen } from 'lucide-react';
import type { Project, ProjectLink } from '../data/portfolio';

const LINK_ICON_MAP: Record<ProjectLink['icon'], React.ReactNode> = {
  github: <Github size={14} />,
  notion: <BookOpen size={14} />,
};

const CARD_STYLE = {
  inactive: 'border-[#27272a] bg-[#09090b]',
  active:   'border-[#52525b] bg-[#121214] shadow-[0_8px_24px_rgba(0,0,0,0.3)]',
} as const;

const OVERLAY_STYLE = (visible: boolean) => ({
  opacity:       visible ? 1 : 0,
  transform:     visible ? 'translateY(0)' : 'translateY(4px)',
  pointerEvents: (visible ? 'auto' : 'none') as React.CSSProperties['pointerEvents'],
});

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isActive, setIsActive] = useState(false);
  const [isTouch,  setIsTouch]  = useState(false);

  const hasLinks = !!project.links?.length;

  return (
    <div
      className={`relative p-4 md:p-5 rounded-xl border transition-all duration-300 cursor-default ${isActive ? CARD_STYLE.active : CARD_STYLE.inactive}`}
      onTouchStart={() => setIsTouch(true)}
      onMouseEnter={() => { if (!isTouch) setIsActive(true);  }}
      onMouseLeave={() => { if (!isTouch) setIsActive(false); }}
      onClick={()   => { if (isTouch)  setIsActive(!isActive); }}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className={`font-medium flex items-center gap-2 transition-colors ${isActive ? 'text-green-400' : 'text-white'}`}>
          <ChevronRight size={14} className={`transition-all duration-300 ${isActive ? 'text-green-400 translate-x-1' : 'text-[#52525b]'}`} />
          {project.title}
        </h3>
        <span className="font-mono text-[10px] text-[#52525b] mt-1 shrink-0 ml-2">{project.period}</span>
      </div>

      <div className={`text-sm ml-5 leading-relaxed mb-4 transition-colors duration-500 ${isActive ? 'text-[#d4d4d8]' : 'text-[#a1a1aa]'}`}>
        <ul className="list-disc pl-4 space-y-1.5 marker:text-[#52525b]">
          {project.desc.map((line, i) => <li key={i}>{line}</li>)}
        </ul>
      </div>

      {/* 변경된 부분: h-8 대신 grid를 사용하고, 내부 absolute 대신 col-start-1 row-start-1 사용 */}
      <div className="relative ml-5 grid">
        <div
          className="col-start-1 row-start-1 flex flex-wrap gap-2 content-start transition-all duration-300 will-change-[opacity,transform]"
          style={OVERLAY_STYLE(!hasLinks || !isActive)}
        >
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-[10px] px-2 py-1 rounded-md bg-[#18181b] border border-[#27272a] text-[#d4d4d8]">{t}</span>
          ))}
        </div>

        {hasLinks && (
          <div
            className="col-start-1 row-start-1 flex flex-wrap gap-2 content-start transition-all duration-300 will-change-[opacity,transform]"
            style={OVERLAY_STYLE(isActive)}
          >
            {project.links!.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#27272a]/95 border border-[#3f3f46] text-[#e4e4e7] text-[10px] font-mono font-medium transition-all duration-200 hover:scale-[1.03] ${link.hoverClass}`}
              >
                {LINK_ICON_MAP[link.icon]}
                {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};