"use client";

import { useState } from "react";

export function ContactWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[var(--color-primary)] text-white shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform z-50"
        aria-label="Ponto de Apoio — Contato"
      >
        💬
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-72 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-5 z-50">
          <h3 className="font-semibold text-base mb-2">Ponto de Apoio</h3>
          <p className="text-sm text-[var(--color-muted)] mb-4">
            Fale com o RH ou com nosso especialista em neurodiversidade.
          </p>
          <a
            href="mailto:rh@empresa.com"
            className="block text-center py-2 rounded-xl bg-[var(--color-primary)] text-white text-sm font-medium hover:opacity-90 transition"
          >
            Enviar e-mail para o RH
          </a>
        </div>
      )}
    </>
  );
}
