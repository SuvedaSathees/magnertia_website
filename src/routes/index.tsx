import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Zap,
  ShieldCheck,
  Smartphone,
  CloudSun,
  Radio,
  Cpu,
  Activity,
  Bot,
  Wifi,
  Bike,
  Car,
  Truck,
  Container,
  Home,
  Building2,
  Boxes,
  Plane,
  Factory,
  Network,
  Wallet,
  Wrench,
  ShieldAlert,
  Maximize2,
  BatteryCharging,
  Check,
  Minus,
} from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-robotic-charging.jpg";
import { BrandButton } from "@/components/site/BrandButton";
import { Reveal, SectionHeading, Counter, Particles } from "@/components/site/motion-kit";
import { InquiryModal } from "@/components/site/InquiryModal";
import { PRODUCTS } from "@/data/site";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Magnertia — The Future of Autonomous Charging" },
      {
        name: "description",
        content:
          "Magnertia builds fully autonomous EV charging stations and wireless power transfer systems. Park and let intelligent systems handle the rest.",
      },
      { property: "og:title", content: "Magnertia — The Future of Autonomous Charging" },
      {
        property: "og:description",
        content: "Autonomous EV charging and wireless charging technology, engineered in India.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const chips = [
  { icon: Zap, label: "30% Faster Charging" },
  { icon: ShieldCheck, label: "Foreign Object Detection" },
  { icon: Smartphone, label: "IoT Mobile Telemetry" },
];

const stats = [
  { value: 100, suffix: "%", label: "Autonomous" },
  { value: 24, suffix: "/7", label: "Available" },
  { value: 0, suffix: "", label: "Manual Steps" },
];

const wireless = [
  {
    title: "No cables, no wear",
    body: "Eliminate the single most failure-prone part of charging infrastructure. Nothing to plug, nothing to break, nothing to vandalise.",
    icon: Radio,
  },
  {
    title: "Park and charge",
    body: "Energy transfer begins the moment the vehicle settles over the pad. No apps to fumble with, no cards to tap, no cold hands.",
    icon: BatteryCharging,
  },
  {
    title: "Built for every climate",
    body: "Sealed, weather-proof coils operate through monsoon rain, dust storms and 50 °C heat without degradation.",
    icon: CloudSun,
  },
  {
    title: "Accessible by design",
    body: "Heavy cables are a barrier for many drivers. Wireless transfer makes charging effortless for everybody.",
    icon: ShieldCheck,
  },
];

const capabilities = [
  { title: "30% Speed Boost", body: "Adaptive resonance tuning delivers more usable energy per session.", icon: Zap },
  { title: "Any Weather", body: "IP68 sealed hardware certified from -10 °C to 55 °C operation.", icon: CloudSun },
  { title: "Foreign Object Detection", body: "Millisecond F.O.D. and live-object detection cut power instantly.", icon: ShieldAlert },
  { title: "Dynamic Charging", body: "Load-balanced power routing across every bay in the depot.", icon: Activity },
];

const safety = [
  { title: "F.O.D.", body: "Continuous foreign-object scanning across the entire coil surface." },
  { title: "SAE J2954", body: "Interoperability and emissions aligned to the global WPT standard." },
  { title: "Thermal Protection", body: "Dual-redundant thermal sensing with automatic power derating." },
];

const features = [
  { title: "Mobile Operated", body: "Start, stop, schedule and monitor every session from your phone.", icon: Smartphone },
  { title: "AI Powered", body: "Predictive models optimise power curves and battery health.", icon: Cpu },
  { title: "Range Anxiety Killer", body: "Opportunity charging everywhere you park keeps batteries topped.", icon: BatteryCharging },
  { title: "Techno Economical", body: "Lower installed cost per bay and dramatically lower servicing.", icon: Wallet },
  { title: "Agnostic Charging", body: "Works across two-wheelers, cars, vans and heavy-duty platforms.", icon: Boxes },
];

const technology = [
  { title: "Wireless Power", icon: Radio },
  { title: "IoT", icon: Wifi },
  { title: "AI", icon: Cpu },
  { title: "Telemetry", icon: Activity },
  { title: "Robotics", icon: Bot },
];

const vehicles = [
  { title: "2 Wheeler", body: "Scooters, motorcycles and delivery fleets — 1.2 kW pads in tight urban bays.", icon: Bike },
  { title: "Passenger EV", body: "Home and workplace charging up to 11 kW with auto alignment.", icon: Car },
  { title: "Commercial Fleet", body: "Depot cycling for vans and cabs with AI scheduling up to 60 kW.", icon: Truck },
  { title: "Heavy Duty", body: "Buses and trucks charged at 120 kW+ with zero driver intervention.", icon: Container },
];

