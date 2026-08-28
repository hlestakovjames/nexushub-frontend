'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  sectionNavigation,
} from '@/config/navigation/site-navigation';

type SectionNavProps = {
  sectionId: string;
};

export default function SectionNav({
  sectionId,
}: SectionNavProps) {
  const pathname = usePathname();

  const section = sectionNavigation.find(
    (item) => item.id === sectionId,
  );

  if (!section) {
    return null;
  }

  return (
    <nav
      aria-label={`${section.label} navigation`}
      className="border-b border-white/10 bg-[#1266B6] text-white"
    >
      <div className="mx-auto flex min-h-12 max-w-7xl items-center gap-1 overflow-x-auto px-6">
        {section.items.map((item) => {
          const isActive =
            item.href === section.href
              ? pathname === section.href
              : pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative shrink-0 rounded-md px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? 'bg-white/10 text-white'
                  : 'text-white/75 hover:bg-white/10 hover:text-white'
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
    </nav>
  );
}
