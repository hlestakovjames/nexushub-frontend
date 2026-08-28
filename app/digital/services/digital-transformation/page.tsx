import Link from 'next/link';

import RelatedServices from '@/components/digital/RelatedServices';

const capabilities = [
  {
    title: 'Process Digitalization',
    description:
      'Move manual or inefficient processes into structured digital workflows that are easier to manage and improve.',
  },
  {
    title: 'Workflow Improvement',
    description:
      'Identify process bottlenecks and redesign workflows to make everyday operations more efficient.',
  },
  {
    title: 'Platform Modernization',
    description:
      'Improve aging or outdated digital platforms and create a stronger foundation for future development.',
  },
  {
    title: 'Digital Strategy',
    description:
      'Define practical digital priorities based on organizational goals, available resources, and future direction.',
  },
  {
    title: 'Operational Improvement',
    description:
      'Use digital tools and improved processes to help teams work more effectively and deliver better services.',
  },
  {
    title: 'Digital Adoption',
    description:
      'Support the transition from existing ways of working toward improved digital processes and systems.',
  },
];

const useCases = [
  'Organizations replacing manual workflows',
  'Businesses modernizing outdated processes',
  'Teams improving internal operations',
  'Organizations introducing new digital services',
  'Businesses planning long-term digital growth',
  'Organizations creating a digital roadmap',
  'Teams improving operational efficiency',
  'Organizations adapting to changing user needs',
];

const process = [
  {
    number: '01',
    title: 'Assess',
    description:
      'We understand the current processes, systems, challenges, capabilities, and organizational goals.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'We identify opportunities, prioritize improvements, and establish a practical transformation roadmap.',
  },
  {
    number: '03',
    title: 'Transform',
    description:
      'We implement improved workflows, digital tools, platforms, and ways of working.',
  },
  {
    number: '04',
    title: 'Improve',
    description:
      'We refine the digital environment as users, processes, and organizational requirements evolve.',
  },
];

export default function DigitalTransformationPage() {
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
              Digital Transformation
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Modernize the way your organization works.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We help organizations improve processes, modernize
              digital environments, and create practical pathways toward
              more connected and efficient ways of working.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Discuss Transformation
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
                Digital transformation is about changing how work gets done.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Introducing technology is only one part of digital
                transformation. The larger goal is to improve how an
                organization operates, serves people, manages information,
                and adapts to change.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We look at the current environment, identify practical
                opportunities, and help shape a digital direction that
                can be implemented over time.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Transformation Focus
              </p>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li>• Process improvement</li>
                <li>• Workflow digitalization</li>
                <li>• Platform modernization</li>
                <li>• Digital strategy</li>
                <li>• Operational efficiency</li>
                <li>• Digital adoption</li>
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
              Building a practical path toward digital maturity.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Transformation can involve a single workflow or a broader
              change across systems, teams, services, and operations.
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

      {/* USE CASES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Use Cases
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Where transformation can create measurable improvement.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The right transformation strategy depends on the
                organization&apos;s current environment and the outcomes
                it wants to achieve.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {useCases.map((item) => (
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

      {/* TRANSFORMATION MODEL */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Transformation Model
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Improve the organization, not just the technology.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Technology is most valuable when it supports better
                processes, clearer information, stronger services, and
                better experiences for the people using them.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  People
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Better experiences
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Make services and workflows easier for users and teams.
                </p>
              </div>

              <div className="rounded-2xl bg-[#050A30] p-7 text-white">
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  Process
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Better operations
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  Reduce unnecessary complexity and improve how work flows.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  Technology
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Better systems
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Use appropriate digital tools to support the new way of working.
                </p>
              </div>
            </div>
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
              From current state to better ways of working.
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
            title: 'Technical Consulting',
            description:
              'Get practical technical guidance while planning your digital direction.',
            href: '/digital/services/technical-consulting',
          },
          {
            title: 'Systems Integration',
            description:
              'Connect the systems and services supporting your organization.',
            href: '/digital/services/systems-integration',
          },
          {
            title: 'Digital Platforms',
            description:
              'Create connected digital environments that support improved operations.',
            href: '/digital/services/digital-platforms',
          },
        ]}
      />

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Transform With Nexus Hub
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to improve the way your organization works?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Let&apos;s understand where you are today and identify the
            practical digital changes that can move you forward.
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