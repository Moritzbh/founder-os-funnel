export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* TOP NAV */}
      <nav className="px-8 md:px-12 py-5 flex items-center justify-between border-b border-[var(--color-line)] bg-white">
        <a
          href="https://bb-brands.de"
          className="text-xs md:text-sm text-[var(--color-text-3)] font-mono tracking-wider hover:text-[var(--color-accent)] transition-colors"
        >
          ← bb-brands.de
        </a>
        <div className="font-bold text-sm tracking-tight">
          BB · <span className="text-[var(--color-accent)]">Founder OS</span>
        </div>
        <div className="text-xs text-[var(--color-text-3)] font-mono tracking-wider hidden md:block">
          v0.1
        </div>
      </nav>

      {/* HERO */}
      <section className="flex-1 flex items-center justify-center px-6 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Status-Pulse */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 rounded-full bg-[var(--color-accent-bg)] text-[var(--color-accent)] text-[11px] tracking-[0.2em] uppercase font-bold font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
            </span>
            Subdomain Live · Funnel im Aufbau
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8">
            Founder OS{" "}
            <span className="font-serif italic font-normal text-[var(--color-accent)]">
              kommt bald.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--color-text-2)] leading-relaxed max-w-2xl mx-auto mb-12">
            Das interne Launch-Framework hinter modernen D2C-Brands —
            jetzt als DIY-System für Anfänger. 5 Phasen, harte Gates, kein
            Brand-First-Geschwafel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://bb-brands.de"
              className="px-7 py-4 bg-[var(--color-text)] text-white rounded-full font-bold text-sm tracking-wide hover:bg-[var(--color-accent)] transition-all hover:-translate-y-0.5"
            >
              Zur Hauptseite →
            </a>
            <a
              href="mailto:info@bb-brands.de?subject=Founder%20OS%20Wartelist"
              className="px-7 py-4 text-[var(--color-text)] font-semibold text-sm hover:text-[var(--color-accent)] transition-colors"
            >
              Auf die Wartelist
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 md:px-12 py-8 bg-[var(--color-bg-deep)] text-zinc-400 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4 items-center">
          <div className="font-bold text-sm text-white">
            BB · <span className="text-[var(--color-accent)]">Founder OS</span>
          </div>
          <div className="font-mono tracking-wider flex gap-6">
            <a href="https://bb-brands.de" className="hover:text-[var(--color-accent)]">
              bb-brands.de
            </a>
            <a
              href="https://bb-brands.de/impressum.html"
              className="hover:text-[var(--color-accent)]"
            >
              Impressum
            </a>
            <a
              href="https://bb-brands.de/datenschutz.html"
              className="hover:text-[var(--color-accent)]"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
