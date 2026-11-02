import Link from 'next/link';
import { Mail, MapPin, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';

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
                  <MessageCircle size={17} className="shrink-0 text-[#4FDCE8]" aria-hidden="true" />
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
