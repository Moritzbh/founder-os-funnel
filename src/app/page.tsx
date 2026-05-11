export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text-2">

      {/* ============ WARNING-BANNER (sticky-top) ============ */}
      <div className="warning-banner">
        <strong>Achtung:</strong> Für DACH-Solo-Founder, die ihre erste D2C-Brand <u>Pre-Sold launchen</u> wollen
      </div>

      {/* ============ HERO ============ */}
      <section className="sky-bg pt-8 lg:pt-10 pb-16 lg:pb-24">
        {/* Logo */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-12 lg:mb-16">
          <a href="https://bb-brands.de" className="inline-flex items-center gap-2 font-display font-extrabold text-[18px] tracking-tight text-navy">
            <span className="inline-block transform -scale-x-100">B</span>Brands
            <span className="text-text-3 mx-1 font-normal">·</span>
            <span className="text-red">FOUNDER OS</span>
            <span className="text-[10px] font-mono align-top text-text-3">™</span>
          </a>
        </div>

        {/* Hero Headlines */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center mb-14 lg:mb-20">
          <h1 className="h-display text-[clamp(48px,9vw,124px)] mb-5">
            FOUNDER OS
          </h1>
          <p className="font-body text-[clamp(18px,2.2vw,26px)] text-navy max-w-3xl mx-auto leading-snug font-normal">
            Was 0-€-Founder in den ersten <strong className="font-bold">erfolgreichen Pre-Sold-Launch</strong> verwandelt.
          </p>
        </div>

        {/* Hero Below: Video LEFT + Product-Card RIGHT */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
          {/* Video / Founder-Talk Placeholder */}
          <div className="aspect-video bg-navy rounded-2xl overflow-hidden relative shadow-[0_24px_80px_-24px_rgba(27,33,56,0.4)]"
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
          <div className="product-card">
            <div className="flex gap-6 mb-7">
              {/* Course Cover Mockup */}
              <div className="flex-shrink-0 w-[120px] aspect-[3/4] bg-navy rounded-lg overflow-hidden relative shadow-xl flex flex-col justify-end p-3 text-white"
                   style={{ background: "linear-gradient(135deg, #1b2138 0%, #2a3252 100%)" }}>
                <div className="text-[9px] font-mono uppercase tracking-widest opacity-60 mb-1">DACH · 2026</div>
                <div className="font-display font-extrabold text-[16px] leading-none mb-1">FOUNDER<br/>OS</div>
                <div className="text-[10px] opacity-70 font-medium">Das Agentur-Framework</div>
                <div className="absolute top-3 right-3 px-2 py-0.5 bg-gold text-navy text-[8px] font-extrabold rounded-sm uppercase tracking-wider">
                  v1
                </div>
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
                <span><strong>Pre-Sold-Launch</strong> statt 6 Monate Inventar-Verbrennen — die exakte Methode unserer Agentur.</span>
              </li>
              <li className="check-bullet">
                <span>Vom <strong>Idee-Stadium zum ersten echten Käufer</strong> in 90 Tagen — mit harten Gates, kein Skip.</span>
              </li>
              <li className="check-bullet">
                <span>Das Framework hinter <strong>D2C-Brands ab 2024</strong>, AI-native gebaut, DACH-Compliance ready.</span>
              </li>
            </ul>

            <a href="#pricing" className="btn-gold w-full justify-center">
              Jetzt Zugriff sichern
            </a>

            {/* Payment Icons */}
            <div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
              {["PayPal", "Klarna", "Mastercard", "VISA", "Apple Pay"].map((p) => (
                <span key={p} className="text-[11px] font-mono font-bold text-text-3 px-2.5 py-1 bg-bg-soft rounded-md">{p}</span>
              ))}
            </div>

            <p className="text-[11.5px] text-text-3 text-center mt-4">
              * Sofortiger Zugriff · Lifetime-Updates · 14 Tage Garantie
            </p>
          </div>
        </div>

        {/* Authority-Transfer-Statement */}
        <div className="max-w-3xl mx-auto px-6 lg:px-10 mt-20 lg:mt-28 text-center">
          <div className="eyebrow mb-5">Aus der Praxis</div>
          <p className="font-display font-extrabold text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-navy mb-5">
            Wir betreuen Unternehmen, die <span className="text-red">2 Mio +</span> im Jahr mit ihrer E-Commerce-Brand umsetzen. Jetzt zeigen wir dir unser Framework, wie das geht.
          </p>
          <p className="font-display font-bold text-[clamp(18px,2.4vw,26px)] text-navy/80 leading-tight">
            Das einzige, was du tun musst: <span className="underline decoration-red decoration-[3px] underline-offset-[6px]">es 1:1 umsetzen.</span>
          </p>
        </div>

        {/* Trust Logo Strip */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mt-16 lg:mt-20">
          <div className="trust-strip border-t border-line/60">
            <span className="trust-strip-item">Shopify Partner</span>
            <span className="trust-strip-item">Meta Business</span>
            <span className="trust-strip-item">Klaviyo Master</span>
            <span className="trust-strip-item">Google Partner</span>
            <span className="trust-strip-item">DSGVO-konform</span>
            <span className="trust-strip-item">Stripe Verified</span>
          </div>
        </div>
      </section>

      {/* ============ AUDIENCE QUALIFICATION — "Wer sollte das nutzen?" ============ */}
      <section className="bg-bg-soft py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center mb-12 lg:mb-16">
          <h2 className="h-section text-[clamp(34px,5vw,58px)] mb-4">
            Wer sollte Founder OS nutzen?
          </h2>
          <p className="text-[17px] text-text-3 max-w-2xl mx-auto leading-relaxed">
            Wir filtern bewusst. Was wir liefern, ist für eine spezifische Stage gebaut — nicht für jeden Founder.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          {/* For You */}
          <div className="bg-white rounded-2xl border border-line p-8 lg:p-10 shadow-[0_4px_24px_rgba(27,33,56,0.06)]">
            <div className="inline-flex items-center gap-2 bg-green-soft text-green font-bold text-[12px] tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
              <span>✓</span> Für dich, wenn …
            </div>
            <ul className="space-y-3.5 text-[15px] text-text-2 leading-snug">
              {[
                <>Du <strong>Pre-Revenue</strong> bist — 0 € Umsatz oder erste Versuche, die nicht skaliert haben.</>,
                <>Du eine <strong>Idee oder ein Produkt-Konzept</strong> hast, aber keinen klaren Pfad zum Launch.</>,
                <>Du in DACH operierst und <strong>BFSG, DSGVO, UWG</strong> ernst nimmst (oder solltest).</>,
                <>Du bereit bist, <strong>5–15 Stunden pro Woche</strong> für 90 Tage strukturiert zu arbeiten.</>,
                <>Du willst <strong>kein YouTube-Wissen, sondern echte Agentur-Systeme</strong> mit Pflicht-Outputs.</>,
              ].map((t, i) => (
                <li key={i} className="check-bullet"><span>{t}</span></li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className="bg-white rounded-2xl border border-line p-8 lg:p-10 shadow-[0_4px_24px_rgba(27,33,56,0.06)]">
            <div className="inline-flex items-center gap-2 bg-red/10 text-red font-bold text-[12px] tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
              <span>✕</span> Nicht für dich, wenn …
            </div>
            <ul className="space-y-3.5 text-[15px] text-text-2 leading-snug">
              {[
                <>Du schon &gt; <strong>5k MRR</strong> machst — dann ist die <a href="https://bb-brands.de/audit/" className="text-navy underline underline-offset-2 font-semibold">BB-Brands-Agentur</a> der richtige Pfad.</>,
                <>Du <strong>passives Einkommen</strong> oder Overnight-Success suchst — D2C ist Arbeit, jeden Tag.</>,
                <>Du <strong>nur konsumieren</strong> willst, ohne harte Outputs zu liefern.</>,
                <>Du kein DACH-Markt bedienst — US-Konkurrenz hat eigene Compliance-Hürden.</>,
                <>Du Umsatz-Garantien suchst — wir geben keine. Siehe Anti-Garantie weiter unten.</>,
              ].map((t, i) => (
                <li key={i} className="x-bullet check-bullet"><span>{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ EINBLICK IN DEN KURS — 5 Phasen Chapter-Breakdown ============ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center mb-14 lg:mb-20">
          <div className="eyebrow mb-3">Einblick in den Kurs</div>
          <h2 className="h-section text-[clamp(34px,5vw,58px)] mb-5">
            5 Phasen. 196 Items. <span className="text-red">Harte Gates.</span>
          </h2>
          <p className="text-[17px] text-text-2 max-w-2xl mx-auto leading-relaxed">
            Jede Phase endet mit einem nicht-verhandelbaren Output. Keine Phase 3, bevor Phase 2 sauber ist.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-6 lg:gap-8">
          {[
            { num: "01", name: "Klären", q: "Was eigentlich, für wen?", items: "20 Items · 1–2 Wochen", points: ["Founder-Lens-Audit (Passion + Skills + Bandwidth)", "Avatar-Definition + Wettbewerber-Map", "Hero-Produkt-Hypothese formulieren"], gate: "5 Pflicht-Outputs vor Phase 2", color: "navy" },
            { num: "02", name: "Validieren", q: "Will der Markt das wirklich?", items: "22 Items · 2–3 Wochen", points: ["Reddit-Pain-Mining + 20 Mom-Test-Calls", "Pre-Order-Smoke-Test (≥50 Optins)", "Margen-Mathematik: ≥45 % bestätigen"], gate: "≥50 Verbatim-Quotes + Pivot-Decision", color: "navy" },
            { num: "03", name: "Aufstellen", q: "Brand · Shop · Recht · Logistik", items: "55 Items · 4–6 Wochen", points: ["Brand-DNA · Visual Keyframe · Shopify-Setup", "DACH-Compliance: DSGVO · BFSG · LUCID · PAngV", "Klaviyo-Flows + Tracking (Pixel + CAPI)"], gate: "Shop launchfähig + Compliance live", color: "navy" },
            { num: "04", name: "Launchen", q: "Erste Bestellung von Fremden", items: "41 Items · 3–4 Wochen", points: ["Drop-Day-Routine + Pre-Launch-Mail-Sequenz", "Influencer-Outreach (UWG-konform)", "Reviews + Trust-Aufbau in den ersten 7 Tagen"], gate: "≥50 Bestellungen · ≥10 Reviews", color: "navy" },
            { num: "05", name: "Skalieren", q: "Wird daraus eine Marke, kein Store?", items: "58 Items · 90 Tage", points: ["Meta/Google/TikTok-Performance-Marketing", "Voice-of-Customer-Loop + Email-Skalierung", "Team-Aufbau · Drop-Kalender · Trust-Stack"], gate: "CPA < AOV × Marge · Repeat ≥ 15 %", color: "navy", spanFull: true },
          ].map((p) => (
            <div key={p.num} className={`phase-chapter ${p.spanFull ? "lg:col-span-2" : ""}`}>
              <div className="bg-navy text-white p-7 lg:p-9 grid grid-cols-[auto_1fr] gap-6 items-center">
                <div className="font-display font-extrabold text-[64px] lg:text-[72px] leading-none text-gold tracking-tighter">{p.num}</div>
                <div>
                  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/60 mb-1">Phase {p.num}</div>
                  <h3 className="h-section h-on-dark text-[28px] lg:text-[32px] mb-1">{p.name}</h3>
                  <div className="text-[14px] text-white/70 italic">"{p.q}"</div>
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

        {/* Mid-Page CTA */}
        <div className="max-w-2xl mx-auto px-6 mt-16 lg:mt-20 text-center">
          <p className="text-[16px] text-text-3 mb-5">Bereit für den vollständigen Pfad?</p>
          <a href="#pricing" className="btn-gold">
            Jetzt Zugriff sichern — € 299
          </a>
        </div>
      </section>

      {/* ============ TESTIMONIALS / NAMED CASES ============ */}
      <section className="bg-bg-soft py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center mb-14">
          <h2 className="h-section text-[clamp(34px,5vw,58px)] mb-4">
            Aus echter <span className="text-red">Agentur-Arbeit</span>.
          </h2>
          <p className="text-[17px] text-text-3 max-w-2xl mx-auto leading-relaxed">
            Die SOPs in Founder OS sind die SOPs, mit denen wir seit 2024 bei BB Brands operativ Brands aufbauen. Hier ein paar der Partner:
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-6">
          {[
            { brand: "Hearo", category: "Hearables · D2C", quote: "Operativer Build von der Brand-DNA bis zur PDP. AI-native Funnel-Logik, DACH-compliance ready.", icon: "H" },
            { brand: "Bachgold", category: "Wasserfiltration · DACH", quote: "Bundle-Relaunch + 15 Custom-PDPs + Section-Library. Pre-Cutover ohne Downtime, idempotente Migration.", icon: "B" },
            { brand: "Wake Performance", category: "Sports · Pre-Launch", quote: "Drop-Plan, E-Mail-Setup, Performance-Marketing-Beratung. Aktuell Pre-Launch, Pre-Revenue.", icon: "W" },
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

        <p className="text-center text-[12px] text-text-3 mt-10 font-mono tracking-wider max-w-3xl mx-auto px-6">
          Wir zeigen bewusst keine „100k-in-3-Tagen"-Screenshots. Survivor-Bias-Marketing ist genau das Problem in dieser Branche.
        </p>
      </section>

      {/* ============ AUTHORITY STATS ============ */}
      <section className="bg-navy py-20 lg:py-28 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-10 text-center">
          {[
            { stat: "5+", label: "D2C-Brands", desc: "operativ aufgebaut oder skaliert seit 2024" },
            { stat: "196", label: "SOPs · Items", desc: "Frameworks aus 2+ Jahren Agentur-Arbeit" },
            { stat: "82", label: "Shop-Sections", desc: "wiederverwendbar aus dem BB-Repo" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display font-extrabold text-gold text-[80px] lg:text-[96px] leading-none mb-2">{s.stat}</div>
              <div className="font-display font-bold text-[20px] text-white mb-2">{s.label}</div>
              <div className="text-[14px] text-white/60 leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ AUTHOR BIO — Über Moritz ============ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="eyebrow mb-3">Über den Autor</div>
            <h2 className="h-section text-[clamp(34px,5vw,50px)]">
              Wer das <span className="text-red">gebaut</span> hat.
            </h2>
          </div>

          <div className="grid md:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-center">
            <div className="relative">
              <div
                className="aspect-[4/5] bg-navy rounded-2xl overflow-hidden shadow-[0_24px_60px_-24px_rgba(27,33,56,0.4)] bg-center bg-cover"
                style={{ backgroundImage: "url('/founder-moritz.jpg')" }}
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
              <p className="text-[17px] text-text-2 leading-relaxed mb-4">
                Ich baue mit BB Brands D2C-Marken operativ auf — kein Berater-Geschwafel, kein Junior-Team. Ich sitze selbst am Shop, schreibe die Ads, baue die Funnel. Founder OS ist mein Solo-Programm, in das ich alle SOPs aus zwei Jahren Agentur-Arbeit gepackt habe.
              </p>
              <p className="text-[17px] text-text-2 leading-relaxed mb-4">
                Vorher: 6+ Jahre E-Commerce, mehrere eigene Brands gebaut (manche gescheitert, manche live), DACH-Compliance-Spezialisierung. Founder OS ist das, was ich mir selbst gewünscht hätte, als ich angefangen habe.
              </p>
              <p className="text-[17px] text-text-2 leading-relaxed mb-7">
                Was du bei mir nicht bekommst: Mastermind-Geschwafel, fake Garantien, Lambo-Lifestyle-Bilder. Was du bekommst: das exakte Playbook + direkten Email-Draht.
              </p>
              <div className="flex items-center gap-6">
                <div className="font-display italic text-[32px] text-navy leading-none">— Moritz</div>
                <a href="mailto:info@bb-brands.de" className="text-[13px] font-mono text-text-3 tracking-wider hover:text-navy underline underline-offset-4">
                  info@bb-brands.de
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section id="pricing" className="bg-bg-soft py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <div className="eyebrow mb-3">Pricing · Eine Zahl</div>
            <h2 className="h-section text-[clamp(34px,5vw,58px)] mb-4">
              Sicher dir jetzt deinen <span className="text-red">Zugang</span>.
            </h2>
            <p className="text-[16px] text-text-3 max-w-xl mx-auto">
              Einmalig. Kein Retainer. Kein Upsell-Zwang. 14 Tage Garantie ohne Bedingung.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-[0_24px_80px_-24px_rgba(27,33,56,0.2)] p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="price-strikethrough mb-1">€ 499</div>
              <div className="price-sale text-[clamp(64px,10vw,120px)]">€ 299</div>
              <div className="text-[13px] text-text-3 mt-2 font-mono tracking-wider uppercase">Einmalig</div>
            </div>

            <ul className="space-y-3 mb-9 text-[15.5px] text-text-2 leading-snug max-w-lg mx-auto">
              {[
                "5 Phasen · 196 Items · 90-Tage-Programm",
                "AI-Brand-Prompt-Bibliothek (Wert € 797)",
                "DACH-Compliance-Pack (Wert € 497)",
                "Pre-Sale-Shopify-Templates (Wert € 597)",
                "Geprüfte EU-Lieferanten-Datenbank (Wert € 297)",
                "Founder-OS-Inside-Channel · Lifetime (Wert € 397)",
                "Founder-Email-Support · 24h-Antwort (Wert € 497)",
                "Discovery-Call mit Moritz · 15 Min gratis",
              ].map((b) => (
                <li key={b} className="check-bullet"><span>{b}</span></li>
              ))}
            </ul>

            <div className="text-center">
              <a href="#" className="btn-gold w-full max-w-md mx-auto justify-center">
                Jetzt Zugriff sichern — € 299
              </a>
              <div className="mt-5 flex items-center justify-center gap-2 flex-wrap">
                {["PayPal", "Klarna", "Mastercard", "VISA", "Apple Pay", "Stripe"].map((p) => (
                  <span key={p} className="text-[10px] font-mono font-bold text-text-3 px-2 py-1 bg-bg-soft rounded">{p}</span>
                ))}
              </div>
              <p className="text-[11px] text-text-3 mt-3 font-mono tracking-wider">
                🔒 SSL-verschlüsselt · DSGVO-konform · 14 Tage Rückgabe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ANTI-GARANTIE ============ */}
      <section className="bg-white py-20 lg:py-28 border-t border-line">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <div className="font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-red mb-3">
              Was wir NICHT versprechen
            </div>
            <h2 className="h-section text-[clamp(30px,4.5vw,50px)] mb-5">
              Kauf das nicht, wenn du keine echte <span className="text-red">Marke</span> bauen willst.
            </h2>
            <p className="text-[16px] text-text-2 leading-relaxed">
              Wir haben uns überlegt, ob wir das auf die Page setzen. Aber Hard-Sell-Garantien, die niemand einlösen kann, sind das Problem dieser Branche. Hier ist die Wahrheit:
            </p>
          </div>

          <ul className="space-y-1 mb-9">
            {[
              <>Wir versprechen dir <strong>keinen Umsatz.</strong> Umsatz hängt zu 90 % von deiner Execution ab.</>,
              <>Wir versprechen dir <strong>kein passives Einkommen.</strong> D2C ist Arbeit, jeden Tag.</>,
              <>Wir versprechen dir <strong>keinen Overnight Success.</strong> 90 Tage strukturierte Arbeit, mindestens.</>,
              <>Wir versprechen dir <strong>keine Garantien</strong>, die wir nicht einhalten können.</>,
            ].map((t, i) => (
              <li key={i} className="x-bullet check-bullet py-4 border-b border-line text-[16px] text-text-2 leading-snug">
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <p className="text-[19px] lg:text-[22px] font-display font-bold leading-snug text-navy">
            Was wir dir versprechen: <span className="text-red">das Framework, mit dem unsere Agentur-Kunden bauen.</span> Wenn du es 1:1 umsetzt, hast du eine Marke. Wenn nicht, hast du dein Geld nicht verdient.
          </p>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-bg-soft py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="eyebrow mb-3">Häufige Fragen</div>
            <h2 className="h-section text-[clamp(30px,4.5vw,50px)]">
              Zweifel? <span className="text-red">Lies hier.</span>
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-line bg-white">
            {[
              { q: `Brauche ich vorher Erfahrung im E-Commerce?`, a: `Nein. Founder OS ist explizit für Anfänger gebaut — von Pre-Revenue, ohne D2C-Erfahrung. Phase 1 startet beim Founder-Audit, nicht bei der Shopify-Theme-Auswahl. Was du brauchst: 5–15 Stunden pro Woche für rund 90 Tage. Bereitschaft, Outputs zu liefern statt nur zu konsumieren.` },
              { q: `Brauche ich Startkapital für Inventar oder Ads?`, a: `Phase 1 und 2 kosten dich nichts außer Zeit. Pflicht-Outputs: 20 echte Kunden-Calls und ≥50 Pre-Order-Optins — beides ohne Inventar machbar. Erst nach Validierung gehst du in Phase 3 und investierst gezielt. Das Pre-Sold-Modell ist explizit dafür gebaut, dass du kein Geld verbrennst, bevor echte Nachfrage da ist.` },
              { q: `Was, wenn ich noch keine Produktidee habe?`, a: `Dann ist Phase 1 dein Startpunkt. Wir gehen vom Founder-Lens-Audit über Market-Mapping bis zur Produkt-Hypothese — explizit drin.` },
              { q: `Wie viel Zeit brauche ich pro Woche?`, a: `5–15 Stunden ist realistisch. Phase 1 + 2 sind kürzer (1–3 Wochen pro Phase), Phase 3 ist mit 4–6 Wochen die intensivste.` },
              { q: `Was, wenn AI in 12 Monaten alles verändert?`, a: `Founder OS ist AI-native gebaut, nicht AI-resistent. Die SOPs nutzen AI als Werkzeug, nicht als Ersatz für Strategie. Wenn AI besser wird, wird auch der Output besser — die Struktur bleibt. Lifetime-Updates inkludiert.` },
              { q: `Warum nur € 299? Was ist der Haken?`, a: `Kein Haken. D2C-Anfänger haben kein € 5.000-Budget für Masterminds. Wir wollen das Material zu den Leuten bringen, für die es gebaut ist. Backend-Logik ehrlich: ein Teil der Käufer wird später Agentur-Kunde. Wenn nicht — der Kurs steht für sich.` },
              { q: `Gibt's eine Geld-zurück-Garantie?`, a: `Ja, 14 Tage. Wenn die ersten zwei Wochen Inhalt nicht halten, was wir versprechen, schreib uns auf WhatsApp und wir erstatten 100 %, ohne Diskussion. Was wir nicht garantieren: dass du Umsatz machst.` },
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
      <section className="gradient-navy py-24 lg:py-32 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="font-display font-extrabold text-[clamp(28px,4.5vw,48px)] leading-tight text-white mb-3">
            Entweder du lernst <span className="text-gold">strukturiert</span>.
          </p>
          <p className="font-display text-[clamp(20px,3vw,32px)] font-light text-white/60 italic mb-10">
            Oder du zahlst später mit Zeit, Geld und Frustration.
          </p>
          <a href="#pricing" className="btn-gold">
            Jetzt Zugriff sichern — € 299
          </a>
          <div className="mt-6 font-mono text-[11px] text-white/40 uppercase tracking-[0.2em]">
            Einmalig · 14-Tage-Garantie · Lifetime-Updates
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-navy-deep text-white/60 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          <div>
            <div className="font-display font-extrabold text-white text-[16px]">
              <span className="inline-block transform -scale-x-100">B</span>Brands <span className="text-white/30 mx-1">·</span> <span className="text-red">FOUNDER OS</span>
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
