// Legt einen Kurs-Zugang an (E-Mail + Passwort).
//
// Nutzung (aus dem Repo-Root):
//   node scripts/add-user.mjs kunde@mail.de              (Passwort wird generiert)
//   node scripts/add-user.mjs kunde@mail.de MeinPasswort (eigenes Passwort)
//
// Das Skript gibt dir:
//   1. das Klartext-Passwort (an den Kunden schicken)
//   2. die fertige Zeile für src/content/founder-os/users.ts (dort einfügen)
// Danach: Datei speichern, committen, pushen. Vercel deployt automatisch.
import { scryptSync, randomBytes } from "node:crypto";

const email = process.argv[2];
let password = process.argv[3];

if (!email || !email.includes("@")) {
  console.error("Aufruf: node scripts/add-user.mjs kunde@mail.de [passwort]");
  process.exit(1);
}

if (!password) {
  // lesbares, starkes Passwort: 4 Blöcke à 4 Zeichen, ohne verwechselbare Zeichen
  const alphabet = "abcdefghjkmnpqrstuvwxyz23456789";
  const pick = (n) =>
    Array.from(randomBytes(n))
      .map((b) => alphabet[b % alphabet.length])
      .join("");
  password = `${pick(4)}-${pick(4)}-${pick(4)}`;
}

const salt = randomBytes(16).toString("hex");
const hash = scryptSync(password, salt, 64).toString("hex");

console.log("");
console.log(`E-Mail:   ${email}`);
console.log(`Passwort: ${password}`);
console.log("");
console.log("Zeile für src/content/founder-os/users.ts (in das USERS-Array):");
console.log(`  { email: "${email}", password: "${salt}:${hash}" },`);
console.log("");
