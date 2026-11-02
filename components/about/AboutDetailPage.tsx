import Link from 'next/link';

export type AboutDetailSection = {
  heading: string;
  paragraphs?: string[];
  points?: { title: string; description: string }[];
};

type AboutDetailPageProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  sections: AboutDetailSection[];
  previous?: { label: string; href: string };
  next?: { label: string; href: string };
};

export default function AboutDetailPage({
  eyebrow,
  title,
  introduction,
  sections,
  previous,
  next,
}: AboutDetailPageProps) {
  return (
    <div className="bg-white text-[#111827]">
      <section className="relative isolate overflow-hidden bg-[#050B33] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(79,220,232,0.18),transparent_32%),radial-gradient(circle_at_18%_85%,rgba(139,108,255,0.18),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:pb-24 lg:px-8 lg:pb-28">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <Link href="/about" className="transition hover:text-[#4FDCE8]">About Nexus Hub</Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span aria-current="page" className="text-white">{eyebrow}</span>
          </nav>
          <div className="mt-16 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4FDCE8]">{eyebrow}</p>
            <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">{introduction}</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="space-y-16">
          {sections.map((section, index) => (
            <section key={section.heading} className="grid gap-6 border-b border-slate-200 pb-14 last:border-0 last:pb-0 md:grid-cols-[0.72fr_1.28fr] md:gap-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0A4DA8]">0{index + 1}</p>
                <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-[#050B33] sm:text-3xl">{section.heading}</h2>
              </div>
              <div className="space-y-5">
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-slate-600 sm:text-lg">{paragraph}</p>
                ))}
                {section.points && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {section.points.map((point) => (
                      <article key={point.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                        <h3 className="text-lg font-bold text-[#050B33]">{point.title}</h3>
                        <p className="mt-3 leading-7 text-slate-600">{point.description}</p>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link href="/about" className="text-sm font-semibold text-[#0A4DA8] transition hover:text-[#050B33]">← Back to About overview</Link>
          <div className="flex flex-wrap gap-5">
            {previous && <Link href={previous.href} className="text-sm font-semibold text-slate-600 transition hover:text-[#0A4DA8]">← {previous.label}</Link>}
            {next && <Link href={next.href} className="text-sm font-semibold text-[#0A4DA8] transition hover:text-[#050B33]">{next.label} →</Link>}
          </div>
        </div>
      </section>
    </div>
  );
}
