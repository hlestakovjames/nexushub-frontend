import Link from 'next/link';

import NexusHubLogo from '@/components/brand/NexusHubLogo';

const footerGroups = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Our Story', href: '/about/our-story' },
      { label: 'Mission & Vision', href: '/about/mission-vision' },
      { label: 'Our Approach', href: '/about/approach' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Our Team', href: '/about/team' },
      { label: 'Careers', href: '/about/careers' },
    ],
  },
  {
    title: 'Media',
    links: [
      { label: 'Nexus Hub TV', href: '/media/nexus-hub-tv' },
      { label: 'NHTV Football', href: '/media/nhtv-football' },
      { label: 'NHTV Stories', href: '/media/nhtv-stories' },
      { label: 'NHTV Voices', href: '/media/nhtv-voices' },
    ],
  },
  {
    title: 'Digital',
    links: [
      { label: 'Digital Overview', href: '/digital' },
      { label: 'Digital Services', href: '/digital/services' },
      { label: 'Projects', href: '/projects' },
    ],
  },
  {
    title: 'Business',
    links: [
      { label: 'Business Overview', href: '/business' },
      { label: 'Business Services', href: '/business/services' },
      { label: 'Business Solutions', href: '/business/solutions' },
      { label: 'Partnerships', href: '/business/partnerships' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Downloads', href: '/resources/downloads' },
      { label: 'Guides', href: '/resources/guides' },
      { label: 'Documents', href: '/resources/documents' },
      { label: 'Blog', href: '/blog' },
      { label: 'News', href: '/news' },
      { label: 'Events & Activities', href: '/events-activities' },
    ],
  },
];

const connectLinks = [
  {
    label: 'Contact',
    href: '/contact',
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#030721] text-white">
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_2fr]">
          {/* BRAND BLOCK */}
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="Nexus Hub home"
              className="inline-flex items-center"
            >
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white/95 shadow-sm">
                <NexusHubLogo
                  size={52}
                  showWordmark={false}
                />
              </div>
            </Link>

            <p className="mt-6 text-lg font-semibold leading-7 text-white">
              Connecting Ideas Through Digital Innovation.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/55">
              Nexus Hub connects ideas across digital innovation,
              media, and business to create meaningful platforms,
              experiences, and opportunities.
            </p>
          </div>

          {/* LINK GROUPS */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5FC9E6]">
                  {group.title}
                </h2>

                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
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

            {/* CONNECT */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5FC9E6]">
                Connect
              </h2>

              <ul className="mt-5 space-y-3">
                {connectLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-6 text-white/40">
                Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="text-white/40">
            © {new Date().getFullYear()} Nexus Hub. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="text-white/40 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-white/40 transition hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="/sitemap.xml"
              className="text-white/40 transition hover:text-white"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}