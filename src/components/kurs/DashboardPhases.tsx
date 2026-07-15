"use client";

import Link from "next/link";
import { PHASES } from "@/content/founder-os/course";
import {
  useProgress,
  countPhaseDone,
  countTotalDone,
  TOTAL_ITEMS,
} from "@/lib/progress";

export default function DashboardPhases() {
  const state = useProgress();
  const totalDone = countTotalDone(state);
  const pct = Math.round((totalDone / TOTAL_ITEMS) * 100);

  return (
    <div>
      <p className="fos-mono text-[13px] text-text-3 mb-8">
        Dein Fortschritt:{" "}
        <strong className="text-accent">
          {totalDone} / {TOTAL_ITEMS} Items
        </strong>
        {totalDone === 0
          ? " · noch nichts angefangen"
          : totalDone === TOTAL_ITEMS
            ? " · alles erledigt 🟢"
            : ` · ${pct} % geschafft`}
      </p>

      <div className="space-y-3">
        {PHASES.map((p) => {
          const total = p.itemsTotal;
          const done = countPhaseDone(state, p.phase);
          const barPct = total > 0 ? (done / total) * 100 : 0;
          const complete = done === total && total > 0;
          return (
            <Link
              key={p.phase}
              href={`/kurs/${p.phase}`}
              className={`group grid grid-cols-[auto_1fr_auto] items-center gap-4 lg:gap-6 rounded-xl border p-5 lg:px-7 transition-all hover:-translate-y-0.5 ${
                complete
                  ? "border-green bg-green-soft"
                  : "border-line bg-white hover:border-navy"
              }`}
            >
              <div
                className={`fos-mono text-[14px] font-bold ${
                  complete ? "text-green" : "text-text-3"
                }`}
              >
                {String(p.phase).padStart(2, "0")}
              </div>
              <div className="min-w-0">
                <div className="font-display font-bold text-[17px] text-navy leading-tight">
                  {p.title}
                </div>
                <div className="text-[13px] text-text-3 italic truncate">
                  „{p.question}“
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:block w-28 lg:w-40 h-1.5 rounded-full bg-line overflow-hidden">
                  <div
                    className="h-full bg-accent transition-[width] duration-500"
                    style={{ width: `${barPct}%` }}
                  />
                </div>
                <div className="fos-mono text-[12px] font-semibold text-text-2 text-right min-w-[54px] tabular-nums">
                  {complete ? "✓ " : ""}
                  {done} / {total}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
