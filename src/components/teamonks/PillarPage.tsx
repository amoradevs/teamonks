"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp, ExternalLink, ArrowLeft, XCircle, CheckCircle } from "lucide-react";
import { AccessibilityControls } from "@/components/teamonks/AccessibilityControls";
import { getPillarCards, PILLAR_META, type PillarId, type ContentCard } from "@/lib/content";
import { CARD_ICONS, PILLAR_ICONS } from "@/lib/icons";

// ── Paleta do espectro por pilar ───────────────────────────────────────────────
const SPECTRUM: Record<PillarId, {
  solid: string; light: string; lightDark: string;
  border: string; borderDark: string;
  badge: string; ring: string; highlight: string;
  chip: string; chipActive: string;
}> = {
  lideranca: {
    solid:      "bg-blue-600",
    light:      "bg-blue-50",
    lightDark:  "dark:bg-blue-950/30",
    border:     "border-blue-100",
    borderDark: "dark:border-blue-900/50",
    badge:      "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300",
    ring:       "focus:ring-blue-400",
    highlight:  "bg-blue-50 dark:bg-blue-950/40 border-blue-300 dark:border-blue-700 text-blue-900 dark:text-blue-200",
    chip:       "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800",
    chipActive: "bg-blue-600 text-white border-blue-600",
  },
  colaboradores: {
    solid:      "bg-green-600",
    light:      "bg-green-50",
    lightDark:  "dark:bg-green-950/30",
    border:     "border-green-100",
    borderDark: "dark:border-green-900/50",
    badge:      "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300",
    ring:       "focus:ring-green-400",
    highlight:  "bg-green-50 dark:bg-green-950/40 border-green-300 dark:border-green-700 text-green-900 dark:text-green-200",
    chip:       "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800",
    chipActive: "bg-green-600 text-white border-green-600",
  },
  conhecimento: {
    solid:      "bg-purple-600",
    light:      "bg-purple-50",
    lightDark:  "dark:bg-purple-950/30",
    border:     "border-purple-100",
    borderDark: "dark:border-purple-900/50",
    badge:      "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300",
    ring:       "focus:ring-purple-400",
    highlight:  "bg-purple-50 dark:bg-purple-950/40 border-purple-300 dark:border-purple-700 text-purple-900 dark:text-purple-200",
    chip:       "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800",
    chipActive: "bg-purple-600 text-white border-purple-600",
  },
  legislacao: {
    solid:      "bg-red-600",
    light:      "bg-red-50",
    lightDark:  "dark:bg-red-950/30",
    border:     "border-red-100",
    borderDark: "dark:border-red-900/50",
    badge:      "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300",
    ring:       "focus:ring-red-400",
    highlight:  "bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-700 text-red-900 dark:text-red-200",
    chip:       "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800",
    chipActive: "bg-red-600 text-white border-red-600",
  },
};

