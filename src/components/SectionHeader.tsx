interface SectionHeaderProps {
  id: string;
  title: string;
}

export function SectionHeader({ id, title }: SectionHeaderProps) {
  return (
    <div className="border-b border-[var(--color-line)] pb-5">
      <h2
        id={id}
        className="font-mono text-xs font-medium tracking-[0.18em] text-[var(--color-muted)] uppercase"
      >
        {title}
      </h2>
    </div>
  );
}
