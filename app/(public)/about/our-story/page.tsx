import Link from 'next/link';

const storyPrinciples = [
  {
    number: '01',
    title: 'Ideas',
    description:
      'Meaningful work often begins with an idea, a question, a challenge, or an opportunity worth exploring.',
  },
  {
    number: '02',
    title: 'Connection',
    description:
      'We connect people, capabilities, technology, media, and opportunities where collaboration can create greater value.',
  },
  {
    number: '03',
    title: 'Creation',
    description:
      'We turn ideas into practical products, services, experiences, platforms, and initiatives that can create real value.',
  },
  {
    number: '04',
    title: 'Growth',
    description:
      'We build with the understanding that organizations, products, platforms, and opportunities should be able to evolve.',
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
    title: 'The Foundation',
    description:
      'The Nexus Hub identity develops around the connection of technology, creativity, media, business, and opportunity.',
  },
  {
    number: '03',
    title: 'The Ecosystem',
    description:
      'Media, digital innovation, and business become distinct but connected directions within the wider ecosystem.',
  },
  {
    number: '04',
    title: 'The Build',
    description:
      'The ecosystem continues to develop through practical products, platforms, services, content, partnerships, and new initiatives.',
  },
  {
    number: '05',
    title: 'The Expansion',
    description:
      'As capabilities and opportunities grow, Nexus Hub continues building stronger connections between its different areas.',
  },
  {
    number: '06',
    title: 'The Future',
    description:
      'The story remains open, with new technologies, people, collaborations, platforms, and opportunities shaping what comes next.',
  },
];

const ecosystem = [
  {
    title: 'Digital',
    description:
      'Technology, software, websites, platforms, systems, digital experiences, and innovation capabilities.',
    href: '/digital',
  },
  {
    title: 'Media',
    description:
      'Stories, productions, conversations, audiences, and media platforms built to connect people with ideas.',
    href: '/media',
  },
  {
    title: 'Business',
    description:
      'Services, strategic thinking, solutions, partnerships, and commercial capabilities that help opportunities move forward.',
    href: '/business',
  },
];

const milestonesToday = [
  'Growing digital capabilities',
  'Developing original media platforms',
  'Building stronger business services',
  'Connecting people and opportunities',
  'Creating reusable digital systems',
  'Exploring new products and platforms',
];

export default function OurStoryPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(95,201,230,0.15),transparent_30%),radial-gradient(circle_at_18%_80%,rgba(18,102,182,0.2),transparent_34%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-5xl">
            <Link
              href="/about"
              className="inline-flex text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
            >
              ← About Nexus Hub
            </Link>

            <p className="mt-9 text-sm font-bold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Our Story
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              From an idea of connection to a growing ecosystem.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">
              Nexus Hub was shaped around the belief that ideas become
              more powerful when people, capabilities, technology, media,
              and opportunities can connect.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/about/mission-vision"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-bold text-[#050A30] transition hover:opacity-90"
              >
                Our Mission &amp; Vision
              </Link>

              <Link
                href="/about/approach"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE BEGINNING */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                The Beginning
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Nexus Hub starts with connection.
              </h2>

              <p className="mt-5 max-w-md text-lg leading-8 text-slate-500">
                The story is less about a single starting point and more
                about a way of thinking.
              </p>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                The idea behind Nexus Hub is not simply to create a
                collection of separate activities. It is to create an
                environment where different capabilities can reinforce one
                another.
              </p>

              <p>
                Media can create conversations and communities. Digital
                technology can turn ideas into products, systems, and
                platforms. Business can create structures, services, and
                partnerships that help opportunities move forward.
              </p>

              <p>
                The Nexus Hub concept brings those possibilities into one
                broader ecosystem while allowing each direction to grow
                according to its own purpose.
              </p>

              <p>
                That connection remains at the heart of the story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NEXUS HUB */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
              Why Nexus Hub
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              A name built around the idea of bringing things together.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The idea of a nexus is a point of connection. For Nexus Hub,
              that represents the relationship between ideas, people,
              technology, media, business, and opportunities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-bold text-[#1266B6]">
                CONNECT
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Bring capabilities together
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Different strengths become more useful when they can work
                together around the same opportunity.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-bold text-[#1266B6]">
                CREATE
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Turn ideas into possibilities
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                We focus on transforming ideas into practical experiences,
                services, products, platforms, and solutions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-bold text-[#1266B6]">
                GROW
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Keep the ecosystem evolving
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Growth means learning, improving, expanding capabilities,
                and creating room for new opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY INTRO */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
              The Journey
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              A story that continues to develop.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nexus Hub is an evolving organization. Its story is shaped
              by the ideas we pursue, the capabilities we develop, the
              people we work with, and the opportunities we create together.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {milestones.map((milestone) => (
              <article
                key={milestone.number}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#1266B6]/25 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#1266B6]">
                    {milestone.number}
                  </span>

                  <span className="h-px w-16 bg-slate-200" />
                </div>

                <h3 className="mt-6 text-2xl font-black">
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

      {/* PRINCIPLES */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5FC9E6]">
              What Shapes the Story
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Four ideas continue to shape how Nexus Hub grows.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {storyPrinciples.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <span className="text-sm font-bold text-[#5FC9E6]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-white/62">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                From Idea to Ecosystem
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                The story takes shape through three connected directions.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Digital, Media, and Business are distinct parts of Nexus
                Hub, but they remain connected by a broader purpose.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {ecosystem.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/30 hover:shadow-xl"
                >
                  <h3 className="text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <span className="mt-7 inline-flex text-sm font-bold text-[#1266B6] transition group-hover:translate-x-1">
                    Explore {item.title} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TODAY */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                Where We Are Today
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                The story has moved from an idea to active building.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Today, the Nexus Hub journey is reflected in the systems,
                services, media platforms, projects, relationships, and
                capabilities being developed across the ecosystem.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {milestonesToday.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1266B6]/10 text-sm font-black text-[#1266B6]">
                    ✓
                  </span>

                  <span className="font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOOKING FORWARD */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                Looking Forward
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                The story is still being written.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Nexus Hub is designed to grow with new ideas, people,
                technologies, platforms, partnerships, and opportunities.
              </p>

              <p>
                The future is not simply about becoming larger. It is about
                becoming more capable, more connected, and more valuable to
                the people and organizations that interact with the
                ecosystem.
              </p>

              <p>
                As the journey continues, the focus remains consistent:
                connect ideas, build useful things, create meaningful
                opportunities, and grow with purpose.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/about/mission-vision"
                  className="rounded-md bg-[#050A30] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0B1B3A]"
                >
                  Mission &amp; Vision
                </Link>

                <Link
                  href="/about/approach"
                  className="rounded-md border border-slate-300 px-6 py-3 text-sm font-bold text-[#050A30] transition hover:border-[#1266B6] hover:text-[#1266B6]"
                >
                  Our Approach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Be Part of the Story
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            Have an idea, opportunity, or possibility worth exploring?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Nexus Hub continues to grow through ideas, people,
            collaborations, technology, media, and meaningful work.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-bold text-[#050A30] transition hover:opacity-90"
            >
              Start a Conversation
            </Link>

            <Link
              href="/about"
              className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Back to About
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
