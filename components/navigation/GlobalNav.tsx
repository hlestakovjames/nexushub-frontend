'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import NexusHubLogo from '@/components/brand/NexusHubLogo';
import { corporateNavigation } from '@/config/navigation/context-navigation';

import MobileGlobalNav from './MobileGlobalNav';

function isActivePath(pathname: string, href: string) {
  return href === '/'
    ? pathname === '/'
    : pathname === href || pathname.startsWith(`${href}/`);
}

export default function GlobalNav() {
  const pathname = usePathname();
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setShowWhatsApp(window.scrollY > 320);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 text-[#050B33] shadow-sm backdrop-blur-md">
      <div className="relative mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Nexus Hub home"
          className="flex shrink-0 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A4DA8] focus-visible:ring-offset-4"
        >
          <NexusHubLogo size={44} showWordmark />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-2 md:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2"
        >
          {corporateNavigation.map((item) => {
            const active = isActivePath(pathname, item.href);
            const isContact = item.href === '/contact';

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={
                  isContact
                    ? 'ml-2 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#FFB84D] px-5 py-3 text-sm font-bold text-[#050B33] shadow-sm transition hover:bg-[#F59A52] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#050B33] focus-visible:ring-offset-2'
                    : `relative rounded-md px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A4DA8] focus-visible:ring-offset-2 ${
                        active
                          ? 'text-[#050B33]'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-[#050B33]'
                      }`
                }
              >
                {item.label}
                {!isContact && active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-4 bottom-1 h-0.5 rounded-full bg-[#4FDCE8]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="md:hidden">
          <MobileGlobalNav
            contextLabel="Nexus Hub"
            contextItems={corporateNavigation}
          />
        </div>
      </div>

      <a
        href="https://wa.me/254713290745"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Nexus Hub on WhatsApp"
        title="Chat with Nexus Hub on WhatsApp"
        tabIndex={showWhatsApp ? 0 : -1}
        className={`fixed bottom-6 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_rgba(0,0,0,0.22)] transition-[opacity,transform,box-shadow] duration-500 ease-out hover:scale-105 hover:shadow-[0_10px_32px_rgba(0,0,0,0.3)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/35 focus-visible:ring-offset-2 sm:bottom-8 sm:right-8 motion-reduce:transition-none ${showWhatsApp ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-4 scale-90 opacity-0'}`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L.1 24l6.28-1.65a11.88 11.88 0 0 0 5.7 1.45h.01c6.55 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.47-8.42Zm-8.44 18.3h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.88 9.88 0 1 1 8.37 4.62Zm5.42-7.4c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.23-.66.08-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.69-1.66-.94-2.27-.25-.6-.5-.52-.69-.53h-.58c-.2 0-.53.08-.81.38-.28.3-1.06 1.04-1.06 2.54s1.09 2.95 1.24 3.15c.15.2 2.15 3.28 5.2 4.6.73.32 1.3.51 1.75.65.74.23 1.41.2 1.94.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
        </svg>
      </a>
    </header>
  );
}
