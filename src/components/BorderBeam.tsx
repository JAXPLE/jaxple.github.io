import React from 'react';

const MASK_STYLE: React.CSSProperties = {
  maskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
  maskClip: 'content-box, border-box',
  WebkitMaskComposite: 'xor',
  maskComposite: 'exclude',
};

interface BorderBeamProps {
  visible?: boolean;
  rounded?: string;
  padding?: string;
  intensity?: 'low' | 'high';
  alwaysOn?: boolean;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  visible = false,
  rounded = 'rounded-xl',
  padding = '1.2px',
  intensity = 'low',
  alwaysOn = false,
}) => {
  const opacity = intensity === 'high' ? '0.7' : '0.3';
  const visibilityClass = alwaysOn
    ? 'opacity-100'
    : visible
      ? 'opacity-100'
      : 'opacity-0 group-hover:opacity-100';

  return (
    <div
      className={`absolute inset-0 ${rounded} pointer-events-none overflow-hidden z-0 transition-opacity duration-500 ${visibilityClass}`}
      style={{ ...MASK_STYLE, padding }}
    >
      <div
        className={`absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0,rgba(255,255,255,${opacity})_10%,transparent_20%)] animate-[border-beam_4s_ease-in-out_infinite]`}
      />
    </div>
  );
};
