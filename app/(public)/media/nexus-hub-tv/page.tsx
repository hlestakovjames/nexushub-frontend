import Link from 'next/link';

import PageHero from '@/components/hero/PageHero';

const tvSections = [
  {
    number: '01',
    title: 'Shows',
    description:
      'Discover the recurring productions, series, and branded formats that form the programming identity of Nexus Hub TV.',
    href: '/media/nexus-hub-tv/shows',
    label: 'Explore Shows',
  },
  {
    number: '02',
    title: 'Programs',
    description:
      'Explore the broader programming layer that organizes what is available, featured, upcoming, and presented across NHTV.',
    href: '/media/nexus-hub-tv/programs',
    label: 'Explore Programs',
  },
  {
    number: '03',
    title: 'Live',
    description:
      'Be there when the broadcast is happening through the dedicated NHTV live experience.',
    href: '/media/nexus-hub-tv/live',
    label: 'Go to Live',
  },
  {
    number: '04',
    title: 'Videos',
    description:
      'Browse published episodes, interviews, features, clips, highlights, and other watchable NHTV content.',
    href: '/media/nexus-hub-tv/videos',
    label: 'Browse Videos',
  },
  {
    number: '05',
    title: 'News',
    description:
      'Stay connected to NHTV announcements, production updates, platform developments, and editorial stories.',
    href: '/media/nexus-hub-tv/news',
    label: 'Read NHTV News',
  },
  {
    number: '06',
    title: 'About',
    description:
      'Learn about the NHTV platform, its role within Nexus Hub Media, and the principles guiding the experience.',
    href: '/media/nexus-hub-tv/about',
    label: 'About NHTV',
  },
];

const audiencePaths = [
  {
    title: 'Watch',
    description:
      'Go straight to published video content and discover something to watch.',
    href: '/media/nexus-hub-tv/videos',
    label: 'Browse Videos',
  },
  {
    title: 'Discover',
    description:
      'Explore recurring productions and find the shows behind the content.',
    href: '/media/nexus-hub-tv/shows',
    label: 'Explore Shows',
  },
  {
    title: 'Follow',
    description:
      'Keep up with the latest NHTV updates, announcements, and editorial developments.',
    href: '/media/nexus-hub-tv/news',
    label: 'Read News',
  },
  {
    title: 'Experience Live',
    description:
      'Check the live destination for current and future broadcast experiences.',
    href: '/media/nexus-hub-tv/live',
    label: 'Explore Live',
  },
];

