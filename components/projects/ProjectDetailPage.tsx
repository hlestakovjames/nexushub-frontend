import Image from 'next/image';
import Link from 'next/link';
import { getProjectBySlug } from './project-data';

type ProjectDetailPageProps = {
  slug: string;
};

const categoryRoutes = {
  Digital: '/projects/digital',
  Business: '/projects/business',
  Media: '/projects/media',
  Community: '/projects/community',
} as const;

export default function ProjectDetailPage({
  slug,
}: ProjectDetailPageProps) {
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="bg-white text-[#050A30]">
        <section className="bg-[#050A30] text-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Project Profile
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Project not found
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              The project you are looking for is not currently available in
              the Nexus Hub project portfolio.
            </p>

            <Link
              href="/projects"
              className="mt-8 inline-flex text-sm font-semibold text-[#5FC9E6]"
            >
              ← Back to Projects
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const categoryHref = categoryRoutes[project.category];

  return (
    <main className="bg-white text-[#050A30]">
      {/* Hero */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2">
          <div className="flex items-center px-6 py-16 sm:py-20 lg:px-12 lg:py-24">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                  {project.category}
                </span>

                <span className="rounded-full bg-[#5FC9E6] px-3 py-1 text-xs font-semibold text-[#050A30]">
                  {project.status}
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                {project.area}
              </p>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/70 sm:text-xl">
                {project.summary}
              </p>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                  Project / Partner
                </p>

                <p className="mt-2 text-base font-medium text-white/90">
                  {project.client}
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[360px] lg:min-h-[560px]">
            <Image
              src={project.image}
              alt={`${project.title} project`}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Project Overview
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {project.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {project.overview}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-7 lg:p-8">
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
                    Partner
                  </dt>

                  <dd className="mt-1 font-semibold">
                    {project.client}
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
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              The Challenge
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The problem the project addresses
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {project.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Project Objectives
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                What the project is designed to achieve
              </h2>
            </div>

            <div className="space-y-4">
              {project.objectives.map((objective, index) => (
                <div
                  key={objective}
                  className="flex gap-5 rounded-xl border border-slate-200 p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#050A30] text-xs font-bold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <p className="leading-7 text-slate-600">
                    {objective}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              The Project
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The solution
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              What We Built
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Key capabilities
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The project is structured around the following capabilities and
              functional areas.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.capabilities.map((capability) => (
              <div
                key={capability}
                className="rounded-xl border border-slate-200 p-6"
              >
                <div className="h-1 w-8 rounded-full bg-[#5FC9E6]" />

                <p className="mt-5 font-semibold leading-6">
                  {capability}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture / Technology */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Architecture / Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Technology foundation
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                The technology foundation for this project reflects its current
                development architecture and provides room for continued
                expansion as the project evolves.
              </p>
            </div>

            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                Technologies & Architecture
              </p>

              <div className="flex flex-wrap gap-3">
                {project.technology.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Impact / Intended Outcomes
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                What the project establishes
              </h2>
            </div>

            <div className="space-y-4">
              {project.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-xl border border-slate-200 p-5"
                >
                  <p className="leading-7 text-slate-600">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nexus Hub role */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Nexus Hub Role
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Technology, design and development
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {project.nexusHubRole}
            </p>
          </div>
        </div>
      </section>

      {/* Related links */}
      {project.relatedLinks.length > 0 && (
        <section>
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="flex flex-wrap gap-4">
              {project.relatedLinks.map((link) => {
                const isExternal = link.href.startsWith('http');

                return isExternal ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-[#1266B6] transition hover:border-[#1266B6] hover:bg-slate-50"
                  >
                    {link.label} ↗
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-[#1266B6] transition hover:border-[#1266B6] hover:bg-slate-50"
                  >
                    {link.label} →
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Continue Exploring
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Explore more of the Nexus Hub project portfolio
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/70">
                Discover other projects, capabilities, and opportunities to
                work with Nexus Hub.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href={categoryHref}
                className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#050A30] transition hover:bg-white/90"
              >
                More {project.category} Projects
              </Link>

              <Link
                href="/contact?channel=project"
                className="inline-flex items-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
