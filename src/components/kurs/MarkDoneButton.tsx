"use client";

import { useProgress, toggle } from "@/lib/progress";

export default function MarkDoneButton({ itemId }: { itemId: string }) {
  const state = useProgress();
  const done = !!state[itemId];

  return (
    <button
      type="button"
      onClick={() => toggle(itemId)}
      className={`ap-btn px-7 py-3.5 text-[15px] ${done ? "ap-btn-done" : ""}`}
    >
      {done ? "✓ Erledigt" : "Als erledigt markieren"}
    </button>
  );
}
