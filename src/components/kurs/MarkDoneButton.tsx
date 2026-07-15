"use client";

import { useProgress, toggle } from "@/lib/progress";

export default function MarkDoneButton({ itemId }: { itemId: string }) {
  const state = useProgress();
  const done = !!state[itemId];

  return (
    <button
      type="button"
      onClick={() => toggle(itemId)}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full fos-mono text-[12px] font-bold uppercase tracking-wider transition-colors ${
        done
          ? "bg-green text-white hover:brightness-95"
          : "bg-accent text-white hover:bg-accent-deep"
      }`}
    >
      {done ? "✓ Erledigt — rückgängig" : "Als erledigt markieren"}
    </button>
  );
}
