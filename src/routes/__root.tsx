import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import faviconLogo from "@/assets/logo.png";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { IntroScreen } from "@/components/site/IntroScreen";
import { ScrollProgress, MouseGlow, FloatingActions } from "@/components/site/Chrome";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Magnertia — Making EV Charging Simple | Smarter Charging. Simpler Living." },
      {
        name: "description",
        content:
          "Magnertia creates smart EV charging solutions that make charging easier, faster, and more convenient for everyone.",
      },
      { name: "author", content: "Magnertia" },
      { property: "og:site_name", content: "Magnertia" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap",
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg?v=100" },
      { rel: "alternate icon", type: "image/png", href: faviconLogo },
      { rel: "shortcut icon", href: "/favicon.svg?v=100" },
      { rel: "apple-touch-icon", href: faviconLogo },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Magnertia",
          url: "https://www.magnertia.in",
          slogan: "Smarter Charging. Simpler Living.",
          telephone: "7708100362",
          email: "magnertia@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "585/18/2, Lakshminagar, Kottakadu, Pallipalayam",
            addressLocality: "Namakkal",
            postalCode: "638008",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=100" />
        <link rel="alternate icon" type="image/png" href={faviconLogo} />
        <link rel="shortcut icon" href="/favicon.svg?v=100" />
        <link rel="apple-touch-icon" href={faviconLogo} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SiteLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [intro, setIntro] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!sessionStorage.getItem("mag-intro-seen")) {
      setIntro(true);
      sessionStorage.setItem("mag-intro-seen", "1");
    }
  }, []);

  const isLoginPage = pathname === "/login";

  return (
    <>
      {intro && <IntroScreen onDone={() => setIntro(false)} />}
      <ScrollProgress />
      <MouseGlow />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="min-h-screen"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      {!isLoginPage && <Footer />}
      <FloatingActions />
      <Toaster position="top-center" />
    </>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <SiteLayout />
    </QueryClientProvider>
  );
}
