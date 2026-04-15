import { legislacaoContent } from "@/lib/content";
import { ContentSection } from "@/components/teamonks/ContentSection";
import Link from "next/link";

export const metadata = { title: "Enquadramento PCD & Legislação — TEAMONKS" };

export default function LegislacaoPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/teamonks" className="text-sm text-[var(--color-muted)] hover:underline mb-6 block">
        ← Voltar ao início
      </Link>
      <header className="mb-8">
        <div className="text-4xl mb-3">⚖️</div>
        <h1 className="text-3xl font-bold">Enquadramento PCD & Legislação</h1>
        <p className="text-[var(--color-muted)] mt-2">
          Lei Berenice Piana, Lei de Cotas e passo a passo para enquadramento como PCD.
        </p>
      </header>
      <ContentSection items={legislacaoContent} />

      {/* Nota legal */}
      <div className="mt-8 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 text-sm text-amber-800 dark:text-amber-300">
        ⚠️ <strong>Nota:</strong> Este conteúdo é informativo e não substitui orientação jurídica especializada. Para dúvidas específicas sobre sua situação, consulte um advogado trabalhista.
      </div>
    </main>
  );
}
