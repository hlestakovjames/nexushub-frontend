import Link from 'next/link';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const events = {
  'nexus-hub-digital-innovation-forum': {
    title: 'Nexus Hub Digital Innovation Forum',
    category: 'Technology & Innovation',
    status: 'Upcoming',
    date: '17 October 2026',
    time: '10:00 AM – 4:00 PM',
    venue: 'Nexus Hub',
    location: 'Kenya',
    summary:
      'A representative Nexus Hub event focused on digital innovation, technology, entrepreneurship, and the practical use of emerging digital solutions.',
    description:
      'This sample event demonstrates how a published Nexus Hub event can present its identity, schedule, location, programme information, and participation details through the public Events platform.',
  },
};

export function generateStaticParams() {
  return [
    {
      slug: 'nexus-hub-digital-innovation-forum',
    },
  ];
}

export default async function EventPage({ params }: PageProps) {
  const { slug } = await params;
  const event = events[slug as keyof typeof events];

  if (!event) {
    notFound();
  }

  return (
    <main className="bg-white text-[#050A30]">
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href="/events-activities/events"
            className="text-sm font-semibold text-[#5FC9E6]"
          >
            ← Events
          </Link>

          <div className="mt-10">
            <span className="inline-flex rounded-full bg-[#5FC9E6]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#5FC9E6]">
              {event.status}
            </span>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              {event.category}
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              {event.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              {event.summary}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <article>
              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-700">
                  Frontend Demo Record
                </p>

                <p className="mt-2 text-sm leading-6 text-amber-800">
                  This is representative sample content created to validate the
                  public event-detail experience. It is not a confirmed Nexus
                  Hub event announcement.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-3xl font-bold tracking-tight">
                  About this event
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {event.description}
                </p>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold tracking-tight">
                  Programme
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    'Opening & introduction',
                    'Digital innovation sessions',
                    'Technology discussions',
                    'Networking & collaboration',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <p className="font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <aside>
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1266B6]">
                  Event Information
                </p>

                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Date
                    </dt>
                    <dd className="mt-1 font-semibold">{event.date}</dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Time
                    </dt>
                    <dd className="mt-1 font-semibold">{event.time}</dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Venue
                    </dt>
                    <dd className="mt-1 font-semibold">{event.venue}</dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Location
                    </dt>
                    <dd className="mt-1 font-semibold">{event.location}</dd>
                  </div>
                </dl>

                <Link
                  href={`/events-activities/events/${slug}/register`}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-[#1266B6] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Register for Event
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