// ── Seção de conteúdo ──────────────────────────────────────────────────────────
function CardSection({
  section,
  colors,
}: {
  section: ContentCard["sections"][number];
  colors: typeof SPECTRUM[PillarId];
}) {
  return (
    <div className="mt-5">
      {section.heading && (
        <h3 className="font-semibold text-sm mb-2 text-slate-900 dark:text-slate-100">
          {section.heading}
        </h3>
      )}
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
          {p}
        </p>
      ))}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="mt-2 space-y-2">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${colors.solid}`} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {section.myths && section.myths.length > 0 && (
        <ul className="mt-2 space-y-3">
          {section.myths.map((m, i) => (
            <li key={i} className="rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden text-sm">
              <div className="flex gap-2.5 items-start px-3 py-2 bg-red-50 dark:bg-red-950/20">
                <XCircle size={15} className="shrink-0 mt-0.5 text-red-500" />
                <span className="text-red-700 dark:text-red-300 leading-relaxed">{m.myth}</span>
              </div>
              <div className="flex gap-2.5 items-start px-3 py-2 bg-green-50 dark:bg-green-950/20">
                <CheckCircle size={15} className="shrink-0 mt-0.5 text-green-600" />
                <span className="text-green-800 dark:text-green-300 leading-relaxed">{m.truth}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
      {section.highlight && (
        <div className={`mt-3 px-4 py-3 rounded-xl border-l-4 text-sm leading-relaxed ${colors.highlight}`}>
          {section.highlight}
        </div>
      )}
      {section.note && (
        <p className="mt-3 text-xs text-slate-400 dark:text-slate-500 italic leading-relaxed">
          {section.note}
        </p>
      )}
    </div>
  );
}

// ── Card expansível ────────────────────────────────────────────────────────────
function ContentCardItem({ card, colors }: { card: ContentCard; colors: typeof SPECTRUM[PillarId] }) {
  const [open, setOpen] = useState(false);
  const Icon = CARD_ICONS[card.id];

  return (
    <article
      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
        open
          ? `${colors.light} ${colors.lightDark} ${colors.border} ${colors.borderDark}`
          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
      }`}
    >
      {/* Cabeçalho */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 flex gap-4 items-start hover:bg-slate-50 dark:hover:bg-slate-800/60 transition group"
        aria-expanded={open}
      >
        {/* Ícone Lucide */}
        {Icon && (
          <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${colors.light} ${colors.lightDark}`}>
            <Icon size={20} className={`${colors.solid.replace("bg-", "text-")}`} />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-slate-900 dark:text-slate-100 leading-snug">
            {card.title}
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{card.subtitle}</p>
          {!open && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed line-clamp-2">
              {card.summary}
            </p>
          )}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {card.tags.map((tag) => (
              <span key={tag} className={`text-xs px-2 py-0.5 rounded-full font-medium ${colors.badge}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <span className="shrink-0 mt-1 text-slate-400 dark:text-slate-600 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition">
          {open ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
        </span>
      </button>

      {/* Conteúdo expandido */}
      {open && (
        <div className="px-5 pb-6 border-t border-slate-200/60 dark:border-slate-700/30">
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-4 leading-relaxed font-medium">
            {card.summary}
          </p>

          {card.sections.map((section, i) => (
            <CardSection key={i} section={section} colors={colors} />
          ))}

          {/* Fontes */}
          {card.sources && card.sources.length > 0 && (
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Fontes & Leitura Recomendada
              </p>
              <ul className="space-y-1.5">
                {card.sources.map((src, i) => (
                  <li key={i}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs ${colors.solid.replace("bg-", "text-")} hover:underline`}
                    >
                      <ExternalLink size={10} />
                      {src.label}
                      <span className="text-slate-400">— {src.org}</span>
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

// ── Página de Pilar ────────────────────────────────────────────────────────────
export function PillarPage({ pillar }: { pillar: PillarId }) {
  const meta   = PILLAR_META[pillar];
  const colors = SPECTRUM[pillar];
  const cards  = getPillarCards(pillar);
  const PillarIcon = PILLAR_ICONS[pillar];

  const allTags = ["Todos", ...Array.from(new Set(cards.flatMap((c) => c.tags)))];
  const [activeTag, setActiveTag] = useState("Todos");
  const filtered = activeTag === "Todos" ? cards : cards.filter((c) => c.tags.includes(activeTag));

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Barra arco-íris */}
      <div className="spectrum-bar" />

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <Link href="/teamonks" className="inline-flex items-center gap-2 group">
            <ArrowLeft size={13} className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition" />
            <Image
              src="/teamonks-logo.png"
              alt="TEA.monks"
              width={96}
              height={28}
              className="h-6 w-auto object-contain dark:brightness-90 opacity-70 group-hover:opacity-100 transition"
            />
          </Link>
          <AccessibilityControls />
        </div>
      </nav>

      {/* Hero do pilar */}
      <div className={`${colors.light} ${colors.lightDark} border-b ${colors.border} ${colors.borderDark} py-10 px-6`}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${colors.light} ${colors.lightDark} border ${colors.border}`}>
              {PillarIcon && (
                <PillarIcon size={28} className={colors.solid.replace("bg-", "text-")} />
              )}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
                {meta.label}
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{meta.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros + Cards */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-7">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition focus:outline-none focus:ring-2 ${colors.ring} ${
                activeTag === tag ? colors.chipActive : colors.chip
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="space-y-3">
          {filtered.map((card) => (
            <ContentCardItem key={card.id} card={card} colors={colors} />
          ))}
        </div>
      </div>
    </div>
  );
}
