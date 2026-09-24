import Link from 'next/link';

const mediaCoverage = [
  {
    number: '01',
    title: 'Media Developments',
    description:
      'News about the growth, direction, production, and development of the Nexus Hub media ecosystem.',
  },
  {
    number: '02',
    title: 'NHTV Properties',
    description:
      'Updates involving Nexus Hub TV, NHTV Football, NHTV Stories, NHTV Voices, and their evolving media experiences.',
  },
  {
    number: '03',
    title: 'Productions',
    description:
      'News around media productions, programmes, editorial initiatives, launches, and major production milestones.',
  },
  {
    number: '04',
    title: 'Audience & Platform',
    description:
      'Updates concerning media platforms, distribution, audience experiences, and the systems supporting Nexus Hub media.',
  },
];

const mediaSignals = [
  'New media properties',
  'Production launches',
  'Programme developments',
  'Editorial initiatives',
  'Media platform improvements',
  'Major production milestones',
];

const publishingFields = [
  'News title and body',
  'Media property',
  'Production or programme',
  'Category and topic',
  'Author or publishing team',
  'Publication date',
  'Featured status',
  'Related media content',
];

export default function NewsMediaPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <Link
              href="/news"
              className="text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
            >
              ← News
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Media
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              News from the
              <br />
              Nexus Hub media ecosystem.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Updates about media properties, productions, programmes,
              editorial initiatives, and the platforms bringing Nexus Hub
              media to audiences.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Media News
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Follow what is happening behind the media experience.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                The Media category covers developments across the Nexus Hub
                media ecosystem as a whole.
              </p>

              <p>
                It is different from the individual media properties. For
                example, NHTV Football contains football content, while this
                category can report on the launch, development, production,
                or wider evolution of NHTV Football as a media property.
              </p>

              <p>
                This keeps organisation-level media news separate from the
                detailed editorial experiences audiences find inside each
                property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA NEWS STREAM */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Media News Stream
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Media developments will appear here.
              </h2>
            </div>

            <span className="text-sm font-medium text-slate-500">
              No Media news published yet
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-[#050A30] p-8 text-white sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                  Media Development
                </p>

                <h3 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                  A dedicated news stream for the media ecosystem.
                </h3>

                <p className="mt-5 max-w-2xl leading-7 text-white/65">
                  Future stories can cover new properties, productions,
                  programmes, editorial projects, platform improvements,
                  and major media milestones.
                </p>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Current State
                </p>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-[#050A30]">
                    No Media news published yet.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Once publishing is connected, this stream can surface
                    the latest developments across the Nexus Hub media
                    properties.
                  </p>
                </div>

                <Link
                  href="/media"
                  className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                >
                  Explore Media
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE AREAS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Coverage Areas
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Four ways to follow the media ecosystem.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The Media news category can track the wider ecosystem
              without replacing the specialist content published inside
              each property.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {mediaCoverage.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA SIGNALS */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                What You Can Expect
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                News about how the media ecosystem grows.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                This category can follow the evolution of Nexus Hub media
                from individual productions to larger platform and
                ecosystem developments.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {mediaSignals.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm font-semibold text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA PROPERTIES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Media Properties
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The news category connects to the properties behind it.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore the individual media experiences after reading
              about their wider ecosystem developments.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/media/nexus-hub-tv"
              className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                NEXUS HUB TV
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Broadcast & video.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Explore shows, programs, live, videos, news, and the TV
                experience.
              </p>
            </Link>

            <Link
              href="/media/nhtv-football"
              className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                NHTV FOOTBALL
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Football media.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Explore football news, fixtures, results, teams, and video.
              </p>
            </Link>

            <Link
              href="/media/nhtv-stories"
              className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                NHTV STORIES
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Human storytelling.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Explore People, Culture, Community, Featured, and Video.
              </p>
            </Link>

            <Link
              href="/media/nhtv-voices"
              className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                NHTV VOICES
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Conversations & ideas.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Explore Podcasts, Interviews, Opinion, Features, and Video.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FUTURE PUBLISHING */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Future Publishing Structure
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready for connected media news.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Each future media news item can connect to a specific
                property, production, programme, editorial project, or
                media initiative.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {publishingFields.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-sm font-semibold text-[#050A30]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Media News
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Follow how Nexus Hub media evolves.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore Media news or enter one of the individual NHTV
            properties.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/news"
              className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              All News
            </Link>

            <Link
              href="/media"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Media
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
