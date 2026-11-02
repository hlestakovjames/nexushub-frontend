import Image from 'next/image';
import Link from 'next/link';
import { siteImages } from '@/config/site-images';

const pillars = [
  {
    number: '01',
    title: 'Digital',
    eyebrow: 'Technology & Digital Solutions',
    description:
      'We design and develop digital experiences and practical technology solutions, including websites, software, mobile applications, and connected platforms.',
    detail: 'Turning needs into useful digital systems.',
  },
  {
    number: '02',
    title: 'Media',
    eyebrow: 'Media & Communication',
    description:
      'Through Nexus Hub TV and its developing media direction, we explore content, storytelling, communication, and ways to connect with audiences.',
    detail: 'Connecting stories, people, and audiences.',
  },
  {
    number: '03',
    title: 'Business',
    eyebrow: 'Business & Enterprise',
    description:
      'We bring a business-minded perspective to the development of services, products, partnerships, and initiatives that can create practical value.',
    detail: 'Building ideas into sustainable opportunities.',
  },
];

const values = [
  {
    title: 'Curiosity',
    description:
      'We ask questions, explore how things work, and remain open to learning from different disciplines and experiences.',
  },
  {
    title: 'Integrity',
    description:
      'We value honesty, responsibility, transparency, and respect in our decisions and relationships.',
  },
  {
    title: 'Practical innovation',
    description:
      'We look beyond novelty to develop ideas and solutions that address real needs and can work in practice.',
  },
  {
    title: 'Collaboration',
    description:
      'We bring people, skills, and perspectives together because meaningful work is rarely built in isolation.',
  },
  {
    title: 'Excellence',
    description:
      'We pursue thoughtful, dependable work and keep improving the quality of what we create.',
  },
  {
    title: 'Long-term thinking',
    description:
      'We consider how products, systems, relationships, and capabilities can grow and remain useful over time.',
  },
];

const milestones = [
  {
    period: '2024',
    title: 'The first ideas',
    description:
      'An early interest in helping people access digital and administrative services began to take shape. A first graphic-design commission later helped turn creative work into a business idea.',
  },
  {
    period: 'January 2025',
    title: 'Brightstar Solutions',
    description:
      'The early business direction took the name Brightstar Solutions, with graphic design at its centre.',
  },
  {
    period: 'August 2025',
    title: 'Jimmy Tech Innovations',
    description:
      'The work expanded into design and web development under the name Jimmy Tech Innovations.',
  },
  {
    period: '22 November 2025',
    title: 'Nexus Hub',
    description:
      'Nexus Hub emerged through a rebrand of Jimmy Tech Innovations, carrying forward its existing work while establishing a new identity.',
  },
  {
    period: '2026 onward',
    title: 'A broader ecosystem vision',
    description:
      'The direction widened to connect technology, media, business, and innovation through a more integrated organisation and a growing set of products and initiatives.',
  },
];

