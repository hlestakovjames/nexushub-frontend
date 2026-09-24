import Link from 'next/link';

const contactOptions = [
  {
    title: 'General Enquiries',
    description:
      'Questions about Nexus Hub, our ecosystem, platforms, initiatives, or how to connect with us.',
  },
  {
    title: 'Business & Partnerships',
    description:
      'Discuss partnerships, collaborations, business opportunities, strategy, services, or solutions.',
  },
  {
    title: 'Digital Projects',
    description:
      'Discuss websites, software, platforms, systems, digital products, and technology projects.',
  },
];

const contactDetails = [
  {
    type: 'Phone',
    label: 'Call us',
    value: '0728812649',
    href: 'tel:0728812649',
    icon: 'phone',
  },
  {
    type: 'WhatsApp',
    label: 'Message us',
    value: '0713290745',
    href: 'https://wa.me/254713290745',
    icon: 'whatsapp',
  },
  {
    type: 'Email',
    label: 'Email us',
    value: 'nexushubkenya@gmail.com',
    href: 'mailto:nexushubkenya@gmail.com',
    icon: 'email',
  },
];

function ContactIcon({ type }: { type: string }) {
  if (type === 'phone') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5.5A2.5 2.5 0 0 1 5.5 3h1.2a1.5 1.5 0 0 1 1.46 1.15l.72 3.1a1.5 1.5 0 0 1-.42 1.42L6.9 10.23a15.9 15.9 0 0 0 6.87 6.87l1.56-1.56a1.5 1.5 0 0 1 1.42-.42l3.1.72A1.5 1.5 0 0 1 21 17.3v1.2a2.5 2.5 0 0 1-2.5 2.5C10.49 21 3 13.51 3 5.5Z"
        />
      </svg>
    );
  }

  if (type === 'whatsapp') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L.1 24l6.28-1.65a11.88 11.88 0 0 0 5.7 1.45h.01c6.55 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.47-8.42Zm-8.44 18.3h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.88 9.88 0 1 1 8.37 4.62Zm5.42-7.4c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.23-.66.08-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.69-1.66-.94-2.27-.25-.6-.5-.52-.69-.53h-.58c-.2 0-.53.08-.81.38-.28.3-1.06 1.04-1.06 2.54s1.09 2.95 1.24 3.15c.15.2 2.15 3.28 5.2 4.6.73.32 1.3.51 1.75.65.74.23 1.41.2 1.94.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.5 6.5 8.5 6 8.5-6"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* Hero */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Contact Nexus Hub
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Let&apos;s start a conversation.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">
            Whether you have a question, an idea, a project, or an opportunity
            to collaborate, connect with Nexus Hub and let&apos;s explore what
            we can build together.
          </p>
        </div>
      </section>

      {/* Direct Contact */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Get in touch
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Choose the way that works for you.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Reach Nexus Hub directly by phone, WhatsApp, or email. For
              project and partnership enquiries, include enough information
              for us to understand what you would like to discuss.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {contactDetails.map((contact) => (
              <a
                key={contact.type}
                href={contact.href}
                target={contact.type === 'WhatsApp' ? '_blank' : undefined}
                rel={contact.type === 'WhatsApp' ? 'noreferrer' : undefined}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-[#5FC9E6] hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#050A30] text-[#5FC9E6]">
                  <ContactIcon type={contact.icon} />
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                  {contact.type}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {contact.label}
                </h3>

                <p className="mt-3 break-all text-slate-600 transition group-hover:text-[#1266B6]">
                  {contact.value}
                </p>

                <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Connect →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Areas */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              What can we help with?
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Connect with the right conversation.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nexus Hub works across digital, media, business, and ecosystem
              initiatives. Your enquiry can start with any of the areas below.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {contactOptions.map((option, index) => (
              <div
                key={option.title}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <span className="text-sm font-bold text-[#1266B6]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-4 text-2xl font-bold">{option.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Send an enquiry
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Tell us what you&apos;re working on.
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Use the form to share your enquiry, project, idea, or
                opportunity. Providing a little context helps us understand
                how best to respond.
              </p>

              <div className="mt-8 rounded-2xl bg-slate-50 p-6">
                <p className="text-sm font-semibold text-[#050A30]">
                  Prefer a direct conversation?
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Call us on{' '}
                  <a
                    href="tel:0728812649"
                    className="font-semibold text-[#1266B6] hover:underline"
                  >
                    0728812649
                  </a>{' '}
                  or WhatsApp{' '}
                  <a
                    href="https://wa.me/254713290745"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#1266B6] hover:underline"
                  >
                    0713290745
                  </a>
                  .
                </p>
              </div>
            </div>

            <form
              action="#"
              method="post"
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="full-name"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Full Name <span className="text-[#1266B6]">*</span>
                  </label>

                  <input
                    id="full-name"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1266B6] focus:ring-2 focus:ring-[#1266B6]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Email Address <span className="text-[#1266B6]">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1266B6] focus:ring-2 focus:ring-[#1266B6]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Phone / WhatsApp
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="e.g. 0712 345 678"
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1266B6] focus:ring-2 focus:ring-[#1266B6]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="organisation"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Organisation / Company
                  </label>

                  <input
                    id="organisation"
                    name="organisation"
                    type="text"
                    autoComplete="organization"
                    placeholder="Organisation name"
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1266B6] focus:ring-2 focus:ring-[#1266B6]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiry-type"
                    className="text-sm font-semibold text-slate-900"
                  >
                    I&apos;m contacting you about{' '}
                    <span className="text-[#1266B6]">*</span>
                  </label>

                  <select
                    id="enquiry-type"
                    name="enquiryType"
                    required
                    defaultValue=""
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-[#1266B6] focus:ring-2 focus:ring-[#1266B6]/15"
                  >
                    <option value="" disabled>
                      Select an enquiry type
                    </option>
                    <option value="general">General Enquiry</option>
                    <option value="digital">Digital Project</option>
                    <option value="business">Business / Partnership</option>
                    <option value="media">Media</option>
                    <option value="platform">Nexus Hub Platform</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="preferred-contact"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Preferred Contact Method
                  </label>

                  <select
                    id="preferred-contact"
                    name="preferredContact"
                    defaultValue=""
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-[#1266B6] focus:ring-2 focus:ring-[#1266B6]/15"
                  >
                    <option value="" disabled>
                      Select a preference
                    </option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Subject <span className="text-[#1266B6]">*</span>
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What would you like to discuss?"
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1266B6] focus:ring-2 focus:ring-[#1266B6]/15"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Message <span className="text-[#1266B6]">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    placeholder="Tell us about your enquiry, project, idea, or opportunity..."
                    className="mt-2 w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1266B6] focus:ring-2 focus:ring-[#1266B6]/15"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-[#1266B6] focus:ring-[#1266B6]"
                    />

                    <span className="text-sm leading-6 text-slate-600">
                      I agree that Nexus Hub may use the information provided
                      to respond to my enquiry.{' '}
                      <span className="text-[#1266B6]">*</span>
                    </span>
                  </label>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-[#050A30] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1266B6] sm:w-auto"
                  >
                    Send Enquiry →
                  </button>

                  <p className="mt-4 text-xs leading-5 text-slate-500">
                    The online enquiry submission will be connected to the
                    Nexus Hub communication system when the backend is
                    implemented.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Nexus Hub
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                Create. Connect. Grow.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                Have an idea, project, opportunity, or question? We&apos;re
                ready to hear from you.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#5FC9E6]"
            >
              Return to Nexus Hub →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
