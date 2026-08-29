import Link from 'next/link';

const leadershipProfiles = [
  {
    name: 'Hlestakov James',
    role: 'Chief Executive Officer',
    slug: 'hlestakov-james',
    initials: 'HJ',
  },
  {
    name: 'Raphael Ayoma',
    role: 'Chief Technology Officer',
    slug: 'raphael-ayoma',
    initials: 'RA',
  },
];

const leadershipPrinciples = [
  {
    number: '01',
    title: 'Direction',
    description:
      'Provide clear direction for the organization and the ecosystem it is building.',
  },
  {
    number: '02',
    title: 'Responsibility',
    description:
      'Lead with accountability for the decisions, people, relationships, and opportunities entrusted to the organization.',
  },
  {
    number: '03',
    title: 'Growth',
    description:
      'Create the conditions for people, ideas, products, and the wider Nexus Hub ecosystem to develop.',
  },
  {
    number: '04',
    title: 'Connection',
    description:
      'Recognize where different capabilities, people, and opportunities can create stronger outcomes together.',
  },
];

const leadershipAreas = [
  {
    title: 'Organizational Direction',
    description:
      'Guide the overall direction, priorities, and long-term development of Nexus Hub.',
  },
  {
    title: 'Ecosystem Development',
    description:
      'Support the growth and connection of Media, Digital, Business, and future Nexus Hub initiatives.',
  },
  {
    title: 'People & Culture',
    description:
      'Help build a strong organizational culture and create an environment where people can contribute and grow.',
  },
  {
    title: 'Strategic Relationships',
    description:
      'Develop relationships with partners, organizations, clients, and other stakeholders that support the ecosystem.',
  },
  {
    title: 'Innovation',
    description:
      'Encourage useful ideas, experimentation, and new opportunities across the organization.',
  },
  {
    title: 'Long-Term Stewardship',
    description:
      'Protect the purpose, values, identity, and long-term direction of Nexus Hub as it grows.',
  },
];

export default function LeadershipPage() {
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
              Leadership
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              The people providing direction for Nexus Hub.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Leadership provides the direction, stewardship, and
              strategic perspective that help the Nexus Hub ecosystem
              grow with purpose.
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
                Leadership at Nexus Hub
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Leadership is about responsibility, direction, and people.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                The leadership of Nexus Hub is responsible for helping
                translate the organization&apos;s mission and vision into
                practical priorities and long-term direction.
              </p>

              <p>
                As the ecosystem grows, leadership also plays an important
                role in connecting its different divisions, capabilities,
                relationships, and opportunities.
              </p>

              <p>
                Individual leadership profiles provide a deeper view of
                each leader&apos;s role, background, responsibilities, and
                contribution to Nexus Hub.
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
              Meet the people behind the direction.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore each leader&apos;s profile for more information about
              their role and contribution to Nexus Hub.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {leadershipProfiles.map((profile) => (
              <Link
                key={profile.slug}
                href={`/about/leadership/${profile.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#050A30] text-lg font-bold text-[#5FC9E6]">
                    {profile.initials}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold transition group-hover:text-[#1266B6]">
                      {profile.name}
                    </h3>

                    <p className="mt-2 font-medium text-slate-500">
                      {profile.role}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-sm text-slate-500">
                    Leadership Profile
                  </span>

                  <span className="text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                    View Profile →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Leadership Principles
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              What leadership should help protect and build.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Leadership at Nexus Hub should support the organization&apos;s
              purpose while creating the conditions for long-term growth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {leadershipPrinciples.map((principle) => (
              <article
                key={principle.number}
                className="rounded-2xl border border-slate-200 p-7"
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

      {/* RESPONSIBILITIES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Areas of Responsibility
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Leadership across the wider ecosystem.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                As Nexus Hub develops, leadership responsibilities can
                span organizational direction, people, divisions,
                partnerships, and future opportunities.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {leadershipAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <h3 className="text-xl font-bold">
                    {area.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/about/team"
              className="group rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Our Team
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Meet the wider team.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Explore the people and capabilities across Nexus Hub,
                organized by department and area of work.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Our Team →
              </span>
            </Link>

            <Link
              href="/about/careers"
              className="group rounded-2xl bg-[#050A30] p-8 text-white transition hover:-translate-y-1"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5FC9E6]">
                Careers
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Grow with Nexus Hub.
              </h2>

              <p className="mt-4 leading-7 text-white/65">
                Explore opportunities to contribute, develop, and grow
                within the Nexus Hub ecosystem.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#5FC9E6] transition group-hover:translate-x-1">
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
            Nexus Hub Leadership
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Building the direction for what comes next.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Leadership helps connect purpose, people, capabilities, and
            opportunities as the Nexus Hub ecosystem continues to grow.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
          >
            Contact Nexus Hub
          </Link>
        </div>
      </section>
    </main>
  );
}