import { requireAccess } from "@/lib/access";
import KursNav from "@/components/kurs/KursNav";
import DashboardPhases from "@/components/kurs/DashboardPhases";
import { LESSONS } from "@/content/founder-os/course";

export const dynamic = "force-dynamic";

export default async function KursPage() {
  const access = await requireAccess();

  const purchasedDate = new Date(access.purchasedAt);
  const purchasedLabel = isNaN(purchasedDate.getTime())
    ? "vor Kurzem"
    : purchasedDate.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });

  const liveLessons = LESSONS.length;

  return (
    <main className="min-h-screen bg-bg">
      <KursNav />

      <div className="max-w-3xl mx-auto px-6 lg:px-10 pt-12 lg:pt-16 pb-24">
        {/* Hero */}
        <div className="mb-12">
          <div className="fos-mono text-[11px] tracking-[0.18em] uppercase text-accent font-bold mb-4">
            ✓ Eingeloggt
          </div>
          <h1 className="font-display text-[clamp(34px,5.5vw,52px)] leading-[1.03] font-extrabold tracking-[-0.025em] text-navy mb-4">
            Willkommen im Founder OS.
          </h1>
          <p className="text-[16px] leading-relaxed text-text-2 max-w-xl mb-2">
            Eingeloggt als{" "}
            <strong className="text-navy">{access.email}</strong> — Kauf am{" "}
            {purchasedLabel}.
          </p>
          <p className="text-[15px] leading-relaxed text-text-2 max-w-xl">
            Die 5 Schritte liegen unten. Klick dich in Phase 1, arbeite dich
            Item für Item durch und hak ab, was du erledigt hast. Dein
            Fortschritt wird in diesem Browser gespeichert.
          </p>
        </div>

        {/* Start-Anleitung */}
        <section className="bg-white border border-line rounded-xl p-6 lg:p-8 mb-12">
          <div className="fos-mono text-[11px] tracking-[0.18em] uppercase text-text-3 font-bold mb-3">
            Deine nächsten 60 Minuten
          </div>
          <ol className="space-y-3 text-[15px] leading-relaxed text-text-2 list-decimal pl-5">
            <li>
              Öffne Phase 1 „Klären“ und lies die erste Lektion
              „Passion-Audit“. Sie ist kurz und klärt den Rest des Kurses.
            </li>
            <li>
              Arbeite jede Lektion mit ihrem Pflicht-Output ab. Erst wenn der
              steht, gehst du weiter.
            </li>
            <li>
              Wenn du irgendwo stecken bleibst, buch den 15-Minuten-Call oder
              schreib mir. Werktags 24 h Antwort, meistens schneller.
            </li>
          </ol>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://calendly.com/bb-brands/founder-os-15min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-navy text-white rounded-full text-[14px] font-bold hover:bg-accent transition-colors"
            >
              Call buchen →
            </a>
            <a
              href="mailto:info@bb-brands.de?subject=Founder%20OS%20–%20Mein%20Start"
              className="inline-flex items-center gap-2 px-5 py-3 border border-line rounded-full text-[14px] font-semibold text-navy hover:border-navy transition-colors"
            >
              Mir schreiben
            </a>
          </div>
        </section>

        {/* Phasen + Fortschritt */}
        <section>
          <div className="fos-mono text-[11px] tracking-[0.18em] uppercase text-text-3 font-bold mb-5">
            Die 5 Schritte
          </div>
          <DashboardPhases />
        </section>

        {/* Beta-Hinweis */}
        <section className="mt-14 pt-8 border-t border-line">
          <p className="text-[13px] leading-relaxed text-text-3">
            <strong className="text-text-2">Hinweis Beta-Phase:</strong> Aktuell
            sind {liveLessons} Lektionen ausformuliert und direkt hier
            abrufbar — die restlichen Items siehst du schon in der Struktur und
            werden laufend nachgezogen. Solange arbeite ich die ersten Käufer
            persönlich mit durch: schreib mir, sobald du an ein Gate kommst.
          </p>
        </section>
      </div>
    </main>
  );
}
