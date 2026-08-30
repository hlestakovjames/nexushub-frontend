import Link from 'next/link';

const solutionPrinciples = [
  {
    number: '01',
    title: 'Problem First',
    description:
      'We begin with the challenge, objective, users, constraints, and desired outcome rather than forcing a predefined package.',
  },
  {
    number: '02',
    title: 'Right Capabilities',
    description:
      'We select only the business, digital, media, creative, or partnership capabilities that are relevant to the challenge.',
  },
  {
    number: '03',
    title: 'Practical Delivery',
    description:
      'The solution is shaped into clear actions, deliverables, responsibilities, and implementation steps.',
  },
  {
    number: '04',
    title: 'Room to Evolve',
    description:
      'The approach can be refined as the organization learns, priorities change, or new opportunities emerge.',
  },
];

const capabilities = [
  {
    title: 'Business Strategy',
    description:
      'Strategic planning, business analysis, advisory, growth direction, and organizational decision support.',
    href: '/business/services/strategy-advisory',
  },
  {
    title: 'Business Consulting',
    description:
      'Practical consulting support for operations, organizations, processes, and business challenges.',
    href: '/business/services/business-consulting',
  },
  {
    title: 'Digital Technology',
    description:
      'Websites, software, platforms, mobile applications, integrations, and digital transformation.',
    href: '/business/solutions/digital',
  },
  {
    title: 'Media & Marketing',
    description:
      'Content, creative work, media production, communication, campaigns, and audience engagement.',
    href: '/business/solutions/media',
  },
  {
    title: 'Partnerships',
    description:
      'Collaboration models that connect organizations, capabilities, networks, and resources.',
    href: '/business/solutions/partnerships',
  },
  {
    title: 'Brand & Creative',
    description:
      'Brand identity, creative direction, visual communication, and experiences that support the wider solution.',
    href: '/business/services/brand-creative',
  },
];

const scenarios = [
  {
    title: 'New Venture',
    description:
      'A new business or initiative may need strategy, identity, technology, communications, and partnership development together.',
  },
  {
    title: 'Organizational Change',
    description:
      'A restructuring or transformation may require business analysis, process improvement, digital systems, and communication.',
  },
  {
    title: 'Digital Launch',
    description:
      'A new digital product may require product strategy, design, software development, branding, marketing, and audience development.',
  },
  {
    title: 'Growth Initiative',
    description:
      'An organization pursuing growth may need strategy, new market opportunities, partnerships, digital capabilities, or stronger positioning.',
  },
];

const process = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We understand the organization, the problem, the people affected, existing capabilities, constraints, and the desired outcome.',
  },
  {
    number: '02',
    title: 'Diagnose',
    description:
      'We identify the underlying issues and determine which parts of the challenge require business, digital, media, creative, or partnership support.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'We create a coordinated solution structure, define priorities, and determine how the different capabilities should work together.',
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'We execute the agreed work through the appropriate combination of services, people, technology, and partners.',
  },
  {
    number: '05',
    title: 'Evolve',
    description:
      'We evaluate outcomes and refine the solution as the organization, users, market, or project requirements change.',
  },
];

const engagementOptions = [
  'Advisory and planning',
  'Project-based delivery',
  'Product or platform development',
  'Organizational improvement',
  'Launch and campaign support',
  'Partnership-led initiatives',
  'Multi-service engagements',
  'Ongoing support',
];

export default function CustomSolutionsPage() {
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
              Custom Solutions
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              One challenge.
              <br />
              The right combination of capabilities.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              When an organization&apos;s challenge does not fit a
              predefined service, we can combine strategy, business,
              digital, media, creative, and partnership capabilities
              around the outcome that matters.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Discuss a Custom Solution
              </Link>

              <Link
                href="/business/solutions"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore All Solutions
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
                Why Custom
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Some challenges cross several disciplines at once.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                An organization may need to rethink an operation,
                introduce a new digital system, launch a new initiative,
                strengthen its positioning, and develop new partnerships
                at the same time.
              </p>

              <p>
                A predefined service may address only one piece of that
                challenge. A custom solution allows the different pieces
                to be coordinated around the actual objective.
              </p>

              <p>
                The result is a tailored engagement built around the
                organization rather than a standard package imposed on it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              How Custom Solutions Work
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Flexible without losing structure.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Custom does not mean undefined. We use a clear process
              while adapting the capabilities and delivery model to the
              problem.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutionPrinciples.map((principle) => (
              <article
                key={principle.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {principle.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {principle.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {principle.description}
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
              Available Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Combine the capabilities that make sense.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A custom engagement can draw from one or several areas
              of the Nexus Hub ecosystem.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <Link
                key={capability.title}
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

      {/* EXAMPLES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Example Scenarios
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              What a custom engagement can look like.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The combinations below illustrate the type of
              organization-wide challenges a custom approach can address.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {scenarios.map((scenario) => (
              <article
                key={scenario.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10"
              >
                <h3 className="text-2xl font-bold">
                  {scenario.title}
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  {scenario.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Engagement Options
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The delivery model can adapt to the challenge.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                A custom solution can be a focused project, a strategic
                engagement, or a longer-term relationship.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {engagementOptions.map((option) => (
                <div
                  key={option}
                  className="rounded-xl border border-slate-200 px-5 py-4"
                >
                  <p className="font-medium text-slate-700">
                    {option}
                  </p>
                </div>
              ))}
            </div>
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
              From complex challenge to coordinated delivery.
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
                Other Solutions
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A custom solution is not the only option.
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
              href="/business/solutions/business"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold group-hover:text-[#1266B6]">
                Business Solutions
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Growth, strategy, performance, positioning, and broader
                business challenges.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore →
              </span>
            </Link>

            <Link
              href="/business/solutions/organizational"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold group-hover:text-[#1266B6]">
                Organizational Solutions
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Structures, workflows, teams, processes, and
                organizational performance.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore →
              </span>
            </Link>

            <Link
              href="/business/solutions/media"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold group-hover:text-[#1266B6]">
                Media &amp; Marketing Solutions
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Content, creative, media, communication, and audience
                development.
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
            Custom Solutions
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have a challenge that does not fit a predefined service?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us what you are trying to achieve, what is getting in
            the way, and what a successful outcome would look like.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
          >
            Discuss a Custom Solution
          </Link>
        </div>
      </section>
    </main>
  );
}