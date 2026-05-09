# Founder OS · Sales Funnel

Subdomain `founder-os.bb-brands.de` — Sales-Funnel für den BB-Brands Founder-OS-Kurs.

## Stack

- **Next.js 16** (App Router, React 19)
- **Tailwind CSS 4** (CSS-First mit `@theme`)
- **TypeScript**
- **Vercel** (Hosting + Custom-Domain)

## Pages-Roadmap

| Route | Page | Status |
|---|---|---|
| `/` | Coming-Soon (aktuell) → später PDP | v0.1 live |
| `/audit` | Quiz-LP („Founder Readiness Audit") | geplant |
| `/audit/quiz` | Quiz-Flow (7-12 Fragen) | geplant |
| `/audit/[diagnose]` | Result-Page mit VSL | geplant |
| `/thanks` | Thank-You-Page · Activation | geplant |

Volle Architektur und Build-Plan: siehe `01-agentur/Kurs/_funnel-build-plan.html` und `01-agentur/Kurs/funnel/_sitemap.html` im Schwester-Repo.

## Lokal entwickeln

```bash
npm install
npm run dev
```

Öffnet auf [http://localhost:3000](http://localhost:3000).

## Deploy

Push to `main` → Vercel deployed automatisch.

## Brand-Tokens

Definiert in `src/app/globals.css` über `@theme`:

- `--color-accent` · `#ff6b3d` (Founder-OS-Orange)
- `--font-sans` · Plus Jakarta Sans
- `--font-serif` · Instrument Serif (für Akzent-H1)
