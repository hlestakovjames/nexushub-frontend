import Link from 'next/link';

type TeamMember = {
  name: string;
  role: string;
  slug: string;
  initials: string;
};

type Department = {
  title: string;
  description: string;
  areas: string[];
  members: TeamMember[];
};

const departments: Department[] = [
  {
    title: 'Digital',
    description:
      'Technology, software, product, and digital capabilities supporting the development of Nexus Hub platforms and experiences.',
    areas: [
      'Engineering',
      'Product & UI/UX',
      'Digital Platforms',
      'Technical Operations',
    ],
    members: [
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
      {
        name: 'Brian Ochieng',
        role: 'Senior Software Engineer',
        slug: 'brian-ochieng',
        initials: 'BO',
      },
      {
        name: 'Sheila Akinyi',
        role: 'UI/UX & Product Designer',
        slug: 'sheila-akinyi',
        initials: 'SA',
      },
    ],
  },
  {
    title: 'Media',
    description:
      'The people creating stories, productions, conversations, and media experiences across the Nexus Hub ecosystem.',
    areas: [
      'Production',
      'Editorial',
      'Creative',
      'Audience & Distribution',
    ],
    members: [
      {
        name: 'Daniel Otieno',
        role: 'Media Producer',
        slug: 'daniel-otieno',
        initials: 'DO',
      },
      {
        name: 'Faith Wanjiku',
        role: 'Content & Editorial Lead',
        slug: 'faith-wanjiku',
        initials: 'FW',
      },
      {
        name: 'Kevin Mwangi',
        role: 'Video & Creative Producer',
        slug: 'kevin-mwangi',
        initials: 'KM',
      },
    ],
  },
  {
    title: 'Business',
    description:
      'Business-focused capabilities supporting strategy, consulting, partnerships, growth, and organizational opportunities.',
    areas: [
      'Consulting',
      'Strategy & Advisory',
      'Business Development',
      'Partnerships',
    ],
    members: [
      {
        name: 'Mary Atieno',
        role: 'Business Strategy Associate',
        slug: 'mary-atieno',
        initials: 'MA',
      },
      {
        name: 'Collins Kamau',
        role: 'Business Development Lead',
        slug: 'collins-kamau',
        initials: 'CK',
      },
      {
        name: 'Ruth Njeri',
        role: 'Partnerships Coordinator',
        slug: 'ruth-njeri',
        initials: 'RN',
      },
    ],
  },
  {
    title: 'Operations',
    description:
      'The functions that help Nexus Hub coordinate people, resources, administration, communication, and organizational support.',
    areas: [
      'Administration',
      'Communications',
      'Coordination',
      'Support',
    ],
    members: [
      {
        name: 'Ann Wambui',
        role: 'Operations Coordinator',
        slug: 'ann-wambui',
        initials: 'AW',
      },
      {
        name: 'David Onyango',
        role: 'Administration & Support Officer',
        slug: 'david-onyango',
        initials: 'DO',
      },
    ],
  },
];

const teamPrinciples = [
  {
    number: '01',
    title: 'Different Strengths',
    description:
      'Our team brings different technical, creative, business, and operational strengths into the same ecosystem.',
  },
  {
    number: '02',
    title: 'Shared Purpose',
    description:
      'Different departments can work independently while contributing to the wider Nexus Hub mission.',
  },
  {
    number: '03',
    title: 'Collaboration',
    description:
      'The best results often come from bringing together people with different perspectives and capabilities.',
  },
  {
    number: '04',
    title: 'Growth',
    description:
      'The team structure is designed to evolve as Nexus Hub develops new products, services, initiatives, and opportunities.',
  },
];

const ecosystemLinks = [
  {
    title: 'Leadership',
    description:
      'Meet the people providing strategic and organizational direction for Nexus Hub.',
    href: '/about/leadership',
  },
  {
    title: 'Careers',
    description:
      'Explore opportunities to contribute and grow within the Nexus Hub ecosystem.',
    href: '/about/careers',
  },
  {
    title: 'Our Approach',
    description:
      'Learn how Nexus Hub approaches ideas, challenges, products, and collaboration.',
    href: '/about/approach',
  },
];

