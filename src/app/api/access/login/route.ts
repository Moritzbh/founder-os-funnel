import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { findUser, verifyPassword } from "@/lib/users";
import { signAccessToken } from "@/lib/jwt";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COOKIE_NAME = "founder-os-access";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365; // 365 Tage

export async function POST(request: NextRequest) {
  let email = "";
  let password = "";
  try {
    const body = await request.json();
    email = String(body.email ?? "");
    password = String(body.password ?? "");
  } catch {
    return Response.json({ ok: false, error: "Ungültige Anfrage." }, { status: 400 });
  }

  const user = findUser(email);
  // Immer beide Prüfungen laufen lassen (kein frühes Return), gleiche Antwort
  // bei falscher Mail oder falschem Passwort.
  const ok = user ? verifyPassword(password, user.password) : false;

  if (!ok || !user) {
    return Response.json(
      { ok: false, error: "E-Mail oder Passwort stimmt nicht." },
      { status: 401 },
    );
  }

  const token = await signAccessToken({
    email: user.email,
    product: "founder-os",
    purchasedAt: new Date().toISOString(),
  });

  const jar = await cookies();
  jar.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: COOKIE_MAX_AGE_SECONDS,
  });

  return Response.json({ ok: true });
}
