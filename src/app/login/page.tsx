"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/access/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        window.location.href = "/kurs";
        return;
      }
      setError(data.error ?? "Login fehlgeschlagen.");
    } catch {
      setError("Verbindung fehlgeschlagen. Bitte nochmal versuchen.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="ap min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="w-full max-w-[380px]">
        <div className="text-center mb-10">
          <div className="text-[15px] font-semibold tracking-[-0.01em] text-[#1d1d1f] mb-8">
            Founder OS
          </div>
          <h1 className="text-[32px] leading-[1.1] font-bold tracking-[-0.02em] text-[#1d1d1f] mb-2">
            Anmelden
          </h1>
          <p className="text-[15px] text-[#6e6e73]">
            Mit deiner E-Mail und deinem Passwort.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-3">
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-[#d2d2d7] bg-white px-5 py-4 text-[16px] text-[#1d1d1f] placeholder:text-[#86868b] outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/25 transition"
          />
          <input
            type="password"
            autoComplete="current-password"
            required
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-[#d2d2d7] bg-white px-5 py-4 text-[16px] text-[#1d1d1f] placeholder:text-[#86868b] outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/25 transition"
          />

          {error ? (
            <p className="text-[14px] text-[#e30000] px-1 pt-1">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="ap-btn w-full py-4 text-[16px] mt-2 disabled:opacity-50"
          >
            {loading ? "Wird geprüft…" : "Anmelden"}
          </button>
        </form>

        <p className="text-[13px] leading-relaxed text-[#86868b] text-center mt-8">
          Passwort vergessen oder kein Zugang? Schreib an{" "}
          <a
            href="mailto:info@bb-brands.de?subject=Founder%20OS%20Zugang"
            className="text-[#0071e3] hover:underline"
          >
            info@bb-brands.de
          </a>
        </p>
      </div>
    </main>
  );
}
