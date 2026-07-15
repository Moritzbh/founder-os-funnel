import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAccess } from "@/lib/access";
import KursNav from "@/components/kurs/KursNav";
import PhaseItems from "@/components/kurs/PhaseItems";
import { phaseBySlug, realLessonCount, PHASES } from "@/content/founder-os/course";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ phase: string }>;
};

export default async function PhasePage({ params }: PageProps) {
  await requireAccess();
  const { phase: phaseParam } = await params;
  const phaseNum = parseInt(phaseParam, 10);
  const phase = phaseBySlug(phaseNum);
  if (!phase) notFound();

  const live = realLessonCount(phaseNum);
  const prev = PHASES.find((p) => p.phase === phaseNum - 1);
  const next = PHASES.find((p) => p.phase === phaseNum + 1);

  return (
    <main className="min-h-screen bg-bg">
      <KursNav />

      {/* Dark Phase-Head */}
      <header className="fos-phase-head">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-12 lg:py-16 flex items-start gap-6 lg:gap-10 flex-wrap">
          <div className="fos-phase-num text-[64px] lg:text-[96px]">
            {String(phase.phase).padStart(2, "0")}
          </div>
          <div className="flex-1 min-w-[220px]">
            <div className="fos-mono text-[12px] tracking-[0.2em] uppercase text-accent font-bold mb-2">
              {phase.eyebrow}
            </div>
            <h1 className="font-display text-[34px] lg:text-[42px] leading-[1.05] font-extrabold tracking-[-0.02em] text-white mb-2">
              {phase.title}
            </h1>
            <p className="text-[17px] text-white/60 italic mb-5">
              „{phase.question}“
            </p>
            <div className="flex gap-5 flex-wrap fos-mono text-[11px] uppercase tracking-wider text-white/50">
              <div>
                Dauer: <strong className="text-white">{phase.weeks}</strong>
              </div>
              <div>
                Module: <strong className="text-white">{phase.modules.length}</strong>
              </div>
              <div>
                Items: <strong className="text-white">{phase.itemsTotal}</strong>
              </div>
              <div>
                Live: <strong className="text-accent">{live}</strong>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-12 lg:py-14">
        <p className="text-[18px] lg:text-[19px] leading-[1.55] text-text-2 max-w-2xl mb-10">
          {phase.lead}
        </p>

        <PhaseItems phase={phase.phase} modules={phase.modules} />

        {/* Phasen-Navigation */}
        <div className="flex justify-between gap-4 mt-12 pt-8 border-t border-line">
          {prev ? (
            <Link
              href={`/kurs/${prev.phase}`}
              className="flex-1 rounded-xl border border-line bg-white px-5 py-4 hover:border-navy transition-colors"
            >
              <div className="fos-mono text-[10px] uppercase tracking-wider text-text-3 mb-1">
                ← Phase {prev.phase}
              </div>
              <div className="text-[14px] font-semibold text-navy">
                {prev.title}
              </div>
            </Link>
          ) : (
            <Link
              href="/kurs"
              className="flex-1 rounded-xl border border-line bg-white px-5 py-4 hover:border-navy transition-colors"
            >
              <div className="fos-mono text-[10px] uppercase tracking-wider text-text-3 mb-1">
                ← Zurück
              </div>
              <div className="text-[14px] font-semibold text-navy">Dashboard</div>
            </Link>
          )}
          {next ? (
            <Link
              href={`/kurs/${next.phase}`}
              className="flex-1 rounded-xl border border-line bg-white px-5 py-4 text-right hover:border-navy transition-colors"
            >
              <div className="fos-mono text-[10px] uppercase tracking-wider text-text-3 mb-1">
                Phase {next.phase} →
              </div>
              <div className="text-[14px] font-semibold text-navy">
                {next.title}
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </main>
  );
}
