'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 text-[#050B33] shadow-sm backdrop-blur-md">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Nexus Hub home"
          className="flex shrink-0 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A4DA8] focus-visible:ring-offset-4"
        >
          <NexusHubLogo size={44} showWordmark />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-2 md:flex"
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
    </header>
  );
}
