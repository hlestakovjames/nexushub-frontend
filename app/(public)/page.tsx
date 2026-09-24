import Link from 'next/link';

import HeroSlider from '@/components/hero/HeroSlider';
import { projectRecords } from '@/components/projects/project-data';

export default function HomePage() {
  const heroSlides = [
    {
      eyebrow: 'Nexus Hub',
      title: (
        <>
          Connecting Ideas
          <br />
          Through Digital Innovation.
        </>
      ),
      description:
        'Nexus Hub brings together digital technology, media, and business to create ideas, platforms, and opportunities that connect people and organisations.',
      image: '/images/hero/hero-digital.jpeg',
      primaryAction: {
        label: 'Explore Nexus Hub',
        href: '/about',
      },
      secondaryAction: {
        label: 'Work With Us',
        href: '/contact',
      },
    },
    {
      eyebrow: 'Digital',
      title: (
        <>
          Technology Built
          <br />
          Around Real Needs.
        </>
      ),
      description:
        'We design and develop websites, software, digital platforms, mobile experiences, and connected systems that help organisations work, serve, and grow.',
      image: '/images/digital/Futuristic Holographic Network Workspace.png',
      primaryAction: {
        label: 'Explore Digital',
        href: '/digital',
      },
      secondaryAction: {
        label: 'View Digital Services',
        href: '/digital/services',
      },
    },
    {
      eyebrow: 'Business',
      title: (
        <>
          Turning Challenges
          <br />
          Into Possibilities.
        </>
      ),
      description:
        'Through consulting, strategy, business solutions, creative services, and partnerships, we help organisations move from ideas and challenges toward practical action.',
      image: '/images/business/Collaborative Team Dashboard Presentation.png',
      primaryAction: {
        label: 'Explore Business',
        href: '/business',
      },
      secondaryAction: {
        label: 'Our Partnerships',
        href: '/business/partnerships',
      },
    },
    {
      eyebrow: 'Media',
      title: (
        <>
          Stories.
          <br />
          Voices. Experiences.
        </>
      ),
      description:
        'Nexus Hub creates media experiences that inform, connect, and give people and communities space to share stories, ideas, perspectives, and culture.',
      image: '/images/media/Creative Branding Studio Setup.png',
      primaryAction: {
        label: 'Explore Media',
        href: '/media',
      },
      secondaryAction: {
        label: 'Nexus Hub TV',
        href: '/media/nexus-hub-tv',
      },
    },
    {
      eyebrow: 'Projects & Platforms',
      title: (
        <>
          Building What&apos;s
          <br />
          Next.
        </>
      ),
      description:
        'From digital platforms and organisational systems to connected initiatives, Nexus Hub turns ideas into practical products, projects, and experiences.',
      image: '/images/platforms/Digital Ecosystem Workspace.png',
      primaryAction: {
        label: 'Explore Projects',
        href: '/projects',
      },
      secondaryAction: {
        label: 'Explore Platforms',
        href: '/platforms',
      },
    },
    {
      eyebrow: 'Connect • Create • Grow',
      title: (
        <>
          Let&apos;s Build
          <br />
          Something Meaningful.
        </>
      ),
      description:
        'Whether you need a digital solution, business support, media collaboration, or a partner for a new initiative, Nexus Hub is built to connect ideas with action.',
      image: '/images/hero/hero-team.jpeg',
      primaryAction: {
        label: 'Work With Us',
        href: '/contact',
      },
      secondaryAction: {
        label: 'Explore Nexus Hub',
        href: '/about',
      },
    },
  ];

  const featuredProjects = projectRecords.slice(0, 2);

  return (
    <main>
      {/* HERO */}
      <HeroSlider
        slides={heroSlides}
        height="screen"
      />

      {/* BRIEF ABOUT */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                About Nexus Hub
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                A hub for digital innovation, media, and business.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-600">
                Nexus Hub is a connected ecosystem that brings
                technology, creativity, media, and business together.
                We develop digital solutions, create media and
                knowledge, support organisations, and build initiatives
                that connect ideas with real-world opportunities.
              </p>

              <Link
                href="/about"
                className="mt-7 inline-flex items-center text-sm font-semibold text-[#1266B6] transition hover:translate-x-1"
              >
                Learn more about Nexus Hub →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Three connected directions.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our work spans three core directions, each with its
              own focus while remaining connected through the wider
              Nexus Hub ecosystem.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/digital"
              className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-sm font-semibold text-[#1266B6]">
                01
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Digital
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Websites, software, platforms, ICT solutions,
                and digital transformation built around real
                organisational needs.
              </p>

              <span className="mt-7 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Digital →
              </span>
            </Link>

            <Link
              href="/media"
              className="group rounded-2xl bg-[#050A30] p-8 text-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-sm font-semibold text-[#5FC9E6]">
                02
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Media
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Stories, conversations, football, voices,
                original programming, and media experiences
                designed to inform and connect.
              </p>

              <span className="mt-7 inline-block text-sm font-semibold text-[#5FC9E6] transition group-hover:translate-x-1">
                Explore Media →
              </span>
            </Link>

            <Link
              href="/business"
              className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-sm font-semibold text-[#1266B6]">
                03
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Business
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Services, solutions, consulting, and partnerships
                that help organisations develop, connect, and grow.
              </p>

              <span className="mt-7 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Business →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Our Ecosystem
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Different ideas. One connected ecosystem.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Nexus Hub connects its digital, media, business,
                project, and community work so that ideas can move
                beyond individual disciplines and create broader
                opportunities.
              </p>

              <Link
                href="/about"
                className="mt-7 inline-flex rounded-md bg-[#050A30] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0B1B3A]"
              >
                Explore the Ecosystem
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/media/nexus-hub-tv"
                className="rounded-2xl bg-[#050A30] p-7 text-white transition hover:-translate-y-1"
              >
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  Media
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Nexus Hub TV
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  Original programming, stories, conversations,
                  and media experiences.
                </p>
              </Link>

              <Link
                href="/projects"
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-[#1266B6]">
                  Initiatives
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Projects
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Practical projects bringing Nexus Hub ideas
                  into real-world applications.
                </p>
              </Link>

              <Link
                href="/platforms"
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-[#1266B6]">
                  Technology
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Platforms
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Digital products and platforms designed to
                  connect people, services, and opportunities.
                </p>
              </Link>

              <Link
                href="/business/partnerships"
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-[#1266B6]">
                  Collaboration
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Partnerships
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Working with organisations, businesses, and
                  people to turn opportunities into action.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE ARE BUILDING */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                What We&apos;re Building
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Ideas becoming real projects.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Explore selected projects through which Nexus Hub
                applies technology, creativity, and connected thinking
                to real organisations and communities.
              </p>
            </div>

            <Link
              href="/projects"
              className="shrink-0 text-sm font-semibold text-[#1266B6] transition hover:translate-x-1"
            >
              View all projects →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-sm font-semibold text-[#1266B6]">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {project.status}
                  </span>
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {project.category} · {project.area}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.summary}
                </p>

                <span className="mt-7 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  View project →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Platforms
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Digital spaces built to connect people and possibilities.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/65">
                Nexus Hub develops and connects digital platforms
                that support organisations, services, communities,
                communication, and new opportunities.
              </p>
            </div>

            <Link
              href="/platforms"
              className="inline-flex w-fit rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Explore Platforms
            </Link>
          </div>
        </div>
      </section>

      {/* MEDIA & KNOWLEDGE */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Media & Knowledge
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Stories, ideas, information, and conversations.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore the content side of Nexus Hub through our
              media network, editorial work, news, and resources.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/media"
              className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                Media
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Watch & Listen
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Explore our media network and original content.
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-[#1266B6] group-hover:translate-x-1">
                Explore →
              </span>
            </Link>

            <Link
              href="/blog"
              className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                Blog
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Ideas & Insights
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Read insights, analysis, stories, features, and
                conversations.
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-[#1266B6] group-hover:translate-x-1">
                Visit Blog →
              </span>
            </Link>

            <Link
              href="/news"
              className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                News
              </p>

              <h3 className="mt-3 text-xl font-bold">
                What&apos;s Happening
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Follow Nexus Hub news, announcements, and updates.
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-[#1266B6] group-hover:translate-x-1">
                Read News →
              </span>
            </Link>

            <Link
              href="/resources"
              className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                Resources
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Learn & Access
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Access guides, documents, downloads, and useful
                knowledge.
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-[#1266B6] group-hover:translate-x-1">
                Explore Resources →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* EVENTS & ACTIVITIES */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Events & Activities
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Where ideas, people, and opportunities meet.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Discover events and activities connected to Nexus Hub,
                its work, its communities, and its wider ecosystem.
              </p>
            </div>

            <Link
              href="/events-activities"
              className="inline-flex w-fit rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0B1B3A]"
            >
              Explore Events & Activities
            </Link>
          </div>
        </div>
      </section>

      {/* WHY NEXUS HUB */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Why Nexus Hub
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                More than a service provider.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                We bring different capabilities together so that
                organisations can approach technology, media,
                communication, and growth from a connected perspective.
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              <div>
                <span className="text-sm font-semibold text-[#1266B6]">
                  01
                </span>

                <h3 className="mt-2 text-lg font-bold">
                  Connected Thinking
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Digital, media, and business capabilities can
                  work together around a shared objective.
                </p>
              </div>

              <div>
                <span className="text-sm font-semibold text-[#1266B6]">
                  02
                </span>

                <h3 className="mt-2 text-lg font-bold">
                  Practical Technology
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We focus on building useful digital experiences
                  and systems around real-world needs.
                </p>
              </div>

              <div>
                <span className="text-sm font-semibold text-[#1266B6]">
                  03
                </span>

                <h3 className="mt-2 text-lg font-bold">
                  Creative Possibilities
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Ideas can move across technology, media,
                  business, and community initiatives.
                </p>
              </div>

              <div>
                <span className="text-sm font-semibold text-[#1266B6]">
                  04
                </span>

                <h3 className="mt-2 text-lg font-bold">
                  Long-Term Connections
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We create opportunities for collaboration,
                  partnerships, and continued development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGE */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Engage With Us
            </p>

            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              Have an idea, project, organisation, or opportunity?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Choose the path that best matches what you want to
              build, improve, explore, or collaborate on.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Link
              href="/digital/services"
              className="group rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-bold">
                Digital Services
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Need a website, software, platform, or digital
                solution?
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-[#1266B6] group-hover:translate-x-1">
                Explore Services →
              </span>
            </Link>

            <Link
              href="/business/partnerships"
              className="group rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-bold">
                Partnerships
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Looking for collaboration, a strategic partner,
                or a shared opportunity?
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-[#1266B6] group-hover:translate-x-1">
                Explore Partnerships →
              </span>
            </Link>

            <Link
              href="/contact"
              className="group rounded-2xl bg-[#050A30] p-7 text-center text-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                Contact Nexus Hub
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                Have something else in mind? Start a conversation
                with us.
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-[#5FC9E6] group-hover:translate-x-1">
                Get in Touch →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Create • Connect • Grow
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build what comes next.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Whether you are looking to build a digital solution,
            explore a partnership, develop an idea, or connect with
            our ecosystem, Nexus Hub is open to the conversation.
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
