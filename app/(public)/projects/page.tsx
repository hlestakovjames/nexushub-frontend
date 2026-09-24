import Image from 'next/image';
import Link from 'next/link';
import { projectCategories, projectRecords } from '@/components/projects/project-data';
import { siteImages } from '@/config/site-images';

export default function ProjectsPage() {
  return (
    <main className="bg-white text-[#050A30]">
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0">
          <Image
            src={siteImages.projects.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#050A30]/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050A30]/80 via-[#050A30]/55 to-[#050A30]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A30]/70 via-transparent to-[#050A30]/25" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Nexus Hub Projects
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Ideas turned into projects.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
              Explore projects across digital innovation, business, media, and
              community development.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Project Portfolio
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Four project directions. One connected ecosystem.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Projects may originate from a digital requirement, a business
              opportunity, a media initiative, or a community need.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projectCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:border-[#5FC9E6] hover:shadow-lg"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  Projects
                </span>

                <h3 className="mt-3 text-3xl font-bold">
                  {category.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {category.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore {category.name} Projects →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Featured Projects
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Selected project records
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              These are the initial portfolio records exposed by the frontend.
              The architecture is ready to expand into a full CMS-driven
              project portfolio.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projectRecords.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-[#050A30] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    {project.category}
                  </span>

                  <span className="rounded-full bg-[#5FC9E6]/20 px-3 py-1 text-xs font-semibold text-[#1266B6]">
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-[#1266B6]">
                  {project.area}
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Start a Project
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have an idea worth turning into something real?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us what you want to achieve and let&apos;s explore the right
            combination of technology, business, media, and partnerships.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
