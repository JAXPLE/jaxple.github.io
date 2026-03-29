import React, { useState, useEffect } from 'react';
import { ChevronRight, Github, BookOpen } from 'lucide-react';
import type { Project, ProjectLink } from '../data/portfolio';
import { BorderBeam } from './BorderBeam';

const LINK_ICON_MAP: Record<ProjectLink['icon'], React.ReactNode> = {
  github: <Github size={14} />,
  notion: <BookOpen size={14} />,
};

const CARD_STYLE = {
  inactive: 'border-white/5 bg-[#09090b]/50 backdrop-blur-sm',
  active:   'border-white/40 bg-[#18181b] shadow-[0_40px_80px_rgba(0,0,0,0.6)] scale-[1.02] ring-1 ring-white/20',
} as const;

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isActive, setIsActive] = useState(false);
  const [isTouch,  setIsTouch]  = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const handleHighlight = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string }>;
      if (customEvent.detail.id === project.id) {
        setIsActive(true);
        setIsHighlighted(true);
        setTimeout(() => setIsHighlighted(false), 2000);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener('highlight-project', handleHighlight);
    return () => window.removeEventListener('highlight-project', handleHighlight);
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
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <h3 className={`text-lg font-bold tracking-tight transition-all duration-300 ${isActive ? 'text-white' : 'text-[#e4e4e7]'}`}>
              {project.title}
            </h3>
            <span className="font-mono text-[11px] tracking-widest text-[#52525b] whitespace-nowrap">{project.period}</span>
          </div>
          <ChevronRight size={16} className={`transition-all duration-500 ${isActive ? 'text-white rotate-90' : 'text-[#27272a] opacity-0'}`} />
        </div>

        <div className="flex flex-wrap gap-1.5 items-center mb-4 transition-all duration-500">
          {project.tech.map((t) => (
            <span key={t} className={`font-mono text-[11px] px-2.5 py-1 rounded-full bg-white/[0.03] border transition-all ${isActive ? 'text-[#a1a1aa] border-white/20' : 'text-[#71717a] border-white/10'}`}>
              {t}
            </span>
          ))}
        </div>

        <div className={`text-sm leading-relaxed mb-1 transition-colors duration-500 ${isActive ? 'text-[#e4e4e7]' : 'text-[#a1a1aa]'}`}>
          <ul className="space-y-1.5">
            {project.desc.map((line, i) => (
              <li key={i} className="flex gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 transition-colors duration-500 ${isActive ? 'bg-[#52525b]' : 'bg-[#27272a]'}`} />
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`grid transition-all duration-700 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="min-h-0 overflow-hidden">
            {hasLinks && (
              <div className={`flex flex-col sm:flex-row sm:flex-wrap sm:justify-end gap-3 px-2 pb-4 pt-5 transition-all duration-700 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                {project.links!.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`group/link relative flex items-center justify-center sm:justify-start gap-3 px-5 py-3 rounded-xl border text-[13px] font-mono font-bold transition-all duration-300 ${link.hoverClass} border-white/5 bg-white/[0.03] hover:scale-[1.05] shadow-xl overflow-hidden w-full sm:w-auto hover:border-white/20`}
                  >
                    <BorderBeam intensity="high" alwaysOn />
                    <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'opacity-100 text-white group-hover/link:text-white' : 'opacity-60 group-hover/link:opacity-100 group-hover/link:text-white'}`}>
                      {LINK_ICON_MAP[link.icon]}
                    </span>
                    <span className={`relative z-10 transition-colors duration-300 whitespace-nowrap ${isActive ? 'opacity-100 text-white group-hover/link:text-white' : 'opacity-60 group-hover/link:opacity-100 group-hover/link:text-white'}`}>
                      {link.text}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <BorderBeam visible={isActive} rounded="rounded-2xl" padding="1px" />
    </div>
  );
};