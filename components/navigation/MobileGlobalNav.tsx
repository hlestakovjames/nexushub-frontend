'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import {
  globalNavigation,
} from '@/config/navigation/site-navigation';

type QuickLink = {
  label: string;
  href: string;
};

type MobileGlobalNavProps = {
  visibleLabels?: string[];
  quickLinks?: QuickLink[];
};

export default function MobileGlobalNav({
  visibleLabels,
  quickLinks = [],
}: MobileGlobalNavProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] =
    useState(false);

  const navigation = visibleLabels
    ? globalNavigation.filter((item) =>
        visibleLabels.includes(item.label),
      )
    : globalNavigation;

  const closeMenu = () => {
    setIsOpen(false);
    setIsQuickLinksOpen(false);
  };

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={
          isOpen
            ? 'Close navigation menu'
            : 'Open navigation menu'
        }
        aria-expanded={isOpen}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white transition hover:bg-white/10 md:hidden"
      >
        <span className="sr-only">
          {isOpen
            ? 'Close navigation menu'
            : 'Open navigation menu'}
        </span>

        <span className="flex flex-col gap-1.5">
          <span
            className={`block h-0.5 w-5 bg-current transition ${
              isOpen
                ? 'translate-y-2 rotate-45'
                : ''
            }`}
          />

          <span
            className={`block h-0.5 w-5 bg-current transition ${
              isOpen ? 'opacity-0' : ''
            }`}
          />

          <span
            className={`block h-0.5 w-5 bg-current transition ${
              isOpen
                ? '-translate-y-2 -rotate-45'
                : ''
            }`}
          />
        </span>
      </button>

      {/* MOBILE NAVIGATION */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#050A30] text-white shadow-xl md:hidden">
          <nav
            aria-label="Mobile global navigation"
            className="mx-auto max-w-7xl px-6 py-5"
          >
            <div className="flex flex-col gap-1">
              {/* QUICK LINKS */}
              <div>
                <button
                  type="button"
                  onClick={() =>
                    setIsQuickLinksOpen(
                      (open) => !open,
                    )
                  }
                  aria-expanded={isQuickLinksOpen}
                  className="flex w-full items-center justify-between rounded-md px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  <span>Quick Links</span>

                  <svg
                    width="16"
                    height="16"
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
                  <div className="ml-2 border-l border-white/10 pl-2">
                    {quickLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className="block rounded-md px-4 py-2.5 text-sm text-white/65 transition hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="my-2 h-px bg-white/10" />

              {/* MAIN NAVIGATION */}
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
                    onClick={closeMenu}
                    className={`rounded-md px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? 'bg-white/10 text-white'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="my-3 h-px bg-white/10" />

              <Link
                href="/contact"
                onClick={closeMenu}
                className="rounded-md border border-white/15 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}