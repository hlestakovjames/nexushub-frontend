import Link from 'next/link';

import RelatedServices from '@/components/digital/RelatedServices';

const capabilities = [
  'Member and community platforms',
  'Client and customer portals',
  'Management platforms',
  'Content and publishing platforms',
  'Registration and participation systems',
  'Multi-user digital ecosystems',
];

const platformFeatures = [
  {
    number: '01',
    title: 'Multiple Users',
    description:
      'Different users can access the platform according to their roles, responsibilities, and permissions.',
  },
  {
    number: '02',
    title: 'Connected Workflows',
    description:
      'Processes, information, and interactions can be connected within one centralized platform.',
  },
  {
    number: '03',
    title: 'Centralized Data',
    description:
      'Important information can be organized and managed from a structured digital environment.',
  },
  {
    number: '04',
    title: 'Scalable Foundation',
    description:
      'The platform can evolve as new users, features, departments, and requirements are introduced.',
  },
];

const process = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We understand the people, workflows, problems, and opportunities the platform needs to address.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We define the platform architecture, user experience, roles, workflows, and core functionality.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We develop the platform in structured stages, connecting the interface, logic, data, and services.',
  },
  {
    number: '04',
    title: 'Evolve',
    description:
      'We create a foundation that can continue growing as the organization and its digital needs develop.',
  },
];

export default function DigitalPlatformsPage() {
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
              Digital Platforms
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Digital platforms that bring people, processes, and possibilities together.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We build connected digital platforms that help
              organizations manage people, information, workflows,
              services, and interactions in one environment.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Discuss a Platform
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
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                What We Build
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                More connected than a website. More focused than a generic system.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-600">
                Digital platforms bring together multiple users,
                processes, information, and interactions around a
                common purpose.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We design platforms around the specific ecosystem
                they need to support, whether that means members,
                customers, teams, communities, organizations, or
                service users.
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
              Platforms for different digital ecosystems.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From focused portals to larger multi-user ecosystems,
              the platform is shaped around the people and processes
              it needs to connect.
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

      {/* PLATFORM FOUNDATION */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Platform Foundation
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Designed to connect the whole ecosystem.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                A strong platform is not simply a collection of
                screens. It is the underlying structure that allows
                users, information, and processes to work together.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {platformFeatures.map((feature) => (
                <div
                  key={feature.number}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <span className="text-sm font-semibold text-[#1266B6]">
                    {feature.number}
                  </span>

                  <h3 className="mt-4 text-xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {feature.description}
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
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From ecosystem to platform.
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
            title: 'Software Development',
            description:
              'Build the custom systems and application logic behind your platform.',
            href: '/digital/services/software-development',
          },
          {
            title: 'Systems Integration',
            description:
              'Connect your platform to applications, APIs, services, and data sources.',
            href: '/digital/services/systems-integration',
          },
          {
            title: 'UI/UX & Product Design',
            description:
              'Create clear, intuitive experiences for the people using your platform.',
            href: '/digital/services/ui-ux-design',
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
            Have a platform idea?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Let&apos;s explore the people, processes, and
            opportunities your platform needs to connect.
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