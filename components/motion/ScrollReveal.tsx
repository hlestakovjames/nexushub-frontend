'use client';

import { useEffect, useRef, type ReactNode } from 'react';

const revealSelector = [
  'main section h2',
  'main section h3',
  'main section p',
  'main section img',
  'main section article',
  'main section a[class*="rounded"]',
  'main section button',
].join(', ');

export default function ScrollReveal({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const sections = root.querySelectorAll<HTMLElement>('main section');

    sections.forEach((section) => {
      const targets = Array.from(section.querySelectorAll<HTMLElement>(revealSelector))
        .filter((element) => !element.closest('[aria-hidden="true"]'));

      targets.forEach((target, index) => {
        target.classList.add('scroll-item-reveal');
        target.style.setProperty('--scroll-reveal-delay', `${Math.min(index % 6, 5) * 85}ms`);
      });
    });

    const targets = root.querySelectorAll<HTMLElement>('.scroll-item-reveal');
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
        rootMargin: '0px 0px -36px 0px',
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return <div ref={rootRef} className="scroll-reveal-root">{children}</div>;
}
