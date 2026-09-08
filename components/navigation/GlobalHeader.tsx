import Link from 'next/link';

import NexusHubLogo from '@/components/brand/NexusHubLogo';

const globalNavigation = [
  { label: 'About', href: '/about' },
  { label: 'Media', href: '/media' },
  { label: 'Digital', href: '/digital' },
  { label: 'Business', href: '/business' },
];

export default function GlobalHeader() {
  return (
    <header className="border-b border-[#050A30]/10 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Nexus Hub home">
          <NexusHubLogo size={42} />
        </Link>

        <nav
          aria-label="Legacy global navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {globalNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#050A30] transition-colors hover:text-[#1266B6]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
