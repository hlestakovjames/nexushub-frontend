import Link from 'next/link';
import { blogEditorialSections } from '@/components/blog/blog-data';
import { blogEditorialContent as editorialContent } from '@/components/blog/blog-hub-content';

type BlogEditorialPageProps = {
  slug: string;
};

export default function BlogEditorialPage({
  slug,
}: BlogEditorialPageProps) {
  const section = blogEditorialSections.find(
    (item) => item.slug === slug,
  );

  const content = editorialContent[slug];

  if (!section || !content) {
    return (
      <main className="min-h-screen bg-white px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Nexus Hub Blog
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
            Editorial section not found
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            The requested Blog editorial section could not be found.
          </p>

          <Link
            href="/blog"
            className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const otherEditorialSections = blogEditorialSections.filter(
    (item) => item.slug !== slug,
  );

  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <Link href="/blog" className="transition hover:text-white">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white">{section.name}</span>
          </div>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
              Nexus Hub Blog
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
              {section.name}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {content.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Purpose + audience */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
              Editorial purpose
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              What this section is about
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {content.purpose}
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
              Intended audience
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Who will find it useful?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              {content.audience}
            </p>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
              Coverage
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              What you can expect
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Coverage will develop as Nexus Hub publishes content in this
              editorial area. The subjects below define the scope of the
              section rather than representing unpublished articles.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.topics.map((topic, index) => (
              <div
                key={topic}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="text-sm font-bold text-cyan-600">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-4 font-semibold text-slate-950">
                  {topic}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial formats */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
            Editorial formats
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Different ways we explore a subject
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Insights',
                text: 'Practical perspectives and observations that help readers understand a subject.',
              },
              {
                title: 'Analysis',
                text: 'Deeper examination of developments, decisions, trends, and their wider context.',
              },
              {
                title: 'Stories',
                text: 'People, organisations, experiences, and journeys presented through narrative.',
              },
              {
                title: 'Guides',
                text: 'Useful explanatory and practical content designed to help readers apply knowledge.',
              },
            ].map((format) => (
              <div
                key={format.title}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <h3 className="text-lg font-bold">{format.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {format.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Publications
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Articles will appear here as the Blog grows
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              This editorial area is ready for CMS-driven publishing. No
              articles are being presented as published until they have
              actually been added to the Blog.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Explore Blog Home
            </Link>

            <Link
              href="/blog/latest"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
            >
              View Latest
            </Link>

            <Link
              href="/blog/categories"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
            >
              Explore Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Other editorial sections */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
                Explore more
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Other Blog sections
              </h2>
            </div>

            <Link
              href="/blog"
              className="text-sm font-semibold text-slate-700 hover:text-cyan-600"
            >
              Back to Blog Home →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherEditorialSections.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md"
              >
                <h3 className="font-bold group-hover:text-cyan-600">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
