import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyAccessToken, type AccessPayload } from "@/lib/jwt";

const COOKIE_NAME = "founder-os-access";

/**
 * Liest den Zugangs-Cookie und verifiziert das JWT.
 * Gibt null zurück, wenn kein gültiger Zugang vorliegt.
 */
export async function readAccess(): Promise<AccessPayload | null> {
  const jar = await cookies();
  const cookie = jar.get(COOKIE_NAME);
  if (!cookie?.value) return null;
  try {
    return await verifyAccessToken(cookie.value);
  } catch {
    return null;
  }
}

/**
 * Erzwingt gültigen Zugang. Redirected zur Zugang-fehlt-Seite, wenn keiner da ist.
 * Für alle /kurs-Routen die eine Freischaltung brauchen.
 */
export async function requireAccess(): Promise<AccessPayload> {
  const access = await readAccess();
  if (!access) {
    redirect("/kurs/zugang-fehlt?reason=no-cookie");
  }
  return access;
}
