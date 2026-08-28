'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import NexusHubLogo from '@/components/brand/NexusHubLogo';

import {
  globalNavigation,
  sectionNavigation,
} from '@/config/navigation/site-navigation';

import MobileGlobalNav from './MobileGlobalNav';

type GlobalNavProps = {
  sectionId?: string;
};

const quickLinks = [
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Digital Services',
    href: '/digital/services',
  },
  {
    label: 'Business Services',
    href: '/business/services',
  },
  {
    label: 'Business Solutions',
    href: '/business/solutions',
  },
  {
    label: 'Nexus Hub TV',
    href: '/media/nexus-hub-tv',
  },
  {
    label: 'News',
    href: '/news',
  },
  {
    label: 'Events & Activities',
    href: '/events-activities',
  },
  {
    label: 'Resources',
    href: '/resources',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export default function GlobalNav({
  sectionId,
}: GlobalNavProps) {
  const pathname = usePathname();
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);

  const section = sectionId
    ? sectionNavigation.find(
        (item) => item.id === sectionId,
      )
    : undefined;

  const visibleLabels = section?.globalItems;

  const navigation = visibleLabels
    ? globalNavigation.filter((item) =>
        visibleLabels.includes(item.label),
      )
    : globalNavigation;

  return (
    <header className="relative z-50 w-full">
      <nav
        aria-label="Global navigation"
        className="border-b border-white/10 bg-[#050A30] text-white"
      >
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-6 px-6">
          {/* BRAND */}
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Nexus Hub home"
          >
            <NexusHubLogo
              size={44}
              showWordmark={true}
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-1 md:flex">
            {/* QUICK LINKS */}
            <div className="relative mr-1">
              <button
                type="button"
                onClick={() =>
                  setIsQuickLinksOpen((open) => !open)
                }
                aria-expanded={isQuickLinksOpen}
                aria-haspopup="menu"
                className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition ${
                  isQuickLinksOpen
                    ? 'bg-white/10 text-white'
                    : 'text-white/75 hover:bg-white/5 hover:text-white'
                }`}
              >
                Quick Links

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className={`transition-transform ${
                    isQuickLinksOpen
                      ? 'rotate-180'
                      : ''
                  }`}
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {isQuickLinksOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-xl border border-white/10 bg-[#07123F] p-2 shadow-2xl"
                >
                  <div className="px-3 py-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5FC9E6]">
                      Quick Access
                    </p>
                  </div>

                  {quickLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() =>
                        setIsQuickLinksOpen(false)
                      }
                      className="block rounded-lg px-3 py-2.5 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navigation.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href ||
                    pathname.startsWith(
                      `${item.href}/`,
                    );

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'text-white'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#5FC9E6]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 sm:block"
            >
              Contact
            </Link>

            <MobileGlobalNav
              visibleLabels={visibleLabels}
              quickLinks={quickLinks}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}