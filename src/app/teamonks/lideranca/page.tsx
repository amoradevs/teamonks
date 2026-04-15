import { liderancaContent } from "@/lib/content";
import { ContentSection } from "@/components/teamonks/ContentSection";
import Link from "next/link";

export const metadata = { title: "Liderança & Gestão — TEAMONKS" };

export default function LiderancaPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/teamonks" className="text-sm text-[var(--color-muted)] hover:underline mb-6 block">
        ← Voltar ao início
      </Link>
      <header className="mb-8">
        <div className="text-4xl mb-3">🧭</div>
        <h1 className="text-3xl font-bold">Liderança & Gestão</h1>
        <p className="text-[var(--color-muted)] mt-2">
          Guias práticos para liderar equipes neurodivergentes com eficácia e inclusão.
        </p>
      </header>
      <ContentSection items={liderancaContent} />
    </main>
  );
}
