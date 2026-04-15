"use client";

import { conhecimentoContent, glossario } from "@/lib/content";
import { ContentSection } from "@/components/teamonks/ContentSection";
import { useState } from "react";
import Link from "next/link";

export default function ConhecimentoPage() {
  const [search, setSearch] = useState("");

  const filtered = glossario.filter(
    (g) =>
      g.term.toLowerCase().includes(search.toLowerCase()) ||
      g.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/teamonks" className="text-sm text-[var(--color-muted)] hover:underline mb-6 block">
        ← Voltar ao início
      </Link>
      <header className="mb-8">
        <div className="text-4xl mb-3">🔬</div>
        <h1 className="text-3xl font-bold">Conhecimento Geral</h1>
        <p className="text-[var(--color-muted)] mt-2">
          Base científica DSM-5, glossário interativo e desconstrução de mitos sobre TEA.
        </p>
      </header>

      <ContentSection items={conhecimentoContent} />

      {/* Glossário Interativo */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">📖 Glossário Interativo</h2>
        <input
          type="text"
          placeholder="Buscar termo (ex: stimming, masking...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />
        <div className="space-y-3">
          {filtered.map((g) => (
            <div
              key={g.term}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4"
            >
              <p className="font-semibold text-[var(--color-primary)]">{g.term}</p>
              <p className="text-sm text-[var(--color-muted)] mt-1">{g.definition}</p>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-[var(--color-muted)]">Nenhum termo encontrado.</p>
          )}
        </div>
      </section>
    </main>
  );
}
