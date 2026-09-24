import Link from 'next/link';
import { blogCategories } from '@/components/blog/blog-data';

export default function BlogCategoriesPage() {
  return (
    <main className="bg-white text-[#050A30]">
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Nexus Hub Blog
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
            Categories
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Explore the subject areas that make up the Nexus Hub Blog and
            discover the deeper sections within each category.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            {blogCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/${category.slug}`}
                className="group rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:border-[#5FC9E6] hover:shadow-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                  {category.sections.length} Sections
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  {category.name}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {category.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore {category.name} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
