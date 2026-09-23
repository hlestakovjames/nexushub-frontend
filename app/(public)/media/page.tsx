import Link from 'next/link';

const mediaProperties = [
  {
    number: '01',
    label: 'NEXUS HUB TV',
    title: 'Watch. Discover. Stay connected.',
    description:
      'The broadcast and video home of Nexus Hub, bringing together shows, programs, live experiences, videos, and media news.',
    href: '/media/nexus-hub-tv',
    links: [
      { label: 'Shows', href: '/media/nexus-hub-tv/shows' },
      { label: 'Programs', href: '/media/nexus-hub-tv/programs' },
      { label: 'Live', href: '/media/nexus-hub-tv/live' },
      { label: 'Videos', href: '/media/nexus-hub-tv/videos' },
    ],
  },
  {
    number: '02',
    label: 'NHTV FOOTBALL',
    title: 'Football beyond the scoreline.',
    description:
      'A dedicated football media experience covering news, fixtures, results, teams, competitions, and video.',
    href: '/media/nhtv-football',
    links: [
      { label: 'News', href: '/media/nhtv-football/news' },
      { label: 'Fixtures', href: '/media/nhtv-football/fixtures' },
      { label: 'Results', href: '/media/nhtv-football/results' },
      { label: 'Teams', href: '/media/nhtv-football/teams' },
    ],
  },
  {
    number: '03',
    label: 'NHTV STORIES',
    title: 'Every story has a voice.',
    description:
      'Human-centred storytelling exploring people, culture, communities, featured stories, and visual stories.',
    href: '/media/nhtv-stories',
    links: [
      { label: 'Featured', href: '/media/nhtv-stories/featured' },
      { label: 'People', href: '/media/nhtv-stories/people' },
      { label: 'Culture', href: '/media/nhtv-stories/culture' },
      { label: 'Community', href: '/media/nhtv-stories/community' },
    ],
  },
  {
    number: '04',
    label: 'NHTV VOICES',
    title: 'Ideas deserve to be heard.',
    description:
      'A platform for podcasts, interviews, opinion, features, and video-led conversations and perspectives.',
    href: '/media/nhtv-voices',
    links: [
      { label: 'Podcasts', href: '/media/nhtv-voices/podcasts' },
      { label: 'Interviews', href: '/media/nhtv-voices/interviews' },
      { label: 'Opinion', href: '/media/nhtv-voices/opinion' },
      { label: 'Features', href: '/media/nhtv-voices/features' },
    ],
  },
];

const mediaPrinciples = [
  {
    number: '01',
    title: 'Distinct properties',
    description:
      'Each media property has its own purpose, structure, audience experience, and content model.',
  },
  {
    number: '02',
    title: 'Connected ecosystem',
    description:
      'The four properties remain part of one wider Nexus Hub media ecosystem and can cross-link where relevant.',
  },
  {
    number: '03',
    title: 'Built to grow',
    description:
      'The frontend establishes the experience now while future editorial, publishing, media, and discovery systems can power it later.',
  },
];

