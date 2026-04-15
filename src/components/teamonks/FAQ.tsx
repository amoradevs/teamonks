"use client";

import { useState } from "react";
import { faqItems } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = ["Todos", ...Array.from(new Set(faqItems.map((f) => f.category)))];
  const filtered = activeCategory === "Todos" ? faqItems : faqItems.filter((f) => f.category === activeCategory);

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-2">❓ FAQ — Perguntas Frequentes</h2>
      <p className="text-[var(--color-muted)] text-sm mb-6">
        Respostas rápidas para as dúvidas mais comuns sobre TEA no trabalho.
      </p>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded-full text-sm border transition ${
              activeCategory === cat
                ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                : "border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="space-y-2">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition"
            >
              <span className="font-medium text-sm">{item.question}</span>
              <span className="ml-4 text-[var(--color-muted)] text-lg leading-none">
                {open === i ? "−" : "+"}
              </span>
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-sm text-[var(--color-muted)] leading-relaxed bg-slate-50 dark:bg-slate-800/50">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
