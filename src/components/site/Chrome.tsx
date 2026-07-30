import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { COMPANY } from "@/data/site";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX: x }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left [background:var(--gradient-accent)]"
    />
  );
}

export function MouseGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <>
      <div
        className="pointer-events-none fixed z-[55] hidden size-[420px] rounded-full opacity-60 blur-[120px] lg:block"
        style={{
          left: pos.x - 210,
          top: pos.y - 210,
          background: "radial-gradient(circle, rgba(46,139,255,0.22), transparent 70%)",
        }}
      />
      <motion.div
        className="pointer-events-none fixed z-[70] hidden size-6 rounded-full border border-accent/70 lg:block"
        animate={{ x: pos.x - 12, y: pos.y - 12 }}
        transition={{ type: "spring", stiffness: 300, damping: 24, mass: 0.4 }}
      />
    </>
  );
}

export function FloatingActions() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-5 bottom-6 z-[65] flex flex-col items-end gap-3">
      <a
        href={`https://wa.me/${COMPANY.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="float-slow grid size-13 place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-lift)] transition-transform hover:scale-110"
      >
        <MessageCircle className="size-6" />
      </a>
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="grid size-12 place-items-center rounded-full border border-border bg-white/80 text-primary backdrop-blur-xl transition-transform hover:scale-110 hover:shadow-[var(--shadow-glow)]"
          >
            <ArrowUp className="size-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
