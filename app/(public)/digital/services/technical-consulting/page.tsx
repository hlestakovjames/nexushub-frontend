import Link from 'next/link';

import RelatedServices from '@/components/digital/RelatedServices';

const capabilities = [
  {
    title: 'Digital Strategy & Planning',
    description:
      'Define practical technology priorities around organizational goals, available resources, and long-term direction.',
  },
  {
    title: 'Technology Assessment',
    description:
      'Review existing systems, technologies, processes, and technical challenges to identify opportunities for improvement.',
  },
  {
    title: 'System Architecture Guidance',
    description:
      'Provide technical direction for structuring applications, platforms, integrations, data, and supporting infrastructure.',
  },
  {
    title: 'Technical Project Planning',
    description:
      'Translate ideas and requirements into practical technical plans, priorities, phases, and implementation approaches.',
  },
  {
    title: 'Technology Evaluation',
    description:
      'Compare technology options and approaches based on requirements, suitability, maintainability, and future needs.',
  },
  {
    title: 'Digital Roadmaps',
    description:
      'Create clear development paths that help organizations move from their current state toward their desired digital environment.',
  },
];

const consultingAreas = [
  'Planning a new digital product',
  'Evaluating technology options',
  'Modernizing an existing system',
  'Planning technical implementations',
  'Improving system architecture',
  'Preparing for digital growth',
  'Assessing digital workflows',
  'Making technology decisions',
];

const outcomes = [
  'Technology recommendations',
  'Technical roadmaps',
  'Architecture guidance',
  'Project implementation plans',
  'System improvement recommendations',
  'Technology evaluations',
  'Digital development priorities',
  'Long-term technical direction',
];

const process = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We learn about your organization, objectives, existing technology, challenges, and priorities.',
  },
  {
    number: '02',
    title: 'Assess',
    description:
      'We examine the current situation and identify technical opportunities, risks, gaps, and possible approaches.',
  },
  {
    number: '03',
    title: 'Recommend',
    description:
      'We translate the findings into practical recommendations and a clear technical direction.',
  },
  {
    number: '04',
    title: 'Guide',
    description:
      'We can support implementation, decision-making, technical planning, and future improvements.',
  },
];

export default function TechnicalConsultingPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <Link
              href="/digital/services"
              className="text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
            >
              ← Digital Services
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              Technical Consulting
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Make better technology decisions with a clearer technical direction.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Practical technical guidance for organizations planning,
              improving, integrating, or scaling digital systems and products.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Discuss Your Challenge
              </Link>

              <Link
                href="/projects"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                What We Do
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Technology decisions should support the bigger picture.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Choosing technologies, planning systems, or deciding
                how a digital product should evolve can be difficult
                without a clear technical perspective.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We help organizations understand their options and
                make practical technology decisions based on their
                objectives, users, resources, and long-term direction.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Common Questions
              </p>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li>• What technology should we use?</li>
                <li>• How should our system be structured?</li>
                <li>• How can our existing systems be improved?</li>
                <li>• What should we build first?</li>
                <li>• How should the project be approached?</li>
                <li>• How do we prepare for future growth?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Practical guidance across the digital lifecycle.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Consulting can support projects before development begins,
              during implementation, or when an existing digital
              environment needs improvement.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTING AREAS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                When We Can Help
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Useful at different stages of the journey.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Technical consulting can focus on a single decision
                or support a larger digital initiative from planning
                through implementation.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {consultingAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 p-6"
                >
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Possible Outcomes
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Clearer decisions. Better direction.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The exact deliverable depends on the challenge, but
              the objective is always to turn uncertainty into a
              practical technical direction.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From technical challenge to clear direction.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {process.map((step) => (
              <div key={step.number}>
                <span className="text-sm font-semibold text-[#1266B6]">
                  {step.number}
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <RelatedServices
        services={[
          {
            title: 'Digital Transformation',
            description:
              'Improve processes, modernize operations, and create a practical digital roadmap.',
            href: '/digital/services/digital-transformation',
          },
          {
            title: 'Systems Integration',
            description:
              'Connect applications, services, APIs, and data across your digital environment.',
            href: '/digital/services/systems-integration',
          },
          {
            title: 'Software Development',
            description:
              'Turn technical recommendations into custom software and working systems.',
            href: '/digital/services/software-development',
          },
        ]}
      />

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Technical Consulting
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Not sure what the right technical approach is?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us about the challenge, the existing environment, or
            the idea you are planning, and let&apos;s work through the
            technical direction together.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}