import Link from 'next/link';
import { ArrowUpRight, Boxes, Compass, GraduationCap, Layers3, RefreshCw, ShieldCheck, Tv, Users } from 'lucide-react';

const assetPassCapabilities = [
  {
    icon: Boxes,
    title: 'Asset management',
    description: 'Organise and manage digital and physical assets through a more structured environment.',
  },
  {
    icon: RefreshCw,
    title: 'Exchange and redistribution',
    description: 'Support buying, selling, donations, exchanges, reuse and redistribution of assets.',
  },
  {
    icon: ShieldCheck,
    title: 'Lifecycle accountability',
    description: 'Make asset movement, use and stewardship easier to follow across its lifecycle.',
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-white text-[#050B33]">
      <section className="relative isolate overflow-hidden bg-[#050B33] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(79,220,232,0.2),transparent_32%),radial-gradient(circle_at_12%_90%,rgba(139,108,255,0.22),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4FDCE8]">Nexus Hub · Products & Innovations</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
            Ideas shaped into purposeful products.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
            We explore practical problems, develop product ideas and build digital solutions with a clear
            purpose. This page introduces products emerging from the Nexus Hub innovation ecosystem and
            distinguishes them from the wider platform vision.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F2FF]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">Product portfolio</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Independent products. A connected innovation ecosystem.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nexus Hub is the wider innovation ecosystem. Products developed within it can have their own
              identity, purpose and users while benefiting from the capabilities and direction of the parent ecosystem.
            </p>
          </div>

          <article className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="relative flex min-h-72 flex-col justify-between overflow-hidden bg-[#050B33] p-8 text-white sm:p-10">
                <div className="absolute -right-14 -top-12 h-64 w-64 rounded-full border border-[#4FDCE8]/25" />
                <div className="absolute -right-2 top-12 h-40 w-40 rounded-full border border-[#8B6CFF]/40" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#4FDCE8]">
                  <Layers3 size={30} strokeWidth={1.6} aria-hidden="true" />
                </div>
                <div className="relative mt-16">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4FDCE8]">First-generation product</p>
                  <h3 className="mt-3 text-4xl font-black tracking-tight">AssetPass</h3>
                  <p className="mt-3 max-w-sm leading-7 text-white/70">A standalone digital asset ecosystem product emerging from Nexus Hub.</p>
                </div>
              </div>
              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0A4DA8]">Product 01</p>
                <h4 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">A connected environment for the management and movement of assets.</h4>
                <p className="mt-5 leading-8 text-slate-600">
                  AssetPass is positioned as an integrated digital asset ecosystem. Its initial scope brings
                  together asset management, marketplace activity, buying and selling, donations and exchanges,
                  reuse and redistribution, and lifecycle accountability.
                </p>
                <div className="mt-8 grid gap-5 sm:grid-cols-3">
                  {assetPassCapabilities.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title}>
                        <Icon size={22} className="text-[#0A4DA8]" aria-hidden="true" />
                        <h5 className="mt-3 font-bold">{item.title}</h5>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 rounded-2xl bg-[#F5F2FF] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0A4DA8]">Positioning principle</p>
                  <p className="mt-2 leading-7 text-slate-700">
                    AssetPass stands as a distinct Nexus Hub product. Its initial purpose and positioning
                    are to be established first; broader applications such as digital asset passports,
                    cross-organisational identity, advanced intelligence and circular-economy infrastructure
                    remain longer-term possibilities rather than promises of the initial product.
                  </p>
                </div>
                <div className="mt-7 flex flex-wrap items-center gap-4">\n                  <a href="https://assetpass.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#050B33] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0A4DA8]">\n                    Visit AssetPass <ArrowUpRight size={17} aria-hidden="true" />\n                  </a>\n                  <span className="text-sm text-slate-500">One of the first digital products emerging from Nexus Hub.</span>\n                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#050B33] text-[#4FDCE8]">
                <Compass size={29} strokeWidth={1.6} aria-hidden="true" />
              </div>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-[#0A4DA8]">The parent ecosystem</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">The Nexus Hub Platform</h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-slate-600">
                The Nexus Hub Platform is the wider digital ecosystem vision: a connected environment
                through which Nexus Hub can organise its own operations, develop and support products,
                connect participants and enable collaboration across its areas of focus.
              </p>
              <p className="mt-5 leading-8 text-slate-600">
                It is distinct from AssetPass. AssetPass is a standalone product within the innovation
                ecosystem; the Nexus Hub Platform is the broader environment and institutional digital
                direction. Its applications are being approached as separate components with distinct roles
                and development stages.
              </p>
              <Link href="/areas-of-focus#innovation-systems-thinking" className="mt-7 inline-flex items-center gap-2 font-bold text-[#0A4DA8] hover:text-[#050B33]">
                Explore our innovation direction <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EFFBFC]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">From idea to product</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">Have a problem worth solving?</h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-600">
                We welcome conversations around product ideas, research, collaboration and practical innovation.
              </p>
            </div>
            <Link href="/contact?channel=innovation" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#050B33] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0A4DA8]">
              Discuss an idea <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
