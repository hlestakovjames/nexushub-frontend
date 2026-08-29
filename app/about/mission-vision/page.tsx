import Link from 'next/link';

const missionPillars = [
  {
    number: '01',
    title: 'Connect',
    description:
      'Bring people, ideas, technology, media, and opportunities together where meaningful connections can create greater value.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'Turn ideas and identified needs into practical products, services, platforms, experiences, and initiatives.',
  },
  {
    number: '03',
    title: 'Enable',
    description:
      'Create capabilities and opportunities that help people, organizations, and communities move forward.',
  },
  {
    number: '04',
    title: 'Grow',
    description:
      'Build with a long-term perspective so that useful ideas and relationships can evolve over time.',
  },
];

const values = [
  {
    title: 'Purpose',
    description:
      'We focus on work that solves a meaningful problem, serves a clear objective, or creates a valuable opportunity.',
  },
  {
    title: 'Innovation',
    description:
      'We remain open to better ideas, new technologies, and different ways of approaching challenges.',
  },
  {
    title: 'Practicality',
    description:
      'Good ideas should be capable of becoming useful outcomes, not remaining ideas alone.',
  },
  {
    title: 'Connection',
    description:
      'We believe stronger outcomes can emerge when different people, capabilities, and perspectives work together.',
  },
  {
    title: 'Integrity',
    description:
      'Trust, responsibility, transparency, and reliability should shape how we work and collaborate.',
  },
  {
    title: 'Growth',
    description:
      'We build with room to learn, improve, adapt, and grow as circumstances and opportunities change.',
  },
];

const visionDimensions = [
  {
    title: 'People',
    description:
      'A network of people with different skills, experiences, perspectives, and ambitions contributing to a shared ecosystem.',
  },
  {
    title: 'Ideas',
    description:
      'A place where useful ideas can be explored, developed, connected, and transformed into practical possibilities.',
  },
  {
    title: 'Technology',
    description:
      'Digital tools and platforms used purposefully to improve experiences, create services, and solve real problems.',
  },
  {
    title: 'Opportunities',
    description:
      'Partnerships, products, media, business initiatives, and other opportunities that create meaningful value.',
  },
];

const process = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Start by understanding people, context, goals, and the challenge or opportunity involved.',
  },
  {
    number: '02',
    title: 'Connect',
    description:
      'Bring together the right ideas, capabilities, perspectives, and resources.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Turn the opportunity into something practical, useful, and capable of creating value.',
  },
  {
    number: '04',
    title: 'Evolve',
    description:
      'Continue learning, improving, and adapting as users, organizations, and opportunities change.',
  },
];

export default function MissionVisionPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <Link
              href="/about"
              className="text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
            >
              ← About Nexus Hub
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Mission &amp; Vision
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              A clear purpose.
              <br />
              A bigger possibility.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Our mission defines what we are here to do. Our vision
              defines the kind of connected ecosystem we want to build.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Our Mission
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Turn ideas into meaningful possibilities.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                We connect people, ideas, technology, media, and
                opportunities through practical digital solutions,
                compelling media, and valuable business services.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Our Vision
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                A connected ecosystem where ideas can grow.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We envision a future where creativity, technology,
                media, and business work together to create meaningful
                opportunities, useful solutions, and lasting impact.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* MISSION IN ACTION */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Mission in Practice
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              What the mission asks us to do.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our mission is not only a statement. It guides the kinds
              of relationships we create, work we pursue, and value we
              aim to deliver.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {missionPillars.map((pillar) => (
              <article
                key={pillar.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {pillar.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {pillar.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Our Vision
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A wider ecosystem where different strengths can work together.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The vision extends beyond individual products or
                projects. It is about creating an ecosystem that can
                keep connecting new people, ideas, capabilities, and
                opportunities.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {visionDimensions.map((dimension) => (
                <div
                  key={dimension.title}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <h3 className="text-xl font-bold">
                    {dimension.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {dimension.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Values
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The principles that shape how we work.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Values provide the standard behind the decisions we make,
              the work we pursue, and the relationships we build.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THREE DIRECTIONS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              The Nexus Hub Ecosystem
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Mission and vision expressed through three directions.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Media, Digital, and Business are different expressions of
              the same wider purpose.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/media"
              className="group rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Media
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Stories and conversations.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Create content, conversations, and media experiences
                that connect people with ideas.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Media →
              </span>
            </Link>

            <Link
              href="/digital"
              className="group rounded-2xl bg-[#050A30] p-8 text-white transition hover:-translate-y-1 lg:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5FC9E6]">
                Digital
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Products and technology.
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Build practical websites, software, platforms, and
                digital experiences.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#5FC9E6] transition group-hover:translate-x-1">
                Explore Digital →
              </span>
            </Link>

            <Link
              href="/business"
              className="group rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Business
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Services and opportunities.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Help organizations move forward through services,
                solutions, strategy, and partnerships.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Business →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW WE TURN PURPOSE INTO WORK */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              From Purpose to Action
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Turning mission and vision into everyday work.
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

      {/* RELATED ABOUT PAGES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Explore More
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Learn more about Nexus Hub.
              </h2>
            </div>

            <Link
              href="/about"
              className="shrink-0 text-sm font-semibold text-[#1266B6] transition hover:translate-x-1"
            >
              Back to About →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/about/our-story"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                Our Story
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Discover how the idea behind Nexus Hub became a growing
                ecosystem.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Our Story →
              </span>
            </Link>

            <Link
              href="/about/approach"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                Our Approach
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Learn how we think, build, collaborate, and approach
                meaningful work.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Our Approach →
              </span>
            </Link>

            <Link
              href="/about/leadership"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                Leadership
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Meet the people providing direction and strategic
                leadership across the ecosystem.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Meet Leadership →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            The Nexus Hub Purpose
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s connect ideas and turn possibility into progress.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Our mission and vision guide the ecosystem, but the work
            happens through people, ideas, collaboration, and action.
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