import { useEffect, useRef, useState, useCallback } from 'react';

export function useGimmicks() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hackerMode, setHackerMode] = useState(false);
  const [idle, setIdle] = useState(true);
  const keyBuffer = useRef('');
  const idleTimer = useRef<ReturnType<typeof setTimeout>>();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    setIdle(false);
    clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => setIdle(true), 3000);
  }, []);

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    setScrollProgress(scrollHeight <= clientHeight ? 0 : (scrollTop / (scrollHeight - clientHeight)) * 100);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    keyBuffer.current = (keyBuffer.current + e.key).slice(-6);
    if (keyBuffer.current === 'jaxple') {
      setHackerMode((prev) => !prev);
      keyBuffer.current = '';
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(idleTimer.current);
    };
  }, [handleMouseMove, handleScroll, handleKeyDown]);

  return { scrollProgress, hackerMode, idle };
}
