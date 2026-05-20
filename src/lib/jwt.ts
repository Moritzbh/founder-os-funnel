import { SignJWT, jwtVerify } from "jose";

const ISSUER = "founder-os.bb-brands.de";
const AUDIENCE = "founder-os";

function getSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("JWT_SECRET missing or too short (need ≥32 chars)");
  }
  return new TextEncoder().encode(secret);
}

export type AccessPayload = {
  email: string;
  product: "founder-os";
  purchasedAt: string; // ISO date
  stripeSessionId?: string;
};

export async function signAccessToken(payload: AccessPayload): Promise<string> {
  return await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(ISSUER)
    .setAudience(AUDIENCE)
    .setExpirationTime("365d")
    .sign(getSecret());
}

export async function verifyAccessToken(token: string): Promise<AccessPayload> {
  const { payload } = await jwtVerify(token, getSecret(), {
    issuer: ISSUER,
    audience: AUDIENCE,
  });
  return {
    email: String(payload.email),
    product: "founder-os",
    purchasedAt: String(payload.purchasedAt),
    stripeSessionId: payload.stripeSessionId
      ? String(payload.stripeSessionId)
      : undefined,
  };
}
