import Link from 'next/link';

export default function EventsActivitiesPage() {
  return (
    <main className="bg-white text-[#050A30]">
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Events &amp; Activities
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            Connect, participate, and experience Nexus Hub.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Discover upcoming events, activities, initiatives, and
            experiences across the Nexus Hub ecosystem.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Events
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Upcoming Events
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Event listings, schedules, venues, participation details,
                and announcements will appear here.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Activities
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Activities &amp; Initiatives
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Ongoing activities, community initiatives, programs,
                and participation opportunities will appear here.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Coming Soon
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Events and activities are being developed.
            </h2>

            <Link
              href="/"
              className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]"
            >
              Return to Nexus Hub →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}