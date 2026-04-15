"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqItems } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = ["Todos", ...Array.from(new Set(faqItems.map((f) => f.category)))];
  const filtered = activeCategory === "Todos" ? faqItems : faqItems.filter((f) => f.category === activeCategory);

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Perguntas Frequentes</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Respostas diretas para as dúvidas mais comuns.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition ${
              activeCategory === cat
                ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent"
                : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition"
              aria-expanded={open === i}
            >
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{item.question}</span>
              <span className="shrink-0 text-slate-400">
                {open === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
            </button>
            {open === i && (
              <div className="px-5 pb-4 pt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-700/30">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
