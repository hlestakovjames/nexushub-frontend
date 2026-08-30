import Link from 'next/link';

const directions = [
  {
    number: '01',
    title: 'Media',
    description:
      'We tell stories, create conversations, and develop original media experiences that connect audiences with ideas and people.',
    href: '/media',
    linkLabel: 'Explore Media →',
  },
  {
    number: '02',
    title: 'Digital',
    description:
      'We build websites, software, platforms, and digital experiences that solve practical problems.',
    href: '/digital',
    linkLabel: 'Explore Digital →',
  },
  {
    number: '03',
    title: 'Business',
    description:
      'We provide services, solutions, and partnerships designed to help organizations and businesses move forward.',
    href: '/business',
    linkLabel: 'Explore Business →',
  },
];

const aboutLinks = [
  {
    title: 'Our Story',
    description:
      'Discover how Nexus Hub came to be, what shaped the organization, and where the journey is heading.',
    href: '/about/our-story',
  },
  {
    title: 'Mission & Vision',
    description:
      'Understand the purpose behind Nexus Hub and the future we are working toward.',
    href: '/about/mission-vision',
  },
  {
    title: 'Our Approach',
    description:
      'Learn how we think, build, collaborate, and turn ideas into meaningful possibilities.',
    href: '/about/approach',
  },
];

const peopleLinks = [
  {
    title: 'Leadership',
    description:
      'Meet the people providing direction, leadership, and strategic guidance across Nexus Hub.',
    href: '/about/leadership',
  },
  {
    title: 'Our Team',
    description:
      'Explore the people and capabilities behind Nexus Hub, organized across our different departments.',
    href: '/about/team',
  },
  {
    title: 'Careers',
    description:
      'Discover opportunities to work, grow, and contribute within the Nexus Hub ecosystem.',
    href: '/about/careers',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              About Nexus Hub
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Connecting ideas.
              <br />
              Building possibilities.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Nexus Hub is a connected ecosystem built around media,
              digital innovation, and business.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A hub for ideas, creativity, and innovation.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Nexus Hub brings together different areas of creativity
                and technology under one connected ecosystem.
              </p>

              <p>
                Through media, digital technology, and business, we create
                platforms, services, and experiences that connect people
                with ideas and opportunities.
              </p>

              <p>
                Our approach is simple: identify meaningful ideas, build
                practical solutions, and create lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE DIRECTIONS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              What Nexus Hub Represents
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Three directions. One connected ecosystem.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Media, Digital, and Business are distinct parts of Nexus Hub,
              but they can also work together around shared opportunities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {directions.map((direction) => (
              <article
                key={direction.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {direction.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {direction.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {direction.description}
                </p>

                <Link
                  href={direction.href}
                  className="mt-7 inline-block text-sm font-semibold text-[#1266B6] transition hover:translate-x-1"
                >
                  {direction.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STORY / MISSION / APPROACH */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Explore Nexus Hub
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Go deeper into who we are and how we work.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The overview gives you the big picture. These pages provide
              more detail about our history, purpose, and approach.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {aboutLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
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

      {/* VISION / MISSION PREVIEW */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Our Vision
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                A connected ecosystem where ideas can grow.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                We envision a future where creativity, technology, media,
                and business work together to create meaningful
                opportunities and lasting impact.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Our Mission
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Turn ideas into meaningful possibilities.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                We connect people, ideas, technology, and opportunities
                through practical digital solutions, compelling media,
                and valuable business services.
              </p>

              <Link
                href="/about/mission-vision"
                className="mt-7 inline-flex text-sm font-semibold text-[#1266B6]"
              >
                Explore Mission &amp; Vision →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PEOPLE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              The People Behind Nexus Hub
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Meet the people building the ecosystem.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Leadership, teams, and future opportunities each have their
              own space so the organization can grow without overcrowding
              the main navigation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {peopleLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
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

      {/* APPROACH PREVIEW */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Our Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Connect ideas. Build practically. Grow intentionally.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We believe useful work begins with understanding the
                problem, the people involved, and the opportunity ahead.
              </p>

              <Link
                href="/about/approach"
                className="mt-7 inline-flex text-sm font-semibold text-[#1266B6]"
              >
                Explore Our Approach →
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-7">
                <span className="text-sm font-semibold text-[#1266B6]">
                  01
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  Understand
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Start with people, context, goals, and the problem.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7">
                <span className="text-sm font-semibold text-[#1266B6]">
                  02
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  Build
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Turn ideas into useful products, services, and experiences.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7">
                <span className="text-sm font-semibold text-[#1266B6]">
                  03
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  Evolve
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Improve the work as people, needs, and opportunities change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Work With Nexus Hub
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have an idea worth building?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Let&apos;s connect ideas, technology, media, business, and
            opportunities to create something meaningful.
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