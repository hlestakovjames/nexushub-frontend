import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              About Nexus Hub
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Connecting ideas.
              <br />
              Building possibilities.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Nexus Hub is a connected ecosystem built around media,
              digital innovation, and business.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A hub for ideas, creativity, and innovation.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Nexus Hub brings together different areas of creativity
                and technology under one connected ecosystem.
              </p>

              <p>
                Through media, digital technology, and business,
                we create platforms, services, and experiences that
                connect people with ideas and opportunities.
              </p>

              <p>
                Our approach is simple: identify meaningful ideas,
                build practical solutions, and create lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE DIRECTIONS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              What Nexus Hub Represents
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Three directions. One connected ecosystem.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <span className="text-sm font-semibold text-[#1266B6]">
                01
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Media
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                We tell stories, create conversations, and develop
                original media experiences that connect audiences
                with ideas and people.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <span className="text-sm font-semibold text-[#1266B6]">
                02
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Digital
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                We build websites, software, platforms, and digital
                experiences that solve practical problems.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <span className="text-sm font-semibold text-[#1266B6]">
                03
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Business
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                We provide services, solutions, and partnerships
                designed to help organizations and businesses move
                forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Our Vision
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                A connected ecosystem where ideas can grow.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                We envision a future where creativity, technology,
                media, and business work together to create meaningful
                opportunities and lasting impact.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Our Mission
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Turn ideas into meaningful possibilities.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                We connect people, ideas, technology, and opportunities
                through practical digital solutions, compelling media,
                and valuable business services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Work With Nexus Hub
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have an idea worth building?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Let&apos;s connect ideas, technology, and opportunities
            to create something meaningful.
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