import { createFileRoute } from "@tanstack/react-router";
import { Bot, Car, Zap, Smartphone, Wrench, Building2 } from "lucide-react";
import { Reveal, SectionHeading, Particles } from "@/components/site/motion-kit";
import { BrandButton } from "@/components/site/BrandButton";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Magnertia Turnkey Charging Deployment" },
      {
        name: "description",
        content:
          "Autonomous charging stations, multi-vehicle support, fast charging, app integration, maintenance and enterprise solutions from Magnertia.",
      },
      { property: "og:title", content: "Services — Magnertia" },
      { property: "og:description", content: "Turnkey autonomous charging from assessment to monitoring." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  { title: "Autonomous Charging Stations", body: "Turnkey robotic and wireless stations that operate without any human touch.", icon: Bot },
  { title: "Multi Vehicle Support", body: "One platform serving two-wheelers, cars, vans and heavy-duty vehicles.", icon: Car },
  { title: "Fast Charging", body: "High-power DC and resonant WPT delivering up to 30% faster sessions.", icon: Zap },
  { title: "App Integration", body: "White-labelled mobile control, scheduling, payments and live telemetry.", icon: Smartphone },
  { title: "Maintenance", body: "Predictive servicing with remote diagnostics and guaranteed uptime SLAs.", icon: Wrench },
  { title: "Enterprise Solutions", body: "Depot-scale rollouts with SCADA, OCPP and energy management integration.", icon: Building2 },
];

const timeline = [
  { n: "01", title: "Assessment", body: "Site survey, load study and vehicle profiling to size the deployment precisely." },
  { n: "02", title: "Installation", body: "Civil work, pad embedding and cabinet commissioning with zero downtime planning." },
  { n: "03", title: "Integration", body: "OCPP, fleet APIs, payments and mobile app onboarding for your operations team." },
  { n: "04", title: "Monitoring", body: "24/7 remote telemetry, predictive maintenance and continuous OTA improvement." },
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16">
        <div className="pointer-events-none absolute -top-32 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-accent/12 blur-[150px]" />
        <Particles count={18} />
        <div className="shell relative">
          <SectionHeading
            eyebrow="Services"
            title="From first survey to 24/7 autonomy"
            description="Magnertia delivers the entire charging lifecycle — hardware, software, installation and lifelong operation."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="shell grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <article className="surface-card hover-lift group h-full p-8">
                <div className="grid size-14 place-items-center rounded-2xl [background:var(--gradient-primary)] text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-6 text-lg">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad relative overflow-hidden bg-primary text-white">
        <div className="pointer-events-none absolute top-0 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-accent/20 blur-[160px]" />
        <div className="shell relative">
          <SectionHeading eyebrow="Turnkey Process" title="Four steps to autonomy" tone="dark" />
          <div className="relative mx-auto mt-20 max-w-3xl">
            <div className="absolute top-0 bottom-0 left-8 w-px bg-gradient-to-b from-accent/70 via-accent/30 to-transparent sm:left-1/2" />
            {timeline.map((t, i) => (
              <Reveal key={t.n} delay={i * 0.1} direction={i % 2 ? "right" : "left"}>
                <div className="relative mb-10 pl-20 sm:pl-0">
                  <span className="absolute top-6 left-8 z-10 grid size-4 -translate-x-1/2 place-items-center rounded-full bg-accent ring-6 ring-primary sm:left-1/2" />
                  <div
                    className={`glass-dark rounded-3xl p-7 sm:w-[46%] ${i % 2 ? "sm:ml-auto" : ""}`}
                  >
                    <span className="font-display text-3xl font-bold text-accent">{t.n}</span>
                    <h3 className="mt-3 text-xl text-white">{t.title}</h3>
                    <p className="mt-2 text-sm text-white/65">{t.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <BrandButton to="/contact" variant="accent" size="lg">
              Start your assessment
            </BrandButton>
          </div>
        </div>
      </section>
    </>
  );
}
