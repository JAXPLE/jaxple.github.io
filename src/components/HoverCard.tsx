import React, { useState } from 'react';
import { BorderBeam } from './BorderBeam';

const CARD_STYLE = {
  inactive: 'border-white/5 bg-[#09090b]/50 backdrop-blur-sm',
  active:   'border-white/40 bg-[#18181b] shadow-[0_40px_80px_rgba(0,0,0,0.6)] scale-[1.02] ring-1 ring-white/20',
} as const;

interface HoverCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const HoverCard: React.FC<HoverCardProps> = ({ children, className = '', onClick, ...props }) => {
  const [isActive, setIsActive] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  return (
    <div
      {...props}
      className={`group relative rounded-2xl border transition-all duration-500 overflow-hidden ${isActive ? CARD_STYLE.active : CARD_STYLE.inactive} ${className}`}
      onTouchStart={() => setIsTouch(true)}
      onMouseEnter={() => { if (!isTouch) setIsActive(true); }}
      onMouseLeave={() => { if (!isTouch) setIsActive(false); }}
      onClick={() => {
        if (isTouch) setIsActive(!isActive);
        if (onClick) onClick();
      }}
    >
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
      <BorderBeam visible={isActive} rounded="rounded-2xl" padding="1px" />
    </div>
  );
};
