import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

import NexusHubLogo from '@/components/brand/NexusHubLogo';

const footerGroups = [
  {
    title: 'Nexus Hub',
    links: [
      { label: 'About Nexus Hub', href: '/about' },
      { label: 'Our Projects', href: '/projects' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Products & Innovations', href: '/products' },
      { label: 'Publications & Insights', href: '/publications' },
      { label: 'Resources', href: '/resources' },
      { label: 'Events & Activities', href: '/events' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#050B33] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div className="max-w-md">
            <Link
              href="/"
              aria-label="Nexus Hub home"
              className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4FDCE8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#050B33]"
            >
              <NexusHubLogo size={52} showWordmark />
            </Link>

            <p className="mt-7 max-w-sm text-lg font-semibold leading-7 text-white">
              Empowering businesses through innovative digital solutions.
            </p>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
              Nexus Hub brings together technology, innovation, media and
              enterprise through connected capabilities, services and
              developing initiatives.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#4FDCE8]">
                {group.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.href}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 transition hover:text-white focus-visible:outline-none focus-visible:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#4FDCE8]">
              Connect
            </h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/65">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#4FDCE8]" />
                <span>Nairobi, Kenya</span>
              </li>
              <li>
                <a
                  href="mailto:nexushubkenya@gmail.com"
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <Mail size={18} className="shrink-0 text-[#4FDCE8]" />
                  <span className="break-all">nexushubkenya@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Nexus Hub. All rights reserved.</p>
          <p>Technology · Innovation · Media · Enterprise</p>
        </div>
      </div>
    </footer>
  );
}
