import Image from 'next/image';
import Link from 'next/link';

import AnimatedHero from '@/components/home/AnimatedHero';
import HorizontalShowcase from '@/components/home/HorizontalShowcase';
import { projectRecords } from '@/components/projects/project-data';

const focusAreas = [
  {
    number: '01',
    title: 'Technology & Digital Solutions',
    description:
      'Designing and developing websites, software, platforms and digital systems that address practical needs.',
    href: '/digital',
    label: 'Explore technology',
    accent: '#4FDCE8',
  },
  {
    number: '02',
    title: 'Innovation & Systems Thinking',
    description:
      'Exploring problems, connected systems and emerging possibilities, then shaping promising ideas into practical solutions.',
    href: '/about/approach',
    label: 'Explore our approach',
    accent: '#8B6CFF',
  },
  {
    number: '03',
    title: 'Media & Creativity',
    description:
      'Using visual communication, creative production and digital storytelling to share ideas and connect with audiences.',
    href: 'https://nexushub-media.vercel.app/',
    label: 'Explore Nexus Hub TV',
    accent: '#F59A52',
    external: true,
  },
  {
    number: '04',
    title: 'Business & Enterprise',
    description:
      'Bringing business thinking, creative capabilities and collaborative solutions together around organisational needs.',
    href: '/business',
    label: 'Explore business',
    accent: '#FFB84D',
  },
];

const capabilities = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Responsive websites and web platforms for businesses, organisations, institutions and initiatives.',
  },
  {
    number: '02',
    title: 'Mobile App Development',
    description:
      'Mobile application experiences shaped around user needs, workflows and practical use cases.',
  },
  {
    number: '03',
    title: 'Branding & Graphic Design',
    description:
      'Brand identity and visual communication that help ideas and organisations present themselves clearly.',
  },
];

const applications = [
  {
    code: 'APP-01',
    name: 'Nexus Hub Corporate Website',
    acronym: 'NH-WEB',
    description:
      'The public-facing home for corporate information, services, products, projects, publications, events and opportunities.',
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
      'A planned participation and connection space for people, organisations, communities, projects and opportunities.',
    status: 'Planned application',
    href: '/ecosystem',
    action: 'Explore the ecosystem',
  },
  {
    code: 'APP-03',
    name: 'Nexus Hub Corporate Workspace',
    acronym: 'NH-WORK',
    description:
      'A planned internal workspace for organisational operations, teams, projects, tasks and administration.',
    status: 'Planned application',
    href: '/ecosystem',
    action: 'Explore the ecosystem',
  },
  {
    code: 'APP-04',
    name: 'Nexus Hub TV',
    acronym: 'NH-TV',
    description:
      'The media arm for content, stories, programmes, productions and audience engagement.',
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
      'A planned learning environment for courses, programmes, lessons and learner progress.',
    status: 'Planned application',
    href: '/ecosystem',
    action: 'Explore the ecosystem',
  },
  {
    code: 'APP-06',
    name: 'Nexus Hub Administration Console',
    acronym: 'NH-ADMIN',
    description:
      'A planned internal control environment for identity, access, configuration, security and oversight.',
    status: 'Internal application',
    href: '/ecosystem',
    action: 'Explore the ecosystem',
  },
];

const discoveryLinks = [
  {
    number: '01',
    title: 'Products & Innovations',
    description: 'Discover products and solutions taking shape across the Nexus Hub ecosystem.',
    href: '/products',
  },
  {
    number: '02',
    title: 'Publications & Insights',
    description: 'Explore articles, perspectives, updates and knowledge shared by Nexus Hub.',
    href: '/publications',
  },
  {
    number: '03',
    title: 'News & Activities',
    description: 'Follow developments, engagements, events and activities connected to Nexus Hub.',
    href: '/news',
  },
  {
    number: '04',
    title: 'Opportunities',
    description: 'Find opportunities to participate, collaborate and connect with our work.',
    href: '/opportunities',
  },
];

const brandAccents = ['#8B6CFF', '#4FDCE8', '#0A4DA8', '#F59A52', '#FFB84D', '#050B33'];

