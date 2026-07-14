import React from 'react';
import { Cpu, Target, Zap } from 'lucide-react';
import type { Highlight } from '../data/portfolio';
import { HoverCard } from './HoverCard';

interface AboutSectionProps {
  highlights: Highlight[];
}

const HIGHLIGHT_ICON_MAP: Record<Highlight['icon'], React.ReactNode> = {
  performance: <Zap size={16} className="text-green-400" />,
  realtime: <Target size={16} className="text-blue-400" />,
  automation: <Cpu size={16} className="text-purple-400" />,
};

export const AboutSection: React.FC<AboutSectionProps> = ({ highlights }) => {
  const scrollToProject = (id: string) => {
    window.dispatchEvent(new CustomEvent('highlight-project', { detail: { id } }));
    setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) {
        return;
      }

      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="space-y-3">
      {highlights.map((item, index) => (
        <HoverCard
          key={item.id}
          as="button"
          data-scroll-reveal
          className="cursor-pointer w-full text-left"
          style={{ animationDelay: `${index * 80}ms` }}
          onClick={() => scrollToProject(item.id)}
        >
          <div className="w-full flex gap-4 items-start p-4 text-left">
            <div className="mt-0.5 p-2 rounded-md bg-white/[0.04] border border-white/10 transition-colors shrink-0">
              {HIGHLIGHT_ICON_MAP[item.icon]}
            </div>
            <p className="text-[15px] md:text-base text-[#d4d4d8] font-medium leading-7 group-hover:text-white transition-colors">
              {item.text}
            </p>
          </div>
        </HoverCard>
      ))}
    </div>
  );
};
