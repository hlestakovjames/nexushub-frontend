import Link from 'next/link';
import { blogAuthors } from '@/components/blog/blog-data';

export default function BlogAuthorsPage() {
  return (
    <main className="bg-white text-[#050A30]">
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Nexus Hub Blog
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
            Authors
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Discover the people contributing ideas, perspectives, stories, and
            expertise to the Nexus Hub Blog.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          {blogAuthors.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center">
              <h2 className="text-2xl font-bold">
                Authors will appear here as the Blog grows.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                Author profiles will become part of the Blog publishing
                platform as contributors and published content are added.
              </p>

              <Link
                href="/blog"
                className="mt-7 inline-flex rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white"
              >
                Back to Blog
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogAuthors.map((author) => (
                <article
                  key={author.slug}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                    {author.role}
                  </p>

                  <h2 className="mt-3 text-2xl font-bold">
                    {author.name}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {author.bio}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
