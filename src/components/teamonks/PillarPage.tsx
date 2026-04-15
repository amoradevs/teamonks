"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, ExternalLink, ArrowLeft } from "lucide-react";
import { getPillarCards, PILLAR_META, type PillarId, type ContentCard } from "@/lib/content";

// ─── Seção de conteúdo ───────────────────────────────────────────────────────
function CardSection({ section }: { section: ContentCard["sections"][number] }) {
  return (
    <div className="mt-5">
      {section.heading && (
        <h3 className="font-semibold text-base mb-2 text-slate-900 dark:text-slate-100">
          {section.heading}
        </h3>
      )}
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
          {p}
        </p>
      ))}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="mt-2 space-y-1.5">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 dark:bg-indigo-500" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {section.highlight && (
        <div className="mt-3 px-4 py-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border-l-4 border-indigo-400 text-sm text-indigo-900 dark:text-indigo-200 leading-relaxed">
          {section.highlight}
        </div>
      )}
      {section.note && (
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 italic leading-relaxed">
          {section.note}
        </p>
      )}
    </div>
  );
}

// ─── Card expandível ─────────────────────────────────────────────────────────
function ContentCardItem({ card, color }: { card: ContentCard; color: string }) {
  const [open, setOpen] = useState(false);

  const colorMap: Record<string, string> = {
    indigo: "bg-indigo-50 dark:bg-indigo-950/30 border-indigo-100 dark:border-indigo-900",
    violet: "bg-violet-50 dark:bg-violet-950/30 border-violet-100 dark:border-violet-900",
    emerald: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900",
    amber: "bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900",
  };

  const badgeMap: Record<string, string> = {
    indigo: "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300",
    violet: "bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300",
    emerald: "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300",
    amber: "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300",
  };

  return (
    <article
      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
        open ? colorMap[color] : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
      }`}
    >
      {/* Header do card */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 flex gap-4 items-start hover:bg-slate-50 dark:hover:bg-slate-700/50 transition group"
        aria-expanded={open}
      >
        <span className="text-3xl shrink-0 mt-0.5">{card.icon}</span>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-base text-slate-900 dark:text-slate-100 leading-snug">
            {card.title}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{card.subtitle}</p>
          {!open && (
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed line-clamp-2">
              {card.summary}
            </p>
          )}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${badgeMap[color]}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="shrink-0 mt-1 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition">
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>

      {/* Conteúdo expandido */}
      {open && (
        <div className="px-5 pb-6 border-t border-slate-100 dark:border-slate-700/50">
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-4 leading-relaxed font-medium">
            {card.summary}
          </p>
          {card.sections.map((section, i) => (
            <CardSection key={i} section={section} />
          ))}

          {/* Fontes */}
          {card.sources && card.sources.length > 0 && (
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                Fontes & Leitura Recomendada
              </p>
              <ul className="space-y-1.5">
                {card.sources.map((src, i) => (
                  <li key={i}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      <ExternalLink size={11} />
                      {src.label} — <span className="text-slate-400">{src.org}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

// ─── PillarPage principal ─────────────────────────────────────────────────────
export function PillarPage({ pillar }: { pillar: PillarId }) {
  const meta = PILLAR_META[pillar];
  const cards = getPillarCards(pillar);
  const allTags = ["Todos", ...Array.from(new Set(cards.flatMap((c) => c.tags)))];
  const [activeTag, setActiveTag] = useState("Todos");

  const filtered = activeTag === "Todos" ? cards : cards.filter((c) => c.tags.includes(activeTag));

  const colorRing: Record<string, string> = {
    indigo: "ring-indigo-400",
    violet: "ring-violet-400",
    emerald: "ring-emerald-400",
    amber: "ring-amber-400",
  };

  const colorActive: Record<string, string> = {
    indigo: "bg-indigo-600 text-white",
    violet: "bg-violet-600 text-white",
    emerald: "bg-emerald-600 text-white",
    amber: "bg-amber-600 text-white",
  };

  const colorHero: Record<string, string> = {
    indigo: "from-indigo-50 to-white dark:from-indigo-950/20 dark:to-slate-900",
    violet: "from-violet-50 to-white dark:from-violet-950/20 dark:to-slate-900",
    emerald: "from-emerald-50 to-white dark:from-emerald-950/20 dark:to-slate-900",
    amber: "from-amber-50 to-white dark:from-amber-950/20 dark:to-slate-900",
  };

  return (
    <main className="min-h-screen">
      {/* Hero do pilar */}
      <div className={`bg-gradient-to-b ${colorHero[meta.color]} py-10 px-6`}>
        <div className="max-w-3xl mx-auto">
          <Link
            href="/teamonks"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 mb-6 transition"
          >
            <ArrowLeft size={14} />
            Voltar ao início
          </Link>
          <div className="flex items-center gap-4 mb-3">
            <span className="text-5xl">{meta.icon}</span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
                {meta.label}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{meta.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros + Cards */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition focus:outline-none focus:ring-2 ${colorRing[meta.color]} ${
                activeTag === tag
                  ? colorActive[meta.color]
                  : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-400"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {filtered.map((card) => (
            <ContentCardItem key={card.id} card={card} color={meta.color} />
          ))}
        </div>
      </div>
    </main>
  );
}
