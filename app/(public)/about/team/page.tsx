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
      'Technology, software, product, and digital capabilities supporting the development of Nexus Hub platforms, systems, and experiences.',
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
      'Our team brings technical, creative, business, and operational strengths into the same wider ecosystem.',
  },
  {
    number: '02',
    title: 'Shared Purpose',
    description:
      'Different departments can develop their own capabilities while contributing to the broader Nexus Hub mission.',
  },
  {
    number: '03',
    title: 'Collaboration',
    description:
      'Projects and opportunities can bring people from different areas together when their capabilities complement one another.',
  },
  {
    number: '04',
    title: 'Continuous Growth',
    description:
      'The team structure can evolve as Nexus Hub develops new products, services, initiatives, and opportunities.',
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
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(95,201,230,0.15),transparent_30%),radial-gradient(circle_at_15%_82%,rgba(18,102,182,0.2),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-5xl">
            <Link
              href="/about"
              className="inline-flex text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
            >
              ← About Nexus Hub
            </Link>

            <p className="mt-9 text-sm font-bold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Our Team
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              People with different strengths,
              <br />
              working toward one purpose.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">
              Nexus Hub brings together technical, creative, business,
              and operational capabilities across one connected ecosystem.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/75">
                {departments.length} Departments
              </div>

              <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/75">
                {totalMembers} Team Members
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
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                The People Behind the Work
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                A team organized around capabilities and shared purpose.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Nexus Hub is built around multiple areas of work. Each
                department provides a clear home for a particular set of
                capabilities while remaining connected to the wider ecosystem.
              </p>

              <p>
                This structure allows people to develop specialist strengths
                while still creating room for cross-functional collaboration
                across projects, platforms, media initiatives, and business
                opportunities.
              </p>

              <p>
                The directory below provides an overview of the current team,
                with individual profiles offering deeper information where
                available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENT DIRECTORY */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
              Team Directory
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Explore the team by area of work.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Departments provide clear capability areas while keeping the
              broader Nexus Hub organization connected.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {departments.map((department, index) => (
              <section
                key={department.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="border-b border-slate-200 bg-[#050A30] p-8 text-white lg:p-10">
                  <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
                    <div className="max-w-2xl">
                      <span className="text-sm font-bold text-[#5FC9E6]">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <h3 className="mt-3 text-3xl font-black">
                        {department.title}
                      </h3>

                      <p className="mt-4 leading-7 text-white/65">
                        {department.description}
                      </p>
                    </div>

                    <div className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                      <span className="block text-xs font-bold uppercase tracking-[0.15em] text-[#5FC9E6]">
                        Team
                      </span>

                      <span className="mt-1 block text-2xl font-black">
                        {department.members.length}
                      </span>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {department.areas.map((area) => (
                      <span
                        key={area}
                        className="rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white/70"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 lg:p-10">
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {department.members.map((member) => (
                      <Link
                        key={member.slug}
                        href={`/about/team/${member.slug}`}
                        className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-[#1266B6]/35 hover:shadow-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#050A30] text-sm font-black text-[#5FC9E6]">
                            {member.initials}
                          </div>

                          <div className="min-w-0">
                            <h4 className="font-black leading-6 transition group-hover:text-[#1266B6]">
                              {member.name}
                            </h4>

                            <p className="mt-1 text-sm leading-5 text-slate-500">
                              {member.role}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 border-t border-slate-100 pt-4">
                          <span className="text-sm font-bold text-[#1266B6] transition group-hover:translate-x-1">
                            View Profile →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* HOW THE TEAM WORKS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                How the Team Works
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Different departments. Shared direction.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The organizational structure gives people a clear area of
                responsibility without creating unnecessary boundaries.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {teamPrinciples.map((principle) => (
                <article
                  key={principle.number}
                  className="rounded-2xl border border-slate-200 p-7"
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
        </div>
      </section>

      {/* CROSS-DEPARTMENT COLLABORATION */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl bg-[#050A30] p-8 text-white lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5FC9E6]">
                  Collaboration Across the Ecosystem
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Some opportunities require more than one capability.
                </h2>
              </div>

              <div className="space-y-5 text-lg leading-8 text-white/65">
                <p>
                  A digital project may need business strategy. A media
                  initiative may need technology. A partnership may bring
                  together creative, business, technical, and operational
                  capabilities.
                </p>

                <p>
                  The team structure gives people a clear home while allowing
                  the wider organization to work across departmental boundaries
                  when the opportunity calls for it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFILE SYSTEM */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                Team Profiles
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Go beyond the directory.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Individual profiles provide more room to understand a
                team member&apos;s role, experience, responsibilities,
                expertise, and contribution.
              </p>

              <Link
                href="/about/leadership"
                className="mt-7 inline-flex rounded-md bg-[#050A30] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0B1B3A]"
              >
                Meet Leadership
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Biography',
                'Education',
                'Professional Experience',
                'Responsibilities',
                'Areas of Expertise',
                'Projects & Contributions',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <p className="font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                Growing the Team
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                The ecosystem can grow with new people and new capabilities.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                As Nexus Hub develops new products, services, platforms,
                media initiatives, and opportunities, the organization can
                continue creating room for new talent.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#1266B6]">
                Opportunities
              </p>

              <h3 className="mt-4 text-2xl font-black">
                Explore careers at Nexus Hub.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Learn about the culture, opportunities, and ways to contribute
                to the growing ecosystem.
              </p>

              <Link
                href="/about/careers"
                className="mt-7 inline-flex rounded-md border border-[#1266B6] px-5 py-3 text-sm font-bold text-[#1266B6] transition hover:bg-[#1266B6] hover:text-white"
              >
                Explore Careers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5FC9E6]">
            The People Behind Nexus Hub
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            Great work starts with people working together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore the team, learn more about the people behind the work,
            or discover opportunities to become part of the ecosystem.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/about/leadership"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-bold text-[#050A30] transition hover:opacity-90"
            >
              Meet Leadership
            </Link>

            <Link
              href="/about/careers"
              className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Careers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
