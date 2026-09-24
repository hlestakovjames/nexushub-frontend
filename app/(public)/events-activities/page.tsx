import Link from 'next/link';

const sections = [
  {
    title: 'Events',
    href: '/events-activities/events',
    description:
      'Structured occasions, gatherings, launches, meetings, programmes, and other scheduled events.',
  },
  {
    title: 'Activities',
    href: '/events-activities/activities',
    description:
      'Ongoing or organised activities, participation opportunities, programmes, and community-facing activity.',
  },
  {
    title: 'Calendar',
    href: '/events-activities/calendar',
    description:
      'A central calendar view bringing scheduled events and activities together without merging their identities.',
  },
];

const publishedItems = [
  {
    type: 'Event',
    title: 'Nexus Hub Digital Innovation Forum',
    date: '17 October 2026',
    time: '10:00 AM – 4:00 PM',
    category: 'Technology & Innovation',
    href: '/events-activities/events/nexus-hub-digital-innovation-forum',
    description:
      'A representative sample event focused on digital innovation, technology, entrepreneurship, and practical digital solutions.',
  },
  {
    type: 'Activity',
    title: 'Community Digital Skills Clinic',
    date: '26 September 2026',
    time: '9:00 AM – 1:00 PM',
    category: 'Community',
    href: '/events-activities/activities/community-digital-skills-clinic',
    description:
      'A representative sample activity focused on practical digital skills, guided learning, and accessible technology awareness.',
  },
];

export default function EventsActivitiesPage() {
  return (
    <main className="bg-white text-[#050A30]">
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Nexus Hub
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Events & Activities
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
            Discover what is happening across the Nexus Hub ecosystem through
            dedicated event, activity, and calendar experiences.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Now Published
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Featured events and activities.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Published items are surfaced here for direct discovery. Events
              and Activities remain separate while sharing the same ecosystem.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {publishedItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-[#5FC9E6] hover:shadow-lg"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#5FC9E6]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#1266B6]">
                    {item.type}
                  </span>

                  <span className="text-sm font-semibold text-slate-400">
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[#050A30]">
                  <span>{item.date}</span>
                  <span>{item.time}</span>
                </div>

                <span className="mt-7 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  View {item.type} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Explore
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Browse the full Events & Activities property.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Events and Activities have separate public destinations, while
              the Calendar brings scheduled items into one discovery view.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-[#5FC9E6] hover:shadow-lg"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1266B6]">
                  Events & Activities
                </p>

                <h3 className="mt-5 text-3xl font-bold tracking-tight">
                  {section.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {section.description}
                </p>

                <span className="mt-8 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore {section.title} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Publication & Discovery
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A single gateway for what is happening.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                This property provides a single discovery point while
                preserving the separate identity, metadata, participation
                model, and management workflow of Events and Activities.
              </p>
            </div>

            <div className="rounded-3xl bg-[#050A30] p-8 text-white sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                Future System
              </p>

              <h3 className="mt-5 text-2xl font-bold">
                Ready for backend integration.
              </h3>

              <p className="mt-5 leading-8 text-white/65">
                Published records can eventually come from the backend with
                registration, participation, capacity, attendance,
                notifications, and administrative controls.
              </p>

              <Link
                href="/events-activities/calendar"
                className="mt-8 inline-flex text-sm font-semibold text-[#5FC9E6]"
              >
                Open Calendar →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
