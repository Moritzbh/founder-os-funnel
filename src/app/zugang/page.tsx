import Link from "next/link";
import { getStripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function ZugangPage({ searchParams }: PageProps) {
  const { session_id } = await searchParams;

  const result = session_id ? await verifySession(session_id) : null;

  return (
    <main className="min-h-screen bg-bg flex flex-col">
      <div className="max-w-2xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-16 w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[13px] text-text-3 hover:text-bb-blue mb-10"
        >
          ← Zurück zur Hauptseite
        </Link>

        {result?.paid ? (
          <PaidView email={result.email} />
        ) : (
          <PendingView reason={result?.reason} />
        )}
      </div>
    </main>
  );
}

function PaidView({ email }: { email: string | null }) {
  return (
    <div>
      <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-accent font-bold mb-4">
        ✓ Zahlung erfolgreich
      </div>

      <h1 className="text-[clamp(36px,5vw,56px)] leading-[1.05] font-extrabold tracking-[-0.025em] mb-5">
        Willkommen an Bord.
      </h1>

      <p className="text-[17px] leading-relaxed text-text-2 mb-8">
        Wir haben dir gerade eine Mail an{" "}
        <strong className="text-text">{email ?? "deine Mailadresse"}</strong>{" "}
        geschickt. Darin ist dein Zugangs-Link zum Kurs. Schau auch im
        Spam-Ordner — Stripe schickt parallel die Rechnung von einer
        anderen Absender-Adresse.
      </p>

      <div className="bg-bg-card border border-line rounded-xl p-6 lg:p-8 mb-8">
        <p className="text-[14px] font-bold text-text mb-3">Mail nicht angekommen?</p>
        <p className="text-[14px] leading-relaxed text-text-2 mb-4">
          Manchmal dauert es 1–2 Minuten. Wenn nach 5 Minuten immer noch nichts
          da ist, schreib mir kurz an{" "}
          <a
            href="mailto:info@bb-brands.de?subject=Founder%20OS%20Zugang%20fehlt"
            className="text-accent font-semibold underline"
          >
            info@bb-brands.de
          </a>{" "}
          mit deiner Bestell-ID:
        </p>
        <code className="block text-[12px] font-mono bg-bg-soft border border-line rounded px-3 py-2 text-text-2 break-all">
          Session-ID siehe Bestätigungs-Mail
        </code>
      </div>

      <div className="border-t border-line pt-8 mt-12">
        <p className="text-[14px] leading-relaxed text-text-2 mb-2">
          <strong className="text-text">Übrigens:</strong> Du kannst direkt im
          Anschluss einen 15-Minuten-Klärungs-Call mit mir buchen — der ist im
          Kurs enthalten und gut, um deinen ersten Schritt zu machen, ohne in
          Phase 1 hängenzubleiben.
        </p>
        <a
          href="https://calendly.com/bb-brands/founder-os-15min"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-accent hover:underline"
        >
          Discovery-Call buchen →
        </a>
      </div>
    </div>
  );
}

function PendingView({ reason }: { reason?: string }) {
  return (
    <div>
      <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-text-3 font-bold mb-4">
        Status wird geprüft
      </div>

      <h1 className="text-[clamp(32px,4.5vw,48px)] leading-[1.1] font-extrabold tracking-[-0.025em] mb-5">
        Einen Moment.
      </h1>

      <p className="text-[16px] leading-relaxed text-text-2 mb-6">
        Wir konnten deine Bestellung gerade nicht eindeutig zuordnen. Das ist
        meistens harmlos — entweder warst du schneller als Stripe, oder die
        Seite wurde direkt aufgerufen.
      </p>

      <p className="text-[16px] leading-relaxed text-text-2 mb-6">
        Wenn du gerade bezahlt hast: warte 1–2 Minuten und prüf deinen
        E-Mail-Posteingang. Du bekommst zwei Mails — die Rechnung von Stripe
        und den Kurs-Zugang von Founder OS.
      </p>

      <p className="text-[14px] leading-relaxed text-text-3 mb-8">
        Wenn nach 5 Minuten nichts da ist, schreib mir kurz an{" "}
        <a
          href="mailto:info@bb-brands.de?subject=Founder%20OS%20Zugang%20fehlt"
          className="text-accent font-semibold"
        >
          info@bb-brands.de
        </a>
        .
      </p>

      {reason ? (
        <p className="text-[11px] font-mono text-text-3 mt-8">
          [debug: reason={reason}]
        </p>
      ) : null}
    </div>
  );
}

async function verifySession(sessionId: string): Promise<{
  paid: boolean;
  email: string | null;
  reason?: string;
}> {
  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status === "paid") {
      return {
        paid: true,
        email:
          session.customer_details?.email || session.customer_email || null,
      };
    }
    return { paid: false, email: null, reason: session.payment_status };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "unknown";
    console.warn("[zugang] could not verify session", { sessionId, err: msg });
    return { paid: false, email: null, reason: "lookup-failed" };
  }
}
