'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  sectionNavigation,
} from '@/config/navigation/site-navigation';

type SubdivisionNavProps = {
  sectionId: string;
  subdivisionId: string;
};

export default function SubdivisionNav({
  sectionId,
  subdivisionId,
}: SubdivisionNavProps) {
  const pathname = usePathname();

  const section = sectionNavigation.find(
    (item) => item.id === sectionId,
  );

  const items =
    section?.subdivisions?.[subdivisionId];

  if (!items?.length) {
    return null;
  }

  return (
    <nav
      aria-label="Subdivision navigation"
      className="border-b border-white/10 bg-[#050A30] text-white"
    >
      <div className="mx-auto flex min-h-11 max-w-7xl items-center gap-1 overflow-x-auto px-6">
        {items.map((item) => {
          const isActive =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 rounded-md px-3 py-2 text-sm transition ${
                isActive
                  ? 'bg-[#816FF8]/20 text-white'
                  : 'text-white/65 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
