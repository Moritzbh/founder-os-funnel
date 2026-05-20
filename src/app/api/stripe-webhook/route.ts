import type { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";
import { signAccessToken } from "@/lib/jwt";
import { sendWelcomeEmail } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://founder-os.bb-brands.de";

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

  // We only care about completed checkouts for now. Everything else is acked OK.
  if (event.type !== "checkout.session.completed") {
    return Response.json({ received: true, ignored: event.type });
  }

  const session = event.data.object;
  if (session.payment_status !== "paid") {
    return Response.json({
      received: true,
      ignored: "payment_status not paid",
    });
  }

  const email =
    session.customer_details?.email || session.customer_email || null;
  if (!email) {
    console.error("[stripe-webhook] no email on session", session.id);
    // Ack so Stripe stops retrying; manual recovery via dashboard.
    return Response.json({ received: true, error: "no email" });
  }

  // Build magic link
  const token = await signAccessToken({
    email,
    product: "founder-os",
    purchasedAt: new Date().toISOString(),
    stripeSessionId: session.id,
  });
  const magicLink = `${BASE_URL}/api/access/redeem?t=${encodeURIComponent(token)}`;

  try {
    await sendWelcomeEmail({ email, magicLink });
  } catch (err) {
    // Log + return 500 so Stripe retries — at-most-once mail is worse than a duplicate.
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[stripe-webhook] welcome mail failed", {
      email,
      session: session.id,
      err: msg,
    });
    return new Response(`mail send failed: ${msg}`, { status: 500 });
  }

  console.info("[stripe-webhook] welcome mail sent", {
    email,
    session: session.id,
  });

  return Response.json({ received: true, delivered: true });
}
