import Image from 'next/image';
import Link from 'next/link';

const nexusPlatforms = [
  {
    title: 'Nexus Hub TV',
    label: 'MEDIA PLATFORM',
    href: '/media/nexus-hub-tv',
    description:
      'The central television and video platform for Nexus Hub programming, shows, live broadcasts, videos, and media news.',
  },
  {
    title: 'NHTV Football',
    label: 'SPORTS MEDIA PLATFORM',
    href: '/media/nhtv-football',
    description:
      'A dedicated football media platform covering teams, fixtures, results, competitions, videos, and football news.',
  },
  {
    title: 'NHTV Stories',
    label: 'STORYTELLING PLATFORM',
    href: '/media/nhtv-stories',
    description:
      'A story-led media platform focused on people, culture, community, featured stories, and documentary-style content.',
  },
  {
    title: 'NHTV Voices',
    label: 'CONVERSATION PLATFORM',
    href: '/media/nhtv-voices',
    description:
      'A platform for podcasts, interviews, opinion, features, video conversations, and diverse perspectives.',
  },
];

const externalPlatforms = [
  {
    title: 'KUHRSA',
    label: 'EXTERNAL ECOSYSTEM PLATFORM',
    href: 'https://kuhrsa.vercel.app',
    logo: '/images/platforms/kuhrsa_logo.jpeg',
    alt: 'KUHRSA logo',
    description:
      'The Kisii University Human Resource Students’ Association digital platform, operating as an independent ecosystem platform connected to Nexus Hub.',
  },
  {
    title: 'MercyCare',
    label: 'EXTERNAL ECOSYSTEM PLATFORM',
    href: 'https://mercycarehealth.vercel.app',
    logo: '/images/platforms/mercycare_logo.jpeg',
    alt: 'MercyCare logo',
    description:
      'The MercyCare Home Health Services digital platform, operating independently within the wider Nexus Hub ecosystem.',
  },
];

const platformPrinciples = [
  'Independent platform identities',
  'Shared Nexus Hub ecosystem connection',
  'Internal and external destinations',
  'Cross-platform discovery',
  'Independent platform development',
  'Future ecosystem integrations',
];

export default function PlatformsPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Nexus Hub Ecosystem
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Platforms
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
            Explore the digital platforms connected to the Nexus Hub ecosystem,
            from Nexus Hub&apos;s own media properties to independent platforms
            operating within the wider ecosystem.
          </p>
        </div>
      </section>

      {/* NEXUS HUB PLATFORMS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Nexus Hub Platforms
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Platforms built within the Nexus Hub environment.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              These platforms are directly operated as part of the Nexus Hub
              digital ecosystem and provide distinct experiences while sharing
              the broader Nexus Hub foundation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {nexusPlatforms.map((platform) => (
              <Link
                key={platform.href}
                href={platform.href}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-[#5FC9E6] hover:shadow-lg"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1266B6]">
                  {platform.label}
                </p>

                <h3 className="mt-5 text-3xl font-bold tracking-tight">
                  {platform.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {platform.description}
                </p>

                <span className="mt-8 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Open Platform →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXTERNAL PLATFORMS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Ecosystem Platforms
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Independent platforms connected to Nexus Hub.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Some Nexus Hub ecosystem platforms maintain their own domains,
              identities, products, and development environments. Platforms
              provides the central discovery point without absorbing them into
              the Nexus Hub site.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {externalPlatforms.map((platform) => (
              <a
                key={platform.href}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-[#5FC9E6] hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white p-2 shadow-sm">
                    <Image
                      src={platform.logo}
                      alt={platform.alt}
                      width={96}
                      height={96}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>

                  <span className="text-lg font-semibold text-slate-400 transition group-hover:text-[#1266B6]">
                    ↗
                  </span>
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-[#1266B6]">
                  {platform.label}
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight">
                  {platform.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {platform.description}
                </p>

                <span className="mt-8 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Visit {platform.title} ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM MODEL */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Platform Model
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                One ecosystem, distinct platforms.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Nexus Hub acts as the ecosystem connection layer while each
                platform retains its own purpose, audience, content model,
                domain, and development lifecycle.
              </p>
            </div>

            <div className="rounded-3xl bg-[#050A30] p-8 text-white sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                Ecosystem Architecture
              </p>

              <div className="mt-7 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold">Nexus Hub</p>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Parent ecosystem and central discovery layer.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold">
                    Nexus Hub-owned platforms
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Media and other platforms developed directly within the
                    Nexus Hub environment.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold">
                    Independent ecosystem platforms
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    External platforms that remain independently operated while
                    being connected to the ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Principles
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Built for a growing ecosystem.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platformPrinciples.map((principle) => (
              <div
                key={principle}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-sm font-semibold">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Nexus Hub
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Discover the platforms shaping the ecosystem.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Each platform can grow independently while remaining discoverable
            through the wider Nexus Hub ecosystem.
          </p>

          <Link
            href="/media"
            className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
          >
            Explore Media
          </Link>
        </div>
      </section>
    </main>
  );
}
