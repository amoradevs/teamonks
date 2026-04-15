"use client";

import { useState } from "react";
import { MessageCircle, X, Mail, Phone } from "lucide-react";

export function ContactWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-13 h-13 w-[52px] h-[52px] rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 flex items-center justify-center transition-all hover:scale-105 z-50"
        aria-label="Ponto de Apoio — Contato"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 w-72 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-5 z-50">
          <h3 className="font-semibold text-base text-slate-900 dark:text-slate-100 mb-1">
            Ponto de Apoio
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
            Fale com o RH ou com nosso especialista em neurodiversidade. Você não está sozinho.
          </p>
          <div className="space-y-2">
            <a
              href="mailto:rh@empresa.com"
              className="flex items-center gap-2.5 py-2.5 px-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition"
            >
              <Mail size={15} />
              E-mail para o RH
            </a>
            <a
              href="tel:+5500000000"
              className="flex items-center gap-2.5 py-2.5 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-600 transition"
            >
              <Phone size={15} />
              Ligar para o especialista
            </a>
          </div>
        </div>
      )}
    </>
  );
}
