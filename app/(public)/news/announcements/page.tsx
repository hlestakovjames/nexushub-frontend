import Link from 'next/link';

const announcementTypes = [
  {
    number: '01',
    title: 'Official Announcements',
    description:
      'Formal updates from Nexus Hub covering important organisational developments, decisions, launches, and notices.',
  },
  {
    number: '02',
    title: 'Milestones',
    description:
      'Updates marking significant achievements, completed initiatives, new capabilities, and moments of progress.',
  },
  {
    number: '03',
    title: 'Launches',
    description:
      'Announcements introducing new products, platforms, services, programmes, projects, and media initiatives.',
  },
  {
    number: '04',
    title: 'Important Updates',
    description:
      'Timely notices and changes that audiences, partners, clients, or the wider Nexus Hub community may need to know.',
  },
];

const publishingFields = [
  'Announcement title',
  'Publishing date',
  'Announcement category',
  'Summary and full content',
  'Author or publishing team',
  'Featured status',
  'Related links and media',
  'Update history',
];

export default function NewsAnnouncementsPage() {
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
              Announcements
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Important updates,
              <br />
              clearly communicated.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              The official announcement space for milestones, launches,
              organisational updates, and important news from Nexus Hub.
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
                Official Updates
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                One place for the updates that matter.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Announcements provides a dedicated area for information
                formally published by Nexus Hub.
              </p>

              <p>
                It is separate from the broader News categories so that
                official notices and organisational updates remain easy to
                identify and discover.
              </p>

              <p>
                The future publishing system can support announcements as
                structured records with their own categories, publishing
                dates, authorship, status, and related media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT STATE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Announcement Library
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Official announcements will appear here.
              </h2>
            </div>

            <span className="text-sm font-medium text-slate-500">
              No announcements published yet
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-[#050A30] p-8 text-white sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                  Official Nexus Hub Notice
                </p>

                <h3 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                  The announcement publishing space is ready.
                </h3>

                <p className="mt-5 max-w-2xl leading-7 text-white/65">
                  Once official announcements are published, this area can
                  surface the latest notices with publication dates,
                  categories, authorship, and supporting information.
                </p>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Current State
                </p>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-[#050A30]">
                    No announcements are published yet.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    The backend can later populate this area with official
                    announcements and their associated metadata.
                  </p>
                </div>

                <Link
                  href="/news"
                  className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                >
                  View All News
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENT TYPES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Announcement Types
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different kinds of official communication.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The announcement structure is broad enough to cover major
              Nexus Hub communications without mixing them with ordinary
              editorial news.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {announcementTypes.map((item) => (
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

      {/* EDITORIAL ROLE */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Editorial Role
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Official communication should remain distinct.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                Announcements and general news can coexist within the same
                News property while maintaining different editorial
                purposes and publishing workflows.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Official',
                  description:
                    'Published as an authorised Nexus Hub communication.',
                },
                {
                  title: 'Timely',
                  description:
                    'Focused on information audiences need to know.',
                },
                {
                  title: 'Structured',
                  description:
                    'Managed with clear categories, dates, and metadata.',
                },
                {
                  title: 'Discoverable',
                  description:
                    'Easy to find independently from broader news coverage.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 leading-7 text-white/65">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PUBLISHING FIELDS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Future Publishing Structure
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Prepared for a proper announcement workflow.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                The frontend establishes the publishing destination now;
                the future backend can manage drafting, approval,
                publication, updates, and related media.
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

      {/* RELATED NEWS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Explore News
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore the other Nexus Hub news areas.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/news/nexus-hub"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Nexus Hub
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Organisation news.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Follow broader Nexus Hub developments, milestones, and
                organisational updates.
              </p>
            </Link>

            <Link
              href="/news/digital"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Digital
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Digital developments.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Discover news around digital products, technology, and
                innovation.
              </p>
            </Link>

            <Link
              href="/news/business"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Business
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Business developments.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore business-related announcements, partnerships, and
                developments.
              </p>
            </Link>
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
            Stay informed through official Nexus Hub updates.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore announcements alongside organisation, digital,
            business, media, and community news.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/news"
              className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              All News
            </Link>

            <Link
              href="/news/nexus-hub"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Nexus Hub News
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