const approach = [
  {
    number: '01',
    title: 'Understand the system',
    description:
      'Study the people, context, needs, relationships, and constraints around a problem or opportunity.',
  },
  {
    number: '02',
    title: 'Explore possibilities',
    description:
      'Research, question assumptions, and consider different approaches before settling on a direction.',
  },
  {
    number: '03',
    title: 'Design and develop',
    description:
      'Translate the chosen direction into a clear plan, experience, product, service, or working solution.',
  },
  {
    number: '04',
    title: 'Test and improve',
    description:
      'Learn from use and feedback, refine what has been created, and adapt as needs evolve.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-[#111827]">
      <section className="relative isolate overflow-hidden bg-[#050B33] text-white">
        <div className="absolute inset-0 -z-20">
          <Image
            src={siteImages.about.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050B33] via-[#050B33]/90 to-[#050B33]/55" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(79,220,232,0.16),transparent_32%),radial-gradient(circle_at_18%_85%,rgba(139,108,255,0.15),transparent_35%)]" />

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#4FDCE8]">
              About Nexus Hub
            </p>
            <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              Ideas connect.
              <br />
              Possibilities take shape.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
              Nexus Hub is a technology and innovation-driven organisation
              developing connected capabilities across digital solutions,
              media, and business.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex min-h-12 items-center rounded-md bg-[#4FDCE8] px-6 text-sm font-bold text-[#050B33] transition hover:bg-white"
              >
                Explore our work
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center rounded-md border border-white/30 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Connect with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
            Who we are
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            More than a collection of services.
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-slate-600">
          <p>
            Nexus Hub brings together complementary areas of work under one
            broader identity. Digital, Media, and Business are distinct
            pillars, each with its own purpose, while remaining connected
            through a shared interest in solving problems and creating value.
          </p>
          <p>
            We approach opportunities with a systems mindset: looking at how
            people, processes, technology, information, and organisations
            interact. This helps us consider not only an individual product or
            service, but also the wider context in which it needs to work.
          </p>
          <p>
            Innovation is the connecting discipline across these areas. It
            informs how we research, question, experiment, design, build, and
            improve.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              Our organisational structure
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Three pillars. One connected direction.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our pillars represent the main areas through which Nexus Hub
              develops its work. Innovation and systems thinking connect and
              strengthen all three.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#0A4DA8]">
                    {pillar.number}
                  </span>
                  <span className="h-2 w-10 rounded-full bg-gradient-to-r from-[#8B6CFF] to-[#4FDCE8]" />
                </div>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-[#0A4DA8]">
                  {pillar.eyebrow}
                </p>
                <h3 className="mt-3 text-3xl font-black text-[#050B33]">
                  {pillar.title}
                </h3>
                <p className="mt-5 leading-7 text-slate-600">
                  {pillar.description}
                </p>
                <p className="mt-7 border-t border-slate-100 pt-5 text-sm font-semibold text-[#050B33]">
                  {pillar.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-[#8B6CFF]/20 bg-white p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7253E8]">
              Connecting discipline
            </p>
            <h3 className="mt-2 text-2xl font-black text-[#050B33]">
              Innovation &amp; Systems Thinking
            </h3>
            <p className="mt-3 max-w-4xl leading-7 text-slate-600">
              This is not presented as a separate fourth operating pillar.
              It is a way of thinking and working across Digital, Media, and
              Business: investigating real needs, understanding systems,
              exploring possibilities, and developing practical responses.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#050B33] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4FDCE8]">
              Our purpose
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              Connect ideas. Create value. Enable progress.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              We want useful ideas to move beyond possibility and become
              solutions, experiences, and opportunities that make a
              meaningful difference.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4FDCE8]">
                Our vision
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                A connected ecosystem for ideas and innovation to grow.
              </h3>
              <p className="mt-4 leading-7 text-white/65">
                We envision an evolving organisation where technology,
                creativity, media, and enterprise connect to open meaningful
                possibilities.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4FDCE8]">
                Our mission
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                Turn understanding and ideas into practical solutions.
              </h3>
              <p className="mt-4 leading-7 text-white/65">
                We bring people, knowledge, creativity, and technology
                together to develop useful digital solutions, media
                experiences, products, and business initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
            Our story
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            An evolving journey, built one stage at a time.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Nexus Hub did not begin as the full ecosystem it is becoming.
            It developed through practical work, learning, and a gradual
            widening of the original ambition.
          </p>
        </div>
        <div className="mt-12 grid gap-0 md:grid-cols-[220px_1fr]">
          {milestones.map((milestone) => (
            <div
              key={milestone.period}
              className="grid gap-3 border-t border-slate-200 py-7 md:grid-cols-subgrid md:gap-8"
            >
              <p className="text-sm font-bold text-[#0A4DA8]">
                {milestone.period}
              </p>
              <div className="relative">
                <h3 className="text-xl font-bold text-[#050B33]">
                  {milestone.title}
                </h3>
                <p className="mt-2 max-w-3xl leading-7 text-slate-600">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              How we think and work
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Understand the system before shaping the solution.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We aim to combine research, clear thinking, creative
              exploration, and practical development. The process can adapt
              to the nature and scale of each opportunity.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-bold text-[#0A4DA8]">
                  {step.number}
                </span>
                <h3 className="mt-5 text-xl font-black text-[#050B33]">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
            What guides us
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Principles behind the work.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl border border-slate-200 p-7"
            >
              <h3 className="text-xl font-bold text-[#050B33]">
                {value.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DA8]">
              Looking ahead
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Building the foundations for a wider ecosystem.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our direction is to strengthen core capabilities, develop
              products and platforms, deepen our work across the three
              pillars, and create the organisational capacity for sustainable
              growth. This is a direction we are working toward, not a claim
              that every part of the vision is already operational.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#050B33] px-6 text-sm font-semibold text-white transition hover:bg-[#0A4DA8]"
          >
            View selected work
          </Link>
        </div>
      </section>

      <section className="bg-[#050B33] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:py-24 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4FDCE8]">
            Nexus Hub
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            Have an idea, a challenge, or an opportunity to explore?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Start a conversation with us and let&apos;s explore what can be
            created.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center rounded-md bg-[#4FDCE8] px-6 text-sm font-bold text-[#050B33] transition hover:bg-white"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
