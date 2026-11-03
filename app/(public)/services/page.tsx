import Link from 'next/link';
import { Code2, Smartphone, Palette, ArrowUpRight, Check } from 'lucide-react';

const services = [
  {
    id: 'web-development',
    number: '01',
    title: 'Web Development',
    icon: Code2,
    summary: 'Websites and web platforms designed around your organisation, audience, and goals.',
    description:
      'We design and develop responsive web experiences that help businesses, institutions, and initiatives establish their online presence, communicate clearly, and support their digital operations.',
    deliverables: [
      'Business and corporate websites',
      'Portfolio and personal websites',
      'Institutional and organisational websites',
      'E-commerce and booking experiences',
      'Custom web applications and portals',
    ],
    bestFor: 'Businesses, professionals, institutions, and organisations that need a purposeful web presence or a tailored online system.',
    accent: '#4FDCE8',
    emailSubject: 'Service Request: Web Development',
    emailBody: 'Hello Nexus Hub,\n\nI would like to request Web Development services.\n\nProject / organisation:\nWhat I need:\nPreferred timeline:\nBudget range (optional):\n\nPlease get in touch to discuss the requirements.\n',
  },
  {
    id: 'mobile-app-development',
    number: '02',
    title: 'Mobile App Development',
    icon: Smartphone,
    summary: 'Mobile application experiences shaped around user needs and practical use cases.',
    description:
      'We work on mobile application concepts and development with attention to the people who will use them, the tasks they need to complete, and how the application fits into a wider digital service or system.',
    deliverables: [
      'Android application development',
      'Mobile product planning and requirements',
      'User flows and interface implementation',
      'API and backend integration',
      'Testing, refinement, and iterative improvements',
    ],
    bestFor: 'Organisations and entrepreneurs exploring a mobile application for a defined service, workflow, or product idea.',
    accent: '#8B6CFF',
    emailSubject: 'Service Request: Mobile App Development',
    emailBody: 'Hello Nexus Hub,\n\nI would like to request Mobile App Development services.\n\nApp idea / organisation:\nIntended users:\nMain functions required:\nPreferred timeline:\nBudget range (optional):\n\nPlease get in touch to discuss the requirements.\n',
  },
  {
    id: 'branding-graphic-design',
    number: '03',
    title: 'Branding & Graphic Design',
    icon: Palette,
    summary: 'Visual identities and communication materials that help your organisation present itself clearly.',
    description:
      'We create visual communication assets that support how a brand, business, campaign, or initiative is recognised and understood. The work is guided by the purpose, audience, and context of each communication need.',
    deliverables: [
      'Brand identity and logo design',
      'Marketing and promotional graphics',
      'Social media design materials',
      'Posters, flyers, and banners',
      'Presentation and communication layouts',
    ],
    bestFor: 'New and growing brands, businesses, organisations, events, and initiatives that need consistent, effective visual communication.',
    accent: '#F59A52',
    emailSubject: 'Service Request: Branding & Graphic Design',
    emailBody: 'Hello Nexus Hub,\n\nI would like to request Branding & Graphic Design services.\n\nBrand / organisation:\nDesign materials needed:\nPurpose and target audience:\nPreferred timeline:\nBudget range (optional):\n\nPlease get in touch to discuss the requirements.\n',
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#050B33]">
      <section className="relative isolate overflow-hidden bg-[#050B33] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(79,220,232,0.18),transparent_32%),radial-gradient(circle_at_15%_90%,rgba(139,108,255,0.2),transparent_34%)]" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4FDCE8]">Nexus Hub · Services</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
            Practical digital and creative services.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
            We help turn organisational needs and ideas into digital experiences, useful applications,
            and clear visual communication. Every engagement begins with understanding what you need to achieve.
          </p>
          <Link href="#our-services" className="mt-9 inline-flex rounded-lg bg-[#4FDCE8] px-6 py-3.5 text-sm font-bold text-[#050B33] transition hover:bg-white">
            Explore our services <span className="ml-2" aria-hidden="true">↓</span>
          </Link>
        </div>
      </section>

      <section id="our-services" className="scroll-mt-24 bg-[#F5F2FF]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">What we offer</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Three service areas. One practical approach.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              These are Nexus Hub&apos;s current service capabilities. The exact scope, deliverables,
              timeline, and cost are discussed and agreed according to each project.
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              const mailto = `mailto:nexushubkenya@gmail.com?subject=${encodeURIComponent(service.emailSubject)}&body=${encodeURIComponent(service.emailBody)}`;
              return (
                <article key={service.id} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#050B33]" style={{ color: service.accent }}>
                      <Icon aria-hidden="true" size={32} strokeWidth={1.7} />
                    </div>
                    <span className="text-sm font-extrabold tracking-[0.16em] text-slate-400">{service.number}</span>
                  </div>
                  <h3 className="mt-7 text-2xl font-extrabold tracking-tight">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.summary}</p>
                  <a href={mailto} className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#050B33] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0A4DA8]">
                    Request this service <ArrowUpRight aria-hidden="true" size={17} />
                  </a>
                  <p className="mt-4 text-xs leading-5 text-slate-500">Opens an email draft addressed to Nexus Hub.</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">Service details</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Understand what each service can cover.</h2>
          </div>
          <div className="mt-12 space-y-7">
            {services.map((service) => {
              const Icon = service.icon;
              const mailto = `mailto:nexushubkenya@gmail.com?subject=${encodeURIComponent(service.emailSubject)}&body=${encodeURIComponent(service.emailBody)}`;
              return (
                <article id={service.id} key={service.id} className="scroll-mt-28 grid gap-8 rounded-3xl border border-slate-200 p-7 sm:p-9 lg:grid-cols-[0.75fr_1.25fr] lg:p-10">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#050B33]" style={{ color: service.accent }}>
                      <Icon aria-hidden="true" size={25} strokeWidth={1.7} />
                    </div>
                    <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.18em] text-[#0A4DA8]">Service {service.number}</p>
                    <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">{service.title}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
                    <a href={mailto} className="mt-7 inline-flex items-center gap-2 font-bold text-[#0A4DA8] hover:text-[#050B33]">
                      Request this service <ArrowUpRight aria-hidden="true" size={17} />
                    </a>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">Possible scope</h4>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                          <Check aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-[#0A4DA8]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 rounded-2xl bg-[#F5F2FF] p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0A4DA8]">Who this may be for</p>
                      <p className="mt-2 leading-7 text-slate-700">{service.bestFor}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#050B33] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4FDCE8]">Start with your needs</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">Not sure which service is right?</h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/70">Tell us what you are trying to achieve. We can discuss the requirements and determine a suitable scope together.</p>
          </div>
          <Link href="/contact?channel=service#contact-form" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#4FDCE8] px-6 py-3 text-sm font-bold text-[#050B33] transition hover:bg-white">
            Discuss your requirements <ArrowUpRight aria-hidden="true" size={17} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}
