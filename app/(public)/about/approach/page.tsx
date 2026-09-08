import Link from 'next/link';

const principles = [
  {
    number: '01',
    title: 'Start With Understanding',
    description:
      'We begin by understanding the people, context, challenge, opportunity, and outcome before deciding what should be built or changed.',
  },
  {
    number: '02',
    title: 'Think Beyond One Perspective',
    description:
      'We consider technology, people, business, communication, operations, and experience together when the challenge requires a broader view.',
  },
  {
    number: '03',
    title: 'Build Practically',
    description:
      'Ideas become valuable when they can be translated into useful products, services, experiences, systems, or initiatives.',
  },
  {
    number: '04',
    title: 'Design for People',
    description:
      'The people using, experiencing, or benefiting from the work remain central to how we shape the solution.',
  },
  {
    number: '05',
    title: 'Collaborate',
    description:
      'Strong outcomes can emerge from combining different capabilities, perspectives, experiences, and relationships.',
  },
  {
    number: '06',
    title: 'Keep Evolving',
    description:
      'We build with the expectation that needs, users, technologies, and opportunities will continue to change.',
  },
];

const stages = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Define the problem, audience, context, objectives, constraints, and opportunity surrounding the work.',
  },
  {
    number: '02',
    title: 'Explore',
    description:
      'Consider possibilities, opportunities, technologies, approaches, and alternative ways of solving the challenge.',
  },
  {
    number: '03',
    title: 'Shape',
    description:
      'Turn the strongest direction into a clearer structure, strategy, experience, or implementation plan.',
  },
  {
    number: '04',
    title: 'Build',
    description:
      'Develop the agreed solution through focused stages with quality, usability, integration, and future needs in mind.',
  },
  {
    number: '05',
    title: 'Refine',
    description:
      'Learn from results and feedback, improve the work, and adapt it where necessary.',
  },
];

const perspectives = [
  {
    number: '01',
    title: 'People',
    description:
      'Who is involved, what do they need, and how will the outcome affect their experience?',
  },
  {
    number: '02',
    title: 'Purpose',
    description:
      'What is the organization actually trying to achieve and why does the work matter?',
  },
  {
    number: '03',
    title: 'Process',
    description:
      'How does the work happen today, and where can it become clearer, simpler, or more effective?',
  },
  {
    number: '04',
    title: 'Technology',
    description:
      'Which digital capabilities can support the intended outcome in a practical and sustainable way?',
  },
];

const ecosystemApplications = [
  {
    title: 'Digital',
    description:
      'We apply the approach to websites, software, platforms, mobile applications, integrations, and digital transformation initiatives.',
    href: '/digital',
    label: 'Explore Digital',
  },
  {
    title: 'Media',
    description:
      'We apply it to content, storytelling, productions, audience experiences, conversations, and media platforms.',
    href: '/media',
    label: 'Explore Media',
  },
  {
    title: 'Business',
    description:
      'We apply it to consulting, strategy, creative services, business solutions, partnerships, and growth opportunities.',
    href: '/business',
    label: 'Explore Business',
  },
];

const collaborationAreas = [
  {
    title: 'Clients',
    description:
      'Work closely with organizations and individuals to understand goals, constraints, and desired outcomes.',
  },
  {
    title: 'Partners',
    description:
      'Combine complementary capabilities, expertise, networks, and resources where collaboration adds value.',
  },
  {
    title: 'Teams',
    description:
      'Bring different disciplines together so technical, creative, strategic, operational, and user perspectives can inform the work.',
  },
  {
    title: 'Communities',
    description:
      'Consider the people and communities affected by the work and the wider context in which it will operate.',
  },
];

