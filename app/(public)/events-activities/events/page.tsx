import Link from 'next/link';

const upcomingEvents = [
  {
    title: 'Nexus Hub Digital Innovation Forum',
    category: 'Technology & Innovation',
    date: '17 October 2026',
    time: '10:00 AM – 4:00 PM',
    venue: 'Nexus Hub',
    href: '/events-activities/events/nexus-hub-digital-innovation-forum',
  },
];

export default function EventsPage() {
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
              Events
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Events
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              Discover scheduled events, gatherings, launches, programmes,
              meetings, and other organised occasions across Nexus Hub.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Upcoming
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Published upcoming events.
              </h2>
            </div>

            <Link
              href="/events-activities/events/upcoming"
              className="text-sm font-semibold text-[#1266B6]"
            >
              View all upcoming →
            </Link>
          </div>

          <div className="mt-12 grid gap-6">
            {upcomingEvents.map((event) => (
              <Link
                key={event.href}
                href={event.href}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-[#5FC9E6] hover:shadow-lg"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-[#5FC9E6]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#1266B6]">
                    Upcoming
                  </span>

                  <span className="text-sm font-semibold text-slate-400">
                    {event.category}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                  {event.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-600">
                  <span>{event.date}</span>
                  <span>{event.time}</span>
                  <span>{event.venue}</span>
                </div>

                <span className="mt-7 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  View Event & Register →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ['Ongoing Events', '/events-activities/events/ongoing'],
              ['Past Events', '/events-activities/events/past'],
              ['Venues', '/events-activities/events/venues'],
              ['Categories', '/events-activities/events/categories'],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-[#5FC9E6] hover:shadow-lg"
              >
                <p className="text-xl font-bold">{label}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-[#1266B6]">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
