import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { verifyAccessToken } from "@/lib/jwt";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COOKIE_NAME = "founder-os-access";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365; // 365 days

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("t");
  if (!token) {
    return Response.redirect(
      new URL("/kurs/zugang-fehlt?reason=missing", request.url),
      302,
    );
  }

  try {
    await verifyAccessToken(token);
  } catch {
    return Response.redirect(
      new URL("/kurs/zugang-fehlt?reason=invalid", request.url),
      302,
    );
  }

  const jar = await cookies();
  jar.set(COOKIE_NAME, token, {
    httpOnly: true,
    // In Produktion (https) secure; lokal (http://localhost) sonst lehnen
    // manche Browser den Cookie ab und der Zugang greift nicht.
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: COOKIE_MAX_AGE_SECONDS,
  });

  return Response.redirect(new URL("/kurs", request.url), 302);
}
