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
  const primaryNavigation = corporateNavigation.filter(
    (item) => item.href !== '/contact',
  );
  const contactItem = corporateNavigation.find(
    (item) => item.href === '/contact',
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 text-[#050B33] shadow-sm backdrop-blur-md">
      <div className="mx-auto grid min-h-[76px] max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-6 lg:px-8 xl:grid-cols-[auto_minmax(0,1fr)_auto] xl:gap-5">
        <Link
          href="/"
          aria-label="Nexus Hub home"
          className="flex w-fit shrink-0 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A4DA8] focus-visible:ring-offset-4"
        >
          <NexusHubLogo size={44} showWordmark />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden min-w-0 items-center justify-center xl:flex"
        >
          {primaryNavigation.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`relative whitespace-nowrap rounded-md px-2.5 py-3 text-[13px] font-semibold transition-colors 2xl:px-3 2xl:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A4DA8] focus-visible:ring-offset-2 ${
                  active
                    ? 'text-[#050B33]'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-[#050B33]'
                }`}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-2.5 bottom-1 h-0.5 rounded-full bg-[#4FDCE8]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-self-end">
          {contactItem && (
            <Link
              href={contactItem.href}
              aria-current={
                isActivePath(pathname, contactItem.href) ? 'page' : undefined
              }
              className="hidden min-h-11 items-center justify-center rounded-xl bg-[#FFB84D] px-5 py-3 text-sm font-bold text-[#050B33] shadow-sm transition hover:bg-[#F59A52] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#050B33] focus-visible:ring-offset-2 xl:inline-flex"
            >
              {contactItem.label}
            </Link>
          )}

          <div className="xl:hidden">
            <MobileGlobalNav
              contextLabel="Nexus Hub"
              contextItems={corporateNavigation}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
