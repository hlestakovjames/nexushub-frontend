import Link from 'next/link';

const focusAreas = [
  {
    id: 'technology-digital-solutions',
    number: '01',
    title: 'Technology & Digital Solutions',
    statement: 'Turning practical needs into useful digital systems.',
    description:
      'Technology is a central practical capability of Nexus Hub. We design and develop digital experiences and systems that help businesses, organisations, institutions, and initiatives communicate, operate, and deliver services.',
    activities: [
      {
        title: 'Websites & web platforms',
        description: 'Responsive websites and web-based platforms shaped around organisational goals and user needs.',
      },
      {
        title: 'Software & digital systems',
        description: 'Structured applications and connected workflows that support practical processes and services.',
      },
      {
        title: 'Mobile applications',
        description: 'Mobile application experiences planned around real use cases, accessibility, and usability.',
      },
      {
        title: 'Digital identity & communication',
        description: 'Branding and visual design that help organisations communicate consistently across digital channels.',
      },
    ],
    maturity: 'Current service capability',
    accent: '#4FDCE8',
  },
  {
    id: 'innovation-systems-thinking',
    number: '02',
    title: 'Innovation & Systems Thinking',
    statement: 'Understanding how things connect before deciding what to change.',
    description:
      'Nexus Hub is interested in how problems, people, processes, technologies, and environments interact. This focus encourages us to look beyond isolated symptoms, investigate underlying relationships, and explore ideas that can become practical solutions.',
    activities: [
      {
        title: 'Problem exploration',
        description: 'Clarifying real-world needs, constraints, root causes, and the people affected.',
      },
      {
        title: 'Research & learning',
        description: 'Exploring existing knowledge, comparing approaches, testing assumptions, and documenting findings.',
      },
      {
        title: 'System design',
        description: 'Mapping components, relationships, information flows, dependencies, and possible effects.',
      },
      {
        title: 'Experimentation',
        description: 'Developing and evaluating concepts, prototypes, and practical responses through iterative learning.',
      },
    ],
    maturity: 'Research and innovation direction',
    accent: '#8B6CFF',
  },
  {
    id: 'media-creativity',
    number: '03',
    title: 'Media & Creativity',
    statement: 'Using creative communication to make ideas visible and accessible.',
    description:
      'Media and creativity extend how Nexus Hub communicates ideas, tells stories, develops visual experiences, and engages audiences. Nexus Hub TV is the media arm within the wider organisation; it is distinct from the parent brand and its other areas of work. Its dedicated application will be designed and developed from scratch.',
    activities: [
      {
        title: 'Digital media',
        description: 'Media formats and digital channels for sharing information, perspectives, and stories.',
      },
      {
        title: 'Creative production',
        description: 'Visual and multimedia approaches that support clear, engaging communication.',
      },
      {
        title: 'Brand & visual communication',
        description: 'Graphic design and identity work that give messages and initiatives a coherent visual language.',
      },
      {
        title: 'Audience engagement',
        description: 'Exploring ways to connect content, communities, and audiences across relevant platforms.',
      },
    ],
    maturity: 'Media application planned; wider direction developing',
    accent: '#F59A52',
  },
  {
    id: 'business-enterprise',
    number: '04',
    title: 'Business & Enterprise',
    statement: 'Connecting ideas, capabilities, and collaboration around meaningful needs.',
    description:
      'Business and enterprise is a wider organisational focus concerned with how ideas are developed, services are organised, opportunities are explored, and sustainable initiatives are built. It provides a context for connecting technology, creativity, research, and practical business needs.',
    activities: [
      {
        title: 'Business problem-solving',
        description: 'Understanding organisational needs and identifying where suitable capabilities or solutions may help.',
      },
      {
        title: 'Enterprise development',
        description: 'Exploring viable products, services, operating models, and pathways for responsible growth.',
      },
      {
        title: 'Partnership & collaboration',
        description: 'Identifying opportunities to work with people and organisations whose goals and capabilities align.',
      },
      {
        title: 'Opportunity development',
        description: 'Assessing ideas and opportunities, clarifying their requirements, and shaping next steps.',
      },
    ],
    maturity: 'Wider organisational direction',
    accent: '#FFB84D',
  },
];

