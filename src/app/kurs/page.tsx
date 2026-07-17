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
    <main className="ap min-h-screen">
      <KursNav />

      {/* Hero */}
      <section className="max-w-[820px] mx-auto px-6 pt-20 lg:pt-28 pb-14 text-center">
        <h1 className="text-[clamp(44px,7vw,72px)] leading-[1.04] font-bold tracking-[-0.02em] text-[#1d1d1f] mb-5">
          Founder OS.
        </h1>
        <p className="text-[clamp(19px,2.6vw,26px)] leading-[1.35] font-medium text-[#6e6e73] tracking-[-0.012em] max-w-[560px] mx-auto">
          Deine erste eigene Marke.
          <br />
          In 5 Schritten. Ohne Geld zu verbrennen.
        </p>
        <p className="text-[13px] text-[#86868b] mt-6">
          Eingeloggt als {access.email} · Kauf am {purchasedLabel} ·{" "}
          {liveLessons} Lektionen freigeschaltet
        </p>
      </section>

      {/* Phasen + Fortschritt */}
      <section className="max-w-[820px] mx-auto px-6 pb-16">
        <DashboardPhases />
      </section>

      {/* Start-Guide */}
      <section className="max-w-[820px] mx-auto px-6 pb-24">
        <div className="ap-card p-8 lg:p-12">
          <h2 className="text-[26px] lg:text-[30px] font-bold tracking-[-0.018em] text-[#1d1d1f] mb-6">
            So startest du.
          </h2>
          <ol className="space-y-4 text-[16px] leading-[1.55] text-[#1d1d1f] list-none">
            <li className="flex gap-4">
              <span className="text-[#0071e3] font-semibold shrink-0">1</span>
              <span>
                Öffne Phase 1 und lies die erste Lektion „Passion-Audit“. Sie
                ist kurz und klärt den Rest des Kurses.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#0071e3] font-semibold shrink-0">2</span>
              <span>
                Arbeite jede Lektion mit ihrem Pflicht-Output ab und hak sie
                ab. Erst wenn der Output steht, gehst du weiter.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#0071e3] font-semibold shrink-0">3</span>
              <span>
                Wenn du stecken bleibst, buch den 15-Minuten-Call oder schreib
                mir. Werktags 24 h Antwort, meistens schneller.
              </span>
            </li>
          </ol>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="https://calendly.com/bb-brands/founder-os-15min"
              target="_blank"
              rel="noreferrer"
              className="ap-btn px-6 py-3 text-[15px]"
            >
              Call buchen
            </a>
            <a
              href="mailto:info@bb-brands.de?subject=Founder%20OS%3A%20Mein%20Start"
              className="ap-btn-ghost px-6 py-3 text-[15px]"
            >
              Mir schreiben
            </a>
          </div>
        </div>
        <p className="text-[12.5px] leading-relaxed text-[#86868b] text-center mt-8 max-w-[520px] mx-auto">
          Dein Fortschritt wird in diesem Browser gespeichert. Alle{" "}
          {liveLessons} Lektionen sind freigeschaltet, die Gates am Ende jeder
          Phase zeigen dir, wann du bereit für die nächste bist.
        </p>
      </section>
    </main>
  );
}
