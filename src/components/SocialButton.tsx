import React from 'react';

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
  const commonClasses = `relative overflow-hidden w-full sm:w-auto lg:w-full group flex items-center justify-center lg:justify-start h-11 px-5 rounded-md bg-white/[0.03] border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 ${isCopied ? 'border-green-500/50 bg-green-500/10' : `border-white/10 ${hoverColorClass}`}`;
  
  const content = (
    <>
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
