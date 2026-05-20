import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COOKIE_NAME = "founder-os-access";

export async function GET(request: NextRequest) {
  const jar = await cookies();
  jar.delete(COOKIE_NAME);
  return Response.redirect(new URL("/", request.url), 302);
}
