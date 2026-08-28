import Link from 'next/link';

import RelatedServices from '@/components/digital/RelatedServices';

const capabilities = [
  'Custom business software',
  'Internal management systems',
  'Workflow and process automation',
  'Admin and management dashboards',
  'Role-based access systems',
  'API-driven applications',
];

const process = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We map your processes, users, requirements, and the problem the software needs to solve.',
  },
  {
    number: '02',
    title: 'Architect',
    description:
      'We design the system structure, data model, user roles, workflows, and technical foundation.',
  },
  {
    number: '03',
    title: 'Develop',
    description:
      'We build the software in focused stages while testing functionality and maintaining code quality.',
  },
  {
    number: '04',
    title: 'Deploy',
    description:
      'We prepare the system for production, validate the deployment, and establish a foundation for future improvements.',
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <main className="text-[#050A30]">
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
              Software Development
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Software designed around the way your organization works.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We build custom software systems that simplify
              operations, connect workflows, manage information, and
              help organizations work more effectively.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Discuss a Software Project
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
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                What We Build
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Software that solves real operational problems.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-600">
                Organizations often rely on disconnected tools,
                spreadsheets, manual processes, or systems that no
                longer match the way they operate.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We develop custom software around those specific
                needs, creating systems that bring information,
                people, permissions, and workflows together.
              </p>
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
              Systems built for your workflows.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We can develop focused systems or larger software
              platforms depending on the complexity of the problem.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <div
                key={capability}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-4 font-bold">{capability}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CUSTOM SOFTWARE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Why Custom Software
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Built around your requirements, not someone else&apos;s.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Off-the-shelf software can be useful, but it may not
                always fit a specific organization&apos;s workflows,
                roles, processes, or long-term plans.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Custom development gives you greater control over
                how the system works and how it can evolve as your
                organization grows.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold">Your Workflow</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The system is designed around your actual
                  processes and requirements.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold">Your Users</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Roles and permissions can reflect how your
                  organization operates.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold">Your Data</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Information can be structured and connected
                  according to the needs of the system.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold">Your Future</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The foundation can evolve as new requirements
                  and opportunities emerge.
                </p>
              </div>
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
              From problem to working system.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
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
            title: 'Digital Platforms',
            description:
              'Connected platforms that bring users, services, information, and workflows together.',
            href: '/digital/services/digital-platforms',
          },
          {
            title: 'Systems Integration',
            description:
              'Connect applications, APIs, services, and data across your digital environment.',
            href: '/digital/services/systems-integration',
          },
          {
            title: 'Technical Consulting',
            description:
              'Practical technical guidance for planning, improving, and scaling digital systems.',
            href: '/digital/services/technical-consulting',
          },
        ]}
      />

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Build With Nexus Hub
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have a system that needs to be built?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us about the process, challenge, or idea you want
            to solve, and we can explore the right software approach.
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