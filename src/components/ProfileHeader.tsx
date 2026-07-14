import type { ProfileContent } from '../data/portfolio';

interface ProfileHeaderProps {
  content: ProfileContent;
}

export function ProfileHeader({ content }: ProfileHeaderProps) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <img
          src="https://avatars.githubusercontent.com/u/114869036?v=4"
          alt={content.imageAlt}
          width="56"
          height="56"
          className="h-14 w-14 rounded-full object-cover grayscale"
        />
        <p className="font-mono text-xs tracking-[0.18em] text-[var(--color-muted)] uppercase">
          {content.role}
        </p>
      </div>

      <h1 className="mt-10 text-[clamp(3.4rem,10vw,6.5rem)] leading-[0.88] font-semibold tracking-[-0.065em] text-[var(--color-text)]">
        {content.name}
      </h1>

      <p className="mt-10 max-w-4xl text-[clamp(1.75rem,5vw,3.25rem)] leading-[1.08] tracking-[-0.045em] text-[var(--color-muted)]">
        {content.tagline.prefix}
        <strong className="font-medium text-[var(--color-text)]">
          {content.tagline.firstEmphasis}
        </strong>
        {content.tagline.middle}
        <strong className="font-medium text-[var(--color-text)]">
          {content.tagline.secondEmphasis}
        </strong>
        {content.tagline.suffix}
      </p>

      <nav aria-label="Portfolio" className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
        <a
          href="#work"
          className="inline-flex min-h-11 items-center border-b border-[var(--color-text)] text-sm font-medium transition-colors duration-200 hover:border-[var(--color-muted)] hover:text-[var(--color-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-text)]"
        >
          {content.navigation.work}
        </a>
        <a
          href="#contact"
          className="inline-flex min-h-11 items-center border-b border-transparent text-sm text-[var(--color-muted)] transition-colors duration-200 hover:border-[var(--color-muted)] hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-text)]"
        >
          {content.navigation.contact}
        </a>
      </nav>
    </div>
  );
}
