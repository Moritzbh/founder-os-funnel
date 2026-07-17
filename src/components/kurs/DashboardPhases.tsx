"use client";

import Link from "next/link";
import { PHASES } from "@/content/founder-os/course";
import {
  useProgress,
  countPhaseDone,
  countTotalDone,
  TOTAL_ITEMS,
} from "@/lib/progress";

const PHASE_SUB: Record<number, string> = {
  1: "Fundament legen",
  2: "Nachfrage beweisen",
  3: "Marke und Shop bauen",
  4: "Ersten Umsatz holen",
  5: "Zur echten Marke wachsen",
};

export default function DashboardPhases() {
  const state = useProgress();
  const totalDone = countTotalDone(state);
  const pct = Math.round((totalDone / TOTAL_ITEMS) * 100);

  return (
    <div>
      {/* Gesamt-Fortschritt */}
      <div className="ap-card p-7 lg:p-9 mb-6">
        <div className="flex items-baseline justify-between gap-4 mb-4 flex-wrap">
          <div className="text-[19px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
            Dein Fortschritt
          </div>
          <div className="text-[14px] text-[#6e6e73] tabular-nums">
            {totalDone} von {TOTAL_ITEMS} Lektionen
            {totalDone > 0 ? ` · ${pct} %` : ""}
          </div>
        </div>
        <div className="ap-progress">
          <div className="ap-progress-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {/* Phasen-Cards */}
      <div className="grid gap-5">
        {PHASES.map((p) => {
          const total = p.itemsTotal;
          const done = countPhaseDone(state, p.phase);
          const barPct = total > 0 ? (done / total) * 100 : 0;
          const complete = done === total && total > 0;
          return (
            <Link
              key={p.phase}
              href={`/kurs/${p.phase}`}
              className="ap-card-white p-7 lg:p-8 grid grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto] items-center gap-6 lg:gap-8"
            >
              <div
                className={`text-[40px] lg:text-[48px] font-bold tracking-[-0.03em] leading-none tabular-nums ${
                  complete ? "text-[#34c759]" : "text-[#d2d2d7]"
                }`}
              >
                {String(p.phase).padStart(2, "0")}
              </div>
              <div className="min-w-0">
                <div className="text-[21px] lg:text-[24px] font-semibold tracking-[-0.018em] text-[#1d1d1f] leading-tight mb-0.5">
                  {p.title}
                </div>
                <div className="text-[14.5px] text-[#6e6e73]">
                  {PHASE_SUB[p.phase]} · {p.weeks}
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1 lg:w-44">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-[12.5px] text-[#6e6e73] tabular-nums">
                    {done} / {total}
                  </span>
                  {complete ? (
                    <span className="text-[12.5px] font-medium text-[#34c759]">
                      Fertig
                    </span>
                  ) : (
                    <span className="text-[12.5px] font-medium text-[#0071e3]">
                      Öffnen ›
                    </span>
                  )}
                </div>
                <div className="ap-progress">
                  <div
                    className="ap-progress-fill"
                    style={{
                      width: `${barPct}%`,
                      background: complete ? "#34c759" : undefined,
                    }}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