export default function MediaPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Nexus Hub Media
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              One ecosystem.
              <br />
              Four media experiences.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Watch, follow, discover, and engage with the different
              media properties that make up the Nexus Hub media ecosystem.
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-white/55">
              From television and football to human stories and
              conversations, each property is built around a distinct
              editorial purpose.
            </p>
          </div>
        </div>
      </section>

      {/* PROPERTY SELECTOR */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Explore Media
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Choose your media experience.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Each property gives you a different way to experience
              Nexus Hub media while remaining connected to the wider
              ecosystem.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {mediaProperties.map((property) => (
              <article
                key={property.href}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="border-b border-slate-200 bg-slate-50 p-8 sm:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-sm font-semibold text-[#1266B6]">
                      {property.number}
                    </span>

                    <span className="rounded-full border border-[#1266B6]/15 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1266B6]">
                      NHTV
                    </span>
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#1266B6]">
                    {property.label}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                    {property.title}
                  </h3>

                  <p className="mt-5 max-w-xl leading-7 text-slate-600">
                    {property.description}
                  </p>
                </div>

                <div className="p-8 sm:p-10">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {property.links.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#050A30] transition hover:border-[#5FC9E6] hover:bg-[#5FC9E6]/10"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <Link
                    href={property.href}
                    className="mt-7 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                  >
                    Explore {property.label}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              The Media Ecosystem
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different purposes. One connected network.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The Media platform is intentionally organised as multiple
              properties rather than one large undifferentiated content
              system.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {mediaPrinciples.map((principle) => (
              <article
                key={principle.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {principle.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  {principle.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY DIFFERENCES */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Why Four Properties?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Because not every media experience is the same.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                Each property is designed around a different way of
                discovering, consuming, and engaging with media.
              </p>
            </div>

            <div className="space-y-4">
              <Link
                href="/media/nexus-hub-tv"
                className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  NEXUS HUB TV
                </p>

                <p className="mt-2 text-lg font-bold">
                  Broadcast and video-led media.
                </p>
              </Link>

              <Link
                href="/media/nhtv-football"
                className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  NHTV FOOTBALL
                </p>

                <p className="mt-2 text-lg font-bold">
                  Dedicated football coverage and data-led sports content.
                </p>
              </Link>

              <Link
                href="/media/nhtv-stories"
                className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  NHTV STORIES
                </p>

                <p className="mt-2 text-lg font-bold">
                  Human-centred stories, culture, and community experiences.
                </p>
              </Link>

              <Link
                href="/media/nhtv-voices"
                className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  NHTV VOICES
                </p>

                <p className="mt-2 text-lg font-bold">
                  Conversations, podcasts, opinion, features, and perspectives.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVERY PATH */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Explore Further
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Start anywhere. Keep exploring.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The properties are connected so audiences can move naturally
              between different types of media without losing the identity
              of the section they are exploring.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Watch
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Begin with video and broadcast.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore Nexus Hub TV, NHTV Football video, Stories video,
                or Voices video.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/media/nexus-hub-tv"
                  className="text-sm font-semibold text-[#1266B6] transition hover:text-[#050A30]"
                >
                  Nexus Hub TV →
                </Link>

                <Link
                  href="/media/nhtv-football/videos"
                  className="text-sm font-semibold text-[#1266B6] transition hover:text-[#050A30]"
                >
                  Football Videos →
                </Link>

                <Link
                  href="/media/nhtv-stories/video"
                  className="text-sm font-semibold text-[#1266B6] transition hover:text-[#050A30]"
                >
                  Stories Video →
                </Link>

                <Link
                  href="/media/nhtv-voices/video"
                  className="text-sm font-semibold text-[#1266B6] transition hover:text-[#050A30]"
                >
                  Voices Video →
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Discover
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Follow stories, teams, people, and ideas.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Move from editorial coverage into dedicated properties
                built around the subject you care about.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/media/nhtv-football/teams"
                  className="text-sm font-semibold text-[#1266B6] transition hover:text-[#050A30]"
                >
                  Football Teams →
                </Link>

                <Link
                  href="/media/nhtv-stories/people"
                  className="text-sm font-semibold text-[#1266B6] transition hover:text-[#050A30]"
                >
                  People Stories →
                </Link>

                <Link
                  href="/media/nhtv-stories/community"
                  className="text-sm font-semibold text-[#1266B6] transition hover:text-[#050A30]"
                >
                  Community Stories →
                </Link>

                <Link
                  href="/media/nhtv-voices/interviews"
                  className="text-sm font-semibold text-[#1266B6] transition hover:text-[#050A30]"
                >
                  Interviews →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE PLATFORM */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Built for the Next Stage
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The frontend is ready for the media platform behind it.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                With the public media architecture now established, the
                future backend can introduce publishing, content
                management, media storage, discovery, analytics,
                contributors, and editorial workflows without redesigning
                the information architecture.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Content publishing',
                  'Media management',
                  'Editorial workflows',
                  'Search and discovery',
                  'Contributors and authors',
                  'Taxonomy and categories',
                  'Related content',
                  'Media analytics',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <p className="text-sm font-semibold text-[#050A30]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Nexus Hub Media
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            There is more than one way to experience the story.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Choose a property and start exploring.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/media/nexus-hub-tv"
              className="rounded-md bg-[#5FC9E6] px-5 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Nexus Hub TV
            </Link>

            <Link
              href="/media/nhtv-football"
              className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              NHTV Football
            </Link>

            <Link
              href="/media/nhtv-stories"
              className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              NHTV Stories
            </Link>

            <Link
              href="/media/nhtv-voices"
              className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              NHTV Voices
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
