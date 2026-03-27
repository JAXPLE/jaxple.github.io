import { useEffect, useRef, useState } from 'react';

interface Dot {
  x: number;
  y: number;
  id: number;
}

export const CursorTrail: React.FC<{ hackerMode: boolean }> = ({ hackerMode }) => {
  const [dots, setDots] = useState<Dot[]>([]);
  const counter = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const id = counter.current++;
      setDots((prev) => [...prev.slice(-10), { x: e.clientX, y: e.clientY, id }]);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {dots.map((dot, i) => {
        const opacity = (i + 1) / dots.length;
        const size = 4 + (i / dots.length) * 4;
        return (
          <div
            key={dot.id}
            className="pointer-events-none fixed z-40 rounded-full transition-opacity"
            style={{
              left: dot.x - size / 2,
              top: dot.y - size / 2,
              width: size,
              height: size,
              opacity: opacity * 0.5,
              background: hackerMode ? '#10b981' : '#71717a',
              transform: 'translate(-50%, -50%)',
            }}
          />
        );
      })}
    </>
  );
};
