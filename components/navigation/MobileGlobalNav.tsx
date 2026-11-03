'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import type { ContextNavigationItem } from '@/config/navigation/context-navigation';

type MobileGlobalNavProps = {
  contextLabel: string;
  contextItems: ContextNavigationItem[];
};

function isActivePath(pathname: string, href: string) {
  return href === '/'
    ? pathname === '/'
    : pathname === href || pathname.startsWith(`${href}/`);
}

export default function MobileGlobalNav({
  contextLabel,
  contextItems,
}: MobileGlobalNavProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-corporate-navigation"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-[#050B33] transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A4DA8] focus-visible:ring-offset-2"
      >
        <span className="sr-only">
          {isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        </span>
        <span className="flex flex-col gap-1.5" aria-hidden="true">
          <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </span>
      </button>

      {isOpen && (
        <div
          id="mobile-corporate-navigation"
          className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(20rem,calc(100vw-2.5rem))] rounded-xl border border-slate-200 bg-white p-3 text-[#050B33] shadow-xl"
        >
          <nav aria-label={`${contextLabel} navigation`}>
            <ul className="space-y-1">
              {contextItems.map((item) => {
                const active = isActivePath(pathname, item.href);
                const isContact = item.href === '/contact';

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={active ? 'page' : undefined}
                      className={
                        isContact
                          ? 'mt-2 flex min-h-11 items-center justify-center rounded-xl bg-[#FFB84D] px-4 py-3 text-sm font-bold text-[#050B33] shadow-sm transition hover:bg-[#F59A52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#050B33] focus-visible:ring-offset-2'
                          : `block rounded-lg px-4 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A4DA8] ${
                              active
                                ? 'bg-slate-100 text-[#050B33]'
                                : 'text-slate-600 hover:bg-slate-50 hover:text-[#050B33]'
                            }`
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
