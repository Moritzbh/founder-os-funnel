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
    <div className="space-y-4">
      {modules.map((m) => (
        <div
          key={m.id}
          className="rounded-xl border border-line bg-white overflow-hidden"
        >
          <div className="flex items-center gap-3 flex-wrap px-5 lg:px-7 py-4 bg-bg-soft border-b border-line">
            <span className="fos-mono text-[11px] font-bold text-accent tracking-wide">
              {m.id}
            </span>
            <span className="font-display font-bold text-[16px] text-navy">
              {m.title}
            </span>
            <span className="fos-mono text-[11px] text-text-3 ml-auto">
              {m.count}
            </span>
          </div>
          <ul className="px-5 lg:px-7 py-2">
            {m.items.map((it) => {
              const done = !!state[it.itemId];
              const inner = (
                <>
                  <span className="fos-item-num fos-mono text-[11px] text-text-3 min-w-[26px]">
                    {it.num}
                  </span>
                  <span className="fos-item-title text-[14.5px] text-navy font-medium">
                    {it.title}
                  </span>
                  <span
                    className={`ml-auto text-[9px] fos-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border ${
                      it.available
                        ? "text-accent border-accent/40 bg-accent-bg"
                        : "text-text-3 border-line bg-bg-soft"
                    }`}
                  >
                    {it.available ? "Lektion" : "kommt noch"}
                  </span>
                  <span className="fos-mono text-[13px] text-text-3 min-w-[18px] text-right">
                    {it.available ? "→" : ""}
                  </span>
                </>
              );

              if (it.available && it.slug) {
                return (
                  <li key={it.itemId}>
                    <Link
                      href={`/kurs/${phase}/${it.slug}`}
                      data-done={done}
                      className="fos-item flex items-center gap-4 py-3 border-b border-line last:border-b-0 -mx-2 px-2 rounded-md hover:bg-bg-soft transition-colors"
                    >
                      {inner}
                    </Link>
                  </li>
                );
              }
              return (
                <li
                  key={it.itemId}
                  data-done={done}
                  className="fos-item flex items-center gap-4 py-3 border-b border-line last:border-b-0 opacity-55 cursor-default"
                  title="Diese Lektion ist noch in Arbeit"
                >
                  {inner}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
