import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, ArrowLeft, Lock, FileText, CheckCircle2 } from "lucide-react";
import { Reveal, Particles } from "@/components/site/motion-kit";
import { COMPANY } from "@/data/site";
import { LogoMark } from "@/components/site/LogoMark";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${COMPANY.name}` },
      {
        name: "description",
        content: `Privacy Policy and data security guidelines for ${COMPANY.name} autonomous charging systems and IoT services.`,
      },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});

function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-[60px] lg:pt-40">
        <div className="pointer-events-none absolute -top-32 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-accent/12 blur-[150px]" />
        <Particles count={20} />
        <div className="shell relative max-w-4xl text-center">
          <Reveal>
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <ShieldCheck className="size-8" />
            </div>
            <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-primary sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-[60px]">
        <div className="shell max-w-3xl">
          <Reveal delay={0.1}>
            <div className="surface-card rounded-3xl p-8 sm:p-12 space-y-10 text-primary/85 leading-relaxed text-base">
              <div className="flex items-center gap-3 border-b border-border pb-6">
                <LogoMark className="h-12 w-12" />
                <div>
                  <h2 className="font-display text-lg font-bold text-primary">{COMPANY.name}</h2>
                  <p className="text-xs text-muted-foreground">{COMPANY.addressLine1} {COMPANY.addressLine2}</p>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">1. Introduction</h3>
                <p>
                  At {COMPANY.name} ("Magnertia", "we", "us", or "our"), we respect your privacy and are committed to protecting the personal data and telemetry information collected through our autonomous wireless charging hardware, mobile applications, and web services.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">2. Information We Collect</h3>
                <ul className="space-y-3 pl-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-1 size-4.5 shrink-0 text-accent" />
                    <span><strong>Account & Enquiry Information:</strong> Name, business email, phone number, and physical address provided during enquiry or account creation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-1 size-4.5 shrink-0 text-accent" />
                    <span><strong>Charging Telemetry Data:</strong> Output power levels, efficiency ratings, temperature telemetry, alignment data, and session durations collected by IoT sensors.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-1 size-4.5 shrink-0 text-accent" />
                    <span><strong>Vehicle & Station Identifiers:</strong> SAE J2954 standard alignment tokens, station serial numbers, and vehicle compatibility metadata.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">3. How We Use Your Information</h3>
                <p>
                  We utilize collected data solely for operating autonomous power sessions, facilitating AI load balancing across fleet stations, pushing over-the-air firmware updates, and improving safety diagnostics.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">4. Data Security & Storage</h3>
                <p>
                  All telemetry streams and account records are encrypted in transit via TLS 1.3 and stored in secure infrastructure. We do not sell, rent, or trade personal or telemetry information to third parties.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">5. Contact Us</h3>
                <p>
                  If you have any questions regarding this Privacy Policy, please contact our privacy compliance team at:
                </p>
                <div className="mt-4 rounded-2xl bg-secondary/50 p-5 text-sm space-y-2">
                  <p><strong>{COMPANY.name}</strong></p>
                  <p>{COMPANY.addressLine1}</p>
                  <p>{COMPANY.addressLine2}</p>
                  <p>Ph: {COMPANY.phone}</p>
                  <p>Email: {COMPANY.email}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-border flex justify-between items-center">
                <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
                  <ArrowLeft className="size-4" /> Back to Home
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
