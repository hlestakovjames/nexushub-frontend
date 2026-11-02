import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

import NexusHubLogo from '@/components/brand/NexusHubLogo';

const exploreLinks = [
  { label: 'About Nexus Hub', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products & Innovations', href: '/products' },
  { label: 'Projects', href: '/projects' },
  { label: 'Publications & Insights', href: '/publications' },
  { label: 'Resources', href: '/resources' },
  { label: 'Events & Activities', href: '/events' },
  { label: 'Contact', href: '/contact' },
];

const focusLinks = [
  { label: 'Technology & Digital Solutions', href: '/areas-of-focus#technology-digital-solutions' },
  { label: 'Innovation & Systems Thinking', href: '/areas-of-focus#innovation-systems-thinking' },
  { label: 'Media & Creativity', href: '/areas-of-focus#media-creativity' },
  { label: 'Business & Enterprise', href: '/areas-of-focus#business-enterprise' },
];

const linkClass =
  'text-sm leading-6 text-white/65 transition hover:text-[#4FDCE8] focus-visible:outline-none focus-visible:underline';

export default function Footer() {
  return (
    <footer className="bg-[#050B33] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1.15fr_1fr] lg:gap-10">
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="Nexus Hub home"
              className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4FDCE8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#050B33]"
            >
              <NexusHubLogo size={52} showWordmark />
            </Link>

            <p className="mt-7 text-base font-semibold leading-7 text-white">
              Empowering businesses through innovative digital solutions.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/60">
              Nexus Hub brings together technology, innovation, media and enterprise through
              connected capabilities, digital solutions and developing initiatives.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#4FDCE8] transition hover:text-white"
            >
              Discover Nexus Hub <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <nav aria-label="Footer explore links">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#4FDCE8]">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer areas of focus">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#4FDCE8]">
              Areas of Focus
            </h2>
            <ul className="mt-5 space-y-3">
              {focusLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#4FDCE8]">
              Connect
            </h2>
            <p className="mt-5 flex items-start gap-3 text-sm leading-6 text-white/65">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[#4FDCE8]" aria-hidden="true" />
              <span>Nairobi, Kenya</span>
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="tel:0728812649" className={`flex items-center gap-3 ${linkClass}`}>
                  <Phone size={17} className="shrink-0 text-[#4FDCE8]" aria-hidden="true" />
                  <span>0728 812 649</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/254713290745" target="_blank" rel="noreferrer" className={`flex items-center gap-3 ${linkClass}`}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px] shrink-0 text-[#4FDCE8]" aria-hidden="true">
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L.1 24l6.28-1.65a11.88 11.88 0 0 0 5.7 1.45h.01c6.55 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.47-8.42Zm-8.44 18.3h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.88 9.88 0 1 1 8.37 4.62Zm5.42-7.4c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.23-.66.08-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.69-1.66-.94-2.27-.25-.6-.5-.52-.69-.53h-.58c-.2 0-.53.08-.81.38-.28.3-1.06 1.04-1.06 2.54s1.09 2.95 1.24 3.15c.15.2 2.15 3.28 5.2 4.6.73.32 1.3.51 1.75.65.74.23 1.41.2 1.94.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
                  </svg>
                  <span>WhatsApp: 0713 290 745</span>
                </a>
              </li>
              <li>
                <a href="mailto:nexushubkenya@gmail.com" className={`flex items-start gap-3 ${linkClass}`}>
                  <Mail size={17} className="mt-0.5 shrink-0 text-[#4FDCE8]" aria-hidden="true" />
                  <span className="break-all">nexushubkenya@gmail.com</span>
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-10 items-center justify-center rounded-lg bg-[#FFB84D] px-4 py-2 text-sm font-bold text-[#050B33] transition hover:bg-[#F59A52]"
            >
              Contact Nexus Hub
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Nexus Hub. All rights reserved.</p>
          <p className="font-medium tracking-wide">Technology · Innovation · Media · Enterprise</p>
        </div>
      </div>
    </footer>
  );
}
