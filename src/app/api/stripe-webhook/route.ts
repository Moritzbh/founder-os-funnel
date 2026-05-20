import type { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Stripe-Webhook für Founder OS.
 *
 * Aktuelle Funktion: nur Logging.
 *
 * Der Magic-Link-Versand passiert direkt auf der /zugang-Page nach dem
 * Stripe-Redirect (siehe src/app/zugang/page.tsx) — der Käufer sieht und
 * speichert seinen Zugangs-Link selbst, ohne dass wir eine Welcome-Mail
 * verschicken müssen. Stripe sendet parallel die Quittung automatisch.
 *
 * Dieser Webhook bleibt aktiv, damit:
 *   1. Stripe einen "Endpoint OK"-Status sieht (sonst Warnung im Dashboard)
 *   2. wir Käufe in den Vercel-Logs nachschlagen können (Stripe-Session-IDs,
 *      Mail, Betrag)
 *   3. wir später, wenn nötig (z.B. ab 50 Käufern + Mail-Versand) hier
 *      Resend/SendGrid/wasauchimmer drandocken können — der Hook ist da.
 */
export async function POST(request: NextRequest) {
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return new Response("missing stripe-signature header", { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return new Response("server not configured", { status: 500 });
  }

  const rawBody = await request.text();
  const stripe = getStripe();

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "invalid signature";
    return new Response(`signature verification failed: ${msg}`, {
      status: 400,
    });
  }

  if (event.type !== "checkout.session.completed") {
    return Response.json({ received: true, ignored: event.type });
  }

  const session = event.data.object;
  const email =
    session.customer_details?.email || session.customer_email || null;

  console.info("[stripe-webhook] checkout.session.completed", {
    session_id: session.id,
    email,
    payment_status: session.payment_status,
    amount_total: session.amount_total,
    currency: session.currency,
  });

  return Response.json({ received: true, logged: true });
}
