import Link from 'next/link';

const resources = [
  {
    title: 'Documents',
    description:
      'Official documents, reports, publications, and organizational materials.',
  },
  {
    title: 'Guides',
    description:
      'Practical guides, educational materials, and useful references.',
  },
  {
    title: 'Downloads',
    description:
      'Files, resources, and materials available for download.',
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-white text-[#050A30]">
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Resources
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            Useful resources from Nexus Hub.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            A central place for documents, guides, downloads, and
            other materials.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="rounded-2xl border border-slate-200 p-8"
              >
                <h2 className="text-2xl font-bold">
                  {resource.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {resource.description}
                </p>

                <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <Link
              href="/"
              className="text-sm font-semibold text-[#1266B6]"
            >
              Return to Nexus Hub →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}