import React from 'react';

interface HoverCardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onClick'> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: React.ElementType;
}

export const HoverCard: React.FC<HoverCardProps> = ({ children, className = '', onClick, as: Component = 'div', ...props }) => {
  return (
    <Component
      {...props}
      type={Component === 'button' ? 'button' : undefined}
      className={`group relative rounded-lg border border-white/10 bg-[#121214] hover:border-white/20 hover:bg-[#17171a] active:bg-[#17171a] focus-visible:bg-[#17171a] transition-colors duration-200 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${className}`}
      onClick={onClick}
    >
      <div className="w-full h-full">
        {children}
      </div>
    </Component>
  );
};
