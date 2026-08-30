import Link from 'next/link';

const partnershipTypes = [
  {
    number: '01',
    title: 'Strategic Partnerships',
    description:
      'Collaborative relationships built around shared goals, complementary capabilities, and long-term opportunities.',
  },
  {
    number: '02',
    title: 'Technology Partnerships',
    description:
      'Working with organizations and technology providers to create stronger digital products, platforms, and services.',
  },
  {
    number: '03',
    title: 'Media Partnerships',
    description:
      'Collaborations around content, storytelling, production, distribution, and audience growth.',
  },
  {
    number: '04',
    title: 'Business Collaborations',
    description:
      'Practical collaborations that combine expertise, resources, networks, or services to create mutual value.',
  },
  {
    number: '05',
    title: 'Project Partnerships',
    description:
      'Working alongside organizations, teams, and individuals to deliver specific projects and initiatives.',
  },
  {
    number: '06',
    title: 'Community Partnerships',
    description:
      'Partnerships that connect organizations with communities, initiatives, and opportunities for meaningful impact.',
  },
];

const partnershipValues = [
  {
    title: 'Shared Value',
    description:
      'Strong partnerships should create meaningful value for everyone involved.',
  },
  {
    title: 'Complementary Strengths',
    description:
      'We look for opportunities where different capabilities can work better together.',
  },
  {
    title: 'Trust',
    description:
      'Clear communication, reliability, and transparency are fundamental to successful collaboration.',
  },
  {
    title: 'Long-Term Thinking',
    description:
      'We value relationships that can evolve beyond a single project or transaction.',
  },
];

const process = [
  {
    number: '01',
    title: 'Connect',
    description:
      'We understand the organization, opportunity, capabilities, and goals behind a potential partnership.',
  },
  {
    number: '02',
    title: 'Explore',
    description:
      'We identify areas where the two sides can work together and define the opportunity clearly.',
  },
  {
    number: '03',
    title: 'Structure',
    description:
      'We agree on responsibilities, deliverables, expectations, and the practical model for collaboration.',
  },
  {
    number: '04',
    title: 'Grow',
    description:
      'We build the relationship through delivery, communication, shared learning, and future opportunities.',
  },
];

export default function PartnershipsPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Business Partnerships
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Building stronger
              <br />
              possibilities together.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We collaborate with organizations, businesses, creators,
              technology teams, and other partners to turn shared
              opportunities into meaningful outcomes.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Start a Partnership
              </Link>

              <Link
                href="/business"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Business
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
                Why Partnerships
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Some opportunities are better built together.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                The strongest ideas often come from combining different
                capabilities, perspectives, networks, technologies, and
                experiences.
              </p>

              <p>
                Nexus Hub works with partners where collaboration can
                create something stronger than either side could build
                alone.
              </p>

              <p>
                Partnerships can range from focused project
                collaborations to longer-term strategic relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TYPES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Partnership Opportunities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different ways we can collaborate.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Every partnership is different. The right structure
              depends on the opportunity, capabilities, and outcomes
              involved.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partnershipTypes.map((partnership) => (
              <article
                key={partnership.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {partnership.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {partnership.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {partnership.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                How We Collaborate
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Partnerships built on substance.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We want collaboration to create real value rather than
                simply add another name to a network.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {partnershipValues.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <h3 className="text-xl font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#050A30] p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5FC9E6]">
                Media
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Create and distribute stories.
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Collaborate on content, productions, media experiences,
                audiences, and creative opportunities.
              </p>

              <Link
                href="/media"
                className="mt-7 inline-block text-sm font-semibold text-[#5FC9E6]"
              >
                Explore Media →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Digital
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Build technology together.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Combine technical capabilities to create digital
                products, platforms, and services.
              </p>

              <Link
                href="/digital"
                className="mt-7 inline-block text-sm font-semibold text-[#1266B6]"
              >
                Explore Digital →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Business
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Create new opportunities.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Work together on services, solutions, markets, and
                initiatives that create mutual value.
              </p>

              <Link
                href="/business/services"
                className="mt-7 inline-block text-sm font-semibold text-[#1266B6]"
              >
                Explore Services →
              </Link>
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
              From introduction to lasting collaboration.
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

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Let&apos;s Collaborate
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have an opportunity worth exploring together?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us what you are building, what you bring to the table,
            and where you see an opportunity to work together.
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