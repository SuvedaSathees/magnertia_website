import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal, SectionHeading, Particles } from "@/components/site/motion-kit";
import { BrandButton } from "@/components/site/BrandButton";
import { InquiryModal } from "@/components/site/InquiryModal";
import { PRODUCTS } from "@/data/site";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Products — Magnertia Autonomous & Wireless Chargers" },
      {
        name: "description",
        content:
          "Explore the Magnertia catalog: W2 two-wheeler pad, P11 passenger EV, R30 robotic arm and F120 fleet platform with full specifications.",
      },
      { property: "og:title", content: "Products — Magnertia" },
      { property: "og:description", content: "Four autonomous charging platforms, fully specified." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
});

function ProductsPage() {
  const [inquiry, setInquiry] = useState<string | null>(null);

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16">
        <div className="pointer-events-none absolute -top-32 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-accent/12 blur-[150px]" />
        <Particles count={20} />
        <div className="shell relative">
          <SectionHeading
            eyebrow="Product Catalog"
            title="Premium hardware for every charging scenario"
            description="Each Magnertia platform ships with safety certification, IoT telemetry and over-the-air intelligence built in."
          />
        </div>
      </section>

      <section className="pb-28">
        <div className="shell grid gap-8 lg:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <article className="surface-card gradient-border hover-lift flex h-full flex-col overflow-hidden">
                <div className="relative h-52 overflow-hidden [background:var(--gradient-primary)]">
                  <Particles count={12} />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid size-28 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                      <span className="font-display text-2xl font-bold text-white">{p.power}</span>
                    </div>
                    <span className="pulse-ring absolute size-28 rounded-full border border-accent/60" />
                  </div>
                  <span className="absolute top-5 left-6 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.16em] text-white/85 uppercase">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8 sm:p-10">
                  <h2 className="text-2xl">{p.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                  <dl className="mt-8 grid flex-1 grid-cols-1 gap-x-8 gap-y-4 border-t border-border pt-8 text-sm sm:grid-cols-2">
                    {p.specs.map((s) => (
                      <div key={s.label} className="flex items-baseline justify-between gap-4">
                        <dt className="text-muted-foreground">{s.label}</dt>
                        <dd className="text-right font-medium text-primary">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <BrandButton className="mt-10 self-start" onClick={() => setInquiry(p.name)}>
                    Inquire Specs
                  </BrandButton>
                </div>
              </article>
            </Reveal>
          ))}
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
