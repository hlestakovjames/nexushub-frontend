import Link from 'next/link';

const capabilities = [
  {
    number: '01',
    title: 'Brand Strategy',
    description:
      'Clarify the identity, positioning, values, and direction that help an organization communicate with purpose.',
  },
  {
    number: '02',
    title: 'Visual Identity',
    description:
      'Develop cohesive visual foundations that help an organization present itself consistently across different touchpoints.',
  },
  {
    number: '03',
    title: 'Creative Direction',
    description:
      'Shape the visual and creative direction of campaigns, initiatives, products, and audience-facing experiences.',
  },
  {
    number: '04',
    title: 'Marketing Materials',
    description:
      'Create practical creative materials for digital, print, campaigns, events, and organizational communication.',
  },
  {
    number: '05',
    title: 'Content & Communication',
    description:
      'Support clearer communication through purposeful messaging, content structures, and creative presentation.',
  },
  {
    number: '06',
    title: 'Brand Experience',
    description:
      'Help organizations create consistent experiences across digital channels, platforms, campaigns, and other touchpoints.',
  },
];

const focusAreas = [
  'Developing a new brand identity',
  'Refreshing an existing brand',
  'Launching a new initiative',
  'Creating campaign materials',
  'Improving organizational communication',
  'Developing digital brand experiences',
  'Creating event and promotional materials',
  'Strengthening brand consistency',
];

const principles = [
  {
    title: 'Clarity',
    description:
      'Communication should make the organization, message, and value proposition easier to understand.',
  },
  {
    title: 'Consistency',
    description:
      'A strong identity should remain recognizable across different channels and experiences.',
  },
  {
    title: 'Purpose',
    description:
      'Creative decisions should support a business or organizational objective rather than exist only for appearance.',
  },
  {
    title: 'Relevance',
    description:
      'The creative approach should reflect the audience, context, organization, and objective.',
  },
];

const process = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We learn about the organization, audience, objectives, positioning, and communication challenge.',
  },
  {
    number: '02',
    title: 'Define',
    description:
      'We establish the creative direction, identity requirements, messaging priorities, and intended experience.',
  },
  {
    number: '03',
    title: 'Create',
    description:
      'We develop the visual, creative, and communication assets required for the project.',
  },
  {
    number: '04',
    title: 'Refine',
    description:
      'We review the work, improve consistency, and prepare the creative system for practical use.',
  },
];

export default function BrandCreativePage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <Link
              href="/business/services"
              className="text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
            >
              ← Business Services
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Brand &amp; Creative Services
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Build a clearer identity for the people you want to reach.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We help organizations develop brands, creative systems, and
              communication experiences that make their ideas easier to
              understand and remember.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Discuss a Creative Project
              </Link>

              <Link
                href="/business/services"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Business Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                What We Do
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Creative work should support how an organization is understood.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                A strong brand is more than a logo. It is the combination of
                identity, messaging, visual language, and experiences that
                shape how people understand an organization.
              </p>

              <p>
                We help organizations bring those elements together into a
                clearer and more consistent creative direction.
              </p>

              <p>
                The work can range from focused campaign materials to a
                broader identity and communication system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Creative capabilities for organizations at different stages.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We can support a new identity, strengthen an existing one, or
              create the materials required for a specific initiative.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Where We Can Help
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Creative support for important moments and ongoing communication.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Brand and creative work can support both long-term identity
                building and specific organizational initiatives.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-xl border border-slate-200 p-6"
                >
                  <p className="font-semibold">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Creative Principles
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Creative decisions should have a reason.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We focus on making creative work useful to the organization,
                the audience, and the objective it is intended to support.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <h3 className="text-xl font-bold">
                    {principle.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS + DIGITAL + MEDIA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Connected Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Brand becomes stronger when the experience is consistent.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Creative work can connect with business strategy, digital
              products, and media to create a more complete organizational
              experience.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#050A30] p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5FC9E6]">
                Business
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Strategy
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Align the brand and communication direction with the
                organization&apos;s goals and positioning.
              </p>

              <Link
                href="/business/services/strategy-advisory"
                className="mt-7 inline-block text-sm font-semibold text-[#5FC9E6]"
              >
                Explore Strategy →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Digital
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Experience
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Extend the identity into websites, software, platforms, and
                other digital experiences.
              </p>

              <Link
                href="/digital/services/ui-ux-design"
                className="mt-7 inline-block text-sm font-semibold text-[#1266B6]"
              >
                Explore UI/UX Design →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Media
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Storytelling
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Bring the brand into content, campaigns, productions,
                stories, and audience experiences.
              </p>

              <Link
                href="/media"
                className="mt-7 inline-block text-sm font-semibold text-[#1266B6]"
              >
                Explore Media →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From organizational identity to creative expression.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {process.map((step) => (
              <div key={step.number}>
                <span className="text-sm font-semibold text-[#1266B6]">
                  {step.number}
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Explore More
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Explore more Business Services.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Creative work can often be strengthened by consulting,
                strategy, or digital business capabilities.
              </p>
            </div>

            <Link
              href="/business/services"
              className="shrink-0 text-sm font-semibold text-[#1266B6] transition hover:translate-x-1"
            >
              View All Services →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/business/services/business-consulting"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                Business Consulting
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Understand the organizational challenge before deciding
                how it should be communicated or addressed.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Service →
              </span>
            </Link>

            <Link
              href="/business/services/strategy-advisory"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                Strategy &amp; Advisory
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Align brand direction and communication with wider
                organizational goals.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Service →
              </span>
            </Link>

            <Link
              href="/business/services/digital-business"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                Digital Business Services
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Extend the brand and creative direction into digital
                business experiences.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Service →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Brand &amp; Creative Services
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to build a stronger brand experience?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us what you are launching, improving, or trying to
            communicate, and let&apos;s explore the right creative approach.
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