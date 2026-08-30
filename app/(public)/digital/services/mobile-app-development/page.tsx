import Link from 'next/link';

import RelatedServices from '@/components/digital/RelatedServices';

const capabilities = [
  'Mobile interfaces',
  'Cross-platform development',
  'API and backend integration',
  'Authentication and user accounts',
  'Push notifications',
  'Scalable mobile architecture',
];

const useCases = [
  'Member and community platforms',
  'Business applications',
  'Event applications',
  'Customer service platforms',
  'Education and learning tools',
  'Media and content experiences',
  'Internal workforce applications',
  'Digital service delivery',
];

const process = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We understand the users, problem, platform requirements, and desired outcome.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We define the user journeys, interface, interactions, and overall mobile experience.',
  },
  {
    number: '03',
    title: 'Develop',
    description:
      'We build the application and connect it with the required backend services and integrations.',
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'We test, refine, prepare the application, and support its transition toward release.',
  },
];

export default function MobileAppDevelopmentPage() {
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
              Mobile App Development
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Mobile experiences built around real users and real needs.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We design and develop mobile applications that make
              digital products, services, workflows, and platforms
              more accessible wherever people use them.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Start an App Project
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
                What We Build
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Mobile products built around real use cases.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Mobile applications can make services more accessible,
                simplify workflows, and create direct connections between
                organizations and their users.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We approach mobile development by first understanding the
                product, its users, and its purpose before selecting an
                appropriate technical approach.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Typical Applications
              </p>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li>• Customer and member applications</li>
                <li>• Service delivery applications</li>
                <li>• Business and organization apps</li>
                <li>• Event and community applications</li>
                <li>• Content and media applications</li>
                <li>• Companion apps for digital platforms</li>
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
              From mobile interface to connected product.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Mobile products can operate independently or connect to
              existing websites, APIs, databases, and business systems.
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
                  Designed to support the mobile product as part of the
                  wider digital experience.
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
                Where mobile can make a difference.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We can design mobile experiences for organizations,
                businesses, communities, and digital products.
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

      {/* PRODUCT CONNECTION */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Connected Experience
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A mobile app can be part of a bigger digital ecosystem.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Mobile applications often work alongside websites,
                software systems, APIs, databases, and digital
                platforms rather than operating on their own.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  Mobile
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  User Experience
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  The application people use directly on their devices.
                </p>
              </div>

              <div className="rounded-2xl bg-[#050A30] p-7 text-white">
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  Backend
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Core Services
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  APIs, databases, authentication, and business logic
                  supporting the application.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  Ecosystem
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Connected Systems
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Other platforms, services, and tools that work with
                  the application.
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
              From concept to mobile product.
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
            title: 'UI/UX & Product Design',
            description:
              'Design intuitive interfaces and experiences around the people using your product.',
            href: '/digital/services/ui-ux-design',
          },
          {
            title: 'Software Development',
            description:
              'Build the backend systems and software capabilities supporting your application.',
            href: '/digital/services/software-development',
          },
          {
            title: 'Digital Platforms',
            description:
              'Connect your mobile experience with a broader digital platform.',
            href: '/digital/services/digital-platforms',
          },
        ]}
      />

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Build for Mobile
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have an app idea?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Let&apos;s explore the product, the users, and the technology
            needed to turn the idea into a useful mobile experience.
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