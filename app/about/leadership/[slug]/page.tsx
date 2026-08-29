import Link from 'next/link';
import { notFound } from 'next/navigation';

type LeadershipProfile = {
  slug: string;
  name: string;
  role: string;
  initials: string;
  intro: string;
  biography: string[];
  education: string[];
  experience: {
    title: string;
    description: string;
  }[];
  responsibilities: string[];
  focus: string[];
};

const leadershipProfiles: LeadershipProfile[] = [
  {
    slug: 'hlestakov-james',
    name: 'Hlestakov James',
    role: 'Chief Executive Officer',
    initials: 'HJ',
    intro:
      'Hlestakov James provides overall strategic direction for Nexus Hub and leads the development of its wider ecosystem across digital innovation, media, and business.',
    biography: [
      'Hlestakov James is a technology and innovation-focused entrepreneur with an interest in building practical digital products, organizations, and platforms around real-world needs.',
      'As Chief Executive Officer of Nexus Hub, he is responsible for shaping the organization’s long-term direction and bringing together the people, ideas, capabilities, and partnerships required to grow the ecosystem.',
      'His approach combines technology, business thinking, creativity, and practical execution, with a focus on developing Nexus Hub into an ecosystem capable of creating products, services, media experiences, and opportunities.',
    ],
    education: [
      'Bachelor of Science in Information and Communication Technology',
      'Professional development in software development, digital systems, and technology leadership',
    ],
    experience: [
      {
        title: 'Technology & Digital Development',
        description:
          'Experience working with software development, digital platforms, systems, and technology-driven projects.',
      },
      {
        title: 'Entrepreneurship',
        description:
          'Experience developing ideas into practical projects, digital products, and organizational initiatives.',
      },
      {
        title: 'Organizational Leadership',
        description:
          'Leadership experience involving planning, coordination, team development, partnerships, and strategic decision-making.',
      },
    ],
    responsibilities: [
      'Overall organizational direction',
      'Strategic planning and growth',
      'Leadership and organizational development',
      'Major partnerships and relationships',
      'Nexus Hub ecosystem development',
      'Long-term product and business direction',
    ],
    focus: [
      'Digital innovation',
      'Entrepreneurship',
      'Technology',
      'Organizational growth',
      'Strategic partnerships',
      'Ecosystem development',
    ],
  },
  {
    slug: 'raphael-ayoma',
    name: 'Raphael Ayoma',
    role: 'Chief Technology Officer',
    initials: 'RA',
    intro:
      'Raphael Ayoma leads the technology direction of Nexus Hub, helping translate organizational opportunities into practical, reliable, and scalable digital systems.',
    biography: [
      'Raphael Ayoma is a technology-focused professional interested in software engineering, digital systems, and the development of practical technology solutions.',
      'As Chief Technology Officer, he contributes to the technical direction of Nexus Hub and helps guide the development of the systems and platforms that support the wider ecosystem.',
      'His role combines technical leadership with product thinking, ensuring that technology choices remain aligned with the organization’s objectives and the needs of the people using its digital products.',
    ],
    education: [
      'Background in computing, information technology, software engineering, or a related technical discipline',
      'Ongoing professional development in modern software engineering and digital technologies',
    ],
    experience: [
      {
        title: 'Software & Systems Development',
        description:
          'Experience contributing to software applications, digital systems, technical projects, and technology initiatives.',
      },
      {
        title: 'Technical Leadership',
        description:
          'Experience helping teams make technology decisions, structure technical work, and maintain development standards.',
      },
      {
        title: 'Digital Product Development',
        description:
          'Experience connecting technical implementation with user needs and broader product objectives.',
      },
    ],
    responsibilities: [
      'Technology strategy and direction',
      'Software architecture and engineering',
      'Technical standards and development practices',
      'Digital platform development',
      'Technology evaluation and implementation',
      'Technical team coordination',
    ],
    focus: [
      'Software engineering',
      'Digital platforms',
      'Systems architecture',
      'Technical innovation',
      'Product development',
      'Scalable technology',
    ],
  },
];

const relatedProfiles = leadershipProfiles;

export function generateStaticParams() {
  return leadershipProfiles.map((profile) => ({
    slug: profile.slug,
  }));
}

export default async function LeadershipProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const profile = leadershipProfiles.find(
    (item) => item.slug === slug,
  );

  if (!profile) {
    notFound();
  }

  const otherProfiles = relatedProfiles.filter(
    (item) => item.slug !== profile.slug,
  );

  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href="/about/leadership"
            className="text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
          >
            ← Leadership
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            {/* PROFILE IMAGE PLACEHOLDER */}
            <div className="flex justify-center lg:justify-start">
              <div className="flex h-56 w-56 items-center justify-center rounded-full border border-white/10 bg-white/10 text-5xl font-bold text-[#5FC9E6] sm:h-64 sm:w-64">
                {profile.initials}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Leadership Profile
              </p>

              <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
                {profile.name}
              </h1>

              <p className="mt-4 text-xl font-medium text-white/65">
                {profile.role}
              </p>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
                {profile.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BIOGRAPHY */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Biography
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              About {profile.name}
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
              {profile.biography.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE + EDUCATION */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* EXPERIENCE */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Experience
              </p>

              <div className="mt-8 space-y-7">
                {profile.experience.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* EDUCATION */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Education
              </p>

              <ul className="mt-8 space-y-5">
                {profile.education.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-[#5FC9E6] pl-5 leading-7 text-slate-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Role &amp; Responsibilities
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                What {profile.name} contributes to Nexus Hub.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This profile describes the areas of responsibility
                associated with the current leadership role.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {profile.responsibilities.map((responsibility) => (
                <div
                  key={responsibility}
                  className="rounded-2xl border border-slate-200 p-6"
                >
                  <p className="font-semibold">
                    {responsibility}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP FOCUS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Leadership Focus
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Areas of focus.
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {profile.focus.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED LEADERS */}
      {otherProfiles.length > 0 && (
        <section>
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  Leadership
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Explore other leadership profiles.
                </h2>
              </div>

              <Link
                href="/about/leadership"
                className="text-sm font-semibold text-[#1266B6]"
              >
                View All Leadership →
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {otherProfiles.map((person) => (
                <Link
                  key={person.slug}
                  href={`/about/leadership/${person.slug}`}
                  className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
                >
                  <div className="flex items-center gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#050A30] font-bold text-[#5FC9E6]">
                      {person.initials}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold group-hover:text-[#1266B6]">
                        {person.name}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {person.role}
                      </p>
                    </div>
                  </div>

                  <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                    View Profile →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Nexus Hub
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Building the ecosystem together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore the wider Nexus Hub ecosystem and the people,
            ideas, and capabilities behind it.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/about/leadership"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Leadership
            </Link>

            <Link
              href="/about/team"
              className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}