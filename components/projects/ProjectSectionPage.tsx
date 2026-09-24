import Link from 'next/link';
import type { ProjectRecord } from './project-data';

type ProjectArea = {
  name: string;
  href: string;
  description: string;
};

type ProjectSectionPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  parentHref: string;
  parentLabel: string;
  areas: ProjectArea[];
  records?: ProjectRecord[];
};

export default function ProjectSectionPage({
  eyebrow,
  title,
  intro,
  parentHref,
  parentLabel,
  areas,
  records = [],
}: ProjectSectionPageProps) {
  return (
    <main className="bg-white text-[#050A30]">
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              {eyebrow}
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              {title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              {intro}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Project Areas
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Explore this project direction
              </h2>
            </div>

            <Link
              href={parentHref}
              className="text-sm font-semibold text-[#1266B6] transition hover:opacity-75"
            >
              {parentLabel} →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {areas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#5FC9E6] hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  PROJECT AREA
                </span>

                <h3 className="mt-3 text-2xl font-bold">
                  {area.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {area.description}
                </p>

                <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore area →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {records.length > 0 && (
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
                Project records will grow as initiatives are published,
                completed, documented, and connected to the Nexus Hub ecosystem.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {records.map((project) => (
                <Link
                  key={project.slug}
                  href={`${parentHref}/${project.slug}`}
                  className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex flex-wrap items-center gap-3">
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

                  <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                    View project →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Build With Nexus Hub
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have a project or idea that needs the right combination of capabilities?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Let&apos;s explore the opportunity, define the objective, and
            determine the right way to move it forward.
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
