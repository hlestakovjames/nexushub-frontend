import Link from 'next/link';
import {
  blogCategories,
  type BlogCategory,
} from '@/components/blog/blog-data';

type BlogCategoryPageProps = {
  slug: string;
};

export default function BlogCategoryPage({
  slug,
}: BlogCategoryPageProps) {
  const category: BlogCategory | undefined = blogCategories.find(
    (item) => item.slug === slug,
  );

  if (!category) {
    return (
      <main className="min-h-screen bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Nexus Hub Blog
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-950">
            Category not found
          </h1>

          <Link
            href="/blog/categories"
            className="mt-6 inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-900"
          >
            ← Back to Categories
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link
              href="/blog"
              className="text-slate-400 transition hover:text-white"
            >
              Blog
            </Link>

            <span className="text-slate-600">/</span>

            <Link
              href="/blog/categories"
              className="text-slate-400 transition hover:text-white"
            >
              Categories
            </Link>

            <span className="text-slate-600">/</span>

            <span className="text-cyan-300">{category.name}</span>
          </div>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Nexus Hub Blog
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {category.name}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                About this category
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Understanding {category.name}
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  The {category.name.toLowerCase()} section is a dedicated
                  editorial area within the Nexus Hub Blog. It brings together
                  related ideas, developments, perspectives, practical
                  knowledge and stories under one subject area.
                </p>

                <p>
                  The category is organised into focused sections so that
                  readers can move from broad coverage into specific areas of
                  interest. Each section has its own editorial purpose while
                  remaining connected to the wider {category.name.toLowerCase()}
                  conversation.
                </p>

                <p>
                  As the Nexus Hub Blog develops, this category will provide
                  space for original articles, analysis, guides, interviews,
                  stories, case studies and other relevant editorial content.
                </p>
              </div>
            </div>

            <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Category focus
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-950">
                What this area brings together
              </h3>

              <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-600">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-600" />
                  <span>Current developments and important topics.</span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-600" />
                  <span>Ideas, perspectives and informed discussion.</span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-600" />
                  <span>Practical knowledge and explanatory content.</span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-600" />
                  <span>Stories, examples and experiences.</span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-600" />
                  <span>Emerging issues and future-facing perspectives.</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Explore the category
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              {category.name} sections
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Explore specific areas within {category.name}. Each section has
              its own editorial focus and dedicated space for future
              publications.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.sections.map((section, index) => (
              <Link
                key={section.slug}
                href={`/blog/${category.slug}/${section.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="text-lg text-slate-400 transition group-hover:translate-x-1 group-hover:text-cyan-600">
                    →
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-950 group-hover:text-cyan-700">
                  {section.name}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {section.description}
                </p>

                <div className="mt-6 text-sm font-semibold text-cyan-700">
                  Explore section
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial approach */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Editorial approach
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              More than a collection of articles
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              The Nexus Hub Blog is designed to connect information with
              context. Content within this category can approach its subject
              through different editorial formats depending on the story and
              audience.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-950">Insights</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Ideas and observations that help readers understand important
                developments.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-950">Analysis</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Deeper examination of issues, trends and their wider
                implications.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-950">Stories</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Experiences, people, organisations and developments told
                through meaningful stories.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-950">Guides</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Practical and explanatory material designed to help readers
                understand or apply a subject.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Publications
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                Latest {category.name} content
              </h2>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Publishing soon
            </span>
          </div>

          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white px-8 py-14">
            <h3 className="text-xl font-bold text-slate-950">
              No published articles yet
            </h3>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              This category is already structured and ready for editorial
              content. Published articles will appear here automatically as
              they are added through the Blog publishing system.
            </p>

            <Link
              href="/blog/latest"
              className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              View Latest Blog Content
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-slate-950 px-6 py-14 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Nexus Hub Blog
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Continue exploring
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Blog Home
              </Link>

              <Link
                href="/blog/categories"
                className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                All Categories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
