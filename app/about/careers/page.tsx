import Link from 'next/link';

const reasons = [
  {
    number: '01',
    title: 'Build Real Things',
    description:
      'Work on products, platforms, media, services, and initiatives that are designed to solve meaningful problems.',
  },
  {
    number: '02',
    title: 'Learn Across Disciplines',
    description:
      'Work alongside people from digital, media, business, and operations and gain perspectives beyond a single role.',
  },
  {
    number: '03',
    title: 'Take Ownership',
    description:
      'Contribute ideas, take responsibility for your work, and have room to grow with the organization.',
  },
  {
    number: '04',
    title: 'Grow With the Ecosystem',
    description:
      'Develop as Nexus Hub expands into new products, services, partnerships, and opportunities.',
  },
];

const careerAreas = [
  {
    title: 'Digital & Technology',
    description:
      'Software engineering, product, UI/UX, digital platforms, systems, infrastructure, and technical operations.',
  },
  {
    title: 'Media & Creative',
    description:
      'Production, editorial, video, storytelling, design, content, creative direction, and audience development.',
  },
  {
    title: 'Business',
    description:
      'Consulting, strategy, business development, partnerships, research, and organizational growth.',
  },
  {
    title: 'Operations',
    description:
      'Administration, coordination, communications, support, finance, and organizational operations.',
  },
];

const culture = [
  {
    title: 'Curious',
    description:
      'We encourage people to ask questions, explore possibilities, and keep learning.',
  },
  {
    title: 'Collaborative',
    description:
      'We believe different perspectives and capabilities can produce stronger outcomes when they work together.',
  },
  {
    title: 'Practical',
    description:
      'We value ideas that can become useful products, services, experiences, or improvements.',
  },
  {
    title: 'Responsible',
    description:
      'We expect people to take ownership of their work, relationships, and commitments.',
  },
];

const applicationSteps = [
  {
    number: '01',
    title: 'Explore',
    description:
      'Review the available opportunities and identify the role or area that best matches your capabilities and interests.',
  },
  {
    number: '02',
    title: 'Apply',
    description:
      'Submit your application with the information and materials requested for the opportunity.',
  },
  {
    number: '03',
    title: 'Connect',
    description:
      'We learn more about your experience, strengths, interests, and how you could contribute.',
  },
  {
    number: '04',
    title: 'Grow',
    description:
      'Successful candidates join the team and develop alongside the wider Nexus Hub ecosystem.',
  },
];

export default function CareersPage() {
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
              Careers
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Build what comes next with Nexus Hub.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Join a growing ecosystem where technology, media, business,
              creativity, and people come together to turn ideas into
              meaningful possibilities.
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
        </div>
      </section>

      {/* INTRODUCTION */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
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
                backgrounds, skills, interests, and ambitions.
              </p>

              <p>
                We want people to have room to contribute, learn, take
                ownership, collaborate across disciplines, and develop
                as the organization grows.
              </p>

              <p>
                Opportunities may evolve as new products, initiatives,
                teams, and business needs emerge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Why Join Nexus Hub
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              More than a role. A place to build and grow.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We want people to contribute to meaningful work while
              developing their skills and perspective along the way.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
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
              Opportunities can grow across the ecosystem.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Roles can exist within individual departments or at the
              intersection of several capabilities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {careerAreas.map((area, index) => (
              <article
                key={area.title}
                className="rounded-2xl border border-slate-200 p-8 lg:p-10"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-4 text-3xl font-bold">
                  {area.title}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT OPPORTUNITIES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Opportunities
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Current openings.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Available roles can be published here as Nexus Hub
                grows and recruitment opportunities become available.
              </p>
            </div>
          </div>

          {/* PLACEHOLDER OPENINGS */}
          <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-white p-10">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold">
                No public openings at the moment.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                New opportunities can be added here as roles become
                available. Each opening can eventually have its own
                dedicated page containing the role description,
                requirements, responsibilities, benefits, and
                application process.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0B1B3A]"
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
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Culture
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A culture built around learning, ownership, and collaboration.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The culture should grow with the people who become part
                of Nexus Hub while remaining grounded in its broader
                purpose and values.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {culture.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <h3 className="text-xl font-bold">
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

      {/* APPLICATION PROCESS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Application Process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A straightforward path into the ecosystem.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {applicationSteps.map((step) => (
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

      {/* RELATED PEOPLE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/about/team"
              className="group rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Our Team
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Meet the people already building Nexus Hub.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore the team across Digital, Media, Business, and
                Operations.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Meet Our Team →
              </span>
            </Link>

            <Link
              href="/about/leadership"
              className="group rounded-2xl bg-[#050A30] p-8 text-white transition hover:-translate-y-1"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5FC9E6]">
                Leadership
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Understand who is guiding the organization.
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Meet the leaders providing direction across the Nexus
                Hub ecosystem.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#5FC9E6] transition group-hover:translate-x-1">
                Meet Leadership →
              </span>
            </Link>

            <Link
              href="/about/approach"
              className="group rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Our Approach
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Learn how we work.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore the principles and thinking that guide Nexus Hub.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Our Approach →
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
            Ready to build something meaningful?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore the ecosystem, discover where your strengths fit,
            and follow future opportunities as they become available.
          </p>

          <a
            href="#opportunities"
            className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
          >
            View Opportunities
          </a>
        </div>
      </section>
    </main>
  );
}