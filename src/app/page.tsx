export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text">

      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-50 bg-bg-white/90 backdrop-blur-md border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="https://bb-brands.de" className="bb-logo text-[20px] font-extrabold tracking-tight">
            <span className="mirror">B</span>Brands
            <span className="text-text-3 font-normal mx-2">·</span>
            <span className="text-orange">Founder OS</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[13.5px] font-medium text-text-2">
            <a href="#problem" className="link-underline">Problem</a>
            <a href="#mechanism" className="link-underline">Methode</a>
            <a href="#phases" className="link-underline">Inhalt</a>
            <a href="#faq" className="link-underline">FAQ</a>
          </nav>
          <a href="#pricing" className="bg-text text-white px-5 py-2.5 rounded-full text-[13px] font-bold tracking-wide hover:bg-orange transition-colors">
            €299 sichern →
          </a>
        </div>
      </header>

      {/* ============ 1 · HERO ============ */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 lg:pt-20 pb-16 lg:pb-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-7 bg-orange-soft border border-orange/30 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange"></span>
              </span>
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-orange">
                Live · Mai-Cohort offen
              </span>
            </div>

            <h1 className="h-display text-[clamp(40px,6vw,76px)] mb-7">
              Das interne <span className="text-blue">Launch-Framework</span> hinter modernen D2C-Brands — jetzt als <em>DIY-System</em> für Anfänger.
            </h1>

            <p className="text-[17px] lg:text-[19px] text-text-2 leading-relaxed max-w-[560px] mb-9">
              Lerne Schritt für Schritt, wie du deine erste D2C-Brand validierst, pre-sold launchst und skalierbar aufsetzt — bevor du einen Cent in Inventar oder Logos verbrennst.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-8">
              <a href="#pricing" className="group inline-flex items-center gap-2 bg-text text-white pl-5 pr-6 py-4 rounded-full font-bold text-[15px] hover:bg-orange transition-all hover:-translate-y-0.5">
                <span className="line-through opacity-50 mr-2 font-medium">€499</span>
                Zugriff sichern — €299
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#mechanism" className="text-text-2 font-semibold text-[14px] link-underline">
                Wie's funktioniert
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-text-3">
              <span className="flex items-center gap-2"><span className="text-green font-bold">✓</span> Einmalig · kein Retainer</span>
              <span className="flex items-center gap-2"><span className="text-green font-bold">✓</span> 14-Tage-Garantie</span>
              <span className="flex items-center gap-2"><span className="text-green font-bold">✓</span> WhatsApp-Cohort dabei</span>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            <div className="absolute -top-3 -right-3 z-10">
              <div className="stamp">
                <span className="stamp-top">Live</span>
                <span className="stamp-mid">196</span>
                <span className="stamp-bot">Items</span>
              </div>
            </div>
            <div className="bg-bg-white border border-line rounded-lg overflow-hidden shadow-[0_24px_80px_-32px_rgba(0,0,0,0.18),0_8px_24px_-8px_rgba(255,107,61,0.12)]">
              <div className="px-4 py-2.5 bg-bg-soft border-b border-line flex items-center gap-2 text-[11px] text-text-3 font-mono">
                <span className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-text-3/30"></span>
                  <span className="w-2 h-2 rounded-full bg-text-3/30"></span>
                  <span className="w-2 h-2 rounded-full bg-text-3/30"></span>
                </span>
                <span className="ml-2">founder-os.bb-brands.de</span>
              </div>
              <div className="p-7 lg:p-8">
                <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-orange mb-1">Willkommen zurück</div>
                <div className="h-display text-[26px] mb-1">Hi Sarah.</div>
                <div className="text-[12px] text-text-3 mb-6 font-mono">
                  Dein Fortschritt: <span className="font-bold text-orange">27 / 196 Items</span> · 14 % geschafft
                </div>
                <div className="space-y-2">
                  {[
                    { num: "01", name: "Klären", pct: 80, active: true },
                    { num: "02", name: "Validieren", pct: 32, active: true },
                    { num: "03", name: "Aufstellen", pct: 0 },
                    { num: "04", name: "Launchen", pct: 0 },
                  ].map((p) => (
                    <div key={p.num} className={`flex items-center gap-4 p-3 rounded-[3px] border ${p.active ? "border-orange bg-orange-soft" : "border-line bg-bg-white"}`}>
                      <span className={`text-[10px] font-mono font-bold ${p.active ? "text-orange" : "text-text-3"}`}>PHASE {p.num}</span>
                      <span className="text-[13px] font-bold flex-1">{p.name}</span>
                      <div className="w-16 h-1 bg-line rounded-full overflow-hidden">
                        <div className="bar-fill h-full bg-orange" style={{ width: `${p.pct}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2 · FOUNDER-TALK / VIDEO-PLATZHALTER ============ */}
      <section className="border-t border-line bg-bg-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-center">
          <div className="relative">
            {/* Founder photo — upload to /public/founder-moritz.jpg */}
            <div
              className="aspect-[4/5] bg-text/95 rounded-sm overflow-hidden relative shadow-[0_24px_60px_-24px_rgba(0,0,0,0.4)] bg-center bg-cover"
              style={{ backgroundImage: "url('/founder-moritz.jpg')" }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white/30 font-mono text-[10px] uppercase tracking-widest pointer-events-none">
                <span className="opacity-50">/public/founder-moritz.jpg</span>
              </div>
              <a href="#mechanism" className="absolute inset-0 flex items-center justify-center group cursor-pointer">
                <span className="w-16 h-16 rounded-full bg-orange flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="ml-1"><path d="M8 5v14l11-7z"/></svg>
                </span>
              </a>
            </div>
            <div className="absolute -top-3 -left-3">
              <div className="stamp stamp-blue">
                <span className="stamp-top">90</span>
                <span className="stamp-mid">Sek</span>
                <span className="stamp-bot">Talk</span>
              </div>
            </div>
          </div>

          <div>
            <div className="eyebrow mb-3">Founder-Talk · Moritz</div>
            <h2 className="h-section text-[clamp(28px,3.5vw,42px)] mb-5">
              Warum ich Founder OS gebaut habe — und für <em>wen</em>.
            </h2>
            <div className="space-y-4 text-[16px] text-text-2 leading-relaxed">
              <p>
                Ich baue mit meiner Agentur seit 2024 D2C-Brands operativ auf. In jedem zweiten Discovery-Call sitze ich vor einem Founder mit guter Idee, Energie, etwas Kapital — und einem System, das ihn in 6 Monaten gegen die Wand fahren wird.
              </p>
              <p>
                Nicht weil die Idee schlecht ist. Sondern weil <strong className="text-text">die Reihenfolge falsch ist</strong>: zuerst Logo, dann Inventar, dann Hoffnung. Founder OS ist die umgekehrte Reihenfolge — das exakte Playbook, mit dem wir bei BB Brands launchen.
              </p>
              <p>
                Kein YouTube-Wissen. Kein Mastermind-Geschwafel. Das, was wir intern in Notion liegen haben, runterskaliert für Founder ohne €5k-Budget.
              </p>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-[12px] text-text-3 font-mono tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-orange pulse-dot"></span>
              Video-Version live diese Woche
            </div>
          </div>
        </div>
      </section>

      {/* ============ 3 · THE BIG PROBLEM ============ */}
      <section id="problem" className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">Section 02 · Das Problem</div>
            <h2 className="h-section text-[clamp(34px,5vw,58px)] mb-5 max-w-3xl mx-auto">
              Warum <span className="text-blue">95 %</span> der Anfänger im E-Commerce <em>scheitern</em>.
            </h2>
            <p className="text-[17px] text-text-2 leading-relaxed max-w-2xl mx-auto">
              Es ist nicht das Produkt. Nicht die Idee. Nicht das fehlende Budget. Es sind drei Strukturfehler, die fast alle in den ersten 90 Tagen machen — und die niemand auf YouTube anspricht.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-7 mb-12">
            {[
              { num: "01", title: "Inventar zu früh", text: "Du bestellst 500 Stück, bevor du 50 echte Käufer hast. Drei Monate später stehen sie in deinem Keller. Das Geld ist weg, die Motivation auch." },
              { num: "02", title: "Keine echte Nachfrage", text: "Du baust ein Produkt, das du selbst geil findest — und nimmst an, dass andere das auch tun. Die ersten Ads zeigen dir, dass es nicht so ist. Dann ist's zu spät." },
              { num: "03", title: "Random TikTok kopiert", text: "Jemand auf TikTok hat angeblich 100k im Monat. Du kopierst die Brand. Du verstehst aber nicht, warum es bei dir nicht funktioniert. Survivor-Bias." },
            ].map((c) => (
              <div key={c.num} className="relative bg-bg-white p-9 pt-12 border border-line">
                <div className="absolute -top-4 left-7">
                  <div className="stamp" style={{ background: "var(--color-red)" }}>
                    <span className="stamp-top">Fehler</span>
                    <span className="stamp-mid">{c.num}</span>
                  </div>
                </div>
                <h3 className="h-section text-[22px] mb-3">{c.title}</h3>
                <p className="text-[14.5px] text-text-2 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-bg-dark text-white p-10 lg:p-14 text-center relative overflow-hidden grain">
            <p className="h-section text-[clamp(24px,3.5vw,40px)] leading-tight relative z-10">
              Das Problem ist nicht <span className="line-through opacity-40">Motivation</span>.<br />
              Das Problem ist fehlende <em className="text-orange not-italic font-bold">Struktur</em>.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 4 · THE MECHANISM ============ */}
      <section id="mechanism" className="bg-bg-dark text-white relative overflow-hidden">
        <div className="grain absolute inset-0"></div>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28 relative z-10">
          <div className="text-center mb-14">
            <div className="eyebrow eyebrow-on-dark mb-3">Section 03 · Der Mechanismus</div>
            <h2 className="h-section text-white text-[clamp(34px,5vw,58px)] mb-5 max-w-3xl mx-auto">
              Standard-Launch vs. <em>Pre-Sold Launch</em>.
            </h2>
            <p className="text-[17px] text-white/70 leading-relaxed max-w-2xl mx-auto">
              Der Unterschied zwischen einer Marke, die in 90 Tagen pleite ist, und einer, die in 90 Tagen die ersten 50 Bestellungen hat — sind nicht die Ads. Es ist die Reihenfolge.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 items-stretch">
            <div className="bg-white/[0.03] border border-white/10 p-8 lg:p-10 opacity-70">
              <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/50 font-bold mb-5">Old Way · 95 %</div>
              <h3 className="h-section text-white text-[22px] mb-6">Wie alle es machen</h3>
              <ol className="space-y-2.5 mb-7">
                {["Produkt finden", "Shopify aufbauen", "Ads schalten", "Hoffen"].map((s, i) => (
                  <li key={i} className="flex items-center gap-3 px-4 py-3 bg-white/[0.04] border border-white/5 text-[14.5px]">
                    <span className="text-white/40 font-mono text-[12px] w-5">{i + 1}.</span>
                    <span className="text-white/80">{s}</span>
                  </li>
                ))}
              </ol>
              <div className="bg-red/20 border border-red/40 px-4 py-3 text-[13px] font-bold text-red">
                Day 1 · 0 Sales · Day 90 · pleite
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center text-orange text-5xl font-light px-4">
              →
            </div>
            <div className="flex lg:hidden items-center justify-center text-orange text-3xl font-light py-2">
              ↓
            </div>

            <div className="bg-white/[0.04] border border-orange p-8 lg:p-10 shadow-[0_0_0_1px_var(--color-orange),0_24px_60px_-28px_rgba(255,107,61,0.4)]">
              <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange font-bold mb-5">Pre-Sold Method</div>
              <h3 className="h-section text-white text-[22px] mb-6">Wie wir's bei BB Brands machen</h3>
              <ol className="space-y-2.5 mb-7">
                {["Demand validieren", "Pre-Sales sammeln", "Inventar bestellen", "Skalieren"].map((s, i) => (
                  <li key={i} className="flex items-center gap-3 px-4 py-3 bg-orange/10 border border-orange/30 text-[14.5px]">
                    <span className="text-orange font-mono text-[12px] w-5">{i + 1}.</span>
                    <span className="text-white">{s}</span>
                  </li>
                ))}
              </ol>
              <div className="bg-green/15 border border-green/40 px-4 py-3 text-[13px] font-bold text-green">
                Day 1 · garantierter Umsatz · Skalierung
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5 · THE 5 PHASES ============ */}
      <section id="phases" className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="mb-14 max-w-3xl">
            <div className="eyebrow mb-3">Section 04 · Das 90-Tage-Programm</div>
            <h2 className="h-section text-[clamp(34px,5vw,58px)] mb-5">
              Fünf Phasen. Harte <em>Gates</em>. Kein Skip.
            </h2>
            <p className="text-[17px] text-text-2 leading-relaxed">
              Jede Phase endet mit einem nicht-verhandelbaren Output. Keine Phase 3, bevor Phase 2 sauber ist. Theorie killt nicht — Theorie ohne Anwendung killt.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { num: "01", name: "Klären", q: "Was eigentlich, für wen?", meta: "20 Items · 1–2 Wochen · Founder-Lens · Avatar · Pain-Hypothese", gate: "5 Pflicht-Outputs" },
              { num: "02", name: "Validieren", q: "Will der Markt das wirklich?", meta: "22 Items · 2–3 Wochen · Mom-Test · Pre-Order-Smoke · Margen ≥ 45 %", gate: "≥50 Verbatim-Quotes" },
              { num: "03", name: "Aufstellen", q: "Brand · Shop · Recht · Logistik", meta: "55 Items · 4–6 Wochen · DSGVO · BFSG · Klaviyo · PDP-Funnels", gate: "Shop launchfähig" },
              { num: "04", name: "Launchen", q: "Erste Bestellung von Fremden", meta: "41 Items · 3–4 Wochen · Drop-Day · Influencer · Reviews", gate: "≥50 Bestellungen / 7 Tagen" },
              { num: "05", name: "Skalieren", q: "Wird daraus eine Marke, kein Store?", meta: "58 Items · 90 Tage · Meta · Google · TikTok · VoC-Loop · Trust-Stack", gate: "CPA < AOV × Marge" },
            ].map((p) => (
              <div key={p.num} className="group bg-bg-white border border-line p-6 lg:p-7 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center hover:border-orange hover:translate-x-1 transition-all">
                <div className="font-display font-extrabold text-orange text-[28px] tracking-tight min-w-[60px]">
                  {p.num}
                </div>
                <div>
                  <h3 className="h-section text-[24px] mb-1">{p.name}</h3>
                  <div className="text-[14px] text-text-3 italic mb-2">"{p.q}"</div>
                  <div className="font-mono text-[11.5px] text-text-3 tracking-wide">{p.meta}</div>
                </div>
                <div className="inline-flex items-center gap-2 bg-orange-soft text-orange font-mono text-[11px] font-bold uppercase tracking-wider px-3.5 py-2 border border-orange/30 whitespace-nowrap">
                  Gate · {p.gate}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6 · WHAT MAKES THIS DIFFERENT (USP) ============ */}
      <section className="border-t border-line bg-bg-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">Section 05 · Warum dieser Kurs</div>
            <h2 className="h-section text-[clamp(34px,5vw,58px)] mb-5 max-w-3xl mx-auto">
              Was Founder OS <em>anders</em> macht.
            </h2>
            <p className="text-[17px] text-text-2 leading-relaxed max-w-2xl mx-auto">
              Es gibt 1.000 E-Commerce-Kurse. Hier sind die vier Dinge, die du in keinem anderen findest — und der einzige Grund, warum du das hier kaufen solltest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { num: "01", title: "AI-native, nicht aufgepfropft", text: "AI ist hier kein Marketing-Sticker. Du kriegst die echten Prompts, mit denen wir Pain-Mining, Voice-Docs, Ad-Creatives und Funnel-Texte für Agentur-Kunden bauen. Copy/paste in Claude oder GPT, Output in deine Brand." },
              { num: "02", title: "DACH-ready, nicht US-Übersetzung", text: "BFSG · DSGVO · LUCID · UWG · PAngV · Verpackungsgesetz — alles drin, mit Templates und Checklisten. Keine US-Übersetzung, die dich abmahn-anfällig macht." },
              { num: "03", title: "Echte Agentur-Systeme", text: "Du bekommst nicht meine Meinung. Du bekommst die SOPs, mit denen wir bei BB Brands D2C-Brands operativ aufbauen. Internes Material, kein YouTube-Wissen." },
              { num: "04", title: "Harte Gates, keine Motivation", text: 'Jede Phase endet mit numerischen Pflicht-Outputs: ≥50 Verbatim-Quotes, ≥50 Pre-Order-Optins, ≥10 Reviews. Skip nicht möglich. Kein „wenn du dich gut fühlst, weiter machen".' },
            ].map((u) => (
              <div key={u.num} className="bg-bg-white border-l-[4px] border-blue p-8 lg:p-10 shadow-[1px_1px_30px_rgba(0,0,0,0.06)]">
                <div className="font-mono font-bold text-[11px] tracking-[0.14em] text-blue uppercase mb-3">
                  USP · {u.num}
                </div>
                <h3 className="h-section text-[22px] mb-3">{u.title}</h3>
                <p className="text-[14.5px] text-text-2 leading-relaxed">{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 7 · SOCIAL PROOF ============ */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">Section 06 · Wo das herkommt</div>
            <h2 className="h-section text-[clamp(34px,5vw,58px)] mb-5 max-w-3xl mx-auto">
              Aus echter Agentur-Arbeit. <em>Nicht aus YouTube.</em>
            </h2>
            <p className="text-[17px] text-text-2 leading-relaxed max-w-2xl mx-auto">
              Die SOPs in Founder OS sind die SOPs, mit denen wir bei BB Brands seit 2024 D2C-Brands aufbauen. Das hier ist kein „Best-of-Internet" — es ist das, was bei uns intern liegt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-7">
            {[
              { stat: "5+", label: "Aktive Brands", desc: "D2C-Marken, die wir aktuell operativ aufbauen oder skaliert haben" },
              { stat: "196", label: "SOPs · Items", desc: "Frameworks aus 2+ Jahren Agentur-Arbeit, runtergebrochen auf den DIY-Pfad" },
              { stat: "82", label: "Reusable Sections", desc: "Shop-Sections aus dem internen BB-Repo — direkt nutzbar im Shopify-Theme" },
            ].map((s) => (
              <div key={s.label} className="bg-bg-white border border-line p-9 text-center">
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-text-3 font-bold mb-3">{s.label}</div>
                <div className="font-display font-extrabold text-orange text-[64px] leading-none tracking-tight mb-3">{s.stat}</div>
                <div className="text-[13.5px] text-text-2 leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl mx-auto bg-amber-soft border-l-[4px] border-amber p-6 lg:p-8 text-[14.5px] text-text-2 italic leading-relaxed">
            Wir zeigen hier bewusst keine „Ich habe in 3 Tagen 100k gemacht"-Stories. Das ist Survivor-Bias-Marketing. Was wir zeigen können: das echte Framework, die echten Prozesse, die echten Templates. Ergebnisse hängen von deiner Execution ab — siehe Anti-Garantie weiter unten.
          </div>
        </div>
      </section>

      {/* ============ 8 · BONUS STACK ============ */}
      <section className="border-t border-line bg-bg-soft">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="mb-12">
            <div className="eyebrow mb-3">Section 07 · Was alles drin ist</div>
            <h2 className="h-section text-[clamp(34px,5vw,58px)] mb-5">
              Alle Bausteine. <em>Einmalig.</em>
            </h2>
            <p className="text-[17px] text-text-2 leading-relaxed">
              Kein Upsell-Zwang, kein Premium-Tier mit „echtem" Inhalt. Alles, was du brauchst, ist drin — die Boni sind die SOPs und Templates, die wir intern für Kunden nutzen.
            </p>
          </div>

          <div className="bg-bg-white border border-line">
            {[
              { title: "Founder OS Core · 5 Phasen · 196 Items", desc: "Das Hauptcurriculum mit allen Lessons, Gates und Checklisten", price: "Inklusive", core: true },
              { title: "AI-Brand-Prompt-Bibliothek", desc: "Die exakten Claude/GPT-Prompts für Voice-Docs, Pain-Mining, Ad-Copy, Funnel-Texte", price: "Wert €797" },
              { title: "DACH-Compliance-Pack", desc: "Impressum · AGB · DSGVO · BFSG · Verpackungsgesetz — juristisch geprüfte Templates", price: "Wert €497" },
              { title: "Pre-Sale-Shopify-Templates", desc: "Ready-to-deploy Pre-Order-Pages aus echten Live-Stores", price: "Wert €597" },
              { title: "Geprüfte EU-Lieferanten-Datenbank", desc: "Vorqualifizierte Hersteller für die häufigsten D2C-Kategorien, mit MOQs und Konditionen", price: "Wert €297" },
              { title: "Founder-WhatsApp-Cohort · 90 Tage", desc: "Geschlossene Gruppe mit allen Käufern. Wöchentliche Updates, Q&A, echte Cases.", price: "Wert €597" },
              { title: "Notion-Launch-Master-Plan", desc: "Die internen Docs, mit denen Agentur-Launches geführt werden", price: "Wert €197" },
              { title: "Founder-Direct-DM (limitiert · erste 100)", desc: "Direkter WhatsApp-Zugang zu Moritz, 24h-Antwortzeit. Nach 100 ist der Slot zu.", price: "Wert €997", scarcity: true },
            ].map((b, i) => (
              <div key={i} className={`flex items-center gap-5 px-6 lg:px-8 py-5 ${i < 7 ? "border-b border-line" : ""} ${b.core ? "bg-green-soft" : ""} ${b.scarcity ? "bg-orange-soft" : ""}`}>
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green flex items-center justify-center text-white font-bold text-sm">✓</div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-[15.5px] mb-1 leading-tight">{b.title}</h4>
                  <p className="text-[13px] text-text-3 leading-snug">{b.desc}</p>
                </div>
                <div className="font-mono font-bold text-[13px] text-text-2 whitespace-nowrap">{b.price}</div>
              </div>
            ))}
            <div className="bg-bg-dark text-white px-7 py-6 flex items-center justify-between gap-4">
              <div className="text-[14px] text-white/70 font-medium">Gesamtwert (mit Direct-DM)</div>
              <div className="font-mono font-extrabold text-[24px] text-orange">€4.076</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 9 · PRICING ============ */}
      <section id="pricing" className="bg-bg-dark text-white relative overflow-hidden">
        <div className="grain absolute inset-0"></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28 relative z-10">
          <div className="text-center mb-12">
            <div className="eyebrow eyebrow-on-dark mb-3">Section 08 · Was es kostet</div>
            <h2 className="h-section text-white text-[clamp(34px,5vw,58px)]">
              Eine Investition. <em>Eine Zahl.</em>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto bg-gradient-to-b from-white/[0.05] to-transparent border border-orange p-10 lg:p-14 text-center shadow-[0_32px_80px_-24px_rgba(255,107,61,0.3),0_0_0_1px_rgba(255,107,61,0.2)]">
            <div className="font-mono text-[13px] text-white/40 line-through mb-3 tracking-wider">
              Gesamtwert €4.076
            </div>
            <div className="text-orange text-2xl mb-2">↓</div>
            <div className="font-display font-extrabold text-white text-[clamp(72px,14vw,120px)] leading-none tracking-tighter mb-2">
              <span className="text-orange">€</span>299
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange font-bold mb-9">
              Einmalig
            </div>
            <ul className="text-left inline-block space-y-2.5 mb-10">
              {["Kein Retainer, keine Monats-Gebühr", "Kein Upsell-Zwang im Kurs", "14 Tage Garantie · ohne Bedingung", "Lifetime-Access auf Updates"].map((b) => (
                <li key={b} className="flex items-center gap-3 text-white/90 text-[15px]">
                  <span className="text-orange font-bold">—</span> {b}
                </li>
              ))}
            </ul>
            <div>
              <a href="#" className="group inline-flex items-center gap-3 bg-orange text-white px-10 py-5 rounded-full font-extrabold text-[16px] tracking-wide hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_rgba(255,107,61,0.5)] transition-all">
                Jetzt Zugriff sichern
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <p className="text-[12px] text-white/40 mt-5 font-mono tracking-wider">
                Stripe · Klarna · PayPal · Apple Pay
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 10 · ANTI-GARANTIE ============ */}
      <section className="border-t border-line bg-red-soft">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="mb-10">
            <div className="font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-red mb-3">
              Section 09 · Was wir NICHT versprechen
            </div>
            <h2 className="h-section text-[clamp(30px,4.5vw,50px)] mb-5">
              Kauf das nicht, wenn du keine echte <em>Marke</em> bauen willst.
            </h2>
            <p className="text-[16px] text-text-2 leading-relaxed">
              Wir haben uns lange überlegt, ob wir diese Sektion auf die Page setzen. Aber Hard-Sell-Garantien, die niemand einlösen kann, sind genau das Problem in dieser Branche. Hier ist die Wahrheit:
            </p>
          </div>

          <ul className="space-y-1 mb-9">
            {[
              <>Wir versprechen dir <strong>keinen Umsatz.</strong> Umsatz hängt zu 90 % von deiner Execution ab.</>,
              <>Wir versprechen dir <strong>kein passives Einkommen.</strong> D2C ist Arbeit, jeden Tag.</>,
              <>Wir versprechen dir <strong>keinen Overnight Success.</strong> Es sind 90 Tage strukturierte Arbeit, mindestens.</>,
              <>Wir versprechen dir <strong>keine Garantien</strong>, die wir nicht einhalten können.</>,
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-4 py-4 border-b border-red/15 text-[16px] text-text-2 leading-snug">
                <span className="text-red font-bold text-[20px] flex-shrink-0 leading-none mt-0.5">✕</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <p className="text-[19px] lg:text-[22px] font-bold leading-snug text-text">
            Was wir dir versprechen: <span className="text-orange">das Framework, mit dem unsere Agentur-Kunden bauen.</span> Wenn du es 1:1 umsetzt, hast du eine Marke. Wenn nicht, hast du dein Geld nicht verdient.
          </p>
        </div>
      </section>

      {/* ============ 11 · FAQ ============ */}
      <section id="faq" className="border-t border-line">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="text-center mb-12">
            <div className="eyebrow mb-3">Section 10 · Häufige Fragen</div>
            <h2 className="h-section text-[clamp(30px,4.5vw,50px)]">
              Zweifel? <em>Lies hier.</em>
            </h2>
          </div>

          <div className="bg-bg-white border border-line">
            {[
              {
                q: `Brauche ich vorher Erfahrung im E-Commerce?`,
                a: `Nein. Founder OS ist explizit für Anfänger gebaut — von Pre-Revenue, ohne D2C-Erfahrung. Phase 1 startet beim Founder-Audit (wer bist du, was kannst du heute liefern), nicht bei Shopify-Theme-Auswahl. Was du brauchst: 5–15 Stunden pro Woche für ungefähr 90 Tage. Und Bereitschaft, harte Outputs zu liefern statt nur zu konsumieren.`,
              },
              {
                q: `Brauche ich Startkapital für Inventar oder Ads?`,
                a: `Phase 1 und 2 (Klären + Validieren) kosten dich nichts außer Zeit. Pflicht-Outputs sind: 20 echte Kunden-Calls und ≥50 Pre-Order-Optins — beides ohne Inventar machbar. Erst wenn die Validierung steht, gehst du in Phase 3 und investierst gezielt. Das Pre-Sold-Modell ist explizit dafür gebaut, dass du kein Geld verbrennst, bevor echte Nachfrage da ist.`,
              },
              {
                q: `Was, wenn ich noch keine Produktidee habe?`,
                a: `Dann ist Phase 1 dein Startpunkt. Wir gehen vom Founder-Lens-Audit über Market-Mapping bis zur Produkt-Hypothese — das ist explizit drin, nicht „wir gehen davon aus, dass du eine Idee hast".`,
              },
              {
                q: `Wie viel Zeit brauche ich pro Woche?`,
                a: `5–15 Stunden ist realistisch. Phase 1 + 2 sind kürzer (1–3 Wochen pro Phase), Phase 3 ist mit 4–6 Wochen die intensivste. Wir sehen Founder, die das in 3 Monaten Vollzeit durchziehen — und Founder, die nebenher 6 Monate brauchen. Beides okay, solange du die Gates nicht überspringst.`,
              },
              {
                q: `Was, wenn AI in 12 Monaten alles verändert?`,
                a: `Founder OS ist AI-native gebaut, nicht AI-resistent. Die SOPs nutzen AI als Werkzeug (Pain-Mining-Synthesizer, Voice-Doc-Schreiber, Creative-Generator), nicht als Ersatz für Strategie. Wenn AI besser wird, wird auch der Output besser — die Struktur bleibt. Du bekommst Lifetime-Updates auf Curriculum-Änderungen.`,
              },
              {
                q: `Warum nur €299? Was ist der Haken?`,
                a: `Kein Haken. Der Preis ist eine bewusste Entscheidung: D2C-Anfänger haben kein €5.000-Budget für einen Mastermind. Wir wollen, dass das Material zu den Leuten kommt, für die es gebaut ist. Im Hintergrund: ein Teil der Käufer wird später Agentur-Kunde von BB Brands. Das ist die Backend-Logik, ehrlich kommuniziert. Wenn du nie in den Agentur-Bereich willst — der Kurs steht trotzdem für sich.`,
              },
              {
                q: `Warum nicht einfach kostenlos auf YouTube lernen?`,
                a: `Kannst du. Würde ich nicht empfehlen. YouTube ist optimiert auf Watch-Time, nicht auf deinen Erfolg — du kriegst die Hooks, die Klicks generieren, nicht die unsexy Schritte (Compliance, Margen-Mathematik, Pre-Order-Smoke-Tests). Founder OS ist die Reihenfolge, die Gates, die Checklisten. Genau das, was YouTube nicht liefert.`,
              },
              {
                q: `Gibt's eine Geld-zurück-Garantie?`,
                a: `Ja, 14 Tage. Wenn die ersten zwei Wochen Inhalt nicht halten, was wir versprechen, schreibst du uns kurz auf WhatsApp und wir erstatten 100 % zurück, ohne Diskussion. Was wir nicht garantieren: dass du Umsatz machst. Das hängt von deiner Execution ab — siehe Anti-Garantie weiter oben.`,
              },
            ].map((f, i) => (
              <details key={i} className="faq-row">
                <summary className="px-6 lg:px-8 py-5 flex items-center justify-between gap-4 text-[16px] font-bold tracking-tight hover:bg-bg-soft transition-colors">
                  <span>{f.q}</span>
                </summary>
                <div className="px-6 lg:px-8 pb-6 text-[14.5px] text-text-2 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 12 · FINAL CLOSE ============ */}
      <section className="bg-bg-dark text-white relative overflow-hidden">
        <div className="grain absolute inset-0"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-24 lg:py-36 text-center relative z-10">
          <p className="font-display italic text-[clamp(30px,5vw,52px)] leading-tight mb-10 text-white">
            Entweder du lernst <span className="text-orange not-italic font-extrabold">strukturiert</span> — oder du zahlst später mit Zeit, Geld und Frustration.
          </p>
          <a href="#pricing" className="group inline-flex items-center gap-3 bg-orange text-white px-10 py-5 rounded-full font-extrabold text-[16px] tracking-wide hover:-translate-y-1 hover:shadow-[0_20px_60px_-12px_rgba(255,107,61,0.6)] transition-all">
            Zugriff sichern — €299
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <div className="mt-6 font-mono text-[11px] text-white/40 uppercase tracking-[0.2em]">
            Einmalig · 14-Tage-Garantie · Lifetime-Updates
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-bg-darker text-white/60 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          <div>
            <div className="bb-logo font-extrabold text-white text-[15px]">
              <span className="mirror">B</span>Brands <span className="font-normal mx-1 text-white/40">·</span> <span className="text-orange">Founder OS</span>
            </div>
            <p className="text-[12px] mt-2 text-white/40">© 2026 BB Brands · Moritz Bohmbach</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-wider">
            <a href="https://bb-brands.de" className="hover:text-orange transition-colors">bb-brands.de</a>
            <a href="https://bb-brands.de/impressum/" className="hover:text-orange transition-colors">Impressum</a>
            <a href="https://bb-brands.de/datenschutz/" className="hover:text-orange transition-colors">Datenschutz</a>
            <a href="mailto:info@bb-brands.de" className="hover:text-orange transition-colors">info@bb-brands.de</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
