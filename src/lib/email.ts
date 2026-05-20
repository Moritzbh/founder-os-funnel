import { Resend } from "resend";

let _resend: Resend | null = null;
function getResend(): Resend {
  if (_resend) return _resend;
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY missing");
  _resend = new Resend(key);
  return _resend;
}

const FROM = process.env.RESEND_FROM_EMAIL || "Founder OS <info@bb-brands.de>";
const REPLY_TO = "info@bb-brands.de";

export type WelcomeEmailInput = {
  email: string;
  magicLink: string;
};

export async function sendWelcomeEmail({
  email,
  magicLink,
}: WelcomeEmailInput): Promise<{ id: string } | null> {
  const resend = getResend();
  const html = welcomeHtml(magicLink);
  const text = welcomeText(magicLink);

  const res = await resend.emails.send({
    from: FROM,
    to: [email],
    replyTo: REPLY_TO,
    subject: "Willkommen im Founder OS — hier ist dein Zugang",
    html,
    text,
    tags: [
      { name: "product", value: "founder-os" },
      { name: "type", value: "welcome" },
    ],
  });

  if (res.error) {
    throw new Error(`Resend send failed: ${res.error.message}`);
  }
  return res.data ? { id: res.data.id } : null;
}

function welcomeHtml(magicLink: string): string {
  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<title>Willkommen im Founder OS</title>
</head>
<body style="margin:0;padding:0;background:#fafaf7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#0a0a0a;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
    <div style="font-size:13px;letter-spacing:0.18em;text-transform:uppercase;color:#ff6b3d;font-weight:700;margin-bottom:14px;">
      Founder OS
    </div>

    <h1 style="font-size:28px;line-height:1.2;margin:0 0 18px 0;font-weight:800;letter-spacing:-0.02em;">
      Du bist drin.
    </h1>

    <p style="font-size:16px;line-height:1.6;color:#3a3a3a;margin:0 0 14px 0;">
      Glückwunsch — du hast den ersten Schritt gemacht. Das ist tatsächlich schon der schwerste.
    </p>

    <p style="font-size:16px;line-height:1.6;color:#3a3a3a;margin:0 0 28px 0;">
      Klick auf den Button, dann landest du direkt im Kurs-Dashboard. Speicher dir die Mail — der Link bleibt 365 Tage gültig.
    </p>

    <div style="text-align:center;margin:32px 0 36px 0;">
      <a href="${magicLink}" style="display:inline-block;padding:18px 32px;background:#0a0a0a;color:#fff;text-decoration:none;border-radius:999px;font-size:15px;font-weight:700;letter-spacing:0.01em;">
        Kurs jetzt öffnen →
      </a>
    </div>

    <div style="border-top:1px solid #e5e5e2;padding-top:28px;margin-top:28px;">
      <p style="font-size:14px;line-height:1.6;color:#666;margin:0 0 12px 0;">
        <strong style="color:#0a0a0a;">Was als Nächstes passiert:</strong>
      </p>
      <ul style="font-size:14px;line-height:1.7;color:#3a3a3a;margin:0 0 20px 0;padding-left:18px;">
        <li>Die Rechnung kommt separat von Stripe — schau auch in deinem Spam-Ordner.</li>
        <li>Phase 1 ist sofort verfügbar. Phase 2–5 schalten wir parallel zu deinem Fortschritt frei.</li>
        <li>Stell mir deine erste Frage einfach per Antwort auf diese Mail. Werktags 24h-Antwortzeit.</li>
      </ul>

      <p style="font-size:14px;line-height:1.6;color:#666;margin:0 0 8px 0;">
        Ein Tipp: Blockier dir die ersten 90 Minuten heute oder morgen früh. Lektion 1 + 2 von Phase 1 — und du weißt schon, warum die meisten in Woche zwei stecken bleiben.
      </p>
    </div>

    <div style="border-top:1px solid #e5e5e2;padding-top:24px;margin-top:32px;font-size:12px;line-height:1.6;color:#999;">
      <p style="margin:0 0 6px 0;">
        Moritz · BB Brands · <a href="mailto:info@bb-brands.de" style="color:#999;">info@bb-brands.de</a>
      </p>
      <p style="margin:0;">
        Falls der Button nicht funktioniert, kopier diesen Link in deinen Browser:<br>
        <a href="${magicLink}" style="color:#ff6b3d;word-break:break-all;">${magicLink}</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

function welcomeText(magicLink: string): string {
  return `Du bist drin.

Glückwunsch — du hast den ersten Schritt gemacht. Das ist tatsächlich schon der schwerste.

Hier ist dein Zugang zum Kurs:
${magicLink}

Speicher dir die Mail — der Link bleibt 365 Tage gültig.

Was als Nächstes passiert:
- Die Rechnung kommt separat von Stripe (auch im Spam schauen).
- Phase 1 ist sofort verfügbar. Phase 2–5 schalten wir parallel zu deinem Fortschritt frei.
- Stell mir deine erste Frage einfach per Antwort auf diese Mail. Werktags 24h-Antwortzeit.

Ein Tipp: Blockier dir die ersten 90 Minuten heute oder morgen früh. Lektion 1 + 2 von Phase 1 — und du weißt schon, warum die meisten in Woche zwei stecken bleiben.

Moritz · BB Brands
info@bb-brands.de
`;
}
