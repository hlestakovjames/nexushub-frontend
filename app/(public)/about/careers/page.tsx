import Link from 'next/link';

const reasons = [
  {
    number: '01',
    title: 'Build Real Things',
    description:
      'Work on products, platforms, media, services, and initiatives designed to create practical value.',
  },
  {
    number: '02',
    title: 'Learn Across Disciplines',
    description:
      'Work alongside people in technology, media, business, operations, and creative disciplines.',
  },
  {
    number: '03',
    title: 'Take Ownership',
    description:
      'Bring ideas forward, take responsibility for your work, and develop through meaningful contribution.',
  },
  {
    number: '04',
    title: 'Grow With the Ecosystem',
    description:
      'Develop alongside Nexus Hub as new products, services, teams, partnerships, and opportunities emerge.',
  },
];

const careerAreas = [
  {
    number: '01',
    title: 'Digital & Technology',
    description:
      'Software engineering, product development, UI/UX, digital platforms, systems, infrastructure, data, and technical operations.',
    roles: ['Software Engineering', 'Product & UX', 'Systems & Platforms'],
  },
  {
    number: '02',
    title: 'Media & Creative',
    description:
      'Production, editorial, video, storytelling, design, content, creative direction, and audience development.',
    roles: ['Media Production', 'Editorial & Content', 'Creative & Design'],
  },
  {
    number: '03',
    title: 'Business',
    description:
      'Strategy, business development, consulting, partnerships, research, commercial development, and organizational growth.',
    roles: ['Strategy', 'Business Development', 'Partnerships'],
  },
  {
    number: '04',
    title: 'Operations',
    description:
      'Administration, coordination, communications, finance, support, people operations, and organizational management.',
    roles: ['Administration', 'Coordination', 'Operations & Support'],
  },
];

const culture = [
  {
    title: 'Curious',
    description:
      'We encourage people to ask questions, explore possibilities, experiment responsibly, and keep learning.',
  },
  {
    title: 'Collaborative',
    description:
      'Different perspectives and capabilities can create stronger outcomes when people work together.',
  },
  {
    title: 'Practical',
    description:
      'We value ideas that can become useful products, services, experiences, systems, or improvements.',
  },
  {
    title: 'Responsible',
    description:
      'We expect people to take ownership of their work, relationships, decisions, and commitments.',
  },
];

const applicationSteps = [
  {
    number: '01',
    title: 'Explore',
    description:
      'Review available opportunities and identify the area that best matches your capabilities and interests.',
  },
  {
    number: '02',
    title: 'Apply',
    description:
      'Submit your application and the materials requested for the specific opportunity.',
  },
  {
    number: '03',
    title: 'Connect',
    description:
      'We learn more about your experience, strengths, interests, and potential contribution.',
  },
  {
    number: '04',
    title: 'Grow',
    description:
      'Successful candidates join the organization and develop alongside the wider Nexus Hub ecosystem.',
  },
];

export default function CareersPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
                About Nexus Hub / Careers
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
                Build what comes next with Nexus Hub.
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
                Join an ecosystem where technology, media, business,
                creativity, and operations come together to turn ideas
                into meaningful possibilities.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#opportunities"
                  className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                >
                  Explore Opportunities
                </a>

                <Link
                  href="/about/team"
                  className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="min-w-32 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-bold text-white">04</p>
                <p className="mt-2 text-sm text-white/50">
                  Core career areas
                </p>
              </div>

              <div className="min-w-32 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-bold text-[#5FC9E6]">01</p>
                <p className="mt-2 text-sm text-white/50">
                  Connected ecosystem
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Working at Nexus Hub
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                People are part of the ecosystem we are building.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Nexus Hub is being built by people with different
                backgrounds, capabilities, interests, and ambitions.
              </p>

              <p>
                We want people to have room to contribute, learn, take
                ownership, collaborate across disciplines, and develop
                as the organization grows.
              </p>

              <p>
                Our opportunities will evolve with the organization.
                New products, initiatives, teams, and business needs can
                create new ways for people to contribute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NEXUS HUB */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Why Nexus Hub
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              More than a role. A place to build and grow.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We want people to contribute to meaningful work while
              developing their skills, experience, judgment, and
              perspective.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-bold text-[#1266B6]">
                  {reason.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER AREAS */}
      <section id="opportunities">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Career Areas
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Find where your capabilities can contribute.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Career opportunities can develop within individual
              functions or at the intersection of several capabilities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {careerAreas.map((area) => (
              <article
                key={area.number}
                className="rounded-3xl border border-slate-200 p-8 transition hover:border-[#1266B6]/30 hover:shadow-lg lg:p-10"
              >
                <span className="text-sm font-bold text-[#1266B6]">
                  {area.number}
                </span>

                <h3 className="mt-4 text-3xl font-bold">
                  {area.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {area.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {area.roles.map((role) => (
                    <span
                      key={role}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT OPPORTUNITIES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Current Opportunities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Opportunities will appear here as they open.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              This section is designed to become the public careers
              directory for Nexus Hub. Individual openings can later
              include their own descriptions, requirements,
              responsibilities, application process, and closing dates.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-white p-8 lg:p-12">
            <div className="max-w-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#050A30] text-sm font-bold text-[#5FC9E6]">
                NH
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                No public vacancies at the moment.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We are not publishing a specific vacancy here until an
                opportunity is formally available. Check back as the
                organization grows or contact Nexus Hub if you would
                like to express interest in future opportunities.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0B1B3A]"
              >
                Contact Nexus Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Culture
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A culture built around learning, ownership, and collaboration.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Culture should grow with the people who become part of
                Nexus Hub while remaining grounded in the organization&apos;s
                purpose and values.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {culture.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE HIRE */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                How We Hire
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A straightforward path into the ecosystem.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/60">
                The exact process can vary by role, but our careers
                structure is designed to make opportunities clear and
                the path from application to contribution straightforward.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {applicationSteps.map((step) => (
                <div
                  key={step.number}
                  className="border-t border-white/10 pt-5"
                >
                  <span className="text-sm font-bold text-[#5FC9E6]">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/60">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM / LEADERSHIP */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/about/team"
              className="group rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg sm:p-10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Our Team
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Meet the people already building Nexus Hub.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Explore the people and capabilities across Digital,
                Media, Business, Operations, and other areas of work.
              </p>

              <span className="mt-7 inline-flex text-sm font-bold text-[#1266B6] transition group-hover:translate-x-1">
                Meet Our Team →
              </span>
            </Link>

            <Link
              href="/about/leadership"
              className="group rounded-3xl bg-[#1266B6] p-8 text-white transition hover:-translate-y-1 hover:bg-[#0f5ca5] sm:p-10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5FC9E6]">
                Leadership
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Understand who is guiding the organization.
              </h2>

              <p className="mt-4 leading-7 text-white/75">
                Meet the leaders providing strategic and technical
                direction across the Nexus Hub ecosystem.
              </p>

              <span className="mt-7 inline-flex text-sm font-bold text-white transition group-hover:translate-x-1">
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
            Careers at Nexus Hub
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Bring your skills. Build your future.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Whether your strength is technology, media, business,
            creativity, or operations, there is room for capable people
            to contribute as the Nexus Hub ecosystem grows.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#opportunities"
              className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              View Opportunities
            </a>

            <Link
              href="/contact"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Nexus Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
