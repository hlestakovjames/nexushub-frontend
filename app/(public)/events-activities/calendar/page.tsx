import Link from 'next/link';

const filters = [
  'Events',
  'Activities',
  'Date',
  'Category',
  'Venue',
  'Status',
];

export default function CalendarPage() {
  return (
    <main className="bg-white text-[#050A30]">
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href="/events-activities"
            className="text-sm font-semibold text-[#5FC9E6]"
          >
            ← Events & Activities
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              Events & Activities
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Calendar
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              A shared scheduling view for discovering events and activities
              across the Nexus Hub ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1266B6]">
                Calendar View
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight">
                Scheduled items will appear here.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The calendar is prepared for future date-based discovery,
                filtering, and navigation once events and activities are
                connected to the backend.
              </p>

              <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1266B6]">
                  No Scheduled Items Yet
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  Published schedules will appear here when real event and
                  activity records are available.
                </p>
              </div>
            </div>

            <aside className="rounded-3xl bg-[#050A30] p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                Filters
              </p>

              <div className="mt-6 space-y-3">
                {filters.map((filter) => (
                  <div
                    key={filter}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70"
                  >
                    {filter}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/events-activities/events"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-[#5FC9E6] hover:shadow-lg"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1266B6]">
                Events
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                Browse Events →
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Explore dedicated event listings and event-specific
                information.
              </p>
            </Link>

            <Link
              href="/events-activities/activities"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-[#5FC9E6] hover:shadow-lg"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1266B6]">
                Activities
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                Browse Activities →
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Explore activities, programmes, participation opportunities,
                and activity-specific information.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