export default function HomePage() {
  const featuredProjects = projectRecords.slice(0, 2);

  return (
    <main className="overflow-hidden bg-white text-[#050B33]">
      <AnimatedHero />

      {/* WHO WE ARE */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">Who We Are</p>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              A connected ecosystem built around ideas and action.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-600">
              Nexus Hub brings technology, creativity, media and business together to develop solutions,
              build digital products, share ideas and create opportunities for collaboration.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              We approach these areas as connected capabilities, while giving each activity, project and
              platform a clear purpose of its own.
            </p>
            <Link href="/about" className="mt-7 inline-flex font-bold text-[#0A4DA8] hover:text-[#050B33]">
              Discover Nexus Hub <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* AREAS OF FOCUS */}
      <section className="bg-[#F5F2FF]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">Our Areas of Focus</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Different disciplines. Connected possibilities.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              These focus areas describe the wider interests and capabilities that shape the Nexus Hub vision.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {focusAreas.map((area) => {
              const card = (
                <article className="h-full rounded-2xl border border-white bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
                  <span className="text-xs font-extrabold tracking-[0.16em]" style={{ color: area.accent }}>{area.number}</span>
                  <h3 className="mt-5 text-xl font-extrabold tracking-tight">{area.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{area.description}</p>
                  <span className="mt-6 inline-flex text-sm font-bold text-[#0A4DA8]">
                    {area.label} <span className="ml-2" aria-hidden="true">→</span>
                  </span>
                </article>
              );
              return 'external' in area && area.external ? (
                <a key={area.number} href={area.href} target="_blank" rel="noopener noreferrer">{card}</a>
              ) : (
                <Link key={area.number} href={area.href}>{card}</Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">What We Do</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Practical capabilities for real-world needs.
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Our current service capabilities bring together technical development and creative
                communication. Each engagement starts with understanding the need and defining the right scope.
              </p>
              <Link href="/digital" className="mt-7 inline-flex font-bold text-[#0A4DA8] hover:text-[#050B33]">
                Explore digital capabilities <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {capabilities.map((item) => (
                <div key={item.number} className="grid gap-3 py-7 sm:grid-cols-[64px_0.8fr_1.2fr] sm:items-start">
                  <span className="text-sm font-extrabold text-[#0A4DA8]">{item.number}</span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="bg-[#EFFBFC]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">Selected Work</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ideas put into practice.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                A look at selected digital projects and systems developed with organisations and initiatives.
              </p>
            </div>
            <Link href="/projects" className="shrink-0 font-bold text-[#0A4DA8] hover:text-[#050B33]">
              View all projects <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <article key={project.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[16/8] overflow-hidden bg-slate-200">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 hover:scale-105" />
                </div>
                <div className="p-7 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0A4DA8]">{project.client}</p>
                  <h3 className="mt-3 text-2xl font-extrabold">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{project.summary}</p>
                  <Link href={`/projects/${project.slug}`} className="mt-7 inline-flex font-bold text-[#0A4DA8] hover:text-[#050B33]">
                    Explore project <span className="ml-2" aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THE WIDER ECOSYSTEM */}
      <section className="bg-[#050B33] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4FDCE8]">The Nexus Hub Ecosystem</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Connected applications with distinct roles.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              The wider digital ecosystem is being developed as a set of purpose-led applications.
              Their availability is shown individually so planned and internal systems are not confused
              with services already available online.
            </p>
          </div>

          <div className="mt-12">
            <HorizontalShowcase
              label="Six applications in the Nexus Hub ecosystem"
              duration="ecosystem"
              dark
              items={applications.map((app, index) => ({
                id: app.code,
                eyebrow: app.acronym,
                title: app.name,
                description: app.description,
                href: app.href,
                action: app.action,
                external: app.external,
                accent: app.featured ? '#4FDCE8' : brandAccents[index],
                status: app.status,
              }))}
            />
          </div>
          <Link href="/ecosystem" className="mt-9 inline-flex rounded-lg border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
            Explore the ecosystem <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* DISCOVER */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">Discover More</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Stay informed. Find a way to connect.
            </h2>
          </div>
          <div className="mt-10">
            <HorizontalShowcase
              label="Products, publications, news and opportunities"
              duration="discovery"
              items={discoveryLinks.map((item, index) => ({
                id: item.number,
                eyebrow: `DISCOVER ${item.number}`,
                title: item.title,
                description: item.description,
                href: item.href,
                action: 'Explore',
                accent: brandAccents[index],
              }))}
            />
          </div>
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section className="bg-gradient-to-br from-[#050B33] via-[#0A4DA8] to-[#8B6CFF] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4FDCE8]">Create · Connect · Grow</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl">
            Have an idea worth building?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Whether you represent an organisation, have a project in mind, need a digital solution
            or want to explore a collaboration, start a conversation with Nexus Hub.
          </p>
          <Link href="/contact" className="mt-9 inline-flex rounded-lg bg-[#4FDCE8] px-7 py-3.5 text-sm font-bold text-[#050B33] transition hover:bg-white">
            Contact Nexus Hub
          </Link>
        </div>
      </section>
    </main>
  );
}
