import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAccess } from "@/lib/access";
import KursNav from "@/components/kurs/KursNav";
import MarkDoneButton from "@/components/kurs/MarkDoneButton";
import {
  LESSON_BY_SLUG,
  phaseBySlug,
} from "@/content/founder-os/course";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ phase: string; lesson: string }>;
};

export default async function LessonPage({ params }: PageProps) {
  await requireAccess();
  const { phase: phaseParam, lesson: lessonSlug } = await params;
  const phaseNum = parseInt(phaseParam, 10);
  const lesson = LESSON_BY_SLUG[lessonSlug];
  const phase = phaseBySlug(phaseNum);

  if (!lesson || !phase || lesson.phase !== phaseNum) notFound();

  return (
    <main className="min-h-screen bg-bg">
      <KursNav />

      <article className="max-w-[760px] mx-auto px-6 lg:px-10 pb-24">
        {/* Breadcrumb */}
        <nav className="fos-mono text-[12px] text-text-3 py-6 flex flex-wrap items-center gap-2">
          <Link href="/kurs" className="hover:text-accent">
            Dashboard
          </Link>
          <span>/</span>
          <Link href={`/kurs/${phaseNum}`} className="hover:text-accent">
            Phase {phaseNum} · {phase.title}
          </Link>
          <span>/</span>
          <span className="text-accent font-bold">{lesson.title}</span>
        </nav>

        {/* Head */}
        <header className="pb-9 mb-9 border-b border-line">
          <div className="fos-mono text-[11px] tracking-[0.2em] uppercase text-accent font-bold mb-4">
            {lesson.eyebrow}
          </div>
          <h1 className="font-display text-[30px] lg:text-[40px] leading-[1.08] font-extrabold tracking-[-0.025em] text-navy">
            {lesson.title}
          </h1>
          <p
            className="text-[17px] lg:text-[19px] leading-[1.55] text-text-2 italic border-l-[3px] border-accent pl-5 mt-6"
            dangerouslySetInnerHTML={{ __html: lesson.summary }}
          />
        </header>

        {/* Body */}
        <div
          className="lesson-prose"
          dangerouslySetInnerHTML={{ __html: lesson.body }}
        />

        {/* Footer */}
        <footer className="mt-12 pt-9 border-t border-line">
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
            <Link
              href={`/kurs/${phaseNum}`}
              className="flex-1 rounded-xl border border-line bg-white px-5 py-4 hover:border-navy transition-colors"
            >
              <div className="fos-mono text-[10px] uppercase tracking-wider text-text-3 mb-1">
                ← Phase {phaseNum} Index
              </div>
              <div className="text-[14px] font-semibold text-navy">
                Zurück zur Übersicht
              </div>
            </Link>
            {lesson.nextTitle ? (
              <div className="flex-1 rounded-xl border border-dashed border-line bg-bg-soft px-5 py-4 sm:text-right">
                <div className="fos-mono text-[10px] uppercase tracking-wider text-text-3 mb-1">
                  {lesson.nextEyebrow ?? "Nächster Item"}
                </div>
                <div className="text-[14px] font-semibold text-text-3">
                  {lesson.nextTitle}{" "}
                  <span className="fos-mono text-[10px]">(kommt noch)</span>
                </div>
              </div>
            ) : (
              <div className="flex-1" />
            )}
          </div>
          <div className="text-center">
            <MarkDoneButton itemId={lesson.itemId} />
          </div>
        </footer>
      </article>
    </main>
  );
}
