import Link from 'next/link';

const digitalCoverage = [
  {
    number: '01',
    title: 'Digital Products',
    description:
      'News about digital platforms, applications, systems, and products developed, launched, or advanced within the Nexus Hub ecosystem.',
  },
  {
    number: '02',
    title: 'Technology',
    description:
      'Updates around technology developments, technical capabilities, infrastructure, and the tools supporting digital work.',
  },
  {
    number: '03',
    title: 'Innovation',
    description:
      'Stories about new ideas, approaches, experiments, and practical applications of technology to solve problems and create opportunities.',
  },
  {
    number: '04',
    title: 'Digital Transformation',
    description:
      'Coverage of initiatives that use digital technologies to improve services, operations, organisations, and user experiences.',
  },
];

const coverageSignals = [
  'Product launches',
  'Platform developments',
  'Technology projects',
  'Digital transformation initiatives',
  'Innovation and experimentation',
  'Systems and technical milestones',
];

const publishingFields = [
  'News title and body',
  'Product or project',
  'Technology topics',
  'Author or publishing team',
  'Publication date',
  'Featured status',
  'Media assets',
  'Related digital services',
];

export default function NewsDigitalPage() {
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
              Digital
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              News about
              <br />
              digital innovation.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Technology, digital products, innovation, systems, and
              transformation across the Nexus Hub ecosystem.
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
                Digital News
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Follow the technology behind the work.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                The Digital category covers news about how Nexus Hub uses
                technology, develops digital products, and builds systems
                and services.
              </p>

              <p>
                It is distinct from the Digital Services section, which
                explains what Nexus Hub offers, and from general Nexus Hub
                news, which covers the organisation as a whole.
              </p>

              <p>
                The category can later connect news stories to specific
                products, projects, services, technologies, and digital
                initiatives managed in the wider platform.
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
                Digital News Stream
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Technology developments will appear here.
              </h2>
            </div>

            <span className="text-sm font-medium text-slate-500">
              No Digital news published yet
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-[#050A30] p-8 text-white sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                  Digital Development
                </p>

                <h3 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                  A dedicated stream for technology and digital progress.
                </h3>

                <p className="mt-5 max-w-2xl leading-7 text-white/65">
                  Future stories can cover product launches, technical
                  milestones, innovation initiatives, platform updates,
                  and digital transformation work.
                </p>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Current State
                </p>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-[#050A30]">
                    No Digital news published yet.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Once connected to the publishing system, this stream
                    can surface recent, featured, or topic-specific
                    digital stories.
                  </p>
                </div>

                <Link
                  href="/digital"
                  className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                >
                  Explore Digital
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
              Four angles on digital development.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The Digital news category is broad enough to follow
              technology from idea through development, launch, and
              continued growth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {digitalCoverage.map((item) => (
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

      {/* COVERAGE SIGNALS */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                What You Can Expect
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                News that follows digital work as it develops.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                The category can follow technology from early development
                through launches, milestones, deployments, and continued
                improvement.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {coverageSignals.map((item) => (
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

      {/* RELATED DIGITAL AREAS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Explore Digital
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              News connects to the wider Digital property.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Read about digital developments here, then move into the
              services and capabilities behind the work.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/digital"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Digital
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Explore the Digital division.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Discover the broader digital capabilities, services, and
                direction of Nexus Hub.
              </p>
            </Link>

            <Link
              href="/digital/services"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Services
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Explore Digital Services.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                See the services and technical capabilities supporting
                digital delivery.
              </p>
            </Link>

            <Link
              href="/news"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                News
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Return to all news.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore organisation, business, media, community, and
                announcement coverage.
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
                Ready for connected digital news.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                The future backend can connect each Digital news item to
                the product, project, service, technology, or initiative
                it discusses.
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
            Digital News
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Follow the ideas, products, and technology behind the work.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore Digital news or discover the wider Digital property.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/news"
              className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              All News
            </Link>

            <Link
              href="/digital"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Digital
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
