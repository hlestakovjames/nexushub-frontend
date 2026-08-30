import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="bg-white text-[#050A30]">
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Blog
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            Ideas, perspectives, and insights.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Explore thoughts, lessons, perspectives, and stories from
            Nexus Hub.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Coming Soon
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              The Nexus Hub blog is being developed.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Articles, insights, analysis, and perspectives will be
              published here as the platform grows.
            </p>

            <Link
              href="/"
              className="mt-7 inline-flex text-sm font-semibold text-[#1266B6]"
            >
              Return to Nexus Hub →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}