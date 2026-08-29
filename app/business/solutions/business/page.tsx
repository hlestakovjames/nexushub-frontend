import Link from 'next/link';

const solutionOutcomes = [
  {
    number: '01',
    title: 'Growth',
    description:
      'Identify opportunities, priorities, and practical actions that can support sustainable business growth.',
  },
  {
    number: '02',
    title: 'Performance',
    description:
      'Strengthen the way teams, processes, resources, and business activities work together.',
  },
  {
    number: '03',
    title: 'Strategic Clarity',
    description:
      'Turn broad ambitions into clearer priorities, decisions, plans, and measurable actions.',
  },
  {
    number: '04',
    title: 'Market Position',
    description:
      'Improve how a business presents itself, reaches its audiences, and creates value in its market.',
  },
];

const solutionCapabilities = [
  {
    title: 'Business Strategy',
    description:
      'Strategic planning, opportunity assessment, priorities, and growth direction.',
    href: '/business/services/strategy-advisory',
  },
  {
    title: 'Business Consulting',
    description:
      'Practical support for organizational, operational, and business challenges.',
    href: '/business/services/business-consulting',
  },
  {
    title: 'Business Development',
    description:
      'Support for identifying opportunities, developing relationships, and pursuing growth.',
    href: '/business/partnerships',
  },
  {
    title: 'Brand & Creative',
    description:
      'Creative capabilities that strengthen positioning, communication, and market presence.',
    href: '/business/services/brand-creative',
  },
  {
    title: 'Digital Business',
    description:
      'Technology-enabled improvements that connect business objectives with digital capabilities.',
    href: '/business/services/digital-business',
  },
];

const engagementModels = [
  {
    number: '01',
    title: 'Advisory',
    description:
      'Guidance, analysis, and strategic support when an organization needs clarity before making important decisions.',
  },
  {
    number: '02',
    title: 'Project-Based',
    description:
      'A focused engagement built around a specific business challenge, objective, or initiative.',
  },
  {
    number: '03',
    title: 'Ongoing Support',
    description:
      'Continued strategic or operational support as a business works through a longer-term challenge or growth agenda.',
  },
];

const process = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We begin by understanding the business, its context, the people involved, the challenge, and the outcome being pursued.',
  },
  {
    number: '02',
    title: 'Assess',
    description:
      'We examine relevant opportunities, constraints, capabilities, processes, markets, and priorities.',
  },
  {
    number: '03',
    title: 'Shape',
    description:
      'We develop an approach that combines the capabilities most relevant to the problem.',
  },
  {
    number: '04',
    title: 'Implement',
    description:
      'We help turn the agreed approach into practical actions, initiatives, services, or improvements.',
  },
  {
    number: '05',
    title: 'Improve',
    description:
      'We review outcomes, learn from implementation, and refine the approach as conditions change.',
  },
];

const useCases = [
  'Business growth planning',
  'Strategic direction',
  'New business opportunities',
  'Operational improvement',
  'Organizational development',
  'Market positioning',
  'Customer and audience strategy',
  'Digital business initiatives',
  'Partnership development',
  'Business transformation',
];

export default function BusinessSolutionsPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <Link
              href="/business/solutions"
              className="text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
            >
              ← Business Solutions
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Business Solutions
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Turning business challenges into practical opportunities.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We help organizations address growth, strategy, performance,
              positioning, and operational challenges through coordinated
              business capabilities.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Discuss Your Challenge
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

      {/* INTRODUCTION */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                What We Solve
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Business problems rarely sit inside one box.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                A growth challenge can be connected to strategy. An
                operational issue can affect customer experience. A
                positioning problem can require both business thinking
                and creative communication.
              </p>

              <p>
                Business Solutions brings these perspectives together
                so that the response is shaped around the actual
                organizational challenge rather than around a single
                service category.
              </p>

              <p>
                We focus on practical outcomes: clearer direction,
                stronger performance, better opportunities, and
                sustainable progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Desired Outcomes
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              What a stronger business position can look like.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Every engagement starts from a specific challenge, but
              the objective is ultimately to create useful and
              sustainable business outcomes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutionOutcomes.map((outcome) => (
              <article
                key={outcome.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {outcome.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {outcome.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {outcome.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Connected Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Bring together the capabilities the problem actually needs.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A business solution can draw from multiple Nexus Hub
              capabilities depending on the organization's goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutionCapabilities.map((capability) => (
              <Link
                key={capability.href}
                href={capability.href}
                className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold transition group-hover:text-[#1266B6]">
                  {capability.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {capability.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore Capability →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Typical Use Cases
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Where Business Solutions can help.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                These examples are starting points, not fixed service
                packages. Each engagement can be adapted to the
                organization.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {useCases.map((useCase) => (
                <div
                  key={useCase}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-4"
                >
                  <p className="font-medium text-slate-700">
                    {useCase}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Engagement Models
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Flexible ways to work together.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The right engagement depends on the complexity of the
              challenge, the desired outcome, and the level of support
              required.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {engagementModels.map((model) => (
              <article
                key={model.number}
                className="rounded-2xl border border-slate-200 p-8"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {model.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {model.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {model.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From business challenge to practical action.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
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

      {/* RELATED SOLUTIONS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                More Business Solutions
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Other ways we can approach a challenge.
              </h2>
            </div>

            <Link
              href="/business/solutions"
              className="text-sm font-semibold text-[#1266B6]"
            >
              View All Solutions →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link
              href="/business/solutions/organizational"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold group-hover:text-[#1266B6]">
                Organizational Solutions
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Solutions focused on structures, workflows, teams,
                processes, and organizational performance.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore →
              </span>
            </Link>

            <Link
              href="/business/solutions/digital"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold group-hover:text-[#1266B6]">
                Digital Solutions
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Business-focused applications of digital technology,
                platforms, and systems.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore →
              </span>
            </Link>

            <Link
              href="/business/solutions/custom"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold group-hover:text-[#1266B6]">
                Custom Solutions
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                A coordinated combination of capabilities designed
                around a specific challenge.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Business Solutions
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Let's turn the challenge into a practical plan.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us what you are trying to achieve and we can explore
            the right combination of strategy, business capabilities,
            creativity, digital technology, and partnerships.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
          >
            Discuss Your Challenge
          </Link>
        </div>
      </section>
    </main>
  );
}