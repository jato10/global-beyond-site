"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageCircle, ShieldCheck, Sparkles, Menu, X, Quote, Star, Info } from "lucide-react";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { Logo } from "@/components/Logo";
import { CONTACT, type Content } from "@/lib/content";

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
        <motion.figure {...fadeUp(0.24)} className="mx-auto mt-14 max-w-2xl">
          <div className="overflow-hidden rounded-3xl border border-silver-dim/25">
            <Image
              src="/images/team.jpg"
              alt={t.about.teamCaption}
              width={3480}
              height={1960}
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-4 text-sm text-silver-dim">{t.about.teamCaption}</figcaption>
        </motion.figure>
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

type ReviewItem = Content["reviews"]["items"][number];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function Stars({ rating, label }: { rating: number; label: string }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden
          className={`h-3.5 w-3.5 ${
            i < rating ? "fill-accent-bright text-accent-bright" : "text-silver-dim/40"
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  item,
  ratingLabel,
  featured = false,
}: {
  item: ReviewItem;
  ratingLabel: string;
  featured?: boolean;
}) {
  return (
    <figure
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-background p-8 text-left transition duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:border-accent-bright/60 ${
        featured ? "justify-center border-accent/40 sm:p-10" : "border-silver-dim/20"
      }`}
    >
      {featured && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #4a6b8a 0%, transparent 70%)" }}
        />
      )}
      <div className="relative flex items-center justify-between gap-4">
        <Quote
          aria-hidden
          className={`text-accent-bright/35 ${featured ? "h-8 w-8" : "h-6 w-6"}`}
        />
        <Stars rating={item.rating} label={ratingLabel} />
      </div>
      <blockquote
        className={`relative mt-6 text-foreground/90 ${
          featured
            ? "font-display text-xl font-medium leading-snug sm:text-[1.75rem]"
            : "flex-1 text-sm leading-relaxed"
        }`}
      >
        {item.quote}
      </blockquote>
      <figcaption className="relative mt-8 flex items-center gap-3 border-t border-white/5 pt-6">
        <span
          aria-hidden
          className={`flex shrink-0 items-center justify-center rounded-full bg-accent/25 font-display font-semibold text-accent-bright ${
            featured ? "h-11 w-11 text-sm" : "h-9 w-9 text-xs"
          }`}
        >
          {initials(item.name)}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-silver">{item.name}</span>
          <span className="block truncate text-xs text-silver-dim">{item.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function Reviews() {
  const { t } = useLanguage();
  const [featured, ...rest] = t.reviews.items;
  const ratingLabel = (rating: number) =>
    t.reviews.ratingLabel.replace("{n}", String(rating));

  return (
    <section
      id="reviews"
      className="relative overflow-hidden border-t border-white/5 bg-background-alt px-6 py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #4a6b8a 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
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
        <motion.p
          {...fadeUp(0.16)}
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-silver-dim/25 bg-background/60 px-4 py-1.5 text-xs text-silver-dim"
        >
          <Info className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {t.reviews.disclaimer}
        </motion.p>
      </div>
      <div className="relative mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-5">
        {featured && (
          <motion.div {...fadeUp(0.14)} className="md:col-span-3">
            <ReviewCard item={featured} ratingLabel={ratingLabel(featured.rating)} featured />
          </motion.div>
        )}
        {rest.length > 0 && (
          <div className="flex flex-col gap-6 md:col-span-2">
            {rest.map((item, i) => (
              <motion.div key={item.name} {...fadeUp(0.22 + i * 0.08)} className="flex-1">
                <ReviewCard item={item} ratingLabel={ratingLabel(item.rating)} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
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
