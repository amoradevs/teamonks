import { CategoryCard } from "@/components/teamonks/CategoryCard";
import { AccessibilityControls } from "@/components/teamonks/AccessibilityControls";
import { ContactWidget } from "@/components/teamonks/ContactWidget";
import { SearchBar } from "@/components/teamonks/SearchBar";
import { FAQ } from "@/components/teamonks/FAQ";

const PILLARS = [
  {
    title: "Liderança & Gestão",
    description:
      "Guias de feedback, comunicação e boas práticas para liderar equipes neurodivergentes.",
    icon: "🧭",
    href: "/teamonks/lideranca",
    color: "indigo",
  },
  {
    title: "Colaboradores TEA",
    description:
      "Carreira, direitos, acomodações razoáveis e recursos externos para profissionais TEA.",
    icon: "🤝",
    href: "/teamonks/colaboradores",
    color: "violet",
  },
  {
    title: "Conhecimento Geral",
    description:
      "Base científica DSM-5, glossário interativo e desconstrução de mitos sobre TEA.",
    icon: "🔬",
    href: "/teamonks/conhecimento",
    color: "emerald",
  },
  {
    title: "Enquadramento PCD & Legislação",
    description:
      "Lei Berenice Piana, Lei de Cotas e passo a passo para enquadramento como PCD.",
    icon: "⚖️",
    href: "/teamonks/legislacao",
    color: "sky",
  },
];

const DOWNLOADS = [
  {
    title: "Guia do Gestor Inclusivo",
    description: "10 práticas essenciais para liderar colaboradores neurodivergentes.",
    icon: "📄",
    filename: "guia-gestor-inclusivo.pdf",
  },
  {
    title: "Glossário TEA no Trabalho",
    description: "Termos fundamentais sobre neurodiversidade para uso no dia a dia corporativo.",
    icon: "📋",
    filename: "glossario-tea-trabalho.pdf",
  },
  {
    title: "Passo a Passo PCD",
    description: "Roteiro completo para enquadramento como PCD na empresa.",
    icon: "📑",
    filename: "passo-a-passo-pcd.pdf",
  },
];

export default function TeamonksHome() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">TEAMONKS</h1>
          <p className="text-[var(--color-muted)] mt-1">
            TEA no ambiente corporativo — conhecimento, acolhimento e inclusão.
          </p>
        </div>
        <AccessibilityControls />
      </header>

      {/* Busca Global */}
      <div className="mb-10">
        <SearchBar />
      </div>

      {/* Pilares */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
        {PILLARS.map((pillar) => (
          <CategoryCard key={pillar.href} {...pillar} />
        ))}
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Downloadables */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-2">📥 Guias para Download</h2>
        <p className="text-[var(--color-muted)] text-sm mb-6">
          Materiais práticos para uso imediato em reuniões, treinamentos e processos de RH.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {DOWNLOADS.map((d) => (
            <div
              key={d.filename}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 flex flex-col gap-3"
            >
              <div className="text-3xl">{d.icon}</div>
              <div>
                <p className="font-semibold text-sm">{d.title}</p>
                <p className="text-xs text-[var(--color-muted)] mt-1">{d.description}</p>
              </div>
              <a
                href={`/downloads/${d.filename}`}
                className="mt-auto text-center text-xs py-2 rounded-xl border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition font-medium"
                aria-label={`Baixar ${d.title}`}
              >
                Baixar PDF
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Ponto de Apoio */}
      <ContactWidget />
    </main>
  );
}
