"use client";

import { useState, useRef, useEffect } from "react";
import { searchContent } from "@/lib/content";
import type { ContentItem } from "@/lib/content";
import Link from "next/link";

const PILLAR_LABELS: Record<ContentItem["pillar"], string> = {
  lideranca: "Liderança & Gestão",
  colaboradores: "Colaboradores TEA",
  conhecimento: "Conhecimento Geral",
  legislacao: "Enquadramento PCD",
};

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ContentItem[]>([]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSearch = (q: string) => {
    setQuery(q);
    const res = searchContent(q);
    setResults(res);
    setOpen(q.length > 1);
  };

  return (
    <div ref={ref} className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]">🔍</span>
        <input
          type="text"
          placeholder="Buscar em todo o TEAMONKS..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => query.length > 1 && setOpen(true)}
          className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] shadow-sm"
        />
      </div>

      {open && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl z-50 max-h-80 overflow-y-auto">
          {results.length === 0 ? (
            <p className="text-sm text-[var(--color-muted)] p-4 text-center">
              Nenhum resultado para &quot;{query}&quot;
            </p>
          ) : (
            results.map((item) => (
              <Link
                key={item.id}
                href={`/teamonks/${item.pillar}`}
                onClick={() => { setOpen(false); setQuery(""); }}
                className="flex flex-col px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition border-b border-slate-100 dark:border-slate-700 last:border-0"
              >
                <span className="font-medium text-sm">{item.title}</span>
                <span className="text-xs text-[var(--color-muted)] mt-0.5">
                  {PILLAR_LABELS[item.pillar]}
                </span>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
