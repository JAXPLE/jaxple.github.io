import type { Project } from '../data/portfolio';

interface ProjectEntryProps {
  project: Project;
}

export function ProjectEntry({ project }: ProjectEntryProps) {
  return (
    <article
      id={project.id}
      className="scroll-mt-10 border-b border-[var(--color-line)] py-10 md:py-12"
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-8">
        <h3 className="text-2xl font-medium tracking-[-0.035em] text-[var(--color-text)] md:text-3xl">
          {project.title}
        </h3>
        <p className="shrink-0 font-mono text-xs tracking-[0.08em] text-[var(--color-muted)]">
          {project.period}
        </p>
      </div>

      <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--color-text)] md:text-xl md:leading-9">
        {project.summary}
      </p>

      <ul className="mt-6 max-w-3xl space-y-3 text-[15px] leading-7 text-[var(--color-muted)] md:text-base">
        {project.details.map((detail) => (
          <li key={detail} className="flex gap-3">
            <span aria-hidden="true" className="text-[var(--color-line-strong)]">
              —
            </span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      <p className="mt-7 font-mono text-xs leading-6 tracking-[0.04em] text-[var(--color-muted)]">
        {project.tech.join(' · ')}
      </p>

      {project.links?.length ? (
        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center border-b border-transparent text-sm text-[var(--color-muted)] transition-colors duration-200 hover:border-[var(--color-muted)] hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-text)]"
            >
              {link.text}
              <span aria-hidden="true" className="ml-2">
                ↗
              </span>
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
