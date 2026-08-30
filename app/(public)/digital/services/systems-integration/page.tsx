import Link from 'next/link';

import RelatedServices from '@/components/digital/RelatedServices';

const capabilities = [
  'API integration',
  'Third-party service integration',
  'Application-to-application connectivity',
  'Data synchronization',
  'Authentication and identity integration',
  'Workflow and event integration',
];

const useCases = [
  'Connecting existing business systems',
  'Integrating third-party platforms',
  'Synchronizing data between applications',
  'Connecting payment and service providers',
  'Linking internal and external APIs',
  'Creating connected digital workflows',
];

const process = [
  {
    number: '01',
    title: 'Assess',
    description:
      'We identify the systems involved, the data they exchange, and the business processes that need to connect.',
  },
  {
    number: '02',
    title: 'Architect',
    description:
      'We define the integration approach, interfaces, data flows, authentication, and technical requirements.',
  },
  {
    number: '03',
    title: 'Integrate',
    description:
      'We connect the required systems, services, APIs, and workflows while validating the information exchanged.',
  },
  {
    number: '04',
    title: 'Monitor',
    description:
      'We establish a foundation that can be maintained, monitored, and extended as new integration needs emerge.',
  },
];

export default function SystemsIntegrationPage() {
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
              Systems Integration
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Connect the systems that keep your organization moving.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We connect applications, APIs, services, and data so the
              different parts of your digital environment can work
              together reliably.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Discuss an Integration
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
                Make separate systems work as one connected environment.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Organizations often use multiple applications for
                different functions. Without proper integration, teams
                can end up re-entering information, switching between
                systems, or working with inconsistent data.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Systems integration connects those technologies so
                information and processes can move between them more
                effectively.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Integration Areas
              </p>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li>• APIs and web services</li>
                <li>• Third-party platforms</li>
                <li>• Internal business systems</li>
                <li>• Payment and communication services</li>
                <li>• Data synchronization</li>
                <li>• Identity and authentication systems</li>
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
              Connecting technology at the right points.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Integration should solve a clear business or technical
              problem. We focus on making the connection useful,
              reliable, secure, and maintainable.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <div
                key={capability}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {capability}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Connecting the right systems to support the workflow
                  behind the experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Connected Architecture
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The integration sits between the systems.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                A successful integration creates a dependable path
                between applications without forcing every system to
                behave the same way.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  System A
                </p>

                <h3 className="mt-3 font-bold">
                  Source
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The application producing or requesting information.
                </p>
              </div>

              <div className="rounded-2xl bg-[#050A30] p-7 text-white">
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  Integration
                </p>

                <h3 className="mt-3 font-bold">
                  Connection Layer
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/65">
                  APIs, services, rules, authentication, and data
                  exchange connect the systems.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  System B
                </p>

                <h3 className="mt-3 font-bold">
                  Destination
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The application receiving or acting on the information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Use Cases
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Where integration can simplify operations.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-6"
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
              Connect carefully. Build for the future.
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
            title: 'Software Development',
            description:
              'Build the custom applications that need to communicate with connected systems.',
            href: '/digital/services/software-development',
          },
          {
            title: 'Digital Platforms',
            description:
              'Create connected platforms that bring information and workflows together.',
            href: '/digital/services/digital-platforms',
          },
          {
            title: 'Technical Consulting',
            description:
              'Get guidance on architecture, integrations, technology choices, and implementation.',
            href: '/digital/services/technical-consulting',
          },
        ]}
      />

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Connect Your Systems
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Tired of disconnected digital systems?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Let&apos;s map the systems involved and explore how they can work
            together more effectively.
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