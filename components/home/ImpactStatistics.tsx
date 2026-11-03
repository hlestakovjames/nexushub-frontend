"use client";

import { useEffect, useRef, useState } from "react";

const statistics = [
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 250, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "+", label: "Digital Solutions" },
  { value: 20, suffix: "+", label: "Industries Reached" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || started) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.45 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      const frame = window.requestAnimationFrame(() => setCount(value));
      return () => window.cancelAnimationFrame(frame);
    }

    const duration = 1800;
    let frame = 0;
    let startTime: number | null = null;
    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = window.requestAnimationFrame(animate);
    };
    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [started, value]);

  return <span ref={ref} aria-label={String(value) + suffix}>{count.toLocaleString()}{suffix}</span>;
}

export default function ImpactStatistics() {
  return (
    <section className="relative overflow-hidden bg-[#050B33] text-white">
      <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#8B6CFF]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#4FDCE8]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4FDCE8]">Nexus Hub at a Glance</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Ideas, people and possibilities in motion.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-8">
          {statistics.map((item) => (
            <div key={item.label} className="border-l-2 border-[#4FDCE8]/70 pl-5">
              <p className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                <CountUp value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-3 text-sm font-semibold text-white/65 sm:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
