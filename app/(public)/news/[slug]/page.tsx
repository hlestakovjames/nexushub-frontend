import Link from 'next/link';

type NewsArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const article = {
  title: 'News Article Title',
  category: 'Nexus Hub',
  date: 'Publication date',
  readTime: '5 min read',
  summary:
    'A dedicated article experience for published Nexus Hub news, announcements, developments, and updates.',
  author: 'Nexus Hub Editorial',
};

const relatedSections = [
  {
    label: 'Announcements',
    href: '/news/announcements',
    description:
      'Official notices, launches, milestones, and important organisational updates.',
  },
  {
    label: 'Digital',
    href: '/news/digital',
    description:
      'Technology, digital products, innovation, and transformation news.',
  },
  {
    label: 'Business',
    href: '/news/business',
    description:
      'Partnerships, projects, growth, and business developments.',
  },
  {
    label: 'Media',
    href: '/news/media',
    description:
      'Developments across the Nexus Hub media ecosystem.',
  },
  {
    label: 'Community',
    href: '/news/community',
    description:
      'Community initiatives, social impact, and community-focused developments.',
  },
];

export default async function NewsArticlePage({
  params,
}: NewsArticlePageProps) {
  const { slug } = await params;

  return (
    <main className="bg-white text-[#050A30]">
      {/* ARTICLE HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href="/news"
            className="text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
          >
            ← News
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#5FC9E6]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#5FC9E6]">
              {article.category}
            </span>

            <span className="text-sm text-white/45">
              {article.date}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {article.title}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
            {article.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/50">
            <span>By {article.author}</span>
            <span aria-hidden="true">•</span>
            <span>{article.readTime}</span>
            <span aria-hidden="true">•</span>
            <span>/{slug}</span>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article>
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
            <div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1266B6]">
                  Publication Space
                </p>

                <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                  The published article will appear here.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  This page establishes the article-detail experience for
                  the future Nexus Hub news publishing system. Once the
                  backend is connected, the article title, body, media,
                  author, category, dates, and related content will be
                  populated dynamically.
                </p>
              </div>

              {/* STORY CONTENT PLACEHOLDER */}
              <div className="mt-12 space-y-7">
                <div>
                  <p className="text-lg font-semibold leading-8 text-[#050A30]">
                    Article content
                  </p>

                  <p className="mt-3 text-lg leading-8 text-slate-600">
                    The main editorial body will be rendered here. It may
                    include paragraphs, headings, links, quotations,
                    images, embedded media, and other structured content
                    supported by the future publishing system.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Supporting information
                  </h2>

                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    Additional article sections, background information,
                    supporting material, and related context can appear
                    here as part of the published story.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Article media
                  </h2>

                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    The future publishing layer can attach featured
                    images, galleries, audio, video, documents, or other
                    relevant media assets to the article.
                  </p>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1266B6]">
                  Article Information
                </p>

                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Category
                    </dt>

                    <dd className="mt-1 text-sm font-semibold text-[#050A30]">
                      {article.category}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Published
                    </dt>

                    <dd className="mt-1 text-sm font-semibold text-[#050A30]">
                      {article.date}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Author
                    </dt>

                    <dd className="mt-1 text-sm font-semibold text-[#050A30]">
                      {article.author}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Reading time
                    </dt>

                    <dd className="mt-1 text-sm font-semibold text-[#050A30]">
                      {article.readTime}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1266B6]">
                  Navigation
                </p>

                <div className="mt-5 space-y-3">
                  <Link
                    href="/news"
                    className="block text-sm font-semibold text-[#050A30] transition hover:text-[#1266B6]"
                  >
                    All News →
                  </Link>

                  <Link
                    href="/news/announcements"
                    className="block text-sm font-semibold text-[#050A30] transition hover:text-[#1266B6]"
                  >
                    Announcements →
                  </Link>

                  <Link
                    href="/news/nexus-hub"
                    className="block text-sm font-semibold text-[#050A30] transition hover:text-[#1266B6]"
                  >
                    Nexus Hub News →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* RELATED NEWS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Related News
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Continue exploring Nexus Hub news.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Published articles can later surface related stories based
              on category, topic, organisation, project, or editorial
              relationships.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedSections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                  News
                </p>

                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  {section.label}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {section.description}
                </p>

                <span className="mt-7 inline-block text-sm font-semibold text-[#1266B6]">
                  Explore {section.label} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLISHING ARCHITECTURE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Future Article Model
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                One article route can support the whole News property.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Category pages can send readers into this common article
                experience regardless of where the story originated.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Unique article slug',
                'Title and summary',
                'Category and topic',
                'Author and contributors',
                'Publication status',
                'Publication and update dates',
                'Featured media',
                'Article body content',
                'Related stories',
                'Search metadata',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-sm font-semibold text-[#050A30]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Nexus Hub News
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Stay connected to what is happening across the ecosystem.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Return to News and continue exploring the different coverage
            areas.
          </p>

          <Link
            href="/news"
            className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
          >
            Back to All News
          </Link>
        </div>
      </section>
    </main>
  );
}
