// Regeneriert src/content/founder-os/course.ts aus den statischen Kurs-HTMLs.
// Ausführen aus dem Repo-Root:  node scripts/gen-course.mjs
// Quelle: ../Kurs/phase-*/index.html + lesson-*.html (Schwester-Ordner)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, "..");
const KURS = path.resolve(REPO, "..", "Kurs");
const OUT = path.join(REPO, "src/content/founder-os/course.ts");

const rx = {
  between: (s, a, b) => {
    const i = s.indexOf(a);
    if (i < 0) return null;
    const j = s.indexOf(b, i + a.length);
    if (j < 0) return null;
    return s.slice(i + a.length, j);
  },
};

function clean(s) {
  return (s ?? "").replace(/\s+/g, " ").trim();
}
function firstMatch(s, re) {
  const m = s.match(re);
  return m ? m[1] : null;
}

// ---- parse a lesson file ----
function parseLesson(phase, file) {
  const html = fs.readFileSync(file, "utf8");
  const slugFull = path.basename(file, ".html"); // lesson-xyz
  const slug = slugFull.replace(/^lesson-/, "");
  const eyebrow = clean(firstMatch(html, /class="lesson-head-eyebrow">([\s\S]*?)<\/div>/));
  const title = clean(firstMatch(html, /class="lesson-head-title">([\s\S]*?)<\/h1>/));
  const summaryRaw = firstMatch(html, /class="lesson-head-summary">([\s\S]*?)<\/p>/);
  const summary = (summaryRaw ?? "").trim();
  const itemId = firstMatch(html, /class="mark-done"[^>]*data-item-id="([^"]+)"/) ||
    firstMatch(html, /data-item-id="([^"]+)"[^>]*class="mark-done"/);
  // body: between lesson-body open div and lesson-footer div
  let body = rx.between(html, '<div class="lesson-body">', '<div class="lesson-footer">');
  if (body == null) {
    // fallback: to </div>\n\n  <div class="lesson-footer"
    body = rx.between(html, '<div class="lesson-body">', 'lesson-footer');
  }
  // strip trailing whitespace + the last </div> that closed lesson-body
  body = body.replace(/\s*<\/div>\s*$/, "").trim();
  // next hint
  const nextBlock = rx.between(html, 'lesson-nav-link next"', '</a>');
  let nextEyebrow = null, nextTitle = null;
  if (nextBlock) {
    nextEyebrow = clean(firstMatch(nextBlock, /lesson-nav-eyebrow">([\s\S]*?)<\/div>/));
    nextTitle = clean(firstMatch(nextBlock, /lesson-nav-title">([\s\S]*?)<\/div>/));
  }
  return { slug, phase, itemId, eyebrow, title, summary, body, nextEyebrow, nextTitle };
}

// ---- parse a phase index ----
function parsePhase(phase) {
  const file = path.join(KURS, `phase-${phase}`, "index.html");
  const html = fs.readFileSync(file, "utf8");
  const eyebrow = clean(firstMatch(html, /class="phase-head-eyebrow">([\s\S]*?)<\/div>/));
  const title = clean(firstMatch(html, /class="phase-head-title">([\s\S]*?)<\/h1>/));
  const question = clean(firstMatch(html, /class="phase-head-q">([\s\S]*?)<\/p>/)).replace(/^["„]|["“]$/g, "");
  const weeks = clean(firstMatch(html, /Dauer:\s*<strong>([\s\S]*?)<\/strong>/));
  const itemsTotal = parseInt(clean(firstMatch(html, /Items:\s*<strong>([\s\S]*?)<\/strong>/)) || "0", 10);
  const lead = (firstMatch(html, /class="lead">([\s\S]*?)<\/p>/) ?? "").trim();

  // modules
  const modules = [];
  const modRe = /<div class="module-block">([\s\S]*?)<\/div>\s*<\/div>/g;
  let mm;
  // The above is fragile; instead split by module-block-head occurrences.
  const blocks = html.split('<div class="module-block">').slice(1);
  for (const blk of blocks) {
    const mid = clean(firstMatch(blk, /class="module-block-id">([\s\S]*?)<\/span>/));
    const mtitle = clean(firstMatch(blk, /class="module-block-title">([\s\S]*?)<\/span>/));
    const mcount = clean(firstMatch(blk, /class="module-block-count">([\s\S]*?)<\/span>/));
    if (!mid) continue;
    // items in this block (limit to before next module-block or gate/tag-legend)
    const stop = blk.search(/class="module-block"|class="tag-legend"|class="gate-strip"/);
    const scope = stop > 0 ? blk.slice(0, stop) : blk;
    const items = [];
    const itemRe = /<a href="([^"]+)"[^>]*class="item-row"[^>]*data-item-id="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
    let im;
    while ((im = itemRe.exec(scope)) !== null) {
      const href = im[1];
      const itemId = im[2];
      const inner = im[3];
      const num = clean(firstMatch(inner, /class="item-row-num">([\s\S]*?)<\/span>/));
      const t = clean(firstMatch(inner, /class="item-row-title">([\s\S]*?)<\/span>/));
      const tag = clean(firstMatch(inner, /class="item-row-tag[^"]*">([\s\S]*?)<\/span>/));
      const isLesson = /^lesson-/.test(href);
      const slug = isLesson ? path.basename(href, ".html").replace(/^lesson-/, "") : null;
      items.push({ num, itemId, title: t, tag, slug, available: isLesson });
    }
    modules.push({ id: mid, title: mtitle, count: mcount, items });
  }

  return { phase, eyebrow, title, question, weeks, itemsTotal, lead, modules };
}

// ---- run ----
const phases = [1, 2, 3, 4, 5].map(parsePhase);

const lessons = [];
for (let p = 1; p <= 5; p++) {
  const dir = path.join(KURS, `phase-${p}`);
  for (const f of fs.readdirSync(dir)) {
    if (/^lesson-.*\.html$/.test(f)) lessons.push(parseLesson(p, path.join(dir, f)));
  }
}

// counts
const realCount = lessons.length;

const header = `// AUTO-GENERATED von scratchpad/gen-course.mjs — nicht von Hand editieren.
// Quelle: 01-agentur/Kurs/phase-*/index.html + lesson-*.html
// ${realCount} echte Lektionen, ${phases.reduce((a,p)=>a+p.itemsTotal,0)} Items geplant.

export type CourseItem = {
  num: string;
  itemId: string;
  title: string;
  tag: string;
  slug: string | null;
  available: boolean;
};
export type CourseModule = {
  id: string;
  title: string;
  count: string;
  items: CourseItem[];
};
export type CoursePhase = {
  phase: number;
  eyebrow: string;
  title: string;
  question: string;
  weeks: string;
  itemsTotal: number;
  lead: string;
  modules: CourseModule[];
};
export type Lesson = {
  slug: string;
  phase: number;
  itemId: string;
  eyebrow: string;
  title: string;
  summary: string;
  body: string;
  nextEyebrow: string | null;
  nextTitle: string | null;
};

`;

const body =
  "export const PHASES: CoursePhase[] = " + JSON.stringify(phases, null, 2) + ";\n\n" +
  "export const LESSONS: Lesson[] = " + JSON.stringify(lessons, null, 2) + ";\n\n" +
  `export const LESSON_BY_SLUG: Record<string, Lesson> = Object.fromEntries(
  LESSONS.map((l) => [l.slug, l]),
);

export function phaseBySlug(phase: number): CoursePhase | undefined {
  return PHASES.find((p) => p.phase === phase);
}
export function realLessonCount(phase: number): number {
  return LESSONS.filter((l) => l.phase === phase).length;
}
`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, header + body, "utf8");

console.log("Wrote", OUT);
console.log("Phases:", phases.map((p) => `${p.phase}:${p.title}(${p.modules.length}mod,${p.modules.reduce((a,m)=>a+m.items.length,0)}items)`).join("  "));
console.log("Lessons:", lessons.map((l) => `${l.phase}/${l.slug}[${l.itemId}]`).join("  "));
// sanity: any lesson body empty?
for (const l of lessons) if (!l.body || l.body.length < 50) console.log("!! SHORT BODY", l.slug, l.body?.length);
for (const l of lessons) if (!l.itemId) console.log("!! NO itemId", l.slug);
