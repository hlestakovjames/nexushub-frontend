import Link from 'next/link';

import HeroSlider from '@/components/hero/HeroSlider';

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
        'Nexus Hub brings together media, digital innovation, and business to create ideas, platforms, and opportunities that make an impact.',
      image: '/images/hero/hero-digital.jpeg',
      primaryAction: {
        label: 'Explore Nexus Hub',
        href: '/digital',
      },
      secondaryAction: {
        label: 'Work With Us',
        href: '/contact',
      },
    },
    {
      eyebrow: 'Nexus Hub',
      title: (
        <>
          Building What&apos;s
          <br />
          Next.
        </>
      ),
      description:
        'We bring people, technology, creativity, and business together to build meaningful digital experiences and new possibilities.',
      image: '/images/hero/hero-team.jpeg',
      primaryAction: {
        label: 'Explore Digital',
        href: '/digital',
      },
      secondaryAction: {
        label: 'Explore Media',
        href: '/media',
      },
    },
  ];

  return (
    <main>
      {/* HERO */}
      <HeroSlider
        slides={heroSlides}
        height="screen"
      />

      {/* WHAT WE DO */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              One hub. Three connected directions.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nexus Hub operates across media, digital
              technology, and business to connect ideas
              with people, platforms, and opportunities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* MEDIA */}
            <Link
              href="/media"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <span className="text-sm font-semibold text-[#1266B6]">
                01
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Media
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Stories, conversations, football, and
                original media experiences through the
                Nexus Hub media network.
              </p>

              <span className="mt-6 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Media →
              </span>
            </Link>

            {/* DIGITAL */}
            <Link
              href="/digital"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <span className="text-sm font-semibold text-[#1266B6]">
                02
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Digital
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Websites, software, platforms, and digital
                transformation built around real-world needs.
              </p>

              <span className="mt-6 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Digital →
              </span>
            </Link>

            {/* BUSINESS */}
            <Link
              href="/business"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <span className="text-sm font-semibold text-[#1266B6]">
                03
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Business
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Services, solutions, consulting, and
                partnerships that help organizations grow.
              </p>

              <span className="mt-6 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Business →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                The Ecosystem
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Built to connect ideas across disciplines.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                From original media and digital platforms
                to business solutions, Nexus Hub creates a
                connected ecosystem where different ideas
                can work together.
              </p>

              <Link
                href="/about"
                className="mt-7 inline-flex rounded-md bg-[#050A30] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0B1B3A]"
              >
                Discover Nexus Hub
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
                  Original programming, stories, and
                  conversations.
                </p>
              </Link>

              <Link
                href="/digital"
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-[#1266B6]">
                  Digital
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Digital Platforms
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Technology designed to connect people
                  and possibilities.
                </p>
              </Link>

              <Link
                href="/business/services"
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-[#1266B6]">
                  Business
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Business Services
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Practical services supporting organizations
                  and businesses.
                </p>
              </Link>

              <Link
                href="/business/solutions"
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-[#1266B6]">
                  Solutions
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Connected Solutions
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Integrated digital, media, and business
                  solutions.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Let&apos;s Connect
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have an idea, project, or opportunity?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Let&apos;s explore how Nexus Hub can help turn
            the idea into something meaningful.
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