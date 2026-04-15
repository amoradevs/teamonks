"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { searchCards, PILLAR_META } from "@/lib/content";
import { CARD_ICONS } from "@/lib/icons";
import type { ContentCard } from "@/lib/content";
import Link from "next/link";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ContentCard[]>([]);
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
    setResults(searchCards(q));
    setOpen(q.length > 1);
  };

  return (
    <div ref={ref} className="relative w-full">
      <div className="relative flex items-center">
        <Search size={16} className="absolute left-4 text-slate-400 pointer-events-none" />
        <input
          type="text"
          placeholder="Buscar em todo o TEAMONKS — ex: feedback, meltdown, cota..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => query.length > 1 && setOpen(true)}
          className="w-full pl-10 pr-10 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm transition"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setResults([]); setOpen(false); }}
            className="absolute right-4 text-slate-400 hover:text-slate-600 transition"
            aria-label="Limpar busca"
          >
            <X size={15} />
          </button>
        )}
      </div>

      {open && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl z-50 max-h-80 overflow-y-auto">
          {results.length === 0 ? (
            <p className="text-sm text-slate-400 p-5 text-center">
              Nenhum resultado para &ldquo;{query}&rdquo;
            </p>
          ) : (
            <ul>
              {results.map((card) => (
                <li key={card.id} className="border-b border-slate-100 dark:border-slate-700 last:border-0">
                  <Link
                    href={`/teamonks/${card.pillar}`}
                    onClick={() => { setOpen(false); setQuery(""); }}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
                  >
                    {(() => { const Icon = CARD_ICONS[card.id]; return Icon ? <Icon size={18} className="shrink-0 mt-0.5 text-slate-400" /> : null; })()}
                    <div>
                      <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{card.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{PILLAR_META[card.pillar].label}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
