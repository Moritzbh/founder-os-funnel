import Link from "next/link";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams: Promise<{ reason?: string }>;
};

const REASON_COPY: Record<string, { headline: string; body: string }> = {
  "no-cookie": {
    headline: "Bitte über deinen Mail-Link einsteigen.",
    body: "Wir konnten in deinem Browser keinen aktiven Zugang finden. Öffne die Welcome-Mail von Founder OS und klick auf „Kurs jetzt öffnen“. Der Cookie hält dann 365 Tage.",
  },
  missing: {
    headline: "Der Zugangs-Link fehlt.",
    body: "In der URL war kein Token. Öffne nochmal die Welcome-Mail und klick direkt auf den Button — der enthält den Token.",
  },
  invalid: {
    headline: "Der Zugangs-Link wirkt ungültig.",
    body: "Entweder ist der Link beschädigt oder abgelaufen. Schreib mir kurz, ich schicke dir einen neuen Link manuell raus.",
  },
};

export default async function ZugangFehltPage({ searchParams }: PageProps) {
  const { reason } = await searchParams;
  const copy = REASON_COPY[reason ?? ""] ?? {
    headline: "Du brauchst deinen Zugangs-Link.",
    body: "Öffne die Welcome-Mail von Founder OS und klick auf den Kurs-Button.",
  };

  return (
    <main className="min-h-screen bg-bg flex flex-col">
      <div className="max-w-2xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-16 w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[13px] text-text-3 hover:text-bb-blue mb-10"
        >
          ← Zurück zur Hauptseite
        </Link>

        <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-text-3 font-bold mb-4">
          Zugang
        </div>

        <h1 className="text-[clamp(30px,4vw,44px)] leading-[1.1] font-extrabold tracking-[-0.025em] mb-5">
          {copy.headline}
        </h1>

        <p className="text-[16px] leading-relaxed text-text-2 mb-8">
          {copy.body}
        </p>

        <div className="bg-bg-card border border-line rounded-xl p-6 lg:p-8 mb-8">
          <p className="text-[14px] font-bold text-text mb-3">
            Du findest die Mail nicht?
          </p>
          <p className="text-[14px] leading-relaxed text-text-2 mb-5">
            Schreib mir an{" "}
            <a
              href="mailto:info@bb-brands.de?subject=Founder%20OS%20Zugang%20fehlt"
              className="text-accent font-semibold underline"
            >
              info@bb-brands.de
            </a>{" "}
            mit der Mail-Adresse, mit der du gekauft hast. Ich schicke den
            Link manuell. Werktags 24h Antwort, meistens schneller.
          </p>
          <p className="text-[13px] leading-relaxed text-text-3">
            Du hast noch nicht gekauft?{" "}
            <Link href="/#pricing" className="text-accent font-semibold underline">
              Hier geht&apos;s zum Pricing
            </Link>
            .
          </p>
        </div>

        {reason ? (
          <p className="text-[11px] font-mono text-text-3 mt-8">
            [debug: reason={reason}]
          </p>
        ) : null}
      </div>
    </main>
  );
}
