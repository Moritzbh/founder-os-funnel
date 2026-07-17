import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAccess } from "@/lib/access";
import KursNav from "@/components/kurs/KursNav";
import PhaseItems from "@/components/kurs/PhaseItems";
import { phaseBySlug, PHASES } from "@/content/founder-os/course";

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

  const prev = PHASES.find((p) => p.phase === phaseNum - 1);
  const next = PHASES.find((p) => p.phase === phaseNum + 1);

  return (
    <main className="ap min-h-screen">
      <KursNav />

      {/* Schwarzer Pro-Hero */}
      <header className="ap-hero-dark">
        <div className="max-w-[820px] mx-auto px-6 pt-20 lg:pt-28 pb-16 lg:pb-20 text-center">
          <div className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#86868b] mb-4">
            Phase {phase.phase} von 5
          </div>
          <h1 className="text-[clamp(42px,6.5vw,64px)] leading-[1.05] font-bold tracking-[-0.02em] text-[#f5f5f7] mb-4">
            {phase.title}.
          </h1>
          <p className="text-[clamp(18px,2.4vw,23px)] leading-[1.4] font-medium text-[#86868b] tracking-[-0.012em] max-w-[520px] mx-auto">
            „{phase.question}“
          </p>
          <div className="flex justify-center gap-7 mt-8 text-[13px] text-[#86868b] tabular-nums">
            <span>{phase.weeks}</span>
            <span>{phase.modules.length} Module</span>
            <span>{phase.itemsTotal} Lektionen</span>
          </div>
        </div>
      </header>

      <div className="max-w-[820px] mx-auto px-6 py-14 lg:py-16">
        <p className="text-[17px] lg:text-[19px] leading-[1.55] text-[#1d1d1f] tracking-[-0.012em] max-w-[640px] mb-12">
          {phase.lead}
        </p>

        <PhaseItems phase={phase.phase} modules={phase.modules} />

        {/* Phasen-Navigation */}
        <div className="flex justify-between items-center gap-4 mt-14 pt-8 border-t border-[#d2d2d7]">
          {prev ? (
            <Link
              href={`/kurs/${prev.phase}`}
              className="text-[15px] font-medium text-[#0071e3] hover:underline"
            >
              ‹ Phase {prev.phase} · {prev.title}
            </Link>
          ) : (
            <Link
              href="/kurs"
              className="text-[15px] font-medium text-[#0071e3] hover:underline"
            >
              ‹ Übersicht
            </Link>
          )}
          {next ? (
            <Link
              href={`/kurs/${next.phase}`}
              className="text-[15px] font-medium text-[#0071e3] hover:underline text-right"
            >
              Phase {next.phase} · {next.title} ›
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </main>
  );
}
