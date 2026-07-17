import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAccess } from "@/lib/access";
import KursNav from "@/components/kurs/KursNav";
import MarkDoneButton from "@/components/kurs/MarkDoneButton";
import { LESSON_BY_SLUG, phaseBySlug } from "@/content/founder-os/course";

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
    <main className="ap min-h-screen">
      <KursNav />

      <article className="max-w-[680px] mx-auto px-6 pb-28">
        {/* Breadcrumb */}
        <nav className="text-[13px] text-[#86868b] pt-8 pb-10 flex flex-wrap items-center gap-2">
          <Link href="/kurs" className="hover:text-[#1d1d1f]">
            Übersicht
          </Link>
          <span>›</span>
          <Link href={`/kurs/${phaseNum}`} className="hover:text-[#1d1d1f]">
            Phase {phaseNum} · {phase.title}
          </Link>
        </nav>

        {/* Head */}
        <header className="mb-12">
          <div className="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#0071e3] mb-4">
            {lesson.eyebrow}
          </div>
          <h1 className="text-[clamp(32px,5vw,48px)] leading-[1.08] font-bold tracking-[-0.02em] text-[#1d1d1f] mb-6">
            {lesson.title}
          </h1>
          <p
            className="text-[19px] lg:text-[21px] leading-[1.45] font-medium text-[#6e6e73] tracking-[-0.012em]"
            dangerouslySetInnerHTML={{ __html: lesson.summary }}
          />
        </header>

        {/* Body */}
        <div
          className="lesson-prose"
          dangerouslySetInnerHTML={{ __html: lesson.body }}
        />

        {/* Footer */}
        <footer className="mt-16 pt-10 border-t border-[#d2d2d7]">
          <div className="text-center mb-10">
            <MarkDoneButton itemId={lesson.itemId} />
          </div>
          <div className="flex justify-between items-center gap-4">
            <Link
              href={`/kurs/${phaseNum}`}
              className="text-[15px] font-medium text-[#0071e3] hover:underline"
            >
              ‹ Zurück zu Phase {phaseNum}
            </Link>
            {lesson.nextTitle ? (
              <span className="text-[13px] text-[#86868b] text-right">
                Als Nächstes: {lesson.nextTitle}
              </span>
            ) : null}
          </div>
        </footer>
      </article>
    </main>
  );
}
