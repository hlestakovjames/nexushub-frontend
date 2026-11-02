"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Technology · Digital Solutions",
    title: "Empowering businesses through innovative digital solutions.",
    description:
      "We design and develop digital experiences, platforms and software solutions that help turn ideas and requirements into practical outcomes.",
    image: "/images/hero/hero-digital.jpeg",
    imageAlt: "Digital technology workspace representing Nexus Hub's technology capabilities",
    imageLabel: "Technology that moves ideas forward",
    primaryLabel: "Explore our capabilities",
    primaryHref: "/services",
    secondaryLabel: "Work with us",
    secondaryHref: "/contact",
    accent: "#4FDCE8",
  },
  {
    eyebrow: "Business · Collaboration",
    title: "Connecting people, organisations and possibilities.",
    description:
      "We bring together business thinking, digital tools and collaborative approaches to support organisations and meaningful initiatives.",
    image: "/images/business/Collaborative Team Dashboard Presentation.png",
    imageAlt: "Collaborative team reviewing a shared digital workspace",
    imageLabel: "Better outcomes through collaboration",
    primaryLabel: "Discover Nexus Hub",
    primaryHref: "/about",
    secondaryLabel: "Start a conversation",
    secondaryHref: "/contact",
    accent: "#8B6CFF",
  },
  {
    eyebrow: "Innovation · Systems Thinking",
    title: "Exploring ideas. Building what comes next.",
    description:
      "We are interested in how systems, emerging technologies and creative problem-solving can become useful products and solutions.",
    image: "/images/digital/Futuristic Holographic Network Workspace.png",
    imageAlt: "Visualisation of a connected digital network",
    imageLabel: "Ideas shaped into new possibilities",
    primaryLabel: "Explore our ecosystem",
    primaryHref: "/ecosystem",
    secondaryLabel: "View projects",
    secondaryHref: "/projects",
    accent: "#0A4DA8",
  },
  {
    eyebrow: "Media · Creativity",
    title: "Bringing ideas to life through creativity and media.",
    description:
      "From visual communication to digital storytelling, we use creative practice to make information, ideas and experiences more engaging.",
    image: "/images/media/Creative Branding Studio Setup.png",
    imageAlt: "Creative branding and design workspace",
    imageLabel: "Creative thinking. Clear communication.",
    primaryLabel: "Explore our work",
    primaryHref: "/projects",
    secondaryLabel: "Contact Nexus Hub",
    secondaryHref: "/contact",
    accent: "#F59A52",
  },
];

export default function AnimatedHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (isPaused || reducedMotion) return;
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [isPaused, reducedMotion, activeIndex]);

  const showSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <section
      aria-label="Nexus Hub highlights"
      aria-roledescription="carousel"
      className="relative overflow-hidden bg-[#050B33] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 82% 12%, rgba(139,108,255,.20) 0, transparent 30%), radial-gradient(ellipse at 12% 88%, rgba(79,220,232,.14) 0, transparent 32%), radial-gradient(ellipse at 95% 90%, rgba(245,154,82,.12) 0, transparent 22%)",
        }}
      />

      <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_1.02fr] lg:px-8 lg:py-24">
        <div key={`copy-${activeIndex}`} className="hero-slide-copy relative z-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em]" style={{ color: activeSlide.accent }}>
            Nexus Hub <span className="mx-2 text-white/35">/</span> {activeSlide.eyebrow}
          </p>

          <h1 className="mt-7 max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.65rem]">
            {activeSlide.title}
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
            {activeSlide.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={activeSlide.primaryHref}
              className="inline-flex items-center rounded-lg px-6 py-3.5 text-sm font-bold text-[#050B33] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              style={{ backgroundColor: activeSlide.accent }}
            >
              {activeSlide.primaryLabel}
              <span className="ml-2" aria-hidden="true">→</span>
            </Link>
            <Link
              href={activeSlide.secondaryHref}
              className="inline-flex items-center rounded-lg border border-white/35 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              {activeSlide.secondaryLabel}
            </Link>
          </div>

          <p className="mt-10 text-sm font-semibold text-white/65">
            {String(activeIndex + 1).padStart(2, "0")} <span className="mx-2 text-white/35">/</span> {String(slides.length).padStart(2, "0")}
            <span className="ml-3 font-normal text-white/55">Ideas, technology and connected possibilities.</span>
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto">
          <div className="absolute -inset-5 rounded-[2rem] opacity-70 blur-2xl" style={{ background: `linear-gradient(135deg, ${activeSlide.accent}30, transparent 65%)` }} />
          <div
            key={`image-${activeIndex}`}
            className="hero-slide-image relative aspect-[5/4] overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 shadow-[0_25px_70px_-28px_rgba(0,0,0,.65)]"
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.imageAlt}
              fill
              priority={activeIndex === 0}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B33]/65 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Nexus Hub</p>
                <p className="mt-2 max-w-sm text-lg font-bold leading-snug sm:text-xl">{activeSlide.imageLabel}</p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/15 text-lg backdrop-blur-sm" aria-hidden="true">↗</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2" role="group" aria-label="Choose hero slide">
              {slides.map((slide, index) => (
                <button
                  key={slide.eyebrow}
                  type="button"
                  onClick={() => showSlide(index)}
                  aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className="h-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A4DA8]"
                  style={{
                    width: index === activeIndex ? "2rem" : "0.625rem",
                    backgroundColor: index === activeIndex ? activeSlide.accent : "rgba(255,255,255,.42)",
                  }}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => showSlide(activeIndex - 1)}
                aria-label="Previous hero slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:border-white/70 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A4DA8]"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={() => showSlide(activeIndex + 1)}
                aria-label="Next hero slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#050B33] transition hover:border-[#0A4DA8] hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A4DA8]"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
          <p className="mt-3 text-right text-[11px] text-white/55">
            {reducedMotion ? "Automatic movement disabled by your motion preference" : isPaused ? "Paused while you interact" : "Automatically changing"}
          </p>
        </div>
      </div>
    </section>
  );
}
