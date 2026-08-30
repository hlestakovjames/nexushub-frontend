import Link from 'next/link';

const outcomes = [
  {
    number: '01',
    title: 'Strategic Connections',
    description:
      'Connect organizations, people, capabilities, and networks around opportunities that make sense for all parties involved.',
  },
  {
    number: '02',
    title: 'Shared Value',
    description:
      'Build collaborations around clear objectives, complementary strengths, and practical value for participating partners.',
  },
  {
    number: '03',
    title: 'Expanded Reach',
    description:
      'Use partnerships to access new audiences, markets, capabilities, expertise, or networks.',
  },
  {
    number: '04',
    title: 'Sustainable Collaboration',
    description:
      'Create partnership structures that can evolve beyond a single transaction or short-term initiative.',
  },
];

const partnershipAreas = [
  {
    title: 'Strategic Partnerships',
    description:
      'Develop relationships that support long-term organizational, commercial, or ecosystem objectives.',
  },
  {
    title: 'Business Development',
    description:
      'Identify and develop opportunities where collaboration can support growth, market access, or new ventures.',
  },
  {
    title: 'Technology Partnerships',
    description:
      'Connect organizations with technical capabilities, platforms, products, and digital opportunities.',
  },
  {
    title: 'Media & Creative Partnerships',
    description:
      'Create collaborations around content, media production, campaigns, audiences, and creative initiatives.',
  },
  {
    title: 'Community & Institutional Partnerships',
    description:
      'Support collaborations involving communities, institutions, organizations, and shared-impact initiatives.',
  },
  {
    title: 'Project Partnerships',
    description:
      'Bring together complementary contributors around a defined project, program, launch, or initiative.',
  },
];

const partnershipTypes = [
  'Technology partnerships',
  'Strategic alliances',
  'Business collaborations',
  'Media collaborations',
  'Creative partnerships',
  'Institutional relationships',
  'Community initiatives',
  'Project-based collaborations',
  'Knowledge partnerships',
  'Growth partnerships',
];

const process = [
  {
    number: '01',
    title: 'Identify',
    description:
      'Understand the objective, opportunity, capabilities required, and organizations or people that could contribute.',
  },
  {
    number: '02',
    title: 'Connect',
    description:
      'Facilitate introductions and conversations around the potential opportunity and shared objectives.',
  },
  {
    number: '03',
    title: 'Align',
    description:
      'Clarify responsibilities, contributions, expectations, resources, and the value each side brings.',
  },
  {
    number: '04',
    title: 'Structure',
    description:
      'Develop a practical collaboration model that defines how the partnership will operate.',
  },
  {
    number: '05',
    title: 'Grow',
    description:
      'Review the relationship, learn from implementation, and identify opportunities for deeper collaboration.',
  },
];

export default function PartnershipSolutionsPage() {
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
              Partnership Solutions
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Connect the right people,
              <br />
              capabilities, and opportunities.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We help organizations build practical collaborations around
              shared objectives, complementary capabilities, networks,
              opportunities, and long-term value.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Discuss a Partnership
              </Link>

              <Link
                href="/business/partnerships"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Partnerships
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
                Why Partnerships Matter
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Some opportunities become possible only when capabilities come together.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                An organization may have a strong product but need wider
                distribution. Another may have expertise, networks, or
                technology that complements it.
              </p>

              <p>
                Partnership Solutions focuses on identifying those
                connections and helping turn them into practical
                collaborations.
              </p>

              <p>
                The strongest partnerships are built around clearly
                understood objectives, complementary value, mutual
                expectations, and a structure that supports implementation.
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
              Build relationships that create practical value.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A strong partnership should produce more than introductions.
              It should create a meaningful path toward a shared objective.
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

      {/* PARTNERSHIP AREAS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Partnership Areas
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different collaborations can solve different problems.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Partnerships can take many forms depending on the
              organizations involved and the opportunity being pursued.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partnershipAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-2xl border border-slate-200 p-7"
              >
                <h3 className="text-2xl font-bold">
                  {area.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TYPES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Typical Opportunities
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Areas where collaboration can unlock new possibilities.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                These are examples of partnership opportunities that
                can be explored, structured, or developed.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {partnershipTypes.map((type) => (
                <div
                  key={type}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-4"
                >
                  <p className="font-medium text-slate-700">
                    {type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                  Nexus Hub Ecosystem
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Partnerships can connect Business, Digital, and Media.
                </h2>
              </div>

              <div className="space-y-5 text-lg leading-8 text-white/65">
                <p>
                  One collaboration may require business development.
                  Another may require digital technology, media
                  production, creative capabilities, or several of
                  these areas together.
                </p>

                <p>
                  Nexus Hub can therefore approach partnerships from an
                  ecosystem perspective, bringing together the
                  capabilities required to create a stronger outcome.
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
              From potential connection to working relationship.
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

      {/* RELATED SERVICES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Supporting Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Partnerships can be supported by other Nexus Hub capabilities.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link
              href="/business/services/business-consulting"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold group-hover:text-[#1266B6]">
                Business Consulting
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Business analysis and practical advisory support for
                partnership-driven initiatives.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore →
              </span>
            </Link>

            <Link
              href="/business/services/strategy-advisory"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold group-hover:text-[#1266B6]">
                Strategy &amp; Advisory
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Strategic support for partnerships, alliances, and
                organizational opportunities.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore →
              </span>
            </Link>

            <Link
              href="/digital/services/systems-integration"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold group-hover:text-[#1266B6]">
                Systems Integration
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Technical integration capabilities when a partnership
                depends on connected systems and platforms.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED SOLUTIONS */}
      <section className="bg-slate-50">
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
                Growth, performance, strategy, positioning, and wider
                business challenges.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore →
              </span>
            </Link>

            <Link
              href="/business/solutions/organizational"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold group-hover:text-[#1266B6]">
                Organizational Solutions
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Structures, workflows, teams, processes, and
                organizational performance.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore →
              </span>
            </Link>

            <Link
              href="/business/solutions/custom"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold group-hover:text-[#1266B6]">
                Custom Solutions
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                A tailored combination of capabilities built around a
                specific challenge.
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
            Partnership Solutions
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Is there an opportunity worth building together?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us about the organizations, capabilities, opportunity,
            or outcome you have in mind and let&apos;s explore a practical
            path forward.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
          >
            Discuss a Partnership
          </Link>
        </div>
      </section>
    </main>
  );
}