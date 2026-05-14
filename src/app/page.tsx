export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text-2">

      {/* ============ WARNING-BANNER (sticky-top) ============ */}
      <div className="warning-banner">
        Ein System für Anfänger, die ihre <u>erste Online-Marke aufbauen</u> wollen.
      </div>

      {/* ============ STICKY MOBILE-HEADER (kompakt, immer sichtbar) ============ */}
      <header className="m-sticky-header">
        <div className="m-sticky-header-inner">
          <a href="https://bb-brands.de" className="bb-logo" aria-label="BB Brands Startseite">
            <span className="bb-mark-mirror">B</span>Brands
            <span className="bb-logo-sub">
              Founder OS
              <span className="bb-logo-sub-trademark">™</span>
            </span>
          </a>
          <a href="#pricing" className="m-sticky-cta">299 € →</a>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section className="sky-bg pt-6 lg:pt-10 pb-12 lg:pb-24">
        {/* Logo + Back-Link (DESKTOP ONLY — mobile hat eigenen sticky-header oben) */}
        <div className="hidden lg:flex max-w-[1400px] mx-auto px-6 lg:px-10 mb-12 lg:mb-16 flex-col items-start gap-3">
          <a href="https://bb-brands.de" className="bb-logo" aria-label="BB Brands Startseite — zurück zur Hauptseite" title="Zurück zur Hauptseite">
            <span className="bb-mark-mirror">B</span>Brands
            <span className="bb-logo-sub">
              Founder OS
              <span className="bb-logo-sub-trademark">™</span>
            </span>
          </a>
          <a
            href="https://bb-brands.de"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-text-3 hover:text-bb-blue transition-colors group"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            Zurück zur Hauptseite
          </a>
        </div>

        {/* Hero Headlines */}
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 text-center mb-8 lg:mb-20">
          <h1 className="h-display m-hero-display text-[clamp(48px,9vw,124px)] mb-4 lg:mb-5">
            FOUNDER OS
          </h1>
          <p className="font-body m-hero-sub text-[clamp(18px,2.2vw,26px)] text-navy max-w-3xl mx-auto leading-snug font-normal">
            So kommst du von 0 € Umsatz zu den <strong className="font-bold">ersten echten Bestellungen</strong>.
          </p>
        </div>

        {/* Hero Below: Mobile = Card oben + Video unten · Desktop = Video links + Card rechts */}
        <div className="m-hero-grid max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
          {/* Video / Founder-Talk Placeholder */}
          <div className="m-hero-video aspect-video bg-navy rounded-2xl overflow-hidden relative shadow-[0_24px_80px_-24px_rgba(27,33,56,0.4)]"
               style={{ backgroundImage: "url('/founder-moritz.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent"></div>
            <button className="absolute inset-0 flex items-center justify-center group">
              <span className="w-20 h-20 bg-navy flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl"
                    style={{ borderRadius: "12px" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="ml-1"><path d="M8 5v14l11-7z"/></svg>
              </span>
            </button>
            <div className="absolute bottom-4 left-4 text-white/80 font-mono text-[11px] tracking-wider uppercase">
              90 Sekunden mit Moritz · Founder
            </div>
          </div>

          {/* Product Card */}
          <div className="m-hero-card product-card">
            <div className="flex gap-5 lg:gap-6 mb-6 lg:mb-7">
              {/* Course Cover — Higgsfield v4 */}
              <div className="flex-shrink-0 w-[120px] aspect-[3/4] rounded-lg overflow-hidden relative shadow-xl">
                <img
                  src="/founder-os-cover.png"
                  alt="Founder OS — Die 90-Tage Pre-Sold Launch Methode"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Price */}
              <div className="flex flex-col">
                <div className="price-strikethrough mb-1">€ 499</div>
                <div className="price-sale">€ 299</div>
                <div className="text-[12px] text-text-3 mt-1.5">
                  Inkl. <strong className="text-navy">sofortigem Zugriff *</strong>
                </div>
              </div>
            </div>

            {/* 3 Benefits */}
            <ul className="space-y-3.5 mb-7 text-[15px] text-text-2 leading-snug">
              <li className="check-bullet">
                <span><strong>Erst Vorbestellungen, dann Lager kaufen</strong> — kein halbes Jahr Geld verbrennen ohne einen einzigen Verkauf.</span>
              </li>
              <li className="check-bullet">
                <span>Vom <strong>ersten Gedanken zur ersten echten Bestellung</strong> in 90 Tagen — klare Schritte, keine Abkürzung.</span>
              </li>
              <li className="check-bullet">
                <span>Das System hinter <strong>echten Online-Marken seit 2024</strong> — mit KI gebaut, rechtssicher für Deutschland, Österreich und Schweiz.</span>
              </li>
            </ul>

            <a href="#pricing" className="btn-gold w-full justify-center">
              Jetzt starten
            </a>

            {/* Payment Icons */}
            <div className="mt-5 flex items-center justify-center gap-2 flex-wrap">
              {[
                { src: "/payments/paypal.svg", alt: "PayPal" },
                { src: "/payments/klarna.svg", alt: "Klarna" },
                { src: "/payments/mastercard.svg", alt: "Mastercard" },
                { src: "/payments/visa.svg", alt: "VISA" },
                { src: "/payments/applepay.svg", alt: "Apple Pay" },
              ].map((p) => (
                <img key={p.alt} src={p.src} alt={p.alt} className="h-6 w-auto object-contain" />
              ))}
            </div>

            <p className="text-[11.5px] text-text-3 text-center mt-4">
              * Sofort verfügbar · Updates für immer · 14 Tage Geld zurück
            </p>
          </div>
        </div>

        {/* Trust Logo Strip — Mobile: auto-marquee, Desktop: static flex-wrap */}
        <div className="max-w-[1400px] mx-auto px-0 lg:px-10 mt-12 lg:mt-20">
          <div className="trust-strip border-t border-line/60">
            {/* Mobile: marquee track (items 2x für seamless loop) */}
            <div className="trust-strip-track md:hidden">
              {["Shopify Partner","Meta Business","Klaviyo Master","Google Partner","DSGVO-konform","Stripe Verified","Shopify Partner","Meta Business","Klaviyo Master","Google Partner","DSGVO-konform","Stripe Verified"].map((t,i) => (
                <span key={i} className="trust-strip-item">{t}</span>
              ))}
            </div>
            {/* Desktop: statisch */}
            <div className="hidden md:contents">
              <span className="trust-strip-item">Shopify Partner</span>
              <span className="trust-strip-item">Meta Business</span>
              <span className="trust-strip-item">Klaviyo Master</span>
              <span className="trust-strip-item">Google Partner</span>
              <span className="trust-strip-item">DSGVO-konform</span>
              <span className="trust-strip-item">Stripe Verified</span>
            </div>
          </div>
        </div>

        {/* Authority-Transfer-Statement */}
        <div className="max-w-3xl mx-auto px-6 lg:px-10 mt-16 lg:mt-24 text-center">
          <div className="eyebrow mb-5">Aus der Praxis</div>
          <p className="font-display font-extrabold text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-navy mb-5">
            Wir bauen Online-Marken auf, die <span className="text-red">mehrere Millionen Euro</span> im Jahr machen. Jetzt zeigen wir dir das System, mit dem das geht.
          </p>
          <p className="font-display font-bold text-[clamp(18px,2.4vw,26px)] text-navy/80 leading-tight">
            Das Einzige, was du machen musst: <span className="underline decoration-red decoration-[3px] underline-offset-[6px]">Schritt für Schritt umsetzen.</span>
          </p>
        </div>
      </section>

      {/* ============ AUDIENCE QUALIFICATION — "Wer sollte das nutzen?" ============ */}
      <section className="cream-photo-bg pos-top m-section-pad py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-5 lg:px-10 text-center mb-10 lg:mb-16">
          <h2 className="h-section text-[clamp(28px,5vw,58px)] mb-3 lg:mb-4">
            Ist Founder OS das Richtige für dich?
          </h2>
          <p className="text-[15px] lg:text-[17px] text-text-3 max-w-2xl mx-auto leading-relaxed">
            Wir sagen vorher klar, für wen das hier gemacht ist — und für wen nicht. Damit du keine Zeit und kein Geld verschwendest.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-5 lg:px-10 grid md:grid-cols-2 gap-5 lg:gap-6">
          {/* For You */}
          <div className="m-audience-card bg-white rounded-2xl border border-line p-8 lg:p-10 shadow-[0_4px_24px_rgba(27,33,56,0.06)]">
            <div className="inline-flex items-center gap-2 bg-green-soft text-green font-bold text-[12px] tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
              <span>✓</span> Für dich, wenn …
            </div>
            <ul className="space-y-3.5 text-[15px] text-text-2 leading-snug">
              {[
                <>Du noch <strong>null Umsatz</strong> machst — oder erste Versuche hattest, die nicht funktioniert haben.</>,
                <>Du eine <strong>Idee oder ein Produkt im Kopf</strong> hast — aber nicht weißt, wie du daraus eine Marke machst, die wirklich verkauft.</>,
                <>Du in <strong>Deutschland, Österreich oder der Schweiz</strong> verkaufen willst und das mit dem Rechtlichen ernst nimmst (oder solltest).</>,
                <>Du bereit bist, <strong>5–15 Stunden pro Woche</strong> für 90 Tage echte Arbeit reinzustecken.</>,
                <>Du willst <strong>kein zusammengesuchtes YouTube-Wissen, sondern ein bewährtes System</strong> mit klaren Ergebnissen pro Schritt.</>,
              ].map((t, i) => (
                <li key={i} className="check-bullet"><span>{t}</span></li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className="m-audience-card bg-white rounded-2xl border border-line p-8 lg:p-10 shadow-[0_4px_24px_rgba(27,33,56,0.06)]">
            <div className="inline-flex items-center gap-2 bg-red/10 text-red font-bold text-[12px] tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
              <span>✕</span> Nicht für dich, wenn …
            </div>
            <ul className="space-y-3.5 text-[15px] text-text-2 leading-snug">
              {[
                <>Du schon mehr als <strong>5.000 € im Monat</strong> umsetzt — dann ist die <a href="https://bb-brands.de/audit/" className="text-navy underline underline-offset-2 font-semibold">BB-Brands-Agentur</a> der richtige Weg.</>,
                <>Du <strong>passives Einkommen</strong> oder schnellen Reichtum suchst — eine Marke aufzubauen ist Arbeit, jeden Tag.</>,
                <>Du <strong>nur zuschauen</strong> willst, ohne wirklich umzusetzen.</>,
                <>Du nicht im <strong>deutschsprachigen Raum</strong> verkaufst — andere Länder haben andere Rechtsregeln.</>,
                <>Du Umsatz-Garantien erwartest — wir geben keine. Siehe Anti-Garantie weiter unten.</>,
              ].map((t, i) => (
                <li key={i} className="x-bullet check-bullet"><span>{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ EINBLICK IN DEN KURS — 5 Phasen Chapter-Breakdown ============ */}
      <section className="m-section-pad py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-10 text-center mb-10 lg:mb-20">
          <div className="eyebrow mb-3">Einblick in den Kurs</div>
          <h2 className="h-section text-[clamp(28px,5vw,58px)] mb-3 lg:mb-5">
            5 Schritte. 196 Lektionen. <span className="text-red">Klare Ergebnisse.</span>
          </h2>
          <p className="text-[15px] lg:text-[17px] text-text-2 max-w-2xl mx-auto leading-relaxed">
            Jeder Schritt endet mit einem konkreten Ergebnis. Du gehst erst weiter, wenn der Schritt davor sauber sitzt.
          </p>
        </div>

        {(() => {
          const phases = [
            { num: "01", name: "Klären", q: "Was verkaufe ich eigentlich, und an wen?", items: "20 Lektionen · 1–2 Wochen", points: ["Selbst-Check: Was du liebst, was du kannst, wie viel Zeit du wirklich hast", "Wunschkunden klar beschreiben + Konkurrenz-Übersicht erstellen", "Erstes Produkt-Konzept festlegen — deine Wette: „das verkaufe ich"], gate: "5 fertige Ergebnisse, bevor es in Schritt 2 geht", spanFull: false },
            { num: "02", name: "Nachfrage prüfen", q: "Will mein Wunschkunde das überhaupt kaufen?", items: "22 Lektionen · 2–3 Wochen", points: ["Echte Probleme aufdecken (Reddit, Foren) + 20 Gespräche mit Wunschkunden — du verkaufst nichts, du hörst zu", "Vorbestellungs-Test: 50+ echte Anmeldungen einsammeln, bevor du Ware kaufst", "Mit Zahlen prüfen: Bleiben nach Einkauf, Versand und Werbung 45 %+ Gewinn?"], gate: "50+ wörtliche Kundenstimmen + Entscheidung: weitermachen oder Idee anpassen", spanFull: false },
            { num: "03", name: "Aufstellen", q: "Wie wird daraus etwas Echtes, das man kaufen kann?", items: "55 Lektionen · 4–6 Wochen", points: ["Marken-Identität (Stimme, Werte, Look) · erstes Design-Bild · Shop in Shopify einrichten", "Rechtliches DACH: Datenschutz, Barrierefreiheit, Verpackungsregister, Preisangaben", "E-Mail-Automatisierungen aufsetzen + Werbe-Messung sauber einrichten (Facebook-Pixel und Server-Tracking)"], gate: "Shop bereit zum Verkauf + alle Rechts-Themen abgehakt", spanFull: false },
            { num: "04", name: "Launchen", q: "Wie kommen die ersten Käufer, die ich nicht kenne?", items: "41 Lektionen · 3–4 Wochen", points: ["Launch-Tag-Plan + E-Mail-Reihe vor dem Start, die Spannung aufbaut", "Influencer rechtssicher anschreiben (richtige Werbe-Kennzeichnung, keine Abmahnung)", "Erste Bewertungen einsammeln + Vertrauen aufbauen in der ersten Woche"], gate: "50+ Bestellungen · 10+ Bewertungen", spanFull: false },
            { num: "05", name: "Wachsen", q: "Wie wird daraus eine echte Marke, kein Strohfeuer?", items: "58 Lektionen · 90 Tage", points: ["Bezahlte Werbung auf Facebook/Instagram, Google und TikTok — so geschaltet, dass sie sich rechnet", "Kundenstimmen systematisch sammeln und einbauen + E-Mail-Marketing hochfahren", "Erste Mitarbeiter ans Bord · Plan für neue Produkt-Launches · Vertrauen aufbauen über Presse, Bewertungen, Garantien"], gate: "Werbekosten pro Kunde unter dem Gewinn · 15 %+ kaufen ein zweites Mal", spanFull: true },
          ];
          return (
            <>
              {/* DESKTOP: 2-Spalten-Grid mit voll ausgestalteten Cards */}
              <div className="m-phase-grid-desktop max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-6 lg:gap-8">
                {phases.map((p) => (
                  <div key={p.num} className={`phase-chapter ${p.spanFull ? "lg:col-span-2" : ""}`}>
                    <div
                      className="relative bg-navy text-white p-7 lg:p-9 grid grid-cols-[auto_1fr] gap-6 items-center overflow-hidden bg-cover bg-center"
                      style={{ backgroundImage: `url(/phase-${p.num}.jpg)` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/55"></div>
                      <div className="relative font-display font-extrabold text-[64px] lg:text-[72px] leading-none text-gold tracking-tighter">{p.num}</div>
                      <div className="relative">
                        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/60 mb-1">Phase {p.num}</div>
                        <h3 className="h-section h-on-dark text-[28px] lg:text-[32px] mb-1">{p.name}</h3>
                        <div className="text-[14px] text-white/70 italic">&ldquo;{p.q}&rdquo;</div>
                      </div>
                    </div>
                    <div className="p-7 lg:p-9">
                      <div className="font-mono text-[11px] text-text-3 uppercase tracking-wider mb-4 font-bold">{p.items}</div>
                      <ul className="space-y-3 text-[14.5px] text-text-2 leading-snug mb-5">
                        {p.points.map((pt, i) => (
                          <li key={i} className="check-bullet"><span>{pt}</span></li>
                        ))}
                      </ul>
                      <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-gold/15 border border-gold/40 rounded-md text-[12px] font-bold font-mono tracking-wider uppercase text-navy">
                        Gate · {p.gate}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* MOBILE: Accordion — kompakt, ein-/ausklappbar */}
              <div className="m-phase-accordion max-w-2xl mx-auto px-5">
                {phases.map((p, idx) => (
                  <details key={p.num} className="m-phase-acc" open={idx === 0}>
                    <summary>
                      <div className="m-phase-acc-num">{p.num}</div>
                      <div>
                        <div className="m-phase-acc-name">{p.name}</div>
                        <div className="m-phase-acc-meta">{p.items}</div>
                      </div>
                      <div className="m-phase-acc-toggle">+</div>
                    </summary>
                    <div className="m-phase-acc-body">
                      <div className="m-phase-acc-q">&ldquo;{p.q}&rdquo;</div>
                      <ul className="space-y-0">
                        {p.points.map((pt, i) => (
                          <li key={i} className="check-bullet"><span>{pt}</span></li>
                        ))}
                      </ul>
                      <div className="m-phase-acc-gate">Ziel · {p.gate}</div>
                    </div>
                  </details>
                ))}
              </div>
            </>
          );
        })()}

        {/* Mid-Page CTA */}
        <div className="max-w-2xl mx-auto px-5 mt-12 lg:mt-20 text-center">
          <p className="text-[15px] lg:text-[16px] text-text-3 mb-4 lg:mb-5">Bereit für den ersten Umsatz?</p>
          <a href="#pricing" className="btn-gold">
            Jetzt starten — 299 €
          </a>
        </div>
      </section>

      {/* ============ TESTIMONIALS / NAMED CASES ============ */}
      <section className="cream-photo-bg pos-bottom m-section-pad py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-5 lg:px-10 text-center mb-10 lg:mb-14">
          <h2 className="h-section text-[clamp(28px,5vw,58px)] mb-3 lg:mb-4">
            Aus echter <span className="text-red">Agentur-Arbeit</span>.
          </h2>
          <p className="text-[15px] lg:text-[17px] text-text-3 max-w-2xl mx-auto leading-relaxed">
            Alles, was in Founder OS steckt, kommt aus der täglichen Arbeit unserer Agentur BB Brands. Hier ein paar der Marken, die wir gerade aufbauen:
          </p>
        </div>

        <div className="m-cases-carousel max-w-4xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          {[
            { brand: "Hearo", category: "Hearables · DACH", quote: "Kompletter Aufbau: Marken-Identität, Produktseiten, KI-gestützter Verkaufsprozess — rechtssicher für Deutschland, Österreich, Schweiz.", icon: "H" },
            { brand: "Bachgold", category: "Wasserfiltration · DACH", quote: "Bundle-Relaunch + 15 maßgeschneiderte Produktseiten + wiederverwendbare Shop-Bausteine. Umstellung ohne Shop-Ausfall.", icon: "B" },
          ].map((c) => (
            <div key={c.brand} className="bg-white rounded-2xl border border-line p-7 shadow-[0_4px_24px_rgba(27,33,56,0.06)]">
              <div className="flex items-center gap-4 mb-5 pb-5 border-b border-line">
                <div className="w-12 h-12 bg-navy text-gold flex items-center justify-center font-display font-extrabold text-[20px] rounded-md">
                  {c.icon}
                </div>
                <div>
                  <div className="font-display font-bold text-[18px] text-navy">{c.brand}</div>
                  <div className="text-[11px] text-text-3 font-mono uppercase tracking-wider">{c.category}</div>
                </div>
              </div>
              <p className="text-[14.5px] text-text-2 leading-relaxed italic">"{c.quote}"</p>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] lg:text-[12px] text-text-3 mt-8 lg:mt-10 font-mono tracking-wider max-w-3xl mx-auto px-5 lg:px-6 leading-relaxed">
          Wir zeigen bewusst keine „In 30 Tagen 100 K Umsatz"-Screenshots. Solche Geschichten werden gezeigt — die 200 Leute, die&apos;s nicht geschafft haben, eben nicht. Genau das ist das Problem dieser Branche.
        </p>
      </section>

      {/* ============ AUTHORITY STATS ============ */}
      <section className="bg-navy m-section-pad py-16 lg:py-28 text-white">
        <div className="m-stats-row max-w-6xl mx-auto px-5 lg:px-10 grid md:grid-cols-3 gap-6 lg:gap-10 text-center">
          {[
            { stat: "4+", label: "Jahre E-Com", desc: "operative Erfahrung im Aufbau und Skalieren von Online-Marken — von 0 € bis Millionen-Umsatz" },
            { stat: "196", label: "Lektionen", desc: "aus 2+ Jahren Agentur-Arbeit — für Anfänger verständlich aufbereitet" },
            { stat: "82", label: "Shop-Bausteine", desc: "fertig zum Einbauen — du musst nichts selbst programmieren" },
          ].map((s) => (
            <div key={s.label}>
              <div className="m-stat-num font-display font-extrabold text-gold text-[80px] lg:text-[96px] leading-none mb-2">{s.stat}</div>
              <div className="m-stat-label font-display font-bold text-[20px] text-white mb-2">{s.label}</div>
              <div className="m-stat-desc text-[14px] text-white/60 leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ AUTHOR BIO — Über Moritz ============ */}
      <section className="bg-white m-section-pad py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-10 lg:mb-12">
            <div className="eyebrow mb-3">Über den Autor</div>
            <h2 className="h-section text-[clamp(28px,5vw,50px)]">
              Wer das <span className="text-red">gebaut</span> hat.
            </h2>
          </div>

          <div className="grid md:grid-cols-[280px_1fr] gap-8 lg:gap-14 items-center">
            <div className="relative">
              <div
                className="m-author-image aspect-[4/5] bg-navy rounded-2xl overflow-hidden shadow-[0_24px_60px_-24px_rgba(27,33,56,0.4)] bg-cover"
                style={{ backgroundImage: "url('/founder-bio.jpg')", backgroundPosition: "center top" }}
              >
                <div className="w-full h-full flex items-end p-5 text-white bg-gradient-to-t from-navy/70 via-transparent to-transparent">
                  <div>
                    <div className="font-display font-extrabold text-[20px]">Moritz Bohmbach</div>
                    <div className="text-[12px] text-white/70 font-mono tracking-wider uppercase">Founder · BB Brands</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[15px] lg:text-[17px] text-text-2 leading-relaxed mb-4">
                Ich baue mit BB Brands echte Online-Marken auf — kein Berater-Geschwätz, kein Junior-Team. Ich sitze selbst am Shop, schreibe die Werbung, baue die Verkaufsseiten. Founder OS ist mein Solo-Programm, in das ich alles reingepackt habe, was wir intern in zwei Jahren Agentur-Arbeit aufgebaut haben.
              </p>
              <p className="text-[15px] lg:text-[17px] text-text-2 leading-relaxed mb-4">
                Vorher: 4 Jahre im Online-Handel, mehrere eigene Marken gebaut (manche gescheitert, manche bis heute live), Spezialgebiet Markenaufbau und digitale Präsenz, die verkauft. Founder OS ist das, was ich mir selbst gewünscht hätte, als ich angefangen habe.
              </p>
              <p className="text-[15px] lg:text-[17px] text-text-2 leading-relaxed mb-6 lg:mb-7">
                Was du bei mir nicht bekommst: Mastermind-Floskeln, leere Garantien, Lambo-Bilder. Was du bekommst: den exakten Plan + direkten E-Mail-Draht zu mir.
              </p>
              <div className="flex items-center gap-4 lg:gap-6 flex-wrap">
                <div className="font-display italic text-[26px] lg:text-[32px] text-navy leading-none">— Moritz</div>
                <a href="mailto:info@bb-brands.de" className="text-[12px] lg:text-[13px] font-mono text-text-3 tracking-wider hover:text-navy underline underline-offset-4">
                  info@bb-brands.de
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section id="pricing" className="cream-photo-bg pos-right m-section-pad py-12 lg:py-16">
        <div className="max-w-2xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-6">
            <div className="eyebrow mb-2">Preis · Eine Zahl</div>
            <h2 className="h-section text-[clamp(24px,3.5vw,40px)] mb-2">
              Sicher dir jetzt deinen <span className="text-red">Platz</span>.
            </h2>
            <p className="text-[13.5px] lg:text-[14px] text-text-3 max-w-md mx-auto">
              Einmalzahlung. Kein Abo. Kein Upsell. 14 Tage Geld zurück.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_20px_60px_-20px_rgba(27,33,56,0.18)] p-6 lg:p-8">
            <div className="text-center mb-5">
              <div className="price-strikethrough text-[20px] mb-0.5">€ 499</div>
              <div className="price-sale text-[clamp(48px,7vw,80px)]">€ 299</div>
              <div className="text-[11px] text-text-3 mt-1 font-mono tracking-wider uppercase">Einmalzahlung</div>
            </div>

            {/* Top 4 Boni — immer sichtbar */}
            <ul className="space-y-2 mb-2 text-[14px] text-text-2 leading-snug max-w-md mx-auto">
              {[
                "Hauptkurs · 5 Schritte · 196 Lektionen · 90-Tage-Plan",
                "KI-Prompt-Bibliothek für deine Marke (Wert 797 €)",
                "Rechts-Pack für DACH: Impressum, AGB, Datenschutz (Wert 497 €)",
                "Shopify-Vorlagen für Vorbestellungen (Wert 597 €)",
              ].map((b) => (
                <li key={b} className="check-bullet"><span>{b}</span></li>
              ))}
            </ul>

            {/* Mobile: Rest collapsed in details, Desktop: immer sichtbar */}
            <details className="m-bonus-details group max-w-md mx-auto mb-6">
              <summary className="m-bonus-summary cursor-pointer text-center py-3 text-[13px] font-bold text-navy border border-line rounded-md lg:hidden">
                <span className="group-open:hidden">+ 4 weitere Boni anzeigen</span>
                <span className="hidden group-open:inline">— Weniger anzeigen</span>
              </summary>
              <ul className="m-bonus-more space-y-2 mt-3 text-[14px] text-text-2 leading-snug">
                {[
                  "EU-Lieferanten-Datenbank, vorgeprüft (Wert 297 €)",
                  "Inside-Channel mit Updates · für immer (Wert 397 €)",
                  "E-Mail-Support von Moritz · Antwort in 24 h (Wert 497 €)",
                  "15-Minuten-Gespräch mit Moritz · gratis",
                ].map((b) => (
                  <li key={b} className="check-bullet"><span>{b}</span></li>
                ))}
              </ul>
            </details>

            <div className="text-center">
              <a href="#" className="btn-gold w-full max-w-sm mx-auto justify-center">
                Jetzt starten — 299 €
              </a>
              <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
                {[
                  { src: "/payments/paypal.svg", alt: "PayPal" },
                  { src: "/payments/klarna.svg", alt: "Klarna" },
                  { src: "/payments/mastercard.svg", alt: "Mastercard" },
                  { src: "/payments/visa.svg", alt: "VISA" },
                  { src: "/payments/applepay.svg", alt: "Apple Pay" },
                ].map((p) => (
                  <img key={p.alt} src={p.src} alt={p.alt} className="h-6 w-auto object-contain" />
                ))}
              </div>
              <p className="text-[10.5px] text-text-3 mt-2.5 font-mono tracking-wider">
                🔒 SSL-verschlüsselt · DSGVO-konform · 14 Tage Rückgabe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ANTI-GARANTIE ============ */}
      <section className="bg-white m-section-pad py-20 lg:py-28 border-t border-line">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="mb-8 lg:mb-10">
            <div className="font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-red mb-3">
              Was wir NICHT versprechen
            </div>
            <h2 className="h-section text-[clamp(24px,4.5vw,50px)] mb-4 lg:mb-5">
              Kauf das nicht, wenn du eigentlich nur <span className="text-red">träumen</span> willst.
            </h2>
            <p className="text-[14.5px] lg:text-[16px] text-text-2 leading-relaxed">
              Wir haben überlegt, ob wir diesen Teil überhaupt aufschreiben. Aber die leeren Versprechen anderer sind genau der Grund, warum die meisten Anfänger nach drei Monaten frustriert aufgeben. Also lieber jetzt ehrlich als später enttäuscht:
            </p>
          </div>

          <ul className="space-y-1 mb-7 lg:mb-9">
            {[
              <>Wir versprechen dir <strong>keinen Umsatz.</strong> 90 % deines Ergebnisses hängen davon ab, was du wirklich tust — nicht davon, was du kaufst.</>,
              <>Wir versprechen dir <strong>kein passives Einkommen.</strong> Eine Marke aufzubauen ist Arbeit, jeden Tag. Wer dir was anderes verkauft, lügt.</>,
              <>Wir versprechen dir <strong>keinen Überraschungserfolg in 30 Tagen.</strong> Es sind mindestens 90 Tage echte Arbeit — in deinem Tempo, aber dranbleiben musst du selbst.</>,
              <>Wir versprechen dir <strong>keine Garantien</strong>, die wir nicht halten können.</>,
            ].map((t, i) => (
              <li key={i} className="x-bullet check-bullet py-3.5 lg:py-4 border-b border-line text-[14.5px] lg:text-[16px] text-text-2 leading-snug">
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <p className="text-[16px] lg:text-[22px] font-display font-bold leading-snug text-navy">
            Was wir dir versprechen: <span className="text-red">genau das System, mit dem unsere Agentur-Kunden Marken aufbauen, die Millionen umsetzen.</span> Wenn du es Schritt für Schritt umsetzt, hast du am Ende eine eigene Marke. Wenn nicht — dann hast du das Geld auch nicht in dich investiert.
          </p>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section
        className="cream-photo-bg m-section-pad py-20 lg:py-28"
        style={{
          ["--photo-bg" as string]: "url('/founder-faq.jpg')",
          ["--photo-opacity" as string]: "0.32",
          ["--photo-grayscale" as string]: "0%",
        }}
      >
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-8 lg:mb-12">
            <div className="eyebrow mb-3">Häufige Fragen</div>
            <h2 className="h-section text-[clamp(24px,4.5vw,50px)]">
              Zweifel? <span className="text-red">Lies hier.</span>
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-line bg-white">
            {[
              { q: `Ich habe null Erfahrung im Online-Handel. Ist das überhaupt was für mich?`, a: `Ja — genau für dich ist Founder OS gemacht. Schritt 1 fängt nicht beim Shopify-Theme an, sondern bei dir: Was kannst du, was willst du, für wen ist das gemacht. Wir setzen null Vorwissen voraus. Wenn du eine E-Mail schreiben und einen Browser bedienen kannst, reicht das. Was du brauchst: 5–15 Stunden pro Woche und die Bereitschaft, wirklich umzusetzen, nicht nur zu schauen.` },
              { q: `Brauche ich Geld für Lager, Werbung oder eine GmbH?`, a: `Nein. Schritt 1 und 2 (Idee klären + Nachfrage prüfen) kosten dich nichts außer Zeit. In Schritt 2 sammelst du 20 echte Gespräche und 50+ Vorbestellungen — alles ohne einen Cent für Ware. Erst wenn du weißt, dass Fremde wirklich kaufen wollen, gehst du in Schritt 3 und investierst gezielt. Das ist der ganze Sinn der Reihenfolge: kein Geld verbrennen, bevor du Nachfrage hast. Ein Kleingewerbe reicht für den Start — keine GmbH nötig.` },
              { q: `Ich habe noch keine Produktidee. Bin ich raus?`, a: `Im Gegenteil — du bist genau richtig. Schritt 1 ist explizit dafür da: Wir gehen mit dir durch, was du heute liefern könntest, welche Probleme du in deinem Umfeld siehst und welche Marktlücken offen sind. Du startest also nicht ins Blaue, sondern mit einer Idee, die du selbst tragen kannst.` },
              { q: `Wie viel Zeit pro Woche brauche ich realistisch?`, a: `5–15 Stunden pro Woche reichen. Schritt 1 und 2 sind kürzer (1–3 Wochen je), Schritt 3 ist mit 4–6 Wochen der intensivste. Wir sehen Leute, die das in 3 Monaten Vollzeit durchziehen — und Leute, die nebenher 6 Monate brauchen. Beides ist okay, solange du die Schritte nicht überspringst. Du bestimmst dein Tempo.` },
              { q: `Veraltet das Ganze nicht in einem Jahr durch KI?`, a: `Im Gegenteil. KI ist im Kurs fest als Werkzeug eingebaut — wir nutzen sie für Kundenprobleme, Texte, Werbung. Wenn KI besser wird, wird auch dein Output besser. Was nicht veraltet: die Reihenfolge. Erst Nachfrage prüfen, dann investieren — das gilt seit 50 Jahren und wird auch 2030 noch gelten. Alle Updates sind dauerhaft inklusive.` },
              { q: `Warum nur 299 €? Wo ist der Haken?`, a: `Kein Haken. Bewusste Entscheidung: Anfänger haben kein 5.000-€-Budget für einen Mastermind. Wir wollen, dass das Material zu den Leuten kommt, die es wirklich brauchen. Ehrlich: Ein Teil der Käufer wird später Agentur-Kunde von BB Brands — das ist der Plan dahinter, und wir sagen's offen. Aber wenn du nie in den Agentur-Bereich willst, ist das vollkommen okay. Der Kurs steht für sich.` },
              { q: `Was, wenn mir der Kurs nicht gefällt?`, a: `14 Tage Geld zurück, ohne Diskussion. Du schaust dir die ersten zwei Wochen an, und wenn der Kurs nicht hält, was wir versprechen, schreibst du uns kurz auf WhatsApp und bekommst dein Geld zurück. Punkt. Was wir nicht zurückerstatten können: deine Zeit. Deshalb: nur kaufen, wenn du wirklich umsetzen willst.` },
            ].map((f, i) => (
              <details key={i} className="faq-row">
                <summary className="px-6 lg:px-8 py-5 flex items-center justify-between gap-4 text-[16px] tracking-tight hover:bg-bg-soft transition-colors">
                  <span>{f.q}</span>
                </summary>
                <div className="px-6 lg:px-8 pb-6 text-[14.5px] text-text-2 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA STACK ============ */}
      <section className="gradient-navy m-section-pad py-20 lg:py-32 text-white text-center">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <p className="font-display font-extrabold text-[clamp(24px,4.5vw,48px)] leading-tight text-white mb-3">
            Entweder du lernst es <span className="text-gold">strukturiert</span>.
          </p>
          <p className="font-display text-[clamp(16px,3vw,32px)] font-light text-white/60 italic mb-8 lg:mb-10">
            Oder du zahlst es später mit Zeit, Geld und Frust.
          </p>
          <a href="#pricing" className="btn-gold">
            Jetzt starten — 299 €
          </a>
          <div className="mt-5 lg:mt-6 font-mono text-[10.5px] lg:text-[11px] text-white/40 uppercase tracking-[0.2em]">
            Einmalzahlung · 14 Tage Geld zurück · Updates für immer
          </div>
        </div>
      </section>

      {/* ============ STICKY BOTTOM-CTA-BAR (Mobile only) ============ */}
      <div className="m-sticky-cta-bar">
        <div className="m-sticky-cta-bar-price">
          <span className="m-sticky-cta-bar-price-old">499 €</span>
          <span className="m-sticky-cta-bar-price-new">299 €</span>
        </div>
        <a href="#pricing" className="m-sticky-cta-bar-btn">Jetzt starten →</a>
      </div>

      {/* ============ FOOTER ============ */}
      <footer className="bg-navy-deep text-white/60 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          <div>
            <div className="font-display font-extrabold text-white text-[16px]">
              <span className="inline-block transform -scale-x-100" style={{ color: "#4a5cff" }}>B</span><span style={{ color: "#4a5cff" }}>Brands</span> <span className="text-white/30 mx-1">·</span> <span className="text-red">FOUNDER OS</span>
            </div>
            <p className="text-[12px] mt-2 text-white/40">© 2026 BB Brands · Moritz Bohmbach</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-wider">
            <a href="https://bb-brands.de" className="hover:text-gold transition-colors">bb-brands.de</a>
            <a href="https://bb-brands.de/impressum/" className="hover:text-gold transition-colors">Impressum</a>
            <a href="https://bb-brands.de/datenschutz/" className="hover:text-gold transition-colors">Datenschutz</a>
            <a href="mailto:info@bb-brands.de" className="hover:text-gold transition-colors">info@bb-brands.de</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
