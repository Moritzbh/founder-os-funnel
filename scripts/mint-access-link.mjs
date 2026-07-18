// Erzeugt einen Magic-Link (Kurs-Zugang) für einen Käufer.
//
// Nutzung (aus dem Repo-Root):
//   JWT_SECRET="<Secret aus Vercel>" node scripts/mint-access-link.mjs kunde@mail.de
//
// Das JWT_SECRET findest du im Vercel-Dashboard:
//   Projekt "founder-os" -> Settings -> Environment Variables -> JWT_SECRET
// Es muss EXAKT der Production-Wert sein, sonst ist der Link ungültig.
import { SignJWT } from "jose";

const email = process.argv[2];
const secret = process.env.JWT_SECRET;
const siteUrl = process.env.SITE_URL || "https://founder-os.bb-brands.de";

if (!email || !email.includes("@")) {
  console.error("Aufruf: JWT_SECRET=... node scripts/mint-access-link.mjs kunde@mail.de");
  process.exit(1);
}
if (!secret || secret.length < 32) {
  console.error("JWT_SECRET fehlt oder ist zu kurz (mind. 32 Zeichen). Wert aus Vercel-Env nehmen.");
  process.exit(1);
}

const token = await new SignJWT({
  email,
  product: "founder-os",
  purchasedAt: new Date().toISOString(),
})
  .setProtectedHeader({ alg: "HS256" })
  .setIssuedAt()
  .setIssuer("founder-os.bb-brands.de")
  .setAudience("founder-os")
  .setExpirationTime("365d")
  .sign(new TextEncoder().encode(secret));

console.log("");
console.log(`Zugangs-Link für ${email} (365 Tage gültig):`);
console.log("");
console.log(`${siteUrl}/api/access/redeem?t=${token}`);
console.log("");