const useCases = [
  { title: "Residential", icon: Home },
  { title: "Commercial", icon: Building2 },
  { title: "Fleet", icon: Truck },
  { title: "Drone", icon: Plane },
  { title: "Manufacturing", icon: Factory },
  { title: "Charge Point Operators", icon: Network },
];

const fleetAdvantages = [
  { title: "Save Money", body: "Up to 38% lower total cost of ownership per charging bay over five years.", icon: Wallet },
  { title: "Lower Maintenance", body: "No connectors, no cable replacement, no vandalism repair cycles.", icon: Wrench },
  { title: "Increase Safety", body: "Zero trip hazards, zero high-voltage handling by drivers or staff.", icon: ShieldCheck },
  { title: "Use Less Space", body: "Flush-mounted pads free up the entire footprint of a charging bay.", icon: Maximize2 },
];

const specRows = [
  { spec: "Output Power", w2: "1.2 kW", p11: "11 kW", r30: "30 kW DC", f120: "120 kW" },
  { spec: "Efficiency", w2: "92%", p11: "94%", r30: "95%", f120: "93%" },
  { spec: "Air Gap", w2: "40–90 mm", p11: "120–220 mm", r30: "N/A", f120: "180–300 mm" },
  { spec: "Standard", w2: "SAE J2954", p11: "J2954 WPT3", r30: "CCS2 / IEC 61851", f120: "J2954/2" },
  { spec: "Foreign Object Detection", w2: true, p11: true, r30: true, f120: true },
  { spec: "Autonomous Alignment", w2: false, p11: true, r30: true, f120: true },
  { spec: "OCPP 2.0.1", w2: false, p11: true, r30: true, f120: true },
  { spec: "Fleet Scheduling API", w2: false, p11: false, r30: true, f120: true },
];

