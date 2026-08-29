"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageCircle, ShieldCheck, Sparkles, Menu, X } from "lucide-react";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { Logo } from "@/components/Logo";
import { CONTACT } from "@/lib/content";

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, transform: "translateY(16px)" },
    whileInView: { opacity: 1, transform: "translateY(0px)" },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: EASE_OUT, delay },
  };
}

function Nav() {
  const { lang, toggle, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#why", label: t.nav.why },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" aria-label="Global Beyond LLC">
          <Logo compact />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="rounded-full border border-silver-dim/40 px-3 py-1.5 text-xs font-semibold tracking-wide text-silver transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-accent-bright hover:text-accent-bright active:scale-97"
            aria-label="Toggle language"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-silver-dim/40 p-2 text-silver transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-accent-bright hover:text-accent-bright active:scale-97 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, transform: "translateY(-8px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={{ opacity: 0, transform: "translateY(-8px)" }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col gap-1 border-t border-white/10 px-6 py-4 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-28 pt-28 text-center md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[640px] w-[900px] -translate-x-1/2 opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #4a6b8a 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-4xl">
        <motion.p
          {...fadeUp(0)}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-silver-dim"
        >
          Global Beyond LLC
        </motion.p>
        <motion.h1
          {...fadeUp(0.08)}
          className="mx-auto font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          {t.hero.tagline}
        </motion.h1>
        <motion.p {...fadeUp(0.16)} className="mx-auto mt-4 max-w-lg text-base text-silver">
          {t.hero.subtagline}
        </motion.p>
        <motion.p
          {...fadeUp(0.24)}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          {t.hero.lead}
        </motion.p>
        <motion.div {...fadeUp(0.32)} className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-foreground transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-accent-bright active:scale-97"
          >
            {t.hero.cta}
          </a>
          <a
            href="#about"
            className="rounded-full border border-silver-dim/50 px-7 py-3 text-sm font-semibold text-silver transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-silver hover:text-foreground active:scale-97"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="border-t border-white/5 bg-background-alt px-6 py-28 text-center">
      <div className="mx-auto max-w-3xl">
        <motion.p
          {...fadeUp(0)}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-silver-dim"
        >
          {t.about.kicker}
        </motion.p>
        <motion.h2
          {...fadeUp(0.08)}
          className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
        >
          {t.about.title}
        </motion.h2>
        <motion.p {...fadeUp(0.16)} className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          {t.about.body}
        </motion.p>
      </div>
    </section>
  );
}

function Why() {
  const { t } = useLanguage();
  return (
    <section id="why" className="px-6 py-28 text-center">
      <div className="mx-auto max-w-3xl">
        <motion.p
          {...fadeUp(0)}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-silver-dim"
        >
          {t.why.kicker}
        </motion.p>
        <motion.h2
          {...fadeUp(0.08)}
          className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
        >
          {t.why.title}
        </motion.h2>
      </div>
      <div className="mx-auto mt-16 grid max-w-4xl gap-16 md:grid-cols-2">
        <motion.div {...fadeUp(0.14)}>
          <Sparkles className="mx-auto h-7 w-7 text-accent-bright" aria-hidden />
          <h3 className="mt-5 font-display text-2xl font-semibold">{t.why.quality.title}</h3>
          <p className="mx-auto mt-3 max-w-xs leading-relaxed text-muted">{t.why.quality.body}</p>
        </motion.div>
        <motion.div {...fadeUp(0.22)}>
          <ShieldCheck className="mx-auto h-7 w-7 text-accent-bright" aria-hidden />
          <h3 className="mt-5 font-display text-2xl font-semibold">{t.why.guarantee.title}</h3>
          <p className="mx-auto mt-3 max-w-xs leading-relaxed text-muted">{t.why.guarantee.body}</p>
        </motion.div>
      </div>
    </section>
  );
}

function Reviews() {
  const { t } = useLanguage();
  return (
    <section id="reviews" className="border-t border-white/5 bg-background-alt px-6 py-28 text-center">
      <div className="mx-auto max-w-3xl">
        <motion.p
          {...fadeUp(0)}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-silver-dim"
        >
          {t.reviews.kicker}
        </motion.p>
        <motion.h2
          {...fadeUp(0.08)}
          className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
        >
          {t.reviews.title}
        </motion.h2>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
        {t.reviews.items.map((item, i) => (
          <motion.figure
            key={item.name}
            {...fadeUp(0.14 + i * 0.08)}
            className="rounded-2xl border border-silver-dim/25 bg-background p-8 text-left"
          >
            <blockquote className="text-sm leading-relaxed text-foreground/90">
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-semibold text-silver">{item.name}</span>
              <span className="block text-xs text-silver-dim">{item.role}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
      <p className="mt-8 text-xs italic text-silver-dim">{t.reviews.disclaimer}</p>
    </section>
  );
}

function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="px-6 py-28 text-center">
      <div className="mx-auto max-w-2xl">
        <motion.p
          {...fadeUp(0)}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-silver-dim"
        >
          {t.contact.kicker}
        </motion.p>
        <motion.h2
          {...fadeUp(0.08)}
          className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
        >
          {t.contact.title}
        </motion.h2>
        <motion.p {...fadeUp(0.16)} className="mt-4 text-lg text-muted">
          {t.contact.body}
        </motion.p>
        <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-3 rounded-2xl border border-silver-dim/30 bg-background-alt px-6 py-4 transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-accent-bright active:scale-97"
          >
            <Mail className="h-5 w-5 text-accent-bright" aria-hidden />
            <span>
              <span className="block text-xs text-silver-dim">{t.contact.emailLabel}</span>
              <span className="text-sm font-medium">{CONTACT.email}</span>
            </span>
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-silver-dim/30 bg-background-alt px-6 py-4 transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-accent-bright active:scale-97"
          >
            <MessageCircle className="h-5 w-5 text-accent-bright" aria-hidden />
            <span>
              <span className="block text-xs text-silver-dim">{t.contact.whatsappLabel}</span>
              <span className="text-sm font-medium">{CONTACT.whatsappDisplay}</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <Logo />
        <a
          href={CONTACT.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex items-center gap-2 text-sm text-silver transition-colors hover:text-accent-bright"
        >
          <InstagramIcon className="h-4 w-4" />
          {CONTACT.instagramHandle}
        </a>
        <p className="text-xs text-silver-dim">
          © {new Date().getFullYear()} Global Beyond LLC. {t.footer.rights}
        </p>
        <p className="text-sm text-muted-foreground text-silver-dim/80">
          {t.footer.credit}{" "}
          <a href="https://tododeia.com" className="underline hover:text-foreground">
            Tododeia
          </a>
        </p>
      </div>
    </footer>
  );
}

function PageContent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Why />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}
