import Link from 'next/link';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

import NexusHubLogo from '@/components/brand/NexusHubLogo';

const footerGroups = [
  {
    title: 'Nexus Hub',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Our Ecosystem', href: '/ecosystem' },
      { label: 'Projects', href: '/projects' },
    ],
  },
  {
    title: 'Discover',
    links: [
      { label: 'Services', href: '/services' },
      { label: 'Products & Innovations', href: '/products' },
      { label: 'Publications', href: '/publications' },
      { label: 'Events', href: '/events' },
      { label: 'Opportunities', href: '/opportunities' },
    ],
  },
  {
    title: 'Our Applications',
    links: [
      { label: 'Corporate Website', href: '/' },
      { label: 'Ecosystem Portal', href: '/ecosystem' },
      { label: 'Corporate Workspace', href: '/ecosystem' },
      { label: 'Nexus Hub TV', href: 'https://nexushub-media.vercel.app/' },
      { label: 'Nexus Hub Learning', href: '/ecosystem' },
      { label: 'Administration Console', href: '/ecosystem' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#030721] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_2fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="Nexus Hub home"
              className="inline-flex items-center"
            >
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white/95 shadow-sm">
                <NexusHubLogo size={52} showWordmark={false} />
              </div>
            </Link>

            <p className="mt-6 text-lg font-semibold leading-7 text-white">
              Connecting Ideas Through Digital Innovation.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/55">
              Nexus Hub is a connected ecosystem bringing together
              technology, media, business, people and opportunities
              through specialised digital applications and services.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5FC9E6]">
                  {group.title}
                </h2>

                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5FC9E6]">
                Connect
              </h2>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-white/55">
                <li className="flex items-start gap-3">
                  <MapPin size={17} className="shrink-0 text-[#5FC9E6]" />
                  <span>Nairobi, Kenya</span>
                </li>

                <li>
                  <Link href="tel:0728812649" className="flex items-center gap-3 hover:text-white">
                    <Phone size={17} className="shrink-0 text-[#5FC9E6]" />
                    <span>0728 812 649</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://wa.me/254713290745"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-white"
                  >
                    <MessageCircle size={17} className="shrink-0 text-[#5FC9E6]" />
                    <span>0713 290 745</span>
                  </Link>
                </li>

                <li>
                  <Link href="mailto:nexushubkenya@gmail.com" className="flex items-center gap-3 hover:text-white">
                    <Mail size={17} className="shrink-0 text-[#5FC9E6]" />
                    <span>nexushubkenya@gmail.com</span>
                  </Link>
                </li>

                <li className="pt-2">
                  <Link href="/contact" className="font-semibold text-[#5FC9E6] hover:text-white">
                    Contact Nexus Hub →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="text-white/40">
            © {new Date().getFullYear()} Nexus Hub. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy" className="text-white/40 transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 transition hover:text-white">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="text-white/40 transition hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
