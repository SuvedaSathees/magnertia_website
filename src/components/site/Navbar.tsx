import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, LogIn } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LogoMark, Wordmark } from "./LogoMark";
import { BrandButton } from "./BrandButton";
import { NAV_LINKS } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const path = useRouterState({ select: (s) => s.location.pathname });

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/60 bg-white/75 py-3 backdrop-blur-xl shadow-[var(--shadow-soft)]"
          : "border-b border-transparent bg-transparent py-5",
      )}
    >
      <nav className="shell flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 text-primary" aria-label="Magnertia home">
          <motion.span whileHover={{ rotate: -8, scale: 1.06 }} transition={{ type: "spring" }}>
            <LogoMark className="h-8 w-8" />
          </motion.span>
          <Wordmark className="hidden sm:block" />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => {
            const active = l.to === "/" ? path === "/" : path.startsWith(l.to);
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={cn(
                    "underline-link relative text-sm font-medium transition-colors",
                    active ? "text-accent" : "text-primary/75 hover:text-primary",
                  )}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1.5 left-0 h-[2px] w-full rounded-full [background:var(--gradient-accent)]"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <BrandButton to="/login" size="sm" className="hidden sm:inline-flex" arrow={false}>
            <LogIn className="size-4" /> Login
          </BrandButton>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid size-11 place-items-center rounded-full border border-border bg-white/70 text-primary backdrop-blur-md lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="shell pt-6 pb-8">
              <div className="glass rounded-3xl p-3">
                {NAV_LINKS.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-5 py-3.5 text-base font-medium text-primary transition-colors hover:bg-white/70"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-2xl px-5 py-3.5 text-base font-medium text-accent"
                >
                  Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
