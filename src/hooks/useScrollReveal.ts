import { useEffect } from 'react';

const DEFAULT_SELECTOR = '[data-scroll-reveal]';
const VISIBLE_CLASS = 'is-visible';

interface ScrollRevealOptions {
  selector?: string;
  rootMargin?: string;
  threshold?: number;
}

/**
 * 스크롤 진입 시 reveal 대상 요소를 한 번만 표시 상태로 전환합니다.
 */
export function useScrollReveal({
  selector = DEFAULT_SELECTOR,
  rootMargin = '0px 0px -12% 0px',
  threshold = 0.12,
}: ScrollRevealOptions = {}) {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(selector));

    if (!targets.length) {
      return;
    }

    const revealAll = () => {
      targets.forEach((target) => target.classList.add(VISIBLE_CLASS));
    };

    if (!window.IntersectionObserver) {
      revealAll();
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add(VISIBLE_CLASS);
          currentObserver.unobserve(entry.target);
        });
      },
      { rootMargin, threshold },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, selector, threshold]);
}
