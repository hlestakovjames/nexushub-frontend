import Link from 'next/link';

const storyValues = [
  {
    number: '01',
    title: 'Ideas',
    description:
      'We believe meaningful work often begins with an idea, a question, a problem, or an opportunity worth exploring.',
  },
  {
    number: '02',
    title: 'Connection',
    description:
      'We bring people, capabilities, technology, media, and opportunities together where collaboration creates greater value.',
  },
  {
    number: '03',
    title: 'Creation',
    description:
      'We turn ideas into practical products, services, experiences, and initiatives that people can actually use.',
  },
  {
    number: '04',
    title: 'Growth',
    description:
      'We build with the understanding that organizations, products, and opportunities can continue evolving over time.',
  },
];

const directions = [
  {
    title: 'Media',
    description:
      'Stories, conversations, productions, and media experiences that connect people with ideas.',
    href: '/media',
  },
  {
    title: 'Digital',
    description:
      'Websites, software, platforms, and technology that turn practical needs into digital solutions.',
    href: '/digital',
  },
  {
    title: 'Business',
    description:
      'Services, solutions, strategy, and partnerships that help organizations create and pursue opportunities.',
    href: '/business',
  },
];

const milestones = [
  {
    number: '01',
    title: 'The Idea',
    description:
      'Nexus Hub begins with a simple belief: different capabilities can create greater value when they are connected around a common purpose.',
  },
  {
    number: '02',
    title: 'The Ecosystem',
    description:
      'Media, digital innovation, and business become distinct but connected directions within the wider Nexus Hub ecosystem.',
  },
  {
    number: '03',
    title: 'The Build',
    description:
      'The ecosystem grows through practical products, platforms, services, content, partnerships, and new initiatives.',
  },
  {
    number: '04',
    title: 'The Future',
    description:
      'Nexus Hub continues to evolve as new ideas, technologies, people, opportunities, and collaborations emerge.',
  },
];

export default function OurStoryPage() {
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
              Our Story
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              From an idea of connection to a growing ecosystem.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Nexus Hub was shaped around the belief that ideas become
              more powerful when people, capabilities, technology, and
              opportunities can connect.
            </p>
          </div>
        </div>
      </section>

      {/* BEGINNING */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Where It Begins
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Nexus Hub starts with connection.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                The idea behind Nexus Hub is not simply to operate as a
                collection of separate activities. It is to create an
                environment where different capabilities can reinforce
                one another.
              </p>

              <p>
                Media can create conversations. Digital technology can
                turn ideas into products and platforms. Business can
                create structures, services, and partnerships that help
                those ideas move forward.
              </p>

              <p>
                Together, these directions form the foundation of a
                connected ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A story that continues to develop.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nexus Hub is an evolving organization. Its story is shaped
              by the ideas we pursue, the people we work with, and the
              opportunities we create together.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone) => (
              <article
                key={milestone.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {milestone.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {milestone.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {milestone.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              What Shapes Us
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The principles behind the journey.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              As the organization grows, these ideas remain central to
              how we think about our work and our relationships.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {storyValues.map((value) => (
              <article
                key={value.number}
                className="rounded-2xl border border-slate-200 p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {value.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THREE DIRECTIONS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              How The Ecosystem Has Taken Shape
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Three directions. One story.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Each division has its own role while remaining connected
              to the wider Nexus Hub purpose.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {directions.map((direction) => (
              <Link
                key={direction.title}
                href={direction.href}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold">
                  {direction.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {direction.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore {direction.title} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LOOKING FORWARD */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Looking Forward
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The story is still being written.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Nexus Hub is designed to grow with new ideas, people,
                technologies, partnerships, and opportunities.
              </p>

              <p>
                As the ecosystem develops, the focus remains the same:
                connect ideas, build useful things, create meaningful
                opportunities, and grow with purpose.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/about/mission-vision"
                  className="rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0B1B3A]"
                >
                  Mission &amp; Vision
                </Link>

                <Link
                  href="/about/approach"
                  className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:border-[#1266B6] hover:text-[#1266B6]"
                >
                  Our Approach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Be Part of the Story
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have an idea, opportunity, or possibility worth exploring?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Nexus Hub continues to grow through people, ideas,
            collaborations, and meaningful work.
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