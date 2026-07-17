"use client";

import Link from "next/link";
import type { CourseModule } from "@/content/founder-os/course";
import { useProgress } from "@/lib/progress";

export default function PhaseItems({
  phase,
  modules,
}: {
  phase: number;
  modules: CourseModule[];
}) {
  const state = useProgress();

  return (
    <div className="space-y-6">
      {modules.map((m) => {
        const doneCount = m.items.filter((it) => state[it.itemId]).length;
        return (
          <div key={m.id} className="ap-card overflow-hidden">
            <div className="flex items-baseline gap-3 flex-wrap px-7 lg:px-9 pt-7 pb-4">
              <span className="text-[12px] font-semibold text-[#0071e3] tracking-[0.02em] uppercase">
                {m.id.replace(/^MODUL\s*/i, "Modul ")}
              </span>
              <h3 className="text-[19px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
                {m.title}
              </h3>
              <span className="ml-auto text-[13px] text-[#6e6e73] tabular-nums">
                {doneCount} / {m.items.length}
              </span>
            </div>
            <ul className="px-3 lg:px-4 pb-4">
              {m.items.map((it) => {
                const done = !!state[it.itemId];
                return (
                  <li key={it.itemId}>
                    <Link
                      href={`/kurs/${phase}/${it.slug}`}
                      data-done={done}
                      className="fos-item flex items-center gap-4 px-4 lg:px-5 py-3.5 rounded-2xl hover:bg-white transition-colors"
                    >
                      <span
                        className={`fos-item-num text-[12px] tabular-nums min-w-[24px] ${
                          done ? "" : "text-[#86868b]"
                        }`}
                      >
                        {done ? "✓" : it.num}
                      </span>
                      <span className="fos-item-title text-[15.5px] font-medium text-[#1d1d1f] leading-snug">
                        {it.title}
                      </span>
                      <span className="ml-auto text-[15px] text-[#86868b] shrink-0">
                        ›
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
