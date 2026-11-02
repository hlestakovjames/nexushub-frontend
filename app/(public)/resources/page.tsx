import Link from 'next/link';
import {
  ArrowUpRight,
  BookMarked,
  ClipboardList,
  Download,
  FileText,
  GraduationCap,
  Library,
  Lightbulb,
} from 'lucide-react';

const resourceTypes = [
  {
    number: '01',
    icon: FileText,
    title: 'Practical Guides',
    description:
      'Step-by-step material designed to explain a process, help someone complete a task or make a subject easier to understand.',
    examples: ['How-to guides and walkthroughs', 'Getting-started material', 'Practical explanations'],
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Templates & Toolkits',
    description:
      'Reusable structures and organised toolkits that can support planning, documentation and everyday work.',
    examples: ['Planning and documentation templates', 'Checklists and worksheets', 'Project and workflow tools'],
  },
  {
    number: '03',
    icon: BookMarked,
    title: 'Reference Materials',
    description:
      'Organised reference content that helps readers find, revisit and apply useful information.',
    examples: ['Reference notes and explainers', 'Glossaries and quick references', 'Curated external resources'],
  },
  {
    number: '04',
    icon: GraduationCap,
    title: 'Learning Materials',
    description:
      'Supporting materials for independent learning, skills development and understanding digital and business concepts.',
    examples: ['Learning notes and study aids', 'Introductory learning packs', 'Exercises and practice material'],
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-white text-[#050B33]">
      <section className="relative isolate overflow-hidden bg-[#050B33] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(79,220,232,0.2),transparent_32%),radial-gradient(circle_at_12%_90%,rgba(139,108,255,0.22),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4FDCE8]">
            Nexus Hub · Resources
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
            Useful materials for learning, planning and doing.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
            A growing collection of practical guides, reusable tools and reference materials
            intended to help people turn information into action.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F2FF]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              The purpose of this library
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Knowledge made practical.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              Resources is intended to bring together materials that readers can consult and use:
              practical instructions, reusable templates, reference documents and learning aids.
              The emphasis is on usefulness, clarity and application.
            </p>
            <p>
              It complements Publications & Insights rather than duplicating it. Publications
              explores ideas and shares perspectives; Resources focuses on materials that support
              a task, decision, learning activity or process.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              Resource categories
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Different formats for different needs.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              These categories describe the intended scope of the resource library. They are not
              a claim that materials in every category are currently available.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {resourceTypes.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.number}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold tracking-[0.16em] text-[#0A4DA8]">
                      CATEGORY {item.number}
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
              <Library size={28} strokeWidth={1.7} aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              A considered resource library
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Clear, relevant and responsibly shared.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Materials published here should have a clear purpose, an identifiable audience and
              enough context to be used responsibly. Where relevant, we will identify the source,
              version, date and any limitations or usage conditions.
            </p>
            <p>
              Downloadable files and external references will be linked only when they are ready
              and their destinations have been checked.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#050B33] text-[#4FDCE8]">
              <Download size={28} strokeWidth={1.7} aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              Library development
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Resources will be added as they are prepared.
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600">
              The library structure is being established. Individual guides, templates and
              reference materials will appear here when they are complete and approved for sharing.
              No placeholder downloads or unverified materials are presented as available.
            </p>
            <Link
              href="/contact?channel=resources"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#050B33] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0A4DA8]"
            >
              Enquire about resources <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#050B33] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#4FDCE8]">
            <Lightbulb size={28} strokeWidth={1.7} aria-hidden="true" />
          </div>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#4FDCE8]">
            Explore ideas as well
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Interested in the thinking behind the tools?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Visit Publications & Insights for articles, research notes, explanations and perspectives.
          </p>
          <Link
            href="/publications"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#4FDCE8] px-7 py-3.5 text-sm font-bold text-[#050B33] transition hover:bg-white"
          >
            Explore Insights <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
