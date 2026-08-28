import Link from 'next/link';

import RelatedServices from '@/components/digital/RelatedServices';

const capabilities = [
  'Online storefronts',
  'Product and service catalogues',
  'Shopping carts and checkout',
  'Order and customer management',
  'Payment and delivery integrations',
  'E-commerce administration systems',
];

const useCases = [
  'Retail businesses',
  'Service-based businesses',
  'Digital products',
  'Organization and institutional stores',
  'Event and merchandise sales',
  'Multi-product online platforms',
];

const process = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We understand your products, customers, sales process, business goals, and operational requirements.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'We define the store structure, catalogue, customer journey, integrations, and technical architecture.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We develop the storefront, commerce workflows, administration features, and required integrations.',
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'We test the customer experience, checkout flow, integrations, and platform readiness before deployment.',
  },
];

export default function EcommercePage() {
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
              E-commerce
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Digital commerce experiences built to help businesses sell and grow.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We build e-commerce experiences that connect products,
              customers, payments, orders, and business operations in
              one practical digital environment.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Start an E-commerce Project
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
                What We Build
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                More than an online catalogue.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                A strong e-commerce platform needs to support both
                the customer experience and the business operations
                behind it.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We design commerce systems around products,
                customers, payments, orders, fulfilment, and the
                wider workflow required to run the business.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1266B6]">
                Typical Commerce Features
              </p>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li>• Product and service catalogues</li>
                <li>• Customer accounts</li>
                <li>• Shopping cart and checkout</li>
                <li>• Order management</li>
                <li>• Payment integration</li>
                <li>• Administration dashboards</li>
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
              Commerce systems designed around your business.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From a simple online store to a more connected commerce
              platform, we can structure the experience around your
              specific needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <div
                key={capability}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {capability}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Designed as part of the complete customer and business
                  experience rather than as an isolated feature.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Use Cases
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Built for different ways of selling.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The right commerce experience depends on what you
                sell, who you serve, and how your business operates.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {useCases.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 p-6"
                >
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER JOURNEY */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Customer Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From discovery to completed order.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              [
                '01',
                'Discover',
                'Customers find products or services through a clear and accessible storefront.',
              ],
              [
                '02',
                'Evaluate',
                'Useful product information helps customers understand what is being offered.',
              ],
              [
                '03',
                'Purchase',
                'The cart and checkout experience makes completing a transaction straightforward.',
              ],
              [
                '04',
                'Fulfil',
                'Orders and customer information connect with the business workflow behind the purchase.',
              ],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {number}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
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
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From commerce idea to working platform.
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
              'Build the storefront and web experience behind your online business.',
            href: '/digital/services/web-development',
          },
          {
            title: 'Systems Integration',
            description:
              'Connect payments, services, business systems, and other digital tools.',
            href: '/digital/services/systems-integration',
          },
          {
            title: 'Digital Platforms',
            description:
              'Extend commerce into broader connected customer and business platforms.',
            href: '/digital/services/digital-platforms',
          },
        ]}
      />

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Build Your Commerce Experience
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to take your products or services online?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Let&apos;s design a commerce experience that works for your
            customers and your business.
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