function HomePage() {
  const [inquiry, setInquiry] = useState<string | null>(null);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="pointer-events-none absolute -top-32 -left-40 size-[620px] rounded-full bg-accent/12 blur-[150px]" />
        <div className="pointer-events-none absolute top-40 right-0 size-[520px] rounded-full bg-primary/10 blur-[160px]" />
        <Particles count={30} />

        <div className="shell relative grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal direction="blur">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-accent uppercase backdrop-blur-md">
                <span className="size-1.5 animate-pulse rounded-full bg-accent" />
                Deep-tech · Made in India
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-8 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.25rem]">
                The Future of <span className="gradient-text">Autonomous</span> Charging
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Magnertia Private Limited pioneers fully autonomous EV charging stations that
                eliminate manual intervention. Simply park and let our intelligent systems handle
                the rest.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                {chips.map((c) => (
                  <span
                    key={c.label}
                    className="glass hover-lift inline-flex items-center gap-2.5 rounded-full px-4 py-2.5 text-sm font-medium text-primary"
                  >
                    <c.icon className="size-4 text-accent" />
                    {c.label}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-4">
                <BrandButton to="/products" size="lg">
                  Explore Products
                </BrandButton>
                <BrandButton to="/about" variant="outline" size="lg" arrow={false}>
                  Learn More
                </BrandButton>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-14 grid max-w-xl grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="surface-card hover-lift p-5 text-center sm:p-6">
                    <p className="font-display text-3xl font-bold text-primary sm:text-4xl">
                      <Counter to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-1.5 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right visual */}
          <Reveal direction="scale" delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[42px] bg-accent/12 blur-3xl" />
              <motion.div
                className="surface-card relative overflow-hidden rounded-[32px] p-2"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={heroImage}
                  alt="Autonomous robotic arm charging an electric vehicle on a Magnertia wireless pad"
                  width={1280}
                  height={1280}
                  className="w-full rounded-[26px] object-cover"
                />
                <span className="pointer-events-none absolute inset-2 rounded-[26px] ring-1 ring-white/50 ring-inset" />
              </motion.div>

              {/* telemetry card */}
              <motion.div
                className="glass absolute -bottom-6 -left-4 w-64 rounded-3xl p-5 sm:-left-10"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold tracking-[0.16em] text-primary/60 uppercase">
                    Live Telemetry
                  </p>
                  <span className="size-2 animate-pulse rounded-full bg-accent" />
                </div>
                <p className="mt-3 font-display text-2xl font-bold text-primary">
                  <Counter to={87} suffix="%" />
                </p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
                  <motion.div
                    className="h-full rounded-full [background:var(--gradient-accent)]"
                    initial={{ width: "8%" }}
                    animate={{ width: "87%" }}
                    transition={{ delay: 1.1, duration: 2, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <p className="mt-3 text-xs text-muted-foreground">11.0 kW · 34 °C · Aligned</p>
              </motion.div>

              <motion.div
                className="glass absolute -top-5 -right-3 rounded-2xl px-4 py-3 sm:-right-8"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="flex items-center gap-2 text-xs font-semibold text-primary">
                  <ShieldCheck className="size-4 text-accent" /> F.O.D. Active
                </p>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- WHY GO WIRELESS ---------- */}
      <section className="section-pad relative">
        <div className="shell">
          <SectionHeading
            eyebrow="Why Go Wireless"
            title={<>Charging should disappear into the background</>}
            description="Plugs were an interim solution. Magnertia removes the cable entirely — and with it the friction, the failures and the wait."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {wireless.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08} direction={i % 2 ? "right" : "left"}>
                <article className="surface-card gradient-border hover-lift group h-full p-8">
                  <div className="grid size-14 place-items-center rounded-2xl [background:var(--gradient-primary)] text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <w.icon className="size-6" />
                  </div>
                  <h3 className="mt-6 text-xl">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CORE CAPABILITIES ---------- */}
      <section className="section-pad relative overflow-hidden">
        <div className="shell">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Engineered for the hardest conditions"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.07}>
                <article className="surface-card hover-lift group relative h-full overflow-hidden p-8">
                  <span className="absolute -top-16 -right-16 size-40 rounded-full bg-accent/8 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                  <motion.div
                    className="grid size-14 place-items-center rounded-2xl bg-accent/10 text-accent"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <c.icon className="size-6" />
                  </motion.div>
                  <h3 className="mt-6 text-lg">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PRODUCT PREVIEW ---------- */}
      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="Product Preview"
            title="Four platforms. One autonomous standard."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <article className="surface-card hover-lift group flex h-full flex-col overflow-hidden">
                  <div className="relative h-44 overflow-hidden [background:var(--gradient-primary)]">
                    <Particles count={12} />
                    <div className="absolute inset-0 grid place-items-center">
                      <motion.div
                        className="grid size-24 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
                        whileHover={{ scale: 1.08 }}
                      >
                        <span className="font-display text-xl font-bold text-white">{p.power}</span>
                      </motion.div>
                      <span className="pulse-ring absolute size-24 rounded-full border border-accent/60" />
                    </div>
                    <span className="absolute top-4 left-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.16em] text-white/85 uppercase">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="text-xl">{p.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                    <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-border pt-6 text-sm">
                      {p.specs.slice(0, 4).map((s) => (
                        <div key={s.label}>
                          <dt className="text-xs text-muted-foreground">{s.label}</dt>
                          <dd className="font-medium text-primary">{s.value}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <BrandButton size="sm" onClick={() => setInquiry(p.name)}>
                        Inquire Specs
                      </BrandButton>
                      <BrandButton to="/products" size="sm" variant="outline" arrow={false}>
                        Details
                      </BrandButton>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SAFETY ---------- */}
      <section className="section-pad relative overflow-hidden bg-primary text-white">
        <div className="pointer-events-none absolute -top-40 left-1/2 size-[700px] -translate-x-1/2 rounded-full bg-accent/20 blur-[160px]" />
        <Particles count={24} />
        <div className="shell relative">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
            <Reveal direction="left">
              <div className="relative mx-auto grid size-64 place-items-center">
                <span className="pulse-ring absolute inset-0 rounded-full border border-accent/50" />
                <span
                  className="pulse-ring absolute inset-0 rounded-full border border-accent/40"
                  style={{ animationDelay: "1.3s" }}
                />
                <motion.div
                  className="glass-dark grid size-44 place-items-center rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ShieldCheck className="size-20 text-accent" />
                </motion.div>
              </div>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="Safety First"
                title="Certified protection at every layer"
                description="Every Magnertia system runs three independent safety systems continuously, at millisecond resolution."
                align="left"
                tone="dark"
              />
              <div className="mt-12 space-y-4">
                {safety.map((s, i) => (
                  <Reveal key={s.title} delay={i * 0.1} direction="right">
                    <div className="glass-dark rounded-3xl p-6 transition-all duration-500 hover:border-accent/60">
                      <h3 className="text-lg text-white">{s.title}</h3>
                      <p className="mt-2 text-sm text-white/65">{s.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Features" title="Everything the grid of tomorrow needs" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.07}>
                <article className="surface-card hover-lift h-full p-8">
                  <f.icon className="size-8 text-accent" />
                  <h3 className="mt-6 text-lg">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </article>
              </Reveal>
            ))}
            <Reveal delay={0.35}>
              <div className="surface-card hover-lift flex h-full flex-col justify-between overflow-hidden p-8 [background:var(--gradient-primary)]">
                <h3 className="text-lg text-white">Ready to see it working?</h3>
                <BrandButton to="/contact" variant="ghostLight" size="sm" className="mt-6 self-start">
                  Book a demo
                </BrandButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- TECHNOLOGY ---------- */}
      <section className="section-pad relative overflow-hidden">
        <div className="shell">
          <SectionHeading
            eyebrow="Technology"
            title="Five disciplines, one intelligent stack"
            description="Magnertia's platform fuses power electronics with software autonomy — each layer feeding the next."
          />
          <div className="relative mt-20">
            <div className="absolute top-1/2 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent lg:block" />
            <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {technology.map((t, i) => (
                <Reveal key={t.title} delay={i * 0.09} direction="scale">
                  <div className="surface-card hover-lift group flex flex-col items-center p-8 text-center">
                    <motion.div
                      className="grid size-16 place-items-center rounded-full [background:var(--gradient-accent)] text-white"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <t.icon className="size-7" />
                    </motion.div>
                    <p className="mt-5 font-display text-sm font-semibold tracking-wide text-primary">
                      {t.title}
                    </p>
                    <span className="mt-2 text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- VEHICLE CATEGORIES ---------- */}
      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Vehicle Categories" title="Agnostic by architecture" />
          <div className="mt-16 space-y-5">
            {vehicles.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} direction="right">
                <article className="surface-card hover-lift group flex flex-col gap-6 p-8 sm:flex-row sm:items-center">
                  <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-secondary text-primary transition-all duration-500 group-hover:[background:var(--gradient-primary)] group-hover:text-white">
                    <v.icon className="size-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl">{v.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
                  </div>
                  <span className="font-display text-3xl font-bold text-border transition-colors duration-500 group-hover:text-accent">
                    0{i + 1}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TECHNICAL SPECIFICATIONS ---------- */}
      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Technical Specifications" title="Compare the platforms" />
          <Reveal delay={0.1}>
            <div className="surface-card mt-14 overflow-x-auto p-2">
              <table className="w-full min-w-[720px] border-collapse text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="p-5 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                      Specification
                    </th>
                    {["W2", "P11", "R30", "F120"].map((h) => (
                      <th key={h} className="p-5 font-display text-base text-primary">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {specRows.map((r) => (
                    <tr key={r.spec} className="border-t border-border transition-colors hover:bg-secondary/60">
                      <td className="p-5 font-medium text-primary">{r.spec}</td>
                      {[r.w2, r.p11, r.r30, r.f120].map((v, i) => (
                        <td key={i} className="p-5 text-muted-foreground">
                          {typeof v === "boolean" ? (
                            v ? (
                              <Check className="size-4.5 text-accent" />
                            ) : (
                              <Minus className="size-4.5 text-border" />
                            )
                          ) : (
                            v
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- USE CASES ---------- */}
      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Use Cases" title="Deployed wherever vehicles rest" />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 0.06} direction="scale">
                <div className="surface-card hover-lift group flex items-center gap-5 p-7">
                  <div className="grid size-12 place-items-center rounded-xl bg-accent/10 text-accent transition-transform duration-500 group-hover:scale-110">
                    <u.icon className="size-5.5" />
                  </div>
                  <p className="font-display font-semibold text-primary">{u.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FLEET ADVANTAGES ---------- */}
      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Fleet Advantages" title="The economics work from day one" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fleetAdvantages.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <article className="surface-card hover-lift group h-full p-8">
                  <div className="grid size-14 place-items-center rounded-2xl [background:var(--gradient-accent)] text-white transition-transform duration-500 group-hover:-translate-y-1">
                    <f.icon className="size-6" />
                  </div>
                  <h3 className="mt-6 text-lg">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="relative mt-24 overflow-hidden rounded-[32px] p-12 text-center [background:var(--gradient-primary)] sm:p-20">
              <Particles count={18} />
              <h2 className="relative text-3xl text-white sm:text-5xl">
                Let's electrify your site autonomously
              </h2>
              <p className="relative mx-auto mt-5 max-w-xl text-sm text-white/70 sm:text-base">
                Talk to our engineering team about a pilot deployment tailored to your fleet.
              </p>
              <div className="relative mt-10 flex flex-wrap justify-center gap-4">
                <BrandButton to="/contact" variant="accent" size="lg">
                  Contact Sales
                </BrandButton>
                <Link
                  to="/products"
                  className="inline-flex items-center rounded-full border border-white/25 px-8 py-4 text-sm text-white transition-colors hover:bg-white/10"
                >
                  View catalog
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <InquiryModal
        open={inquiry !== null}
        onClose={() => setInquiry(null)}
        product={inquiry ?? undefined}
      />
    </>
  );
}
