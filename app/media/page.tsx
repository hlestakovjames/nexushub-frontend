import Link from 'next/link';

import PageHero from '@/components/hero/PageHero';

export default function MediaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Nexus Hub Media"
        title={
          <>
            Stories That
            <br />
            Connect People.
          </>
        }
        description="Discover original stories, conversations, football, and media experiences across the Nexus Hub ecosystem."
        image="/images/hero/hero-team.jpeg"
        primaryAction={{
          label: 'Explore Nexus Hub TV',
          href: '/media/nexus-hub-tv',
        }}
        secondaryAction={{
          label: 'Explore NHTV Football',
          href: '/media/nhtv-football',
        }}
        height="large"
      />

      {/* MEDIA NETWORK */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              The Media Network
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different voices. One connected network.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nexus Hub Media brings together original
              programming, football, stories, and
              conversations designed to inform, entertain,
              and connect audiences.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Link
              href="/media/nexus-hub-tv"
              className="group rounded-2xl bg-[#050A30] p-8 text-white transition hover:-translate-y-1"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5FC9E6]">
                Nexus Hub TV
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Original Programming
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-white/65">
                Original shows, conversations, interviews,
                documentaries, and stories from across the
                Nexus Hub ecosystem.
              </p>

              <span className="mt-7 inline-block text-sm font-semibold text-[#5FC9E6] transition group-hover:translate-x-1">
                Explore Nexus Hub TV →
              </span>
            </Link>

            <Link
              href="/media/nhtv-football"
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                NHTV Football
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Football. Stories. Passion.
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-slate-600">
                Football coverage, discussions, opinions,
                analysis, and stories created for passionate
                football audiences.
              </p>

              <span className="mt-7 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore NHTV Football →
              </span>
            </Link>

            <Link
              href="/media/nhtv-stories"
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                NHTV Stories
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Stories Worth Telling.
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-slate-600">
                Human stories, experiences, communities,
                and ideas brought to life through original
                storytelling.
              </p>

              <span className="mt-7 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore NHTV Stories →
              </span>
            </Link>

            <Link
              href="/media/nhtv-voices"
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                NHTV Voices
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Conversations That Matter.
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-slate-600">
                Conversations, perspectives, and voices
                exploring ideas, culture, technology,
                business, and society.
              </p>

              <span className="mt-7 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore NHTV Voices →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* MEDIA CTA */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
            Work With Nexus Hub Media
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have a story, idea, or production opportunity?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Let&apos;s explore how Nexus Hub Media can help
            bring your idea to an audience.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0B1B3A]"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}