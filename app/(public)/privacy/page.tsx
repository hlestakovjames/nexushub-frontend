import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="bg-white text-[#030721]">
      <section className="border-b border-slate-200 bg-[#030721] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5FC9E6]">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
            This policy explains how Nexus Hub may collect, use, and protect
            information when you interact with our website, services, and
            digital platforms.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="prose prose-slate max-w-none">
          <h2>1. Information we collect</h2>
          <p>
            We may collect information that you provide directly to us,
            including your name, contact details, organisation information,
            enquiries, and other information you choose to submit through our
            website.
          </p>
          <p>
            We may also receive limited technical information such as browser
            type, device information, pages visited, and general usage
            information when you interact with our website.
          </p>

          <h2>2. How we use information</h2>
          <p>
            Information may be used to respond to enquiries, provide requested
            services, communicate with users, improve our website and
            platforms, maintain security, and support our organisational
            operations.
          </p>

          <h2>3. Information sharing</h2>
          <p>
            We do not treat personal information as a product for sale. We may
            share information where necessary to provide a requested service,
            operate our systems, comply with applicable obligations, protect
            our rights, or respond to legitimate requests.
          </p>

          <h2>4. Data retention</h2>
          <p>
            We retain information only for as long as reasonably necessary for
            the purpose for which it was collected, operational requirements,
            dispute resolution, security, or other legitimate obligations.
          </p>

          <h2>5. Security</h2>
          <p>
            We take reasonable technical and organisational measures to help
            protect information against unauthorised access, loss, misuse, or
            disclosure. No internet-based system can be guaranteed to be
            completely secure.
          </p>

          <h2>6. Cookies and similar technologies</h2>
          <p>
            Our website or services may use cookies or similar technologies to
            support functionality, understand usage, improve performance, and
            maintain a better user experience.
          </p>

          <h2>7. Third-party websites and services</h2>
          <p>
            Our website may contain links to third-party websites, services, or
            platforms. Their privacy practices are governed by their own
            policies, and we encourage users to review those policies when
            visiting external services.
          </p>

          <h2>8. Your choices and enquiries</h2>
          <p>
            If you have questions about information submitted to Nexus Hub or
            would like to raise a privacy-related enquiry, please contact us.
          </p>

          <h2>9. Updates to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time as our website,
            services, or practices develop. The current version will be made
            available on this page.
          </p>

          <h2>10. Contact</h2>
          <p>
            For privacy-related enquiries, contact Nexus Hub through our{' '}
            <Link href="/contact">Contact page</Link> or email{' '}
            <a href="mailto:nexushubkenya@gmail.com">
              nexushubkenya@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
