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
      'We consider technology, people, business, communication, operations, and experience together when the problem requires a broader view.',
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
      'We believe strong outcomes can emerge from combining different capabilities, perspectives, experiences, and relationships.',
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
      'We define the problem, audience, context, objectives, and constraints surrounding the work.',
  },
  {
    number: '02',
    title: 'Explore',
    description:
      'We consider different possibilities, opportunities, technologies, approaches, and ways of solving the challenge.',
  },
  {
    number: '03',
    title: 'Shape',
    description:
      'We turn the strongest direction into a clearer structure, strategy, experience, or implementation plan.',
  },
  {
    number: '04',
    title: 'Build',
    description:
      'We develop the agreed solution through focused stages with quality, usability, and future needs in mind.',
  },
  {
    number: '05',
    title: 'Refine',
    description:
      'We learn from results and feedback, improve the work, and adapt it where necessary.',
  },
];

const perspectives = [
  {
    title: 'People',
    description:
      'Who is involved, what do they need, and how will the outcome affect their experience?',
  },
  {
    title: 'Purpose',
    description:
      'What is the organization actually trying to achieve and why does the work matter?',
  },
  {
    title: 'Process',
    description:
      'How does the work happen today, and where can it become clearer or more effective?',
  },
  {
    title: 'Technology',
    description:
      'Which digital capabilities can support the intended outcome in a practical way?',
  },
];

export default function OurApproachPage() {
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
              Our Approach
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Think clearly.
              <br />
              Build purposefully.
              <br />
              Keep evolving.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We approach ideas and challenges by combining understanding,
              creativity, technology, practical execution, and continuous
              improvement.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                How We Work
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The right solution begins with understanding the real problem.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                We do not begin with technology simply because technology
                exists. We begin by understanding what people and
                organizations are actually trying to achieve.
              </p>

              <p>
                From there, we look at the challenge from the perspectives
                that matter, identify practical opportunities, and determine
                what should be built, improved, connected, or changed.
              </p>

              <p>
                The approach can be applied to a digital product, business
                initiative, media opportunity, organizational challenge, or
                a combination of several areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Principles
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Principles that guide the work.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              These principles help keep the work useful, grounded, and
              aligned with the people and organizations it is meant to serve.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {principle.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
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

      {/* PERSPECTIVES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Connected Thinking
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Look at the whole challenge, not just one part of it.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Different problems require different perspectives. We bring
                together the areas that matter to the outcome.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {perspectives.map((perspective) => (
                <div
                  key={perspective.title}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <h3 className="text-xl font-bold">
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
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From understanding to continuous improvement.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The exact process changes with the project, but these stages
              provide a practical foundation for how we approach the work.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {stages.map((stage) => (
              <article
                key={stage.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {stage.number}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {stage.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              The Nexus Hub Ecosystem
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The approach changes with the work, but the thinking remains connected.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Media, Digital, and Business have different capabilities, but
              they can work together whenever an opportunity crosses
              traditional boundaries.
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
                Tell better stories.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore content, conversations, production, and audience
                experiences.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Media →
              </span>
            </Link>

            <Link
              href="/digital"
              className="group rounded-2xl bg-[#050A30] p-8 text-white transition hover:-translate-y-1"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5FC9E6]">
                Digital
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Build useful technology.
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Explore websites, software, platforms, integrations, and
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
                Create practical value.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore consulting, strategy, services, solutions, and
                partnerships.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Business →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5FC9E6]">
                Collaboration
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Different strengths can produce stronger outcomes.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                We value collaboration with clients, partners, teams,
                creators, organizations, and other people who bring useful
                perspectives to the work.
              </p>

              <Link
                href="/business/partnerships"
                className="mt-7 inline-flex text-sm font-semibold text-[#5FC9E6]"
              >
                Explore Partnerships →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                People
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                The approach starts with people.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Understanding users, teams, leaders, partners, and other
                stakeholders helps us create work that is relevant and useful.
              </p>

              <Link
                href="/about/team"
                className="mt-7 inline-flex text-sm font-semibold text-[#1266B6]"
              >
                Meet Our Team →
              </Link>
            </div>
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
              href="/about/mission-vision"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                Mission &amp; Vision
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Understand the purpose and future direction guiding
                Nexus Hub.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Mission &amp; Vision →
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
                Meet the people providing direction across the Nexus Hub
                ecosystem.
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
            Our Approach
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have a challenge worth approaching differently?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us what you are trying to achieve, improve, build, or
            understand, and let&apos;s explore the right approach together.
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