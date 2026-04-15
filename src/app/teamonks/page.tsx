import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { AccessibilityControls } from "@/components/teamonks/AccessibilityControls";
import { ContactWidget } from "@/components/teamonks/ContactWidget";
import { SearchBar } from "@/components/teamonks/SearchBar";
import { FAQ } from "@/components/teamonks/FAQ";
import { PILLAR_META } from "@/lib/content";
import type { PillarId } from "@/lib/content";

const PILLARS: PillarId[] = ["lideranca", "colaboradores", "conhecimento", "legislacao"];

const COLOR_MAP = {
  indigo: {
    card: "hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-indigo-50 dark:hover:shadow-indigo-950/20",
    icon: "bg-indigo-50 dark:bg-indigo-950/50",
    arrow: "text-indigo-500",
  },
  violet: {
    card: "hover:border-violet-200 dark:hover:border-violet-800 hover:shadow-violet-50 dark:hover:shadow-violet-950/20",
    icon: "bg-violet-50 dark:bg-violet-950/50",
    arrow: "text-violet-500",
  },
  emerald: {
    card: "hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-emerald-50 dark:hover:shadow-emerald-950/20",
    icon: "bg-emerald-50 dark:bg-emerald-950/50",
    arrow: "text-emerald-500",
  },
  amber: {
    card: "hover:border-amber-200 dark:hover:border-amber-800 hover:shadow-amber-50 dark:hover:shadow-amber-950/20",
    icon: "bg-amber-50 dark:bg-amber-950/50",
    arrow: "text-amber-500",
  },
};

const DOWNLOADS = [
  {
    title: "Guia do Gestor Inclusivo",
    description: "10 práticas essenciais para liderar equipes neurodivergentes.",
    icon: "📄",
    filename: "guia-gestor-inclusivo.pdf",
  },
  {
    title: "Glossário TEA no Trabalho",
    description: "Termos fundamentais para uso no dia a dia corporativo.",
    icon: "📋",
    filename: "glossario-tea-trabalho.pdf",
  },
  {
    title: "Passo a Passo PCD",
    description: "Roteiro completo para enquadramento como PCD.",
    icon: "📑",
    filename: "passo-a-passo-pcd.pdf",
  },
];

export default function TeamonksHome() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-bold text-base tracking-tight">TEAMONKS</span>
          <AccessibilityControls />
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="max-w-5xl mx-auto px-6 pt-14 pb-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-3 py-1 rounded-full mb-5">
            🧠 TEA no ambiente corporativo
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            Incluir começa por{" "}
            <span className="text-indigo-600 dark:text-indigo-400">entender.</span>
          </h1>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
            Conhecimento profundo e prático sobre TEA para líderes, colaboradores e RH. Cada pessoa no espectro é única — aqui você aprende a respeitar isso.
          </p>
        </div>

        {/* Busca */}
        <div className="mt-8 max-w-xl">
          <SearchBar />
        </div>
      </section>

      {/* ── Pilares ── */}
      <section className="max-w-5xl mx-auto px-6 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PILLARS.map((id) => {
            const meta = PILLAR_META[id];
            const colors = COLOR_MAP[meta.color as keyof typeof COLOR_MAP];
            return (
              <Link
                key={id}
                href={`/teamonks/${id}`}
                className={`group flex items-start gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 hover:shadow-lg transition-all duration-200 ${colors.card}`}
              >
                <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-2xl ${colors.icon}`}>
                  {meta.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                    {meta.label}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {meta.description}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className={`shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity ${colors.arrow}`}
                />
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Divisor ── */}
      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-slate-100 dark:border-slate-800" />
      </div>

      {/* ── FAQ ── */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <FAQ />
      </section>

      {/* ── Downloads ── */}
      <section className="bg-slate-50 dark:bg-slate-800/30 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="mb-6">
            <h2 className="text-xl font-bold">Guias para Download</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Materiais práticos para reuniões, treinamentos e processos de RH.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {DOWNLOADS.map((d) => (
              <div
                key={d.filename}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 flex flex-col gap-4"
              >
                <span className="text-3xl">{d.icon}</span>
                <div>
                  <p className="font-semibold text-sm">{d.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{d.description}</p>
                </div>
                <a
                  href={`/downloads/${d.filename}`}
                  className="mt-auto inline-flex items-center justify-center gap-2 text-xs py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition font-medium"
                  aria-label={`Baixar ${d.title}`}
                >
                  <Download size={13} />
                  Baixar PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <span>© 2026 TEAMONKS — Conhecimento e Inclusão</span>
        <span>Conteúdo curado de APA, OMS, ASAN, Planalto.gov.br e UNESP</span>
      </footer>

      <ContactWidget />
    </div>
  );
}
