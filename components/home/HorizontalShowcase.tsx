'use client';

import { useState } from 'react';
import Link from 'next/link';

type ShowcaseItem = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  action: string;
  external?: boolean;
  accent: string;
  status?: string;
};

type HorizontalShowcaseProps = {
  items: ShowcaseItem[];
  label: string;
  duration?: 'ecosystem' | 'discovery';
  dark?: boolean;
};

export default function HorizontalShowcase({
  items,
  label,
  duration = 'discovery',
  dark = false,
}: HorizontalShowcaseProps) {
  const [paused, setPaused] = useState(false);
  const [reverse, setReverse] = useState(false);

  const renderCard = (item: ShowcaseItem, duplicate = false) => {
    const card = (
      <article
        className={`showcase-card flex h-full flex-col rounded-2xl border p-6 sm:p-7 ${
          dark
            ? 'border-white/15 bg-white/[0.06] text-white hover:border-white/35'
            : 'border-slate-200 bg-white text-[#050B33] shadow-sm hover:shadow-lg'
        }`}
        style={{ borderTopWidth: 3, borderTopColor: item.accent }}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-extrabold tracking-[0.14em]" style={{ color: item.accent }}>
            {item.eyebrow}
          </span>
          {item.status && (
            <span className={`rounded-full px-3 py-1 text-[10px] font-bold ${
              dark ? 'bg-white/10 text-white/75' : 'bg-slate-100 text-slate-600'
            }`}>
              {item.status}
            </span>
          )}
        </div>
        <h3 className="mt-6 text-xl font-extrabold leading-snug">{item.title}</h3>
        <p className={`mt-3 flex-1 text-sm leading-7 ${dark ? 'text-white/65' : 'text-slate-600'}`}>
          {item.description}
        </p>
        <span className={`mt-6 inline-flex items-center text-sm font-bold ${dark ? 'text-[#4FDCE8]' : 'text-[#0A4DA8]'}`}>
          {item.action}<span className="ml-2" aria-hidden="true">→</span>
        </span>
      </article>
    );

    const className = 'block h-full w-[min(82vw,360px)] shrink-0 sm:w-[360px]';
    if (item.external) {
      return (
        <a
          key={duplicate ? `copy-${item.id}` : item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          tabIndex={duplicate ? -1 : 0}
          aria-hidden={duplicate || undefined}
        >
          {card}
        </a>
      );
    }
    return (
      <Link
        key={duplicate ? `copy-${item.id}` : item.id}
        href={item.href}
        className={className}
        tabIndex={duplicate ? -1 : 0}
        aria-hidden={duplicate || undefined}
      >
        {card}
      </Link>
    );
  };

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className={`text-xs font-semibold ${dark ? 'text-white/50' : 'text-slate-500'}`}>
          {paused ? 'Showcase paused' : 'Continuous showcase'}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setReverse((value) => !value)}
            className={`rounded-full border px-4 py-2 text-xs font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              dark ? 'border-white/25 text-white hover:bg-white/10' : 'border-slate-300 text-[#050B33] hover:bg-slate-50'
            }`}
            aria-label="Reverse showcase direction"
          >
            Reverse direction
          </button>
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            className={`rounded-full px-4 py-2 text-xs font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              dark ? 'bg-[#4FDCE8] text-[#050B33] hover:bg-white' : 'bg-[#050B33] text-white hover:bg-[#0A4DA8]'
            }`}
            aria-pressed={paused}
          >
            {paused ? 'Resume' : 'Pause'}
          </button>
        </div>
      </div>

      <div
        className={`showcase-marquee ${duration === 'ecosystem' ? 'showcase-marquee-ecosystem' : 'showcase-marquee-discovery'}`}
        data-paused={paused}
        data-reverse={reverse}
        role="region"
        aria-label={label}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
        }}
        onTouchStart={() => setPaused(true)}
      >
        <div className="showcase-track">
          <div className="showcase-group">{items.map((item) => renderCard(item))}</div>
          <div className="showcase-group" aria-hidden="true">{items.map((item) => renderCard(item, true))}</div>
        </div>
      </div>
      <p className={`mt-4 text-xs ${dark ? 'text-white/45' : 'text-slate-500'}`}>
        {label}. Pause the motion to explore a card, or reverse its direction.
      </p>
    </div>
  );
}
