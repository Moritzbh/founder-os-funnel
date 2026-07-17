"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PHASE_LINKS = [
  { phase: 1, label: "Klären" },
  { phase: 2, label: "Validieren" },
  { phase: 3, label: "Aufstellen" },
  { phase: 4, label: "Launchen" },
  { phase: 5, label: "Skalieren" },
];

export default function KursNav() {
  const pathname = usePathname();
  const activePhase = (() => {
    const m = pathname.match(/^\/kurs\/(\d)/);
    return m ? parseInt(m[1], 10) : null;
  })();
  const onDashboard = pathname === "/kurs";

  return (
    <nav className="ap-nav">
      <div className="max-w-[1024px] mx-auto px-5 h-12 flex items-center justify-between gap-6">
        <Link
          href="/kurs"
          className="text-[15px] font-semibold tracking-[-0.01em] text-[#1d1d1f] shrink-0"
        >
          Founder OS
        </Link>

        <div className="hidden md:flex items-center gap-7 text-[12.5px]">
          <Link
            href="/kurs"
            className={
              onDashboard
                ? "text-[#1d1d1f] font-medium"
                : "text-[#424245] hover:text-[#1d1d1f]"
            }
          >
            Übersicht
          </Link>
          {PHASE_LINKS.map((p) => (
            <Link
              key={p.phase}
              href={`/kurs/${p.phase}`}
              className={
                activePhase === p.phase
                  ? "text-[#1d1d1f] font-medium"
                  : "text-[#424245] hover:text-[#1d1d1f]"
              }
            >
              {p.label}
            </Link>
          ))}
        </div>

        <a
          href="/api/access/logout"
          className="text-[12.5px] text-[#424245] hover:text-[#1d1d1f] shrink-0"
        >
          Abmelden
        </a>
      </div>
    </nav>
  );
}
