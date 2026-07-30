import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Bot, ShieldCheck, Activity } from "lucide-react";
import { Reveal, SectionHeading, Particles } from "@/components/site/motion-kit";
import { BrandButton } from "@/components/site/BrandButton";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Magnertia Private Limited" },
      {
        name: "description",
        content:
          "Magnertia Private Limited is an Indian deep-tech company building autonomous EV charging and wireless power transfer technology.",
      },
      { property: "og:title", content: "About — Magnertia Private Limited" },
      { property: "og:description", content: "Our timeline, vision and engineering philosophy." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const timeline = [
  { year: "2023", body: "Magnertia Private Limited incorporated in Bengaluru." },
  { year: "2024", body: "First 11 kW wireless platform certified and field tested." },
  { year: "2025", body: "Robotic autonomous arm enters commercial fleet pilots." },
  { year: "2026", body: "Depot-scale 120 kW dynamic charging platform released." },
];

const steps = [
  { n: "01", title: "Detect", body: "Sensors and cameras identify the vehicle and confirm alignment." },
  { n: "02", title: "Decide", body: "Edge AI selects the optimal power curve for the battery state." },
  { n: "03", title: "Deliver", body: "Resonant transfer or the robotic arm delivers energy safely." },
  { n: "04", title: "Report", body: "Every session streams to the cloud for billing and diagnostics." },
];

const highlights = [
  { title: "AI", body: "Predictive power curves that protect battery health.", icon: Cpu },
  { title: "Automation", body: "Zero manual steps from arrival to full charge.", icon: Bot },
  { title: "Safety", body: "F.O.D., thermal and electrical protection at all times.", icon: ShieldCheck },
  { title: "Monitoring", body: "Live telemetry and remote diagnostics, 24/7.", icon: Activity },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16">
        <div className="pointer-events-none absolute -top-32 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-accent/12 blur-[150px]" />
        <Particles count={18} />
        <div className="shell relative">
          <SectionHeading
            eyebrow="About Magnertia"
            title="An Indian deep-tech company rebuilding how vehicles take energy"
            description="We design power electronics, robotics and software in-house so that charging becomes invisible infrastructure — reliable, safe and completely autonomous."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="shell grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.07}>
              <div className="surface-card hover-lift h-full p-8">
                <p className="font-display text-3xl font-bold text-accent">{t.year}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-primary text-white">
        <div className="shell grid gap-14 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="glass-dark h-full rounded-3xl p-10">
              <h2 className="text-3xl text-white">Vision</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Every parking surface in the country quietly charging the vehicle above it — no
                cables, no queues, no thinking about it at all.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="glass-dark h-full rounded-3xl p-10">
              <h2 className="text-3xl text-white">Engineering Philosophy</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Safety is not a feature layer. Redundancy, thermal headroom and standards compliance
                are designed into the first schematic, not added before shipping.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="How It Works" title="Four moments, fully automated" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} direction="scale">
                <div className="surface-card hover-lift h-full p-8">
                  <span className="font-display text-4xl font-bold text-border">{s.n}</span>
                  <h3 className="mt-4 text-lg">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.07}>
                <div className="surface-card hover-lift group h-full p-8">
                  <div className="grid size-14 place-items-center rounded-2xl [background:var(--gradient-accent)] text-white transition-transform duration-500 group-hover:rotate-6">
                    <h.icon className="size-6" />
                  </div>
                  <h3 className="mt-6 text-lg">{h.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <BrandButton to="/contact" size="lg">
              Talk to our team
            </BrandButton>
          </div>
        </div>
      </section>
    </>
  );
}
