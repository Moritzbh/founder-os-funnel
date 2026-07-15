// AUTO-GENERATED von scratchpad/gen-course.mjs — nicht von Hand editieren.
// Quelle: 01-agentur/Kurs/phase-*/index.html + lesson-*.html
// 11 echte Lektionen, 196 Items geplant.

export type CourseItem = {
  num: string;
  itemId: string;
  title: string;
  tag: string;
  slug: string | null;
  available: boolean;
};
export type CourseModule = {
  id: string;
  title: string;
  count: string;
  items: CourseItem[];
};
export type CoursePhase = {
  phase: number;
  eyebrow: string;
  title: string;
  question: string;
  weeks: string;
  itemsTotal: number;
  lead: string;
  modules: CourseModule[];
};
export type Lesson = {
  slug: string;
  phase: number;
  itemId: string;
  eyebrow: string;
  title: string;
  summary: string;
  body: string;
  nextEyebrow: string | null;
  nextTitle: string | null;
};

export const PHASES: CoursePhase[] = [
  {
    "phase": 1,
    "eyebrow": "Foundation",
    "title": "Klären",
    "question": "Was eigentlich, für wen?",
    "weeks": "1–2 Wochen",
    "itemsTotal": 20,
    "lead": "Hirn-Arbeit am Schreibtisch. Wer bist du, was kannst du, für wen baust du, wo sitzt du im Markt, was vermutest du, schmerzt deine Zielgruppe? Diese fünf Antworten sind das Fundament — alles andere baut darauf auf.",
    "modules": [
      {
        "id": "MODUL 1.1",
        "title": "Founder-Lens",
        "count": "4 Items",
        "items": [
          {
            "num": "01",
            "itemId": "phase-1-01",
            "title": "Passion-Audit (was treibt dich wirklich?)",
            "tag": "LESSON",
            "slug": "founder-lens",
            "available": true
          },
          {
            "num": "02",
            "itemId": "phase-1-02",
            "title": "Skills-Inventar (was kannst du heute liefern?)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "03",
            "itemId": "phase-1-03",
            "title": "Profit-Reality-Check (kannst du davon leben?)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "04",
            "itemId": "phase-1-04",
            "title": "Bandwidth-Definition (Solo · Side-Hustle · Vollzeit)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 1.2",
        "title": "Idee &amp; Produkt-Skizze",
        "count": "4 Items",
        "items": [
          {
            "num": "05",
            "itemId": "phase-1-05",
            "title": "Idee-Findung (oder existierende Idee schärfen)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "06",
            "itemId": "phase-1-06",
            "title": "Hero-Produkt-Logik (1 SKU = 80 % Umsatz)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "07",
            "itemId": "phase-1-07",
            "title": "Produkt-Hypothese formulieren (was genau verkaufst du?)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "08",
            "itemId": "phase-1-08",
            "title": "Bundle-Vision (komplementäre Produkte als Quick-Skizze)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 1.3",
        "title": "Avatar-Definition",
        "count": "4 Items",
        "items": [
          {
            "num": "09",
            "itemId": "phase-1-09",
            "title": "Charakterisieren der Zielgruppe (Demografie + Psychografie)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "10",
            "itemId": "phase-1-10",
            "title": "Welchen \"Vibe\" soll deine Brand widerspiegeln?",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "11",
            "itemId": "phase-1-11",
            "title": "Welches Main-Gefühl willst du verkaufen?",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "12",
            "itemId": "phase-1-12",
            "title": "Avatar Sheet — strukturierter Steckbrief",
            "tag": "TEMPLATE",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 1.4",
        "title": "Wettbewerber-Map",
        "count": "4 Items",
        "items": [
          {
            "num": "13",
            "itemId": "phase-1-13",
            "title": "Top-5-Wettbewerber identifizieren",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "14",
            "itemId": "phase-1-14",
            "title": "Schwartz Awareness × Sophistication-Mapping",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "15",
            "itemId": "phase-1-15",
            "title": "Lücken-Analyse (wo ist Platz im Markt?)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "16",
            "itemId": "phase-1-16",
            "title": "USP formulieren (Differentiation-These)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 1.5",
        "title": "Pain-Hypothese",
        "count": "4 Items",
        "items": [
          {
            "num": "17",
            "itemId": "phase-1-17",
            "title": "Was glaubst du, schmerzt deine Zielgruppe?",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "18",
            "itemId": "phase-1-18",
            "title": "Existing-Solutions-Hypothese (was nutzen sie heute?)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "19",
            "itemId": "phase-1-19",
            "title": "Frustration-Hypothese (was nervt am Status quo?)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "20",
            "itemId": "phase-1-20",
            "title": "Jobs-to-be-Done (was wollen sie wirklich erreichen?)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      }
    ]
  },
  {
    "phase": 2,
    "eyebrow": "Make-or-Break",
    "title": "Validieren",
    "question": "Will der Markt das wirklich?",
    "weeks": "2–3 Wochen",
    "itemsTotal": 22,
    "lead": "Raus aus dem Schreibtisch. Konzept gegen Realität testen — bevor du einen Cent in Lieferanten, Logos oder Shopify-Apps steckst. Wenn die Validation kippt, ist Pivot 100× billiger als später.",
    "modules": [
      {
        "id": "MODUL 2.1",
        "title": "Pain-Mining (mit Filter aus Phase 1)",
        "count": "5 Items",
        "items": [
          {
            "num": "01",
            "itemId": "phase-2-01",
            "title": "Reddit-Pain-Mining (3–5 gefilterte Subs nach Avatar)",
            "tag": "LESSON",
            "slug": "pain-mining-reddit",
            "available": true
          },
          {
            "num": "02",
            "itemId": "phase-2-02",
            "title": "Foren-Recherche (Quora, FB-Gruppen, Branchen-Foren)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "03",
            "itemId": "phase-2-03",
            "title": "Amazon Reviews 5★ + 1★ (was lieben sie · Horror-Stories)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "04",
            "itemId": "phase-2-04",
            "title": "Verbatim-Datenbank ≥50 Quotes aufbauen",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "05",
            "itemId": "phase-2-05",
            "title": "Insider-Sprache extrahieren",
            "tag": "TEMPLATE",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 2.2",
        "title": "Mom-Test 20 Calls",
        "count": "5 Items",
        "items": [
          {
            "num": "06",
            "itemId": "phase-2-06",
            "title": "Mom-Test verstehen (Fitzpatrick-Framework, 3 Regeln)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "07",
            "itemId": "phase-2-07",
            "title": "20-Calls-Drill in 14 Tagen",
            "tag": "LESSON",
            "slug": "mom-test-20-calls",
            "available": true
          },
          {
            "num": "08",
            "itemId": "phase-2-08",
            "title": "Customer-Discovery-Interview-Skripte",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "09",
            "itemId": "phase-2-09",
            "title": "Aufnahme + Transkription (Otter / Zoom Cloud)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "10",
            "itemId": "phase-2-10",
            "title": "Auswertungs-Framework + Pattern-Recognition",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 2.3",
        "title": "Pre-Order-Smoke-Test",
        "count": "4 Items",
        "items": [
          {
            "num": "11",
            "itemId": "phase-2-11",
            "title": "Coming-Soon-Page Setup (Shopify-Light)",
            "tag": "LESSON",
            "slug": "pre-order-smoke-test",
            "available": true
          },
          {
            "num": "12",
            "itemId": "phase-2-12",
            "title": "Pre-Order-Mechanik (Zahlbar oder Reservierung)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "13",
            "itemId": "phase-2-13",
            "title": "Pre-Order-Conversion-Schwelle (≥50 Optins)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "14",
            "itemId": "phase-2-14",
            "title": "Hypothesen-Test gegen Phase-1-Pain-Hypothese",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 2.4",
        "title": "Margen-Mathematik (gekoppelt mit Lieferanten-Anfrage)",
        "count": "5 Items",
        "items": [
          {
            "num": "15",
            "itemId": "phase-2-15",
            "title": "Total-Landed-Cost-Rechnung",
            "tag": "LESSON",
            "slug": "margen-mathematik",
            "available": true
          },
          {
            "num": "16",
            "itemId": "phase-2-16",
            "title": "45-%-Gross-Margin-Schwelle als Pflicht-Gate",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "17",
            "itemId": "phase-2-17",
            "title": "Test-Budget-Realität (genug für 30 Tage Creative-Tests)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "18",
            "itemId": "phase-2-18",
            "title": "Pre-Revenue-Cashflow-Plan (6 Monate)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "19",
            "itemId": "phase-2-19",
            "title": "Pre-Revenue-Spreadsheet-Template (Download)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 2.5",
        "title": "Pivot-Decision",
        "count": "3 Items",
        "items": [
          {
            "num": "20",
            "itemId": "phase-2-20",
            "title": "Auswertung gegen Phase-1-Hypothesen",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "21",
            "itemId": "phase-2-21",
            "title": "Decision-Doc (Go / No-Go / Pivot)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "22",
            "itemId": "phase-2-22",
            "title": "Wenn Pivot: was ändern? (Avatar / Produkt / Pain)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      }
    ]
  },
  {
    "phase": 3,
    "eyebrow": "Build",
    "title": "Aufstellen",
    "question": "Brand · Shop · Recht · Logistik",
    "weeks": "4–6 Wochen",
    "itemsTotal": 55,
    "lead": "Konzept ist validiert — jetzt wird gebaut. Brand-DNA, Visual, Lieferant, Shop, Recht, Tracking, Email-Setup. Am Ende dieser Phase steht ein launchfähiger Store.",
    "modules": [
      {
        "id": "MODUL 3.1",
        "title": "Brand-DNA",
        "count": "6 Items",
        "items": [
          {
            "num": "01",
            "itemId": "phase-3-01",
            "title": "Offer Brief (Schwartz-Logik)",
            "tag": "TEMPLATE",
            "slug": "offer-brief",
            "available": true
          },
          {
            "num": "02",
            "itemId": "phase-3-02",
            "title": "UMP / UMS definieren",
            "tag": "TEMPLATE",
            "slug": null,
            "available": false
          },
          {
            "num": "03",
            "itemId": "phase-3-03",
            "title": "Awareness-Level + Sophistication-Stage einsortieren",
            "tag": "TEMPLATE",
            "slug": null,
            "available": false
          },
          {
            "num": "04",
            "itemId": "phase-3-04",
            "title": "Brand Keyframe (12 Module)",
            "tag": "TEMPLATE",
            "slug": null,
            "available": false
          },
          {
            "num": "05",
            "itemId": "phase-3-05",
            "title": "Necessary Beliefs Doc (≤6 \"I believe…\")",
            "tag": "TEMPLATE",
            "slug": null,
            "available": false
          },
          {
            "num": "06",
            "itemId": "phase-3-06",
            "title": "5 Mass Desires identifizieren",
            "tag": "TEMPLATE",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 3.2",
        "title": "Visual &amp; Branding",
        "count": "5 Items",
        "items": [
          {
            "num": "07",
            "itemId": "phase-3-07",
            "title": "Hochwertiges, professionelles Logo",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "08",
            "itemId": "phase-3-08",
            "title": "Zielgruppengerechtes Corporate Design",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "09",
            "itemId": "phase-3-09",
            "title": "Konsistente Farben / Schriftarten / Bildsprache",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "10",
            "itemId": "phase-3-10",
            "title": "Visual Keyframe (9-Sektionen)",
            "tag": "TEMPLATE",
            "slug": null,
            "available": false
          },
          {
            "num": "11",
            "itemId": "phase-3-11",
            "title": "Casting + Set + Production-Map",
            "tag": "TEMPLATE",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 3.3",
        "title": "Produkt-Definition (final)",
        "count": "4 Items",
        "items": [
          {
            "num": "12",
            "itemId": "phase-3-12",
            "title": "Produkt-Einzigartigkeit (Schnitt / Wirkstoff / Material)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "13",
            "itemId": "phase-3-13",
            "title": "Produktname impliziert Traumergebnis",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "14",
            "itemId": "phase-3-14",
            "title": "Bundle-Logik finalisieren",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "15",
            "itemId": "phase-3-15",
            "title": "Pflege- / Anwendungs-Hinweise",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 3.4",
        "title": "Lieferanten-Sourcing",
        "count": "5 Items",
        "items": [
          {
            "num": "16",
            "itemId": "phase-3-16",
            "title": "DE / EU / Asien-Sourcing-Strategie",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "17",
            "itemId": "phase-3-17",
            "title": "Alibaba-Verifikation (Trade Assurance)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "18",
            "itemId": "phase-3-18",
            "title": "Sample-Order-Skripte (Englisch)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "19",
            "itemId": "phase-3-19",
            "title": "Verzollung-Basics (CN→EU)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "20",
            "itemId": "phase-3-20",
            "title": "Pre-Order-Funding-Logik",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 3.5",
        "title": "Markenrecht &amp; Geschäftsbezeichnung",
        "count": "4 Items",
        "items": [
          {
            "num": "21",
            "itemId": "phase-3-21",
            "title": "DPMA-Markenanmeldung (Domain + Wortmarke)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "22",
            "itemId": "phase-3-22",
            "title": "Geschäftsbezeichnung (Einzelunternehmen / GbR / UG / GmbH)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "23",
            "itemId": "phase-3-23",
            "title": "Steuer-Grundlagen + Kleinunternehmerregelung",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "24",
            "itemId": "phase-3-24",
            "title": "Bank-Konto + Steuernummer + Gewerbeanmeldung",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 3.6",
        "title": "Shopify-Setup",
        "count": "5 Items",
        "items": [
          {
            "num": "25",
            "itemId": "phase-3-25",
            "title": "Theme-Auswahl (Premium / Lifestyle / Streetwear / Beauty)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "26",
            "itemId": "phase-3-26",
            "title": "Mobile-First Design (>70 % der Käufer mobil)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "27",
            "itemId": "phase-3-27",
            "title": "Navigation einfach &amp; intuitiv",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "28",
            "itemId": "phase-3-28",
            "title": "Pflicht-Pages: About · Kontakt · Versand &amp; Rückgabe · FAQ",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "29",
            "itemId": "phase-3-29",
            "title": "Section-Library (82 reusable Sections aus BB-Repo)",
            "tag": "TEMPLATE",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 3.7",
        "title": "PDP &amp; Funnels",
        "count": "6 Items",
        "items": [
          {
            "num": "30",
            "itemId": "phase-3-30",
            "title": "PDP-Aufbau (Buybox · Reviews · Garantie · FAQ)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "31",
            "itemId": "phase-3-31",
            "title": "Direct-Response Sales Page (Countdown · Bundle · Klarna)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "32",
            "itemId": "phase-3-32",
            "title": "Landing Pages (Listicles · Founder · How-To · Big News)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "33",
            "itemId": "phase-3-33",
            "title": "Advertorials (Independent Blog · Vergleich · Native)",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          },
          {
            "num": "34",
            "itemId": "phase-3-34",
            "title": "Post-Purchase One-Click-Upsell",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "35",
            "itemId": "phase-3-35",
            "title": "Cart-Upsells + Cross-Sell via Email",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 3.8",
        "title": "Checkout &amp; Payment",
        "count": "3 Items",
        "items": [
          {
            "num": "36",
            "itemId": "phase-3-36",
            "title": "Checkout optimiert (PayPal first)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "37",
            "itemId": "phase-3-37",
            "title": "Zahlungsmethoden (Klarna · PayPal · Apple Pay · Kreditkarte)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "38",
            "itemId": "phase-3-38",
            "title": "Versandoptionen klar kommuniziert",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 3.9",
        "title": "DSGVO + BFSG + Recht-Stack",
        "count": "6 Items",
        "items": [
          {
            "num": "39",
            "itemId": "phase-3-39",
            "title": "DSGVO + Datenschutzerklärung (eRecht24-Generator)",
            "tag": "LESSON",
            "slug": "dsgvo-bfsg",
            "available": true
          },
          {
            "num": "40",
            "itemId": "phase-3-40",
            "title": "Impressum (TMG-konform)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "41",
            "itemId": "phase-3-41",
            "title": "Cookie-Consent (Cookiebot / Borlabs)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "42",
            "itemId": "phase-3-42",
            "title": "AGB für Online-Shop + Widerrufsbelehrung",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "43",
            "itemId": "phase-3-43",
            "title": "BFSG ab Juni 2025 (Barrierefreiheitserklärung)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "44",
            "itemId": "phase-3-44",
            "title": "Verpackungsgesetz / LUCID-Registrierung",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 3.10",
        "title": "Tracking-Setup",
        "count": "5 Items",
        "items": [
          {
            "num": "45",
            "itemId": "phase-3-45",
            "title": "Meta Pixel + Conversions API installieren",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "46",
            "itemId": "phase-3-46",
            "title": "GA4 Advanced Ecommerce Setup",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          },
          {
            "num": "47",
            "itemId": "phase-3-47",
            "title": "Server-Side Tracking via Stape",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "48",
            "itemId": "phase-3-48",
            "title": "Consent Mode V2 (DSGVO-Pflicht)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "49",
            "itemId": "phase-3-49",
            "title": "Test-Buy zur Tracking-Verifikation",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 3.11",
        "title": "Email-Marketing-Setup",
        "count": "6 Items",
        "items": [
          {
            "num": "50",
            "itemId": "phase-3-50",
            "title": "Klaviyo Setup (Account · Listen · Profile · Custom-Properties)",
            "tag": "LESSON",
            "slug": "klaviyo-setup",
            "available": true
          },
          {
            "num": "51",
            "itemId": "phase-3-51",
            "title": "Welcome-Flow (5–7 Mails)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "52",
            "itemId": "phase-3-52",
            "title": "Cart-Recovery (3 Mails: 1h / 24h / 48-72h)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "53",
            "itemId": "phase-3-53",
            "title": "Browse-Abandon-Flow",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "54",
            "itemId": "phase-3-54",
            "title": "Post-Purchase-Flow",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "55",
            "itemId": "phase-3-55",
            "title": "Winback (60 + 90 Tage)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          }
        ]
      }
    ]
  },
  {
    "phase": 4,
    "eyebrow": "Go-Live",
    "title": "Launchen",
    "question": "Erste Bestellung von Fremden",
    "weeks": "3–4 Wochen",
    "itemsTotal": 41,
    "lead": "Pre-Launch + Drop-Day + erste 7 Tage. Alles vorbereitet — jetzt geht's raus. Ziel: erste Bestellung von einem Fremden, ≥50 Bestellungen in den ersten 7 Tagen, ≥10 Reviews.",
    "modules": [
      {
        "id": "MODUL 4.1",
        "title": "Pre-Launch Liste-Aufbau",
        "count": "3 Items",
        "items": [
          {
            "num": "01",
            "itemId": "phase-4-01",
            "title": "Coming-Soon-Page mit Optin-Popup (10 % Rabatt)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "02",
            "itemId": "phase-4-02",
            "title": "Optin-Link in Social-Bios",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "03",
            "itemId": "phase-4-03",
            "title": "Lead-Magnet entwickeln (Vertical-spezifisch)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 4.2",
        "title": "Branding-Content",
        "count": "4 Items",
        "items": [
          {
            "num": "04",
            "itemId": "phase-4-04",
            "title": "Hochwertiger Marken-Trailer",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "05",
            "itemId": "phase-4-05",
            "title": "Produkt-Vorstellungsvideo",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "06",
            "itemId": "phase-4-06",
            "title": "Lifestyle-Bilder + Karussell-Posts",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "07",
            "itemId": "phase-4-07",
            "title": "Gründer-Fotos für About-Page",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 4.3",
        "title": "Social-Media-Cadence",
        "count": "5 Items",
        "items": [
          {
            "num": "08",
            "itemId": "phase-4-08",
            "title": "TikTok Algorithmus + Main-Topic-Fokus",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "09",
            "itemId": "phase-4-09",
            "title": "Content-Pillars (3-5 Säulen)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "10",
            "itemId": "phase-4-10",
            "title": "Hook-Strategie + CTA-Logik",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "11",
            "itemId": "phase-4-11",
            "title": "Posting-Strategie (Regelmäßigkeit + Zeiten)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "12",
            "itemId": "phase-4-12",
            "title": "LinkedIn-Founder-Cadence + Reddit UWG-konform",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 4.4",
        "title": "Influencer-Outreach",
        "count": "5 Items",
        "items": [
          {
            "num": "13",
            "itemId": "phase-4-13",
            "title": "Influencer-Identifikation (Modash / Heepsy)",
            "tag": "LESSON",
            "slug": "influencer-identifikation",
            "available": true
          },
          {
            "num": "14",
            "itemId": "phase-4-14",
            "title": "Kennzahlen-Analyse + Fake-Follower-Check",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "15",
            "itemId": "phase-4-15",
            "title": "Outreach-Skripte (DM-Templates)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "16",
            "itemId": "phase-4-16",
            "title": "Briefing-Templates + DACH-Verträge UWG-konform",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "17",
            "itemId": "phase-4-17",
            "title": "Affiliate-Code-Setup + UTM-Tracking",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 4.5",
        "title": "Pre-Launch-Email-Sequenz",
        "count": "5 Items",
        "items": [
          {
            "num": "18",
            "itemId": "phase-4-18",
            "title": "Tag −14 Ankündigung (Hype generieren)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "19",
            "itemId": "phase-4-19",
            "title": "Tag −7 Reminder + Behind-the-Scenes",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "20",
            "itemId": "phase-4-20",
            "title": "Tag −3 Knappheits-Hinweis",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "21",
            "itemId": "phase-4-21",
            "title": "Tag −1 Last Call",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "22",
            "itemId": "phase-4-22",
            "title": "Tag 0 Drop-Mail (Anlass · Angebot · Knappheit)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 4.6",
        "title": "Drop-Day-Routine",
        "count": "6 Items",
        "items": [
          {
            "num": "23",
            "itemId": "phase-4-23",
            "title": "Pre-Drop-Checklist (Tag −1, 20:00 Uhr)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "24",
            "itemId": "phase-4-24",
            "title": "Stunden-Plan Tag 0 (06:00 Check → 09:00 Drop)",
            "tag": "LESSON",
            "slug": "drop-day-routine",
            "available": true
          },
          {
            "num": "25",
            "itemId": "phase-4-25",
            "title": "Drop-Moment koordiniert (Mail + Social + Influencer)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "26",
            "itemId": "phase-4-26",
            "title": "Stündliches KPI-Monitoring",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "27",
            "itemId": "phase-4-27",
            "title": "Issue-Triage (Tracking-Drift · Stock-Out)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "28",
            "itemId": "phase-4-28",
            "title": "Crisis-Management (Tag 1 = 0 Sales · was tun)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 4.7",
        "title": "Erste 7 Tage",
        "count": "5 Items",
        "items": [
          {
            "num": "29",
            "itemId": "phase-4-29",
            "title": "Tag 1 Hype-Erhaltung (Stories · Re-Shares)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "30",
            "itemId": "phase-4-30",
            "title": "Tag 3 Erinnerungs-Mail",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "31",
            "itemId": "phase-4-31",
            "title": "Tag 5 Knappheits-Mail",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "32",
            "itemId": "phase-4-32",
            "title": "Tag 7 Last-Chance-Mail",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "33",
            "itemId": "phase-4-33",
            "title": "Influencer-Activation + Re-Sharing der Posts",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 4.8",
        "title": "Reviews einsammeln",
        "count": "4 Items",
        "items": [
          {
            "num": "34",
            "itemId": "phase-4-34",
            "title": "Trustpilot-Setup + Outreach-Mail",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "35",
            "itemId": "phase-4-35",
            "title": "Google-Reviews-Outreach",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "36",
            "itemId": "phase-4-36",
            "title": "Loox / Judge.me Auto-Mails einrichten",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "37",
            "itemId": "phase-4-37",
            "title": "UGC in Verpackung (QR-Code Flyer)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 4.9",
        "title": "Recht — UWG &amp; PAngV",
        "count": "4 Items",
        "items": [
          {
            "num": "38",
            "itemId": "phase-4-38",
            "title": "Influencer-Werbekennzeichnung (UWG-konform)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "39",
            "itemId": "phase-4-39",
            "title": "Affiliate-Disclosure auf Landing-Pages",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "40",
            "itemId": "phase-4-40",
            "title": "PAngV-konforme Streichpreise",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "41",
            "itemId": "phase-4-41",
            "title": "Knappheits-Aussagen rechtssicher",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      }
    ]
  },
  {
    "phase": 5,
    "eyebrow": "Growth",
    "title": "Skalieren",
    "question": "Wird daraus eine Marke, kein Store?",
    "weeks": "laufend (90 Tage strukturiert)",
    "itemsTotal": 58,
    "lead": "Voice-of-Customer-Loop · Performance-Marketing · Drop-Kalender · Trust-Stack · Team-Aufbau · 90-Tage-Review. Ziel: skalierbares Geschäft mit Brand-Pull statt nur Performance-Push.",
    "modules": [
      {
        "id": "MODUL 5.1",
        "title": "Voice-of-Customer-Loop",
        "count": "4 Items",
        "items": [
          {
            "num": "01",
            "itemId": "phase-5-01",
            "title": "Wöchentlich 10 neue Reviews / DMs / Comments pull",
            "tag": "LESSON",
            "slug": "voice-of-customer",
            "available": true
          },
          {
            "num": "02",
            "itemId": "phase-5-02",
            "title": "Verbatim → Verbatim-DB überführen",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "03",
            "itemId": "phase-5-03",
            "title": "Brand Keyframe Pain-Patterns updaten",
            "tag": "TEMPLATE",
            "slug": null,
            "available": false
          },
          {
            "num": "04",
            "itemId": "phase-5-04",
            "title": "Voice-Doc updaten (neue Insider-Sprache)",
            "tag": "TEMPLATE",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 5.2",
        "title": "Performance-Marketing — Meta",
        "count": "5 Items",
        "items": [
          {
            "num": "05",
            "itemId": "phase-5-05",
            "title": "Evergreen-Setup (7-Tage-Klick · 90-Tage-Käufer-Exklusion)",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          },
          {
            "num": "06",
            "itemId": "phase-5-06",
            "title": "ASC+ Prospecting (100 % Neukunden-Fokus)",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          },
          {
            "num": "07",
            "itemId": "phase-5-07",
            "title": "Wöchentlicher Testprozess neuer Ads",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          },
          {
            "num": "08",
            "itemId": "phase-5-08",
            "title": "Skalierung: NCPA + blended MER + 50/50 Split",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          },
          {
            "num": "09",
            "itemId": "phase-5-09",
            "title": "Bid Caps / Cost Caps + Backup-Account",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 5.3",
        "title": "Performance-Marketing — Google",
        "count": "5 Items",
        "items": [
          {
            "num": "10",
            "itemId": "phase-5-10",
            "title": "Server-Side Tracking + Consent Mode V2 + 90-Tage-Window",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          },
          {
            "num": "11",
            "itemId": "phase-5-11",
            "title": "Brand-Search + Non-Brand-DSA + PMax/Shopping",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          },
          {
            "num": "12",
            "itemId": "phase-5-12",
            "title": "Wöchentliche Optimierung (Negative Keywords · Asset-Austausch)",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          },
          {
            "num": "13",
            "itemId": "phase-5-13",
            "title": "ROAS-Targets 3–5 Tage vor Sale senken",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          },
          {
            "num": "14",
            "itemId": "phase-5-14",
            "title": "Bestseller-Kampagnen mit Top-10-SKUs",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 5.4",
        "title": "TikTok-Ads-Skalierung",
        "count": "3 Items",
        "items": [
          {
            "num": "15",
            "itemId": "phase-5-15",
            "title": "Spark Ads aus organischem Performer-Content",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "16",
            "itemId": "phase-5-16",
            "title": "TikTok Shop-Setup (DACH 2025)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "17",
            "itemId": "phase-5-17",
            "title": "Creator-Affiliate-Programm",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 5.5",
        "title": "Email-Skalierung",
        "count": "4 Items",
        "items": [
          {
            "num": "18",
            "itemId": "phase-5-18",
            "title": "Newsletter-Cadence (2-3× / Woche)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "19",
            "itemId": "phase-5-19",
            "title": "Promo-Sequenzen für Drops (Tag −14 / −7 / 0 / 3 / 5 / 7)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "20",
            "itemId": "phase-5-20",
            "title": "Segmentation (Käufer / Browser / Cart / VIP)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "21",
            "itemId": "phase-5-21",
            "title": "A/B-Testing-Cadence + Voice-Mapping",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 5.6",
        "title": "Organischer Content-Loop",
        "count": "4 Items",
        "items": [
          {
            "num": "22",
            "itemId": "phase-5-22",
            "title": "3 Posts/Woche aus Verbatim-DB",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "23",
            "itemId": "phase-5-23",
            "title": "1 Pain-Story / 1 UMS / 1 Customer-Highlight",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "24",
            "itemId": "phase-5-24",
            "title": "Founder-Cadence LinkedIn (Build-in-public)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "25",
            "itemId": "phase-5-25",
            "title": "Reddit-Engagement UWG-konform + UGC-Aktivierung",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 5.7",
        "title": "Drop-Kalender",
        "count": "5 Items",
        "items": [
          {
            "num": "26",
            "itemId": "phase-5-26",
            "title": "Quartalsweise Limited-Drops",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "27",
            "itemId": "phase-5-27",
            "title": "BFCM / Weihnachten / Neujahr / Valentinstag",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          },
          {
            "num": "28",
            "itemId": "phase-5-28",
            "title": "Komplementär-Launches",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "29",
            "itemId": "phase-5-29",
            "title": "Bundle-Optimierung (mittlere Option mit höchstem AOV)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "30",
            "itemId": "phase-5-30",
            "title": "VIP-Sales / Early-Access für Wiederkäufer",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 5.8",
        "title": "Influencer-Skalierung",
        "count": "4 Items",
        "items": [
          {
            "num": "31",
            "itemId": "phase-5-31",
            "title": "Profitable Influencer wiederbuchen",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          },
          {
            "num": "32",
            "itemId": "phase-5-32",
            "title": "Whitelisting für Meta-Ads",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          },
          {
            "num": "33",
            "itemId": "phase-5-33",
            "title": "Spark-Ads aus Influencer-Content",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          },
          {
            "num": "34",
            "itemId": "phase-5-34",
            "title": "Performance-Pricing-Verträge",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 5.9",
        "title": "Trust-Stack",
        "count": "5 Items",
        "items": [
          {
            "num": "35",
            "itemId": "phase-5-35",
            "title": "Trustpilot >4.0 mit kontinuierlicher Aktivität",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "36",
            "itemId": "phase-5-36",
            "title": "Google-Reviews >4.0",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "37",
            "itemId": "phase-5-37",
            "title": "3-5 PR-Artikel platzieren",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "38",
            "itemId": "phase-5-38",
            "title": "SERP für \"Markenname + Erfahrung\" designen",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "39",
            "itemId": "phase-5-39",
            "title": "\"Frag den Gründer\"-Format als laufendes Format",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 5.10",
        "title": "AOV-Hebel",
        "count": "4 Items",
        "items": [
          {
            "num": "40",
            "itemId": "phase-5-40",
            "title": "Bundle-Optimierung (mittlere Option mit höchstem AOV)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "41",
            "itemId": "phase-5-41",
            "title": "Subscription-Modell (wenn passend)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "42",
            "itemId": "phase-5-42",
            "title": "Loyalty-Programm für Wiederkäufer",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "43",
            "itemId": "phase-5-43",
            "title": "Cross-Sell via Email nach erstem Kauf",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 5.11",
        "title": "Customer-Success",
        "count": "4 Items",
        "items": [
          {
            "num": "44",
            "itemId": "phase-5-44",
            "title": "NPS messen (Post-Purchase + 30/60/90 Tage)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "45",
            "itemId": "phase-5-45",
            "title": "Repeat-Purchase-Rate tracken",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          },
          {
            "num": "46",
            "itemId": "phase-5-46",
            "title": "Refund-Rate · CS-Volume · häufigste Issues",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          },
          {
            "num": "47",
            "itemId": "phase-5-47",
            "title": "Häufigste Probleme zurückspielen ins Produkt",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 5.12",
        "title": "Team-Aufbau",
        "count": "4 Items",
        "items": [
          {
            "num": "48",
            "itemId": "phase-5-48",
            "title": "9 Marketing-Rollen — ab welchem Umsatz wen einstellen?",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "49",
            "itemId": "phase-5-49",
            "title": "Outsourcing (Freelancer bis 1 Mio €)",
            "tag": "EXTERN",
            "slug": null,
            "available": false
          },
          {
            "num": "50",
            "itemId": "phase-5-50",
            "title": "SOPs dokumentieren (ClickUp / Notion)",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          },
          {
            "num": "51",
            "itemId": "phase-5-51",
            "title": "Hiring-Funnel aufsetzen",
            "tag": "REFERENZ",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 5.13",
        "title": "Steuer &amp; International",
        "count": "4 Items",
        "items": [
          {
            "num": "52",
            "itemId": "phase-5-52",
            "title": "USt-Voranmeldung · EÜR · Gewerbesteuer",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "53",
            "itemId": "phase-5-53",
            "title": "Buchhaltung-Setup (Lexware / sevDesk / DATEV)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "54",
            "itemId": "phase-5-54",
            "title": "Wettbewerbsrecht-Awareness (Abmahn-Prävention)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          },
          {
            "num": "55",
            "itemId": "phase-5-55",
            "title": "Internationale Expansion (EU OSS · GB-VAT)",
            "tag": "LESSON",
            "slug": null,
            "available": false
          }
        ]
      },
      {
        "id": "MODUL 5.14",
        "title": "90-Tage-Review",
        "count": "3 Items",
        "items": [
          {
            "num": "56",
            "itemId": "phase-5-56",
            "title": "GROW: CPA &lt; AOV×Marge UND Repeat ≥15 % → skalieren",
            "tag": "TEMPLATE",
            "slug": null,
            "available": false
          },
          {
            "num": "57",
            "itemId": "phase-5-57",
            "title": "FIX: Signale ja, Profit nicht → 30-Tage-Sprint",
            "tag": "TEMPLATE",
            "slug": null,
            "available": false
          },
          {
            "num": "58",
            "itemId": "phase-5-58",
            "title": "PIVOT/STOP: keine Profit-Logik → Pivot oder Stop",
            "tag": "TEMPLATE",
            "slug": null,
            "available": false
          }
        ]
      }
    ]
  }
];

export const LESSONS: Lesson[] = [
  {
    "slug": "founder-lens",
    "phase": 1,
    "itemId": "phase-1-01",
    "eyebrow": "Phase 1 · Modul 1.1 · Item 01 / 20",
    "title": "Passion-Audit — was treibt dich wirklich?",
    "summary": "Bevor du eine Marke aufbaust, brauchst du eine ehrliche Antwort auf eine Frage: <em>was kannst du jahrelang machen, ohne durchzudrehen?</em> Marken brauchen Jahre. Wenn du das Thema nicht aushältst, wird's nichts.",
    "body": "<h2>Was es ist</h2>\n    <p>Strukturiertes Self-Audit nach <strong>P.S.S.P.</strong> (Passion · Skills · Struggles · Profit) — die Eingangs-Linse von Foundr und der ersten Stunde jedes seriösen D2C-Curriculums. Ergebnis: 1–3 Themenfelder, die du <em>jahrelang</em> ohne Burnout durchhalten würdest.</p>\n\n    <h2>Warum nicht \"find a profitable niche\"</h2>\n    <p>Weil profitable Nischen ohne dich austauschbar sind. Wer eine Marke baut, muss <strong>wiedererkennbar</strong> sein — und Wiedererkennbarkeit kommt vom Founder. Wer in einer Branche baut, in der er nichts zu sagen hat, wird in Monat 6 still. Stille Marken sterben.</p>\n    <p>Reddit-/Indie-Hackers-Pattern: <em>\"I picked a niche I didn't care about. After 8 months, I couldn't post anymore.\"</em> Der häufigste Grund für stille Brands — nicht Ad-Spend, nicht Margen.</p>\n\n    <h2>Die 4 Quadranten</h2>\n\n    <h3>1 · Passion — was zieht dich seit Jahren?</h3>\n    <ul>\n      <li>Welche YouTube-Channels schaust du seit ≥3 Jahren?</li>\n      <li>Welche Threads in Reddit/Foren liest du, ohne zu scrollen?</li>\n      <li>Worüber kannst du 30 Min reden, ohne dass dich jemand stoppen muss?</li>\n      <li>Was kaufst du dir ständig nach, obwohl niemand zuschaut?</li>\n    </ul>\n    <p><strong>Filter:</strong> Wenn du es 3+ Jahre verfolgst, ist es echt. Wenn es seit 2 Wochen TikTok-Trend ist, ist es Spiegelung — nicht Passion.</p>\n\n    <h3>2 · Skills — was kannst du heute liefern?</h3>\n    <ul>\n      <li>Was machst du beruflich oder als Hobby auf einem Niveau, das andere bezahlen würden?</li>\n      <li>Wofür kommen Freunde / Kollegen zu dir um Rat?</li>\n      <li>Welche 2-3 Sachen kannst du <strong>messbar besser</strong> als der Durchschnitt?</li>\n    </ul>\n    <p><strong>Wichtig:</strong> \"Ich lerne das gerade\" zählt nicht. Skill = du kannst es <em>jetzt</em>.</p>\n\n    <h3>3 · Struggles — welche Probleme hast du selbst gelöst?</h3>\n    <ul>\n      <li>Welche 3 Probleme hast du in deinem Leben gelöst, die andere noch haben?</li>\n      <li>Welche Workarounds hast du gefunden, die du anderen erzählst?</li>\n      <li>Welcher Schmerz hat dich Jahre verfolgt, bis du eine Lösung fandst?</li>\n    </ul>\n    <p><strong>Key:</strong> Hier liegt fast immer dein bestes Marken-Thema. Eigener Pain = authentische Brand-Story.</p>\n\n    <h3>4 · Profit-Reality — wovon kannst du leben?</h3>\n    <ul>\n      <li>Wie viel Geld brauchst du <em>realistisch</em> pro Monat (Miete · Essen · Steuer · Puffer)?</li>\n      <li>Wie lange kannst du ohne Einkommen durchhalten? (Cash-Reserve)</li>\n      <li>Was wäre dein Mindestumsatz im Monat 12, damit du nicht zurück in den Job musst?</li>\n    </ul>\n    <p>Mit 20 % Net-Margin: <strong>Mindestumsatz × 5 = monatlicher Brutto-Umsatz</strong>, den die Marke generieren muss, damit du davon lebst. Beispiel: brauchst du €4.000 netto → braucht die Marke €20.000 monatlichen Umsatz. Schaffbar — aber gut zu wissen.</p>\n\n    <h2>Die Schnitt-Menge</h2>\n\n    <p>Dein Ideal-Thema liegt im <strong>Schnitt aller 4 Quadranten</strong>:</p>\n\n    <pre>┌──────────────┐  ┌──────────────┐\n│   PASSION    │  │    SKILLS    │\n│              ├──┤              │\n│ jahrelang ja │  │ heute liefer-│\n│              │  │ bar          │\n└──────┬───────┘  └──────┬───────┘\n       │     ┌────┐      │\n       └─────│ ✓  │──────┘\n       ┌─────│    │──────┐\n       │     └────┘      │\n┌──────┴───────┐  ┌──────┴───────┐\n│  STRUGGLES   │  │   PROFIT     │\n│              ├──┤              │\n│ eigener Pain │  │ rechnet sich │\n│              │  │              │\n└──────────────┘  └──────────────┘</pre>\n\n    <p>Wenn alle 4 Quadranten einen Treffer haben — du hast deine Marke gefunden. Wenn nur 2-3 treffen, wird's schwieriger (lösbar, aber weniger Marken-Pull).</p>\n\n    <h2>AI-Workflow — Claude als Sparringspartner</h2>\n\n    <pre>Du bist Brand-Strategie-Coach. Hier sind meine\nP.S.S.P.-Antworten:\n\n[Antworten einfügen]\n\n1. Welche 2-3 Themenfelder fallen unter Schnitt\n   aller 4 Quadranten?\n2. Welcher Quadrant ist am schwächsten — und\n   wie könnte ich ihn stärken?\n3. Welche Marken könnte ich aus dem Schnitt\n   bauen? Liste 5 konkrete Vertical-Ideen.\n4. Bei welcher Idee ist mein Founder-Marken-Pull\n   am größten?\n\nSei direkt. Wenn meine Antworten dünn sind, sag das.</pre>\n\n    <div class=\"output-box\">\n      <h4>Pflicht-Output</h4>\n      <ul>\n        <li>P.S.S.P.-Audit ausgefüllt (alle 4 Quadranten, je 4-6 Bullets)</li>\n        <li>2–3 Themenfelder identifiziert, die im Schnitt liegen</li>\n        <li>Mindestumsatz-Realität dokumentiert (€/Monat brutto)</li>\n        <li>Cash-Reserve in Wochen / Monaten</li>\n        <li>1 Top-Themenfeld als Kandidat für Modul 1.2 (Idee)</li>\n      </ul>\n    </div>\n\n    <div class=\"warn-box\">\n      <h4>Häufige Selbsttäuschungen</h4>\n      <ol>\n        <li><strong>\"Ich kann mich für alles begeistern.\"</strong> Falsch — du kannst dich für 3-4 Sachen wirklich begeistern. Der Rest ist gespielt.</li>\n        <li><strong>Profit-Realität wird \"später\" geklärt.</strong> Nein — wer keine Cash-Reserve hat, sollte als Side-Hustle starten, nicht Vollzeit. Das ist Bandwidth-Modul (1.4).</li>\n        <li><strong>\"Das Thema interessiert mich neu seit dem TikTok-Video.\"</strong> 2-Wochen-Begeisterung ist kein Marken-Anker. 3-Jahre-Verfolgung schon.</li>\n        <li><strong>Skill = \"Ich lerne das gerade\".</strong> Skill heißt: du kannst es jetzt liefern, nicht in 6 Monaten lernen.</li>\n      </ol>\n    </div>\n\n    <div class=\"info-box\">\n      <h4>Tools</h4>\n      <ul>\n        <li><strong>P.S.S.P.-Worksheet:</strong> Notion-Template (Duplicate-Link kommt) — strukturierter Steckbrief</li>\n        <li><strong>Claude / ChatGPT:</strong> als Sparring nach dem Audit — bringt Schnitt-Menge zutage</li>\n        <li><strong>Calendly mit Buddy:</strong> P.S.S.P. mit einem zweiten Menschen durchgehen — verdoppelt Klarheit (Studie: +23 % Completion durch Buddy-Pairing)</li>\n      </ul>\n    </div>\n\n    <div class=\"disclaim-box\">\n      <strong>Quelle:</strong> P.S.S.P. inspiriert von Foundr \"Start &amp; Scale\" (Gretta van Riel) + Hormozi's \"1 Avatar / 1 Product / 1 Channel\"-Logik. Anwendung in DACH-D2C-Kontext mit Founder-First-Prinzip.\n    </div>",
    "nextEyebrow": "Nächster Item →",
    "nextTitle": "02 · Skills-Inventar"
  },
  {
    "slug": "margen-mathematik",
    "phase": 2,
    "itemId": "phase-2-15",
    "eyebrow": "Phase 2 · Modul 2.4 · Item 15 / 22",
    "title": "Total-Landed-Cost — die ehrliche Rechnung.",
    "summary": "Kein Marketing-Spreadsheet, keine Hockey-Stick-Projection. Die echten Kosten pro Verkauf — Produkt, Versand, Verzollung, Shopify, Payment, App-Fees. Wenn du am Ende nicht ≥45 % Gross-Margin hast, gibt's keinen Spielraum für Ads.",
    "body": "<h2>Was es ist</h2>\n    <p>Total-Landed-Cost (TLC) ist der <strong>komplette Kosten-Stack pro verkauftem Produkt</strong> — von der Produktion bis das Geld auf deinem Konto landet. Nicht der \"Einkaufspreis vom Lieferanten\" — sondern alles, was zwischen dir und dem Cash-Flow steht.</p>\n\n    <h2>Warum diese Rechnung kein anderer Kurs macht</h2>\n    <p>Weil die Wahrheit unsexy ist. Foundr und Stelljes erzählen dir \"innerhalb 8 Wochen profitabel\". In Wahrheit haben 90 % der Pre-Revenue-Founder Margen unter 40 % — und merken das erst, wenn die Bestellungen kommen und nichts hängenbleibt.</p>\n    <p><strong>35 % der D2C-Failures laut Failory-Daten kommen aus Margen-Blindheit.</strong> Du löst das in 30 Min mit einem Spreadsheet.</p>\n\n    <h2>Die 8 Kosten-Komponenten</h2>\n\n    <h3>1 · Produkt-Einkaufspreis (COGS)</h3>\n    <p>Was der Lieferant in Rechnung stellt. <strong>Pflicht: in EUR rechnen, nicht USD/CNY.</strong> Bei Asien-Lieferanten: Wechselkurs-Puffer von +5 % einplanen.</p>\n\n    <h3>2 · Versand vom Lieferanten zu dir</h3>\n    <p>CN→EU Sea-Freight = ~€0,30–0,80 / Stück bei mittleren Mengen. Air-Freight = €2–4 / Stück (10× teurer, 6× schneller). DE/EU-Lieferant: meist im Einkaufspreis enthalten.</p>\n\n    <h3>3 · Verzollung + Einfuhrumsatzsteuer</h3>\n    <p>Bei CN→DE: Zoll je nach Warenart (Bekleidung 12 %, Lifestyle 0–6 %, Schmuck 2–4 %) + 19 % Einfuhrumsatzsteuer. <strong>Die EUSt bekommst du als Vorsteuer zurück</strong>, aber Cash-Flow-Belastung ist real.</p>\n\n    <h3>4 · Versand zum Kunden (Fulfillment)</h3>\n    <p>Eigene Lager (DHL Geschäftskunde): €4–6 pro Paket DE. 3PL (z. B. Sendcloud, Byrd, Cosmoshop): €5–9 pro Paket inkl. Pick &amp; Pack. Verpackungsmaterial: €0,30–1,50 / Paket.</p>\n\n    <h3>5 · Shopify-Plan + Domain</h3>\n    <p>Shopify Basic: $39 / Mo. Shopify (Standard): $105 / Mo. Domain: ~€10–15 / Jahr. Auf 100 Bestellungen / Monat = ~€0,40 / Bestellung.</p>\n\n    <h3>6 · Payment-Fees</h3>\n    <p>Shopify Payments: <strong>1,8 % + €0,25</strong> pro Transaktion (Standard-EU-Karten). Klarna: <strong>2,99 % + €0,35</strong>. PayPal: <strong>2,49 % + €0,35</strong>. Bei 50 € AOV: ~€1,50 / Bestellung.</p>\n\n    <h3>7 · App-Fees</h3>\n    <p>Realistisches Pre-Revenue-Stack: Klaviyo (€45 / Mo), Loox (€13–35 / Mo), evt. Rebuy oder Bundle-App (€30–50 / Mo). <strong>Total ~€100–150 / Monat = €1–1,50 / Bestellung bei 100/Mo.</strong></p>\n\n    <h3>8 · Retouren + Refunds</h3>\n    <p>Branchenweit: Fashion 25–40 %, Beauty 5–10 %, Lifestyle 5–15 %. Pflicht-Puffer: <strong>10 % der Bestellungen kalkulieren</strong> als Retoure (= 10 % vom AOV als Verlust).</p>\n\n    <h2>Beispiel-Rechnung (€59 Hoodie)</h2>\n\n    <pre>VERKAUFSPREIS:                         €59,00\n─────────────────────────────────────────────\n1. COGS (Lieferant CN)                  €11,00\n2. Versand CN→EU (Sea)                   €0,60\n3. Zoll (12 % auf CIF €11,60)            €1,40\n4. Versand zum Kunden                    €5,50\n5. Shopify-Anteil                        €0,40\n6. Payment-Fee (1,8 % + €0,25)           €1,30\n7. App-Fees                              €1,30\n8. Retouren-Puffer (10 % vom Preis)      €5,90\n─────────────────────────────────────────────\nTOTAL LANDED COST:                      €27,40\nGROSS MARGIN:                  €31,60 = 53,6 %\n─────────────────────────────────────────────</pre>\n\n    <p>Mit 53,6 % Gross Margin <strong>hast du Spielraum für Ads</strong>. Bei einem CPA von €15 bleibt Net-Profit von €16,60 / Bestellung. Skalierbar.</p>\n\n    <h2>Die 45-%-Schwelle</h2>\n\n    <p>Wenn deine TLC-Rechnung <strong>weniger als 45 % Gross Margin</strong> ergibt: stopp. Du hast keine sustainable Brand. Optionen:</p>\n\n    <ul>\n      <li><strong>Preis erhöhen</strong> — kannst du? Was sagen die 20 Mom-Test-Calls?</li>\n      <li><strong>COGS senken</strong> — höhere Volumen, Verhandlung, anderer Lieferant</li>\n      <li><strong>Bundles</strong> — AOV erhöhen, Fee-Anteil sinkt</li>\n      <li><strong>Pivot</strong> — anderer Markt oder anderes Produkt</li>\n    </ul>\n\n    <h2>AI-Workflow — Sensitivity-Analyse via Claude</h2>\n\n    <pre>Du bist Unit-Economics-Analyst. Hier ist meine\nTotal-Landed-Cost-Rechnung:\n\n[Spreadsheet einfügen]\n\nMach drei Szenarien:\n1. Worst-Case: Retoure 25 %, Wechselkurs +10 %,\n   CPA €25\n2. Base-Case: aktuelle Werte\n3. Best-Case: Retoure 5 %, AOV +20 % durch\n   Bundle, CPA €10\n\nWas ist mein Net-Margin pro Szenario?\nBei welchem CPA werde ich profitabel?\n\nSei konservativ. Wenn ich Annahmen hinterfragen\nsollte, sag das.</pre>\n\n    <div class=\"output-box\">\n      <h4>Pflicht-Output</h4>\n      <ul>\n        <li>Ausgefülltes Spreadsheet mit echten Lieferanten-Preisen</li>\n        <li>Gross Margin in Prozent (Pflicht ≥45 %)</li>\n        <li>3 Szenarien (Worst / Base / Best)</li>\n        <li>Profitabler-CPA dokumentiert</li>\n        <li>Wenn &lt;45 %: Pivot-Plan oder Preis-Plan</li>\n      </ul>\n    </div>\n\n    <div class=\"warn-box\">\n      <h4>Häufige Selbstbetrugs-Muster</h4>\n      <ol>\n        <li><strong>\"Versand zum Kunden bezahle ich extra\".</strong> Dann sinkt deine Conversion 30 %. Free Shipping ist 2025 Hygiene — also mit-einkalkulieren.</li>\n        <li><strong>App-Fees vergessen.</strong> Klaviyo skaliert mit Listen-Größe. Bei 5.000 Profilen: ~€100/Mo. Bei 50.000: €500+.</li>\n        <li><strong>Retouren auf 5 % schätzen, weil \"mein Produkt ist anders\".</strong> Ist es nicht. Plane mit 10 %, sei froh wenn weniger.</li>\n        <li><strong>Wechselkurs-Risiko ignorieren.</strong> EUR/CNY und EUR/USD schwanken 5–15 % im Jahr.</li>\n      </ol>\n    </div>\n\n    <div class=\"info-box\">\n      <h4>Tools</h4>\n      <ul>\n        <li><strong>Pre-Revenue-Spreadsheet-Template:</strong> Google Sheets mit allen 8 Komponenten + 3-Szenario-Tab (Duplicate-Link kommt)</li>\n        <li><strong>Wechselkurs-Tracker:</strong> wise.com / xe.com</li>\n        <li><strong>Zoll-Recherche:</strong> zoll.de Online-Auskunft (HS-Code-Lookup)</li>\n        <li><strong>Shipping-Calculator:</strong> Sendcloud / DHL Geschäftskunden-Portal</li>\n      </ul>\n    </div>\n\n    <div class=\"disclaim-box\">\n      <strong>Hinweis:</strong> Diese Lesson ist keine Steuer- oder Buchhaltungsberatung. Bei Unsicherheit zu Verzollung, EUSt-Abrechnung oder Wareneinkauf: Steuerberater konsultieren. Recht-Spur 4 deckt Steuer-Operations vertieft ab.\n    </div>",
    "nextEyebrow": "Nächster Item →",
    "nextTitle": "12 · 45-%-Schwelle als Pflicht-Gate"
  },
  {
    "slug": "mom-test-20-calls",
    "phase": 2,
    "itemId": "phase-2-07",
    "eyebrow": "Phase 2 · Modul 2.2 · Item 07 / 22",
    "title": "Mom-Test — 20 Calls in 14 Tagen.",
    "summary": "20 Customer-Discovery-Interviews mit echten Menschen aus deiner Zielgruppe. In 14 Tagen. Nach den 3 Regeln von Rob Fitzpatrick. Wenn du das nicht machst, baust du eine Marke ins Blaue.",
    "body": "<h2>Was es ist</h2>\n    <p>Customer-Discovery-Interviews nach <strong>The Mom Test</strong> (Rob Fitzpatrick, 2013). Du sprichst mit 20 Menschen aus deiner Zielgruppe über <strong>ihr Leben und ihre Probleme</strong> — nicht über deine Idee. Ergebnis: echte Daten, mit denen du entscheiden kannst, ob du baust oder pivotest.</p>\n\n    <h2>Warum</h2>\n    <p>Weil deine Mutter dir sagen wird, dass deine Idee großartig ist. Und deine Mutter lügt nicht — sie weiß es nur nicht besser. Genauso lügen Freunde, Familie und alle, die du fragst: \"Würdest du das kaufen?\"</p>\n    <p>Echte Validation kommt nur von Menschen, die dein Produkt <strong>gekauft hätten, wenn es schon dagewesen wäre</strong>. 35 % aller D2C-Failures laut Failory: <em>\"no market need\"</em>. Genau das, was du in 14 Tagen rausfinden kannst — bevor du Tausende Euro in Lieferanten-Samples, Logo-Design und Shopify-Setup steckst.</p>\n\n    <h2>Die 3 Kern-Regeln</h2>\n\n    <h3>Regel 1 — Nicht über deine Lösung sprechen</h3>\n    <blockquote class=\"wrong\">❌ \"Ich plane einen Hoodie aus recyceltem Polyester. Würdest du das kaufen?\"</blockquote>\n    <blockquote class=\"right\">✅ \"Wann hast du zuletzt einen Hoodie gekauft? Was hat dich dazu gebracht?\"</blockquote>\n    <p>Du verkaufst nichts. Du sammelst Daten. Sobald du deine Idee pitchst, schaltet das Hirn deines Gegenübers um auf \"freundlicher Modus\" — und du bekommst Höflichkeits-Antworten statt Wahrheit.</p>\n\n    <h3>Regel 2 — Keine hypothetischen Fragen</h3>\n    <blockquote class=\"wrong\">❌ \"Würdest du X kaufen, wenn Y?\"</blockquote>\n    <blockquote class=\"right\">✅ \"Wann hast du zuletzt versucht, X zu lösen? Was hast du gemacht?\"</blockquote>\n    <p><strong>Vergangenheit ist Daten. Zukunft ist Spekulation.</strong> Menschen sind grottenschlecht darin vorherzusagen, was sie tun werden — aber sie können dir präzise erzählen, was sie schon getan haben.</p>\n\n    <h3>Regel 3 — Keine Bestätigung suchen</h3>\n    <blockquote class=\"wrong\">❌ \"Klingt das logisch?\"</blockquote>\n    <blockquote class=\"right\">✅ \"Was findest du schwierig daran?\"</blockquote>\n\n    <h2>Die Mechanik</h2>\n\n    <h3>Tag 1–3: Outreach</h3>\n    <p><strong>Ziel:</strong> 50 Outreaches → 20 Calls (Conversion ~40 %). Channels nach Effektivität: persönliches Netzwerk → Reddit-DMs → Instagram-DMs → LinkedIn-DMs.</p>\n\n    <p><strong>Outreach-Skript (Reddit / IG / LinkedIn — DM):</strong></p>\n    <pre>Hey [Name],\n\nich bau gerade was im [Vertical]-Bereich und sammle\nInsights von echten Käufern. Würdest du mir 20 Min\nfür ein Gespräch geben?\n\nIch verkauf nix, will nur lernen, wie du heute mit\n[Problem] umgehst.\n\nBeste Zeiten: [Mo-Mi 18-20 Uhr]\n\n[Dein Name]</pre>\n\n    <h3>Tag 4–12: Calls</h3>\n    <p>20–30 Min pro Call, Zoom oder Telefon. Aufnahme mit Erlaubnis. Kein Pitch, keine Folien, kein Demo.</p>\n\n    <p><strong>Frage-Struktur (offen → spezifisch):</strong></p>\n    <ol>\n      <li>\"Erzähl mir vom letzten Mal, als du [Problem] hattest. Was war der Auslöser?\"</li>\n      <li>\"Wie hast du es gelöst? Was hast du probiert?\"</li>\n      <li>\"Was hat funktioniert? Was nicht?\"</li>\n      <li>\"Wenn du nochmal vor genau dem Problem stündest — was würdest du anders machen?\"</li>\n      <li>\"Wie wichtig ist das in deinem Alltag — auf 1–10? Warum?\"</li>\n      <li>\"Wer kennt das Problem auch? Würdest du sie verbinden?\"</li>\n    </ol>\n    <p><strong>Frage 6 ist die wichtigste.</strong> 20 Calls werden so zu 50 möglichen Calls werden zu 100 möglichen Käufern.</p>\n\n    <h2>AI-Workflow — Claude als Research-Analyst</h2>\n    <p>Nach den 20 Calls: Claude/ChatGPT für Pattern-Analyse einsetzen.</p>\n\n    <pre>Du bist Customer-Research-Analyst. Hier sind 20 Call-\nNotizen aus Mom-Test-Interviews mit Käufern im\n[Vertical]-Bereich.\n\nIdentifiziere:\n1. Top-3 wiederkehrende Pain-Patterns (mit Verbatim)\n2. Top-3 Existing-Solutions\n3. Common Frustrations am Status quo\n4. Verbatim-Phrasen für Marketing (Insider-Sprache)\n5. Was würdest du als Brand-Builder daraus für\n   ein UMP / UMS ableiten?\n\nSei brutal-ehrlich. Wenn die Daten nicht reichen,\nsag das.\n\n[20 Notizen einfügen]</pre>\n\n    <div class=\"output-box\">\n      <h4>Pflicht-Output nach 14 Tagen</h4>\n      <ul>\n        <li>20 Call-Notizen (oder dokumentierter Drop-Out)</li>\n        <li>≥50 Verbatim-Quotes in Pain-DB</li>\n        <li>Top-3-Pain-Patterns identifiziert</li>\n        <li>Existing-Solutions-Map</li>\n        <li>Pivot-or-Persevere-Decision dokumentiert</li>\n      </ul>\n    </div>\n\n    <div class=\"warn-box\">\n      <h4>5 häufige Fehler — lies das, bevor du anfängst</h4>\n      <ol>\n        <li><strong>Du redest zu viel.</strong> Faustregel: dein Gegenüber soll 80 % der Zeit reden.</li>\n        <li><strong>Du übersetzt Verbatim.</strong> \"Sie meinte, ist ihr zu teuer\" — was sie tatsächlich gesagt hat: \"Ich hab mir die letzte Hose für 90 € gekauft und es war eine Katastrophe.\" Notier <em>exakt</em>.</li>\n        <li><strong>Du fragst nur Freunde.</strong> Mind. 60 % aus dem persönlichen Netzwerk RAUS.</li>\n        <li><strong>Du machst alle 20 Calls in einer Woche.</strong> 14 Tage minimum.</li>\n        <li><strong>Du fragst nicht nach Connections (Frage 6).</strong> Die letzte Frage ist die wichtigste.</li>\n      </ol>\n    </div>\n\n    <div class=\"info-box\">\n      <h4>Tools</h4>\n      <ul>\n        <li><strong>Aufnahme:</strong> Otter.ai (auto-Transkription) · Zoom Cloud Recording · iPhone-Sprachmemos</li>\n        <li><strong>Notion-Database:</strong> Mom-Test-Tracker-Template (Duplicate-Link kommt)</li>\n        <li><strong>Outreach-Tracking:</strong> simples Sheet mit Status: <code>sent → replied → scheduled → done → drop</code></li>\n        <li><strong>Pain-DB:</strong> Notion-Database mit Tags pro Quote (Pain-Type, Existing-Solution, Frustration, Insider-Sprache)</li>\n      </ul>\n    </div>\n\n    <div class=\"disclaim-box\">\n      <strong>Quelle:</strong> Rob Fitzpatrick, <em>The Mom Test: How to talk to customers and learn if your business is a good idea when everyone is lying to you</em> (2013). Anwendung in DACH-D2C-Kontext.\n    </div>",
    "nextEyebrow": "Nächster Item →",
    "nextTitle": "08 · Customer-Discovery-Skripte"
  },
  {
    "slug": "pain-mining-reddit",
    "phase": 2,
    "itemId": "phase-2-01",
    "eyebrow": "Phase 2 · Modul 2.1 · Item 01 / 22",
    "title": "Reddit-Pain-Mining — mit Filter aus Phase 1.",
    "summary": "Du hast aus Phase 1 einen klaren Avatar + eine Pain-Hypothese. Jetzt prüfst du, ob deine Annahme stimmt — durch das ehrlichste Forum der Welt. Reddit ohne Filter wäre Random-Walk; Reddit mit Filter ist ein Wahrheits-Detektor.",
    "body": "<h2>Was es ist</h2>\n    <p>Systematisches Mining von echten Pain-Statements deiner Zielgruppe in <strong>3–5 gefilterten Subreddits</strong>. Ergebnis: ≥30 Verbatim-Quotes (echte Worte, nicht paraphrasiert), die deine Phase-1-Pain-Hypothese bestätigen, widerlegen oder erweitern.</p>\n\n    <h2>Warum nicht direkt?</h2>\n    <p>Pain-Mining ohne Avatar ist Lärm. Wer in 50 Subs gleichzeitig sucht, kommt mit Pseudo-Insights aus 50 Branchen zurück. <strong>Pain-Mining mit Filter ist hochpräzise.</strong> Avatar + Pain-Hypothese = die zwei Filter, die du in Phase 1 gebaut hast. Jetzt nutzt du sie.</p>\n    <p>Außerdem: <em>\"no market need\"</em> ist seit Jahren eine der häufigsten Failure-Ursachen in D2C-Post-Mortems. Reddit-Mining ist die billigste Versicherung dagegen — 4 Stunden Arbeit, die dir 6 Monate Bauchaufschlag ersparen.</p>\n\n    <h2>Schritt 1 — die richtigen 3-5 Subs finden</h2>\n\n    <p>Dein Avatar (Phase 1.3) und Pain-Hypothese (Phase 1.5) bestimmen, wo du suchst. Nicht \"alle Sub, in denen die Zielgruppe sein könnte\" — sondern <strong>die 3-5, in denen sie ihr Problem aktiv besprechen</strong>.</p>\n\n    <p><strong>Such-Strategie:</strong></p>\n    <ol>\n      <li><strong>Direkt-Suche:</strong> reddit.com/search?q=\"dein Pain\"+\"alternative\" → schau welche Subs immer wiederkehren</li>\n      <li><strong>Subreddit-Stats:</strong> subredditstats.com — Engagement-Quote checken (>3 % Comment-Rate ist gesund)</li>\n      <li><strong>Cross-Posts:</strong> in welchen anderen Subs wird ähnlicher Content geteilt? (Top-Posts → Comments → User-Profil → \"active in\")</li>\n    </ol>\n\n    <p><strong>Filter-Kriterien für gute Subs:</strong></p>\n    <ul>\n      <li>≥20.000 Members (genug Daten)</li>\n      <li>≤500.000 Members (sonst zu generisch)</li>\n      <li>Aktive Posting-Frequenz (≥10 Posts/Tag)</li>\n      <li>Threads mit ≥30 Comments (echte Diskussion, nicht nur Likes)</li>\n      <li>Avatar-Match (Demografie + Pain-Bezug)</li>\n    </ul>\n\n    <h2>Schritt 2 — die richtigen Threads</h2>\n\n    <p>Pro Sub: nicht zufällig browsen. <strong>Sortier nach \"Top — All Time\"</strong> + \"Top — Year\". Die top-engagement-Posts sind das, was die Community wirklich beschäftigt.</p>\n\n    <p><strong>Pain-Indikator-Phrasen — such gezielt nach:</strong></p>\n    <ul>\n      <li>\"Anyone else...\" / \"Auch jemand…\"</li>\n      <li>\"Why does X always...\" / \"Warum ist X immer…\"</li>\n      <li>\"I'm so tired of...\" / \"Ich hab's so satt…\"</li>\n      <li>\"How do you deal with...\" / \"Wie geht ihr damit um…\"</li>\n      <li>\"Tried everything but...\" / \"Alles probiert, aber…\"</li>\n      <li>\"Embarrassing question...\" / \"Peinliche Frage…\"</li>\n    </ul>\n\n    <p>Diese Phrasen leiten zu echten Pain-Threads. Ignorier Show-off-Posts, Memes, Promo.</p>\n\n    <h2>Schritt 3 — Verbatim sammeln</h2>\n\n    <p>Pro Thread: Top-3 Comments + Top-3 Replies. Speichere <strong>exakte Worte</strong> in die Verbatim-DB:</p>\n\n    <pre>VERBATIM-DB (Notion-Template)\n\n| Datum     | Sub          | Quote                          | Pain-Type    | Existing-Solution     | Frustration              | Insider-Phrase |\n|-----------|--------------|--------------------------------|--------------|----------------------|--------------------------|----------------|\n| 07.05.26  | r/HairCareDE | \"Ich hab Drogerie-Shampoo... \" | Erschöpfung  | Drogerie + DM-Eigen  | \"nichts wirkt langfristig\"| \"DM-Eigenmark\" |\n| 07.05.26  | r/HairCareDE | \"Trockene Spitzen seit Mona...\"| Frustration  | Olaplex (zu teuer)   | \"ist mir zu teuer\"        | \"Spitzen-Drama\"|</pre>\n\n    <p><strong>Pflicht:</strong> ≥30 Quotes aus 3-5 Subs. Wenn du nach 3 Stunden &lt;15 Quotes hast: deine Sub-Auswahl ist falsch. Zurück zu Schritt 1.</p>\n\n    <h2>Schritt 4 — Pattern-Recognition</h2>\n\n    <p>Mit ≥30 Quotes: sortier nach Pain-Type. Welche 3-4 Pain-Patterns dominieren? Welche Existing-Solutions tauchen ständig auf? Welche Frustrationen sind <em>spezifisch</em>?</p>\n\n    <p>Vergleich mit deiner Phase-1-Pain-Hypothese:</p>\n    <ul>\n      <li><strong>Bestätigt</strong> — Hypothese stimmt → weiter zu Modul 2.2 Mom-Test (verstärken mit echten Calls)</li>\n      <li><strong>Erweitert</strong> — neue Pain-Patterns aufgetaucht, die du nicht im Hypothese-Doc hattest → Hypothese updaten</li>\n      <li><strong>Widerlegt</strong> — gefundene Pains sind <em>andere</em> als deine Hypothese → Pivot prüfen (Modul 2.5)</li>\n    </ul>\n\n    <h2>AI-Workflow — Claude als Verbatim-Synthesizer</h2>\n\n    <pre>Du bist Customer-Research-Analyst. Hier sind 30\nVerbatim-Quotes aus Reddit r/HairCareDE und\nr/AskWomenOver30:\n\n[Quotes einfügen]\n\n1. Welche 3-4 Pain-Patterns dominieren?\n2. Welche Existing-Solutions werden am häufigsten\n   genannt? Was sind die Schwächen lt. Quotes?\n3. Welche emotionalen Worte tauchen in mehreren\n   Quotes auf? (Insider-Sprache-Kandidaten)\n4. Welcher Pain wirkt am wenigsten gelöst?\n5. Vergleich mit meiner Hypothese: [Phase-1-Pain-\n   Hypothese einfügen]. Was passt, was nicht?\n\nSei direkt. Wenn die Daten dünn sind, sag das.</pre>\n\n    <div class=\"output-box\">\n      <h4>Pflicht-Output</h4>\n      <ul>\n        <li>3–5 Subs identifiziert + dokumentiert (Members + Activity)</li>\n        <li>≥30 Verbatim-Quotes in Pain-DB</li>\n        <li>Pattern-Synthese: Top-3 Pain-Patterns + Top-3 Existing-Solutions</li>\n        <li>≥10 Insider-Phrasen-Kandidaten</li>\n        <li>Vergleich mit Phase-1-Hypothese: Bestätigt / Erweitert / Widerlegt</li>\n      </ul>\n    </div>\n\n    <div class=\"warn-box\">\n      <h4>Häufige Fehler</h4>\n      <ol>\n        <li><strong>Du paraphrasierst.</strong> \"Sie meinte, es war frustrierend\" — nein, was sie sagte war: \"Ich hab fünf Mal das Geld in den Müll geworfen.\" Notier <em>exakt</em>.</li>\n        <li><strong>Du suchst in zu vielen Subs.</strong> 3–5 ist optimal. Bei 10+ verwässerst du den Avatar-Filter.</li>\n        <li><strong>Du nimmst nur positive Quotes.</strong> 1-Star-Reviews + Frustrations-Posts sind <em>wertvoller</em> als Lob.</li>\n        <li><strong>Du verlässt Reddit zu früh.</strong> 4 Stunden minimum. Quick-and-dirty in 30 Min liefert Pseudo-Insights.</li>\n        <li><strong>Du ignorierst, wenn Quotes deine Hypothese widerlegen.</strong> Genau das ist der Wert. Pivot ist 100× billiger als später.</li>\n      </ol>\n    </div>\n\n    <div class=\"info-box\">\n      <h4>Tools</h4>\n      <ul>\n        <li><strong>Reddit-Web</strong> (kostenlos) — Sortierung \"Top — All / Year\"</li>\n        <li><strong>SubredditStats.com</strong> — Engagement-Metrics</li>\n        <li><strong>Pushshift.io</strong> — historische Reddit-Daten (für Pre-2023-Threads)</li>\n        <li><strong>Notion-Database</strong> — Verbatim-DB-Template (Duplicate-Link kommt)</li>\n        <li><strong>Claude / ChatGPT</strong> — Pattern-Synthese</li>\n      </ul>\n    </div>\n\n    <div class=\"disclaim-box\">\n      <strong>Quellen-Hinweis:</strong> Quotes aus Reddit sind öffentlich, dürfen für Marketing-Pattern-Analyse verwendet werden. Beim Zitieren in Marketing-Texten: anonymisieren (kein Username), nicht wörtlich kopieren wenn potenziell identifizierbar.\n    </div>",
    "nextEyebrow": "Nächster Item →",
    "nextTitle": "02 · Foren-Recherche"
  },
  {
    "slug": "pre-order-smoke-test",
    "phase": 2,
    "itemId": "phase-2-11",
    "eyebrow": "Phase 2 · Modul 2.3 · Item 11 / 22",
    "title": "Pre-Order-Smoke-Test — der Wahrheits-Test.",
    "summary": "Reddit sagt \"Pain ist da\". Mom-Test sagt \"Lösung wäre interessant\". Aber zahlt jemand wirklich? Pre-Order-Smoke-Test ist die einzige Validation, die ehrlich ist — weil sie Geld kostet.",
    "body": "<h2>Was es ist</h2>\n    <p>Eine schlanke <strong>Coming-Soon-Page mit Pre-Order-Funktion</strong> — entweder als Reservierung (E-Mail-Optin) oder als echte Pre-Order (vorbezahlt mit Lieferungs-Versprechen in 4-12 Wochen). Du testest <strong>Zahlungsbereitschaft</strong>, nicht nur Interesse.</p>\n\n    <h2>Warum Pre-Order &gt; Survey</h2>\n    <p>Surveys sind höflich. \"Würden Sie das kaufen?\" → 70 % sagen ja. \"Hier ist der Pre-Order-Button für €49 — Lieferung in 8 Wochen\" → ehrliche 5-15 % drücken den Knopf. Der Unterschied = Validation.</p>\n    <p>Hormozi-Logik: <em>\"If they don't put money down, they don't want it.\"</em></p>\n\n    <h2>Zwei Smoke-Test-Varianten</h2>\n\n    <h3>Variante A — Reservierung (Soft)</h3>\n    <p>E-Mail-Optin mit Versprechen \"First Access + 10 % Rabatt beim Launch\". Conversion-Erwartung: <strong>5-10 %</strong> der Visitor.</p>\n    <p>Vorteil: niedrige Hürde, mehr Daten. Nachteil: nicht dasselbe wie echte Kaufabsicht.</p>\n    <p><strong>Schwelle:</strong> ≥50 Optins bei realistischer Traffic-Zahl (200-1.000 Visitor).</p>\n\n    <h3>Variante B — Echte Pre-Order (Hard)</h3>\n    <p>Bezahlbarer Pre-Order-Button mit klarer Kommunikation: \"Lieferung in 8-12 Wochen, Geld-zurück-Garantie wenn nicht produziert wird\". Conversion: <strong>1-3 %</strong> der Visitor.</p>\n    <p>Vorteil: ehrliche Validation, Cash für Lieferanten. Nachteil: rechtlich umsetzungsanspruchsvoller, höhere Hürde.</p>\n    <p><strong>Schwelle:</strong> ≥10-25 echte Pre-Orders bei 500-2.000 Visitor (je nach AOV).</p>\n\n    <p><strong>Empfehlung:</strong> Variante A für niedrige AOV (&lt;€50). Variante B für hohe AOV (≥€80) und wenn du Cash brauchst.</p>\n\n    <h2>Page-Aufbau (10 Sektionen, in dieser Reihenfolge)</h2>\n\n    <ol>\n      <li><strong>Hero</strong> — Headline (USP aus Phase 1.4) + Hero-Bild oder Video</li>\n      <li><strong>Sub-Headline</strong> — Pain-Statement + Versprechen (\"für Menschen, die [Pain] haben — endlich [Versprechen]\")</li>\n      <li><strong>Pre-Order-CTA</strong> — prominent, oberhalb der Falz</li>\n      <li><strong>\"Wieso jetzt\"</strong> — 3 Vorteile aus Phase 1.5 (UMP-Pain → Versprechen)</li>\n      <li><strong>Founder-Story</strong> — kurze Story aus deinem P.S.S.P. (Modul 1.1)</li>\n      <li><strong>Wie es funktioniert</strong> — 3-Schritt-Visual (Pre-Order → Produktion → Lieferung in X Wochen)</li>\n      <li><strong>Garantie</strong> — Geld-zurück bei Nicht-Produktion (rechtlich Pflicht)</li>\n      <li><strong>FAQ</strong> — 5-7 Fragen (Wann kommt's? Wieso Pre-Order? Was wenn doch nicht? Versand? Etc.)</li>\n      <li><strong>Trust</strong> — wenn vorhanden: PR / Reviews / Testimonials. Wenn nicht: Founder-Foto + Über-mich</li>\n      <li><strong>CTA-Wiederholung</strong> + Footer (Impressum, Datenschutz)</li>\n    </ol>\n\n    <h2>Tech-Setup (Shopify-Light)</h2>\n\n    <ul>\n      <li><strong>Shopify Basic</strong> ($39/Mo) oder kostenloses Carrd / Webflow für Reservation-Variante</li>\n      <li><strong>Theme:</strong> Dawn (kostenlos, performant)</li>\n      <li><strong>Pre-Order-App:</strong> \"Pre-order Now WOD\" oder \"Pre-Order Manager\" (~€10/Mo) — wichtig: Pre-Order-Modus + automatische Anzahlungs-Funktion</li>\n      <li><strong>E-Mail-Capture:</strong> Klaviyo (Free bis 250 Profile) oder Shopify Email</li>\n      <li><strong>Tracking:</strong> Meta Pixel + GA4 (auch wenn keine Ads — du willst die Daten)</li>\n      <li><strong>DSGVO:</strong> Pflicht, auch für Smoke-Test (eRecht24-Generator nutzen)</li>\n    </ul>\n\n    <h2>Traffic-Strategie für den Smoke-Test</h2>\n\n    <p>Pflicht: <strong>realistischer Traffic</strong>, sonst ist die Conversion-Quote nicht belastbar.</p>\n\n    <h3>Organic (Tag 1-7)</h3>\n    <ul>\n      <li>Reddit (UWG-konform: in passenden Subs sharen, kein Spam)</li>\n      <li>LinkedIn-Founder-Post (wenn passend)</li>\n      <li>IG / TikTok aus eigenem Account (wenn vorhanden)</li>\n      <li>Persönliches Netzwerk (WhatsApp, Slack-Communities)</li>\n    </ul>\n\n    <h3>Paid (optional, Tag 7-14)</h3>\n    <ul>\n      <li>Meta-Ads mit €5-15/Tag — 5-7 Tage Test</li>\n      <li>Ziel: 200-500 Visitor zur Page</li>\n      <li>Audience: aus Phase 1.3 Avatar (Demografie-Targeting)</li>\n    </ul>\n\n    <h2>Auswertung — Pivot-or-Persevere</h2>\n\n    <table style=\"width:100%;border-collapse:collapse;margin:16px 0;font-size:14px\">\n      <tr style=\"background:var(--bg-soft)\">\n        <th style=\"padding:10px 12px;text-align:left;border:1px solid var(--line)\">Visitor</th>\n        <th style=\"padding:10px 12px;text-align:left;border:1px solid var(--line)\">Optins / Pre-Orders</th>\n        <th style=\"padding:10px 12px;text-align:left;border:1px solid var(--line)\">Conversion</th>\n        <th style=\"padding:10px 12px;text-align:left;border:1px solid var(--line)\">Verdict</th>\n      </tr>\n      <tr><td style=\"padding:10px 12px;border:1px solid var(--line)\">500</td><td style=\"padding:10px 12px;border:1px solid var(--line)\">≥50 Optins (10 %)</td><td style=\"padding:10px 12px;border:1px solid var(--line)\">≥10 %</td><td style=\"padding:10px 12px;border:1px solid var(--line);color:var(--green);font-weight:600\">PERSEVERE</td></tr>\n      <tr><td style=\"padding:10px 12px;border:1px solid var(--line)\">500</td><td style=\"padding:10px 12px;border:1px solid var(--line)\">15-30 Optins (3-6 %)</td><td style=\"padding:10px 12px;border:1px solid var(--line)\">3-6 %</td><td style=\"padding:10px 12px;border:1px solid var(--line);color:var(--amber);font-weight:600\">FIX (Page / Targeting)</td></tr>\n      <tr><td style=\"padding:10px 12px;border:1px solid var(--line)\">500</td><td style=\"padding:10px 12px;border:1px solid var(--line)\">&lt;15 Optins (&lt;3 %)</td><td style=\"padding:10px 12px;border:1px solid var(--line)\">&lt;3 %</td><td style=\"padding:10px 12px;border:1px solid var(--line);color:var(--red);font-weight:600\">PIVOT (Avatar / Pain / Produkt)</td></tr>\n    </table>\n\n    <p><strong>Wichtig:</strong> bei &lt;200 Visitor ist die Quote nicht belastbar. Erst Traffic erzeugen, dann auswerten.</p>\n\n    <div class=\"output-box\">\n      <h4>Pflicht-Output</h4>\n      <ul>\n        <li>Coming-Soon-Page live (eigene Domain oder Sub-Domain)</li>\n        <li>Pre-Order-Mechanik (Reservation oder echte Pre-Order)</li>\n        <li>Tracking installiert + Test-Buy verifiziert</li>\n        <li>≥200 Visitor erzeugt (Organic + ggf. Paid)</li>\n        <li>Conversion-Quote dokumentiert</li>\n        <li>Pivot-or-Persevere-Decision</li>\n      </ul>\n    </div>\n\n    <div class=\"warn-box\">\n      <h4>Rechtliche Pflichten beim Pre-Order (DACH)</h4>\n      <ol>\n        <li><strong>Klare Lieferzeit-Angabe</strong> — \"Lieferung in 8-12 Wochen\" muss prominent stehen</li>\n        <li><strong>Geld-zurück-Garantie bei Nicht-Lieferung</strong> — pflichtig kommuniziert</li>\n        <li><strong>Impressum + Datenschutz + AGB + Widerrufsbelehrung</strong> — auch beim Smoke-Test (siehe Phase 3 Modul 3.9)</li>\n        <li><strong>Pre-Order ist juristisch Verbrauchsgüterkauf</strong> — du gehst eine Lieferungspflicht ein. Bei Nicht-Lieferung: Refund + ggf. Schadensersatz.</li>\n      </ol>\n    </div>\n\n    <div class=\"info-box\">\n      <h4>Tools</h4>\n      <ul>\n        <li><strong>Shopify Basic</strong> ($39/Mo) — empfohlen für echte Pre-Orders</li>\n        <li><strong>Pre-order Now WOD</strong> oder <strong>Pre-Order Manager</strong> — Shopify-Apps</li>\n        <li><strong>Carrd</strong> ($19/Jahr) — Reservation-Variante (kein Shopify nötig)</li>\n        <li><strong>Klaviyo</strong> (Free bis 250 Profile) — E-Mail-Capture</li>\n        <li><strong>eRecht24-Generator</strong> — DSGVO/Impressum/AGB für Smoke-Test</li>\n      </ul>\n    </div>\n\n    <div class=\"disclaim-box\">\n      <strong>Hinweis:</strong> Diese Lesson ist keine Rechtsberatung. Pre-Order ist juristisch ein Verbrauchsgüterkauf — Pflichten bestehen. Bei Unsicherheit zur konkreten Umsetzung: Anwalt für IT-Recht oder eRecht24-Premium konsultieren.\n    </div>",
    "nextEyebrow": "Nächster Item →",
    "nextTitle": "12 · Pre-Order-Mechanik"
  },
  {
    "slug": "dsgvo-bfsg",
    "phase": 3,
    "itemId": "phase-3-39",
    "eyebrow": "Phase 3 · Modul 3.9 · Item 39 / 55",
    "title": "DSGVO &amp; BFSG — die zwei Pflicht-Säulen.",
    "summary": "DSGVO-Bußgelder DE 2025: 249 Verfahren, ~46,9 Mio €. BFSG seit Juni 2025 verbindlich für jeden B2C-Online-Shop. Wer das ignoriert, wird abgemahnt — kein \"wenn\", sondern \"wann\".",
    "body": "<h2>Was es ist</h2>\n    <p>Zwei separate, aber zusammen umzusetzende Pflicht-Bereiche für jeden DACH-Online-Shop:</p>\n    <ul>\n      <li><strong>DSGVO</strong> (Datenschutz-Grundverordnung) — seit 2018, betrifft jede Datenerhebung (E-Mail, Cookies, Analytics, Pixel, Newsletter, Bestelldaten). Pflicht: Datenschutzerklärung, Cookie-Consent, Auftragsverarbeitungs-Verträge.</li>\n      <li><strong>BFSG</strong> (Barrierefreiheitsstärkungsgesetz) — seit 28. Juni 2025 verbindlich. Online-Shops müssen für Menschen mit Behinderungen zugänglich sein. Pflicht: Barrierefreiheitserklärung + technische Compliance.</li>\n    </ul>\n\n    <h2>Warum jetzt</h2>\n    <p>2025 war das erste Jahr mit konsequenter BFSG-Durchsetzung. Verbraucherzentralen mahnen aktiv ab — die ersten 200+ Abmahnungen in den ersten 3 Monaten nach Inkrafttreten. Standard-Abmahnkosten: <strong>1.500–5.000 €</strong> pro Verstoß.</p>\n    <p>DSGVO-Verstöße werden seit Jahren systematisch geahndet. Kleines Beispiel: <strong>Google Fonts ohne Consent</strong> = bei jeder Page-View ein potenzieller Verstoß. Eine einzige IP-Adressen-Übermittlung an Google ohne Einwilligung kann ~100 € Schadensersatz pro Person kosten — bei 10.000 Page-Views ist das nicht trivial.</p>\n\n    <div class=\"info-box\">\n      <h4>Was diese Lesson NICHT ist</h4>\n      <p style=\"margin-bottom:0\">Keine Rechtsberatung. Wir erklären die Mechanik, zeigen die Pflichten, verlinken auf rechtssichere Generator-Tools (eRecht24-Affiliate-Linkage). Bei komplexen Sonderfällen: Anwalt konsultieren.</p>\n    </div>\n\n    <h2>DSGVO — die 4 Pflicht-Komponenten</h2>\n\n    <h3>1 · Datenschutzerklärung</h3>\n    <p>Pflicht auf jeder Domain. Muss alle Datenerhebungen abdecken: Server-Logs, Cookies, Newsletter, Bestellabwicklung, Versand-Dienstleister, Payment-Provider, Analytics, Ad-Pixel, Re-Marketing. Bei Updates der Tools: <strong>Datenschutzerklärung aktualisieren</strong>.</p>\n    <p><strong>Tool:</strong> <a href=\"https://www.e-recht24.de/\" target=\"_blank\">eRecht24-Datenschutz-Generator</a> (Premium, ab €15 / Mo, Updates inklusive). Kostenlose Generatoren wie <a href=\"https://datenschutz-generator.de/\" target=\"_blank\">Activemind</a> reichen für simple Setups.</p>\n\n    <h3>2 · Cookie-Consent (mit Reject-Button)</h3>\n    <p><strong>Pflicht:</strong> Alle nicht-essentiellen Cookies (Analytics, Pixel, Re-Targeting) brauchen aktive Einwilligung. <strong>\"Reject all\" muss gleichberechtigt sichtbar sein</strong> wie \"Accept all\" — sonst sofortige Abmahnung.</p>\n    <p><strong>Tools:</strong> <strong>Cookiebot</strong> (~€10–30 / Mo, breit verbreitet), <strong>Borlabs Cookie</strong> (€39 / Jahr, beliebt im DACH-Raum), <strong>iubenda</strong> (~€8 / Mo). Shopify-eigene Cookie-Banner reichen <strong>nicht</strong> für DSGVO-konforme Conversion-Tracking-Setups.</p>\n\n    <h3>3 · Consent Mode V2 (für Tracking)</h3>\n    <p>Google verlangt seit März 2024 Consent Mode V2 für alle EU-User-Daten in GA4 + Google Ads. Ohne: Conversion-Tracking funktioniert nicht zuverlässig. <strong>Setup:</strong> Cookiebot/Borlabs unterstützen Consent Mode V2 nativ — beim Setup aktivieren.</p>\n\n    <h3>4 · Auftragsverarbeitungs-Verträge (AVV)</h3>\n    <p>Mit jedem externen Dienstleister, der personenbezogene Daten verarbeitet: <strong>schriftlicher AV-Vertrag</strong>. Pflicht für Klaviyo, Shopify, Sendcloud, Stripe, GA4, Meta, etc. Die meisten Tools bieten Standard-AVs zum Online-Akzeptieren — <strong>aktiv akzeptieren und Kopie speichern</strong>.</p>\n\n    <h2>BFSG — was tun ab Juni 2025</h2>\n\n    <h3>1 · Technische Compliance (Pflicht)</h3>\n    <ul>\n      <li><strong>Alt-Texte</strong> für alle Bilder (Screen-Reader müssen Inhalt verstehen)</li>\n      <li><strong>Tastatur-Navigation</strong> — alle Funktionen ohne Maus erreichbar</li>\n      <li><strong>Kontraste</strong> ≥ 4,5:1 für normale Schrift, ≥ 3:1 für große Schrift</li>\n      <li><strong>Formular-Labels</strong> — jedes Input-Feld klar beschriftet</li>\n      <li><strong>Video-Untertitel</strong> bei eingebetteten Videos</li>\n      <li><strong>Keine reine Farb-Information</strong> — z. B. \"rote Felder sind Pflicht\" reicht nicht, braucht Symbol</li>\n    </ul>\n\n    <h3>2 · Barrierefreiheitserklärung (Pflicht)</h3>\n    <p>Eigene Page mit Erklärung, was barrierefrei ist und was nicht. Muss von jeder Seite verlinkt sein.</p>\n    <p><strong>Tool:</strong> <a href=\"https://www.e-recht24.de/\" target=\"_blank\">eRecht24-Barrierefreiheit-Generator</a> (Premium-exclusive, einer der wenigen aktualisierten Generatoren in DACH).</p>\n\n    <h3>3 · Audit-Tools</h3>\n    <ul>\n      <li><strong>Lighthouse</strong> (Chrome DevTools, kostenlos) — Accessibility-Score ≥90 anstreben</li>\n      <li><strong>WAVE</strong> (wave.webaim.org) — visueller Accessibility-Check</li>\n      <li><strong>axe DevTools</strong> (Browser-Extension) — automatisierte Issue-Detection</li>\n    </ul>\n\n    <h2>Setup-Reihenfolge (Pflicht-Sequenz)</h2>\n\n    <ol>\n      <li><strong>eRecht24-Premium-Account</strong> oder Alternative anlegen</li>\n      <li><strong>Datenschutzerklärung</strong> generieren + auf Shop einbetten (jede Seite Footer-Link)</li>\n      <li><strong>Impressum</strong> generieren + einbetten (TMG-konform: Name, Anschrift, USt-ID, Vertretungsberechtigte)</li>\n      <li><strong>AGB + Widerrufsbelehrung</strong> generieren + einbetten</li>\n      <li><strong>Cookie-Tool</strong> (Cookiebot/Borlabs) installieren mit Consent Mode V2</li>\n      <li><strong>BFSG-Audit</strong> mit Lighthouse durchführen → Issues fixen</li>\n      <li><strong>Barrierefreiheitserklärung</strong> generieren + einbetten</li>\n      <li><strong>AVVs</strong> mit allen Tool-Anbietern aktiv akzeptieren + Kopie speichern</li>\n      <li><strong>Test-Kauf</strong> als Endkunde — alle Texte prüfen</li>\n    </ol>\n\n    <div class=\"output-box\">\n      <h4>Pflicht-Output</h4>\n      <ul>\n        <li>Datenschutzerklärung live (auf jeder Seite verlinkt)</li>\n        <li>Impressum live (TMG-konform)</li>\n        <li>AGB + Widerrufsbelehrung live (im Checkout-Flow zustimmungspflichtig)</li>\n        <li>Cookie-Banner mit Reject-Button + Consent Mode V2</li>\n        <li>Lighthouse Accessibility-Score ≥90</li>\n        <li>Barrierefreiheitserklärung live</li>\n        <li>9+ AVVs in Ordner gespeichert</li>\n      </ul>\n    </div>\n\n    <div class=\"warn-box\">\n      <h4>Top-Fehler, die zur Abmahnung führen</h4>\n      <ol>\n        <li><strong>Cookie-Banner ohne Reject-Button</strong> oder mit kleiner \"Ablehnen\"-Schrift = Abmahnungs-Garantie</li>\n        <li><strong>Google Fonts ohne Consent direkt eingebunden</strong> (statt lokal hosten) = €100+ Schadensersatz pro Klage</li>\n        <li><strong>Newsletter ohne Double-Opt-In</strong> = €1.000+ pro Verstoß</li>\n        <li><strong>Datenschutzerklärung 2 Jahre nicht aktualisiert</strong> = Standard-Abmahn-Vorlage</li>\n        <li><strong>Keine Barrierefreiheitserklärung</strong> ab Juni 2025 = neue Abmahn-Welle</li>\n      </ol>\n    </div>\n\n    <div class=\"info-box\">\n      <h4>Tools &amp; Affiliate-Linkage</h4>\n      <ul>\n        <li><strong><a href=\"https://www.e-recht24.de/\" target=\"_blank\">eRecht24 Premium</a></strong> — alle Generatoren (DSGVO, AGB, Impressum, BFSG, Widerruf), ab €15 / Monat. <em>BB-Brands-Affiliate-Linkage in Vorbereitung.</em></li>\n        <li><strong><a href=\"https://www.cookiebot.com/\" target=\"_blank\">Cookiebot</a></strong> — Cookie-Consent mit Consent Mode V2, ab €10 / Mo</li>\n        <li><strong><a href=\"https://borlabs.io/\" target=\"_blank\">Borlabs Cookie</a></strong> — Cookie-Lösung speziell für WordPress/Shopify, €39 / Jahr</li>\n        <li><strong>Lighthouse</strong> (kostenlos in Chrome DevTools) — BFSG-Audit</li>\n      </ul>\n    </div>\n\n    <div class=\"disclaim-box\">\n      <strong>Wichtiger Hinweis:</strong> Diese Lesson erklärt die Pflichten und verweist auf rechtssichere Tools — <strong>sie ersetzt keine Rechtsberatung</strong>. Bei Sonderfällen (z. B. Drittstaaten-Datenflüsse, sensible Datenkategorien, internationale Expansion): Datenschutz-Anwalt oder Fachanwalt für IT-Recht konsultieren. eRecht24-Generatoren decken die Standard-Fälle ab — bei Unsicherheit zusätzlich prüfen lassen.\n    </div>",
    "nextEyebrow": "Nächster Item →",
    "nextTitle": "22 · Impressum (TMG-konform)"
  },
  {
    "slug": "klaviyo-setup",
    "phase": 3,
    "itemId": "phase-3-50",
    "eyebrow": "Phase 3 · Modul 3.11 · Item 50 / 55",
    "title": "Klaviyo Setup — Account, Listen, Profile.",
    "summary": "117.000 D2C-Brands nutzen Klaviyo. Email macht bei laufenden Brands 25-40 % des Umsatzes. Setup richtig — und du baust ein Asset, das niemand dir wegnehmen kann (im Gegensatz zu deinem Pixel).",
    "body": "<h2>Was es ist</h2>\n    <p>Initial-Setup deines <strong>Klaviyo-Accounts</strong>: Listen-Struktur, Profile-Properties, Shopify-Integration, DSGVO-konforme Optin-Mechanik. Das Fundament, auf dem in Phase 3 (Modul 3.11) die 5 Pflicht-Flows laufen und in Phase 5 (Modul 5.5) die Skalierung greift.</p>\n\n    <h2>Warum Klaviyo, nicht Mailchimp?</h2>\n    <ul>\n      <li><strong>Shopify-native</strong> — Ereignisse (Order, Product Viewed, Cart Started) werden out-of-the-box getrackt</li>\n      <li><strong>Segmentierung auf Käufer-Verhalten</strong> — nicht nur Tags, sondern Filter wie \"kaufte X in den letzten 60 Tagen\"</li>\n      <li><strong>Free bis 250 Profile + 500 Sends/Monat</strong> — reicht für Pre-Launch und Early-Launch</li>\n      <li><strong>Defacto-Standard für D2C 2025</strong> — alle Best-Practices, Templates, Integrationen sind primär für Klaviyo</li>\n    </ul>\n    <p>Mailchimp / Brevo / ConvertKit sind OK für Newsletter — aber nicht für E-Commerce-Flows mit Behavior-Triggern.</p>\n\n    <h2>Schritt 1 — Account anlegen (10 Min)</h2>\n\n    <ol>\n      <li><a href=\"https://www.klaviyo.com/\" target=\"_blank\">klaviyo.com</a> → Sign Up</li>\n      <li>Business-E-Mail nutzen (nicht Gmail-Free) — z. B. <code>info@deine-domain.de</code></li>\n      <li>Company-Info: deine Marke, dein Land (Deutschland)</li>\n      <li><strong>Sender-Adresse</strong>: <code>hello@deine-domain.de</code> oder <code>info@deine-domain.de</code> — wichtig: nicht eine Gmail-Adresse, sonst landest du im Spam</li>\n      <li>Privacy-Policy-URL angeben (DSGVO-konform — siehe Modul 3.9)</li>\n    </ol>\n\n    <h2>Schritt 2 — Domain authentifizieren (15 Min, Pflicht für Deliverability)</h2>\n\n    <p><strong>Drei DNS-Einträge</strong> bei deinem Domain-Provider (Cloudflare, IONOS, etc.):</p>\n\n    <ul>\n      <li><strong>SPF</strong> — sagt Empfängern, dass Klaviyo in deinem Namen senden darf</li>\n      <li><strong>DKIM</strong> — kryptografische Signatur (Klaviyo gibt dir die Werte)</li>\n      <li><strong>DMARC</strong> — Policy-Anweisung (Standard: <code>p=none</code> initial, später <code>p=quarantine</code>)</li>\n    </ul>\n\n    <p>Klaviyo zeigt dir die exakten DNS-Werte unter <em>Account Settings → Domains and Hosting → Sender Domain</em>. Eintragen, 24h warten, dann verifizieren.</p>\n\n    <p><strong>Ohne Authentifizierung:</strong> 30-50 % deiner E-Mails landen in Gmail-Werbung-Tab oder Spam. Pflicht.</p>\n\n    <h2>Schritt 3 — Shopify-Integration (5 Min)</h2>\n\n    <ol>\n      <li>In Klaviyo: <em>Integrations → Shopify → Connect</em></li>\n      <li>Shop-URL eingeben → bei Shopify einloggen → bestätigen</li>\n      <li>Klaviyo importiert: Customers, Orders, Products (kann 1-2 Stunden dauern bei Bestandskunden)</li>\n      <li>Tracking-Snippet automatisch installiert (Klaviyo onsite.js → trackt Page-Views, Product-Views, Cart-Events)</li>\n    </ol>\n\n    <h2>Schritt 4 — Listen-Struktur</h2>\n\n    <p>Eine schlanke Struktur — nicht zu viele Listen, aber klare Trennung:</p>\n\n    <ul>\n      <li><strong>Newsletter</strong> — alle Optins (über Popup, Footer-Form, Coming-Soon-Page)</li>\n      <li><strong>VIP-Customers</strong> — Repeat-Käufer (≥2 Bestellungen) — aber: Segment, nicht Liste!</li>\n      <li><strong>Pre-Launch</strong> (temporär) — die ersten Optins aus Smoke-Test (Phase 2.3)</li>\n    </ul>\n\n    <p><strong>Wichtig:</strong> Lists sind statisch — Käufer in Lists sind Käufer in Lists, bis du sie rausnimmst. <strong>Segments</strong> sind dynamisch — VIP / Cart-Abandoner / 30-Tage-inaktiv sollten <em>Segments</em> sein, nicht Lists.</p>\n\n    <h2>Schritt 5 — Profile-Properties (Custom Fields)</h2>\n\n    <p>Pflicht-Custom-Properties für jeden Profile (per Klaviyo Auto-Sync):</p>\n\n    <ul>\n      <li><code>$first_name</code>, <code>$last_name</code>, <code>$email</code> — Standard</li>\n      <li><code>SourceOptin</code> — wo hat sich die Person eingetragen? (Popup / Footer / Coming-Soon / Pre-Launch)</li>\n      <li><code>FirstOrderDate</code> — kommt aus Shopify-Sync</li>\n      <li><code>LastOrderDate</code> — kommt aus Shopify-Sync</li>\n      <li><code>TotalOrders</code> — kommt aus Shopify-Sync</li>\n      <li><code>TotalSpent</code> — kommt aus Shopify-Sync</li>\n    </ul>\n\n    <p>Mit diesen 6 Properties kannst du jede Segmentierung in den 5 Pflicht-Flows abdecken.</p>\n\n    <h2>Schritt 6 — DSGVO-Optin-Mechanik (Pflicht in DACH)</h2>\n\n    <p><strong>Double-Opt-In aktivieren:</strong></p>\n    <ol>\n      <li><em>Lists & Segments → Newsletter-List → Settings → Double Opt-In</em></li>\n      <li><strong>Custom Confirmation Email</strong> auf Deutsch + Brand-Voice anpassen</li>\n      <li>Confirmation-Page nach Klick: redirect zu Thank-You-Page deiner Domain</li>\n    </ol>\n\n    <p><strong>Pflicht-Inhalte in jedem Optin-Form:</strong></p>\n    <ul>\n      <li>Klare Beschreibung was abonniert wird (\"Newsletter mit Tipps, Drops und 10 % Rabatt\")</li>\n      <li>Hinweis auf Datenschutzerklärung mit Link</li>\n      <li>\"Jederzeit abbestellbar\"-Hinweis</li>\n      <li>Kein Pre-Filled-Checkbox (verboten in DACH)</li>\n    </ul>\n\n    <h2>Schritt 7 — Pre-Launch-Optin-Form bauen</h2>\n\n    <p>Erstes konkretes Form: das Optin-Popup für deine Coming-Soon-Page (aus Phase 2.3) oder den Live-Shop. Klaviyo:</p>\n\n    <ol>\n      <li><em>Sign-Up Forms → Create Form</em></li>\n      <li>Template: \"Welcome with discount\" anpassen</li>\n      <li>Headline: aus Phase 1.5 Pain-Hypothese — \"Schon enttäuscht von [X]? — Bekomm 10 % auf [Hero-SKU] + sei dabei beim Drop.\"</li>\n      <li>Felder: nur E-Mail (kein First Name in Pre-Launch — reduziert Friction um ~30 %)</li>\n      <li>Trigger: \"Show after 5 sec\" oder \"Show on Exit Intent\"</li>\n      <li>SourceOptin-Property setzen: <code>\"PreLaunchPopup\"</code></li>\n      <li>Confirmation: \"Check deine Mailbox — bestätige den Link, dann ist dein Code da\"</li>\n    </ol>\n\n    <h2>Schritt 8 — Test-Optin durchziehen</h2>\n\n    <ol>\n      <li>Eigene 2. E-Mail-Adresse nutzen</li>\n      <li>Optin-Form ausfüllen → Confirmation-Email kommt → Link klicken → Welcome-Mail kommt</li>\n      <li>Profile-Properties checken (sollte <code>SourceOptin: \"PreLaunchPopup\"</code> haben)</li>\n      <li>Wenn alles funktioniert: bereit für 5-Flow-Build (siehe Phase 3 Modul 3.11 Items 51-55)</li>\n    </ol>\n\n    <div class=\"output-box\">\n      <h4>Pflicht-Output</h4>\n      <ul>\n        <li>Klaviyo-Account live, Domain authentifiziert (SPF + DKIM + DMARC)</li>\n        <li>Shopify-Integration aktiv, Customer- und Order-Sync läuft</li>\n        <li>Newsletter-Liste mit Double-Opt-In</li>\n        <li>≥6 Profile-Properties getrackt</li>\n        <li>1 Optin-Form live (Pre-Launch oder Standard-Popup)</li>\n        <li>Test-Optin erfolgreich durchgeführt</li>\n      </ul>\n    </div>\n\n    <div class=\"warn-box\">\n      <h4>Häufige Fehler</h4>\n      <ol>\n        <li><strong>Du nutzt Gmail-Adresse als Sender.</strong> Pflicht ist <code>name@deine-domain.de</code> mit DKIM/SPF — sonst Spam.</li>\n        <li><strong>Du überspringst Domain-Authentifizierung.</strong> Klaviyo liefert dann via klaviyomail.com — 30-50 % der Mails sehen Käufer nie.</li>\n        <li><strong>Du machst Single-Opt-In in DACH.</strong> Verboten — Standard-Abmahnung.</li>\n        <li><strong>Du nutzt Lists statt Segments.</strong> Lists für Optin-Source, Segments für Verhalten-basierte Gruppen.</li>\n        <li><strong>Du baust Flows bevor Properties existieren.</strong> Properties first — sonst läufst du in \"diese Property existiert nicht\"-Fehler.</li>\n      </ol>\n    </div>\n\n    <div class=\"info-box\">\n      <h4>Tools &amp; Links</h4>\n      <ul>\n        <li><strong><a href=\"https://www.klaviyo.com/\" target=\"_blank\">Klaviyo</a></strong> — Free Plan ausreichend für Pre-Launch + Early-Launch (bis 250 Profile)</li>\n        <li><strong><a href=\"https://help.klaviyo.com/hc/en-us/articles/115005075928\" target=\"_blank\">Klaviyo Domain Auth Guide</a></strong> — exakte DNS-Werte</li>\n        <li><strong>eRecht24</strong> — DSGVO-konformes Optin-Form-Wording</li>\n        <li><strong>Klaviyo + Shopify Free</strong> — 1 Klick-Integration</li>\n      </ul>\n    </div>\n\n    <div class=\"disclaim-box\">\n      <strong>Hinweis:</strong> Klaviyo-Pricing skaliert mit Profile-Anzahl: 250 Free → ab 251 Profile €45/Mo → ab 1.500 Profile €100/Mo. Plane das in deine Margen-Mathematik (Phase 2.4) ein.\n    </div>",
    "nextEyebrow": "Nächster Item →",
    "nextTitle": "51 · Welcome-Flow (5–7 Mails)"
  },
  {
    "slug": "offer-brief",
    "phase": 3,
    "itemId": "phase-3-01",
    "eyebrow": "Phase 3 · Modul 3.1 · Item 01 / 55",
    "title": "Offer Brief — die Schwartz-Logik.",
    "summary": "Eugene Schwartz schrieb 1966 das Buch, das jede ernsthafte Direct-Response-Marke heute noch nutzt. Awareness-Level, Sophistication-Stage, Big Idea, UMP, UMS, Belief Chain. Ein Doc — und plötzlich weißt du, was zu sagen ist.",
    "body": "<h2>Was es ist</h2>\n    <p>Ein einseitiges Strategie-Doc, das die <strong>argumentative Architektur</strong> deiner Marke definiert: <em>Wer ist der Käufer · was weiß er bereits · wie viele andere haben es ihm versprochen · wie verkaufst du anders</em>. Quelle: <em>Breakthrough Advertising</em> (Eugene Schwartz, 1966) — Pflicht-Lektüre für jede D2C-Marke seit Agora.</p>\n\n    <h2>Warum nicht \"schreib den Marketing-Text\"</h2>\n    <p>Weil Marketing-Text ohne Offer Brief Lärm ist. Der Offer Brief klärt: <em>welcher Mensch hört das · welche Argumente kennt er schon · welche neue Argumentation hörst er hier zum ersten Mal</em>. Erst danach schreibst du Copy.</p>\n    <p>Ohne Offer Brief: du schreibst Slogans. Mit Offer Brief: du schreibst Argumente, die <em>genau hier, genau heute</em> funktionieren.</p>\n\n    <h2>Die 8 Felder</h2>\n\n    <h3>1 · Avatar (kurz, 3-5 Sätze)</h3>\n    <p>Aus Phase 1.3 — komprimiert. <em>\"30-jährige Frau in Großstadt, hatte 3 Beauty-Routinen die nicht funktioniert haben, sucht etwas das nicht 'noch ein Drogerie-Trick' ist.\"</em></p>\n\n    <h3>2 · Awareness-Level (Schwartz Stage 1-5)</h3>\n    <ul>\n      <li><strong>Stage 1 — Unaware:</strong> kennt das Problem nicht. (Schwer zu verkaufen, niedrige Conversion)</li>\n      <li><strong>Stage 2 — Problem-Aware:</strong> weiß, dass etwas nicht stimmt, kennt aber keine Lösung</li>\n      <li><strong>Stage 3 — Solution-Aware:</strong> weiß, dass es Lösungen gibt, kennt deine aber nicht</li>\n      <li><strong>Stage 4 — Product-Aware:</strong> kennt dich, hat aber noch nicht gekauft</li>\n      <li><strong>Stage 5 — Most-Aware:</strong> bereit zu kaufen, braucht nur Anstoß</li>\n    </ul>\n    <p>Pflicht: einen Awareness-Level wählen. Standard für Pre-Revenue: <strong>Stage 2 oder 3</strong>. Ad-Copy + Landing-Page müssen genau dort abholen.</p>\n\n    <h3>3 · Sophistication-Stage (1-5)</h3>\n    <p>Wie viele Wettbewerber hat dein Markt? Wie oft wurden ähnliche Versprechen schon gemacht?</p>\n    <ul>\n      <li><strong>Stage 1:</strong> Du bist der Erste. (Selten, glücklich)</li>\n      <li><strong>Stage 2:</strong> 2-3 Wettbewerber, du kannst groß claimen (\"dreimal effektiver\")</li>\n      <li><strong>Stage 3:</strong> Markt ist warm — du brauchst <strong>Mechanism</strong> (warum funktioniert deins anders)</li>\n      <li><strong>Stage 4:</strong> Markt ist gesättigt — du brauchst <strong>Better Mechanism</strong> oder neue Identität</li>\n      <li><strong>Stage 5:</strong> Markt ist müde — Identifikation, Story, Persona retten dich</li>\n    </ul>\n    <p>DACH-D2C-Markets sind meist <strong>Stage 3-4</strong>. Heißt: du brauchst UMP + UMS.</p>\n\n    <h3>4 · Big Idea</h3>\n    <p>Der eine Gedanke, mit dem du den Markt neu framest. <em>\"Schmerz X kommt nicht von Y, sondern von Z — und hier ist die Lösung.\"</em></p>\n    <p>Beispiel Hearo: <em>\"Hörverluste isolieren nicht durch Stille, sondern durch peinliche Situationen — und genau die behebt unsere Mechanik.\"</em></p>\n\n    <h3>5 · UMP — Unique Mechanism of Problem</h3>\n    <p>Warum funktioniert es bisher nicht? Was ist die <strong>echte Ursache</strong>, die andere ignorieren?</p>\n    <p>Beispiel: <em>\"Drogerie-Shampoos enthalten Sulfate, die das Talg-Schutzschicht zerstören. Deshalb sind die Spitzen 4 Stunden nach Wäsche schon wieder trocken.\"</em></p>\n\n    <h3>6 · UMS — Unique Mechanism of Solution</h3>\n    <p>Was machst du anders als alle? Was ist deine <strong>proprietäre Mechanik</strong>?</p>\n    <p>Beispiel: <em>\"Wir verwenden Cocoamphoacetat statt Sulfate — schäumt, ohne die Schutzschicht anzugreifen.\"</em></p>\n    <p>UMP + UMS zusammen = <strong>Mechanism-Pair</strong>. Ohne Mechanism-Pair ist deine Marke austauschbar in Stage 3-4 Märkten.</p>\n\n    <h3>7 · Belief Chain (≤6 Glaubenssätze)</h3>\n    <p>Welche 4-6 Dinge muss der Käufer glauben, um zu kaufen? Reihenfolge wichtig — von <em>\"das Problem ist real\"</em> bis <em>\"diese Marke löst es für mich\"</em>.</p>\n    <p>Beispiel:</p>\n    <ol>\n      <li>\"Trockene Spitzen sind <em>nicht</em> normal.\"</li>\n      <li>\"Die meisten Shampoos verschlimmern es.\"</li>\n      <li>\"Es gibt eine bessere chemische Lösung — Cocoamphoacetat.\"</li>\n      <li>\"Diese Marke verwendet sie als einzige in Drogerie-Preisklasse.\"</li>\n      <li>\"Andere wie ich haben die Spitzen-Probleme damit gelöst.\"</li>\n      <li>\"30-Tage-Geld-zurück macht Risiko = 0.\"</li>\n    </ol>\n\n    <h3>8 · Offer-Specs</h3>\n    <ul>\n      <li><strong>Hauptprodukt + Preis:</strong> Hero-SKU mit Preis (aus Phase 2.4 Margen-Mathematik)</li>\n      <li><strong>Bundle:</strong> 2-3 SKU-Kombination mit Preisvorteil</li>\n      <li><strong>Garantie:</strong> 30/60/90 Tage-Geld-zurück</li>\n      <li><strong>Bonus:</strong> was bekommt der Käufer extra (PDF-Guide, Sample, 2. Produkt)</li>\n      <li><strong>Knappheits-Trigger:</strong> Limited-Edition / Pre-Order-Window / X Stück verfügbar</li>\n    </ul>\n\n    <h2>AI-Workflow — Claude für Offer-Brief-Synthese</h2>\n\n    <pre>Du bist Direct-Response-Strategist nach Schwartz.\n\nHier sind meine Inputs:\n- Avatar: [Phase 1.3 zusammenfassen]\n- Pain-Patterns aus Pain-Mining: [Phase 2.1 Top-3]\n- Wettbewerbs-Map: [Phase 1.4]\n- Produkt-Hypothese: [Phase 1.2]\n\nErstelle Offer Brief mit allen 8 Feldern:\n1. Avatar (3-5 Sätze)\n2. Awareness-Level + Begründung\n3. Sophistication-Stage + Begründung\n4. Big Idea (1 Satz, neu-framing)\n5. UMP (warum funktioniert es bisher nicht)\n6. UMS (was machen wir anders)\n7. Belief Chain (4-6 Glaubenssätze, Reihenfolge wichtig)\n8. Offer-Specs (Preis + Bundle + Garantie + Bonus)\n\nSei präzise. Wenn ich dünne Inputs habe, sag das.\nBevorzuge Schwartz-Klassifikation auch wenn sie\nunangenehm ist (z. B. Stage 4 = \"schwierig\").</pre>\n\n    <div class=\"output-box\">\n      <h4>Pflicht-Output</h4>\n      <ul>\n        <li>Offer Brief vollständig ausgefüllt (8 Felder)</li>\n        <li>Awareness-Level klar (Stage 1-5)</li>\n        <li>Sophistication-Stage klar (1-5)</li>\n        <li>UMP + UMS als <strong>argumentatives Paar</strong> (UMP erklärt warum bisher nicht — UMS erklärt warum jetzt)</li>\n        <li>Belief Chain durchgezogen (jeder Satz baut auf vorherigem auf)</li>\n      </ul>\n    </div>\n\n    <div class=\"warn-box\">\n      <h4>Häufige Fehler</h4>\n      <ol>\n        <li><strong>Du bleibst auf Awareness-Stage 1.</strong> \"Wir machen den Markt aufmerksam\" — fast nie funktioniert für Pre-Revenue. Du brauchst Stage 2-3.</li>\n        <li><strong>Sophistication-Stage zu niedrig geschätzt.</strong> Wenn Wettbewerber existieren, bist du Stage 3+. Stage 1-2 ist selten.</li>\n        <li><strong>UMP fehlt.</strong> Nur UMS ohne UMP = \"wir sind die besten\" — nicht überzeugend in Stage 3-4.</li>\n        <li><strong>Belief Chain springt.</strong> Wenn Belief 3 Belief 2 nicht nutzt, fällt der Käufer aus dem Argumentations-Pfad.</li>\n        <li><strong>Big Idea ist Slogan.</strong> \"Schöner sein\" ist keine Big Idea — \"Trockene Spitzen liegen nicht am Wetter, sondern an Sulfaten\" ist eine.</li>\n      </ol>\n    </div>\n\n    <div class=\"info-box\">\n      <h4>Tools &amp; Quellen</h4>\n      <ul>\n        <li><strong>Offer-Brief-Template:</strong> aus BB-Brands-Repo (<code>templates/strategy/03-offer-brief-template.md</code>) — Markdown, klick-fertig duplizierbar</li>\n        <li><strong>Eugene Schwartz, <em>Breakthrough Advertising</em></strong> — Pflicht-Lektüre. Auch wenn 1966, jeder Frame heute gilt.</li>\n        <li><strong>Mark Builds Brands Library</strong> (<code>kb/frameworks/mark-builds-brands/03-offer-brief.pdf</code>) — moderne Anwendung</li>\n        <li><strong>Claude / ChatGPT</strong> — Synthese aus Phase-1+2-Inputs</li>\n      </ul>\n    </div>\n\n    <div class=\"disclaim-box\">\n      <strong>Quelle:</strong> Eugene Schwartz, <em>Breakthrough Advertising</em> (1966). Mark Ford / Stefan Georgi haben moderne Anwendungen entwickelt (RMBC). BB-Brands-Anwendung im DACH-Kontext.\n    </div>",
    "nextEyebrow": "Nächster Item →",
    "nextTitle": "02 · UMP / UMS definieren"
  },
  {
    "slug": "drop-day-routine",
    "phase": 4,
    "itemId": "phase-4-24",
    "eyebrow": "Phase 4 · Modul 4.6 · Item 24 / 41",
    "title": "Drop-Day — der Stunden-Plan.",
    "summary": "Tag 0 ist der härteste Tag deines ersten Jahres. 16 Stunden Konzentration, 0 Improvisation. Dieser Plan ist das Skelett — Stunde für Stunde, was du machst, was du checkst, was du sendest.",
    "body": "<h2>Warum ein Stunden-Plan</h2>\n    <p>Weil dein Hirn an Tag 0 nicht klar denkt. Adrenalin, Hoffnung, Angst — alles gleichzeitig. Der Stunden-Plan trifft 90 % der Entscheidungen vor dem Drop, sodass du am Tag selbst <strong>nur ausführen</strong> musst.</p>\n    <p>Die Founder, die am Drop-Day fail-en, scheitern fast immer an drei Dingen: <strong>Tracking nicht verifiziert</strong>, <strong>Kommunikation nicht koordiniert</strong> (Mail / Influencer / Social posten zu unterschiedlichen Zeiten), oder <strong>Crisis-Plan nicht da</strong>, wenn was schiefgeht.</p>\n\n    <h2>Drop-Day Stunden-Plan</h2>\n\n    <h3>Vorabend (Tag −1, 20:00–22:00 Uhr)</h3>\n    <ul>\n      <li>✓ Test-Kauf von einem zweiten Account — Bestellung kommt durch, E-Mails werden ausgelöst</li>\n      <li>✓ Pixel + CAPI senden Daten (Meta Events Manager Live-View checken)</li>\n      <li>✓ Klaviyo-Sequenz scheduled (Tag-0-Mail um 09:00, Tag-1 um 09:00, etc.)</li>\n      <li>✓ Influencer-Posts: alle Briefings bestätigt, Posting-Zeit geklärt (Window 10:00–14:00)</li>\n      <li>✓ Stock-Status final geprüft — Lager-Bestand korrekt im Shop</li>\n      <li>✓ Backup-Plan: was passiert, wenn Shopify down? Wenn Lieferant nicht versendet?</li>\n      <li>✓ Phone fully charged. Notebook charged. Coffee bereit.</li>\n    </ul>\n\n    <h3>06:00 — Wake &amp; Check</h3>\n    <ul>\n      <li>Shop loadet — manuell auf 3 Geräten checken (Mobile / Desktop / Tablet)</li>\n      <li>Tracking-Test: kleine Test-Buy, schauen ob in GA4 + Meta-Events-Manager landet</li>\n      <li>E-Mail-System ready (Klaviyo-Status grün)</li>\n      <li><strong>Wenn etwas down ist:</strong> Crisis-Plan aktivieren, Drop verschieben (lieber 2h, als 1h mit kaputtem Tracking)</li>\n    </ul>\n\n    <h3>08:00 — Letzte Vorbereitung</h3>\n    <ul>\n      <li>Drop-Mail in Klaviyo letzter Check (Subject-Line · Preview-Text · Hero-Bild · CTA)</li>\n      <li>Social-Posts geplant (Buffer / Later / native): TikTok 09:30, IG 09:30, LinkedIn 10:00</li>\n      <li>Stories vorbereitet (Counter-Sticker, Reaction-Stickers ready)</li>\n      <li>WhatsApp-Status: \"Wir launchen heute\"</li>\n    </ul>\n\n    <h3>09:00 — Drop</h3>\n    <ul>\n      <li><strong>09:00:00 exakt:</strong> Klaviyo-Mail-Send drücken</li>\n      <li><strong>09:00:30:</strong> Social-Posts live (TikTok + IG)</li>\n      <li><strong>09:01:</strong> Erstes Story-Update (\"Wir sind LIVE\")</li>\n      <li><strong>09:05:</strong> Founder-LinkedIn-Post mit Story (build-in-public)</li>\n      <li><strong>09:10:</strong> Erste Bestellung kommt rein? → Story-Reaction posten</li>\n    </ul>\n\n    <h3>09:00–13:00 — Hot Window</h3>\n    <p>Influencer posten in diesem Window. Du bist <strong>aktiv-reaktiv</strong>:</p>\n    <ul>\n      <li>Jeden Influencer-Post liken, kommentieren, re-sharen</li>\n      <li>Erste Käufer-DMs beantworten in &lt;15 Min</li>\n      <li>Stündlicher KPI-Check: Bestellungen · ATC-Rate · Page-Views · Top-Traffic-Source</li>\n      <li>Issue-Triage: Tracking-Drift? Sofort fixen. Stock-Out? Pre-Order-Modus oder Coming-Soon</li>\n      <li>Stories-Updates alle 1-2h (Behind-the-Scenes / Counter / Reactions)</li>\n    </ul>\n\n    <h3>13:00–17:00 — Steady Phase</h3>\n    <ul>\n      <li>Erste Welle vorbei — KPIs-Audit (was funktioniert? was nicht?)</li>\n      <li>Wenn ROAS &lt;0,7 nach 100 € Spend: Ad-Variante killen, andere boosten</li>\n      <li>Kunden-Support — alle DMs / Mails / Comments beantworten</li>\n      <li>Re-Targeting für die ersten Visitor (Cart-Recovery-Mails sind aktiv)</li>\n    </ul>\n\n    <h3>17:00–20:00 — Founder-Visibility</h3>\n    <ul>\n      <li>Live-Stream auf TikTok / IG (15–30 Min) — \"How's it going Day 1\"</li>\n      <li>Erste Käufer-Highlights re-sharen (mit Erlaubnis)</li>\n      <li>Personal-Reflection-Post auf LinkedIn (Lessons of Day 1)</li>\n    </ul>\n\n    <h3>20:00–22:00 — Wrap &amp; Plan</h3>\n    <ul>\n      <li>KPI-Endsumme dokumentieren: Bestellungen · Umsatz · CPA · ROAS · Top-Channel · Top-Creator</li>\n      <li>WhatsApp-Cohort-Update: ehrlicher Tag-Bericht</li>\n      <li>Was muss morgen 06:00 anders sein?</li>\n      <li>Tag-1-Mail prüfen (geht morgen früh raus)</li>\n      <li>Schlafen. Wirklich schlafen.</li>\n    </ul>\n\n    <h2>Drei Crisis-Szenarien</h2>\n\n    <h3>Szenario A — 09:30: 0 Bestellungen</h3>\n    <p><strong>Nicht panisch werden.</strong> Erste Stunde sagt nicht alles. Aber checken: kommt Mail im Inbox an (nicht Spam)? Funktionieren die Klick-Tracker? Sind Social-Posts live?</p>\n    <p>Wenn nach 2h immer noch 0: <strong>Outreach in WhatsApp-Network</strong> (\"hey, hat die Mail funktioniert? Ich krieg keine Bestellungen rein, kannst du kurz checken?\"). Manchmal liegt es an einem Tracking-Issue, das man nicht selbst sieht.</p>\n\n    <h3>Szenario B — Stock-Out Stunde 4</h3>\n    <p>Großer Erfolg, gut. <strong>Sofort:</strong> Pre-Order-Modus aktivieren oder Produkt deaktivieren mit Coming-Soon. <strong>Aktive Kommunikation</strong> in Story + neue Mail an Liste (\"ausverkauft, nächster Drop in X Wochen\").</p>\n\n    <h3>Szenario C — Influencer postet schlecht</h3>\n    <p>Falsches Caption, schlechtes Foto, falscher Code. <strong>Direkt-Kontakt</strong> über Telefon (nicht DM — zu langsam). Bitte um Korrektur. Wenn nicht möglich: Workaround mit eigenem Re-Post + Erklärung.</p>\n\n    <div class=\"output-box\">\n      <h4>Pflicht-Output am Ende von Tag 0</h4>\n      <ul>\n        <li>Bestellungen-Zahl (Pflicht: dokumentiert)</li>\n        <li>Umsatz · AOV · Conversion-Rate</li>\n        <li>Top-Traffic-Source (E-Mail / Influencer / Organic / Direct)</li>\n        <li>Top-3-Issues, die fixed werden müssen für Tag 1</li>\n        <li>WhatsApp-Cohort-Update gepostet</li>\n        <li>Persönliche Reflection (1 Absatz, ehrlich)</li>\n      </ul>\n    </div>\n\n    <div class=\"warn-box\">\n      <h4>Don'ts am Drop-Day</h4>\n      <ol>\n        <li><strong>Don't pricing change.</strong> Nicht mitten am Tag den Preis senken aus Panik.</li>\n        <li><strong>Don't add new ads.</strong> Tag 0 ist Test der bereits laufenden Setup. Iteration kommt ab Tag 2.</li>\n        <li><strong>Don't reply emotional auf negative Comments.</strong> Schlafen drüber.</li>\n        <li><strong>Don't forget to drink water.</strong> Adrenalin-Tag ohne Wasser = Krass-Crash am Abend.</li>\n        <li><strong>Don't skip dinner.</strong> Du brauchst Kalorien.</li>\n      </ol>\n    </div>\n\n    <div class=\"info-box\">\n      <h4>Tools für den Drop-Day</h4>\n      <ul>\n        <li><strong>Shopify Live View:</strong> Real-time Visitor-Counter</li>\n        <li><strong>Meta Events Manager:</strong> Live-Pixel-Events</li>\n        <li><strong>GA4 Real-time:</strong> Live-Traffic + Conversion</li>\n        <li><strong>Klaviyo Activity Feed:</strong> Mail-Opens + Clicks live</li>\n        <li><strong>Notion-Tracking-Sheet:</strong> Stündlicher KPI-Log</li>\n      </ul>\n    </div>",
    "nextEyebrow": "Nächster Item →",
    "nextTitle": "02 · Pre-Drop-Checklist"
  },
  {
    "slug": "influencer-identifikation",
    "phase": 4,
    "itemId": "phase-4-13",
    "eyebrow": "Phase 4 · Modul 4.4 · Item 13 / 41",
    "title": "Influencer-Identifikation — Mid-Tier vor Mega.",
    "summary": "10 Mid-Tier-Creator (10k-100k Follower) schlagen 1 Mega-Influencer (1M+) bei Pre-Revenue. Nicht weil's günstiger ist — sondern weil Engagement, Audience-Fit und Conversion-Rate dort liegen.",
    "body": "<h2>Was es ist</h2>\n    <p>Strukturierte Identifikation von <strong>15-25 Creator-Kandidaten</strong>, die zu deinem Avatar passen. Aus dem Pool gehen 5-10 in Outreach (nächstes Item). Ergebnis: Liste mit Username, Follower, Engagement, Avatar-Match-Score, Kontakt-Pfad.</p>\n\n    <h2>Warum Mid-Tier &gt; Mega bei Pre-Revenue</h2>\n\n    <table style=\"width:100%;border-collapse:collapse;margin:16px 0;font-size:14px\">\n      <tr style=\"background:var(--bg-soft)\">\n        <th style=\"padding:10px 12px;text-align:left;border:1px solid var(--line)\">Tier</th>\n        <th style=\"padding:10px 12px;text-align:left;border:1px solid var(--line)\">Follower</th>\n        <th style=\"padding:10px 12px;text-align:left;border:1px solid var(--line)\">Engagement</th>\n        <th style=\"padding:10px 12px;text-align:left;border:1px solid var(--line)\">Cost</th>\n        <th style=\"padding:10px 12px;text-align:left;border:1px solid var(--line)\">Pre-Revenue-Fit</th>\n      </tr>\n      <tr><td style=\"padding:10px 12px;border:1px solid var(--line)\">Nano</td><td style=\"padding:10px 12px;border:1px solid var(--line)\">1k–10k</td><td style=\"padding:10px 12px;border:1px solid var(--line)\">5–10 %</td><td style=\"padding:10px 12px;border:1px solid var(--line)\">Free / Sample</td><td style=\"padding:10px 12px;border:1px solid var(--line);color:var(--green);font-weight:600\">Optimal für Tag 0</td></tr>\n      <tr><td style=\"padding:10px 12px;border:1px solid var(--line)\"><strong>Mid</strong></td><td style=\"padding:10px 12px;border:1px solid var(--line)\"><strong>10k–100k</strong></td><td style=\"padding:10px 12px;border:1px solid var(--line)\"><strong>2–5 %</strong></td><td style=\"padding:10px 12px;border:1px solid var(--line)\"><strong>€100–800/Post</strong></td><td style=\"padding:10px 12px;border:1px solid var(--line);color:var(--green);font-weight:600\"><strong>Sweet Spot</strong></td></tr>\n      <tr><td style=\"padding:10px 12px;border:1px solid var(--line)\">Macro</td><td style=\"padding:10px 12px;border:1px solid var(--line)\">100k–1M</td><td style=\"padding:10px 12px;border:1px solid var(--line)\">1–2 %</td><td style=\"padding:10px 12px;border:1px solid var(--line)\">€1k–10k</td><td style=\"padding:10px 12px;border:1px solid var(--line);color:var(--amber);font-weight:600\">Selten profitabel früh</td></tr>\n      <tr><td style=\"padding:10px 12px;border:1px solid var(--line)\">Mega</td><td style=\"padding:10px 12px;border:1px solid var(--line)\">1M+</td><td style=\"padding:10px 12px;border:1px solid var(--line)\">&lt;1 %</td><td style=\"padding:10px 12px;border:1px solid var(--line)\">€10k+</td><td style=\"padding:10px 12px;border:1px solid var(--line);color:var(--red);font-weight:600\">Nein bei Pre-Revenue</td></tr>\n    </table>\n\n    <p>Pflicht-Mix für Drop-Day: <strong>3-5 Mid-Tier + 5-10 Nano</strong> — das ist die Sweet-Spot-Kombination für Pre-Revenue.</p>\n\n    <h2>Such-Strategie (3 Such-Pfade parallel)</h2>\n\n    <h3>Pfad 1 — Hashtag-Suche (IG / TikTok)</h3>\n    <ol>\n      <li>5-10 Avatar-spezifische Hashtags listen (aus Phase 1.3 Avatar)</li>\n      <li>Pro Hashtag: Top-Posts der letzten 4 Wochen</li>\n      <li>Creator notieren: Username, Follower, letzte 5 Posts mit Engagement-Rate</li>\n      <li>Filter: Niche-Match + 10k-100k Follower + Engagement ≥3 %</li>\n    </ol>\n\n    <h3>Pfad 2 — Konkurrenz-Spy</h3>\n    <ol>\n      <li>Top-3 Wettbewerber (aus Phase 1.4) — wer hat in den letzten 6 Monaten ihre Produkte beworben?</li>\n      <li><strong>Tools:</strong> Modash · Heepsy · oder manuell Insta-Tag-Suche der Brand</li>\n      <li>Diese Creators kennen den Niche und haben gezeigt, dass sie Brand-Deals machen</li>\n    </ol>\n\n    <h3>Pfad 3 — Avatar-Spy</h3>\n    <ol>\n      <li>Reverse: wem folgt deine Zielgruppe?</li>\n      <li>3-5 perfekte Avatar-Profile (aus Phase 1.3) auf IG / TikTok finden</li>\n      <li>\"Folgt\" — schau dir an, wem sie folgen → diese Creators sind im Avatar-Vertrauen</li>\n    </ol>\n\n    <h2>Kennzahlen-Analyse pro Kandidat (Pflicht!)</h2>\n\n    <p>Für jeden Kandidaten — bevor Outreach — prüfen:</p>\n\n    <ul>\n      <li><strong>Follower-Zahl</strong> — Pflicht-Range 10k-100k (Mid-Tier) oder 1k-10k (Nano)</li>\n      <li><strong>Engagement-Rate</strong> = (Likes + Kommentare) ÷ Follower × 100. <em>Pflicht ≥2 %, ideal ≥3 %.</em></li>\n      <li><strong>Follower-Land</strong> — DACH-Brand braucht ≥60 % DACH-Follower (sonst kein lokaler Sales-Effekt)</li>\n      <li><strong>Follower-Geschlecht</strong> — muss zum Avatar passen</li>\n      <li><strong>Fake-Follower-Quote</strong> — &lt;15 % Bot-Anteil (Pflicht)</li>\n      <li><strong>Posting-Konsistenz</strong> — ≥3 Posts/Woche letzte 4 Wochen</li>\n      <li><strong>Brand-Deal-Historie</strong> — hat schon andere Brands beworben? Werbekennzeichnung sauber?</li>\n    </ul>\n\n    <h2>Tools für die Analyse</h2>\n\n    <ul>\n      <li><strong>Modash.io</strong> — Influencer-Search + Audience-Insights. €99/Mo. Sweet Spot für DACH.</li>\n      <li><strong>Heepsy.com</strong> — günstigere Alternative. €69/Mo.</li>\n      <li><strong>HypeAuditor</strong> — strenger Fake-Follower-Check. €299/Mo (für Skalierung).</li>\n      <li><strong>Manuell (kostenlos)</strong> — IG / TikTok Native + Notion-Sheet. Funktioniert bis ~10 Kandidaten, danach zu zeitaufwendig.</li>\n    </ul>\n\n    <p><strong>Empfehlung Pre-Revenue:</strong> manuell für die ersten 10 Kandidaten. Wenn das gut klappt, Modash 1 Monat (€99) für gezielte 50-Kandidaten-Pipeline.</p>\n\n    <h2>Avatar-Match-Score (eigene Bewertung 1-10)</h2>\n\n    <p>Pro Kandidat:</p>\n\n    <ul>\n      <li><strong>Audience-Fit (1-10):</strong> wie sehr matchen Audience-Demografie + Interessen mit deinem Avatar?</li>\n      <li><strong>Voice-Fit (1-10):</strong> klingt der Creator wie deine Brand? (kein Hardcore-Lifestyle für Premium-Brand)</li>\n      <li><strong>Trust-Fit (1-10):</strong> wirken die Brand-Deals der Vergangenheit authentisch? (oder typische \"ich hab heute Lipgloss von X bekommen, und ich hab auch heute Lipgloss von Y bekommen\")</li>\n    </ul>\n\n    <p>Total-Score 8+ = Top-Kandidat. 6-7 = Maybe. &lt;6 = überspringen.</p>\n\n    <h2>Tracking-Sheet (Notion-Database)</h2>\n\n    <pre>INFLUENCER-PIPELINE\n\n| @Handle      | Plattform | Follower | ER %  | DACH % | Fake % | Avatar-Score | Status     | Outreach-Date | Reply-Date |\n|--------------|-----------|----------|-------|--------|--------|--------------|------------|---------------|------------|\n| @beautysarah | IG        | 47k      | 4.2 % | 78 %   | 8 %    | 9            | Identified | -             | -          |\n| @lina_haar   | TikTok    | 23k      | 6.8 % | 82 %   | 12 %   | 8            | Identified | -             | -          |\n| @testdummy   | IG        | 88k      | 1.1 % | 45 %   | 28 %   | 4            | Skipped    | -             | -          |</pre>\n\n    <p>Die Pipeline ist die Brücke zu Modul 4.4 Item 14-17 (Outreach + Briefing + Vertrag + Tracking).</p>\n\n    <div class=\"output-box\">\n      <h4>Pflicht-Output</h4>\n      <ul>\n        <li>15-25 Kandidaten identifiziert (Mix Mid-Tier + Nano)</li>\n        <li>Pro Kandidat: Follower + ER + DACH-% + Fake-% dokumentiert</li>\n        <li>Avatar-Match-Score 1-10 vergeben</li>\n        <li>Top-10 mit Score ≥7 markiert für Outreach (nächstes Item)</li>\n        <li>Notion-Pipeline-Sheet aufgesetzt</li>\n      </ul>\n    </div>\n\n    <div class=\"warn-box\">\n      <h4>Häufige Fehler</h4>\n      <ol>\n        <li><strong>Du gehst nur nach Follower-Zahl.</strong> 100k Follower mit 0,5 % ER ist schlechter als 15k mit 5 %.</li>\n        <li><strong>Du ignorierst Fake-Follower.</strong> &gt;20 % Bot-Anteil = die Hälfte deiner \"Reach\" ist nicht-existent.</li>\n        <li><strong>Du nimmst Mega-Influencer als Pre-Revenue-Brand.</strong> Selten profitabel — ROAS unter 1 ist Standard.</li>\n        <li><strong>DACH-Anteil unter 60 %.</strong> Internationale Audience kauft nicht in deinem deutschen Shop.</li>\n        <li><strong>Du fängst Outreach ohne Pipeline-Sheet an.</strong> Chaos garantiert nach 5 Outreaches.</li>\n      </ol>\n    </div>\n\n    <div class=\"info-box\">\n      <h4>Tools</h4>\n      <ul>\n        <li><strong><a href=\"https://www.modash.io/\" target=\"_blank\">Modash.io</a></strong> — €99/Mo, beste DACH-Coverage</li>\n        <li><strong><a href=\"https://heepsy.com/\" target=\"_blank\">Heepsy</a></strong> — €69/Mo, günstige Alternative</li>\n        <li><strong>Manuell</strong> (Free) — IG / TikTok + Notion-Sheet bis ~10 Kandidaten</li>\n        <li><strong>Engagement-Rate-Calculator</strong> (free Web-Tools) — wenn Modash zu teuer</li>\n        <li><strong>Notion-Database</strong> — Influencer-Pipeline-Template (Duplicate-Link kommt)</li>\n      </ul>\n    </div>",
    "nextEyebrow": "Nächster Item →",
    "nextTitle": "14 · Kennzahlen-Analyse + Fake-Follower-Check"
  },
  {
    "slug": "voice-of-customer",
    "phase": 5,
    "itemId": "phase-5-01",
    "eyebrow": "Phase 5 · Modul 5.1 · Item 01 / 58",
    "title": "Voice-of-Customer-Loop — die Marke aktualisiert sich selbst.",
    "summary": "Jede Woche 10 neue Reviews / DMs / Comments / Support-Tickets pull, in Verbatim-DB überführen, Brand Keyframe + Voice-Doc updaten. Der einzige Mechanismus, der eine Marke <em>echt</em> hält statt langsam generisch werden zu lassen.",
    "body": "<h2>Was es ist</h2>\n    <p>Ein wöchentlicher Operator-Loop, der <strong>Kundenstimmen systematisch in deine Brand-DNA zurückspielt</strong>. Reviews, DMs, Comments, Support-Tickets sind keine Nebenschauplätze — sie sind <strong>die ehrlichste Datenquelle</strong>, die du jemals haben wirst.</p>\n\n    <h2>Warum dieser Loop existiert</h2>\n    <p>Marken werden langsam unsichtbar. Nicht durch ein einzelnes Ereignis, sondern durch Drift — der Founder schreibt Mails, die immer ein bisschen mehr nach Marketing klingen. Das Avatar-Doc ist 6 Monate alt, aber der Markt hat sich verschoben. Die Insider-Sprache, mit der man am Anfang resonante, klingt heute klischeehaft.</p>\n    <p>Voice-of-Customer-Loop ist <strong>der Anker gegen diesen Drift</strong>. Jede Woche bringt frische Realität rein. Die Marke <em>aktualisiert sich selbst</em>.</p>\n\n    <h2>Der Wochenrhythmus (60 Min / Woche)</h2>\n\n    <h3>Sonntag 18:00 — Pull (20 Min)</h3>\n    <ul>\n      <li>10 neue <strong>Reviews</strong> aus Trustpilot / Google / Loox</li>\n      <li>5–10 neue <strong>DMs</strong> (IG / TikTok / Mail) — vor allem die mit Pain-Bezug</li>\n      <li>5 neue <strong>Comments</strong> unter den letzten 7 Tagen Posts</li>\n      <li>Letzte 10 <strong>Support-Tickets</strong> oder Kundenservice-Antworten</li>\n    </ul>\n    <p><strong>Sammlung:</strong> Notion-Database \"Verbatim-DB\" mit Spalten: <code>Datum · Source · Quote · Pain-Type · Existing-Solution · Frustration · Insider-Phrase</code>. Original-Wortlaut kopieren — <strong>nicht paraphrasieren</strong>.</p>\n\n    <h3>Sonntag 18:20 — Tagging (15 Min)</h3>\n    <p>Jedes Quote bekommt:</p>\n    <ul>\n      <li><strong>Pain-Type:</strong> Angst · Scham · Frustration · Erschöpfung · Kontrollverlust · Selbstzweifel</li>\n      <li><strong>Existing Solution:</strong> Was nutzen sie heute (oder haben sie probiert)?</li>\n      <li><strong>Frustration:</strong> Was nervt am Status quo?</li>\n      <li><strong>Insider-Phrase:</strong> Worte, die nur Insider verwenden würden</li>\n    </ul>\n\n    <h3>Sonntag 18:35 — AI-Synthese (10 Min)</h3>\n    <p>Claude für Pattern-Recognition über die letzten 4 Wochen:</p>\n\n    <pre>Du bist Voice-of-Customer-Analyst. Hier sind 40\nQuotes aus den letzten 4 Wochen [Verbatim-DB\neinfügen].\n\n1. Welche neuen Pain-Patterns sind aufgetaucht,\n   die im aktuellen Brand Keyframe (siehe Anhang)\n   nicht stehen?\n2. Welche neuen Insider-Phrasen sind nutzbar?\n3. Hat sich Existing-Solution-Landscape verändert?\n4. Welche emotionale Tonalität dominiert aktuell —\n   ist das anders als vor 3 Monaten?\n\nSei präzise. Wenn keine Pattern-Veränderung\nsichtbar ist, sag das.</pre>\n\n    <h3>Sonntag 18:45 — Update (15 Min)</h3>\n    <ul>\n      <li><strong>Brand Keyframe Modul 2 (Pain-Patterns)</strong> — wenn ≥3 neue Quotes auf neuen Pain zeigen, ergänzen</li>\n      <li><strong>Voice-Doc</strong> — neue Insider-Phrasen aufnehmen, alte die obsolet wirken markieren</li>\n      <li><strong>Avatar Sheet</strong> — bei größeren Verschiebungen (alle 4–8 Wochen)</li>\n      <li><strong>Content-Kalender für nächste Woche</strong> — 1 Post pro neue Pain-Pattern</li>\n    </ul>\n\n    <h2>Was du mit den Updates machst</h2>\n\n    <h3>1 · Content-Kalender (sofort)</h3>\n    <p>Neue Pain-Pattern → 1 Post in der nächsten Woche, der das Pattern direkt anspricht. Keine Marketing-Verbiegung — direkt aus dem Verbatim-Wortlaut.</p>\n\n    <h3>2 · Email-Sequenzen (alle 4 Wochen)</h3>\n    <p>Welcome-Flow + Cart-Recovery alle 4 Wochen reviewen: Sind die verwendeten Pain-Beschreibungen noch aktuell? Klingen die Mails noch <em>echt</em>?</p>\n\n    <h3>3 · PDP-Copy (alle 8 Wochen)</h3>\n    <p>Hauptprodukt-PDP alle 8 Wochen mit aktuellem Voice-Doc abgleichen. Insider-Phrasen einbauen.</p>\n\n    <h3>4 · Ad-Copy-Variants (laufend)</h3>\n    <p>Aus jeder neuen Pain-Pattern eine Ad-Variant ableiten. Personal Discovery Story / Image-Ad — die testen sich von selbst.</p>\n\n    <h2>Beispiel — Hearo-Brand-Loop</h2>\n\n    <p>Hearo hatte im Brand Keyframe als Pain \"soziale Isolation durch Hörverlust\". Nach 4 Wochen Voice-of-Customer-Loop tauchte ein neues Pattern auf: <em>\"Ich vermeide jetzt Restaurants, weil ich nicht verstehe, was der Kellner sagt\"</em>. Das ist kein Variant von \"soziale Isolation\" — das ist eine spezifische Verhaltens-Veränderung mit konkretem Setting.</p>\n    <p>Resultat: <strong>1 neuer Content-Pillar</strong> \"Restaurants &amp; Hörverlust\" — generierte 3× das Engagement von Standard-Posts. Plus eine neue PDP-Sektion (\"Bei welchen Situationen Hearo den Unterschied macht\").</p>\n\n    <div class=\"output-box\">\n      <h4>Pflicht-Output pro Woche</h4>\n      <ul>\n        <li>10 neue Quotes in Verbatim-DB</li>\n        <li>Tagging vollständig</li>\n        <li>AI-Synthesis-Output gespeichert</li>\n        <li>Brand Keyframe / Voice-Doc updated wenn nötig</li>\n        <li>1 Content-Idee in nächste Woche eingeplant</li>\n      </ul>\n    </div>\n\n    <div class=\"warn-box\">\n      <h4>Häufige Fehler</h4>\n      <ol>\n        <li><strong>Du machst es alle 6 Wochen statt jede Woche.</strong> Dann ist es kein Loop, sondern Quartals-Audit. Der Drift ist schon da.</li>\n        <li><strong>Du paraphrasierst.</strong> \"Sie meinte, sie ist enttäuscht\" — was sie tatsächlich gesagt hat: \"Ich hab geweint im Auto auf dem Heimweg.\" Das EINE Quote ist 100× wertvoller.</li>\n        <li><strong>Du updatest nur Voice-Doc, nicht Brand Keyframe.</strong> Pain-Patterns ändern sich — wenn das Brand Keyframe alt bleibt, sind alle abgeleiteten Assets bald obsolete.</li>\n        <li><strong>Du sammelst nur positive Reviews.</strong> 1-Sterne-Reviews und Beschwerden sind <strong>die wertvollste Quelle</strong> — sie zeigen, was nicht funktioniert.</li>\n      </ol>\n    </div>\n\n    <div class=\"info-box\">\n      <h4>Tools</h4>\n      <ul>\n        <li><strong>Verbatim-DB:</strong> Notion-Database mit Tag-Properties (Template kommt)</li>\n        <li><strong>Pull-Quellen:</strong> Trustpilot · Google Reviews · Loox · IG-DMs · TikTok-Comments · Klaviyo-Inbox · Gorgias-Tickets</li>\n        <li><strong>AI:</strong> Claude für Synthese · ChatGPT für Pattern-Recognition</li>\n        <li><strong>Update-Targets:</strong> Brand Keyframe (Phase 1) · Voice-Doc (Phase 1) · Welcome-Flow (Phase 2) · PDP (Phase 2)</li>\n      </ul>\n    </div>\n\n    <div class=\"disclaim-box\">\n      <strong>Privacy-Hinweis:</strong> Quotes aus Reviews / Comments können verwendet werden (öffentlich). DMs nur mit Erlaubnis (\"Darf ich diese Aussage anonymisiert für unsere Marke verwenden?\"). Bei sensiblen Daten (Gesundheit, persönliche Krise): Vorsicht und ggf. Anonymisierung.\n    </div>",
    "nextEyebrow": "Nächster Item →",
    "nextTitle": "02 · Verbatim → Verbatim-DB"
  }
];

export const LESSON_BY_SLUG: Record<string, Lesson> = Object.fromEntries(
  LESSONS.map((l) => [l.slug, l]),
);

export function phaseBySlug(phase: number): CoursePhase | undefined {
  return PHASES.find((p) => p.phase === phase);
}
export function realLessonCount(phase: number): number {
  return LESSONS.filter((l) => l.phase === phase).length;
}
