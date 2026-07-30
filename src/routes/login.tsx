import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Reveal, Particles } from "@/components/site/motion-kit";
import { BrandButton } from "@/components/site/BrandButton";
import { LogoMark } from "@/components/site/LogoMark";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Login — Magnertia Dashboard" },
      {
        name: "description",
        content: "Sign in to the Magnertia dashboard to monitor your autonomous charging network.",
      },
      { property: "og:title", content: "Login — Magnertia" },
      { property: "og:description", content: "Access your Magnertia charging telemetry dashboard." },
      { property: "og:url", content: "/login" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/login" }],
  }),
});

const schema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255),
  password: z.string().min(6, "Password must be at least 6 characters").max(100),
});

const field =
  "w-full rounded-2xl border border-border bg-white/70 px-4 py-3.5 text-sm outline-none backdrop-blur-md transition-all placeholder:text-muted-foreground/70 focus:border-accent focus:shadow-[var(--shadow-glow)]";
const labelCls = "mb-2 block text-xs font-semibold tracking-[0.14em] text-primary/70 uppercase";

function LoginPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    toast.success("Signed in — dashboard access is coming soon.");
  };

  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden px-4 py-32">
      <div className="pointer-events-none absolute -top-40 -left-32 size-[560px] rounded-full bg-accent/15 blur-[150px]" />
      <div className="pointer-events-none absolute -right-32 -bottom-40 size-[560px] rounded-full bg-primary/12 blur-[150px]" />
      <Particles count={28} />

      <Reveal direction="scale" className="relative w-full max-w-md">
        <div className="glass rounded-[28px] p-9 sm:p-11">
          <div className="flex flex-col items-center text-center">
            <LogoMark className="h-14 w-14 text-primary" />
            <h1 className="mt-6 text-2xl">Welcome back</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Sign in to your Magnertia dashboard
            </p>
          </div>

          <form onSubmit={submit} className="mt-9 grid gap-5">
            <div>
              <label className={labelCls} htmlFor="email">Email</label>
              <input id="email" name="email" type="email" className={field} placeholder="you@company.com" />
              {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
            </div>
            <div>
              <label className={labelCls} htmlFor="password">Password</label>
              <input id="password" name="password" type="password" className={field} placeholder="••••••••" />
              {errors.password && <p className="mt-1.5 text-xs text-destructive">{errors.password}</p>}
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex cursor-pointer items-center gap-2.5 text-muted-foreground">
                <input type="checkbox" name="remember" className="size-4 accent-[#2E8BFF]" />
                Remember me
              </label>
              <a href="#" className="text-accent underline-link">Forgot password?</a>
            </div>
            <BrandButton type="submit" size="lg" className="mt-2 w-full">
              Sign In
            </BrandButton>
          </form>

          <div className="mt-7 text-center">
            <Link to="/" className="text-sm text-muted-foreground underline-link">
              Back Home
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
