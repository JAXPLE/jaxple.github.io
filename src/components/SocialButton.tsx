import React from 'react';
import { BorderBeam } from './BorderBeam';

interface SocialButtonProps {
  href?: string;
  onClick?: (e: React.MouseEvent | React.TouchEvent) => void;
  icon: React.ReactNode;
  label: string;
  isCopied?: boolean;
  hoverColorClass: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  href,
  onClick,
  icon,
  label,
  isCopied,
  hoverColorClass,
}) => {
  const commonClasses = `relative overflow-hidden w-full sm:w-auto group flex items-center justify-center h-11 px-5 rounded-xl bg-white/[0.03] border transition-all duration-300 ${isCopied ? 'border-green-500/50 bg-green-500/10' : `border-white/5 ${hoverColorClass}`}`;
  
  const content = (
    <>
      <BorderBeam intensity="high" />
      <span className="relative z-10 text-[#a1a1aa] group-hover:text-white transition-colors mr-2.5 flex items-center">
        {icon}
      </span>
      <span className={`relative z-10 font-mono text-xs font-semibold whitespace-nowrap transition-colors outline-none ${isCopied ? 'text-green-400' : 'text-[#a1a1aa] group-hover:text-white'}`}>
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={commonClasses} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={commonClasses}>
      {content}
    </button>
  );
};
