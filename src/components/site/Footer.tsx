import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Youtube, Github, MapPin, Phone, Mail, Globe } from "lucide-react";
import { LogoMark } from "./LogoMark";
import { COMPANY, NAV_LINKS } from "@/data/site";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: COMPANY.linkedin },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      <div className="pointer-events-none absolute -top-40 -right-24 size-[520px] rounded-full bg-accent/20 blur-[140px]" />
      <div className="shell relative py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="h-11 w-11" color="#FFFFFF" />
              <div>
                <p className="font-display text-lg font-bold tracking-tight">{COMPANY.short}</p>
                <p className="text-xs tracking-[0.2em] text-white/50 uppercase">Private Limited</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              {COMPANY.tagline}. Building autonomous and wireless charging infrastructure for the
              electric decade.
            </p>
            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition-all duration-400 hover:-translate-y-1 hover:border-accent hover:bg-accent/20"
                >
                  <s.icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.22em] text-white/40 uppercase">
              Navigate
            </h3>
            <ul className="mt-6 space-y-3.5 text-sm text-white/70">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/login" className="transition-colors hover:text-accent">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.22em] text-white/40 uppercase">
              Contact
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                {COMPANY.location}
              </li>
              <li className="flex gap-3">
                <Globe className="size-4 shrink-0 text-accent" />
                {COMPANY.website}
              </li>
              <li className="flex gap-3">
                <Phone className="size-4 shrink-0 text-accent" />
                <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="size-4 shrink-0 text-accent" />
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
