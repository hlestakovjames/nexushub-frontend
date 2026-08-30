import Link from 'next/link';

const services = [
  {
    number: '01',
    title: 'Business Consulting',
    description:
      'Practical guidance that helps organizations understand challenges, evaluate opportunities, and make informed business decisions.',
  },
  {
    number: '02',
    title: 'Strategy & Advisory',
    description:
      'Strategic support for organizations planning growth, change, new initiatives, or a clearer long-term direction.',
  },
  {
    number: '03',
    title: 'Digital Business Services',
    description:
      'Business-focused digital support that connects technology with operational, customer, and growth objectives.',
  },
  {
    number: '04',
    title: 'Brand & Creative Services',
    description:
      'Brand and creative support that helps organizations communicate clearly, strengthen their identity, and present themselves consistently.',
  },
  {
    number: '05',
    title: 'Partnership Services',
    description:
      'Support for organizations looking to develop collaborative opportunities, strategic relationships, and shared initiatives.',
  },
];

const serviceBenefits = [
  {
    title: 'Clear Direction',
    description:
      'Turn uncertainty into a practical understanding of priorities, opportunities, and next steps.',
  },
  {
    title: 'Better Decisions',
    description:
      'Evaluate options with the wider organizational context in mind rather than focusing on isolated actions.',
  },
  {
    title: 'Practical Execution',
    description:
      'Translate ideas and recommendations into actions, initiatives, and measurable work.',
  },
  {
    title: 'Long-Term Value',
    description:
      'Build approaches that can evolve as the organization, market, and opportunities change.',
  },
];

const process = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We learn about the organization, challenge, opportunity, goals, and context surrounding the work.',
  },
  {
    number: '02',
    title: 'Assess',
    description:
      'We identify priorities, strengths, gaps, opportunities, and possible directions.',
  },
  {
    number: '03',
    title: 'Recommend',
    description:
      'We shape a practical approach with clear priorities, actions, and expected outcomes.',
  },
  {
    number: '04',
    title: 'Support',
    description:
      'We can continue through implementation, refinement, collaboration, and future development.',
  },
];

export default function BusinessServicesPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <Link
              href="/business"
              className="text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
            >
              ← Business
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Business Services
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Practical services for organizations ready to move forward.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              From consulting and strategy to digital business, creative
              services, and partnership support, we help organizations
              turn challenges and opportunities into practical action.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Discuss Your Needs
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

      {/* INTRODUCTION */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                What We Offer
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Business support built around the challenge, not a fixed package.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Organizations rarely face problems that fit neatly into a
                single category. A growth challenge may require strategy,
                communication, technology, partnerships, or a combination of
                several capabilities.
              </p>

              <p>
                Our services are designed to be useful independently or
                combined into a broader approach around a specific business
                objective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Capabilities for different business needs.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore the areas where Nexus Hub can support planning,
              communication, business development, digital operations,
              and collaboration.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {service.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Learn More →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Why Work With Us
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Turning business thinking into useful action.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The value of a service is not only the recommendation or
                deliverable. It is how effectively that work helps the
                organization move toward its goals.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {serviceBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <h3 className="text-xl font-bold">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHEN TO ENGAGE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              When We Can Help
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Support at different stages of your organization&apos;s journey.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              'Starting a new initiative',
              'Planning organizational growth',
              'Improving business operations',
              'Strengthening brand communication',
              'Exploring new markets or opportunities',
              'Planning digital business improvements',
              'Developing strategic partnerships',
              'Managing organizational change',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS + DIGITAL */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5FC9E6]">
                Business
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Focus on the organization.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                Strategy, consulting, creative services, business
                development, partnerships, and solutions designed around
                organizational goals.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Digital
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Build the technology.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                When the business challenge requires technology, our Digital
                division can provide the websites, software, platforms,
                integrations, commerce, and technical capabilities behind it.
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
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From business challenge to practical action.
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

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Let&apos;s Work Together
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have a business challenge or opportunity to explore?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us where you are today, what you want to achieve, and
            where you need support.
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