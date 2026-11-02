import Link from 'next/link';
import {
  ArrowUpRight,
  CalendarDays,
  FolderKanban,
  Megaphone,
  Newspaper,
  Radio,
  Users,
} from 'lucide-react';

const updateStreams = [
  {
    number: '01',
    icon: Newspaper,
    title: 'Company News',
    description:
      'Official announcements, organisational developments, milestones and important updates from Nexus Hub.',
    examples: ['Company announcements', 'Organisational developments', 'Milestones and notices'],
  },
  {
    number: '02',
    icon: FolderKanban,
    title: 'Project Updates',
    description:
      'Progress and developments from projects, products and digital initiatives, with a clear distinction between live work and future plans.',
    examples: ['Project progress', 'Product developments', 'New capabilities and releases'],
  },
  {
    number: '03',
    icon: CalendarDays,
    title: 'Events & Engagements',
    description:
      'Information about relevant events, meetings, participation, collaborations and community or industry engagements.',
    examples: ['Upcoming events', 'Event reports and highlights', 'Community and industry engagements'],
  },
  {
    number: '04',
    icon: Radio,
    title: 'Media & Productions',
    description:
      'Selected updates relating to media activity, creative productions, coverage and the developing work of Nexus Hub TV.',
    examples: ['Media announcements', 'Production updates', 'Stories and coverage'],
  },
  {
    number: '05',
    icon: Users,
    title: 'Opportunities & Notices',
    description:
      'Relevant calls, invitations, participation opportunities and notices intended for the Nexus Hub community.',
    examples: ['Calls and invitations', 'Participation opportunities', 'Important notices'],
  },
];

export default function NewsPage() {
  return (
    <main className="bg-white text-[#050B33]">
      <section className="relative isolate overflow-hidden bg-[#050B33] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(79,220,232,0.2),transparent_32%),radial-gradient(circle_at_12%_90%,rgba(139,108,255,0.22),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4FDCE8]">
            Nexus Hub · News & Activities
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
            What’s happening across Nexus Hub.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
            Follow company announcements, project developments, events, engagements and other
            activities as the Nexus Hub organisation and its initiatives evolve.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F2FF]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              The updates space
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              A record of progress, not just announcements.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              News & Activities is intended to provide a useful, verifiable record of what Nexus
              Hub announces, develops, participates in and delivers. It brings together updates
              that might otherwise be scattered across different initiatives and channels.
            </p>
            <p>
              Published updates should identify what has happened, what is currently underway and
              what is planned. Dates, project status and other material details will be stated
              clearly so that plans are not mistaken for completed work.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              What belongs here
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Five streams of updates.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              These are the planned coverage categories for this page, not a claim that each
              category already has published stories or activities.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {updateStreams.map((stream) => {
              const Icon = stream.icon;
              return (
                <article
                  key={stream.number}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold tracking-[0.16em] text-[#0A4DA8]">
                      STREAM {stream.number}
                    </span>
                    <Icon size={25} strokeWidth={1.7} className="text-[#0A4DA8]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold tracking-tight">{stream.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{stream.description}</p>
                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                    {stream.examples.map((example) => (
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
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              Updates and announcements
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Verified updates will be published here.
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600">
              This page establishes the structure for Nexus Hub news and activity updates. Stories
              will be added as announcements, project developments and activities are confirmed
              and ready to share. No event dates or activity reports are implied by this page.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#050B33] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4FDCE8]">
            Stay connected
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Have an update or activity to share with Nexus Hub?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Contact us about announcements, event information, project developments or relevant
            collaboration opportunities.
          </p>
          <Link
            href="/contact?channel=news"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#4FDCE8] px-7 py-3.5 text-sm font-bold text-[#050B33] transition hover:bg-white"
          >
            Contact Nexus Hub <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
