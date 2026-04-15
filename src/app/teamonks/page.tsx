import { CategoryCard } from "@/components/teamonks/CategoryCard";
import { AccessibilityControls } from "@/components/teamonks/AccessibilityControls";
import { ContactWidget } from "@/components/teamonks/ContactWidget";

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

export default function TeamonksHome() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">TEAMONKS</h1>
          <p className="text-[var(--color-muted)] mt-1">
            TEA no ambiente corporativo — conhecimento, acolhimento e inclusão.
          </p>
        </div>
        <AccessibilityControls />
      </header>

      {/* Pilares */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PILLARS.map((pillar) => (
          <CategoryCard key={pillar.href} {...pillar} />
        ))}
      </section>

      {/* Ponto de Apoio */}
      <ContactWidget />
    </main>
  );
}
