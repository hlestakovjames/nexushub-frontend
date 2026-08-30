import Link from 'next/link';

const contactOptions = [
  {
    title: 'General Enquiries',
    description:
      'Questions about Nexus Hub, our work, platforms, or ecosystem.',
  },
  {
    title: 'Business',
    description:
      'Discuss consulting, strategy, services, solutions, or partnerships.',
  },
  {
    title: 'Digital',
    description:
      'Discuss websites, software, platforms, systems, and digital projects.',
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white text-[#050A30]">
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Contact
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            Let&apos;s start a conversation.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Tell us what you are working on, what you need, or how
            you would like to connect with Nexus Hub.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            {contactOptions.map((option) => (
              <div
                key={option.title}
                className="rounded-2xl border border-slate-200 p-8"
              >
                <h2 className="text-2xl font-bold">
                  {option.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {option.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Contact Form
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Full contact functionality will come next.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              The complete contact form, enquiry routing, notifications,
              and backend handling will be added when the communication
              system is implemented.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]"
            >
              Return to Nexus Hub →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}