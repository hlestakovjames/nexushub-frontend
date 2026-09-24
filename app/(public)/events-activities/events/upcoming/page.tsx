import Link from 'next/link';

const events = [
  {
    title: 'Nexus Hub Digital Innovation Forum',
    category: 'Technology & Innovation',
    date: '17 October 2026',
    time: '10:00 AM – 4:00 PM',
    venue: 'Nexus Hub',
    location: 'Kenya',
    href: '/events-activities/events/nexus-hub-digital-innovation-forum',
  },
];

export default function UpcomingEventsPage() {
  return (
    <main className="bg-white text-[#050A30]">
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href="/events-activities/events"
            className="text-sm font-semibold text-[#5FC9E6]"
          >
            ← Events
          </Link>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Events
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            Upcoming Events
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
            Browse published events that are scheduled for the future.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6">
            {events.map((event) => (
              <Link
                key={event.href}
                href={event.href}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#5FC9E6] hover:shadow-lg"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-[#5FC9E6]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#1266B6]">
                    Upcoming
                  </span>

                  <span className="text-sm font-semibold text-slate-400">
                    {event.category}
                  </span>
                </div>

                <h2 className="mt-5 text-3xl font-bold tracking-tight">
                  {event.title}
                </h2>

                <div className="mt-5 grid gap-2 text-sm text-slate-600 sm:grid-cols-3">
                  <span>{event.date}</span>
                  <span>{event.time}</span>
                  <span>
                    {event.venue}, {event.location}
                  </span>
                </div>

                <span className="mt-7 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  View Event & Register →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
