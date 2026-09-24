import Image from 'next/image';
import Link from 'next/link';
import { siteImages } from '@/config/site-images';
import { blogCategories } from '@/components/blog/blog-data';
import { blogCategoriesHubContent } from '@/components/blog/blog-hub-content';

export default function BlogPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0">
          <Image
            src={siteImages.blog.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#050A30]/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050A30]/75 via-[#050A30]/55 to-[#050A30]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A30]/65 via-transparent to-[#050A30]/25" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Nexus Hub Blog
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Ideas, perspectives, and stories.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              Explore ideas, knowledge, perspectives, experiences, and stories
              across technology, business, innovation, leadership, community,
              media, and the changing digital world.
            </p>
          </div>
        </div>
      </section>

      {/* About the Blog */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                About the Blog
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A space for knowledge, perspective, and discovery.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                The Nexus Hub Blog brings together editorial content covering
                the ideas, technologies, businesses, people, organisations,
                communities, and media shaping the world around us.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                It is designed to accommodate different forms of publishing —
                from timely developments and practical guides to deeper
                analysis, opinion, interviews, stories, and long-form
                features.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                Our editorial approach
              </p>

              <div className="mt-6 space-y-6">
                {[
                  {
                    title: 'Inform',
                    text: 'Provide useful information and context around important subjects.',
                  },
                  {
                    title: 'Explore',
                    text: 'Examine ideas, developments, experiences, and emerging trends.',
                  },
                  {
                    title: 'Connect',
                    text: 'Bring together people, organisations, communities, and perspectives.',
                  },
                  {
                    title: 'Share',
                    text: 'Create a space for knowledge, experiences, stories, and practical lessons.',
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the Blog is organised */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              How the Blog is organised
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Follow content by purpose or subject.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The Blog combines editorial formats with subject categories.
              This allows readers to discover content based on what they want
              to read as well as the subject they want to explore.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Editorial sections',
                text: 'Featured, latest, insights, analysis, opinion, stories, features, and interviews provide different ways to discover published work.',
              },
              {
                title: 'Subject categories',
                text: 'Eight major categories organise content into focused subject areas with their own deeper sections.',
              },
              {
                title: 'Authors',
                text: 'Authors and contributors provide the people and perspectives behind the Blog’s published work.',
              },
              {
                title: 'Individual articles',
                text: 'Published articles will connect their editorial format, subject category, section, author, and related content.',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-7 ring-1 ring-slate-200"
              >
                <span className="text-sm font-bold text-[#1266B6]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publication areas */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: 'Featured',
                text: 'A curated space for selected articles and perspectives that deserve broader attention.',
                href: '/blog/featured',
              },
              {
                title: 'Latest',
                text: 'The chronological publishing stream for newly released Nexus Hub Blog content.',
                href: '/blog/latest',
              },
              {
                title: 'Insights & Analysis',
                text: 'Thoughtful perspectives and deeper examination of important developments and ideas.',
                href: '/blog/insights',
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:border-[#5FC9E6] hover:shadow-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                  Blog
                </p>

                <h3 className="mt-3 text-2xl font-bold group-hover:text-[#1266B6]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.text}
                </p>

                <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Categories
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore the subjects behind the Blog.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {blogCategoriesHubContent.intro}
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              {blogCategoriesHubContent.purpose}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {blogCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/${category.slug}`}
                className="group rounded-2xl bg-white p-7 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                  {category.sections.length} Sections
                </p>

                <h3 className="mt-3 text-2xl font-bold group-hover:text-[#1266B6]">
                  {category.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {category.description}
                </p>

                <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore category →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/blog/categories"
              className="inline-flex rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Explore All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Publishing status */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Publishing
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Building the Nexus Hub publishing platform.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The Blog structure is ready to support publishing across its
                editorial sections and subject categories. Articles, authors,
                and additional editorial content will be introduced as the
                publishing platform develops.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/blog/categories"
                  className="rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Browse Categories
                </Link>

                <Link
                  href="/blog/authors"
                  className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:border-[#1266B6]"
                >
                  Explore Authors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authors */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Authors & Contributors
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                Meet the people behind the perspectives.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                The Blog will bring together contributors whose knowledge,
                experiences, ideas, and perspectives add depth to the Nexus Hub
                publishing platform.
              </p>
            </div>

            <Link
              href="/blog/authors"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Explore Authors
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
