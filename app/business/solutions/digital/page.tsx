import Link from 'next/link';

const outcomes = [
  {
    number: '01',
    title: 'Digital Efficiency',
    description:
      'Use technology to reduce manual work, improve workflows, and make important organizational activities more efficient.',
  },
  {
    number: '02',
    title: 'Better Customer Experience',
    description:
      'Create digital journeys, platforms, and interfaces that make it easier for customers and audiences to interact with an organization.',
  },
  {
    number: '03',
    title: 'Connected Operations',
    description:
      'Connect information, applications, teams, and processes so that the organization can operate with greater visibility and coordination.',
  },
  {
    number: '04',
    title: 'Digital Growth',
    description:
      'Use digital products, platforms, commerce, and technology to create new opportunities and support business growth.',
  },
];

const solutionAreas = [
  {
    title: 'Digital Platforms',
    description:
      'Design and develop platforms that bring users, information, services, and workflows together.',
    href: '/digital/services/digital-platforms',
  },
  {
    title: 'Web & Software',
    description:
      'Build websites and software applications around specific operational or business needs.',
    href: '/digital/services/web-development',
  },
  {
    title: 'Business Systems',
    description:
      'Connect applications, processes, data, and workflows to create more coordinated operating environments.',
    href: '/digital/services/systems-integration',
  },
  {
    title: 'Digital Transformation',
    description:
      'Help organizations move from outdated or manual approaches toward more capable digital ways of working.',
    href: '/digital/services/digital-transformation',
  },
  {
    title: 'E-commerce',
    description:
      'Create digital commerce experiences that connect products, customers, payments, and business operations.',
    href: '/digital/services/ecommerce',
  },
  {
    title: 'Mobile Experiences',
    description:
      'Design and develop mobile applications when mobile access is central to the intended user experience.',
    href: '/digital/services/mobile-app-development',
  },
];

const situations = [
  'Manual business processes',
  'Disconnected systems',
  'New digital products',
  'Customer experience challenges',
  'Internal workflow inefficiencies',
  'Digital service delivery',
  'Online commerce opportunities',
  'Legacy system modernization',
  'Data and system integration',
  'Digital transformation initiatives',
];

const process = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We identify the business objective, users, current systems, constraints, and the problem technology needs to solve.',
  },
  {
    number: '02',
    title: 'Map',
    description:
      'We examine the existing workflows, systems, information, user journeys, and technical dependencies.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'We define an appropriate digital solution, including the experience, system structure, integrations, and implementation approach.',
  },
  {
    number: '04',
    title: 'Build',
    description:
      'We develop and integrate the required digital capabilities while maintaining focus on the intended business outcome.',
  },
  {
    number: '05',
    title: 'Improve',
    description:
      'We review the result, identify opportunities for refinement, and evolve the solution as needs change.',
  },
];

export default function DigitalSolutionsPage() {
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
              Digital Solutions
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Use technology where
              <br />
              it creates real value.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We connect business objectives with digital products,
              platforms, software, systems, and technology to solve
              practical organizational challenges.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Discuss a Digital Challenge
              </Link>

              <Link
                href="/digital/services"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Digital Services
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
                Technology With Purpose
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Start with the business problem, not the technology.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                A digital project is only useful when it helps the
                organization achieve something meaningful. That may be
                improving a process, serving customers better, creating
                a new product, or connecting systems.
              </p>

              <p>
                Digital Solutions focuses on that connection between
                the organizational objective and the technology required
                to support it.
              </p>

              <p>
                The result may involve one digital service or a
                combination of platforms, software, integrations,
                design, and transformation work.
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
              Outcomes
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Technology should improve the way the organization works.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We focus on the organizational value a digital solution
              is expected to create, rather than treating technology as
              an end in itself.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome) => (
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

      {/* SOLUTION AREAS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Digital Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Build only what the challenge actually requires.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Digital Solutions can draw from the wider Nexus Hub
              Digital capability set depending on the problem.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutionAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold transition group-hover:text-[#1266B6]">
                  {area.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {area.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore Digital Capability →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TYPICAL SITUATIONS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Typical Situations
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                When a digital solution may be the right response.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                These examples describe common situations where
                technology can create meaningful organizational value.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {situations.map((situation) => (
                <div
                  key={situation}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-4"
                >
                  <p className="font-medium text-slate-700">
                    {situation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS + DIGITAL CONNECTION */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                  Business + Technology
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  The strongest digital work connects technology to an actual outcome.
                </h2>
              </div>

              <div className="space-y-5 text-lg leading-8 text-white/65">
                <p>
                  A new platform may support growth. An integration may
                  remove duplication. A better interface may improve
                  customer experience. A new system may make operations
                  easier to manage.
                </p>

                <p>
                  That is why Digital Solutions sits within Business:
                  it connects digital capability with organizational
                  and commercial objectives.
                </p>
              </div>
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
              From organizational need to digital implementation.
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
                Explore other approaches.
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
              href="/business/solutions/custom"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold group-hover:text-[#1266B6]">
                Custom Solutions
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                A combination of capabilities designed around a
                specific organizational challenge.
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
            Digital Solutions
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have a business challenge that technology could improve?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us what needs to work better and let&apos;s explore
            the right digital approach.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
          >
            Discuss a Digital Challenge
          </Link>
        </div>
      </section>
    </main>
  );
}