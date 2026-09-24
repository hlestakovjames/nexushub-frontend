import Link from 'next/link';
import { getProjectBySlug } from './project-data';

type ProjectDetailPageProps = {
  slug: string;
  categoryHref: string;
  categoryLabel: string;
};

export default function ProjectDetailPage({
  slug,
  categoryHref,
  categoryLabel,
}: ProjectDetailPageProps) {
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="bg-white text-[#050A30]">
        <section className="bg-[#050A30] text-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              {categoryLabel} Project
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Project profile
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              This project record is ready for publication through the Nexus Hub
              project content system.
            </p>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="rounded-2xl border border-slate-200 p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Project Record
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Detailed project information, milestones, outcomes, media,
                documents, technologies, partners, and related updates can be
                connected here when the project record is published.
              </p>

              <Link
                href={categoryHref}
                className="mt-7 inline-flex text-sm font-semibold text-[#1266B6]"
              >
                ← Back to {categoryLabel} Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white text-[#050A30]">
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                {project.category}
              </span>

              <span className="rounded-full bg-[#5FC9E6] px-3 py-1 text-xs font-semibold text-[#050A30]">
                {project.status}
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              {project.title}
            </h1>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              {project.area}
            </p>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Project Overview
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A project record built for deeper documentation
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                This project page is structured to accommodate the full project
                story as the Nexus Hub content system develops. Future records
                can include the challenge, objectives, solution, implementation,
                technologies, partners, milestones, outcomes, media, and related
                publications.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Project Details
              </p>

              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-sm font-medium text-slate-500">
                    Category
                  </dt>
                  <dd className="mt-1 font-semibold">
                    {project.category}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-slate-500">
                    Project Area
                  </dt>
                  <dd className="mt-1 font-semibold">
                    {project.area}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-slate-500">
                    Status
                  </dt>
                  <dd className="mt-1 font-semibold">
                    {project.status}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <Link
            href={categoryHref}
            className="mt-10 inline-flex text-sm font-semibold text-[#1266B6]"
          >
            ← Back to {categoryLabel} Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
