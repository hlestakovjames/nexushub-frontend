import Link from 'next/link';

const leadershipProfiles = [
  {
    name: 'Hlestakov James',
    role: 'Chief Executive Officer',
    slug: 'hlestakov-james',
    initials: 'HJ',
    summary:
      'Provides overall organizational direction, strategic leadership, and long-term ecosystem development.',
  },
  {
    name: 'Raphael Ayoma',
    role: 'Chief Technology Officer',
    slug: 'raphael-ayoma',
    initials: 'RA',
    summary:
      'Leads technology strategy, software development, systems architecture, and technical innovation.',
  },
];

const leadershipResponsibilities = [
  {
    number: '01',
    title: 'Strategic Direction',
    description:
      'Set priorities, maintain strategic focus, and guide Nexus Hub toward its long-term objectives.',
  },
  {
    number: '02',
    title: 'Ecosystem Stewardship',
    description:
      'Ensure Media, Digital, Business, Platforms, Projects, and future initiatives develop as part of a connected ecosystem.',
  },
  {
    number: '03',
    title: 'Organizational Leadership',
    description:
      'Build the structures, culture, standards, and working environment required for sustainable growth.',
  },
  {
    number: '04',
    title: 'Technology & Innovation',
    description:
      'Ensure technology and innovation remain practical, purposeful, scalable, and aligned with organizational needs.',
  },
];

const leadershipPrinciples = [
  {
    title: 'Purpose before activity',
    description:
      'Leadership should keep the organization focused on why it exists and the outcomes it is trying to create.',
  },
  {
    title: 'Long-term thinking',
    description:
      'Important decisions should consider the future strength and sustainability of the wider Nexus Hub ecosystem.',
  },
  {
    title: 'Accountability',
    description:
      'Leadership carries responsibility for decisions, priorities, relationships, standards, and organizational direction.',
  },
  {
    title: 'People and capability',
    description:
      'Strong organizations are built by developing people, creating opportunities, and giving capable teams room to contribute.',
  },
];

const leadershipAreas = [
  {
    title: 'Organizational Direction',
    description:
      'Translate the Nexus Hub mission and vision into practical priorities, initiatives, and decisions.',
  },
  {
    title: 'Ecosystem Development',
    description:
      'Coordinate the growth of interconnected divisions, products, services, platforms, and projects.',
  },
  {
    title: 'People & Culture',
    description:
      'Support a professional culture built around contribution, responsibility, learning, collaboration, and growth.',
  },
  {
    title: 'Partnerships',
    description:
      'Build relationships with clients, partners, organizations, communities, and other strategic stakeholders.',
  },
  {
    title: 'Innovation',
    description:
      'Identify opportunities where technology, creativity, media, and business thinking can produce useful outcomes.',
  },
  {
    title: 'Stewardship',
    description:
      'Protect the organization’s purpose, identity, values, standards, and long-term direction as it grows.',
  },
];

export default function LeadershipPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
                About Nexus Hub / Leadership
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
                Leadership that gives the ecosystem direction.
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
                Nexus Hub leadership is responsible for connecting purpose,
                strategy, people, technology, and opportunity into a
                coherent direction for the organization.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5">
                <p className="text-3xl font-bold text-white">02</p>
                <p className="mt-2 text-sm text-white/55">
                  Current leadership profiles
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5">
                <p className="text-3xl font-bold text-[#5FC9E6]">01</p>
                <p className="mt-2 text-sm text-white/55">
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
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Executive Leadership
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Turning direction into coordinated action.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Leadership at Nexus Hub exists to establish direction,
                maintain strategic alignment, and create the conditions
                for the wider organization to grow.
              </p>

              <p>
                This includes connecting the organization&apos;s divisions,
                people, technology, partnerships, products, services, and
                initiatives around a common purpose.
              </p>

              <p>
                Leadership does not replace the work of specialist teams.
                It provides the strategic framework within which those
                teams can operate, develop, collaborate, and deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP PROFILES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Leadership Profiles
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The current leadership team.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore the individual leadership profiles to understand
              each leader&apos;s role, responsibilities, experience, and
              areas of focus.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {leadershipProfiles.map((profile) => (
              <Link
                key={profile.slug}
                href={`/about/leadership/${profile.slug}`}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-xl"
              >
                <div className="bg-[#050A30] p-8 text-white sm:p-10">
                  <div className="flex flex-col gap-7 sm:flex-row sm:items-center">
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-2xl font-bold text-[#5FC9E6]">
                      {profile.initials}
                    </div>

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5FC9E6]">
                        Executive Leadership
                      </p>

                      <h3 className="mt-2 text-3xl font-bold">
                        {profile.name}
                      </h3>

                      <p className="mt-2 text-base font-medium text-white/60">
                        {profile.role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  <p className="text-lg leading-8 text-slate-600">
                    {profile.summary}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-sm font-medium text-slate-500">
                      Executive Profile
                    </span>

                    <span className="text-sm font-bold text-[#1266B6] transition group-hover:translate-x-1">
                      View Profile →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP MANDATE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Leadership Mandate
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Four responsibilities shape the leadership function.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Executive leadership balances strategic direction with the
              practical responsibility of building a healthy, capable,
              and connected organization.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {leadershipResponsibilities.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-slate-200 p-7"
              >
                <span className="text-sm font-bold text-[#1266B6]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Leadership Principles
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The standards behind leadership decisions.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/60">
                Leadership should protect the organization&apos;s purpose
                while making room for responsible growth, innovation, and
                strong people.
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {leadershipPrinciples.map((item, index) => (
                <div key={item.title} className="border-t border-white/10 pt-5">
                  <span className="text-sm font-bold text-[#5FC9E6]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-3 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AREAS OF RESPONSIBILITY */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Areas of Responsibility
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Leadership operates across the whole ecosystem.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Executive responsibility extends beyond one department.
                It connects organizational health with technology,
                people, partnerships, growth, and future opportunity.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {leadershipAreas.map((area) => (
                <article
                  key={area.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <h3 className="text-xl font-bold">
                    {area.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP + TEAM */}
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
                Leadership sets direction. Teams make it happen.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Meet the wider Nexus Hub team across Digital, Media,
                Business, Operations, and other areas of capability.
              </p>

              <span className="mt-7 inline-flex text-sm font-bold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Our Team →
              </span>
            </Link>

            <Link
              href="/about/careers"
              className="group rounded-3xl bg-[#1266B6] p-8 text-white transition hover:-translate-y-1 hover:bg-[#0f5ca5] sm:p-10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5FC9E6]">
                Careers
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Build your career within the ecosystem.
              </h2>

              <p className="mt-4 leading-7 text-white/75">
                Discover opportunities to contribute to the products,
                services, media, technology, and initiatives being built
                by Nexus Hub.
              </p>

              <span className="mt-7 inline-flex text-sm font-bold text-white transition group-hover:translate-x-1">
                Explore Careers →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            The Direction Ahead
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Building an organization capable of what comes next.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Nexus Hub leadership is focused on building the people,
            systems, capabilities, partnerships, and opportunities that
            will shape the ecosystem over time.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/about/team"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Our Team
            </Link>

            <Link
              href="/contact"
              className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Contact Nexus Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
