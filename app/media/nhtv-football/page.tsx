import Link from 'next/link';

export default function NHTVFootballPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              NHTV Football
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Football.
              <br />
              Beyond the Scoreline.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Football stories, conversations, analysis, and perspectives
              connecting the game with the people who live it.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/media"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Explore NHTV
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
              Our Football Platform
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A dedicated space for the beautiful game.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              NHTV Football brings together football news, opinions,
              analysis, interviews, stories, and conversations in one
              dedicated media experience.
            </p>
          </div>

          {/* CONTENT AREAS */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-semibold text-[#1266B6]">
                01
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Football News
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Timely football stories, updates, transfers, competitions,
                and developments from the world of football.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-semibold text-[#1266B6]">
                02
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Analysis & Opinion
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Perspectives, tactical discussions, match analysis,
                opinions, and conversations around the game.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-semibold text-[#1266B6]">
                03
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Football Stories
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                The people, journeys, rivalries, communities, and moments
                that make football more than just a game.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Featured
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Stories worth following.
              </h2>
            </div>

            <span className="text-sm font-medium text-slate-500">
              NHTV Football
            </span>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <article className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Featured Story
              </p>

              <h3 className="mt-5 text-3xl font-bold sm:text-4xl">
                The stories behind the game.
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-white/65">
                From the pitch to the communities around it, football
                creates stories that deserve to be heard.
              </p>

              <span className="mt-8 inline-block text-sm font-semibold text-[#5FC9E6]">
                Coming Soon →
              </span>
            </article>

            <div className="grid gap-6">
              <article className="rounded-2xl border border-slate-200 bg-white p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  Matchday
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Matchday conversations
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Reactions, perspectives, and discussions around the
                  biggest matches.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  People
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  The people behind football
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Stories about players, fans, creators, communities,
                  and football personalities.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            NHTV Football
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            More than football. A conversation.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Follow the stories, people, opinions, and moments shaping
            the game.
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