import Link from 'next/link';
import { ArrowUpRight, CalendarDays, Handshake, MapPin, Megaphone, Users } from 'lucide-react';

const activityTypes = [
  {
    number: '01',
    icon: CalendarDays,
    title: 'Events & Programmes',
    description: 'Information about events, programmes, workshops, forums and other organised activities led by or involving Nexus Hub.',
    examples: ['Public events and programmes', 'Workshops and forums', 'Scheduled activities'],
  },
  {
    number: '02',
    icon: Handshake,
    title: 'Engagements & Collaboration',
    description: 'A record of relevant stakeholder engagements, collaborative initiatives and participation with organisations or communities.',
    examples: ['Stakeholder engagements', 'Collaborative initiatives', 'Institutional and community participation'],
  },
  {
    number: '03',
    icon: Users,
    title: 'Community Activities',
    description: 'Activities focused on participation, learning, connection and practical engagement with communities.',
    examples: ['Community initiatives', 'Learning and participation activities', 'Outreach and shared initiatives'],
  },
  {
    number: '04',
    icon: MapPin,
    title: 'Participation & Highlights',
    description: 'Selected reports and highlights from activities in which Nexus Hub has participated or contributed.',
    examples: ['Participation summaries', 'Activity highlights', 'Key takeaways and outcomes'],
  },
];

export default function EventsPage() {
  return (
    <main className="bg-white text-[#050B33]">
      <section className="relative isolate overflow-hidden bg-[#050B33] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(79,220,232,0.2),transparent_32%),radial-gradient(circle_at_12%_90%,rgba(139,108,255,0.22),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4FDCE8]">Nexus Hub · Events & Activities</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
            Where ideas meet people and action.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
            Discover events, programmes, engagements and activities connected to the work and initiatives of Nexus Hub.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F2FF]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">Why this space exists</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Documenting participation and activity.</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              This section is dedicated to activities and engagements: what is scheduled, what Nexus Hub participates in and what has taken place. It complements Publications & Insights, which focuses on knowledge and ideas, and leaves news and media coverage to the Nexus Hub TV application.
            </p>
            <p>
              Information will distinguish upcoming activities from completed ones. Dates, venues, organisers, participation and outcomes will only be stated when confirmed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">Activity categories</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Ways Nexus Hub connects and participates.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              These categories define the intended scope of this section; they do not imply that events or activities have already taken place.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {activityTypes.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.number} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold tracking-[0.16em] text-[#0A4DA8]">CATEGORY {item.number}</span>
                    <Icon size={25} strokeWidth={1.7} className="text-[#0A4DA8]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold tracking-tight">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                    {item.examples.map((example) => (
                      <li key={example} className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4FDCE8]" aria-hidden="true" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#EFFBFC]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="rounded-3xl border border-[#CDECEF] bg-white p-8 sm:p-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#050B33] text-[#4FDCE8]">
              <Megaphone size={28} strokeWidth={1.7} aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">Events and activity updates</p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">Confirmed activities will appear here.</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600">
              This page establishes the structure for sharing Nexus Hub events and activities. Listings and reports will be added when details are confirmed and ready to publish.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#050B33] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4FDCE8]">Connect with us</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">Interested in an event or collaboration?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">Contact Nexus Hub about participation, activities, programmes or collaborative engagements.</p>
          <Link href="/contact?channel=events" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#4FDCE8] px-7 py-3.5 text-sm font-bold text-[#050B33] transition hover:bg-white">
            Contact Nexus Hub <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
