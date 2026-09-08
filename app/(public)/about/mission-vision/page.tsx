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
      'Build with a long-term perspective so useful ideas, relationships, products, and capabilities can evolve over time.',
  },
];

const values = [
  {
    number: '01',
    title: 'Purpose',
    description:
      'We focus on work that solves a meaningful problem, serves a clear objective, or creates a valuable opportunity.',
  },
  {
    number: '02',
    title: 'Innovation',
    description:
      'We remain open to better ideas, new technologies, and different ways of approaching challenges.',
  },
  {
    number: '03',
    title: 'Practicality',
    description:
      'Good ideas should be capable of becoming useful outcomes rather than remaining ideas alone.',
  },
  {
    number: '04',
    title: 'Connection',
    description:
      'Stronger outcomes can emerge when different people, capabilities, and perspectives work together.',
  },
  {
    number: '05',
    title: 'Integrity',
    description:
      'Trust, responsibility, transparency, and reliability should shape how we work and collaborate.',
  },
  {
    number: '06',
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

const actionSteps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Start by understanding people, context, goals, needs, challenges, and opportunities.',
  },
  {
    number: '02',
    title: 'Connect',
    description:
      'Bring together the right ideas, capabilities, perspectives, resources, and relationships.',
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
      'Continue learning, improving, adapting, and scaling as needs and opportunities change.',
  },
];

const ecosystem = [
  {
    title: 'Digital',
    eyebrow: 'Technology',
    description:
      'Our mission becomes technology through digital products, software, platforms, systems, and experiences.',
    href: '/digital',
  },
  {
    title: 'Media',
    eyebrow: 'Content',
    description:
      'Our mission becomes media through stories, productions, conversations, audiences, and connected platforms.',
    href: '/media',
  },
  {
    title: 'Business',
    eyebrow: 'Growth',
    description:
      'Our mission becomes business through services, solutions, strategy, partnerships, and commercial opportunities.',
    href: '/business',
  },
];

export default function MissionVisionPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(95,201,230,0.14),transparent_30%),radial-gradient(circle_at_15%_85%,rgba(18,102,182,0.2),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-5xl">
            <Link
              href="/about"
              className="inline-flex text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
            >
              ← About Nexus Hub
            </Link>

            <p className="mt-9 text-sm font-bold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Mission &amp; Vision
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              A clear purpose.
              <br />
              A bigger possibility.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">
              Our mission defines what we are here to do. Our vision
              defines the connected ecosystem we are working to build.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl bg-[#050A30] p-8 text-white shadow-sm lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Our Mission
              </p>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                Turn ideas into meaningful possibilities.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                We connect people, ideas, technology, media, and
                opportunities through practical digital solutions,
                compelling media, and valuable business services.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                Our Vision
              </p>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                A connected ecosystem where ideas can grow.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We envision a future where creativity, technology,
                media, and business work together to create meaningful
                opportunities, useful solutions, and lasting impact.
              </p>
            </article>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#1266B6]/10 bg-slate-50 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1266B6]">
                Mission
              </p>
              <p className="mt-3 text-lg font-semibold leading-8 text-[#050A30]">
                What we are here to do.
              </p>
            </div>

            <div className="rounded-2xl border border-[#1266B6]/10 bg-slate-50 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1266B6]">
                Vision
              </p>
              <p className="mt-3 text-lg font-semibold leading-8 text-[#050A30]">
                The kind of ecosystem we are building toward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION IN PRACTICE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
              Mission in Practice
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              What our mission asks us to do.
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
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <span className="text-sm font-bold text-[#1266B6]">
                  {pillar.number}
                </span>

                <h3 className="mt-5 text-2xl font-black">
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

      {/* PURPOSE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                Our Purpose
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Why the mission matters.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Purpose gives direction to the work. It helps us determine
                what is worth building, who it should serve, and how
                different capabilities can be connected around it.
              </p>
            </div>

            <div className="rounded-3xl bg-[#050A30] p-8 text-white lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                Nexus Hub Purpose
              </p>

              <p className="mt-5 text-2xl font-bold leading-10 sm:text-3xl">
                Connect ideas, people, technology, and opportunities in
                ways that create meaningful value and lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                Our Vision
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                A wider ecosystem where different strengths can work together.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The vision extends beyond individual products or projects.
                It is about creating an ecosystem that can continue
                connecting new people, ideas, capabilities, and
                opportunities.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {visionDimensions.map((dimension, index) => (
                <div
                  key={dimension.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <span className="text-sm font-bold text-[#1266B6]">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3 className="mt-4 text-xl font-black">
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
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Values
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Principles that guide the ecosystem.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Values provide the standard behind our decisions, our
              relationships, our work, and the way we pursue opportunities.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-[#1266B6]">
                  {value.number}
                </span>

                <h3 className="mt-5 text-2xl font-black">
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

      {/* ECOSYSTEM */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5FC9E6]">
              Mission in the Ecosystem
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              One purpose expressed through different capabilities.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/65">
              Digital, Media, and Business are distinct expressions of
              the wider Nexus Hub mission.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {ecosystem.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                  {item.eyebrow}
                </p>

                <h3 className="mt-4 text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  {item.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-bold text-[#5FC9E6] transition group-hover:translate-x-1">
                  Explore {item.title} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PURPOSE TO ACTION */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
              From Purpose to Action
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Turning mission and vision into everyday work.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Purpose becomes meaningful when it influences how ideas are
              explored, how decisions are made, and how work is delivered.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {actionSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-bold text-[#1266B6]">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-black">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/about/approach"
            className="mt-10 inline-flex rounded-md bg-[#050A30] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0B1B3A]"
          >
            Explore Our Approach
          </Link>
        </div>
      </section>

      {/* WHAT SUCCESS MEANS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                What Success Means
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Growth should create meaningful value.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-7">
                <h3 className="text-xl font-black">Useful Work</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Solutions, services, content, and products should serve
                  a real purpose.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-7">
                <h3 className="text-xl font-black">Stronger Connections</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  The ecosystem should create more meaningful relationships
                  between people, ideas, capabilities, and opportunities.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-7">
                <h3 className="text-xl font-black">Sustainable Growth</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Growth should strengthen the organization and the value
                  it can continue creating.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-7">
                <h3 className="text-xl font-black">Lasting Impact</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  The ultimate measure is the value created for people,
                  organizations, audiences, partners, and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
              Continue Exploring
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              See how the purpose connects to the wider organization.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/about/our-story"
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-black">
                Our Story
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore how the idea behind Nexus Hub developed into a
                growing ecosystem.
              </p>

              <span className="mt-7 inline-flex text-sm font-bold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Our Story →
              </span>
            </Link>

            <Link
              href="/about/approach"
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-black">
                Our Approach
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Understand how mission becomes process, decisions, and
                practical delivery.
              </p>

              <span className="mt-7 inline-flex text-sm font-bold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Our Approach →
              </span>
            </Link>

            <Link
              href="/about/leadership"
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-black">
                Leadership
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Meet the people responsible for guiding the organization
                and its long-term direction.
              </p>

              <span className="mt-7 inline-flex text-sm font-bold text-[#1266B6] transition group-hover:translate-x-1">
                Meet Leadership →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5FC9E6]">
            The Nexus Hub Purpose
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            Turn ideas into meaningful possibilities.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Mission gives us direction. Vision gives us the horizon.
            The ecosystem is where both become action.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-bold text-[#050A30] transition hover:opacity-90"
            >
              Start a Conversation
            </Link>

            <Link
              href="/about"
              className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Back to About
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
