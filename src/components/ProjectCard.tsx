import type React from 'react';
import { Github, BookOpen, Globe } from 'lucide-react';
import type { Project, ProjectLink } from '../data/portfolio';

const LINK_ICON_MAP: Record<ProjectLink['icon'], React.ReactNode> = {
  github: <Github size={14} />,
  notion: <BookOpen size={14} />,
  website: <Globe size={14} />,
};

interface ProjectCardProps {
  project: Project;
}

const ACCENT_STYLES = {
  red: {
    card: 'border-red-400/60 bg-red-500/[0.08] shadow-[0_0_24px_-12px_rgba(248,113,113,0.5)]',
    badge: 'border-red-400/40 bg-red-400/15 text-red-300',
    dot: 'bg-red-300',
    title: 'text-red-200',
    period: 'text-red-300',
  },
  white: {
    card: 'border-white/25 bg-white/[0.04]',
    badge: 'border-white/20 bg-white/[0.06] text-white/80',
    dot: 'bg-white/70',
    title: 'text-[#f4f4f5]',
    period: 'text-white/60',
  },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const hasLinks = !!project.links?.length;
  const accent = project.ongoingLabel ? ACCENT_STYLES[project.accent ?? 'white'] : undefined;

  return (
    <article
      id={project.id}
      tabIndex={-1}
      aria-labelledby={`${project.id}-title`}
      className={`relative p-5 md:p-6 rounded-lg border scroll-mt-24 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${accent?.card ?? 'border-white/10 bg-[#121214]'}`}
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
          <div className="min-w-0 space-y-2">
            {project.ongoingLabel && (
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${accent?.badge}`}>
                <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${accent?.dot}`} />
                {project.ongoingLabel}
              </span>
            )}
            <h3 id={`${project.id}-title`} className={`text-lg md:text-xl font-bold tracking-tight leading-snug ${accent?.title ?? 'text-[#f4f4f5]'}`}>
              {project.title}
            </h3>
          </div>
          {project.period && (
            <span className={`font-mono text-[11px] tracking-widest whitespace-nowrap sm:pt-1 ${accent?.period ?? 'text-[#71717a]'}`}>{project.period}</span>
          )}
        </div>

        <div className={`flex flex-wrap gap-1.5 items-center ${project.desc.length ? 'mb-5' : ''}`}>
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[#b9b9c0]">
              {t}
            </span>
          ))}
        </div>

        {project.desc.length > 0 && (
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
        )}

        {hasLinks && (
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 pt-5 mt-5 border-t border-white/10">
            {project.links!.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 min-w-0 items-center gap-2 rounded-md border border-white/10 bg-white/[0.025] px-3 py-2 text-[12px] font-mono font-semibold text-[#a1a1aa] transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
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
