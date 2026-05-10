interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
  <div className="flex items-center gap-3 font-mono text-sm text-[#a1a1aa] pb-3 border-b border-white/10 mb-1">
    <span>{title}</span>
    <span className="h-px flex-1 bg-white/[0.04]" />
  </div>
);
