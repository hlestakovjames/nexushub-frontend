import Link from 'next/link';

import PageHero from '@/components/hero/PageHero';

export default function NexusHubTVPage() {
  return (
    <main>
      <PageHero
        eyebrow="Nexus Hub TV"
        title={
          <>
            Stories, Shows,
            <br />
            and Conversations.
          </>
        }
        description="Nexus Hub TV is the flagship media platform of Nexus Hub, bringing original programming, stories, interviews, and conversations to audiences."
        image="/images/hero/hero-team.jpeg"
        primaryAction={{
          label: 'Explore NHTV Stories',
          href: '/media/nhtv-stories',
        }}
        secondaryAction={{
          label: 'Explore NHTV Voices',
          href: '/media/nhtv-voices',
        }}
        height="large"
      />

      {/* INTRO */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                About NHTV
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A platform for original media.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Nexus Hub TV creates and distributes original content
                across stories, conversations, interviews, and other
                media formats.
              </p>

              <p>
                The platform is designed to give different voices,
                ideas, and experiences a place to connect with
                audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Programming
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Content built around people and ideas.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <span className="text-sm font-semibold text-[#1266B6]">
                01
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Original Shows
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Original programmes and productions developed for
                the Nexus Hub audience.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <span className="text-sm font-semibold text-[#1266B6]">
                02
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Stories
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Human stories and experiences that inform, inspire,
                and create meaningful connections.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <span className="text-sm font-semibold text-[#1266B6]">
                03
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Conversations
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Discussions and interviews exploring ideas, people,
                culture, technology, and society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED MEDIA */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Explore The Network
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              More from Nexus Hub Media.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link
              href="/media/nhtv-football"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                NHTV Football
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Football coverage and conversations.
              </h3>

              <span className="mt-6 inline-block text-sm font-semibold text-[#1266B6] group-hover:translate-x-1">
                Explore →
              </span>
            </Link>

            <Link
              href="/media/nhtv-stories"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                NHTV Stories
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Stories worth telling.
              </h3>

              <span className="mt-6 inline-block text-sm font-semibold text-[#1266B6] group-hover:translate-x-1">
                Explore →
              </span>
            </Link>

            <Link
              href="/media/nhtv-voices"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                NHTV Voices
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Conversations that matter.
              </h3>

              <span className="mt-6 inline-block text-sm font-semibold text-[#1266B6] group-hover:translate-x-1">
                Explore →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Nexus Hub Media
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have a story worth sharing?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Connect with Nexus Hub and explore opportunities to
            create meaningful media together.
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