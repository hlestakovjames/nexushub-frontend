import Link from 'next/link';

const businessCoverage = [
  {
    number: '01',
    title: 'Partnerships',
    description:
      'News about collaborations, strategic relationships, joint initiatives, and partnerships involving Nexus Hub.',
  },
  {
    number: '02',
    title: 'Business Developments',
    description:
      'Updates covering new business initiatives, service developments, market activity, and organisational growth.',
  },
  {
    number: '03',
    title: 'Client & Project Milestones',
    description:
      'Stories highlighting significant project progress, completed engagements, launches, and delivery milestones.',
  },
  {
    number: '04',
    title: 'Growth & Expansion',
    description:
      'Coverage of new opportunities, capabilities, markets, divisions, and initiatives contributing to Nexus Hub growth.',
  },
];

const businessSignals = [
  'New partnerships',
  'Business initiatives',
  'Major project milestones',
  'Service developments',
  'Commercial opportunities',
  'Expansion and growth',
];

const publishingFields = [
  'News title and body',
  'Business category',
  'Partner or organisation',
  'Project or initiative',
  'Author or publishing team',
  'Publication date',
  'Featured status',
  'Related services and links',
];

export default function NewsBusinessPage() {
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
              Business
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              News from the
              <br />
              business side.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Partnerships, projects, business developments, service
              initiatives, and growth across the Nexus Hub ecosystem.
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
                Business News
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Follow the work, relationships, and opportunities behind
                the organisation.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                The Business category focuses on the commercial and
                organisational activity surrounding Nexus Hub and its
                wider ecosystem.
              </p>

              <p>
                It is separate from the Business property itself: the
                Business property explains services, solutions, and
                capabilities, while this section communicates developments
                and news about them.
              </p>

              <p>
                Partnership and project news can later connect directly to
                structured partner, project, service, and organisation
                records within the wider platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS NEWS STREAM */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Business News Stream
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Business developments will appear here.
              </h2>
            </div>

            <span className="text-sm font-medium text-slate-500">
              No Business news published yet
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-[#050A30] p-8 text-white sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                  Business Development
                </p>

                <h3 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                  A dedicated stream for partnerships, projects, and
                  growth.
                </h3>

                <p className="mt-5 max-w-2xl leading-7 text-white/65">
                  Future stories can cover major partnerships, business
                  initiatives, service developments, project milestones,
                  and expansion activity.
                </p>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Current State
                </p>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-[#050A30]">
                    No Business news published yet.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Once connected to the publishing system, this stream
                    can surface recent, featured, partner-related, or
                    project-related business stories.
                  </p>
                </div>

                <Link
                  href="/business"
                  className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                >
                  Explore Business
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Coverage Areas
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Business news from four angles.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The category can follow business activity from relationships
              and opportunities through delivery, milestones, and growth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {businessCoverage.map((item) => (
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

      {/* BUSINESS SIGNALS */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                What You Can Expect
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                News that follows business activity as it develops.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                The Business stream can provide a running record of the
                relationships, work, opportunities, and progress shaping
                the organisation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {businessSignals.map((item) => (
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

      {/* RELATED BUSINESS AREAS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Explore Business
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Follow the news, then explore the work behind it.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Business news connects naturally to the services,
              solutions, partnerships, and consulting capabilities behind
              Nexus Hub.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/business"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Business
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Explore the Business division.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Discover the broader business capabilities and direction
                of Nexus Hub.
              </p>
            </Link>

            <Link
              href="/business/partnerships"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Partnerships
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Explore partnerships.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Discover how Nexus Hub approaches collaboration and
                partnership opportunities.
              </p>
            </Link>

            <Link
              href="/business/services"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Services
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Explore Business Services.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                See the services and capabilities supporting business
                delivery.
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
                Ready for connected business news.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Each future Business news item can connect to a partner,
                project, service, solution, or broader business record.
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
            Business News
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Follow the relationships, work, and growth behind Nexus Hub.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore Business news or discover the wider Business property.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/news"
              className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              All News
            </Link>

            <Link
              href="/business"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Business
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
