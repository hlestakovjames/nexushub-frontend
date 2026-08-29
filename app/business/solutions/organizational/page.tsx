import Link from 'next/link';

const outcomes = [
  {
    number: '01',
    title: 'Clearer Structure',
    description:
      'Clarify responsibilities, reporting relationships, departments, and the structures needed to support effective work.',
  },
  {
    number: '02',
    title: 'Better Processes',
    description:
      'Improve workflows and operating processes so that activities move with greater consistency and less friction.',
  },
  {
    number: '03',
    title: 'Stronger Teams',
    description:
      'Help organizations align people, roles, capabilities, and responsibilities around shared objectives.',
  },
  {
    number: '04',
    title: 'Operational Visibility',
    description:
      'Create better visibility into how work is organized, where bottlenecks occur, and where improvements are needed.',
  },
];

const focusAreas = [
  {
    title: 'Organizational Structure',
    description:
      'Review departments, reporting relationships, responsibilities, and organizational arrangements.',
  },
  {
    title: 'Process & Workflow',
    description:
      'Map, simplify, improve, and document processes that support day-to-day operations.',
  },
  {
    title: 'Roles & Responsibilities',
    description:
      'Help define what people are responsible for and where accountability should sit.',
  },
  {
    title: 'Team Coordination',
    description:
      'Improve how departments, teams, and individuals coordinate work and exchange information.',
  },
  {
    title: 'Operational Systems',
    description:
      'Introduce practical tools and systems that make organizational activities easier to coordinate and manage.',
  },
  {
    title: 'Change & Growth',
    description:
      'Adapt organizational structures and processes as an organization expands, changes, or takes on new priorities.',
  },
];

const process = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We learn how the organization currently operates, who is involved, and what challenge or opportunity needs attention.',
  },
  {
    number: '02',
    title: 'Map',
    description:
      'We document relevant structures, people, responsibilities, workflows, systems, and dependencies.',
  },
  {
    number: '03',
    title: 'Identify',
    description:
      'We identify gaps, duplication, bottlenecks, unclear responsibilities, and areas with potential for improvement.',
  },
  {
    number: '04',
    title: 'Design',
    description:
      'We develop a practical organizational or operational approach suited to the organization.',
  },
  {
    number: '05',
    title: 'Implement',
    description:
      'We support implementation, adoption, and refinement as the organization moves toward the desired state.',
  },
];

const situations = [
  'Growing teams',
  'New organizational structures',
  'Department restructuring',
  'Unclear responsibilities',
  'Workflow challenges',
  'Operational bottlenecks',
  'Internal coordination issues',
  'Process improvement',
  'Digital system adoption',
  'Organizational change',
];

export default function OrganizationalSolutionsPage() {
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
              Organizational Solutions
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Build an organization that can work better.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We help organizations improve structures, responsibilities,
              workflows, coordination, and operating practices so that
              people and processes can work together more effectively.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Discuss an Organizational Challenge
              </Link>

              <Link
                href="/business/services/business-consulting"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Business Consulting
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
                The Organizational Challenge
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Growth can expose weaknesses in the way work is organized.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Organizations can reach a point where informal processes,
                unclear responsibilities, disconnected teams, or outdated
                structures begin to slow progress.
              </p>

              <p>
                Organizational Solutions focuses on the way the
                organization itself works: its people, structures,
                processes, coordination, and operating systems.
              </p>

              <p>
                The objective is not simply to add more processes, but
                to create clearer and more practical ways of working.
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
              Create a clearer operating environment.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The right organizational changes can make responsibilities
              clearer, work more coordinated, and decision-making easier.
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

      {/* FOCUS AREAS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Focus Areas
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Look at the organization as a connected system.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Organizational performance depends on how different
              structures and activities interact with one another.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-2xl border border-slate-200 p-7"
              >
                <h3 className="text-2xl font-bold">
                  {area.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
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
                When organizational support can make a difference.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                These situations are examples of challenges that may
                benefit from a structured organizational response.
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

      {/* PROCESS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From organizational challenge to practical change.
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

      {/* RELATED SERVICES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Supporting Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Organizational Solutions can draw on several Nexus Hub capabilities.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Depending on the challenge, organizational work may be
              supported by consulting, strategy, digital systems, or
              other capabilities.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link
              href="/business/services/business-consulting"
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold group-hover:text-[#1266B6]">
                Business Consulting
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Practical consulting support for organizational and
                business challenges.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore →
              </span>
            </Link>

            <Link
              href="/business/services/strategy-advisory"
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold group-hover:text-[#1266B6]">
                Strategy &amp; Advisory
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Strategic planning and advisory support for important
                organizational decisions.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore →
              </span>
            </Link>

            <Link
              href="/business/solutions/digital"
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold group-hover:text-[#1266B6]">
                Digital Solutions
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Digital systems and technology where organizational
                improvement requires more capable tools.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* OTHER SOLUTIONS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                More Solutions
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Explore other ways we can help.
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
                Growth, performance, strategy, positioning, and broader
                business challenges.
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
                Technology-enabled approaches to business and
                organizational challenges.
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
                A tailored combination of capabilities designed around
                a specific challenge.
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
            Organizational Solutions
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Build a stronger way of working.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us where your organization is facing friction,
            uncertainty, or change, and let&apos;s explore a practical
            way forward.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
          >
            Discuss an Organizational Challenge
          </Link>
        </div>
      </section>
    </main>
  );
}