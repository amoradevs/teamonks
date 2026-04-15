"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, Send, Mail, Loader2 } from "lucide-react";

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
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "agent",
      text: "Olá! Eu sou o TEAGO, agente virtual sobre autismo. Pode me perguntar qualquer coisa sobre TEA — no trabalho, na vida ou sobre seus direitos.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
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
      {/* ── Botão flutuante — card quadrado completo ── */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir TEAGO — Agente Virtual"
          className="fixed bottom-6 right-6 z-50 group focus:outline-none"
        >
          {/* Balão de fala — aparece no hover */}
          <div className="absolute -top-10 right-0 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium px-3 py-1.5 rounded-2xl rounded-br-none shadow-lg border border-slate-200 dark:border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Olá! Posso te ajudar?
          </div>
          {/* Card quadrado — imagem completa sem corte */}
          <div className="relative w-[120px] h-[120px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white dark:border-slate-600 group-hover:scale-105 group-hover:shadow-blue-300/50 dark:group-hover:shadow-blue-800/50 transition-all duration-200">
            <Image
              src="/Agente_claro.png"
              alt="TEAGO — Agente Virtual"
              width={240}
              height={240}
              className="w-full h-full object-cover dark:hidden"
              priority
            />
            <Image
              src="/Agente_escuro.png"
              alt="TEAGO — Agente Virtual"
              width={240}
              height={240}
              className="w-full h-full object-cover hidden dark:block"
              priority
            />
            {/* Pulse online */}
            <span className="absolute top-2 right-2 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white" />
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
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 shrink-0">
            {/* Avatar quadrado — imagem completa */}
            <div className="w-11 h-11 rounded-xl overflow-hidden border-2 border-white/30 shrink-0">
              <Image
                src="/Agente_claro.png"
                alt="TEAGO"
                width={88}
                height={88}
                className="w-full h-full object-cover dark:hidden"
              />
              <Image
                src="/Agente_escuro.png"
                alt="TEAGO"
                width={88}
                height={88}
                className="w-full h-full object-cover hidden dark:block"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white leading-none">TEAGO</p>
              <p className="text-xs text-blue-200 mt-0.5">Agente virtual sobre autismo</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                <span className="text-xs text-blue-200">Online</span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition shrink-0"
              aria-label="Fechar TEAGO"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                {m.role === "agent" && (
                  <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 mr-2 mt-0.5 border border-slate-200 dark:border-slate-700">
                    <Image src="/Agente_claro.png" alt="TEAGO" width={32} height={32} className="w-full h-full object-cover dark:hidden" />
                    <Image src="/Agente_escuro.png" alt="TEAGO" width={32} height={32} className="w-full h-full object-cover hidden dark:block" />
                  </div>
                )}
                <div
                  className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-blue-600 text-white rounded-tr-sm"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 mr-2 mt-0.5 border border-slate-200 dark:border-slate-700">
                  <Image src="/Agente_claro.png" alt="TEAGO" width={32} height={32} className="w-full h-full object-cover dark:hidden" />
                  <Image src="/Agente_escuro.png" alt="TEAGO" width={32} height={32} className="w-full h-full object-cover hidden dark:block" />
                </div>
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
