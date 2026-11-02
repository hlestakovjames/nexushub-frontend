'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import NexusHubLogo from '@/components/brand/NexusHubLogo';
import {
  corporateNavigation,
  resolveNavigationContext,
  type ContextNavigationItem,
} from '@/config/navigation/context-navigation';

import MobileGlobalNav from './MobileGlobalNav';

const quickLinks = [
  { label: 'Explore our services', href: '/services' },
  { label: 'Products and innovations', href: '/products' },
  { label: 'Our projects', href: '/projects' },
  { label: 'Publications and insights', href: '/publications' },
  { label: 'Events', href: '/events' },
  { label: 'Opportunities', href: '/opportunities' },
  { label: 'Explore the ecosystem', href: '/ecosystem' },
  { label: 'Contact Nexus Hub', href: '/contact' },
  {
    label: 'Nexus Hub TV',
    href: 'https://nexushub-media.vercel.app/',
  },
];

function isActivePath(pathname: string, href: string) {
  return href === '/'
    ? pathname === '/'
    : pathname === href || pathname.startsWith(`${href}/`);
}

function ContextItem({
  item,
  pathname,
}: {
  item: ContextNavigationItem;
  pathname: string;
}) {
  const active = isActivePath(pathname, item.href);

  return (
    <Link
      href={item.href}
      className={`relative shrink-0 px-3 py-4 text-[13px] font-bold tracking-[0.02em] transition ${
        active
          ? 'text-[#050A30]'
          : 'text-[#050A30]/65 hover:text-[#050A30]'
      }`}
    >
      {item.label}

      {active && (
        <span className="absolute bottom-1.5 left-3 right-3 h-0.5 rounded-full bg-[#5FC9E6]" />
      )}
    </Link>
  );
}

export default function GlobalNav() {
  const pathname = usePathname();
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const context = resolveNavigationContext(pathname);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-white/10 bg-[#050A30] text-white">
        <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-between gap-4 px-6">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsQuickLinksOpen((open) => !open)}
              aria-expanded={isQuickLinksOpen}
              aria-haspopup="menu"
              className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90 transition hover:bg-white/10 hover:text-white"
            >
              Quick Links
              <span aria-hidden="true">
                {isQuickLinksOpen ? '−' : '+'}
              </span>
            </button>

            {isQuickLinksOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-2 w-[min(22rem,calc(100vw-3rem))] overflow-hidden rounded-xl border border-white/10 bg-[#07123F] p-3 shadow-2xl"
              >
                {quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={() => setIsQuickLinksOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-white/80 transition hover:bg-white/10 hover:text-[#5FC9E6]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="hidden items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/90 sm:flex">
            <Link href="tel:0728812649" className="transition hover:text-[#5FC9E6]">
              Call Us
            </Link>

            <Link
              href="https://wa.me/254713290745"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#5FC9E6]"
            >
              WhatsApp
            </Link>

            <Link
              href="/contact?channel=support"
              className="transition hover:text-[#5FC9E6]"
            >
              Client Support
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b border-[#050A30]/10 bg-white text-[#050A30] shadow-sm">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center">
          <Link
            href="/"
            aria-label="Nexus Hub home"
            className="flex shrink-0 items-center px-6"
          >
            <NexusHubLogo size={40} showWordmark={true} />
          </Link>

          <nav
            aria-label="Corporate navigation"
            className="hidden min-w-0 flex-1 items-center overflow-x-auto md:flex"
          >
            {corporateNavigation.map((item) => (
              <ContextItem
                key={item.href}
                item={item}
                pathname={pathname}
              />
            ))}
          </nav>

          <div className="ml-auto pr-6 md:hidden">
            <MobileGlobalNav
              contextLabel={context.label}
              contextItems={context.items}
              quickLinks={quickLinks}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
