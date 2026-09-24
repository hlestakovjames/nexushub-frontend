import Link from 'next/link';
import {
  getBlogCategory,
  getBlogSection,
} from '@/components/blog/blog-data';
import { getBlogSectionContent } from '@/components/blog/blog-section-content';

type BlogSectionPageProps = {
  categorySlug: string;
  sectionSlug: string;
};

export default function BlogSectionPage({
  categorySlug,
  sectionSlug,
}: BlogSectionPageProps) {
  const category = getBlogCategory(categorySlug);
  const section = getBlogSection(categorySlug, sectionSlug);
  const content = getBlogSectionContent(categorySlug, sectionSlug);

  if (!category || !section || !content) {
    return (
      <main className="min-h-screen bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Nexus Hub Blog
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-950">
            Section not found
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

  const relatedSections = category.sections.filter(
    (item) => item.slug !== section.slug,
  );

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm"
          >
            <Link
              href="/blog"
              className="text-slate-400 transition hover:text-white"
            >
              Blog
            </Link>

            <span className="text-slate-600">/</span>

            <Link
              href={`/blog/${category.slug}`}
              className="text-slate-400 transition hover:text-white"
            >
              {category.name}
            </Link>

            <span className="text-slate-600">/</span>

            <span className="text-cyan-300">{section.name}</span>
          </nav>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {category.name}
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {section.name}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {section.description}
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
                Section overview
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                About {section.name}
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>{content.intro}</p>

                <p>
                  As part of the {category.name} category, this section
                  provides a focused space for examining the subject from
                  multiple perspectives. Coverage can range from current
                  developments and practical knowledge to deeper analysis,
                  stories, case studies and long-form features.
                </p>

                <p>
                  The section is designed to grow with the Nexus Hub Blog.
                  Future published articles will be organised here according
                  to their subject and editorial purpose, making it easier for
                  readers to move from broad category coverage into specific
                  areas of interest.
                </p>
              </div>
            </div>

            <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Intended audience
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-950">
                Who this section is for
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {content.audience}
              </p>

              <div className="mt-7 border-t border-slate-200 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Category
                </p>

                <Link
                  href={`/blog/${category.slug}`}
                  className="mt-2 inline-flex font-semibold text-cyan-700 hover:text-cyan-900"
                >
                  {category.name} →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Coverage areas
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              What we explore
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Articles and future editorial material in this section can
              explore the following areas:
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.topics.map((topic, index) => (
              <div
                key={topic}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-4 font-bold text-slate-950">
                  {topic}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Coverage and editorial perspectives related to {topic.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial formats */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Editorial formats
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Different ways to explore the subject
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Content within this section can take different forms depending
              on the subject, purpose and depth of the story.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-950">Insights</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Observations and perspectives that help readers understand
                important developments.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-950">Analysis</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Deeper examination of issues, developments, trends and their
                wider context.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-950">Stories</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                People, experiences, organisations and journeys connected to
                the subject.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-950">Guides</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Practical and explanatory material designed to make complex
                subjects easier to understand.
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
                Articles in {section.name}
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
              This section is ready for editorial content. Once articles are
              published and assigned to {section.name}, they will appear here
              automatically.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/blog/${category.slug}`}
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Explore {category.name}
              </Link>

              <Link
                href="/blog/latest"
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
              >
                View Latest
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related sections */}
      <section className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              More from {category.name}
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Explore related sections
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Continue exploring other areas within the {category.name}
              category.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedSections.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${category.slug}/${item.slug}`}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500 hover:bg-slate-800"
              >
                <h3 className="font-semibold text-white">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
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
