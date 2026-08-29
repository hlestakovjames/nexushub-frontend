import Link from 'next/link';
import { notFound } from 'next/navigation';

type TeamMember = {
  slug: string;
  name: string;
  role: string;
  department: string;
  initials: string;
  intro: string;
  biography: string[];
  education: string[];
  experience: {
    title: string;
    description: string;
  }[];
  responsibilities: string[];
  expertise: string[];
};

const teamMembers: TeamMember[] = [
  {
    slug: 'hlestakov-james',
    name: 'Hlestakov James',
    role: 'Chief Executive Officer',
    department: 'Digital',
    initials: 'HJ',
    intro:
      'Hlestakov James provides overall strategic direction for Nexus Hub while contributing to the development of its digital ecosystem.',
    biography: [
      'Hlestakov James is an entrepreneur and technology-focused professional interested in building practical digital products, platforms, and organizations.',
      'As Chief Executive Officer, he provides overall direction for Nexus Hub and helps connect its people, capabilities, opportunities, and strategic priorities.',
      'Within the Digital team context, his work is closely connected to product direction, digital innovation, ecosystem development, and the broader relationship between business and technology.',
    ],
    education: [
      'Bachelor of Science in Information and Communication Technology',
      'Professional development in software development, digital systems, entrepreneurship, and technology leadership',
    ],
    experience: [
      {
        title: 'Digital Product Development',
        description:
          'Experience developing and shaping websites, software systems, digital platforms, and technology-driven projects.',
      },
      {
        title: 'Entrepreneurship',
        description:
          'Experience turning ideas into practical projects, products, and organizational initiatives.',
      },
      {
        title: 'Organizational Leadership',
        description:
          'Experience involving strategic planning, coordination, partnerships, and organizational development.',
      },
    ],
    responsibilities: [
      'Overall organizational direction',
      'Digital product and ecosystem direction',
      'Strategic planning and growth',
      'Major partnerships and relationships',
      'Innovation and new initiatives',
    ],
    expertise: [
      'Digital innovation',
      'Technology',
      'Entrepreneurship',
      'Product development',
      'Strategic planning',
      'Ecosystem development',
    ],
  },
  {
    slug: 'raphael-ayoma',
    name: 'Raphael Ayoma',
    role: 'Chief Technology Officer',
    department: 'Digital',
    initials: 'RA',
    intro:
      'Raphael Ayoma leads the technology direction of Nexus Hub and contributes to the development of its digital systems and platforms.',
    biography: [
      'Raphael Ayoma is a technology-focused professional with interests in software engineering, digital systems, and technical product development.',
      'As Chief Technology Officer, he helps guide the technical direction of Nexus Hub and works across the digital ecosystem to support reliable and scalable technology.',
      'His responsibilities connect engineering decisions with product objectives, ensuring that technology remains useful, maintainable, and aligned with organizational needs.',
    ],
    education: [
      'Background in computing, information technology, software engineering, or a related technical discipline',
      'Professional development in modern software engineering, systems architecture, and digital technologies',
    ],
    experience: [
      {
        title: 'Software Engineering',
        description:
          'Experience contributing to software applications, backend systems, digital products, and technical projects.',
      },
      {
        title: 'Technical Leadership',
        description:
          'Experience supporting technical decisions, engineering practices, architecture, and development coordination.',
      },
      {
        title: 'Digital Systems',
        description:
          'Experience working with connected applications, platforms, APIs, and technology infrastructure.',
      },
    ],
    responsibilities: [
      'Technology strategy and direction',
      'Software architecture and engineering',
      'Technical standards and development practices',
      'Digital platform development',
      'Technical team coordination',
      'Technology evaluation',
    ],
    expertise: [
      'Software engineering',
      'Systems architecture',
      'Digital platforms',
      'APIs and integrations',
      'Technical leadership',
      'Product development',
    ],
  },
  {
    slug: 'brian-ochieng',
    name: 'Brian Ochieng',
    role: 'Senior Software Engineer',
    department: 'Digital',
    initials: 'BO',
    intro:
      'Brian Ochieng contributes to the engineering of software products and digital systems across Nexus Hub.',
    biography: [
      'Brian Ochieng is a software engineering professional focused on building reliable applications and digital products.',
      'As a Senior Software Engineer, he contributes to the implementation of technical solutions and helps translate product requirements into maintainable software.',
      'His work supports the engineering side of the Nexus Hub Digital ecosystem and contributes to the development of scalable technology.',
    ],
    education: [
      'Degree or professional training in Software Engineering, Computer Science, Information Technology, or a related discipline',
      'Continuing professional development in modern software engineering practices',
    ],
    experience: [
      {
        title: 'Application Development',
        description:
          'Experience building and maintaining software applications for organizational and digital use cases.',
      },
      {
        title: 'Backend & API Development',
        description:
          'Experience working with application services, APIs, databases, and connected systems.',
      },
      {
        title: 'Engineering Collaboration',
        description:
          'Experience working with product, design, and technical teams during software development.',
      },
    ],
    responsibilities: [
      'Software development',
      'Application architecture',
      'API development',
      'Code quality and testing',
      'Technical collaboration',
    ],
    expertise: [
      'Software development',
      'Backend systems',
      'APIs',
      'Databases',
      'Testing',
      'Engineering practices',
    ],
  },
  {
    slug: 'sheila-akinyi',
    name: 'Sheila Akinyi',
    role: 'UI/UX & Product Designer',
    department: 'Digital',
    initials: 'SA',
    intro:
      'Sheila Akinyi helps shape intuitive digital experiences by connecting user needs, product goals, and visual design.',
    biography: [
      'Sheila Akinyi is a product and user experience designer interested in making digital products clearer, easier to use, and more engaging.',
      'Her work involves understanding user needs, shaping product experiences, and developing interfaces that support both usability and organizational objectives.',
      'Within the Nexus Hub Digital team, she contributes to the experience and product design layer of digital projects.',
    ],
    education: [
      'Background in design, user experience, product design, digital media, or a related discipline',
      'Professional development in interaction design, design systems, and digital product development',
    ],
    experience: [
      {
        title: 'Product Design',
        description:
          'Experience translating product requirements into clear user journeys and interface experiences.',
      },
      {
        title: 'User Experience',
        description:
          'Experience researching, structuring, and improving digital experiences around user needs.',
      },
      {
        title: 'Design Systems',
        description:
          'Experience creating consistent visual and interaction patterns across digital products.',
      },
    ],
    responsibilities: [
      'User experience design',
      'Interface design',
      'Product design',
      'Design systems',
      'User journey development',
    ],
    expertise: [
      'UI/UX design',
      'Product design',
      'Interaction design',
      'Design systems',
      'User research',
    ],
  },
  {
    slug: 'daniel-otieno',
    name: 'Daniel Otieno',
    role: 'Media Producer',
    department: 'Media',
    initials: 'DO',
    intro:
      'Daniel Otieno contributes to the planning, production, and development of media content across the Nexus Hub ecosystem.',
    biography: [
      'Daniel Otieno is a media professional focused on content production, storytelling, and the development of engaging media experiences.',
      'As a Media Producer, he works across production activities and contributes to turning ideas into structured media content.',
      'His role supports the broader Nexus Hub Media direction through planning, production, and coordination.',
    ],
    education: [
      'Background in media production, journalism, communications, film, or a related discipline',
      'Professional development in digital content production and storytelling',
    ],
    experience: [
      {
        title: 'Media Production',
        description:
          'Experience supporting the development and production of multimedia content.',
      },
      {
        title: 'Story Development',
        description:
          'Experience shaping stories and content ideas for different audiences and channels.',
      },
      {
        title: 'Production Coordination',
        description:
          'Experience coordinating people, materials, timelines, and production requirements.',
      },
    ],
    responsibilities: [
      'Media production',
      'Content planning',
      'Production coordination',
      'Story development',
    ],
    expertise: [
      'Media production',
      'Storytelling',
      'Content development',
      'Production coordination',
    ],
  },
  {
    slug: 'faith-wanjiku',
    name: 'Faith Wanjiku',
    role: 'Content & Editorial Lead',
    department: 'Media',
    initials: 'FW',
    intro:
      'Faith Wanjiku helps shape editorial direction, content quality, and storytelling across Nexus Hub media initiatives.',
    biography: [
      'Faith Wanjiku is a content and editorial professional interested in storytelling, communication, and audience-focused media.',
      'She contributes to editorial planning, content development, and maintaining consistency across media initiatives.',
      'Her role helps ensure that stories are clear, relevant, and aligned with the intended audience and purpose.',
    ],
    education: [
      'Background in journalism, communications, media, English, or a related discipline',
      'Professional development in digital publishing and editorial management',
    ],
    experience: [
      {
        title: 'Editorial Planning',
        description:
          'Experience planning and organizing content around audiences, themes, and publishing objectives.',
      },
      {
        title: 'Content Development',
        description:
          'Experience developing, reviewing, and refining written and multimedia content.',
      },
      {
        title: 'Audience Communication',
        description:
          'Experience shaping content for different audiences and digital channels.',
      },
    ],
    responsibilities: [
      'Editorial direction',
      'Content planning',
      'Content review',
      'Publishing coordination',
    ],
    expertise: [
      'Editorial',
      'Content strategy',
      'Writing',
      'Storytelling',
      'Digital publishing',
    ],
  },
  {
    slug: 'kevin-mwangi',
    name: 'Kevin Mwangi',
    role: 'Video & Creative Producer',
    department: 'Media',
    initials: 'KM',
    intro:
      'Kevin Mwangi contributes to video production and creative development across Nexus Hub media projects.',
    biography: [
      'Kevin Mwangi is a creative media professional focused on visual storytelling, video production, and audience-facing creative work.',
      'His role supports the development of productions and creative assets across Nexus Hub Media.',
      'He works with content and production teams to translate ideas into engaging visual experiences.',
    ],
    education: [
      'Background in film, media production, visual communication, or a related field',
      'Professional development in video production and digital creative tools',
    ],
    experience: [
      {
        title: 'Video Production',
        description:
          'Experience contributing to filming, editing, production planning, and delivery of video content.',
      },
      {
        title: 'Creative Development',
        description:
          'Experience helping develop visual concepts and creative treatments for media projects.',
      },
      {
        title: 'Post-Production',
        description:
          'Experience supporting editing, motion, sound, and final content preparation.',
      },
    ],
    responsibilities: [
      'Video production',
      'Creative development',
      'Editing and post-production',
      'Visual content creation',
    ],
    expertise: [
      'Video production',
      'Editing',
      'Creative direction',
      'Visual storytelling',
    ],
  },
  {
    slug: 'mary-atieno',
    name: 'Mary Atieno',
    role: 'Business Strategy Associate',
    department: 'Business',
    initials: 'MA',
    intro:
      'Mary Atieno supports strategic analysis and planning across Nexus Hub Business initiatives.',
    biography: [
      'Mary Atieno is a business-focused professional interested in strategy, organizational development, and practical business planning.',
      'As a Business Strategy Associate, she contributes to research, analysis, planning, and the development of recommendations for business initiatives.',
      'Her work connects structured business thinking with practical implementation.',
    ],
    education: [
      'Background in business, economics, strategy, management, or a related discipline',
      'Professional development in strategic planning and business analysis',
    ],
    experience: [
      {
        title: 'Business Analysis',
        description:
          'Experience researching opportunities, analyzing business information, and supporting decision-making.',
      },
      {
        title: 'Strategic Planning',
        description:
          'Experience contributing to business plans, priorities, and growth initiatives.',
      },
      {
        title: 'Organizational Support',
        description:
          'Experience supporting business initiatives and cross-functional projects.',
      },
    ],
    responsibilities: [
      'Business analysis',
      'Strategic planning support',
      'Opportunity research',
      'Business reporting',
    ],
    expertise: [
      'Business strategy',
      'Business analysis',
      'Research',
      'Planning',
    ],
  },
  {
    slug: 'collins-kamau',
    name: 'Collins Kamau',
    role: 'Business Development Lead',
    department: 'Business',
    initials: 'CK',
    intro:
      'Collins Kamau supports growth opportunities, client relationships, and business development across Nexus Hub.',
    biography: [
      'Collins Kamau is a business development professional focused on identifying opportunities and building relationships that support organizational growth.',
      'He works across potential clients, opportunities, initiatives, and partnerships to help Nexus Hub expand its reach.',
      'His role connects market opportunities with the capabilities of the wider Nexus Hub ecosystem.',
    ],
    education: [
      'Background in business development, marketing, management, sales, or a related discipline',
      'Professional development in relationship management and growth strategy',
    ],
    experience: [
      {
        title: 'Business Development',
        description:
          'Experience identifying prospects, opportunities, and pathways for organizational growth.',
      },
      {
        title: 'Client Relationships',
        description:
          'Experience developing and maintaining relationships with clients and stakeholders.',
      },
      {
        title: 'Opportunity Management',
        description:
          'Experience coordinating opportunities from early engagement through development.',
      },
    ],
    responsibilities: [
      'Business development',
      'Client relationships',
      'Opportunity management',
      'Growth initiatives',
    ],
    expertise: [
      'Business development',
      'Relationship management',
      'Sales',
      'Growth strategy',
    ],
  },
  {
    slug: 'ruth-njeri',
    name: 'Ruth Njeri',
    role: 'Partnerships Coordinator',
    department: 'Business',
    initials: 'RN',
    intro:
      'Ruth Njeri supports the development and coordination of collaborative relationships across the Nexus Hub ecosystem.',
    biography: [
      'Ruth Njeri is a partnerships-focused professional interested in relationship building, collaboration, and organizational opportunities.',
      'She supports partnership discussions, coordination, follow-up, and the practical development of collaborative initiatives.',
      'Her role helps connect organizations and people with opportunities that can create shared value.',
    ],
    education: [
      'Background in business, communications, public relations, partnerships, or a related discipline',
      'Professional development in stakeholder and relationship management',
    ],
    experience: [
      {
        title: 'Partnership Coordination',
        description:
          'Experience supporting collaborative initiatives and coordinating partner relationships.',
      },
      {
        title: 'Stakeholder Engagement',
        description:
          'Experience communicating with organizations, teams, and other stakeholders.',
      },
      {
        title: 'Project Support',
        description:
          'Experience supporting initiatives involving multiple contributors or organizations.',
      },
    ],
    responsibilities: [
      'Partnership coordination',
      'Stakeholder communication',
      'Relationship management',
      'Collaboration support',
    ],
    expertise: [
      'Partnerships',
      'Stakeholder engagement',
      'Communication',
      'Project coordination',
    ],
  },
  {
    slug: 'ann-wambui',
    name: 'Ann Wambui',
    role: 'Operations Coordinator',
    department: 'Operations',
    initials: 'AW',
    intro:
      'Ann Wambui supports day-to-day coordination, organizational processes, and operational activities across Nexus Hub.',
    biography: [
      'Ann Wambui is an operations-focused professional interested in organization, coordination, administration, and efficient business processes.',
      'Her role helps coordinate activities across departments and provides practical support for the smooth operation of the wider ecosystem.',
      'She contributes to maintaining clear processes, communication, and organizational coordination.',
    ],
    education: [
      'Background in business administration, operations, management, or a related discipline',
      'Professional development in organizational operations and coordination',
    ],
    experience: [
      {
        title: 'Operations Coordination',
        description:
          'Experience coordinating activities, schedules, resources, and organizational processes.',
      },
      {
        title: 'Administrative Support',
        description:
          'Experience supporting teams with documentation, communication, and administrative processes.',
      },
      {
        title: 'Cross-Team Coordination',
        description:
          'Experience working across teams to keep activities organized and moving forward.',
      },
    ],
    responsibilities: [
      'Operations coordination',
      'Administrative support',
      'Team coordination',
      'Process support',
    ],
    expertise: [
      'Operations',
      'Administration',
      'Coordination',
      'Organizational support',
    ],
  },
  {
    slug: 'david-onyango',
    name: 'David Onyango',
    role: 'Administration & Support Officer',
    department: 'Operations',
    initials: 'DO',
    intro:
      'David Onyango supports administrative activities, organizational coordination, and day-to-day operational requirements.',
    biography: [
      'David Onyango is an administration and organizational support professional focused on helping teams operate effectively.',
      'His responsibilities include practical administrative support, documentation, coordination, and assistance with day-to-day organizational needs.',
      'His role contributes to the operational foundation that allows other Nexus Hub teams to focus on their work.',
    ],
    education: [
      'Background in administration, business support, management, or a related discipline',
      'Professional development in office administration and organizational support',
    ],
    experience: [
      {
        title: 'Administration',
        description:
          'Experience supporting records, documentation, communication, and office processes.',
      },
      {
        title: 'Operational Support',
        description:
          'Experience assisting teams with day-to-day organizational requirements.',
      },
      {
        title: 'Coordination',
        description:
          'Experience coordinating routine activities and supporting internal communication.',
      },
    ],
    responsibilities: [
      'Administrative support',
      'Documentation',
      'Internal coordination',
      'Operational assistance',
    ],
    expertise: [
      'Administration',
      'Documentation',
      'Coordination',
      'Organizational support',
    ],
  },
];

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const member = teamMembers.find(
    (item) => item.slug === slug,
  );

  if (!member) {
    notFound();
  }

  const relatedMembers = teamMembers.filter(
    (item) =>
      item.slug !== member.slug &&
      item.department === member.department,
  );

  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href="/about/team"
            className="text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
          >
            ← Our Team
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="flex h-52 w-52 items-center justify-center rounded-full border border-white/10 bg-white/10 text-5xl font-bold text-[#5FC9E6] sm:h-60 sm:w-60">
                {member.initials}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                {member.department} · Team Profile
              </p>

              <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
                {member.name}
              </h1>

              <p className="mt-4 text-xl font-medium text-white/65">
                {member.role}
              </p>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
                {member.intro}
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
              About {member.name}
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
              {member.biography.map((paragraph) => (
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
            <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Experience
              </p>

              <div className="mt-8 space-y-7">
                {member.experience.map((item) => (
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

            <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Education
              </p>

              <ul className="mt-8 space-y-5">
                {member.education.map((item) => (
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
                Responsibilities
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Contribution within {member.department}.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This profile describes the areas of work associated with
                the current role.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {member.responsibilities.map((responsibility) => (
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

      {/* EXPERTISE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Areas of Expertise
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Professional focus.
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {member.expertise.map((item) => (
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

      {/* RELATED TEAM MEMBERS */}
      {relatedMembers.length > 0 && (
        <section>
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  {member.department} Team
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Meet other team members in this department.
                </h2>
              </div>

              <Link
                href="/about/team"
                className="text-sm font-semibold text-[#1266B6]"
              >
                View All Teams →
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedMembers.slice(0, 3).map((person) => (
                <Link
                  key={person.slug}
                  href={`/about/team/${person.slug}`}
                  className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#050A30] text-sm font-bold text-[#5FC9E6]">
                      {person.initials}
                    </div>

                    <div>
                      <h3 className="font-bold group-hover:text-[#1266B6]">
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

      {/* RELATED ORGANIZATION */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about/leadership"
              className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:border-[#1266B6] hover:text-[#1266B6]"
            >
              Leadership
            </Link>

            <Link
              href="/about/careers"
              className="rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0B1B3A]"
            >
              Careers
            </Link>

            <Link
              href="/about"
              className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:border-[#1266B6] hover:text-[#1266B6]"
            >
              About Nexus Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}