import Link from 'next/link';

const sections = [
  {
    title: 'Downloads',
    href: '/resources/downloads',
    description:
      'Downloadable publications, reports, media kits, forms, and other public resource files.',
  },
  {
    title: 'Guides',
    href: '/resources/guides',
    description:
      'Practical guides and how-to resources covering digital, business, media, and community topics.',
  },
  {
    title: 'Documents',
    href: '/resources/documents',
    description:
      'Organisational, policy, legal, reporting, and other public documents.',
  },
  {
    title: 'Templates',
    href: '/resources/templates',
    description:
      'Reusable templates for business, projects, media, organisation, and forms.',
  },
];

const principles = [
  'Public resource discovery',
  'Structured categorisation',
  'Search and filtering',
  'Version-aware publishing',
  'Controlled access',
  'Future download tracking',
];

export default function ResourcesPage() {
  return (
    <main className="bg-white text-[#050A30]">
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Nexus Hub
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Resources
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
            A central knowledge and resource library for publications,
            documents, guides, downloads, and reusable materials across the
            Nexus Hub ecosystem.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Explore Resources
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Four connected resource properties.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Resources are separated by purpose so visitors can quickly find
              the type of material they need.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-[#5FC9E6] hover:shadow-lg"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1266B6]">
                  Resources
                </p>

                <h3 className="mt-5 text-3xl font-bold tracking-tight">
                  {section.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {section.description}
                </p>

                <span className="mt-8 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore {section.title} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Resource Platform
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Built for a growing knowledge library.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The Resources property is designed to become more than a static
                file page. It can eventually support structured publishing,
                discovery, access control, versions, and usage analytics.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <p className="text-sm font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
            Publishing
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Real resources will be connected when the publishing backend is
            ready.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            No fabricated documents or download files are being presented in
            this frontend phase.
          </p>
        </div>
      </section>
    </main>
  );
}