export default function OurTeamPage() {
  const totalMembers = departments.reduce(
    (total, department) => total + department.members.length,
    0,
  );

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
              Our Team
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              People with different strengths, working toward one purpose.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Nexus Hub brings together technical, creative, business,
              and operational capabilities across a connected ecosystem.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
                {departments.length} Departments
              </span>

              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
                {totalMembers} Team Members
              </span>
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
                The People Behind the Work
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A team organized around capabilities and shared purpose.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Nexus Hub is built around multiple areas of work. Rather
                than treating everyone as one large group, the team is
                organized around the capabilities needed to develop and
                operate the wider ecosystem.
              </p>

              <p>
                This makes it easier to understand where different skills
                sit while still allowing people and departments to work
                together across projects and initiatives.
              </p>

              <p>
                Every team member has an individual profile, allowing
                visitors to explore their role, background, experience,
                responsibilities, and areas of expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Departments
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore the team by area of work.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Departments provide clear homes for different capabilities
              while preserving the connections between them.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {departments.map((department, index) => (
              <section
                key={department.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10"
              >
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                  {/* DEPARTMENT INFO */}
                  <div>
                    <span className="text-sm font-semibold text-[#1266B6]">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <h3 className="mt-4 text-3xl font-bold">
                      {department.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {department.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {department.areas.map((area) => (
                        <span
                          key={area}
                          className="rounded-full bg-slate-50 px-3.5 py-2 text-xs font-medium text-slate-700"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* MEMBERS */}
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
                        Team Members
                      </p>

                      <span className="text-sm text-slate-400">
                        {department.members.length}
                      </span>
                    </div>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {department.members.map((member) => (
                        <Link
                          key={member.slug}
                          href={`/about/team/${member.slug}`}
                          className="group rounded-xl border border-slate-200 p-5 transition hover:-translate-y-0.5 hover:border-[#1266B6]/40 hover:shadow-md"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#050A30] text-sm font-bold text-[#5FC9E6]">
                              {member.initials}
                            </div>

                            <div className="min-w-0">
                              <h4 className="truncate font-bold transition group-hover:text-[#1266B6]">
                                {member.name}
                              </h4>

                              <p className="mt-1 text-sm leading-5 text-slate-500">
                                {member.role}
                              </p>
                            </div>
                          </div>

                          <div className="mt-5 border-t border-slate-100 pt-4">
                            <span className="text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                              View Profile →
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PROFILE SYSTEM */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Individual Profiles
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Every person can have a deeper story.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Individual profiles provide room for more complete
                information without overcrowding the department overview.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Biography',
                'Education',
                'Professional Experience',
                'Responsibilities',
                'Areas of Expertise',
                'Projects & Contributions',
                'Professional Links',
                'Related Team Members',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 p-6"
                >
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              How We Work Together
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different departments. Shared direction.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamPrinciples.map((principle) => (
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

      {/* CROSS-DEPARTMENT COLLABORATION */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                  Collaboration Across the Ecosystem
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Some of the most important work happens between departments.
                </h2>
              </div>

              <div className="space-y-5 text-lg leading-8 text-white/65">
                <p>
                  A digital project may need business strategy. A media
                  initiative may need technology. A partnership may combine
                  creative, business, and operational capabilities.
                </p>

                <p>
                  The department structure gives people a clear home while
                  keeping the wider Nexus Hub ecosystem connected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED ABOUT PAGES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Explore More
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Learn more about the people and organization.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ecosystemLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Our Team
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Great work starts with the right people.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore the people, capabilities, and opportunities that
            make up the Nexus Hub ecosystem.
          </p>

          <Link
            href="/about/careers"
            className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
          >
            Explore Careers
          </Link>
        </div>
      </section>
    </main>
  );
}