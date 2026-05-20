import Link from "next/link";
import { getStripe } from "@/lib/stripe";
import { signAccessToken } from "@/lib/jwt";

export const dynamic = "force-dynamic";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://founder-os.bb-brands.de";

type PageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function ZugangPage({ searchParams }: PageProps) {
  const { session_id } = await searchParams;

  const result = session_id ? await verifyAndSign(session_id) : null;

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
          <PaidView email={result.email} magicLink={result.magicLink} />
        ) : (
          <PendingView reason={result?.reason} />
        )}
      </div>
    </main>
  );
}

function PaidView({
  email,
  magicLink,
}: {
  email: string | null;
  magicLink: string;
}) {
  return (
    <div>
      <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-accent font-bold mb-4">
        ✓ Zahlung erfolgreich
      </div>

      <h1 className="text-[clamp(36px,5vw,56px)] leading-[1.05] font-extrabold tracking-[-0.025em] mb-5">
        Willkommen an Bord.
      </h1>

      <p className="text-[17px] leading-relaxed text-text-2 mb-6">
        {email ? (
          <>
            Deine Zahlung von <strong className="text-text">{email}</strong> ist
            durch. Stripe schickt dir die Rechnung gleich automatisch per Mail.
          </>
        ) : (
          <>
            Deine Zahlung ist durch. Stripe schickt dir die Rechnung gleich
            automatisch per Mail.
          </>
        )}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <a
          href={magicLink}
          className="inline-flex items-center justify-center px-7 py-4 bg-text text-white rounded-full text-[15px] font-bold hover:bg-accent transition-colors"
        >
          Direkt zum Kurs →
        </a>
        <a
          href="https://calendly.com/bb-brands/founder-os-15min"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center px-7 py-4 border border-text rounded-full text-[15px] font-semibold text-text hover:bg-text hover:text-white transition-colors"
        >
          15-Min-Klärungs-Call buchen
        </a>
      </div>

      <div className="bg-bg-card border border-line rounded-xl p-6 lg:p-8 mb-8">
        <div className="flex items-baseline justify-between gap-4 mb-3 flex-wrap">
          <p className="text-[14px] font-bold text-text">
            Speicher dir diesen Link
          </p>
          <span className="text-[10.5px] font-mono uppercase tracking-wider text-text-3">
            für den Notfall
          </span>
        </div>
        <p className="text-[13.5px] leading-relaxed text-text-2 mb-4">
          Mit diesem Link kommst du jederzeit zurück in den Kurs — auch von
          einem anderen Browser. Bookmark ihn, oder schick ihn dir per Mail
          an dich selbst. Er ist 365 Tage gültig.
        </p>
        <code className="block text-[11.5px] font-mono bg-bg-soft border border-line rounded px-3 py-3 text-text-2 break-all leading-relaxed">
          {magicLink}
        </code>
      </div>

      <div className="border-t border-line pt-6 mt-10">
        <p className="text-[13.5px] leading-relaxed text-text-3">
          <strong className="text-text-2">Wenn du den Link verlierst</strong>{" "}
          und der Browser-Cookie weg ist: schreib mir kurz an{" "}
          <a
            href="mailto:info@bb-brands.de?subject=Founder%20OS%20Zugang%20fehlt"
            className="text-accent font-semibold underline"
          >
            info@bb-brands.de
          </a>
          {email ? (
            <>
              {" "}
              mit deiner Kauf-Mailadresse ({email}) — ich schicke dir manuell
              einen neuen Link.
            </>
          ) : (
            <> mit deiner Kauf-Mailadresse — ich schicke dir manuell einen neuen Link.</>
          )}
        </p>
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
        Wenn du gerade bezahlt hast: warte 30 Sekunden und lade die Seite neu.
        Stripe braucht manchmal einen Moment, um die Zahlung zu bestätigen.
      </p>

      <p className="text-[14px] leading-relaxed text-text-3 mb-8">
        Wenn nach einer Minute immer noch nichts geht, schreib mir kurz an{" "}
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

async function verifyAndSign(sessionId: string): Promise<{
  paid: boolean;
  email: string | null;
  magicLink: string;
  reason?: string;
}> {
  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") {
      return {
        paid: false,
        email: null,
        magicLink: "",
        reason: session.payment_status,
      };
    }
    const email =
      session.customer_details?.email || session.customer_email || null;
    const token = await signAccessToken({
      email: email ?? "unknown",
      product: "founder-os",
      purchasedAt: new Date().toISOString(),
      stripeSessionId: session.id,
    });
    const magicLink = `${BASE_URL}/api/access/redeem?t=${encodeURIComponent(token)}`;
    return { paid: true, email, magicLink };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "unknown";
    console.warn("[zugang] could not verify session", { sessionId, err: msg });
    return {
      paid: false,
      email: null,
      magicLink: "",
      reason: "lookup-failed",
    };
  }
}
