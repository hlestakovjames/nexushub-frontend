import Image from 'next/image';
import Link from 'next/link';
import { siteImages } from '@/config/site-images';

const categories = [
  {
    title: 'Announcements',
    href: '/news/announcements',
    description:
      'Official notices, launches, milestones, and important organisational updates.',
  },
  {
    title: 'Nexus Hub',
    href: '/news/nexus-hub',
    description:
      'News and developments from Nexus Hub as an organisation and wider ecosystem.',
  },
  {
    title: 'Digital',
    href: '/news/digital',
    description:
      'Technology, digital products, innovation, and digital transformation.',
  },
  {
    title: 'Business',
    href: '/news/business',
    description:
      'Partnerships, projects, growth, client developments, and business activity.',
  },
  {
    title: 'Media',
    href: '/news/media',
    description:
      'Developments across Nexus Hub TV, Football, Stories, Voices, and media production.',
  },
  {
    title: 'Community',
    href: '/news/community',
    description:
      'Community initiatives, social impact, people, places, and community developments.',
  },
];

const newsroomFeatures = [
  {
    title: 'Editorial Publishing',
    description:
      'A structured newsroom designed for published stories, announcements, organisational updates, and editorial coverage.',
  },
  {
    title: 'Cross-Ecosystem Coverage',
    description:
      'News can connect developments across Nexus Hub, Digital, Business, Media, and Community.',
  },
  {
    title: 'Article-Based Architecture',
    description:
      'Each published story can use the shared article experience at /news/[slug].',
  },
  {
    title: 'Future CMS Integration',
    description:
      'The frontend is structured so titles, media, authors, categories, dates, and article content can later come from the publishing backend.',
  },
];

export default function NewsPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0">
          <Image
            src={siteImages.news.hero}
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

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(95,201,230,0.18),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(18,102,182,0.16),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              Nexus Hub News
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              What is happening across the Nexus Hub ecosystem.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              The central newsroom for official announcements, organisational
              developments, digital innovation, business activity, media
              developments, and community-focused stories.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/news/announcements"
                className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                View Announcements
              </Link>

              <Link
                href="/news/nexus-hub"
                className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Nexus Hub News
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED NEWS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Featured
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Lead stories will appear here.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This space is reserved for the newsroom&apos;s primary story or
                featured editorial item. Published content can later be selected
                dynamically from the news publishing system.
              </p>
            </div>

            <Link
              href="/news"
              className="text-sm font-semibold text-[#1266B6] transition hover:opacity-70"
            >
              All News →
            </Link>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10 lg:min-h-[360px]">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <span className="inline-flex rounded-full bg-[#5FC9E6]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#1266B6]">
                    Featured Story
                  </span>

                  <h3 className="mt-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                    Published feature content will be surfaced here.
                  </h3>

                  <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                    The featured story area is prepared for future editorial
                    content, including a headline, summary, publication date,
                    category, author, and featured media.
                  </p>
                </div>

                <div className="mt-8">
                  <span className="text-sm font-semibold text-[#1266B6]">
                    Article route: /news/[slug]
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#050A30] p-8 text-white sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                Newsroom
              </p>

              <h3 className="mt-5 text-2xl font-bold tracking-tight">
                One central publishing destination.
              </h3>

              <p className="mt-5 leading-7 text-white/65">
                Readers can move from the main newsroom into focused coverage
                areas while every article retains a consistent publishing
                experience.
              </p>

              <Link
                href="/news/announcements"
                className="mt-8 inline-flex text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
              >
                Explore coverage →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Latest News
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The latest published updates will appear here.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              This section is ready for a chronological newsroom feed once
              published content is connected to the backend.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center sm:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1266B6]">
              No Published News Yet
            </p>

            <h3 className="mx-auto mt-4 max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
              The newsroom is ready for its first published stories.
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Once the publishing backend is connected, this area can display
              recent articles with category labels, publication dates, authors,
              summaries, featured media, and links to full stories.
            </p>

            <Link
              href="/news/announcements"
              className="mt-8 inline-flex rounded-md border border-[#1266B6] px-5 py-3 text-sm font-semibold text-[#1266B6] transition hover:bg-[#1266B6] hover:text-white"
            >
              Explore News Sections
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              News Sections
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore news by coverage area.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The newsroom separates editorial coverage into focused sections
              while keeping the overall publishing experience connected.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#5FC9E6] hover:shadow-lg"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1266B6]">
                  News
                </p>

                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  {category.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {category.description}
                </p>

                <span className="mt-7 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore {category.title} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL STRUCTURE */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Editorial Structure
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Built as a real publishing property.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                News is structured as a proper content property rather than a
                simple announcements page, allowing the frontend to grow into a
                full publishing system.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {newsroomFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-bold">{feature.title}</h3>

                  <p className="mt-3 leading-7 text-white/60">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEWS NAVIGATION */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Stay Connected
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Follow the developments that matter to you.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Move between the central newsroom and the different areas of
                Nexus Hub coverage as the publishing system grows.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/news"
                className="rounded-md bg-[#1266B6] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                All News
              </Link>

              <Link
                href="/news/media"
                className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-[#050A30] transition hover:border-[#1266B6] hover:text-[#1266B6]"
              >
                Media News
              </Link>

              <Link
                href="/news/community"
                className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-[#050A30] transition hover:border-[#1266B6] hover:text-[#1266B6]"
              >
                Community News
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
