import Link from 'next/link';

const pillars = [
  {
    number: '01',
    title: 'Digital',
    eyebrow: 'Technology & Innovation',
    description:
      'We build websites, software, platforms, mobile experiences, and digital systems that solve practical problems and create new possibilities.',
    href: '/digital',
    action: 'Explore Digital',
  },
  {
    number: '02',
    title: 'Media',
    eyebrow: 'Content & Audiences',
    description:
      'We create media experiences, original content, and audience platforms that connect people with stories, conversations, ideas, and communities.',
    href: '/media',
    action: 'Explore Media',
  },
  {
    number: '03',
    title: 'Business',
    eyebrow: 'Strategy & Growth',
    description:
      'We provide business services, solutions, advisory, creative capabilities, and partnerships designed to help organizations move forward.',
    href: '/business',
    action: 'Explore Business',
  },
];

const aboutLinks = [
  {
    title: 'Our Story',
    description:
      'Discover the journey behind Nexus Hub, the ideas that shaped it, and the direction we are building toward.',
    href: '/about/our-story',
  },
  {
    title: 'Mission & Vision',
    description:
      'Understand our purpose, the future we are working toward, and the principles that guide our decisions.',
    href: '/about/mission-vision',
  },
  {
    title: 'Our Approach',
    description:
      'Learn how we understand opportunities, develop ideas, build practical solutions, and evolve what we create.',
    href: '/about/approach',
  },
];

const peopleLinks = [
  {
    title: 'Our Team',
    description:
      'Meet the people and capabilities contributing to Nexus Hub across technology, media, business, and operations.',
    href: '/about/team',
  },
  {
    title: 'Leadership',
    description:
      'Meet the people providing direction, governance, strategic leadership, and long-term stewardship.',
    href: '/about/leadership',
  },
  {
    title: 'Careers',
    description:
      'Explore opportunities to learn, contribute, grow, and become part of the Nexus Hub ecosystem.',
    href: '/about/careers',
  },
];

const process = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understand the people, context, objectives, challenges, and opportunity behind the idea.',
  },
  {
    number: '02',
    title: 'Define',
    description:
      'Turn the opportunity into a clear direction, priorities, scope, and practical path forward.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Shape the experience, strategy, solution, and system before implementation begins.',
  },
  {
    number: '04',
    title: 'Build',
    description:
      'Create and integrate products, services, platforms, content, and experiences that work in practice.',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'Deliver the work, activate the experience, and put the solution into real-world use.',
  },
  {
    number: '06',
    title: 'Evolve',
    description:
      'Improve, scale, refine, and adapt what we build as people, needs, and opportunities change.',
  },
];

const values = [
  {
    title: 'Innovation',
    description:
      'We remain curious, experiment thoughtfully, and look for better ways to solve problems.',
  },
  {
    title: 'Integrity',
    description:
      'We value honesty, accountability, transparency, and responsible decision-making.',
  },
  {
    title: 'Collaboration',
    description:
      'We believe stronger outcomes come from bringing different people, skills, and perspectives together.',
  },
  {
    title: 'Excellence',
    description:
      'We aim for work that is useful, thoughtful, reliable, and worth building on.',
  },
  {
    title: 'Impact',
    description:
      'We focus on creating meaningful value rather than building for its own sake.',
  },
  {
    title: 'Adaptability',
    description:
      'We remain ready to learn, change direction, and evolve as opportunities develop.',
  },
];

const ecosystemAreas = [
  {
    title: 'Digital Ecosystem',
    description:
      'Digital products, technology services, software, platforms, integrations, and innovation capabilities.',
    href: '/digital',
  },
  {
    title: 'Media Ecosystem',
    description:
      'Nexus Hub TV, NHTV Football, NHTV Stories, NHTV Voices, and the wider content ecosystem.',
    href: '/media',
  },
  {
    title: 'Business Ecosystem',
    description:
      'Consulting, advisory, creative services, business solutions, partnerships, and commercial capabilities.',
    href: '/business',
  },
  {
    title: 'Platform Ecosystem',
    description:
      'A growing collection of Nexus Hub-owned, affiliated, partner, and externally connected platforms.',
    href: '/platforms',
  },
];

