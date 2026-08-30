import Link from 'next/link';

const capabilities = [
  {
    number: '01',
    title: 'Digital Business Strategy',
    description:
      'Connect digital opportunities with business objectives, customer needs, and organizational priorities.',
  },
  {
    number: '02',
    title: 'Digital Service Development',
    description:
      'Shape new or improved digital services around the people, processes, and outcomes they need to support.',
  },
  {
    number: '03',
    title: 'Business Process Digitalization',
    description:
      'Identify practical opportunities to replace manual or inefficient business processes with better digital approaches.',
  },
  {
    number: '04',
    title: 'Digital Customer Experiences',
    description:
      'Improve how customers discover, access, use, and interact with business services through digital channels.',
  },
  {
    number: '05',
    title: 'Digital Operations',
    description:
      'Use digital tools and processes to improve internal coordination, information flow, and day-to-day operations.',
  },
  {
    number: '06',
    title: 'Digital Growth Opportunities',
    description:
      'Explore how digital products, channels, services, and platforms can create new opportunities for the organization.',
  },
];

const focusAreas = [
  'Launching a new digital service',
  'Improving an existing customer experience',
  'Moving manual processes online',
  'Creating new digital business opportunities',
  'Improving internal digital operations',
  'Planning a digital business initiative',
  'Connecting business goals with technology',
  'Preparing for digital growth',
];

const outcomes = [
  {
    title: 'Clearer Digital Direction',
    description:
      'A better understanding of where digital capabilities can create meaningful business value.',
  },
  {
    title: 'Better Processes',
    description:
      'More efficient workflows designed around the way the organization actually operates.',
  },
  {
    title: 'Stronger Experiences',
    description:
      'Digital services that make it easier for customers, teams, and stakeholders to interact with the organization.',
  },
  {
    title: 'New Opportunities',
    description:
      'Practical ideas for using digital channels, products, and services to support growth.',
  },
];

const process = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We learn about the business model, users, processes, objectives, and current digital environment.',
  },
  {
    number: '02',
    title: 'Identify',
    description:
      'We identify digital opportunities, gaps, challenges, and areas where improvement can create value.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'We shape the business approach, service, process, or digital initiative around the desired outcome.',
  },
  {
    number: '04',
    title: 'Enable',
    description:
      'We help translate the direction into practical implementation through the appropriate business and digital capabilities.',
  },
];

export default function DigitalBusinessPage() {
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
              Digital Business Services
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Connect digital opportunities to real business outcomes.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We help organizations understand where digital
              capabilities can improve operations, strengthen customer
              experiences, create new services, and support growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Discuss a Digital Opportunity
              </Link>

              <Link
                href="/digital/services"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Digital Services
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
                Digital technology is most valuable when it supports the business.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Digital Business Services sit between business needs and
                technology. The goal is not to introduce technology simply
                because it is available, but to use it where it improves a
                meaningful business outcome.
              </p>

              <p>
                We help organizations identify those opportunities and
                translate them into practical digital initiatives, services,
                processes, and experiences.
              </p>

              <p>
                This can involve a focused improvement or a broader digital
                business initiative involving several parts of the organization.
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
              Helping organizations turn digital ideas into business value.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We connect business thinking with practical digital opportunities
              across services, operations, customer experiences, and growth.
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
                Useful wherever digital and business objectives meet.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The work can focus on a single opportunity or become part of
                a broader digital business initiative.
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

      {/* OUTCOMES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Possible Outcomes
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Digital work that leads somewhere.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The exact result depends on the challenge, but the objective is
              always to connect digital activity to a practical organizational
              outcome.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <h3 className="text-xl font-bold">
                  {outcome.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS + DIGITAL CONNECTION */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5FC9E6]">
                Business
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Start with the business objective.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                Understand what the organization is trying to improve,
                create, change, or achieve before deciding which digital
                capabilities are required.
              </p>

              <Link
                href="/business/services"
                className="mt-7 inline-flex text-sm font-semibold text-[#5FC9E6]"
              >
                Explore Business Services →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Digital
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Then bring in the right technology.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Nexus Hub Digital can provide the websites, software,
                platforms, commerce, integrations, and technical
                capabilities needed to support the business direction.
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
              From business opportunity to digital action.
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
                Digital business work may benefit from strategic,
                consulting, or creative support depending on the
                organization&apos;s goals.
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
                Practical guidance for understanding challenges,
                opportunities, and useful next steps.
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
                Strategic support for planning growth, change, and
                long-term organizational direction.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Service →
              </span>
            </Link>

            <Link
              href="/business/services/brand-creative"
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                Brand &amp; Creative Services
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Creative support that strengthens communication,
                identity, and audience-facing experiences.
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
            Digital Business Services
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have a business opportunity that could be improved through digital?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us what you are trying to improve, launch, or grow,
            and let&apos;s explore the right business and digital approach.
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