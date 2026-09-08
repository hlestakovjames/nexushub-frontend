import Link from 'next/link';

const primaryModules = [
  {
    number: '01',
    title: 'News',
    description:
      'Football stories, editorial coverage, analysis, and important developments.',
    href: '/media/nhtv-football/news',
  },
  {
    number: '02',
    title: 'Fixtures',
    description:
      'Upcoming matches across the football coverage system.',
    href: '/media/nhtv-football/fixtures',
  },
  {
    number: '03',
    title: 'Results',
    description:
      'Completed matches, scorelines, and historical outcomes.',
    href: '/media/nhtv-football/results',
  },
  {
    number: '04',
    title: 'Teams',
    description:
      'Teams, players, competitions, squads, and connected football entities.',
    href: '/media/nhtv-football/teams',
  },
  {
    number: '05',
    title: 'Videos',
    description:
      'Highlights, interviews, features, analysis, and football media.',
    href: '/media/nhtv-football/videos',
  },
  {
    number: '06',
    title: 'About',
    description:
      'The NHTV Football identity, editorial model, and purpose.',
    href: '/media/nhtv-football/about',
  },
];

const footballBranches = [
  {
    label: 'MEN',
    title: 'Men’s Football',
    description:
      'Teams, players, competitions, fixtures, results, news, and videos.',
    href: '/media/nhtv-football/teams/men',
  },
  {
    label: 'WOMEN',
    title: 'Women’s Football',
    description:
      'A dedicated Women’s football environment with the same depth of coverage.',
    href: '/media/nhtv-football/teams/women',
  },
  {
    label: 'TEAMS',
    title: 'Football Teams',
    description:
      'Explore the broader football entity system and connected team records.',
    href: '/media/nhtv-football/teams',
  },
];

const platformPrinciples = [
  {
    number: '01',
    title: 'ENTITY-DRIVEN',
    description:
      'Teams, players, and competitions are treated as connected football entities.',
  },
  {
    number: '02',
    title: 'DATA + MEDIA',
    description:
      'Structured match data and editorial media work together without becoming the same thing.',
  },
  {
    number: '03',
    title: 'CONNECTED DISCOVERY',
    description:
      'Every module should provide a natural path into the others.',
  },
];

export default function NHTVFootballHomePage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.2),_transparent_42%)]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#1266B6]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              NEXUS HUB · NHTV FOOTBALL
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-8xl">
              The game.
              <br />
              The stories.
              <br />
              The system.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              A connected football destination bringing together teams,
              players, competitions, fixtures, results, news, and video.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/media/nhtv-football/news"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Latest Football News
              </Link>

              <Link
                href="/media/nhtv-football/teams"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Teams
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                NHTV Football
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                One football front door. Multiple connected experiences.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                NHTV Football is the football destination within Nexus Hub,
                designed to bring structured football information and media
                coverage together.
              </p>

              <p>
                The home page is intentionally a front door. It introduces the
                major destinations without trying to replace their deeper
                functionality.
              </p>

              <p>
                Teams remain entity-driven, Fixtures and Results remain match
                data, News remains editorial, and Videos remains the visual
                media library.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRIMARY MODULES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Football Destinations
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything important is one step away.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The primary modules provide clear entry points into the deeper
              football system.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {primaryModules.map((module) => (
              <Link
                key={module.number}
                href={module.href}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {module.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold">{module.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {module.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore {module.title} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MEN / WOMEN / TEAMS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Football Structure
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore the football system by context.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Men’s and Women’s football have independent contexts while
              sharing the same broader football entity architecture.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {footballBranches.map((branch) => (
              <Link
                key={branch.label}
                href={branch.href}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-semibold text-[#1266B6]">
                  {branch.label}
                </p>

                <h3 className="mt-3 text-2xl font-bold">{branch.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {branch.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE FOOTBALL BOARD */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Matchday Layer
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Fixtures tell you what is coming. Results tell you what
                happened.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                The Football home connects both experiences without duplicating
                their deeper match functionality.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/media/nhtv-football/fixtures"
                  className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30]"
                >
                  Fixtures
                </Link>

                <Link
                  href="/media/nhtv-football/results"
                  className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white"
                >
                  Results
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5FC9E6]">
                    UPCOMING
                  </p>

                  <div className="mt-3 h-5 rounded-full bg-white/10" />
                  <div className="mt-3 h-4 w-2/3 rounded-full bg-white/10" />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5FC9E6]">
                    RECENT
                  </p>

                  <div className="mt-3 h-5 rounded-full bg-white/10" />
                  <div className="mt-3 h-4 w-3/4 rounded-full bg-white/10" />
                </div>

                <p className="pt-2 text-sm leading-6 text-white/45">
                  Dynamic football records will populate these experiences
                  when the football data service is connected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM MODEL */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Platform Model
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Built as a connected football information system.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The frontend architecture is designed so structured football
              data and media can eventually be powered by a unified backend
              without changing the public information architecture.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {platformPrinciples.map((principle) => (
              <article
                key={principle.number}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {principle.number}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {principle.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA CONNECTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  Football + Media
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Data tells the match story. Media gives it depth.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  News and video can reference teams, players, competitions,
                  fixtures, and results while remaining independent editorial
                  and media systems.
                </p>
              </div>

              <Link
                href="/media/nhtv-football/videos"
                className="inline-flex w-fit rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white"
              >
                Explore Videos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
            About NHTV Football
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Football coverage built around people, matches, and stories.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Learn more about the purpose, editorial model, and role of NHTV
            Football within Nexus Hub.
          </p>

          <div className="mt-8">
            <Link
              href="/media/nhtv-football/about"
              className="inline-flex rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white"
            >
              About NHTV Football
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            NEXUS HUB · NHTV FOOTBALL
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Explore the football system your way.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            From the latest story to a team profile, from a fixture to a
            result, from a player to a competition — everything connects.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/media/nhtv-football/news"
              className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30]"
            >
              Football News
            </Link>

            <Link
              href="/media/nhtv-football/teams"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white"
            >
              Teams
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
