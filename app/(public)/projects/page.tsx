import Link from 'next/link';

const projects = [
  {
    category: 'Digital Platform',
    title: 'Nexus Hub',
    description:
      'The digital ecosystem connecting Nexus Hub media, technology, business, and future ventures.',
    href: '/',
  },
  {
    category: 'Healthcare',
    title: 'MercyCare',
    description:
      'A community-focused healthcare initiative using digital tools to support programs, services, and community engagement.',
    href: '#',
  },
  {
    category: 'Sports Media',
    title: 'Arsenal Pulse',
    description:
      'A dedicated sports media platform focused on Arsenal news, stories, analysis, and community engagement.',
    href: '#',
  },
  {
    category: 'Digital Platform',
    title: 'Tiqeva',
    description:
      'A digital ticketing concept designed to connect event organizers, audiences, and modern ticket experiences.',
    href: '#',
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Projects
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Ideas turned
              <br />
              into something real.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Explore the platforms, products, brands, and digital
              initiatives being developed across the Nexus Hub
              ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Work
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Building things that connect people and possibilities.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nexus Hub projects span media, digital technology,
              business, community initiatives, and emerging ideas.
              Each project is built with a focus on usefulness,
              accessibility, and long-term potential.
            </p>
          </div>

          {/* PROJECT GRID */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Link
                key={project.title}
                href={project.href}
                className="group rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg lg:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-sm font-semibold text-[#1266B6]">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-8 text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-slate-600">
                  {project.description}
                </p>

                <span className="mt-7 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore Project →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Our Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Projects start with a problem.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl bg-white p-7">
                <h3 className="text-xl font-bold">
                  Understand
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  We identify the problem, opportunity, users, and
                  context before building.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-7">
                <h3 className="text-xl font-bold">
                  Design
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Ideas are shaped into clear experiences and
                  practical systems.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-7">
                <h3 className="text-xl font-bold">
                  Build
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Technology turns the concept into a functioning
                  product or platform.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-7">
                <h3 className="text-xl font-bold">
                  Evolve
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Successful projects continue to improve as their
                  users and requirements grow.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Have an Idea?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Your idea could become the next project.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Whether it is a website, platform, software product, or
            something completely new, let's explore the possibility.
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