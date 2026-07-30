import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { LogoMark, MAGNERTIA_PATH_A, MAGNERTIA_PATH_B } from "./LogoMark";
import { COMPANY } from "@/data/site";

export function IntroScreen({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
      setTimeout(onDone, 900);
    }, 4600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-white"
          exit={{ opacity: 0, filter: "blur(18px)", scale: 1.08 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative flex flex-col items-center">
            {/* energy pulse rings */}
            <motion.span
              className="absolute top-1/2 left-1/2 size-56 -translate-x-1/2 -translate-y-[95%] rounded-full border border-accent/40"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: [0.6, 1.5], opacity: [0, 0.6, 0] }}
              transition={{ delay: 2, duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.span
              className="absolute top-1/2 left-1/2 size-72 -translate-x-1/2 -translate-y-[80%] rounded-full bg-accent/10 blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.9, 0.4] }}
              transition={{ delay: 1.8, duration: 1.6 }}
            />

            {/* particles */}
            {Array.from({ length: 18 }).map((_, i) => {
              const a = (i / 18) * Math.PI * 2;
              return (
                <motion.span
                  key={i}
                  className="absolute top-1/2 left-1/2 size-1.5 rounded-full bg-accent"
                  initial={{ opacity: 0, x: 0, y: -60 }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: Math.cos(a) * 150,
                    y: -60 + Math.sin(a) * 150,
                  }}
                  transition={{ delay: 2.1 + i * 0.03, duration: 1.8, ease: "easeOut" }}
                />
              );
            })}

            {/* drawn logo */}
            <motion.div
              className="relative"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: [0, 0, 360] }}
              transition={{ delay: 2.4, duration: 2, times: [0, 0.1, 1], ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: 900 }}
            >
              <svg viewBox="0 0 210 210" className="size-40" fill="none" aria-hidden>
                <defs>
                  <linearGradient id="introGloss" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1E4D8F" />
                    <stop offset="50%" stopColor="#0D2F56" />
                    <stop offset="100%" stopColor="#2E8BFF" />
                  </linearGradient>
                </defs>
                <g
                  stroke="url(#introGloss)"
                  strokeWidth={13}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {[MAGNERTIA_PATH_A, MAGNERTIA_PATH_B].map((d, i) => (
                    <motion.path
                      key={i}
                      d={d}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.25 + i * 0.55, duration: 1.3, ease: "easeInOut" }}
                    />
                  ))}
                </g>
                {[
                  { cx: 164, cy: 190, r: 8 },
                  { cx: 188, cy: 199, r: 7.5 },
                ].map((c, i) => (
                  <motion.circle
                    key={i}
                    {...c}
                    fill="url(#introGloss)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2 + i * 0.12, type: "spring", stiffness: 300 }}
                    style={{ transformOrigin: `${c.cx}px ${c.cy}px` }}
                  />
                ))}
              </svg>
              <LogoMark className="hidden" />
            </motion.div>

            <motion.h1
              className="mt-10 font-display text-3xl font-bold tracking-[0.4em] text-primary sm:text-4xl"
              initial={{ opacity: 0, y: 16, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 2.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              MAGNERTIA
            </motion.h1>
            <motion.p
              className="mt-4 text-sm tracking-[0.2em] text-muted-foreground uppercase"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {COMPANY.tagline}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
