import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading, Particles } from "@/components/site/motion-kit";
import { BrandButton } from "@/components/site/BrandButton";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Magnertia Private Limited" },
      {
        name: "description",
        content:
          "Get in touch with Magnertia Private Limited for autonomous and wireless EV charging deployments, pilots and partnerships.",
      },
      { property: "og:title", content: "Contact — Magnertia" },
      { property: "og:description", content: "Talk to the Magnertia engineering and sales team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

const field =
  "w-full rounded-2xl border border-border bg-white/70 px-4 py-3.5 text-sm outline-none backdrop-blur-md transition-all placeholder:text-muted-foreground/70 focus:border-accent focus:shadow-[var(--shadow-glow)]";
const labelCls = "mb-2 block text-xs font-semibold tracking-[0.14em] text-primary/70 uppercase";

const faqs = [
  { q: "Which vehicles are supported?", a: "Two-wheelers, passenger EVs, commercial vans and heavy-duty trucks and buses — our platforms are vehicle agnostic." },
  { q: "How safe is wireless charging?", a: "Every system runs continuous foreign object detection, live object detection and dual-redundant thermal monitoring, aligned to SAE J2954." },
  { q: "What is the installation timeline?", a: "A typical site moves from assessment to live monitoring in four to eight weeks depending on civil work." },
  { q: "Do you support OCPP and fleet APIs?", a: "Yes. P11, R30 and F120 platforms ship with OCPP 2.0.1 and a documented fleet scheduling API." },
];

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    form.reset();
    toast.success("Message sent — we'll be in touch within one business day.");
  };

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16">
        <div className="pointer-events-none absolute -top-32 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-accent/12 blur-[150px]" />
        <Particles count={16} />
        <div className="shell relative">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build your charging future"
            description="Tell us about your site, fleet or partnership idea and our team will respond within one business day."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="shell grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal direction="left">
            <form onSubmit={submit} className="glass rounded-[28px] p-8 sm:p-10">
              <div className="grid gap-5">
                <div>
                  <label className={labelCls} htmlFor="fullName">Full Name</label>
                  <input id="fullName" name="fullName" className={field} placeholder="Jane Doe" />
                  {errors.fullName && <p className="mt-1.5 text-xs text-destructive">{errors.fullName}</p>}
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelCls} htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" className={field} placeholder="you@company.com" />
                    {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" className={field} placeholder="+91 ..." />
                    {errors.phone && <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label className={labelCls} htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} className={field} placeholder="How can we help?" />
                  {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
                </div>
                <BrandButton type="submit" size="lg" className="mt-2 w-full">
                  Send Message
                </BrandButton>
              </div>
            </form>
          </Reveal>

          <Reveal direction="right">
            <div className="flex h-full flex-col gap-6">
              <div className="surface-card p-8">
                <h3 className="text-xl">Company Information</h3>
                <ul className="mt-6 space-y-5 text-sm">
                  {[
                    { icon: Globe, label: "Website", value: COMPANY.website },
                    { icon: Phone, label: "Phone", value: COMPANY.phone },
                    { icon: Mail, label: "Email", value: COMPANY.email },
                    { icon: MapPin, label: "Location", value: COMPANY.location },
                  ].map((c) => (
                    <li key={c.label} className="flex gap-4">
                      <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                        <c.icon className="size-4.5" />
                      </div>
                      <div>
                        <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">{c.label}</p>
                        <p className="mt-0.5 font-medium text-primary">{c.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="surface-card relative grid min-h-56 flex-1 place-items-center overflow-hidden [background:var(--gradient-primary)]">
                <Particles count={12} />
                <div className="relative text-center text-white/80">
                  <MapPin className="mx-auto size-8 text-accent" />
                  <p className="mt-3 text-xs tracking-[0.22em] uppercase">Map · {COMPANY.location}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-28">
        <div className="shell max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Questions, answered" />
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="surface-card mt-12 px-6 py-2">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-display text-base font-semibold text-primary">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}
