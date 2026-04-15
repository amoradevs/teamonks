import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { AccessibilityControls } from "@/components/teamonks/AccessibilityControls";
import { ContactWidget } from "@/components/teamonks/ContactWidget";
import { SearchBar } from "@/components/teamonks/SearchBar";
import { FAQ } from "@/components/teamonks/FAQ";
import { PILLAR_META } from "@/lib/content";
import { PILLAR_ICONS } from "@/lib/icons";
import type { PillarId } from "@/lib/content";

const PILLARS: PillarId[] = ["lideranca", "colaboradores", "conhecimento", "legislacao"];

// Cores por pilar — fiel ao espectro autista
const PILLAR_COLORS: Record<PillarId, {
  bg: string; iconBg: string; iconColor: string;
  border: string; tag: string; arrow: string;
}> = {
  lideranca: {
    bg:        "hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-blue-50 dark:hover:shadow-blue-950/30",
    iconBg:    "bg-blue-50 dark:bg-blue-950/60",
    iconColor: "text-blue-600 dark:text-blue-400",
    border:    "border-slate-200 dark:border-slate-800",
    tag:       "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300",
    arrow:     "text-blue-500",
  },
  colaboradores: {
    bg:        "hover:border-green-300 dark:hover:border-green-700 hover:shadow-green-50 dark:hover:shadow-green-950/30",
    iconBg:    "bg-green-50 dark:bg-green-950/60",
    iconColor: "text-green-600 dark:text-green-400",
    border:    "border-slate-200 dark:border-slate-800",
    tag:       "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300",
    arrow:     "text-green-500",
  },
  conhecimento: {
    bg:        "hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-purple-50 dark:hover:shadow-purple-950/30",
    iconBg:    "bg-purple-50 dark:bg-purple-950/60",
    iconColor: "text-purple-600 dark:text-purple-400",
    border:    "border-slate-200 dark:border-slate-800",
    tag:       "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300",
    arrow:     "text-purple-500",
  },
  legislacao: {
    bg:        "hover:border-red-300 dark:hover:border-red-700 hover:shadow-red-50 dark:hover:shadow-red-950/30",
    iconBg:    "bg-red-50 dark:bg-red-950/60",
    iconColor: "text-red-600 dark:text-red-400",
    border:    "border-slate-200 dark:border-slate-800",
    tag:       "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300",
    arrow:     "text-red-500",
  },
};

const DOWNLOADS = [
  { title: "Guia do Gestor Inclusivo", description: "10 práticas para liderar equipes neurodivergentes.", href: "/downloads/guia-gestor-inclusivo" },
  { title: "Glossário TEA no Trabalho", description: "Termos fundamentais sobre neurodiversidade.", href: "/downloads/glossario-tea-trabalho" },
  { title: "Passo a Passo PCD", description: "Roteiro completo para enquadramento como PCD.", href: "/downloads/passo-a-passo-pcd" },
];


export default function TeamonksHome() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">

      {/* ── Barra arco-íris topo ── */}
      <div className="spectrum-bar" />

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <Link href="/teamonks" className="flex items-center select-none">
            <Image
              src="/teamonks-logo.png"
              alt="TEA.monks"
              width={120}
              height={36}
              className="h-8 w-auto object-contain dark:brightness-90"
              priority
            />
          </Link>
          <AccessibilityControls />
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10">

          {/* Texto */}
          <div className="flex-1 max-w-lg">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-4">
              TEA no ambiente corporativo
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white">
              Um jeito{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#dc2626 0%,#ea580c 25%,#d97706 50%,#16a34a 70%,#2563eb 85%,#7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                único,
              </span>
              <br />
              infinitas formas.
            </h1>
            <p className="mt-5 text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              Conhecimento profundo e prático sobre TEA para líderes, colaboradores e RH.
              Porque incluir começa por entender.
            </p>

            {/* Busca */}
            <div className="mt-7">
              <SearchBar />
            </div>
          </div>

          {/* Símbolo ∞ */}
          <div className="shrink-0 flex items-center justify-center w-48 sm:w-64">
            <Image
              src="/autism-symbol.png"
              alt="Símbolo do infinito do autismo"
              width={260}
              height={260}
              className="w-full h-auto drop-shadow-md"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Separador arco-íris ── */}
      <div className="max-w-5xl mx-auto px-6 mb-10">
        <div className="spectrum-bar" />
      </div>

      {/* ── Pilares ── */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-5">
          Explore por área
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PILLARS.map((id) => {
            const meta   = PILLAR_META[id];
            const colors = PILLAR_COLORS[id];
            const Icon   = PILLAR_ICONS[id];
            return (
              <Link
                key={id}
                href={`/teamonks/${id}`}
                className={`group flex items-start gap-4 p-5 rounded-2xl border bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-200 ${colors.border} ${colors.bg}`}
              >
                {/* Ícone */}
                <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center ${colors.iconBg}`}>
                  <Icon size={22} className={colors.iconColor} />
                </div>

                {/* Texto */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                    {meta.label}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {meta.description}
                  </p>
                </div>

                {/* Seta */}
                <ArrowRight
                  size={17}
                  className={`shrink-0 mt-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${colors.arrow}`}
                />
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-6 py-14">
          <FAQ />
        </div>
      </section>

      {/* ── Downloads ── */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="mb-7">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-1">
            Materiais
          </p>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Guias para Download
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Materiais prontos para reuniões, treinamentos e RH.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {DOWNLOADS.map((d, i) => {
            const colors = [
              { bar: "bg-blue-500",   icon: "text-blue-500",   ring: "ring-blue-100 dark:ring-blue-900" },
              { bar: "bg-purple-500", icon: "text-purple-500", ring: "ring-purple-100 dark:ring-purple-900" },
              { bar: "bg-green-500",  icon: "text-green-500",  ring: "ring-green-100 dark:ring-green-900" },
            ][i];
            return (
              <div
                key={d.href}
                className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow`}
              >
                {/* Barra de cor topo */}
                <div className={`h-1.5 ${colors.bar}`} />
                <div className="p-5 flex flex-col gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ring-4 ${colors.ring} bg-white dark:bg-slate-950`}>
                    <Download size={18} className={colors.icon} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">{d.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{d.description}</p>
                  </div>
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-center text-xs py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition font-medium"
                  >
                    Abrir / Salvar PDF
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-100 dark:border-slate-900">
        <div className="spectrum-bar" />
        <div className="max-w-5xl mx-auto px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span
              className="font-black"
              style={{
                background: "linear-gradient(90deg,#dc2626,#2563eb,#7c3aed)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >∞</span>
            <span>TEAMONKS © 2026</span>
          </div>
          <span>Conteúdo curado de APA, OMS, ASAN e Planalto.gov.br</span>
        </div>
      </footer>

      <ContactWidget />
    </div>
  );
}
