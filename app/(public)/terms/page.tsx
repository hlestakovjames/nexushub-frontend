import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="bg-white text-[#030721]">
      <section className="border-b border-slate-200 bg-[#030721] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5FC9E6]">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
            These terms provide the general conditions for using the Nexus Hub
            website and its publicly available content and services.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="prose prose-slate max-w-none">
          <h2>1. Acceptance of these terms</h2>
          <p>
            By accessing or using the Nexus Hub website, you agree to use the
            website responsibly and in accordance with these Terms of Use and
            applicable laws.
          </p>

          <h2>2. Website use</h2>
          <p>
            You may use this website for legitimate informational, business,
            professional, educational, or other lawful purposes. You must not
            use the website in a way that could damage, disrupt, compromise,
            or interfere with its operation or security.
          </p>

          <h2>3. Information submitted by users</h2>
          <p>
            Where the website provides forms or other communication features,
            users should provide information that is accurate and lawful.
            Users remain responsible for the content they submit.
          </p>

          <h2>4. Intellectual property</h2>
          <p>
            Unless otherwise stated, Nexus Hub branding, original written
            content, graphics, layouts, media, and other materials on this
            website belong to Nexus Hub or are used with appropriate
            permission. They may not be reproduced, redistributed, or used
            commercially without appropriate authorisation.
          </p>

          <h2>5. Third-party content and links</h2>
          <p>
            The website may reference or link to third-party websites,
            platforms, services, or resources. Such links are provided for
            convenience or informational purposes and do not necessarily mean
            that Nexus Hub controls or endorses those external services.
          </p>

          <h2>6. Website availability</h2>
          <p>
            We aim to keep the website available and accurate, but services,
            pages, content, and features may occasionally be changed,
            suspended, or unavailable due to maintenance, technical issues,
            updates, or other circumstances.
          </p>

          <h2>7. No professional advice</h2>
          <p>
            General information published on this website is provided for
            informational purposes. Where professional, legal, financial,
            technical, or other specialised advice is required, users should
            obtain advice appropriate to their circumstances.
          </p>

          <h2>8. Limitation of responsibility</h2>
          <p>
            To the extent permitted by applicable law, Nexus Hub is not
            responsible for losses arising from reliance on general website
            information, temporary website unavailability, or third-party
            services linked from the website.
          </p>

          <h2>9. Changes to these terms</h2>
          <p>
            Nexus Hub may update these Terms of Use when necessary. Continued
            use of the website after an update indicates acceptance of the
            revised terms.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these Terms of Use can be directed to Nexus Hub
            through our <Link href="/contact">Contact page</Link> or by email
            at{' '}
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
