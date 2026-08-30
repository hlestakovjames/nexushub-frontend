import Link from 'next/link';

export default function DigitalPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Nexus Hub Digital
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Building Digital
              <br />
              Possibilities.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We design websites, software, platforms, and digital
              experiences that turn ideas into practical solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/digital/services"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Explore Services
              </Link>

              <Link
                href="/projects"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Digital Innovation
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Technology built around real needs.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nexus Hub Digital combines technology, design, and
              problem-solving to create digital products that are
              useful, scalable, and built for people.
            </p>
          </div>

          {/* CAPABILITIES */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-semibold text-[#1266B6]">
                01
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Websites
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Modern websites and digital experiences designed around
                your brand, audience, and objectives.
              </p>

              <Link
                href="/digital/services/web-development"
                className="mt-6 inline-block text-sm font-semibold text-[#1266B6]"
              >
                Explore →
              </Link>
            </article>

            <article className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-semibold text-[#1266B6]">
                02
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Software
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Custom software and applications designed to solve
                specific operational and business challenges.
              </p>

              <Link
                href="/digital/services/software-development"
                className="mt-6 inline-block text-sm font-semibold text-[#1266B6]"
              >
                Explore →
              </Link>
            </article>

            <article className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-semibold text-[#1266B6]">
                03
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Platforms
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Connected digital platforms that bring users,
                information, services, and opportunities together.
              </p>

              <Link
                href="/digital/services/digital-platforms"
                className="mt-6 inline-block text-sm font-semibold text-[#1266B6]"
              >
                Explore →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              How We Build
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From idea to digital product.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Every digital project begins with understanding the
              problem and ends with a solution designed to create
              measurable value.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <article className="rounded-2xl bg-white p-7">
              <span className="text-sm font-semibold text-[#1266B6]">
                01
              </span>

              <h3 className="mt-4 text-xl font-bold">
                Understand
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                We understand the idea, users, challenges, and desired
                outcome.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-7">
              <span className="text-sm font-semibold text-[#1266B6]">
                02
              </span>

              <h3 className="mt-4 text-xl font-bold">
                Design
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                We translate the requirements into a clear and useful
                digital experience.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-7">
              <span className="text-sm font-semibold text-[#1266B6]">
                03
              </span>

              <h3 className="mt-4 text-xl font-bold">
                Build
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                We develop the product using modern and scalable
                technologies.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-7">
              <span className="text-sm font-semibold text-[#1266B6]">
                04
              </span>

              <h3 className="mt-4 text-xl font-bold">
                Improve
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                We refine, maintain, and evolve the product as needs
                change.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Digital Projects
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Turning ideas into systems.
              </h2>
            </div>

            <Link
              href="/projects"
              className="text-sm font-semibold text-[#1266B6]"
            >
              View all projects →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Link
              href="/projects"
              className="group rounded-2xl bg-[#050A30] p-8 text-white transition hover:-translate-y-1 lg:p-10"
            >
              <p className="text-sm font-semibold text-[#5FC9E6]">
                Platforms
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                Digital platforms for real-world needs.
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-white/65">
                Explore platforms and systems developed within the
                Nexus Hub ecosystem.
              </p>

              <span className="mt-7 inline-block text-sm font-semibold text-[#5FC9E6] transition group-hover:translate-x-1">
                Explore Projects →
              </span>
            </Link>

            <Link
              href="/digital/services"
              className="group rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:shadow-lg lg:p-10"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                Services
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                Need a digital solution?
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-slate-600">
                From websites and software to digital platforms,
                let&apos;s build something useful together.
              </p>

              <span className="mt-7 inline-block text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Services →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Let&apos;s Build
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have an idea that could become a digital product?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us what you are trying to solve and let&apos;s explore
            what we can build together.
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