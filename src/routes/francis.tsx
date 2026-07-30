import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Quote, Award, Target, Rocket, Users } from "lucide-react";
import { Reveal, SectionHeading, Particles } from "@/components/site/motion-kit";
import { BrandButton } from "@/components/site/BrandButton";
import { LogoMark } from "@/components/site/LogoMark";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/francis")({
  component: FrancisPage,
  head: () => ({
    meta: [
      { title: "Francis — Founder of Magnertia Private Limited" },
      {
        name: "description",
        content:
          "Meet Francis, founder of Magnertia Private Limited: vision, mission, journey and achievements behind India's autonomous charging platform.",
      },
      { property: "og:title", content: "Francis — Founder, Magnertia" },
      { property: "og:description", content: "The vision behind autonomous and wireless EV charging." },
      { property: "og:url", content: "/francis" },
    ],
    links: [{ rel: "canonical", href: "/francis" }],
  }),
});

const pillars = [
  { title: "Vision", body: "A world where every parking space quietly charges the vehicle above it.", icon: Target },
  { title: "Mission", body: "Remove every manual step between an EV and the energy it needs.", icon: Rocket },
  { title: "Innovation", body: "Resonant power transfer, computer vision and edge AI built in-house.", icon: Award },
  { title: "Leadership", body: "A multidisciplinary team of power, robotics and software engineers.", icon: Users },
];

const journey = [
  { year: "2019", title: "First prototype", body: "A garage-built 500 W resonant coil charging a converted scooter." },
  { year: "2021", title: "Robotics program", body: "Computer-vision guided arm reaches sub-25 second connection time." },
  { year: "2023", title: "Magnertia founded", body: "Incorporated as Magnertia Private Limited with a full engineering team." },
  { year: "2025", title: "Fleet pilots", body: "Depot deployments with commercial fleet operators across India." },
];

const achievements = [
  "National Deep-Tech Innovation Award finalist",
  "3 granted patents in resonant wireless power transfer",
  "SAE J2954 aligned interoperability validation",
  "10,000+ autonomous charging sessions completed",
];

function FrancisPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-24">
        <div className="pointer-events-none absolute -top-32 -left-32 size-[560px] rounded-full bg-accent/12 blur-[150px]" />
        <Particles count={20} />
        <div className="shell relative grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal direction="scale">
            <div className="surface-card relative grid aspect-4/5 place-items-center overflow-hidden rounded-[32px] [background:var(--gradient-primary)]">
              <Particles count={14} />
              <div className="relative text-center text-white/80">
                <LogoMark className="mx-auto h-20 w-20" color="#FFFFFF" />
                <p className="mt-6 text-xs tracking-[0.24em] uppercase">Founder Portrait</p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Founder"
              title={<>Francis — building charging that thinks for itself</>}
              description="Engineer, systems thinker and founder of Magnertia Private Limited. Francis has spent a decade at the intersection of power electronics, robotics and mobility."
              align="left"
            />
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <BrandButton href={COMPANY.linkedin} arrow={false}>
                  <Linkedin className="size-4" /> LinkedIn
                </BrandButton>
                <BrandButton to="/contact" variant="outline">
                  Contact Founder
                </BrandButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="shell grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <article className="surface-card hover-lift h-full p-8">
                <p.icon className="size-8 text-accent" />
                <h3 className="mt-6 text-lg">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-primary text-white">
        <div className="shell">
          <SectionHeading eyebrow="Journey" title="A decade in the making" tone="dark" />
          <div className="mx-auto mt-16 max-w-3xl space-y-5">
            {journey.map((j, i) => (
              <Reveal key={j.year} delay={i * 0.08} direction="right">
                <div className="glass-dark flex flex-col gap-4 rounded-3xl p-7 sm:flex-row sm:items-center">
                  <span className="font-display text-2xl font-bold text-accent sm:w-24">{j.year}</span>
                  <div>
                    <h3 className="text-lg text-white">{j.title}</h3>
                    <p className="mt-1.5 text-sm text-white/65">{j.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell grid gap-8 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="surface-card h-full p-10">
              <Quote className="size-9 text-accent" />
              <p className="mt-6 font-display text-2xl leading-snug text-primary">
                "Charging shouldn't be a chore you remember. It should be something that already
                happened while you were living your life."
              </p>
              <p className="mt-6 text-sm text-muted-foreground">Francis · Founder, {COMPANY.short}</p>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="surface-card h-full p-10">
              <h3 className="text-xl">Achievements & Recognition</h3>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                {achievements.map((a) => (
                  <li key={a} className="flex gap-3">
                    <Award className="mt-0.5 size-4.5 shrink-0 text-accent" />
                    {a}
                  </li>
                ))}
              </ul>
              <h3 className="mt-10 text-xl">Future Goals</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                100,000 autonomous charging points across India by 2030, and an open interoperability
                layer that lets any EV charge on any Magnertia surface.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="shell mt-8 grid gap-5 sm:grid-cols-3">
          {["Media Feature", "Keynote", "Lab Gallery"].map((g, i) => (
            <Reveal key={g} delay={i * 0.08} direction="scale">
              <div className="surface-card grid aspect-video place-items-center [background:var(--gradient-accent)] text-white">
                <p className="text-xs tracking-[0.2em] uppercase">{g}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
