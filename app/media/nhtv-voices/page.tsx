import Link from 'next/link';

export default function NHTVVoicesPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              NHTV Voices
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Different Voices.
              <br />
              Bigger Conversations.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Conversations, opinions, perspectives, and ideas from
              people shaping the communities and world around us.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/media"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Explore Media
              </Link>

              <Link
                href="/media/nexus-hub-tv"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Nexus Hub TV
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Voices
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A platform for meaningful conversations.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              NHTV Voices creates space for people to share ideas,
              experiences, opinions, and perspectives on the issues and
              opportunities that matter.
            </p>
          </div>

          {/* CONTENT AREAS */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-semibold text-[#1266B6]">
                01
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Conversations
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Thoughtful conversations with people whose experiences
                and ideas can broaden the way we see the world.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-semibold text-[#1266B6]">
                02
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Perspectives
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Different viewpoints on culture, technology, business,
                sport, society, and everyday life.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-semibold text-[#1266B6]">
                03
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Ideas
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Ideas that challenge thinking, inspire action, and
                create opportunities for meaningful change.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURED VOICES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Featured Voices
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Conversations worth hearing.
              </h2>
            </div>

            <span className="text-sm font-medium text-slate-500">
              NHTV Voices
            </span>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <article className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Featured Conversation
              </p>

              <h3 className="mt-5 text-3xl font-bold sm:text-4xl">
                Ideas deserve a room.
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-white/65">
                NHTV Voices brings people together for conversations
                that explore ideas, experiences, challenges, and
                possibilities.
              </p>

              <span className="mt-8 inline-block text-sm font-semibold text-[#5FC9E6]">
                Coming Soon →
              </span>
            </article>

            <div className="grid gap-6">
              <article className="rounded-2xl border border-slate-200 bg-white p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  People
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Meet the voices
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Conversations with creators, professionals,
                  entrepreneurs, leaders, and everyday people.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  Ideas
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Perspectives that matter
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Exploring ideas and perspectives across different
                  industries, communities, and interests.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* FORMAT */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                The Format
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Listen. Question. Understand.
              </h2>
            </div>

            <p className="text-lg leading-8 text-slate-600">
              NHTV Voices is designed around open and thoughtful
              conversations. Interviews, discussions, opinion pieces,
              and other formats will give different voices room to
              contribute to the wider conversation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            NHTV Voices
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Your perspective can start a conversation.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Different experiences create different perspectives.
            Different perspectives create better conversations.
          </p>

          <Link
            href="/media"
            className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
          >
            Back to Media
          </Link>
        </div>
      </section>
    </main>
  );
}