export default function OurApproachPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(95,201,230,0.15),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(18,102,182,0.2),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-5xl">
            <Link
              href="/about"
              className="inline-flex text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
            >
              ← About Nexus Hub
            </Link>

            <p className="mt-9 text-sm font-bold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Our Approach
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Think clearly.
              <br />
              Build purposefully.
              <br />
              Keep evolving.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">
              We approach ideas and challenges by combining understanding,
              connected thinking, creativity, technology, practical execution,
              and continuous improvement.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-bold text-[#050A30] transition hover:opacity-90"
              >
                Start a Conversation
              </Link>

              <Link
                href="/projects"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                Our Philosophy
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                The right solution begins with understanding the real problem.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                We do not begin with technology simply because technology
                exists. We begin by understanding what people and organizations
                are actually trying to achieve.
              </p>

              <p>
                From there, we look at the challenge from the perspectives that
                matter, identify practical opportunities, and determine what
                should be built, improved, connected, or changed.
              </p>

              <p>
                This allows the approach to work across digital products,
                business initiatives, media opportunities, organizational
                challenges, and combinations of several areas.
              </p>

              <div className="rounded-2xl border-l-4 border-[#5FC9E6] bg-slate-50 px-6 py-5">
                <p className="font-semibold leading-7 text-[#050A30]">
                  We aim to solve the right problem before trying to build
                  the right solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Principles
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Principles that guide the work.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              These principles keep the work useful, grounded, collaborative,
              and aligned with the people and organizations it is meant to serve.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-[#1266B6]">
                  {principle.number}
                </span>

                <h3 className="mt-5 text-2xl font-black">
                  {principle.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTED THINKING */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                Connected Thinking
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Look at the whole challenge, not just one part of it.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Different problems require different perspectives. We bring
                together the areas that matter to the intended outcome.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {perspectives.map((perspective) => (
                <div
                  key={perspective.title}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <span className="text-sm font-bold text-[#1266B6]">
                    {perspective.number}
                  </span>

                  <h3 className="mt-4 text-xl font-black">
                    {perspective.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {perspective.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5FC9E6]">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              From understanding to continuous improvement.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/65">
              The exact process changes with the project, but these stages
              provide a practical foundation for how we approach the work.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {stages.map((stage) => (
              <article
                key={stage.number}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <span className="text-sm font-bold text-[#5FC9E6]">
                  {stage.number}
                </span>

                <h3 className="mt-5 text-xl font-black">
                  {stage.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PEOPLE-FIRST DESIGN */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                Designing for People
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Technology is useful when it improves the human experience.
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  We consider the people who will use, experience, operate,
                  manage, support, or be affected by what we create.
                </p>

                <p>
                  This helps us think beyond features and consider clarity,
                  accessibility, usability, adoption, trust, and long-term
                  usefulness.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8 lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1266B6]">
                People First
              </p>

              <div className="mt-7 space-y-4">
                {[
                  'Understand the people involved.',
                  'Identify the experience that matters.',
                  'Remove unnecessary complexity.',
                  'Design for real-world use.',
                  'Learn from feedback.',
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-xl bg-white p-4"
                  >
                    <span className="font-bold text-[#1266B6]">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY WITH PURPOSE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                Technology With Purpose
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Technology should serve the outcome.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We choose technologies and technical approaches according to
                what the work requires rather than forcing every problem into
                the same technical solution.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: 'Fit for Purpose',
                  description:
                    'Choose technology that matches the problem, users, scale, and intended outcome.',
                },
                {
                  title: 'Scalable Thinking',
                  description:
                    'Consider future growth, integrations, maintenance, and evolving requirements.',
                },
                {
                  title: 'Reliable Foundations',
                  description:
                    'Prioritize maintainability, security, performance, and sound technical foundations.',
                },
                {
                  title: 'Useful Experiences',
                  description:
                    'Technical quality should ultimately contribute to a better experience and stronger result.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <h3 className="text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
              Collaboration
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Better work can emerge from better collaboration.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We value collaboration with the people who bring knowledge,
              context, expertise, resources, creativity, or lived experience
              to the work.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {collaborationAreas.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-7"
              >
                <h3 className="text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM APPLICATION */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5FC9E6]">
              Across Nexus Hub
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              One approach. Different applications.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/65">
              The approach remains connected even when the nature of the work
              changes across the Nexus Hub ecosystem.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ecosystemApplications.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
              >
                <h3 className="text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  {item.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-bold text-[#5FC9E6] transition group-hover:translate-x-1">
                  {item.label} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTINUOUS IMPROVEMENT */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                Continuous Improvement
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Delivery is not always the end of the work.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Useful products, services, platforms, and experiences can
                improve as people use them, circumstances change, and new
                opportunities emerge.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8 lg:p-10">
              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <p className="text-sm font-bold text-[#1266B6]">
                    LEARN
                  </p>
                  <p className="mt-3 leading-7 text-slate-600">
                    Listen to feedback, results, and experience.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#1266B6]">
                    IMPROVE
                  </p>
                  <p className="mt-3 leading-7 text-slate-600">
                    Refine what works and address what does not.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#1266B6]">
                    EVOLVE
                  </p>
                  <p className="mt-3 leading-7 text-slate-600">
                    Adapt the work to new needs and opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED ABOUT PAGES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                Explore More
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Continue exploring Nexus Hub.
              </h2>
            </div>

            <Link
              href="/about"
              className="shrink-0 text-sm font-bold text-[#1266B6] transition hover:translate-x-1"
            >
              Back to About →
            </Link>
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
                Discover the journey from an idea of connection to a growing
                ecosystem.
              </p>

              <span className="mt-7 inline-flex text-sm font-bold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Our Story →
              </span>
            </Link>

            <Link
              href="/about/mission-vision"
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-black">
                Mission &amp; Vision
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Understand the purpose and future direction guiding Nexus Hub.
              </p>

              <span className="mt-7 inline-flex text-sm font-bold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Mission &amp; Vision →
              </span>
            </Link>

            <Link
              href="/about/team"
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-black">
                Our Team
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Meet the people and capabilities behind the Nexus Hub
                ecosystem.
              </p>

              <span className="mt-7 inline-flex text-sm font-bold text-[#1266B6] transition group-hover:translate-x-1">
                Meet Our Team →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Our Approach
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            Have a challenge worth approaching differently?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us what you are trying to achieve, improve, build, or
            understand, and let&apos;s explore the right approach together.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-bold text-[#050A30] transition hover:opacity-90"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
