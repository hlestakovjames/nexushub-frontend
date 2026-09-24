import Link from 'next/link';

const communityCoverage = [
  {
    number: '01',
    title: 'Community Initiatives',
    description:
      'News about programmes, projects, activities, and initiatives that create value or respond to needs within communities.',
  },
  {
    number: '02',
    title: 'Social Impact',
    description:
      'Coverage of initiatives, collaborations, and efforts that contribute to social development, opportunity, participation, or inclusion.',
  },
  {
    number: '03',
    title: 'People & Communities',
    description:
      'Stories about people and communities connected to Nexus Hub projects, partnerships, activities, and wider ecosystem work.',
  },
  {
    number: '04',
    title: 'Community Developments',
    description:
      'Updates about significant developments, engagements, events, and relationships involving communities and community-focused work.',
  },
];

const communitySignals = [
  'Community initiatives',
  'Social impact projects',
  'Community partnerships',
  'Local engagements',
  'People and participation',
  'Community-focused developments',
];

const publishingFields = [
  'News title and body',
  'Community category',
  'Community or location',
  'Project or initiative',
  'Partner organisation',
  'Author or publishing team',
  'Publication date',
  'Related media and resources',
];

export default function NewsCommunityPage() {
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
              Community
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              News that
              <br />
              connects with community.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Community initiatives, social impact, partnerships, local
              engagements, and developments from across the Nexus Hub
              ecosystem.
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
                Community News
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Follow the work where people and communities are involved.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                The Community category provides a dedicated place for
                news connected to community-focused work across the Nexus
                Hub ecosystem.
              </p>

              <p>
                It is designed for developments, initiatives, engagements,
                partnerships, and impact-related updates rather than
                replacing the deeper storytelling experience provided by
                NHTV Stories.
              </p>

              <p>
                That distinction allows Community news to communicate
                developments while NHTV Stories can later explore the
                people, experiences, and context behind them in greater
                depth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY NEWS STREAM */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Community News Stream
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Community developments will appear here.
              </h2>
            </div>

            <span className="text-sm font-medium text-slate-500">
              No Community news published yet
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-[#050A30] p-8 text-white sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                  Community Development
                </p>

                <h3 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                  A dedicated news stream for community-focused work.
                </h3>

                <p className="mt-5 max-w-2xl leading-7 text-white/65">
                  Future stories can cover community initiatives,
                  partnerships, social impact activity, engagements,
                  projects, and important developments.
                </p>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Current State
                </p>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-[#050A30]">
                    No Community news published yet.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Once connected to the publishing system, this stream
                    can surface recent, featured, or initiative-specific
                    community stories.
                  </p>
                </div>

                <Link
                  href="/projects"
                  className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                >
                  Explore Projects
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
              Community news from different angles.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The category is flexible enough to cover both ongoing
              community work and significant developments without becoming
              a generic community-content page.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {communityCoverage.map((item) => (
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

      {/* COMMUNITY SIGNALS */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                What You Can Expect
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Follow community activity as it develops.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                The Community news stream can follow initiatives from
                announcement and engagement through delivery, milestones,
                and continued activity.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {communitySignals.map((item) => (
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

      {/* CONNECTION TO STORIES AND PROJECTS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Connected Ecosystem
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              News can lead into deeper community experiences.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Community news communicates what is happening, while other
              Nexus Hub properties can provide the deeper context,
              project information, or storytelling around it.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/projects"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Projects
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Explore the work behind the news.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Move from a community development story into the projects
                and initiatives themselves.
              </p>
            </Link>

            <Link
              href="/media/nhtv-stories"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                NHTV Stories
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Explore the human story.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Discover People, Culture, Community, Featured, and Video
                storytelling.
              </p>
            </Link>

            <Link
              href="/media"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Media
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Explore the wider media ecosystem.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Move into NHTV properties for deeper media coverage and
                visual storytelling.
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
                Ready for connected community news.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Each future Community news item can connect to a project,
                initiative, organisation, location, partner, or related
                story.
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
            Community News
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Follow the people, initiatives, and communities connected to
            the work.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore Community news or move into the wider projects and
            media ecosystem.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/news"
              className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              All News
            </Link>

            <Link
              href="/projects"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
