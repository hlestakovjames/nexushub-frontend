import Link from 'next/link';

import RelatedServices from '@/components/digital/RelatedServices';

export default function WebDevelopmentPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <Link
              href="/digital/services"
              className="text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
            >
              ← Digital Services
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              Web Development
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Websites built to connect people with your organization.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We design and develop modern websites that communicate
              clearly, perform reliably, and provide meaningful
              experiences across devices.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Start a Web Project
              </Link>

              <Link
                href="/projects"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                What We Build
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Websites built around real goals.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We create websites that combine thoughtful design,
                reliable technology, clear content, and a strong user
                experience.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Whether it is an organization website, business
                platform, portfolio, media site, or custom web
                experience, we focus on building something useful,
                scalable, and easy to maintain.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Typical Projects
              </p>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li>• Organization and corporate websites</li>
                <li>• Business and service websites</li>
                <li>• Portfolio and personal websites</li>
                <li>• Media and publishing platforms</li>
                <li>• Landing pages and campaign websites</li>
                <li>• Custom web applications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              More than just a website.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ['Responsive Design', 'Experiences designed to work smoothly across phones, tablets, laptops, and desktops.'],
              ['Modern Technology', 'Reliable technologies selected around the requirements and long-term needs of each project.'],
              ['Performance', 'Fast, efficient experiences designed with performance and usability in mind.'],
              ['Content Structure', 'Clear information architecture that makes websites easier to navigate and understand.'],
              ['Scalability', 'A foundation that can grow as the organization, audience, and requirements evolve.'],
              ['Integration', 'Websites can connect with APIs, databases, authentication systems, and other digital services.'],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <h3 className="text-xl font-bold">{title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From idea to digital experience.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              ['01', 'Understand', 'We understand the idea, audience, goals, and requirements.'],
              ['02', 'Plan', 'We define the structure, technology, content, and user experience.'],
              ['03', 'Build', 'We design and develop the experience around the agreed requirements.'],
              ['04', 'Launch', 'We test, refine, deploy, and prepare the platform for continued growth.'],
            ].map(([number, title, description]) => (
              <div key={number}>
                <span className="text-sm font-semibold text-[#1266B6]">
                  {number}
                </span>

                <h3 className="mt-3 text-xl font-bold">{title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <RelatedServices
        services={[
          {
            title: 'UI/UX & Product Design',
            description:
              'User-focused interfaces and experiences designed to make digital products clear and easy to use.',
            href: '/digital/services/ui-ux-design',
          },
          {
            title: 'Digital Platforms',
            description:
              'Connected platforms that bring users, services, data, and workflows together.',
            href: '/digital/services/digital-platforms',
          },
          {
            title: 'Software Development',
            description:
              'Custom software systems designed around operational and organizational needs.',
            href: '/digital/services/software-development',
          },
        ]}
      />

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Start a Project
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have a website idea?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Tell us what you are building and let&apos;s explore how Nexus Hub
            can turn the idea into a practical digital experience.
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