"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, Send, Mail, Copy, Check } from "lucide-react";

interface Message {
  role: "user" | "agent";
  text: string;
}

const SUGGESTED = [
  "O que é masking?",
  "Como dar feedback para alguém com TEA?",
  "O que é burnout autista?",
  "TEA em mulheres — por que é diferente?",
  "Quais são meus direitos como PCD?",
];

export function ContactWidget() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "agent",
      text: "Olá! Eu sou o TEAGO, agente virtual sobre autismo. Pode me perguntar qualquer coisa sobre TEA — no trabalho, na vida ou sobre seus direitos.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyMessage = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [open, messages]);

  const send = async (text: string) => {
    const userMsg = text.trim();
    if (!userMsg || loading) return;
    setInput("");

    const history = messages
      .slice(1)
      .map((m) => ({ role: m.role === "user" ? "user" : "assistant", text: m.text }));

    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch("/api/teago", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, history }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "agent", text: data.reply ?? data.error ?? "Erro ao obter resposta." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "agent", text: "Não consegui conectar. Verifique sua conexão e tente novamente." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ── Botão flutuante — card com zoom no hover ── */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir TEAGO — Agente Virtual"
          className="fixed bottom-6 right-6 z-50 group focus:outline-none"
        >
          {/* Card normal */}
          <div className="relative w-[110px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white dark:border-slate-600 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
            <Image src="/Agente_claro.png" alt="TEAGO" width={220} height={220} className="w-full h-auto block dark:hidden" priority />
            <Image src="/Agente_escuro.png" alt="TEAGO" width={220} height={220} className="w-full h-auto block hidden dark:block" priority />
            <span className="absolute top-2 right-2 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white" />
            </span>
          </div>

          {/* Card ampliado no hover */}
          <div className="absolute bottom-0 right-0 w-[220px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white dark:border-slate-500 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-bottom-right pointer-events-none">
            <Image src="/Agente_claro.png" alt="TEAGO" width={440} height={440} className="w-full h-auto block dark:hidden" priority />
            <Image src="/Agente_escuro.png" alt="TEAGO" width={440} height={440} className="w-full h-auto block hidden dark:block" priority />
            <span className="absolute top-3 right-3 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-white" />
            </span>
          </div>


        </button>
      )}

      {/* ── Painel de chat ── */}
      {open && (
        <div
          className="fixed bottom-6 right-6 z-50 w-[340px] sm:w-[380px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden"
          style={{ maxHeight: "calc(100svh - 5rem)" }}
        >
          {/* Header — limpo e direto */}
          <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 shrink-0">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden shrink-0">
              <Image src="/Agente_claro.png" alt="TEAGO" fill className="object-contain dark:opacity-0 transition-opacity duration-200" />
              <Image src="/Agente_escuro.png" alt="TEAGO" fill className="object-contain opacity-0 dark:opacity-100 transition-opacity duration-200" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white leading-none">TEAGO</p>
              <p className="text-xs text-blue-200 mt-0.5">Agente virtual sobre autismo</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition shrink-0"
              aria-label="Fechar"
            >
              <X size={14} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}>
                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-blue-600 text-white rounded-tr-sm"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-tl-sm"
                  }`}
                >
                  {m.text}
                </div>
                {m.role === "agent" && i > 0 && (
                  <button
                    onClick={() => copyMessage(m.text, i)}
                    className="mt-1.5 flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition text-xs"
                    aria-label="Copiar resposta"
                  >
                    {copiedIndex === i
                      ? <><Check size={11} className="text-green-500" /><span className="text-green-500">Copiado!</span></>
                      : <><Copy size={11} /><span>Copiar</span></>
                    }
                  </button>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            {/* Sugestões — só na primeira abertura */}
            {messages.length === 1 && !loading && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {SUGGESTED.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-xs px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/30 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Contato RH — fixo */}
          <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800 shrink-0">
            <a
              href="mailto:thays.silva@monks.com"
              className="flex items-center gap-2.5 py-2 px-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition w-full"
            >
              <Mail size={13} />
              <span>Falar com RH ou especialista em neurodiversidade</span>
            </a>
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="px-3 py-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pergunte ao TEAGO..."
              disabled={loading}
              className="flex-1 text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 transition"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white flex items-center justify-center transition shrink-0"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
