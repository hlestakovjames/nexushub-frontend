import Link from 'next/link';

export default function NHTVStoriesPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              NHTV Stories
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Every Story
              <br />
              Has a Voice.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Real people, meaningful experiences, and stories that
              deserve to be seen, heard, and remembered.
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
              Our Stories
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Stories beyond the headlines.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              NHTV Stories explores the human experiences behind the
              moments, communities, ideas, and events that shape the
              world around us.
            </p>
          </div>

          {/* STORY CATEGORIES */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-semibold text-[#1266B6]">
                01
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                People
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Personal journeys, experiences, achievements, and the
                people making a difference in their communities.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-semibold text-[#1266B6]">
                02
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Communities
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Stories from communities, cultures, organizations, and
                places that often go beyond the mainstream conversation.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-semibold text-[#1266B6]">
                03
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Experiences
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                The moments, challenges, lessons, and experiences that
                give every story its meaning.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURED STORIES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Featured Stories
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Stories worth telling.
              </h2>
            </div>

            <span className="text-sm font-medium text-slate-500">
              NHTV Stories
            </span>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                People
              </p>

              <h3 className="mt-5 text-2xl font-bold">
                Voices behind the journey.
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Discover the experiences and journeys of people creating
                change around them.
              </p>

              <span className="mt-7 inline-block text-sm font-semibold text-[#5FC9E6]">
                Coming Soon →
              </span>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Community
              </p>

              <h3 className="mt-5 text-2xl font-bold">
                Stories from our communities.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Exploring the people, places, and initiatives making a
                difference at community level.
              </p>

              <span className="mt-7 inline-block text-sm font-semibold text-[#1266B6]">
                Coming Soon →
              </span>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Experience
              </p>

              <h3 className="mt-5 text-2xl font-bold">
                More than a moment.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Stories that capture the experiences, lessons, and
                moments that stay with us.
              </p>

              <span className="mt-7 inline-block text-sm font-semibold text-[#1266B6]">
                Coming Soon →
              </span>
            </article>
          </div>
        </div>
      </section>

      {/* STORY PROMISE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Our Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Tell the story. Understand the person.
              </h2>
            </div>

            <p className="text-lg leading-8 text-slate-600">
              NHTV Stories is built around thoughtful storytelling.
              Rather than simply reporting what happened, we explore
              the people, context, experiences, and perspectives that
              make each story matter.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            NHTV Stories
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            There is always another story to tell.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Stories connect us to people, experiences, and perspectives
            beyond our own.
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