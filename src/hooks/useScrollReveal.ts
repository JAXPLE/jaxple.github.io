import { useEffect } from 'react';

const DEFAULT_SELECTOR = '[data-scroll-reveal]';
// Keep observer-owned state separate from React's className updates.
const VISIBLE_ATTRIBUTE = 'data-scroll-visible';

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
      targets.forEach((target) => target.setAttribute(VISIBLE_ATTRIBUTE, 'true'));
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

          entry.target.setAttribute(VISIBLE_ATTRIBUTE, 'true');
          currentObserver.unobserve(entry.target);
        });
      },
      { rootMargin, threshold },
    );

    targets.forEach((target) => observer.observe(target));

    const revealFocused = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>(selector);
      if (!target) return;

      target.setAttribute(VISIBLE_ATTRIBUTE, 'true');
      target.setAttribute('data-scroll-instant', 'true');
      observer.unobserve(target);
    };
    document.addEventListener('focusin', revealFocused);

    return () => {
      observer.disconnect();
      document.removeEventListener('focusin', revealFocused);
    };
  }, [rootMargin, selector, threshold]);
}
