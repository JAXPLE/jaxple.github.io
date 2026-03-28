interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
  <div className="flex items-center gap-2 font-mono text-sm text-[#71717a] pb-2 border-b border-[#27272a] mb-4">
    <span>{title}</span>
  </div>
);
