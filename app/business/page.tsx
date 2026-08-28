import Link from 'next/link';

const focusAreas = [
  {
    number: '01',
    title: 'Business Consulting',
    description:
      'Practical guidance to help organizations understand challenges, evaluate opportunities, and make better business decisions.',
  },
  {
    number: '02',
    title: 'Strategy & Advisory',
    description:
      'Strategic thinking and advisory support for organizations planning growth, change, new initiatives, or long-term direction.',
  },
  {
    number: '03',
    title: 'Brand & Creative',
    description:
      'Brand, communication, and creative services that help organizations present themselves clearly and consistently.',
  },
  {
    number: '04',
    title: 'Digital Business',
    description:
      'Business-focused digital services that connect technology with operational, customer, and growth objectives.',
  },
  {
    number: '05',
    title: 'Partnerships',
    description:
      'Collaborative opportunities that bring together complementary capabilities, resources, networks, and ideas.',
  },
  {
    number: '06',
    title: 'Business Solutions',
    description:
      'Integrated approaches that combine services, strategy, technology, media, and partnerships around specific needs.',
  },
];

const principles = [
  {
    title: 'Understand the Need',
    description:
      'We start by understanding the organization, challenge, opportunity, and desired outcome.',
  },
  {
    title: 'Think Strategically',
    description:
      'We look beyond immediate tasks to consider the wider business context and long-term direction.',
  },
  {
    title: 'Build Practical Solutions',
    description:
      'Recommendations should lead to actions, services, systems, or partnerships that can actually be implemented.',
  },
  {
    title: 'Create Lasting Value',
    description:
      'The goal is sustainable improvement rather than short-term activity without a clear outcome.',
  },
];

export default function BusinessPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Nexus Hub Business
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Helping ideas become
              <br />
              stronger businesses.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Nexus Hub Business brings together consulting, strategy,
              creative services, digital business support, solutions,
              and partnerships to help organizations move forward.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/business/services"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Explore Services
              </Link>

              <Link
                href="/business/partnerships"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Partnerships
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
                The Business Direction
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Business thinking connected to practical action.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Businesses and organizations often need more than a
                single service. They may need strategic guidance,
                stronger communication, better processes, new
                partnerships, or a combination of several capabilities.
              </p>

              <p>
                Nexus Hub Business brings those capabilities together
                so organizations can approach challenges from a
                broader perspective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Capabilities that support organizations from different angles.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our business work can begin with a specific challenge or
              grow into a broader combination of services and solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <Link
                key={area.number}
                href={
                  area.title === 'Partnerships'
                    ? '/business/partnerships'
                    : '/business/services'
                }
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {area.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {area.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {area.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS VS DIGITAL */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5FC9E6]">
                Business
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Strategy, services, and opportunities.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                Business focuses on the organizational side of the
                equation: strategy, consulting, partnerships, creative
                work, growth, and business-oriented solutions.
              </p>

              <Link
                href="/business/services"
                className="mt-7 inline-flex rounded-md bg-[#5FC9E6] px-5 py-3 text-sm font-semibold text-[#050A30]"
              >
                Explore Business
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Digital
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Technology, products, and platforms.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Digital focuses on creating and connecting technology:
                websites, software, mobile applications, platforms,
                e-commerce, integrations, transformation, and technical
                consulting.
              </p>

              <Link
                href="/digital"
                className="mt-7 inline-flex rounded-md bg-[#050A30] px-5 py-3 text-sm font-semibold text-white"
              >
                Explore Digital
              </Link>
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
                Our Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Practical thinking with a long-term perspective.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-2xl bg-white p-7"
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

      {/* BUSINESS ECOSYSTEM */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              The Nexus Hub Ecosystem
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Business does not operate in isolation.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Business opportunities can intersect with digital
              technology, media, projects, and strategic partnerships.
              Nexus Hub brings these directions together when doing so
              creates greater value.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/digital"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                Digital
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Technology
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Build the systems and digital products behind the
                opportunity.
              </p>
            </Link>

            <Link
              href="/media"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                Media
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Stories &amp; Audiences
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect ideas with people through content,
                conversations, and media experiences.
              </p>
            </Link>

            <Link
              href="/business/partnerships"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                Partnerships
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Collaboration
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Bring complementary people, capabilities, and
                opportunities together.
              </p>
            </Link>
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
            Have a business challenge, opportunity, or idea?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us where you want to go, and let&apos;s explore the
            services, solutions, or partnerships that could help get
            you there.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/business/services"
              className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Explore Services
            </Link>

            <Link
              href="/contact"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}