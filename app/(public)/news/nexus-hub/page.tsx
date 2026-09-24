import Link from 'next/link';

const coverageAreas = [
  {
    number: '01',
    title: 'Organisation',
    description:
      'Updates about Nexus Hub as an organisation, including developments, milestones, initiatives, and internal growth.',
  },
  {
    number: '02',
    title: 'People',
    description:
      'News involving the people, teams, collaborators, and leadership contributing to the Nexus Hub ecosystem.',
  },
  {
    number: '03',
    title: 'Partnerships',
    description:
      'Updates around collaborations, partnerships, relationships, and opportunities involving Nexus Hub.',
  },
  {
    number: '04',
    title: 'Milestones',
    description:
      'Coverage of important moments, achievements, launches, completed initiatives, and stages of growth.',
  },
];

const newsSignals = [
  'Organisation updates',
  'New initiatives',
  'Partnership developments',
  'Team and leadership updates',
  'Milestones and achievements',
  'Major ecosystem developments',
];

export default function NewsNexusHubPage() {
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
              Nexus Hub
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              News from
              <br />
              Nexus Hub.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Organisation-level news covering developments, milestones,
              people, partnerships, initiatives, and the wider Nexus Hub
              journey.
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
                Nexus Hub News
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Follow the organisation behind the ecosystem.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                The Nexus Hub category is the organisation-focused stream
                within the broader News property.
              </p>

              <p>
                It is intended for developments about Nexus Hub itself,
                rather than replacing specialist coverage from Digital,
                Business, Media, or Community.
              </p>

              <p>
                Formal notices belong in Announcements; this section is
                for broader organisational news and ongoing developments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS STREAM */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Nexus Hub News
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The organisation&apos;s latest developments.
              </h2>
            </div>

            <span className="text-sm font-medium text-slate-500">
              No Nexus Hub news published yet
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-[#050A30] p-8 text-white sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                  Organisation News
                </p>

                <h3 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                  The Nexus Hub news stream is ready for publication.
                </h3>

                <p className="mt-5 max-w-2xl leading-7 text-white/65">
                  Published stories can appear here with dates,
                  categories, summaries, authorship, featured status, and
                  supporting media.
                </p>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Current State
                </p>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-[#050A30]">
                    No Nexus Hub news published yet.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    The future publishing system can populate this stream
                    with organisation-related news and supporting media.
                  </p>
                </div>

                <Link
                  href="/news/announcements"
                  className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                >
                  View Announcements
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
              News about the organisation from different angles.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The category can accommodate a range of organisational
              developments without becoming another general-purpose news
              feed.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {coverageAreas.map((area) => (
              <article
                key={area.number}
                className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {area.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  {area.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS SIGNALS */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                What You Can Expect
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                News that follows the organisation&apos;s progress.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                As Nexus Hub grows, this area can become the central source
                for organisation-focused news and developments.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {newsSignals.map((item) => (
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

      {/* RELATION TO OTHER NEWS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              News Ecosystem
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Nexus Hub news sits alongside specialist coverage.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The categories work together without duplicating each
              other&apos;s editorial purpose.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/news/announcements"
              className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                Announcements
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Official notices.
              </h3>
            </Link>

            <Link
              href="/news/digital"
              className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                Digital
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Technology and digital developments.
              </h3>
            </Link>

            <Link
              href="/news/business"
              className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                Business
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Business and partnership news.
              </h3>
            </Link>

            <Link
              href="/news/media"
              className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                Media
              </p>

              <h3 className="mt-3 text-xl font-bold">
                News from the media ecosystem.
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* PUBLISHING */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Future Publishing Layer
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready for structured organisation news.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Future publishing can connect each news item to authors,
                topics, media, dates, related stories, and other Nexus Hub
                records.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'News title and body',
                'Author or publishing team',
                'Category and topic',
                'Publication date',
                'Featured status',
                'Media assets',
                'Related stories',
                'Update history',
              ].map((item) => (
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
            Nexus Hub News
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Follow the organisation as it grows.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Return to the full News property or explore another specialist
            category.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/news"
              className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              All News
            </Link>

            <Link
              href="/news/announcements"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Announcements
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