export default function AreasOfFocusPage() {
  return (
    <main className="bg-white text-[#050B33]">
      <section className="relative isolate overflow-hidden bg-[#050B33] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_15%,rgba(79,220,232,0.2),transparent_32%),radial-gradient(circle_at_12%_90%,rgba(139,108,255,0.2),transparent_34%)]" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4FDCE8]">Nexus Hub · Areas of Focus</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
            Different disciplines. Connected possibilities.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
            Nexus Hub brings together technology, innovation, media, and business as connected areas of focus.
            Each contributes a different perspective and capability to the wider organisational vision.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {focusAreas.map((area) => (
              <a key={area.id} href={`#${area.id}`} className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#4FDCE8] hover:bg-white/10">
                {area.number} · {area.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F2FF]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">One organisation, connected focus areas</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">A broader view of what Nexus Hub is building towards.</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
            <p>These areas are not presented as four separate companies or as a claim that every activity is already fully established. They describe the disciplines, capabilities, and directions that shape Nexus Hub.</p>
            <p>Technology and digital development currently provide a clear practical service foundation. Innovation and systems thinking guide how problems and opportunities are explored. Media and creativity extend communication through Nexus Hub TV and design. Business and enterprise connect these capabilities to organisational needs and sustainable initiatives.</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="space-y-8">
          {focusAreas.map((area) => (
            <section id={area.id} key={area.id} className="scroll-mt-28 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
                <div className="bg-[#050B33] p-8 text-white sm:p-10 lg:p-12">
                  <p className="text-sm font-extrabold tracking-[0.18em]" style={{ color: area.accent }}>{area.number} / FOCUS AREA</p>
                  <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl">{area.title}</h2>
                  <p className="mt-5 text-xl font-semibold leading-8 text-white/90">{area.statement}</p>
                  <span className="mt-9 inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/75">{area.maturity}</span>
                </div>
                <div className="p-8 sm:p-10 lg:p-12">
                  <p className="text-base leading-8 text-slate-600 sm:text-lg">{area.description}</p>
                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    {area.activities.map((activity) => (
                      <article key={activity.title} className="border-t-2 pt-4" style={{ borderColor: area.accent }}>
                        <h3 className="text-lg font-bold text-[#050B33]">{activity.title}</h3>
                        <p className="mt-2 leading-7 text-slate-600">{activity.description}</p>
                      </article>
                    ))}
                  </div>
                  {area.id === 'technology-digital-solutions' && (
                    <Link href="/projects" className="mt-8 inline-flex font-bold text-[#0A4DA8] hover:text-[#050B33]">
                      View selected digital projects <span className="ml-2" aria-hidden="true">→</span>
                    </Link>
                  )}
                  {area.id === 'innovation-systems-thinking' && (
                    <Link href="/about/our-approach" className="mt-8 inline-flex font-bold text-[#0A4DA8] hover:text-[#050B33]">
                      Read about our approach <span className="ml-2" aria-hidden="true">→</span>
                    </Link>
                  )}
                  {area.id === 'business-enterprise' && (
                    <Link href="/contact" className="mt-8 inline-flex font-bold text-[#0A4DA8] hover:text-[#050B33]">
                      Discuss an opportunity <span className="ml-2" aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="bg-[#050B33] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4FDCE8]">Connected by purpose</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">Have a need, idea, or opportunity that connects with our work?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">Start a conversation and help us understand what you are looking to achieve.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-[#4FDCE8] px-7 py-3.5 text-sm font-bold text-[#050B33] transition hover:bg-white">Contact Nexus Hub</Link>
        </div>
      </section>
    </main>
  );
}
