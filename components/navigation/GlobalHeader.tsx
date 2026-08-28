import Link from "next/link";

import NexusHubLogo from "../brand/NexusHubLogo";
import MobileGlobalNav from "./MobileGlobalNav";

const globalNavigation = [
  { label: "About", href: "/about" },
  { label: "Media", href: "/media" },
  { label: "Digital", href: "/digital" },
  { label: "Business", href: "/business" },
];

export default function GlobalHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#050A30]/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NexusHubLogo size={42} />

        <nav
          aria-label="Global navigation"
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

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="rounded-full border border-[#1266B6] px-4 py-2 text-sm font-semibold text-[#1266B6] transition-colors hover:bg-[#1266B6] hover:text-white"
          >
            Contact
          </Link>

          <Link
            href="/login"
            className="rounded-full bg-[#050A30] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1266B6]"
          >
            Login
          </Link>
        </div>

        <MobileGlobalNav />
      </div>
    </header>
  );
}