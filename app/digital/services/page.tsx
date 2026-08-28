import Link from 'next/link';

const services = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Modern, responsive websites and web applications built around your organization, audience, and goals.',
    href: '/digital/services/web-development',
  },
  {
    number: '02',
    title: 'Software Development',
    description:
      'Custom software systems designed to solve operational challenges and support the way organizations work.',
    href: '/digital/services/software-development',
  },
  {
    number: '03',
    title: 'Mobile App Development',
    description:
      'Mobile experiences designed to make digital products, services, and platforms accessible on the go.',
    href: '/digital/services/mobile-app-development',
  },
  {
    number: '04',
    title: 'UI/UX & Product Design',
    description:
      'Clear and purposeful interfaces and experiences designed around users, usability, and product goals.',
    href: '/digital/services/ui-ux-design',
  },
  {
    number: '05',
    title: 'Digital Platforms',
    description:
      'Scalable platforms that connect users, services, data, workflows, and organizational processes.',
    href: '/digital/services/digital-platforms',
  },
  {
    number: '06',
    title: 'Digital Transformation',
    description:
      'Helping organizations modernize processes, improve operations, and adopt practical digital systems.',
    href: '/digital/services/digital-transformation',
  },
  {
    number: '07',
    title: 'E-commerce',
    description:
      'Digital commerce experiences that help businesses present, sell, manage, and grow products and services online.',
    href: '/digital/services/ecommerce',
  },
  {
    number: '08',
    title: 'Systems Integration',
    description:
      'Connecting applications, APIs, services, and data so different parts of a digital environment can work together.',
    href: '/digital/services/systems-integration',
  },
  {
    number: '09',
    title: 'Technical Consulting',
    description:
      'Practical technical guidance for organizations planning, improving, integrating, or scaling digital systems.',
    href: '/digital/services/technical-consulting',
  },
];

export default function DigitalServicesPage() {
  return (
    <main className="text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              Digital Services
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Digital solutions built around real needs.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              From websites and software to connected platforms,
              digital transformation, commerce, and technical
              consulting, Nexus Hub builds technology around the
              problem that needs to be solved.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Start a Project
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

      {/* INTRODUCTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                What We Build
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Technology with a purpose.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-slate-600">
                Digital development is more than writing code. We
                combine technology, design, product thinking, and
                practical problem-solving to create digital products
                that serve real people and organizations.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our services cover the core capabilities needed to
                create, improve, connect, and support modern digital
                systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Nine digital capabilities. One connected approach.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore the areas where Nexus Hub can help you design,
              build, modernize, connect, and grow your digital
              environment.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {service.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore Service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Our Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                From idea to connected solution.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Every digital project begins with understanding the
                problem before deciding on the technology.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-6">
                <span className="text-sm font-semibold text-[#1266B6]">
                  01
                </span>

                <h3 className="mt-3 font-bold">Understand</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Define the problem, users, goals, and requirements.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <span className="text-sm font-semibold text-[#1266B6]">
                  02
                </span>

                <h3 className="mt-3 font-bold">Design</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Shape the experience, structure, and technical
                  direction.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <span className="text-sm font-semibold text-[#1266B6]">
                  03
                </span>

                <h3 className="mt-3 font-bold">Build</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Develop and integrate the solution with quality,
                  security, and scalability in mind.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <span className="text-sm font-semibold text-[#1266B6]">
                  04
                </span>

                <h3 className="mt-3 font-bold">Evolve</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Improve the product as users, needs, and
                  opportunities evolve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Have an Idea?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build the right digital solution.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Whether you need a website, software, platform,
            integration, digital transformation, or technical
            guidance, let&apos;s explore the right approach.
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