'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export default function ScrollReveal({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>('main section');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    targets.forEach((target) => target.classList.add('scroll-reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -48px 0px',
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return <div ref={rootRef} className="scroll-reveal-root">{children}</div>;
}
