import React, { useState, useEffect } from 'react';
import { ChevronRight, Github, BookOpen } from 'lucide-react';
import type { Project, ProjectLink } from '../data/portfolio';

const LINK_ICON_MAP: Record<ProjectLink['icon'], React.ReactNode> = {
  github: <Github size={14} />,
  notion: <BookOpen size={14} />,
};

const CARD_STYLE = {
  inactive: 'border-white/5 bg-[#09090b]/50 backdrop-blur-sm',
  active:   'border-white/30 bg-[#0c0c0e] shadow-[0_30px_60px_rgba(0,0,0,0.5)] scale-[1.01]',
} as const;

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isActive, setIsActive] = useState(false);
  const [isTouch,  setIsTouch]  = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const handleHighlight = (e: CustomEvent) => {
      if (e.detail.id === project.id) {
        setIsActive(true);
        setIsHighlighted(true);
        setTimeout(() => setIsHighlighted(false), 2000);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener('highlight-project' as any, handleHighlight as any);
    return () => window.removeEventListener('highlight-project' as any, handleHighlight as any);
  }, [project.id]);

  const hasLinks = !!project.links?.length;

  return (
    <div
      id={project.id}
      className={`group relative p-5 rounded-2xl border transition-all duration-500 cursor-default overflow-hidden scroll-mt-24 ${isActive ? CARD_STYLE.active : CARD_STYLE.inactive} ${isHighlighted ? 'ring-2 ring-white/50 shadow-[0_0_30px_rgba(255,255,255,0.1)]' : ''}`}
      onTouchStart={() => setIsTouch(true)}
      onMouseEnter={() => { if (!isTouch) setIsActive(true);  }}
      onMouseLeave={() => { if (!isTouch) setIsActive(false); }}
      onClick={()   => { if (isTouch)  setIsActive(!isActive); }}
    >
      <div className="relative z-10 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <h3 className={`text-lg font-bold tracking-tight transition-all duration-300 ${isActive ? 'text-white' : 'text-[#e4e4e7]'}`}>
              {project.title}
            </h3>
            <span className="font-mono text-[11px] tracking-widest text-[#52525b] whitespace-nowrap">{project.period}</span>
          </div>
          <ChevronRight size={16} className={`transition-all duration-500 ${isActive ? 'text-white rotate-90' : 'text-[#27272a] opacity-0'}`} />
        </div>

        <div className={`text-sm leading-relaxed mb-4 transition-colors duration-500 ${isActive ? 'text-[#a1a1aa]' : 'text-[#71717a]'}`}>
          <ul className="space-y-1.5">
            {project.desc.map((line, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#27272a] shrink-0" />
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto space-y-3">
          <div className="flex flex-wrap gap-1.5 items-center">
            {project.tech.map((t) => (
              <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#52525b] group-hover:text-[#a1a1aa] group-hover:border-white/20 transition-all">
                {t}
              </span>
            ))}
          </div>

          <div 
            className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
          >
            <div className="overflow-hidden">
              {hasLinks && (
                <div className="flex justify-end gap-2 pb-1">
                  {project.links!.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all duration-300 ${link.hoverClass} border-white/5 bg-white/[0.03] hover:scale-105 group/link shadow-sm`}
                    >
                      <span className="opacity-60 group-hover/link:opacity-100 transition-opacity">
                        {LINK_ICON_MAP[link.icon]}
                      </span>
                      <span className="opacity-60 group-hover/link:opacity-100 transition-opacity whitespace-nowrap">
                        {link.text}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};