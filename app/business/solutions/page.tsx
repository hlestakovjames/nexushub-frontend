import Link from 'next/link';

const solutions = [
  {
    number: '01',
    title: 'Business Growth Solutions',
    description:
      'Practical approaches that help organizations identify opportunities, strengthen operations, and pursue sustainable growth.',
  },
  {
    number: '02',
    title: 'Organizational Solutions',
    description:
      'Solutions designed around internal structures, workflows, teams, processes, and the operational challenges organizations face.',
  },
  {
    number: '03',
    title: 'Digital Business Solutions',
    description:
      'Business-focused solutions that connect organizational objectives with digital products, services, platforms, and technology.',
  },
  {
    number: '04',
    title: 'Media & Marketing Solutions',
    description:
      'Content, communication, media, and audience-focused approaches that help organizations strengthen their visibility and engagement.',
  },
  {
    number: '05',
    title: 'Partnership Solutions',
    description:
      'Collaborative approaches that bring together organizations, capabilities, networks, and resources around shared opportunities.',
  },
  {
    number: '06',
    title: 'Custom Solutions',
    description:
      'A combination of services, strategy, technology, media, and partnerships designed around a specific organizational challenge.',
  },
];

const solutionAreas = [
  {
    title: 'Growth',
    description:
      'Identify opportunities, priorities, and practical actions that can support sustainable progress.',
  },
  {
    title: 'Operations',
    description:
      'Improve how people, processes, resources, and activities work together.',
  },
  {
    title: 'Customers & Audiences',
    description:
      'Strengthen how organizations communicate with, serve, and engage the people they depend on.',
  },
  {
    title: 'Technology',
    description:
      'Bring in digital capabilities where technology can improve a business outcome or organizational process.',
  },
];

const process = [
  {
    number: '01',
    title: 'Define',
    description:
      'We understand the challenge, objective, people involved, and outcome the organization needs.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We determine the combination of capabilities, services, and approaches that best fit the situation.',
  },
  {
    number: '03',
    title: 'Deliver',
    description:
      'We turn the agreed approach into practical actions, services, initiatives, or implementations.',
  },
  {
    number: '04',
    title: 'Evolve',
    description:
      'We refine the solution as the organization, users, market, and opportunities change.',
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <Link
              href="/business"
              className="text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
            >
              ← Business
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Business Solutions
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Solutions shaped around
              <br />
              the problem to solve.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We bring together strategy, business capabilities, digital
              technology, media, creative work, and partnerships when a
              challenge requires more than one service.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Discuss a Solution
              </Link>

              <Link
                href="/business/services"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Business Services
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
                What Is a Business Solution?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Not every challenge can be solved with a single service.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                A business challenge may involve operations, growth,
                communication, technology, customers, partnerships, or
                several of these areas at once.
              </p>

              <p>
                Our solutions approach allows us to combine the right
                capabilities around the actual problem rather than forcing
                every organization into the same service structure.
              </p>

              <p>
                The result is a more coordinated approach to achieving a
                specific business or organizational outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Solution Areas
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Approaches for different organizational challenges.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              These solution areas provide a starting point. The actual
              approach can be adapted to the organization and the
              problem involved.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <article
                key={solution.number}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {solution.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {solution.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {solution.description}
                </p>

                <span className="mt-7 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore Solution →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION DIMENSIONS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Connected Thinking
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Look at the organization from more than one angle.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Strong solutions consider how different parts of the
                organization affect one another.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {solutionAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <h3 className="text-xl font-bold">
                    {area.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS + DIGITAL + MEDIA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Nexus Hub Ecosystem
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Combine the capabilities when the challenge demands it.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Business solutions can draw on the wider Nexus Hub
              ecosystem when that creates a stronger outcome.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#050A30] p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5FC9E6]">
                Business
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Strategy &amp; Operations
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Consulting, strategy, creative services, business
                development, and partnerships.
              </p>

              <Link
                href="/business/services"
                className="mt-7 inline-block text-sm font-semibold text-[#5FC9E6]"
              >
                Explore Business Services →
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Digital
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Technology
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Websites, software, mobile applications, platforms,
                commerce, integrations, and technical capabilities.
              </p>

              <Link
                href="/digital/services"
                className="mt-7 inline-block text-sm font-semibold text-[#1266B6]"
              >
                Explore Digital Services →
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Media
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Content &amp; Audiences
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Media, storytelling, production, distribution, and
                audience-focused experiences.
              </p>

              <Link
                href="/media"
                className="mt-7 inline-block text-sm font-semibold text-[#1266B6]"
              >
                Explore Media →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From business problem to coordinated solution.
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

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Build the Right Solution
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have a challenge that needs more than one capability?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us what you are trying to achieve and let&apos;s
            explore the combination of services, technology, and
            partnerships that makes sense.
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