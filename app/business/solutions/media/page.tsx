import Link from 'next/link';

const outcomes = [
  {
    number: '01',
    title: 'Stronger Visibility',
    description:
      'Help organizations communicate more clearly and increase awareness among the audiences that matter to them.',
  },
  {
    number: '02',
    title: 'Better Storytelling',
    description:
      'Turn ideas, products, services, initiatives, and organizational stories into content people can understand and remember.',
  },
  {
    number: '03',
    title: 'Audience Engagement',
    description:
      'Develop content and communication approaches that create meaningful interaction with customers, communities, and audiences.',
  },
  {
    number: '04',
    title: 'Consistent Brand Presence',
    description:
      'Create more coordinated visual, editorial, and communication experiences across relevant channels.',
  },
];

const capabilities = [
  {
    title: 'Content Strategy',
    description:
      'Define content themes, audiences, channels, publishing priorities, and communication objectives.',
    href: '/business/services/brand-creative',
  },
  {
    title: 'Brand & Creative',
    description:
      'Develop creative direction, visual communication, brand assets, and experiences that support organizational positioning.',
    href: '/business/services/brand-creative',
  },
  {
    title: 'Media Production',
    description:
      'Plan and create video, editorial, visual, and multimedia content around specific communication objectives.',
    href: '/media',
  },
  {
    title: 'Digital Distribution',
    description:
      'Connect content with websites, platforms, social channels, and other digital touchpoints.',
    href: '/digital/services/digital-platforms',
  },
  {
    title: 'Audience Development',
    description:
      'Improve how organizations reach, understand, and build relationships with their intended audiences.',
    href: '/business/services/digital-business',
  },
  {
    title: 'Campaign Support',
    description:
      'Bring together strategy, content, creative, and digital capabilities around a defined campaign or initiative.',
    href: '/business/services/brand-creative',
  },
];

const situations = [
  'Brand visibility challenges',
  'New product or service launches',
  'Content development needs',
  'Audience growth',
  'Campaign development',
  'Digital communication',
  'Organizational storytelling',
  'Event promotion',
  'Community engagement',
  'Brand repositioning',
];

const process = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We identify the organization, audience, message, objective, channels, and context surrounding the communication challenge.',
  },
  {
    number: '02',
    title: 'Position',
    description:
      'We clarify the key message, story, value proposition, or communication direction that should guide the work.',
  },
  {
    number: '03',
    title: 'Create',
    description:
      'We develop the appropriate content, creative assets, media formats, and communication experiences.',
  },
  {
    number: '04',
    title: 'Distribute',
    description:
      'We connect the work with the relevant digital and media channels to reach the intended audience.',
  },
  {
    number: '05',
    title: 'Learn',
    description:
      'We evaluate what is working, identify opportunities for improvement, and refine future communication.',
  },
];

export default function MediaMarketingSolutionsPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <Link
              href="/business/solutions"
              className="text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
            >
              ← Business Solutions
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Media &amp; Marketing Solutions
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Turn ideas into stories
              <br />
              people can connect with.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We combine strategy, content, creative work, media,
              and digital distribution to help organizations communicate
              with greater clarity and impact.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Discuss a Communication Challenge
              </Link>

              <Link
                href="/media"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Media
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Communication With Purpose
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Visibility alone is not the goal.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Organizations need more than content. They need a clear
                reason for communicating, a strong understanding of their
                audiences, and a message that supports the wider business
                objective.
              </p>

              <p>
                Media &amp; Marketing Solutions brings strategic,
                creative, and digital capabilities together around that
                objective.
              </p>

              <p>
                The result can be a campaign, content system, launch,
                brand experience, media production, or another coordinated
                communication initiative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Desired Outcomes
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Communication that supports a meaningful objective.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The right communication approach can strengthen visibility,
              engagement, positioning, and relationships with audiences.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome) => (
              <article
                key={outcome.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {outcome.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {outcome.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {outcome.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Connected Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Bring strategy, creative work, and media together.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Depending on the challenge, a communication solution can
              combine several Nexus Hub capabilities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <Link
                key={capability.title}
                href={capability.href}
                className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold transition group-hover:text-[#1266B6]">
                  {capability.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {capability.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore Capability →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TYPICAL SITUATIONS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Typical Situations
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                When stronger communication can create business value.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                These examples illustrate some of the communication
                challenges that may benefit from a coordinated approach.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {situations.map((situation) => (
                <div
                  key={situation}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-4"
                >
                  <p className="font-medium text-slate-700">
                    {situation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA + DIGITAL + BUSINESS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                  Media + Digital + Business
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Strong communication connects the story to the organization behind it.
                </h2>
              </div>

              <div className="space-y-5 text-lg leading-8 text-white/65">
                <p>
                  A launch needs strategy, creative development, content,
                  distribution, and often a digital destination. A brand
                  initiative may require business positioning as well as
                  strong creative execution.
                </p>

                <p>
                  By connecting capabilities across the Nexus Hub
                  ecosystem, we can approach these challenges as
                  coordinated business problems rather than isolated
                  marketing tasks.
                </p>
              </div>
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
              From message to audience.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
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

      {/* RELATED SOLUTIONS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                More Business Solutions
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Explore other approaches.
              </h2>
            </div>

            <Link
              href="/business/solutions"
              className="text-sm font-semibold text-[#1266B6]"
            >
              View All Solutions →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link
              href="/business/solutions/business"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold group-hover:text-[#1266B6]">
                Business Solutions
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Growth, strategy, performance, positioning, and broader
                business challenges.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore →
              </span>
            </Link>

            <Link
              href="/business/solutions/digital"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold group-hover:text-[#1266B6]">
                Digital Solutions
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Technology-enabled approaches to organizational and
                business challenges.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore →
              </span>
            </Link>

            <Link
              href="/business/solutions/partnerships"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold group-hover:text-[#1266B6]">
                Partnership Solutions
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Collaborative approaches that connect organizations,
                capabilities, networks, and resources.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Media &amp; Marketing Solutions
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have a story, campaign, or audience challenge to solve?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us what you are trying to communicate and we can
            explore the right combination of strategy, creative,
            content, media, and digital capabilities.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
          >
            Discuss a Communication Challenge
          </Link>
        </div>
      </section>
    </main>
  );
}