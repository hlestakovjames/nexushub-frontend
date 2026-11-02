import Link from 'next/link';

import { projectRecords } from '@/components/projects/project-data';
import AnimatedHero from '@/components/home/AnimatedHero';

const applications = [
  {
    code: 'APP-01',
    name: 'Nexus Hub Corporate Website',
    acronym: 'NH-WEB',
    description:
      'The public face of Nexus Hub: corporate information, services, products, projects, publications, events and opportunities.',
    status: 'Current application',
    href: '/',
    action: 'You are here',
    featured: true,
  },
  {
    code: 'APP-02',
    name: 'Nexus Hub Ecosystem Portal',
    acronym: 'NH-PORTAL',
    description:
      'A participation and connection space for people, organisations, communities, projects, opportunities and collaboration.',
    status: 'Planned application',
    href: '/ecosystem',
    action: 'Explore the ecosystem',
  },
  {
    code: 'APP-03',
    name: 'Nexus Hub Corporate Workspace',
    acronym: 'NH-WORK',
    description:
      'The internal workspace for organisational operations, departments, teams, projects, tasks, finance and administration.',
    status: 'Planned application',
    href: '/ecosystem',
    action: 'Explore the ecosystem',
  },
  {
    code: 'APP-04',
    name: 'Nexus Hub TV',
    acronym: 'NH-TV',
    description:
      'The media application for channels, programmes, episodes, stories, productions, publishing and audience engagement.',
    status: 'Available online',
    href: 'https://nexushub-media.vercel.app/',
    action: 'Visit Nexus Hub TV',
    external: true,
  },
  {
    code: 'APP-05',
    name: 'Nexus Hub Learning',
    acronym: 'NH-LEARN',
    description:
      'A learning environment for courses, programmes, lessons, assessments, learner progress and certification.',
    status: 'Planned application',
    href: '/ecosystem',
    action: 'Explore the ecosystem',
  },
  {
    code: 'APP-06',
    name: 'Nexus Hub Administration Console',
    acronym: 'NH-ADMIN',
    description:
      'The central control environment for identity, access, governance, application configuration, security and oversight.',
    status: 'Internal application',
    href: '/ecosystem',
    action: 'Explore the ecosystem',
  },
];

const brandRotation = ['#8B6CFF', '#4FDCE8', '#0A4DA8', '#F59A52', '#FFB84D', '#050B33'];

const serviceAreas = [
  {
    number: '01',
    title: 'Digital Solutions',
    description:
      'Websites, software systems, digital platforms, application development, integrations and digital transformation.',
  },
  {
    number: '02',
    title: 'Business and Organisational Support',
    description:
      'Business advisory, organisational solutions, strategic support, process improvement and collaboration.',
  },
  {
    number: '03',
    title: 'Media and Content',
    description:
      'Media production, storytelling, creative content, digital publishing and audience-focused experiences.',
  },
  {
    number: '04',
    title: 'Creative and Brand Services',
    description:
      'Brand identity, visual communication, creative direction and digital experiences.',
  },
  {
    number: '05',
    title: 'Projects and Partnerships',
    description:
      'Collaborative initiatives, technology projects, implementation partnerships and tailored solutions.',
  },
];

const discoveryLinks = [
  {
    title: 'Products and Innovations',
    description:
      'Discover products, solutions and innovations developed within the Nexus Hub ecosystem.',
    href: '/products',
  },
  {
    title: 'Publications and Insights',
    description:
      'Explore organisational updates, articles, perspectives and published knowledge.',
    href: '/publications',
  },
  {
    title: 'Events and Activities',
    description:
      'Find activities, engagements and events connected to Nexus Hub and its ecosystem.',
    href: '/events',
  },
  {
    title: 'Opportunities',
    description:
      'Explore announcements, openings, calls for participation and collaboration opportunities.',
    href: '/opportunities',
  },
];

