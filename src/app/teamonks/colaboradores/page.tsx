import { colaboradoresContent, recursos } from "@/lib/content";
import { ContentSection } from "@/components/teamonks/ContentSection";
import Link from "next/link";

export const metadata = { title: "Colaboradores TEA — TEAMONKS" };

export default function ColaboradoresPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/teamonks" className="text-sm text-[var(--color-muted)] hover:underline mb-6 block">
        ← Voltar ao início
      </Link>
      <header className="mb-8">
        <div className="text-4xl mb-3">🤝</div>
        <h1 className="text-3xl font-bold">Colaboradores TEA</h1>
        <p className="text-[var(--color-muted)] mt-2">
          Carreira, direitos, acomodações razoáveis e recursos para profissionais TEA.
        </p>
      </header>
      <ContentSection items={colaboradoresContent} />

      {/* Recursos Externos */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">🔗 Recursos Externos</h2>
        <div className="grid gap-4">
          {recursos.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition"
            >
              <p className="font-medium text-[var(--color-primary)]">{r.title}</p>
              <p className="text-sm text-[var(--color-muted)] mt-1">{r.description}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
