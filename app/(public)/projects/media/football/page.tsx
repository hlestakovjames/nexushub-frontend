import Link from 'next/link';
import ProjectSectionPage from '@/components/projects/ProjectSectionPage';

export default function Page() {
  return (
    <>
      <ProjectSectionPage
        eyebrow="Media Projects"
        title="Football"
        intro="Football-focused media projects covering coverage, productions, content, and digital audience experiences."
        parentHref="/projects/media"
        parentLabel="Media Projects"
        areas={[]}
      />
      <section className="-mt-28 pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Project Portfolio Area
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Football projects
            </h2>
            <p className="mt-5 max-w-3xl leading-7 text-slate-600">
              Published project records for this area can be added here as the Nexus Hub project portfolio grows.
              Each record can later connect to a full project profile, media, milestones, outcomes, related news, and resources.
            </p>
            <Link
              href="/projects/media"
              className="mt-7 inline-flex text-sm font-semibold text-[#1266B6]"
            >
              ← Back to Media Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
