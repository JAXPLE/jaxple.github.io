import React, { useState, useEffect } from 'react';
import { Github, BookOpen } from 'lucide-react';
import type { Project, ProjectLink } from '../data/portfolio';

const LINK_ICON_MAP: Record<ProjectLink['icon'], React.ReactNode> = {
  github: <Github size={14} />,
  notion: <BookOpen size={14} />,
};

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    let highlightTimer: ReturnType<typeof setTimeout> | undefined;

    const handleHighlight = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string }>;
      if (customEvent.detail?.id !== project.id) {
        return;
      }

      setIsHighlighted(true);
      clearTimeout(highlightTimer);
      highlightTimer = setTimeout(() => setIsHighlighted(false), 2000);
    };

    window.addEventListener('highlight-project', handleHighlight);
    return () => {
      window.removeEventListener('highlight-project', handleHighlight);
      clearTimeout(highlightTimer);
    };
  }, [project.id]);

  const hasLinks = !!project.links?.length;

  return (
    <article
      id={project.id}
      className={`relative p-5 md:p-6 rounded-lg border border-white/10 bg-[#121214] scroll-mt-24 transition-colors duration-300 ${isHighlighted ? 'border-white/35 bg-[#17171a]' : ''}`}
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
          <div className="min-w-0 space-y-1">
            <h3 className="text-lg md:text-xl font-bold tracking-tight text-[#f4f4f5] leading-snug">
              {project.title}
            </h3>
          </div>
          <span className="font-mono text-[11px] tracking-widest text-[#71717a] whitespace-nowrap sm:pt-1">{project.period}</span>
        </div>

        <div className="flex flex-wrap gap-1.5 items-center mb-5">
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[#b9b9c0]">
              {t}
            </span>
          ))}
        </div>

        <div className="text-[15px] leading-7 text-[#d4d4d8]">
          <ul className="space-y-2">
            {project.desc.map((line, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-3 w-1 h-1 rounded-full shrink-0 bg-[#71717a]" />
                {line}
              </li>
            ))}
          </ul>
        </div>

        {hasLinks && (
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 pt-5 mt-5 border-t border-white/10">
            {project.links!.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-0 items-center gap-2 rounded-md border border-white/10 bg-white/[0.025] px-3 py-2 text-[12px] font-mono font-semibold text-[#a1a1aa] transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                <span className="shrink-0 text-[#a1a1aa]">
                  {LINK_ICON_MAP[link.icon]}
                </span>
                <span className="min-w-0 break-words">
                  {link.text}
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
