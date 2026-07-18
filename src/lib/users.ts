import { scryptSync, randomBytes, timingSafeEqual } from "crypto";
import { USERS, type CourseUser } from "@/content/founder-os/users";

/**
 * Einfache User-Verwaltung für den Kurs-Zugang per E-Mail + Passwort.
 * Passwörter werden mit scrypt gehasht (Format "salt:hash", hex).
 * Kein Klartext-Passwort wird gespeichert.
 */

const KEYLEN = 64;

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, KEYLEN).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hashHex] = stored.split(":");
  if (!salt || !hashHex) return false;
  const expected = Buffer.from(hashHex, "hex");
  const actual = scryptSync(password, salt, KEYLEN);
  if (expected.length !== actual.length) return false;
  return timingSafeEqual(expected, actual);
}

export function findUser(email: string): CourseUser | null {
  const normalized = email.trim().toLowerCase();
  return USERS.find((u) => u.email.toLowerCase() === normalized) ?? null;
}
