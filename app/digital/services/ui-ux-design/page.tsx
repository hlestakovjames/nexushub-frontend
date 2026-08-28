import Link from 'next/link';

import RelatedServices from '@/components/digital/RelatedServices';

const capabilities = [
  {
    title: 'User Experience',
    description:
      'We map user journeys and simplify interactions so products feel natural and easy to navigate.',
  },
  {
    title: 'Interface Design',
    description:
      'Clear visual interfaces built around hierarchy, consistency, readability, and usability.',
  },
  {
    title: 'Information Architecture',
    description:
      'Content and functionality are organized so users can quickly find what they need.',
  },
  {
    title: 'Design Systems',
    description:
      'Reusable components and visual rules create consistency across larger digital products.',
  },
  {
    title: 'Responsive Design',
    description:
      'Interfaces are designed to adapt effectively across different screen sizes and devices.',
  },
  {
    title: 'Prototyping',
    description:
      'Interactive concepts help validate ideas and user flows before full development.',
  },
];

const productTypes = [
  'Websites',
  'Web applications',
  'Mobile product concepts',
  'Management dashboards',
  'Customer portals',
  'Digital platforms',
  'Internal systems',
  'Media experiences',
];

const principles = [
  {
    number: '01',
    title: 'Clarity',
    description:
      'Interfaces should make it easy for people to understand where they are, what they can do, and what happens next.',
  },
  {
    number: '02',
    title: 'Usability',
    description:
      'We design around real users, reducing unnecessary complexity and making important tasks easier to complete.',
  },
  {
    number: '03',
    title: 'Consistency',
    description:
      'Reusable patterns and design systems create a consistent experience across pages, features, and products.',
  },
  {
    number: '04',
    title: 'Purpose',
    description:
      'Every interface decision should support the product, organization, and experience it is intended to create.',
  },
];

const process = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We learn about the users, goals, context, and problems the product needs to solve.',
  },
  {
    number: '02',
    title: 'Structure',
    description:
      'We organize content, functionality, user journeys, and information architecture.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'We translate the structure into interfaces, interactions, and a coherent visual system.',
  },
  {
    number: '04',
    title: 'Refine',
    description:
      'We test ideas, identify friction, and refine the experience before and during development.',
  },
];

export default function UiUxDesignPage() {
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
              UI/UX &amp; Product Design
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Digital experiences designed around people.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We design intuitive interfaces and user experiences
              that help people understand, navigate, and interact
              with digital products more effectively.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Discuss a Design Project
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
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Our Design Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Design that makes technology easier to use.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Good digital products are not only functional. They
                should be clear, intuitive, accessible, and useful
                to the people interacting with them.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We combine user experience thinking with practical
                interface design to create digital products that are
                useful, understandable, and consistent.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Design Focus
              </p>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li>• User experience and information architecture</li>
                <li>• Interface and visual design</li>
                <li>• Responsive digital experiences</li>
                <li>• Design systems and reusable components</li>
                <li>• Product flows and interaction design</li>
                <li>• Prototypes and design validation</li>
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
              From user journeys to polished interfaces.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We approach design as part of product development—not
              as a layer added after the technology has already been
              built.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN PRINCIPLES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Design Principles
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Design with purpose, not decoration.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Every design decision should make the product
                clearer, easier to use, or more effective.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <span className="text-sm font-semibold text-[#1266B6]">
                    {principle.number}
                  </span>

                  <h3 className="mt-4 text-xl font-bold">
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

      {/* PRODUCT TYPES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Product Experiences
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Designing for different digital products.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We can apply the same user-centered thinking across
                different digital products and environments.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {productTypes.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
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
              Understand. Design. Validate. Refine.
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
      <RelatedServices
        services={[
          {
            title: 'Web Development',
            description:
              'Turn your designs into responsive and reliable digital experiences.',
            href: '/digital/services/web-development',
          },
          {
            title: 'Mobile App Development',
            description:
              'Create mobile experiences designed around users and real-world interaction.',
            href: '/digital/services/mobile-app-development',
          },
          {
            title: 'Digital Platforms',
            description:
              'Design experiences for connected products, services, and multi-user ecosystems.',
            href: '/digital/services/digital-platforms',
          },
        ]}
      />

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Design Your Product
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have a digital experience that needs a better design?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Let&apos;s turn your requirements into an experience
            that feels clear, purposeful, and easy to use.
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