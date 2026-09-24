import Link from 'next/link';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const activities = {
  'community-digital-skills-clinic': {
    title: 'Community Digital Skills Clinic',
    category: 'Community',
    status: 'Upcoming',
    date: '26 September 2026',
    time: '9:00 AM – 1:00 PM',
    location: 'Kenya',
    summary:
      'A representative community activity focused on practical digital skills, guided learning, and accessible technology awareness.',
    description:
      'This sample activity demonstrates how an individual activity can present its purpose, participation information, schedule, and programme details separately from the Events system.',
  },
};

export function generateStaticParams() {
  return [
    {
      slug: 'community-digital-skills-clinic',
    },
  ];
}

export default async function ActivityPage({ params }: PageProps) {
  const { slug } = await params;
  const activity = activities[slug as keyof typeof activities];

  if (!activity) {
    notFound();
  }

  return (
    <main className="bg-white text-[#050A30]">
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href="/events-activities/activities"
            className="text-sm font-semibold text-[#5FC9E6]"
          >
            ← Activities
          </Link>

          <div className="mt-10">
            <span className="inline-flex rounded-full bg-[#5FC9E6]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#5FC9E6]">
              {activity.status}
            </span>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              {activity.category}
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              {activity.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              {activity.summary}
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
                  public activity-detail experience. It is not a confirmed
                  Nexus Hub activity announcement.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-3xl font-bold tracking-tight">
                  About this activity
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {activity.description}
                </p>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold tracking-tight">
                  Activity programme
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    'Digital skills orientation',
                    'Hands-on learning',
                    'Guided practice',
                    'Questions & support',
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
                  Activity Information
                </p>

                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Date
                    </dt>
                    <dd className="mt-1 font-semibold">{activity.date}</dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Time
                    </dt>
                    <dd className="mt-1 font-semibold">{activity.time}</dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Location
                    </dt>
                    <dd className="mt-1 font-semibold">
                      {activity.location}
                    </dd>
                  </div>
                </dl>

                <Link
                  href={`/events-activities/activities/${slug}/register`}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-[#1266B6] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Participate in Activity
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
