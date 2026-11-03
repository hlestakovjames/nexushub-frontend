import Link from 'next/link';
import { ArrowUpRight, BookOpen, Compass, Lightbulb, Microscope, Network, PenLine } from 'lucide-react';

const editorialThemes = [
  {
    number: '01',
    icon: Network,
    title: 'Systems Thinking',
    description:
      'Exploring how people, processes, technologies and institutions interact, and how understanding those relationships can lead to better solutions.',
    topics: ['Systems and interconnectedness', 'Process and workflow design', 'Root-cause exploration'],
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Technology & Digital Transformation',
    description:
      'Practical perspectives on digital tools, software, platforms and the thoughtful use of technology in organisations and everyday life.',
    topics: ['Digital systems and platforms', 'Technology in organisations', 'Responsible digital adoption'],
  },
  {
    number: '03',
    icon: Microscope,
    title: 'Research & Innovation',
    description:
      'Documenting questions, investigations, experiments and lessons that can help move promising ideas towards practical applications.',
    topics: ['Problem investigation', 'Prototypes and experimentation', 'Learning from evidence'],
  },
  {
    number: '04',
    icon: BookOpen,
    title: 'Business, Enterprise & Society',
    description:
      'Considering how organisations create value, respond to needs, collaborate and develop sustainable initiatives.',
    topics: ['Business and enterprise', 'Organisational development', 'Community-centred solutions'],
  },
  {
    number: '05',
    icon: PenLine,
    title: 'Media, Creativity & Communication',
    description:
      'Looking at visual communication, storytelling, creative practice and the role of media in sharing knowledge and ideas.',
    topics: ['Creative communication', 'Digital storytelling', 'Media and audiences'],
  },
];

export default function PublicationsPage() {
  return (
    <main className="bg-white text-[#050B33]">
      <section className="relative isolate overflow-hidden bg-[#050B33] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(79,220,232,0.2),transparent_32%),radial-gradient(circle_at_12%_90%,rgba(139,108,255,0.22),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4FDCE8]">
            Nexus Hub · Publications & Insights
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
            Ideas, knowledge and perspectives worth sharing.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
            A space for research notes, practical explanations, informed perspectives and lessons
            emerging from the work and interests of Nexus Hub.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F2FF]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              Our editorial approach
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Useful knowledge before promotion.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              Publications & Insights is intended to make ideas understandable, share what is being
              learned and encourage thoughtful discussion. Content should be grounded in research,
              practical experience or clearly identified analysis.
            </p>
            <p>
              We aim to distinguish established facts from opinion, early exploration and future
              possibilities. Where a subject involves technical or specialist claims, sources and
              relevant limitations should be made clear.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              Areas of exploration
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Connected themes across our areas of focus.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              These themes provide an editorial direction for future articles and research notes.
              They are not a list of publications already released.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {editorialThemes.map((theme) => {
              const Icon = theme.icon;
              return (
                <article key={theme.number} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold tracking-[0.16em] text-[#0A4DA8]">
                      THEME {theme.number}
                    </span>
                    <Icon size={25} strokeWidth={1.7} className="text-[#0A4DA8]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold tracking-tight">{theme.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{theme.description}</p>
                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                    {theme.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4FDCE8]" aria-hidden="true" />
                        {topic}
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
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#050B33] text-[#4FDCE8]">
              <Compass size={28} strokeWidth={1.7} aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              Knowledge with purpose
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              From questions to useful understanding.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-600">
              Our intention is to connect exploration with application: ask meaningful questions,
              examine available knowledge, test assumptions where possible, and communicate what
              has been learned in a form others can use.
            </p>
            <Link
              href="/areas-of-focus#innovation-systems-thinking"
              className="mt-7 inline-flex items-center gap-2 font-bold text-[#0A4DA8] hover:text-[#050B33]"
            >
              Explore Innovation & Systems Thinking <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#050B33] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4FDCE8]">
            Contribute a perspective
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Have research, an insight or an idea to share?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            We welcome thoughtful enquiries about knowledge sharing, research discussions and
            collaboration.
          </p>
          <Link
            href="/contact?channel=publications"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#4FDCE8] px-7 py-3.5 text-sm font-bold text-[#050B33] transition hover:bg-white"
          >
            Get in touch <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
