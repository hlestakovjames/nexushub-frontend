import Link from 'next/link';

const platforms = [
  {
    title: 'Nexus Hub TV',
    type: 'Media Platform',
    description:
      'The flagship Nexus Hub television and video platform bringing together original programming, stories, conversations, and digital media.',
    href: '/media/nexus-hub-tv',
    status: 'Active',
  },
  {
    title: 'NHTV Football',
    type: 'Sports Media Platform',
    description:
      'A dedicated football-focused media platform covering football stories, discussion, analysis, and related content.',
    href: '/media/nhtv-football',
    status: 'Active',
  },
  {
    title: 'NHTV Stories',
    type: 'Storytelling Platform',
    description:
      'A storytelling platform focused on people, experiences, communities, and stories worth sharing.',
    href: '/media/nhtv-stories',
    status: 'Active',
  },
  {
    title: 'NHTV Voices',
    type: 'Media & Conversation Platform',
    description:
      'A platform for conversations, perspectives, interviews, and voices across different subjects and communities.',
    href: '/media/nhtv-voices',
    status: 'Active',
  },
  {
    title: 'Arsenal Pulse',
    type: 'Sports Media Platform',
    description:
      'A sports-focused media platform dedicated to Arsenal-related news, commentary, stories, and audience engagement.',
    href: '#',
    status: 'Ecosystem Platform',
  },
  {
    title: 'Higher Education Updates Kenya',
    type: 'Education Information Platform',
    description:
      'An information-focused platform connecting audiences with higher education news, opportunities, and updates in Kenya.',
    href: '#',
    status: 'Ecosystem Platform',
  },
];

export default function PlatformsPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Nexus Hub Ecosystem
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Platforms connected by Nexus Hub.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Explore the media, digital, information, and other platforms
              that form part of the wider Nexus Hub ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                The Nexus Hub Ecosystem
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                More than one platform. One connected ecosystem.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Nexus Hub brings together different platforms with
                distinct audiences, purposes, and capabilities.
              </p>

              <p>
                Some are media platforms. Others focus on sports,
                storytelling, education, digital experiences, or other
                areas of opportunity.
              </p>

              <p>
                The Platforms directory provides a central place to
                discover those ecosystem platforms and understand how
                they connect to Nexus Hub.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Platforms
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore the platforms in the ecosystem.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Each platform has its own purpose, audience, and identity
              while remaining connected to the broader Nexus Hub ecosystem.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => {
              const isAvailable = platform.href !== '#';

              if (!isAvailable) {
                return (
                  <article
                    key={platform.title}
                    className="rounded-2xl border border-slate-200 bg-white p-8"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                      {platform.type}
                    </p>

                    <h3 className="mt-4 text-2xl font-bold">
                      {platform.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {platform.description}
                    </p>

                    <span className="mt-7 inline-flex text-sm font-semibold text-slate-400">
                      {platform.status}
                    </span>
                  </article>
                );
              }

              return (
                <Link
                  key={platform.title}
                  href={platform.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                    {platform.type}
                  </p>

                  <h3 className="mt-4 text-2xl font-bold transition group-hover:text-[#1266B6]">
                    {platform.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {platform.description}
                  </p>

                  <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                    Explore Platform →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM ROLE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                  Connected Ecosystem
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Independent platforms. Shared ecosystem.
                </h2>
              </div>

              <div className="space-y-5 text-lg leading-8 text-white/65">
                <p>
                  Platforms can operate independently while benefiting
                  from shared technology, media capabilities, business
                  expertise, partnerships, and audiences across Nexus Hub.
                </p>

                <p>
                  As the ecosystem grows, this directory will become
                  increasingly connected to the Nexus Hub platform and
                  organization management system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
            Nexus Hub Platforms
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Interested in building or connecting a platform?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Explore how Nexus Hub can support digital products, media
            platforms, partnerships, and ecosystem opportunities.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1266B6]"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}