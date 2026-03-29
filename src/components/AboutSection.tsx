import React from 'react';
import { Target, Zap, Cpu } from 'lucide-react';
import { HoverCard } from './HoverCard';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      id: 'dalso',
      icon: <Zap size={16} className="text-green-400" />,
      text: "3,000개+ 아이템 시세 연산 및 이벤트 최적화 (TPS 3 → 20)"
    },
    {
      id: 'cosmos',
      icon: <Target size={16} className="text-blue-400" />,
      text: "동시성 이슈를 해결한 Event-Driven 실시간 미들웨어 구축"
    },
    {
      id: 'semicon-control',
      icon: <Cpu size={16} className="text-purple-400" />,
      text: "레거시 통신 속도 83% 개선 및 문서 자동화로 소요 시간 93% 단축"
    }
  ];

  const scrollToProject = (id: string) => {
    window.dispatchEvent(new CustomEvent('highlight-project', { detail: { id } }));
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="space-y-4">
      {highlights.map((item, i) => (
        <HoverCard 
          key={i} 
          className="cursor-pointer" 
          onClick={() => scrollToProject(item.id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              scrollToProject(item.id);
            }
          }}
        >
          <div className="w-full flex gap-4 items-start p-4 text-left transition-transform active:scale-[0.98]">
            <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 transition-colors shrink-0">
              {item.icon}
            </div>
            <p className="text-sm md:text-base text-[#71717a] font-medium leading-relaxed group-hover:text-[#a1a1aa] transition-colors">
              {item.text}
            </p>
          </div>
        </HoverCard>
      ))}
    </div>
  );
};
