import React, { useState } from 'react';

const CARD_STYLE = {
  inactive: 'border-white/10 bg-[#121214]',
  active:   'border-white/20 bg-[#17171a]',
} as const;

interface HoverCardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onClick'> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: React.ElementType;
}

export const HoverCard: React.FC<HoverCardProps> = ({ children, className = '', onClick, as: Component = 'div', ...props }) => {
  const [isActive, setIsActive] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  return (
    <Component
      {...props}
      className={`group relative rounded-lg border transition-colors duration-200 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 ${isActive ? CARD_STYLE.active : CARD_STYLE.inactive} ${className}`}
      onTouchStart={() => setIsTouch(true)}
      onMouseEnter={() => { if (!isTouch) setIsActive(true); }}
      onMouseLeave={() => { if (!isTouch) setIsActive(false); }}
      onClick={() => {
        if (isTouch) setIsActive(!isActive);
        if (onClick) onClick();
      }}
    >
      <div className="w-full h-full">
        {children}
      </div>
    </Component>
  );
};
