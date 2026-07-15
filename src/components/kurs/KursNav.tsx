"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PHASE_LINKS = [
  { phase: 1, label: "1 Klären" },
  { phase: 2, label: "2 Validieren" },
  { phase: 3, label: "3 Aufstellen" },
  { phase: 4, label: "4 Launchen" },
  { phase: 5, label: "5 Skalieren" },
];

export default function KursNav() {
  const pathname = usePathname();
  const activePhase = (() => {
    const m = pathname.match(/^\/kurs\/(\d)/);
    return m ? parseInt(m[1], 10) : null;
  })();
  const onDashboard = pathname === "/kurs";

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-line">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 h-14 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <Link
            href="/kurs"
            className="font-bold tracking-[-0.01em] text-[15px] text-navy shrink-0"
          >
            BB · <span className="text-accent">Founder OS</span>
          </Link>
          <span className="hidden md:flex items-center gap-4 fos-mono text-[13px]">
            {PHASE_LINKS.map((p) => (
              <Link
                key={p.phase}
                href={`/kurs/${p.phase}`}
                className={
                  activePhase === p.phase
                    ? "text-accent font-semibold"
                    : "text-text-2 hover:text-accent transition-colors"
                }
              >
                {p.label}
              </Link>
            ))}
          </span>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/kurs"
            className={`text-[12px] fos-mono ${
              onDashboard ? "text-accent" : "text-text-3 hover:text-navy"
            }`}
          >
            Dashboard
          </Link>
          <a
            href="/api/access/logout"
            className="text-[12px] fos-mono text-text-3 hover:text-navy"
          >
            abmelden
          </a>
        </div>
      </div>
    </nav>
  );
}