const direction = [
  {
    year: 'Build',
    description:
      'Strengthen capabilities, systems, credibility, and the foundations of the Nexus Hub ecosystem.',
  },
  {
    year: 'Expand',
    description:
      'Grow our clients, audiences, partners, products, services, and reach across new opportunities.',
  },
  {
    year: 'Productize',
    description:
      'Develop proprietary products, platforms, and repeatable solutions alongside our services.',
  },
  {
    year: 'Scale',
    description:
      'Increase operational capacity, geographic reach, and the scale of the ecosystem.',
  },
  {
    year: 'Lead',
    description:
      'Become a trusted digital innovation company connecting technology, media, business, and opportunity.',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(95,201,230,0.14),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(18,102,182,0.18),transparent_36%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#5FC9E6]">
              About Nexus Hub
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Connecting ideas.
              <br />
              Building possibilities.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">
              Nexus Hub is a connected digital innovation ecosystem built
              around media, technology, creativity, and business.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/about/our-story"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-bold text-[#050A30] transition hover:opacity-90"
              >
                Explore Our Story
              </Link>

              <Link
                href="/projects"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                A hub for ideas, creativity, technology, and opportunity.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Nexus Hub brings together different capabilities under one
                connected ecosystem. We work across digital technology,
                media, and business while allowing each area to develop its
                own identity and purpose.
              </p>

              <p>
                This structure allows us to build useful digital solutions,
                create meaningful media experiences, support organizations,
                and develop platforms that can connect people, ideas,
                audiences, and opportunities.
              </p>

              <p>
                Our role is not simply to deliver individual services. We
                aim to create practical value by connecting capabilities that
                can become more powerful when they work together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Core Pillars
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Three directions. One connected ecosystem.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Digital, Media, and Business operate as distinct capabilities
              while remaining connected through the Nexus Hub ecosystem.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#1266B6]/30 hover:shadow-xl"
              >
                <span className="text-sm font-bold text-[#1266B6]">
                  {pillar.number}
                </span>

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#1266B6]">
                  {pillar.eyebrow}
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  {pillar.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-600">
                  {pillar.description}
                </p>

                <Link
                  href={pillar.href}
                  className="mt-7 inline-flex text-sm font-bold text-[#1266B6] transition group-hover:translate-x-1"
                >
                  {pillar.action} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5FC9E6]">
                The Nexus Hub Ecosystem
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                One ecosystem. Multiple capabilities.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                Our different areas are designed to work independently when
                needed and together when an opportunity benefits from a
                broader combination of capabilities.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {ecosystemAreas.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:bg-white/10"
                >
                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/60">
                    {item.description}
                  </p>

                  <span className="mt-6 inline-flex text-sm font-bold text-[#5FC9E6] transition group-hover:translate-x-1">
                    Explore →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Capabilities that connect technology, content, and growth.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our work spans services, solutions, platforms, content, and
              strategic capabilities that can operate separately or combine
              around a shared opportunity.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-8">
              <h3 className="text-2xl font-black">Digital & Technology</h3>
              <ul className="mt-5 space-y-3 text-slate-600">
                <li>Website Development</li>
                <li>Software Development</li>
                <li>Mobile Applications</li>
                <li>Digital Platforms</li>
                <li>Systems Integration</li>
                <li>AI & Innovation</li>
                <li>UI/UX & Digital Transformation</li>
              </ul>
              <Link
                href="/digital"
                className="mt-7 inline-flex text-sm font-bold text-[#1266B6]"
              >
                Explore Digital →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 p-8">
              <h3 className="text-2xl font-black">Media & Content</h3>
              <ul className="mt-5 space-y-3 text-slate-600">
                <li>Nexus Hub TV</li>
                <li>NHTV Football</li>
                <li>NHTV Stories</li>
                <li>NHTV Voices</li>
                <li>Video & Digital Content</li>
                <li>Interviews & Podcasts</li>
                <li>Audience Development</li>
              </ul>
              <Link
                href="/media"
                className="mt-7 inline-flex text-sm font-bold text-[#1266B6]"
              >
                Explore Media →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 p-8">
              <h3 className="text-2xl font-black">Business & Strategy</h3>
              <ul className="mt-5 space-y-3 text-slate-600">
                <li>Business Consulting</li>
                <li>Strategy & Advisory</li>
                <li>Brand & Creative</li>
                <li>Digital Business</li>
                <li>Business Solutions</li>
                <li>Partnerships</li>
                <li>Corporate Services</li>
              </ul>
              <Link
                href="/business"
                className="mt-7 inline-flex text-sm font-bold text-[#1266B6]"
              >
                Explore Business →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                Our Purpose
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Connect ideas, people, technology, and opportunities.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <h3 className="text-xl font-black">Connect</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Bring people, ideas, capabilities, audiences, and
                  opportunities together.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <h3 className="text-xl font-black">Create</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Turn ideas into practical products, services, media,
                  experiences, and solutions.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <h3 className="text-xl font-black">Grow</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Create sustainable value that can evolve with people,
                  markets, and opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-[#050A30] p-8 text-white lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Our Vision
              </p>

              <h2 className="mt-4 text-3xl font-black">
                A connected ecosystem where ideas can grow.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                We envision a future where creativity, technology, media,
                and business work together to create meaningful
                opportunities and lasting impact.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-8 lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                Our Mission
              </p>

              <h2 className="mt-4 text-3xl font-black">
                Turn ideas into meaningful possibilities.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                We connect people, ideas, technology, and opportunities
                through practical digital solutions, compelling media,
                and valuable business services.
              </p>

              <Link
                href="/about/mission-vision"
                className="mt-7 inline-flex text-sm font-bold text-[#1266B6]"
              >
                Explore Mission &amp; Vision →
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                Our Values
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Principles that shape how we work.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <h3 className="text-xl font-black">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
              How We Work
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Understand the opportunity. Build practically. Keep evolving.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our approach combines strategy, creativity, technology, and
              continuous improvement rather than treating delivery as a
              single isolated moment.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-bold text-[#1266B6]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/about/approach"
            className="mt-10 inline-flex rounded-md border border-[#1266B6] px-5 py-3 text-sm font-bold text-[#1266B6] transition hover:bg-[#1266B6] hover:text-white"
          >
            Explore Our Approach
          </Link>
        </div>
      </section>

      {/* PEOPLE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
              The People Behind Nexus Hub
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              People build ecosystems.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our organization combines leadership, specialist capabilities,
              collaboration, and future talent across the areas in which
              Nexus Hub operates.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {peopleLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:border-[#1266B6]/30 hover:shadow-xl"
              >
                <h3 className="text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-bold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE ARE BUILDING */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5FC9E6]">
              What We Are Building
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              From individual capabilities to an interconnected ecosystem.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/65">
              Nexus Hub is designed to grow beyond individual services by
              connecting products, platforms, content, relationships, and
              capabilities across the wider ecosystem.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {ecosystemAreas.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <h3 className="text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GROWTH & DIRECTION */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
                Growth &amp; Direction
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Building today with a longer horizon in mind.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our direction is focused on strengthening the foundation,
                expanding the ecosystem, developing proprietary products,
                and building the capacity to serve a broader market.
              </p>
            </div>

            <div className="space-y-4">
              {direction.map((item, index) => (
                <div
                  key={item.year}
                  className="grid gap-5 rounded-2xl border border-slate-200 p-6 sm:grid-cols-[100px_1fr]"
                >
                  <div className="text-sm font-black uppercase tracking-[0.14em] text-[#1266B6]">
                    {String(index + 1).padStart(2, '0')} · {item.year}
                  </div>

                  <p className="leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY NEXUS HUB */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
              Why Nexus Hub
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              A connected way of thinking.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              {
                title: 'One Connected Ecosystem',
                description:
                  'Technology, media, business, platforms, and opportunities can connect through one broader ecosystem.',
              },
              {
                title: 'Practical Innovation',
                description:
                  'We focus on useful ideas and solutions that can work in real situations, not innovation for appearance alone.',
              },
              {
                title: 'Multidisciplinary Capability',
                description:
                  'Creative, technical, media, strategic, and business capabilities can work together around complex opportunities.',
              },
              {
                title: 'Long-Term Thinking',
                description:
                  'We build relationships, products, systems, and capabilities that can evolve rather than stop at delivery.',
              },
              {
                title: 'Local Roots, Broader Ambition',
                description:
                  'Built from Kenya with an ambition to grow across broader markets, partnerships, and opportunities.',
              },
              {
                title: 'Opportunity-Oriented',
                description:
                  'We remain open to partnerships, ideas, platforms, and collaborations that can create meaningful value.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <h3 className="text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1266B6]">
              Explore Nexus Hub
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Go deeper into the organization and ecosystem.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The About section gives the big picture. Explore the dedicated
              pages to understand our history, purpose, approach, people, and
              opportunities in greater depth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {aboutLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:border-[#1266B6]/30 hover:shadow-xl"
              >
                <h3 className="text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-bold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT / LIVE CONTENT */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-3">
            <Link
              href="/news"
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1266B6]">
                Latest
              </p>
              <h3 className="mt-3 text-2xl font-black">
                News
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Follow the latest developments, announcements, and updates
                from Nexus Hub.
              </p>
              <span className="mt-7 inline-flex text-sm font-bold text-[#1266B6] transition group-hover:translate-x-1">
                View News →
              </span>
            </Link>

            <Link
              href="/projects"
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1266B6]">
                Work
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Projects
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Explore examples of the solutions, systems, experiences,
                and work being developed across the ecosystem.
              </p>
              <span className="mt-7 inline-flex text-sm font-bold text-[#1266B6] transition group-hover:translate-x-1">
                View Projects →
              </span>
            </Link>

            <Link
              href="/platforms"
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1266B6]">
                Ecosystem
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Platforms
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Explore the growing collection of platforms connected to the
                Nexus Hub ecosystem.
              </p>
              <span className="mt-7 inline-flex text-sm font-bold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Platforms →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Work With Nexus Hub
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            Have an idea worth building?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Let&apos;s connect ideas, technology, media, business, and
            opportunities to create something meaningful.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-bold text-[#050A30] transition hover:opacity-90"
            >
              Start a Conversation
            </Link>

            <Link
              href="/projects"
              className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
