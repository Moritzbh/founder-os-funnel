import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { signAccessToken } from "@/lib/jwt";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COOKIE_NAME = "founder-os-access";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

/**
 * NUR für lokalen Review. Setzt ohne Token-Kopieren einen gültigen
 * Zugangs-Cookie und leitet in den Kurs. In Produktion hart deaktiviert.
 */
export async function GET(request: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return new Response("Not found", { status: 404 });
  }

  const token = await signAccessToken({
    email: "review@bb-brands.de",
    product: "founder-os",
    purchasedAt: new Date().toISOString(),
  });

  const jar = await cookies();
  jar.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: false, // lokal http
    sameSite: "lax",
    path: "/",
    maxAge: COOKIE_MAX_AGE_SECONDS,
  });

  return Response.redirect(new URL("/kurs", request.url), 302);
}
