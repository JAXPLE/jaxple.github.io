import { useEffect, useRef, useState } from 'react';

export function useGimmicks() {
  const [mousePosition, setMousePosition] = useState({ x: -9999, y: -9999 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hackerMode, setHackerMode] = useState(false);
  const [idle, setIdle] = useState(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // 마우스 이동 시 스포트라이트 위치 갱신 및 4초 유휴 감지
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIdle(false);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setIdle(true), 4000);
    };

    // 스크롤 진행도(%) 계산
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    // 키보드로 "jaxple" 입력 시 해커 모드 토글
    let keys: string[] = [];
    const secret = 'jaxple';
    const handleKeyDown = (e: KeyboardEvent) => {
      keys.push(e.key.toLowerCase());
      if (keys.length > secret.length) keys.shift();
      if (keys.join('') === secret) {
        setHackerMode((prev) => !prev);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    // 개발자 도구 콘솔 이스터에그
    console.log(
      '%c Welcome in my Portfolio 🚀',
      'color: #10b981; font-size: 24px; font-weight: bold;'
    );
    console.log(
      '%c"견고한 아키텍처 설계와 성능 최적화에 집중합니다."\n[System Auth]: JwonLEE_Session Established.\n[Status]: TPS Stable. All systems operational.',
      'color: #a1a1aa; font-size: 13px; font-style: italic;'
    );

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  return { mousePosition, scrollProgress, hackerMode, idle };
}
