import { createFileRoute } from "@tanstack/react-router";
import { Cpu, ShieldCheck, Sparkles, CheckCircle2, Activity, Compass, Target, Radio, Shield, Thermometer, Layers, Zap } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, SectionHeading, Particles, TiltCard } from "@/components/site/motion-kit";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Magnertia | Making EV Charging Simple" },
      {
        name: "description",
        content:
          "Magnertia is an Indian technology company focused on making electric vehicle charging smarter. Learn about our vision, mission, and why choose Magnertia.",
      },
      { property: "og:title", content: "About Us — Magnertia" },
      { property: "og:description", content: "Our vision, mission, philosophy and smart EV charging technology." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const whyChoosePillars = [
  {
    title: "Easy to use",
    desc: "Designed to remove cables, complicated steps, and manual effort. Charging is as effortless as parking.",
    icon: Sparkles,
  },
  {
    title: "Safe",
    desc: "Built with multi-layer foreign object detection, thermal safeguards, and international safety compliance.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable",
    desc: "Submersible IP68 sealed hardware and proven engineering built for extreme Indian weather and daily operation.",
    icon: CheckCircle2,
  },
  {
    title: "Smart",
    desc: "Cloud telemetry, user authentication, mobile app control, and intelligent energy load management.",
    icon: Cpu,
  },
  {
    title: "Future-ready",
    desc: "Engineered for autonomous electric vehicles, open charging protocols, and scalable fleet automation.",
    icon: Activity,
  },
];

const safetyStandards = [
  {
    title: "Foreign Object Detection (F.O.D.)",
    desc: "Active electromagnetic sensors detect metal coins, keys, or debris on the charge pad and instantly pause power transfer for 100% safety.",
    icon: Radio,
    badge: "Active Sensing",
  },
  {
    title: "Multi-Stage Thermal Management",
    desc: "Integrated temperature monitoring across all power modules automatically regulates current flow to prevent overheating during high-duty charging.",
    icon: Thermometer,
    badge: "Auto-Cooldown",
  },
  {
    title: "IP68 Submersible Sealing",
    desc: "Precision sealed pad enclosures engineered to operate underwater during heavy monsoons, dust storms, and extreme temperature variations.",
    icon: Shield,
    badge: "Weatherproof",
  },
  {
    title: "Smart Grid Load Balancing",
    desc: "Intelligent software dynamically adjusts power distribution across multiple charging bays to protect local transformer grids from overload spikes.",
    icon: Layers,
    badge: "Grid Safe",
  },
];

function AboutPage() {
  return (
    <div className="font-display antialiased text-primary selection:bg-accent/20 selection:text-accent">
      {/* ---------- HERO SECTION: Who We Are ---------- */}
      <section className="relative overflow-hidden pt-40 pb-20 tech-grid-bg">
        <div className="pointer-events-none absolute -top-32 left-1/2 size-[650px] -translate-x-1/2 rounded-full bg-accent/15 blur-[160px] energy-glow" />
        <Particles count={24} />
        <div className="shell relative">
          <SectionHeading
            eyebrow="Who We Are"
            title={<span className="block font-display tracking-tight text-3xl sm:text-5xl font-extrabold">Making Electric Vehicle Charging Smarter</span>}
            description="Magnertia is an Indian technology company focused on making electric vehicle charging smarter. We combine engineering, robotics, software, and innovation to build charging systems that are easy to use and ready for the future."
          />
        </div>
      </section>

      {/* ---------- VISION & MISSION (ULTRA-LUXURY ICONLESS DUAL GRID) ---------- */}
      <section className="pb-24 tech-grid-bg relative overflow-hidden font-display">
        <div className="shell grid gap-8 lg:grid-cols-2 items-stretch font-display">
          {/* Card 1: Our Vision (Satin Glass) */}
          <Reveal direction="left" className="flex flex-col font-display">
            <TiltCard intensity={8} floatAnimation={true} className="h-full flex flex-col font-display">
              <div className="surface-card group relative overflow-hidden rounded-[36px] border border-slate-200/90 bg-white/95 backdrop-blur-2xl shadow-2xl p-8 sm:p-12 flex flex-col justify-between h-full hover:border-accent/60 hover:shadow-[0_28px_60px_rgba(46,139,255,0.2)] transition-all duration-500 font-display">
                {/* Top Luxury Gradient Accent Bar */}
                <div className="h-2 w-full bg-gradient-to-r from-navy via-accent to-sky-400 absolute top-0 inset-x-0" />
                <div className="pointer-events-none absolute -top-20 -right-20 size-48 rounded-full bg-accent/15 blur-3xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10 font-display flex flex-col justify-between h-full">
                  <div>
                    {/* Header Badge (No Circle Icon) */}
                    <div className="border-b border-slate-100 pb-6 mb-8 font-display">
                      <span className="inline-flex items-center gap-2.5 rounded-full bg-accent/10 border border-accent/25 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-accent font-display shadow-sm">
                        <span className="size-2 rounded-full bg-accent animate-ping" />
                        01 // Our Vision
                      </span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-primary tracking-tight leading-snug">
                      Charging Available Everywhere
                    </h2>
                    {/* Animated Underline Beam */}
                    <div className="h-1 w-12 group-hover:w-28 bg-accent transition-all duration-500 rounded-full mt-3 mb-6" />

                    <blockquote className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 font-normal font-display border-l-2 border-accent pl-5 py-1">
                      “To make electric vehicle charging available everywhere and easy for everyone.”
                    </blockquote>
                  </div>

                  <div className="mt-10 rounded-2xl bg-accent/5 border border-accent/20 p-4.5 sm:p-5 flex items-center gap-3.5 backdrop-blur-md shadow-sm group-hover:border-accent/40 transition-colors font-display">
                    <span className="size-3 rounded-full bg-emerald-500 shrink-0 animate-pulse ring-4 ring-emerald-500/20" />
                    <span className="text-xs font-bold text-primary font-display leading-relaxed">
                      Expanding private & public charging networks across India.
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* Card 2: Our Mission (Deep Royal Navy Sovereign) */}
          <Reveal direction="right" className="flex flex-col font-display">
            <TiltCard intensity={8} floatAnimation={true} className="h-full flex flex-col font-display">
              <div className="surface-card group relative overflow-hidden rounded-[36px] border border-white/20 [background:var(--gradient-primary)] text-white p-8 sm:p-12 shadow-2xl flex flex-col justify-between h-full hover:border-accent/70 hover:shadow-[0_28px_60px_rgba(13,47,86,0.4)] transition-all duration-500 font-display">
                {/* Ambient Glow */}
                <div className="pointer-events-none absolute -top-20 -right-20 size-48 rounded-full bg-accent/25 blur-3xl group-hover:scale-125 transition-transform duration-700" />
                <Particles count={14} className="opacity-40" />

                <div className="relative z-10 font-display flex flex-col justify-between h-full">
                  <div>
                    {/* Header Badge (No Circle Icon) */}
                    <div className="border-b border-white/15 pb-6 mb-8 font-display">
                      <span className="inline-flex items-center gap-2.5 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-accent font-display backdrop-blur-md shadow-sm">
                        <span className="size-2 rounded-full bg-accent animate-ping" />
                        02 // Our Mission
                      </span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                      Confidence & Convenience
                    </h2>
                    {/* Animated Underline Beam */}
                    <div className="h-1 w-12 group-hover:w-28 bg-accent transition-all duration-500 rounded-full mt-3 mb-6" />

                    <blockquote className="mt-4 text-base sm:text-lg leading-relaxed text-white/95 font-normal font-display border-l-2 border-accent pl-5 py-1">
                      “To build smart charging technology that helps people adopt electric vehicles with confidence and convenience.”
                    </blockquote>
                  </div>

                  <div className="mt-10 rounded-2xl bg-white/10 border border-white/20 p-4.5 sm:p-5 flex items-center gap-3.5 backdrop-blur-md shadow-sm group-hover:border-accent/40 transition-colors font-display">
                    <span className="size-3 rounded-full bg-accent shrink-0 animate-pulse ring-4 ring-accent/30" />
                    <span className="text-xs font-bold text-white font-display leading-relaxed">
                      Combining hardware, software, robotics and energy intelligence.
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* ---------- WHY CHOOSE MAGNERTIA? ---------- */}
      <section className="pt-20 pb-24 bg-gradient-to-b from-slate-50 via-sky-50/20 to-white border-y border-slate-100 relative overflow-hidden font-display">
        <div className="pointer-events-none absolute top-1/2 left-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[160px]" />
        <div className="shell relative font-display">
          <SectionHeading
            eyebrow="Why Choose Magnertia?"
            title="We Believe Technology Should Make Life Easier"
            description="That’s why we focus on creating solutions that are easy to use, safe, reliable, smart, and future-ready."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {whyChoosePillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="flex flex-col">
                <TiltCard intensity={6} floatAnimation={true} className="h-full flex flex-col">
                  <div className="group surface-card hover-lift flex h-full flex-col justify-between rounded-[28px] p-7 border border-slate-200/90 bg-white/95 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-accent/40 transition-all duration-500 font-display">
                    <div className="font-display">
                      <div className="grid size-13 place-items-center rounded-2xl [background:var(--gradient-accent)] text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                        <p.icon className="size-6" />
                      </div>
                      <h3 className="mt-6 font-display text-lg font-bold text-primary group-hover:text-accent transition-colors tracking-tight">{p.title}</h3>
                      <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground font-display">{p.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SAFETY & TECHNOLOGY STANDARDS GRID ---------- */}
      <section className="py-24 bg-white relative overflow-hidden font-display">
        <div className="pointer-events-none absolute -top-32 right-0 size-[500px] rounded-full bg-accent/10 blur-[160px]" />
        <div className="shell relative font-display">
          <SectionHeading
            eyebrow="Technology & Safety Standards"
            title="Engineering Built for Zero Risk & Maximum Efficiency"
            description="Every Magnertia system undergoes rigorous multi-layer thermal, electrical, and foreign object safety certification."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto font-display">
            {safetyStandards.map((std, idx) => (
              <Reveal key={std.title} delay={idx * 0.08} className="flex flex-col">
                <TiltCard intensity={6} floatAnimation={true} className="h-full flex flex-col">
                  <div className="surface-card group hover-lift h-full rounded-[28px] p-7 border border-slate-200/90 bg-white/95 backdrop-blur-xl hover:border-accent/40 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between font-display">
                    <div className="font-display">
                      <div className="flex items-center justify-between mb-6 font-display">
                        <div className="size-12 rounded-2xl bg-accent/10 text-accent grid place-items-center border border-accent/20 group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-sm">
                          <std.icon className="size-5" />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20 font-display">
                          {std.badge}
                        </span>
                      </div>

                      <h3 className="font-display text-sm sm:text-base font-bold text-primary leading-snug group-hover:text-accent transition-colors tracking-tight">
                        {std.title}
                      </h3>
                      <p className="mt-3 text-xs text-muted-foreground leading-relaxed font-display">
                        {std.desc}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

