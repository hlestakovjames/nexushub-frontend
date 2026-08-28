import Link from 'next/link';

const capabilities = [
  {
    number: '01',
    title: 'Business Assessment',
    description:
      'Understand the current position, challenges, capabilities, and priorities of an organization.',
  },
  {
    number: '02',
    title: 'Opportunity Analysis',
    description:
      'Identify practical opportunities for improvement, growth, collaboration, or new initiatives.',
  },
  {
    number: '03',
    title: 'Operational Improvement',
    description:
      'Review workflows and organizational practices to identify areas where the business can work more effectively.',
  },
  {
    number: '04',
    title: 'Business Planning',
    description:
      'Translate ideas and objectives into practical plans, priorities, and actions.',
  },
  {
    number: '05',
    title: 'Decision Support',
    description:
      'Provide structured analysis and perspectives that can support important business decisions.',
  },
  {
    number: '06',
    title: 'Growth Guidance',
    description:
      'Help organizations evaluate pathways for sustainable development and expansion.',
  },
];

const areas = [
  'New business initiatives',
  'Business growth planning',
  'Operational challenges',
  'Organizational improvement',
  'Market and opportunity exploration',
  'Service development',
  'Strategic decision-making',
  'Business model refinement',
];

const process = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We learn about your organization, objectives, challenges, current position, and priorities.',
  },
  {
    number: '02',
    title: 'Assess',
    description:
      'We examine the situation, identify important factors, and clarify the areas that require attention.',
  },
  {
    number: '03',
    title: 'Recommend',
    description:
      'We develop practical recommendations and define clear priorities or possible actions.',
  },
  {
    number: '04',
    title: 'Support',
    description:
      'We can continue by helping translate the recommendations into implementation, refinement, or future initiatives.',
  },
];

export default function BusinessConsultingPage() {
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
              Business Consulting
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Practical guidance for organizations facing real business challenges.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We help organizations understand where they are,
              evaluate where they want to go, and identify practical
              ways to move forward.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Discuss a Challenge
              </Link>

              <Link
                href="/business/solutions"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Solutions
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
                Better decisions begin with a clearer understanding of the problem.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Business consulting is about more than producing a
                report. It is about understanding the situation well
                enough to identify useful actions.
              </p>

              <p>
                We work with organizations to examine challenges,
                clarify priorities, assess opportunities, and develop
                practical recommendations.
              </p>

              <p>
                The scope can be focused on a single business issue
                or expanded into a broader organizational initiative.
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
              Consulting support shaped around the organization.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We adapt the consulting approach to the challenge,
              organizational context, and outcome that needs to be
              achieved.
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
                Useful when an organization needs clarity before action.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Consulting can help at the beginning of a new initiative
                or when an existing business needs to reassess its
                direction.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {areas.map((area) => (
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

      {/* BUSINESS + DIGITAL */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5FC9E6]">
                Business
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Understand the organization first.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                Consulting can help clarify priorities, processes,
                opportunities, and decisions before other services are
                introduced.
              </p>

              <Link
                href="/business/services"
                className="mt-7 inline-flex text-sm font-semibold text-[#5FC9E6]"
              >
                Explore Business Services →
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Digital
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Bring in technology when it creates value.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                When a business challenge requires technology, the
                Nexus Hub Digital division can help turn the resulting
                requirements into software, platforms, integrations,
                or other digital products.
              </p>

              <Link
                href="/digital/services"
                className="mt-7 inline-flex text-sm font-semibold text-[#1266B6]"
              >
                Explore Digital Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From business challenge to practical direction.
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

      {/* RELATED BUSINESS SERVICES */}
      <section className="bg-slate-50">
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
                Other capabilities may complement your consulting work
                depending on the challenge and desired outcome.
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
              href="/business/services/strategy-advisory"
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                Strategy &amp; Advisory
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Strategic support for organizations planning growth,
                change, and long-term direction.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Service →
              </span>
            </Link>

            <Link
              href="/business/services/digital-business"
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                Digital Business Services
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Business-focused support that connects organizational
                goals with digital capabilities.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Service →
              </span>
            </Link>

            <Link
              href="/business/services/brand-creative"
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                Brand &amp; Creative Services
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Brand and creative support that strengthens
                communication and organizational identity.
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
            Business Consulting
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Need a clearer view of your business challenge?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us what you are dealing with, what you want to
            achieve, and where you need clarity.
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