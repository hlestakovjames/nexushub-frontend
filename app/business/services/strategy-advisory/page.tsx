import Link from 'next/link';

const capabilities = [
  {
    number: '01',
    title: 'Strategic Planning',
    description:
      'Turn organizational goals into clear priorities, initiatives, and practical strategic direction.',
  },
  {
    number: '02',
    title: 'Growth Strategy',
    description:
      'Evaluate opportunities for expansion, development, new offerings, and sustainable organizational growth.',
  },
  {
    number: '03',
    title: 'Strategic Review',
    description:
      'Step back from day-to-day activity to assess what is working, what is changing, and where attention is needed.',
  },
  {
    number: '04',
    title: 'Opportunity Analysis',
    description:
      'Examine new opportunities and help determine which ones are aligned with the organization and worth pursuing.',
  },
  {
    number: '05',
    title: 'Priority Setting',
    description:
      'Bring competing ideas and initiatives into a clearer order based on importance, feasibility, and expected value.',
  },
  {
    number: '06',
    title: 'Advisory Support',
    description:
      'Provide an external perspective to support important organizational and strategic decisions.',
  },
];

const focusAreas = [
  'Strategic planning',
  'Organizational growth',
  'New business initiatives',
  'Market opportunities',
  'Service and product direction',
  'Organizational change',
  'Priority and resource planning',
  'Long-term decision-making',
];

const process = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We learn about the organization, its goals, current position, challenges, and ambitions.',
  },
  {
    number: '02',
    title: 'Assess',
    description:
      'We examine the internal and external factors that influence the strategic situation.',
  },
  {
    number: '03',
    title: 'Shape',
    description:
      'We develop strategic priorities, options, recommendations, and a practical direction.',
  },
  {
    number: '04',
    title: 'Guide',
    description:
      'We can continue providing perspective and support as the organization moves from strategy toward action.',
  },
];

export default function StrategyAdvisoryPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <Link
              href="/business/services"
              className="text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
            >
              ← Business Services
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Strategy &amp; Advisory
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Turn ambition into a clearer strategic direction.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We help organizations clarify priorities, evaluate
              opportunities, plan for growth, and make more confident
              strategic decisions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Discuss Your Strategy
              </Link>

              <Link
                href="/business/services"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Business Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                What We Do
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Good strategy creates clarity about where to focus next.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Organizations can have many goals, ideas, and
                opportunities at the same time. Strategy helps determine
                which ones matter most and how they fit together.
              </p>

              <p>
                We help organizations step back, examine the bigger
                picture, and translate ambition into clearer priorities
                and practical direction.
              </p>

              <p>
                Advisory support can be focused on a specific decision
                or used across a broader strategic planning process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Strategic support for important decisions.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We adapt the scope of strategic work to the organization,
              the decision involved, and the desired outcome.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Focus Areas
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Useful when an organization needs a clearer strategic path.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Strategy and advisory work can support an organization
                before, during, or after a major decision or change.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-xl border border-slate-200 p-6"
                >
                  <p className="font-semibold">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY DIMENSIONS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5FC9E6]">
                Direction
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Where are we going?
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Clarify the organization&apos;s ambitions, objectives,
                and longer-term direction.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Priorities
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                What matters most?
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Determine which opportunities, initiatives, and
                decisions deserve attention first.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Action
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                What happens next?
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Translate strategic thinking into practical actions,
                initiatives, and implementation priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS + DIGITAL */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Business
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Strategy shapes what should happen.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Strategy and advisory work can clarify direction,
                priorities, and organizational decisions before
                implementation begins.
              </p>

              <Link
                href="/business/solutions"
                className="mt-7 inline-flex text-sm font-semibold text-[#1266B6]"
              >
                Explore Business Solutions →
              </Link>
            </div>

            <div className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5FC9E6]">
                Digital
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Technology helps make the strategy real.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                Where strategic priorities require technology, Nexus
                Hub Digital can provide the products, platforms,
                software, and integrations needed to support them.
              </p>

              <Link
                href="/digital/services"
                className="mt-7 inline-flex text-sm font-semibold text-[#5FC9E6]"
              >
                Explore Digital Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From ambition to clearer strategic direction.
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
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Explore More
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Explore more Business Services.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Strategic work can often be complemented by consulting,
                digital business, or creative capabilities.
              </p>
            </div>

            <Link
              href="/business/services"
              className="shrink-0 text-sm font-semibold text-[#1266B6] transition hover:translate-x-1"
            >
              View All Services →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/business/services/business-consulting"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                Business Consulting
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Practical guidance for understanding challenges and
                identifying useful actions.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Service →
              </span>
            </Link>

            <Link
              href="/business/services/digital-business"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                Digital Business Services
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Business-focused digital support connecting strategy
                with technology and operations.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Service →
              </span>
            </Link>

            <Link
              href="/business/services/brand-creative"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                Brand &amp; Creative Services
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Creative support that helps organizations communicate
                clearly and consistently.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Service →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Strategy &amp; Advisory
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Need a clearer strategic direction?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us what you are planning, deciding, or trying to
            achieve, and let&apos;s explore the strategic path forward.
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