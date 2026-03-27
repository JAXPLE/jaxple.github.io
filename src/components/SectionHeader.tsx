import type { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-2 font-mono text-xs text-[#71717a] pb-2 border-b border-[#27272a] mb-4">
    <Icon size={14} />
    <span>{title}</span>
  </div>
);
