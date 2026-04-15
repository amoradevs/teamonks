"use client";
export default function GuiaGestorInclusivo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Print button — hidden on print */}
      <div className="print:hidden sticky top-0 z-10 bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
        <a href="/teamonks" className="text-sm text-slate-500 hover:text-slate-800 transition">← Voltar</a>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
        >
          Imprimir / Salvar como PDF
        </button>
      </div>

      {/* Document */}
      <div className="max-w-2xl mx-auto px-8 py-12 print:py-8 print:px-10">

        {/* Header */}
        <div className="mb-10 pb-6 border-b-4 border-blue-600">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">TEA.monks — Material para Gestores</p>
          <h1 className="text-3xl font-extrabold text-slate-900 leading-tight mb-3">
            Guia do Gestor Inclusivo
          </h1>
          <p className="text-base text-slate-500">
            10 práticas essenciais para liderar equipes com colaboradores neurodivergentes com eficiência e respeito.
          </p>
        </div>

        {/* Intro */}
        <p className="text-sm text-slate-600 leading-relaxed mb-10">
          Liderar uma equipe neurodivergente não exige formação em psicologia — exige clareza, previsibilidade e comunicação direta. As 10 práticas a seguir são concretas, aplicáveis imediatamente e fazem diferença real no dia a dia.
        </p>

        {/* Practices */}
        {[
          {
            n: "01",
            title: "Comunique com clareza e objetividade",
            body: "Instrua com comportamento específico, prazo real e formato esperado. Evite pedir 'melhoria de postura' ou 'mais proatividade' — esses termos são ambíguos e não chegam da mesma forma para pessoas com TEA. Em vez de 'melhore sua comunicação com o time', diga 'envie um resumo por escrito ao final de cada reunião de projeto'.",
          },
          {
            n: "02",
            title: "Dê feedback em formato BECC",
            body: "Use a estrutura: Comportamento específico → Efeito observável → Consequência clara → Caminho de melhoria. Coloque sempre por escrito após a conversa. Exemplo: 'Na segunda-feira você não enviou o relatório (comportamento). Isso impediu que a diretoria tomasse a decisão no prazo (consequência). Vamos combinar: toda sexta até 17h, ok?'",
          },
          {
            n: "03",
            title: "Antecipe mudanças com o máximo de antecedência",
            body: "Imprevistos têm custo cognitivo alto para pessoas com TEA. Mudanças de reunião, prioridade ou escopo comunicadas em cima da hora geram sobrecarga real. Quando inevitable, explique o motivo — o 'porquê' facilita a adaptação.",
          },
          {
            n: "04",
            title: "Formalize combinados por escrito",
            body: "Após conversas ou reuniões, envie um resumo com os pontos acordados, responsáveis e prazos. Isso reduz a ansiedade de 'será que entendi certo?' e cria uma referência objetiva para todos.",
          },
          {
            n: "05",
            title: "Respeite o modo de trabalho individual",
            body: "Colaboradores TEA frequentemente rendem mais em períodos de foco profundo sem interrupções. Se possível, ofereça blocos de trabalho sem reuniões, permita fone de ouvido, e não interprete isolamento como desinteresse — pode ser alta performance em andamento.",
          },
          {
            n: "06",
            title: "Pergunte sobre necessidades — não assuma",
            body: "Cada pessoa tem um perfil diferente. Pergunte diretamente: 'O que posso ajustar para te ajudar a render melhor?' Isso é mais eficiente do que tentar adivinhar. Registre as respostas e revisite periodicamente.",
          },
          {
            n: "07",
            title: "Reconheça e valorize o hiperfoco",
            body: "Quando um colaborador com TEA está engajado em uma tarefa de interesse, a qualidade e profundidade do trabalho pode ser excepcional. Identifique onde esse perfil se destaca e alinhe as atribuições. Hiperfoco não é teimosia — é competência em modo intenso.",
          },
          {
            n: "08",
            title: "Saiba identificar sinais de sobrecarga",
            body: "Irritabilidade, queda de produção, erros atípicos e afastamento social podem indicar sobrecarga cognitiva ou sensorial acumulada — não má vontade. Intervenha cedo: uma conversa privada e uma pausa estruturada evitam crises maiores.",
          },
          {
            n: "09",
            title: "Adapte o ambiente quando possível",
            body: "Iluminação intensa, ruído de escritório aberto e interrupções frequentes têm impacto real na concentração de pessoas com hipersensibilidade sensorial. Pequenas adaptações (lugar mais calmo, horários flexíveis, home office parcial) fazem diferença desproporcional.",
          },
          {
            n: "10",
            title: "Trate inclusão como prática, não como política",
            body: "Inclusão real não é um treinamento anual ou uma política escrita. É a soma de decisões cotidianas: como você dá feedback, como planeja reuniões, como reage a diferenças de estilo. O impacto vem do hábito, não do discurso.",
          },
        ].map((p) => (
          <div key={p.n} className="mb-8 flex gap-5">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-600 text-white text-xs font-black flex items-center justify-center">
              {p.n}
            </div>
            <div>
              <h2 className="font-bold text-slate-900 mb-1.5">{p.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{p.body}</p>
            </div>
          </div>
        ))}

        {/* Callout */}
        <div className="mt-10 p-5 rounded-xl bg-blue-50 border-l-4 border-blue-600">
          <p className="text-sm font-semibold text-blue-900 mb-1">Lembre-se</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            Nenhuma dessas práticas é exclusiva para colaboradores com TEA. Clareza, previsibilidade e comunicação direta melhoram o ambiente para <strong>toda</strong> a equipe. Inclusão eleva o padrão — não o abaixa.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400">
          <span>TEA.monks © 2026 — teamonks.vercel.app</span>
          <span>Conteúdo baseado em APA, ASAN e OMS</span>
        </div>
      </div>

      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>
    </div>
  );
}
