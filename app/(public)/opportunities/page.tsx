import Link from 'next/link';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Handshake,
  Lightbulb,
  GraduationCap,
  Users,
  Building2,
} from 'lucide-react';

const opportunityTypes = [
  {
    number: '01',
    icon: BriefcaseBusiness,
    title: 'Career Opportunities',
    description:
      'Professional and employment opportunities that may arise within Nexus Hub or its initiatives.',
    examples: ['Published vacancies', 'Specific role openings', 'Professional engagements'],
    availability: 'Published only when a genuine opening exists',
  },
  {
    number: '02',
    icon: GraduationCap,
    title: 'Internships & Attachments',
    description:
      'Practical learning and workplace exposure opportunities, when internship or attachment placements are offered.',
    examples: ['Internship placements', 'Industrial attachments', 'Practical learning engagements'],
    availability: 'Subject to an announced programme and available placements',
  },
  {
    number: '03',
    icon: Users,
    title: 'Calls for Participation',
    description:
      'Invitations for individuals, groups or organisations to take part in selected activities and initiatives.',
    examples: ['Programmes and initiatives', 'Challenges and open calls', 'Community participation'],
    availability: 'Published when participation is open',
  },
  {
    number: '04',
    icon: Lightbulb,
    title: 'Innovation Opportunities',
    description:
      'Ways to contribute ideas, explore problems and take part in innovation or research-related initiatives.',
    examples: ['Problem-solving initiatives', 'Research participation', 'Innovation challenges'],
    availability: 'Details depend on each initiative',
  },
  {
    number: '05',
    icon: Handshake,
    title: 'Partnerships & Collaboration',
    description:
      'Opportunities for organisations, institutions and individuals to explore structured collaboration with Nexus Hub.',
    examples: ['Institutional partnerships', 'Project collaboration', 'Technical and knowledge exchange'],
    availability: 'Enquiries are welcome; specific calls will be announced',
  },
  {
    number: '06',
    icon: Building2,
    title: 'Programmes & Funding Calls',
    description:
      'Relevant external or joint programmes, grants and funding calls that Nexus Hub has verified and considers appropriate to share.',
    examples: ['Grant and funding calls', 'Enterprise programmes', 'External development initiatives'],
    availability: 'Shared only where details and source can be verified',
  },
];

export default function OpportunitiesPage() {
  return (
    <main className="bg-white text-[#050B33]">
      <section className="relative isolate overflow-hidden bg-[#050B33] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(79,220,232,0.2),transparent_32%),radial-gradient(circle_at_12%_90%,rgba(139,108,255,0.22),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4FDCE8]">
            Nexus Hub · Opportunities
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
            Find ways to participate, contribute and grow.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
            Discover selected opportunities connected to Nexus Hub, its initiatives and relevant
            programmes. This page provides public information and a starting point for enquiries.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F2FF]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              The purpose of this page
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Making opportunities easier to discover.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              Opportunities brings together public notices and information about ways people and
              organisations may connect with Nexus Hub. Each listing should explain what is being
              offered, who may participate, the relevant requirements, the timeline and how to
              express interest.
            </p>
            <p>
              This corporate website is the information and discovery layer. The wider Nexus Hub
              Platform is intended to support more extensive opportunity discovery, participant
              accounts and application or participation workflows as those capabilities are
              developed. This page does not imply that those platform workflows are currently live.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              Opportunity areas
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Different ways to get involved.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              These are the intended categories for this section. They describe the types of
              opportunities that may be published; they are not announcements of current vacancies,
              placements, grants or open calls.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {opportunityTypes.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.number}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold tracking-[0.16em] text-[#0A4DA8]">
                      AREA {item.number}
                    </span>
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
                  <p className="mt-5 rounded-xl bg-[#F5F2FF] px-4 py-3 text-sm leading-6 text-slate-600">
                    <span className="font-bold text-[#050B33]">Publication approach: </span>
                    {item.availability}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#EFFBFC]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="rounded-3xl border border-[#CDECEF] bg-white p-8 sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              Current listings
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
              New opportunities will be announced here.
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600">
              There are no specific openings or calls being announced in this page update. When an
              opportunity is ready to publish, its listing will include confirmed details, eligibility
              or participation requirements, deadlines where applicable, and an official contact or
              application route.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#050B33] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4FDCE8]">
            Start a conversation
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Have an opportunity or collaboration to discuss?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Contact Nexus Hub about a potential partnership, programme, participation opportunity
            or other relevant engagement.
          </p>
          <Link
            href="/contact?channel=opportunities"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#4FDCE8] px-7 py-3.5 text-sm font-bold text-[#050B33] transition hover:bg-white"
          >
            Contact Nexus Hub <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