export default function HomePage() {
  const featuredProjects = projectRecords.slice(0, 2);

  return (
    <main className="overflow-hidden bg-white text-[#050B33]">
      {/* ANIMATED HERO */}
      <AnimatedHero />

      {/* INTRODUCTION */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              Who We Are
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              A connected ecosystem built around ideas and action.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              Nexus Hub is a technology, business and creative ecosystem
              focused on developing solutions, building platforms,
              producing media, supporting organisations and creating
              opportunities for collaboration.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Rather than treating every activity as a separate
              organisation or disconnected service, our ecosystem brings
              specialised capabilities together while giving each
              application a clear purpose.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex font-bold text-[#0A4DA8] hover:text-[#050B33]"
            >
              Discover Nexus Hub <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SIX APPLICATIONS */}
      <section className="bg-[#F5F2FF]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              The Ecosystem
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Six applications. Distinct roles. One ecosystem.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Each application serves a specialised purpose. Together,
              they support public discovery, participation, internal
              operations, media, learning and central administration.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {applications.map((app, index) => {
              const content = (
                <div
                  className={`flex h-full flex-col rounded-2xl border p-7 transition ${
                    app.featured
                      ? 'border-[#0A4DA8]/30 bg-[#050B33] text-white shadow-lg'
                      : 'border-slate-200 bg-white hover:-translate-y-1 hover:border-[#0A4DA8]/40 hover:shadow-lg'
                  }`}
                  style={!app.featured ? { borderTopColor: brandRotation[index % brandRotation.length], borderTopWidth: '3px' } : undefined}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className={`text-xs font-bold tracking-[0.14em] ${
                      app.featured ? 'text-[#4FDCE8]' : 'text-[#0A4DA8]'
                    }`}>
                      {app.code}
                    </span>
                    <span className={`rounded-full px-3 py-1 text-[10px] font-bold ${
                      app.featured
                        ? 'bg-white/10 text-[#4FDCE8]'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {app.status}
                    </span>
                  </div>

                  <p className={`mt-7 text-2xl font-extrabold tracking-tight ${
                    app.featured ? 'text-[#4FDCE8]' : 'text-[#0A4DA8]'
                  }`}>
                    {app.acronym}
                  </p>

                  <h3 className="mt-2 text-lg font-bold">
                    {app.name}
                  </h3>

                  <p className={`mt-4 flex-1 text-sm leading-7 ${
                    app.featured ? 'text-white/70' : 'text-slate-600'
                  }`}>
                    {app.description}
                  </p>

                  <span className={`mt-7 inline-flex items-center text-sm font-bold ${
                    app.featured ? 'text-[#4FDCE8]' : 'text-[#0A4DA8]'
                  }`}>
                    {app.action} <span className="ml-2">→</span>
                  </span>
                </div>
              );

              return app.external ? (
                <a
                  key={app.code}
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${app.action} (opens in a new tab)`}
                >
                  {content}
                </a>
              ) : (
                <Link key={app.code} href={app.href}>
                  {content}
                </Link>
              );
            })}
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-6 text-slate-500">
            Application availability is shown individually. Planned and
            internal applications are not presented as publicly launched
            services.
          </p>

          <Link
            href="/ecosystem"
            className="mt-7 inline-flex rounded-lg bg-[#050B33] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0A4DA8]"
          >
            Learn More About the Ecosystem
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              Services and Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Capabilities that work together.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We bring together technical, organisational and creative
              capabilities to help turn requirements into practical
              solutions.
            </p>
          </div>

          <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
            {serviceAreas.map((service, index) => (
              <div
                key={service.number}
                className="grid gap-4 py-7 sm:grid-cols-[70px_0.8fr_1.2fr] sm:items-start"
              >
                <span className="text-sm font-bold" style={{ color: brandRotation[index % brandRotation.length] }}>
                  {service.number}
                </span>
                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>
                <p className="leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/services"
            className="mt-8 inline-flex font-bold text-[#0A4DA8] hover:text-[#050B33]"
          >
            Explore our services <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-[#EFFBFC]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
                Selected Work
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Projects shaped around real needs.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Explore selected implementations and initiatives
                demonstrating how Nexus Hub applies technology and
                connected thinking in practice.
              </p>
            </div>

            <Link
              href="/projects"
              className="shrink-0 font-bold text-[#0A4DA8] hover:text-[#050B33]"
            >
              View all projects →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="aspect-[16/7] overflow-hidden bg-slate-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-7 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0A4DA8]">
                    {project.client}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {project.summary}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-7 inline-flex font-bold text-[#0A4DA8] hover:text-[#050B33]"
                  >
                    View case study <span className="ml-2">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOVERY */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              Discover More
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Stay informed. Find what matters.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {discoveryLinks.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-slate-200 border-t-4 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
                style={{ borderTopColor: brandRotation[index % brandRotation.length] }}
              >
                <span className="text-xs font-bold" style={{ color: brandRotation[index % brandRotation.length] }}>
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex text-sm font-bold text-[#0A4DA8] transition group-hover:translate-x-1">
                  Explore <span className="ml-2">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-[#050B33] via-[#0A4DA8] to-[#8B6CFF] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4FDCE8]">
            Create · Connect · Grow
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
            Have an idea worth building?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Whether you represent an organisation, have a project in
            mind, need a digital solution or want to explore a
            partnership, start a conversation with Nexus Hub.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-lg bg-[#4FDCE8] px-7 py-3.5 text-sm font-bold text-[#050B33] transition hover:bg-white"
          >
            Contact Nexus Hub
          </Link>
        </div>
      </section>
    </main>
  );
}
