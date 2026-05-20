import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyAccessToken, type AccessPayload } from "@/lib/jwt";

export const dynamic = "force-dynamic";

const COOKIE_NAME = "founder-os-access";

const PHASES = [
  {
    num: "01",
    name: "Klären",
    q: "Was verkaufe ich eigentlich, und an wen?",
    meta: "20 Lektionen · 1–2 Wochen",
    status: "available" as const,
  },
  {
    num: "02",
    name: "Nachfrage prüfen",
    q: "Will mein Wunschkunde das überhaupt kaufen?",
    meta: "22 Lektionen · 2–3 Wochen",
    status: "locked" as const,
  },
  {
    num: "03",
    name: "Aufstellen",
    q: "Wie wird daraus etwas Echtes, das man kaufen kann?",
    meta: "55 Lektionen · 4–6 Wochen",
    status: "locked" as const,
  },
  {
    num: "04",
    name: "Launchen",
    q: "Erste Bestellung von Fremden — wie?",
    meta: "41 Lektionen · 3–4 Wochen",
    status: "locked" as const,
  },
  {
    num: "05",
    name: "Wachsen",
    q: "Wie wird daraus eine echte Marke, kein Strohfeuer?",
    meta: "58 Lektionen · 90 Tage",
    status: "locked" as const,
  },
];

export default async function KursPage() {
  const access = await readAccess();
  if (!access) {
    redirect("/kurs/zugang-fehlt?reason=no-cookie");
  }

  const purchasedDate = new Date(access.purchasedAt);
  const purchasedLabel = isNaN(purchasedDate.getTime())
    ? "vor Kurzem"
    : purchasedDate.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });

  return (
    <main className="min-h-screen bg-bg">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 pt-12 lg:pt-20 pb-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-accent font-bold">
            ✓ Eingeloggt
          </div>
          <a
            href="/api/access/logout"
            className="text-[12px] text-text-3 hover:text-text font-mono"
          >
            abmelden
          </a>
        </div>

        {/* Hero */}
        <div className="mb-14">
          <h1 className="text-[clamp(36px,5.5vw,56px)] leading-[1.05] font-extrabold tracking-[-0.025em] mb-4">
            Willkommen im Founder OS.
          </h1>
          <p className="text-[16px] leading-relaxed text-text-2 max-w-xl mb-2">
            Eingeloggt als{" "}
            <strong className="text-text">{access.email}</strong> — Kauf am{" "}
            {purchasedLabel}.
          </p>
          <p className="text-[15px] leading-relaxed text-text-2 max-w-xl">
            Die ersten 50 Käufer bekomme ich noch persönlich an Bord. Heißt: ich
            geb dir Phase 1 sofort frei und ruf dich (oder wir mailen) durch,
            sobald du das erste Gate erreichst. So vermeiden wir, dass du in
            Lektion 14 stecken bleibst, ohne dass es jemand merkt.
          </p>
        </div>

        {/* What to do now */}
        <section className="bg-bg-card border border-line rounded-xl p-6 lg:p-8 mb-12">
          <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-text-3 font-bold mb-3">
            Deine nächsten 60 Minuten
          </div>
          <ol className="space-y-3 text-[15px] leading-relaxed text-text-2 list-decimal pl-5">
            <li>
              Buch dir den 15-Minuten-Klärungs-Call mit mir — wir gehen deine
              Idee einmal durch und du weißt, wo du startest.
            </li>
            <li>
              Lies die erste Lektion „Founder-Lens“. Sie ist kurz und klärt
              den Rest des Kurses.
            </li>
            <li>
              Schreib mir eine kurze Antwort auf die Welcome-Mail mit zwei
              Sätzen: was du verkaufen willst und was dein wundester Punkt ist.
              So weiß ich, wo ich dich abholen muss.
            </li>
          </ol>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://calendly.com/bb-brands/founder-os-15min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-text text-white rounded-full text-[14px] font-bold hover:bg-accent transition-colors"
            >
              Call buchen →
            </a>
            <a
              href="mailto:info@bb-brands.de?subject=Founder%20OS%20–%20Mein%20Start"
              className="inline-flex items-center gap-2 px-5 py-3 border border-line rounded-full text-[14px] font-semibold text-text hover:border-text transition-colors"
            >
              Mir schreiben
            </a>
          </div>
        </section>

        {/* 5 Phases */}
        <section>
          <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-text-3 font-bold mb-5">
            Die 5 Schritte
          </div>
          <div className="space-y-3">
            {PHASES.map((p) => (
              <div
                key={p.num}
                className={`border rounded-xl p-5 lg:p-6 flex items-start gap-5 ${
                  p.status === "available"
                    ? "border-accent bg-accent-bg/30"
                    : "border-line bg-bg-card"
                }`}
              >
                <div
                  className={`font-mono text-[12px] font-bold tracking-wider ${
                    p.status === "available" ? "text-accent" : "text-text-3"
                  }`}
                >
                  {p.num}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-4 mb-1 flex-wrap">
                    <h3 className="text-[18px] font-extrabold tracking-[-0.015em]">
                      {p.name}
                    </h3>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full ${
                        p.status === "available"
                          ? "bg-accent text-white"
                          : "bg-bg-soft text-text-3"
                      }`}
                    >
                      {p.status === "available" ? "verfügbar" : "freigeschaltet bei Gate"}
                    </span>
                  </div>
                  <p className="text-[14px] text-text-2 mb-1">„{p.q}“</p>
                  <p className="text-[12px] font-mono text-text-3">{p.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Beta notice */}
        <section className="mt-14 pt-8 border-t border-line">
          <p className="text-[13px] leading-relaxed text-text-3">
            <strong className="text-text-2">Hinweis Beta-Phase:</strong> Der
            Kurs läuft gerade in der Beta. Die Lektions-Inhalte werden dir
            persönlich freigeschaltet — entweder im Klärungs-Call oder per
            Mail. Sobald die ersten 50 Käufer durch sind, kommt das
            Self-Service-Dashboard mit allen Lektionen direkt hier rein. Wenn
            du irgendwann nicht weiterkommst, schreibst du mir — antworte
            werktags innerhalb 24 h.
          </p>
        </section>
      </div>
    </main>
  );
}

async function readAccess(): Promise<AccessPayload | null> {
  const jar = await cookies();
  const cookie = jar.get(COOKIE_NAME);
  if (!cookie?.value) return null;
  try {
    return await verifyAccessToken(cookie.value);
  } catch {
    return null;
  }
}