export default function NexusHubTVPage() {
  return (
    <main>
      <PageHero
        eyebrow="Nexus Hub TV"
        title={
          <>
            Watch.
            <br />
            Discover. Connect.
          </>
        }
        description="Nexus Hub TV is the flagship television and video platform within Nexus Hub Media, bringing shows, programs, live broadcasts, videos, and editorial stories together in one connected experience."
        image="/images/hero/hero-team.jpeg"
        primaryAction={{
          label: 'Browse Videos',
          href: '/media/nexus-hub-tv/videos',
        }}
        secondaryAction={{
          label: 'Explore Shows',
          href: '/media/nexus-hub-tv/shows',
        }}
        height="large"
      />

      {/* PLATFORM INTRO */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                The NHTV Experience
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A connected home for Nexus Hub television and video.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Nexus Hub TV brings different forms of media into one
                connected platform while giving each content type a clear
                purpose.
              </p>

              <p>
                Audiences can discover recurring shows, explore programmes,
                watch published videos, follow NHTV news, and access the live
                experience without losing the relationship between those
                parts.
              </p>

              <p>
                The platform is designed to grow from a publishing destination
                into a broader digital television ecosystem as more content,
                programming, production capabilities, and audience experiences
                are introduced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EXPERIENCE */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Featured on NHTV
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The front door to the latest from Nexus Hub TV.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This primary feature area is designed for the content,
                production, programme, or editorial story that NHTV wants
                audiences to discover first.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
              Featured content
            </span>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-[#050A30] p-8 text-white shadow-sm sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.22),_transparent_42%)]" />

              <div className="relative flex h-full flex-col justify-end">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                  Featured NHTV Experience
                </p>

                <h3 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                  Your primary featured production can take centre stage here.
                </h3>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                  The CMS can later use this area to promote a major show,
                  episode, programme, live event, video release, or editorial
                  feature.
                </p>

                <div className="mt-7 flex flex-wrap gap-4">
                  <Link
                    href="/media/nexus-hub-tv/videos"
                    className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                  >
                    Watch Now
                  </Link>

                  <Link
                    href="/media/nexus-hub-tv/shows"
                    className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Explore Shows
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                  Latest
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  New content
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Recently published NHTV content can be surfaced here for
                  returning audiences.
                </p>

                <Link
                  href="/media/nexus-hub-tv/videos"
                  className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition hover:translate-x-1"
                >
                  Browse Videos →
                </Link>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                  Upcoming
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  What comes next
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Upcoming programming and live experiences can be presented
                  here as the scheduling system becomes active.
                </p>

                <Link
                  href="/media/nexus-hub-tv/programs"
                  className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition hover:translate-x-1"
                >
                  View Programs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TV DESTINATIONS */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Explore NHTV
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything has a place.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The NHTV experience is divided into clear destinations so
              audiences can move naturally from discovery to viewing,
              programming, live broadcasts, and editorial updates.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tvSections.map((section) => (
              <Link
                key={section.number}
                href={section.href}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:border-[#5FC9E6] hover:bg-white hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-sm font-semibold text-[#1266B6]">
                    {section.number}
                  </span>

                  <span className="text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#1266B6]">
                    →
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold">
                  {section.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {section.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6]">
                  {section.label} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT FLOW */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                How It Connects
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                One production can move through the entire NHTV ecosystem.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                NHTV is designed so content does not exist in isolation. A
                production can connect its identity, programming, broadcast,
                published media, and editorial coverage.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  SHOWS
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  The production
                </h3>

                <p className="mt-3 leading-7 text-white/60">
                  Establish the recurring production, format, identity, and
                  series.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  PROGRAMS
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  The presentation
                </h3>

                <p className="mt-3 leading-7 text-white/60">
                  Organize and present programming, upcoming releases, and
                  broader programme information.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  LIVE
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  The moment
                </h3>

                <p className="mt-3 leading-7 text-white/60">
                  Deliver the real-time broadcast or streaming experience.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  VIDEOS + NEWS
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  The lasting record
                </h3>

                <p className="mt-3 leading-7 text-white/60">
                  Preserve published media while keeping audiences informed
                  through editorial coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE PATHWAYS */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Choose Your Path
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Start wherever your interest begins.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {audiencePaths.map((path) => (
              <Link
                key={path.title}
                href={path.href}
                className="group rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1266B6]">
                  NHTV
                </p>

                <h3 className="mt-3 text-2xl font-bold">{path.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {path.description}
                </p>

                <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  {path.label} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WIDER NETWORK */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                The Wider NHTV Network
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                NHTV is bigger than one screen.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Nexus Hub TV serves as the flagship platform while specialist
                properties such as NHTV Football, NHTV Stories, and NHTV Voices
                provide distinct media experiences within the wider network.
              </p>
            </div>

            <Link
              href="/media"
              className="inline-flex w-fit rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Explore Nexus Hub Media
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/media/nhtv-football"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                NHTV Football
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Football-focused coverage and content.
              </h3>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Football →
              </span>
            </Link>

            <Link
              href="/media/nhtv-stories"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                NHTV Stories
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Human-centred storytelling and features.
              </h3>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Stories →
              </span>
            </Link>

            <Link
              href="/media/nhtv-voices"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                NHTV Voices
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Perspectives, interviews, and conversations.
              </h3>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Voices →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT / PLATFORM */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl border border-slate-200 p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  About Nexus Hub TV
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  A platform designed to grow with the Nexus Hub media
                  ecosystem.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Learn how Nexus Hub TV is structured, what it is designed
                  to achieve, and how its different content experiences fit
                  together.
                </p>
              </div>

              <Link
                href="/media/nexus-hub-tv/about"
                className="inline-flex w-fit rounded-md border border-[#050A30] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:bg-[#050A30] hover:text-white"
              >
                About NHTV
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Nexus Hub TV
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Find something worth watching.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore the shows, programming, live experiences, videos, and
            editorial stories that make up Nexus Hub TV.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/media/nexus-hub-tv/videos"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Browse Videos
            </Link>

            <Link
              href="/media/nexus-hub-tv/shows"
              className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Shows
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
