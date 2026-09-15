"use client";
export default function CartilhaNeurodiversidade() {
  const conceitos = [
    {
      term: "Deficiência oculta",
      def: "Condições que não são prontamente perceptíveis — como autismo, surdez, deficiências cognitivas e fibromialgia. A Lei 14.624/2023 formaliza o uso facultativo do cordão de girassóis para facilitar a identificação dessas pessoas, sem dispensar a apresentação de laudo quando solicitado para fins não discriminatórios.",
    },
    {
      term: "Neurodiversidade",
      def: "Termo que reconhece a singularidade de cada pessoa nas formas de processar e transmitir informações neurais. A diferenciação surge quando comparamos comportamentos a um padrão típico — o que foge desse padrão é chamado de neurodivergência ou neuroatipicidade.",
    },
    {
      term: "Capacitismo",
      def: "Discriminação social contra pessoas com deficiência, enraizada na ideia de um padrão corporal 'normal'. Engloba preconceito, opressão ativa e passiva, e a subestimação de capacidades por causa da deficiência.",
    },
    {
      term: "Tokenismo",
      def: "Reduzir uma pessoa a um símbolo de um grupo minorizado, usado como resposta superficial a acusações de discriminação. Evite colocar uma pessoa neurodivergente como 'educadora do tema' ou porta-voz obrigatória de sua condição.",
    },
    {
      term: "Interseccionalidade",
      def: "As experiências de uma pessoa neurodivergente se cruzam com outras camadas de identidade (gênero, raça, classe). Isso influencia como ela se comunica, é avaliada e se integra socialmente — exigindo uma liderança sensível ao contexto individual.",
    },
  ];

  const praticas = [
    {
      n: "01",
      title: "Não justifique avaliações com base na deficiência",
      body: "Não use uma característica ligada à neurodivergência (como hiperfoco) como motivo de desligamento. Avalie com base no escopo real do cargo e assuma a intenção positiva por trás do comportamento.",
    },
    {
      n: "02",
      title: "Avalie com objetividade, sem julgamentos",
      body: "Baseie-se em escopo de trabalho, entregas e combinados feitos previamente com a pessoa. Leve em conta diferenças culturais, confiança e estilo de comunicação — e crie espaço para que a pessoa compartilhe seu contexto.",
    },
    {
      n: "03",
      title: "Não compare pessoas entre si",
      body: "Considere a trajetória individual, tempo de empresa, cargo e oportunidades de desenvolvimento disponíveis. Desempenho não é comparável entre pessoas com pontos de partida diferentes.",
    },
    {
      n: "04",
      title: "Reconheça e questione seus próprios vieses",
      body: "Converse com as pessoas que você lidera sem ressaltar diagnósticos. Busque entender a situação individual em vez de assumir estereótipos ligados à neurodivergência.",
    },
    {
      n: "05",
      title: "Respeite a diversidade de preferências",
      body: "Evite regras generalizadas para todo o time. Permita pausas, ajustes de ambiente e não force a participação em rituais sociais extra-trabalho quando a pessoa sinalizar desconforto.",
    },
    {
      n: "06",
      title: "Individualize os parâmetros de acompanhamento",
      body: "Adapte ferramentas visuais, formatos de feedback e frequência de acompanhamento conforme a pessoa — não existe modelo único que funcione para todo o time.",
    },
    {
      n: "07",
      title: "Não exponha nem generalize vivências",
      body: "Ao compartilhar experiências de liderança com outras lideranças, faça isso com responsabilidade, sem expor a pessoa ou usar sua vivência como exemplo genérico de 'como é liderar alguém neurodivergente'.",
    },
    {
      n: "08",
      title: "Não julgue formas de expressão individual",
      body: "Uso de abafadores de ruído, óculos escuros ou roupas confortáveis em reuniões são formas legítimas de autorregulação, desde que compatíveis com o ambiente de trabalho.",
    },
    {
      n: "09",
      title: "Respeite os limites da sua atuação",
      body: "Questões sobre medicação e tratamento são entre a pessoa e seu profissional de saúde. Cabe à liderança incentivar o acompanhamento, flexibilizar horários quando necessário e manter o foco em comportamento e desempenho no trabalho.",
    },
    {
      n: "10",
      title: "Explicite os canais de apoio disponíveis",
      body: "Se alguém sinalizar suspeita de diagnóstico em um 1:1, indique os canais internos de apoio (BP, People Experience). Ninguém pode exigir a apresentação de laudo, mas compartilhar o diagnóstico, quando a pessoa optar por isso, ajuda a identificar as melhores ferramentas de suporte.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Print button — hidden on print */}
      <div className="print:hidden sticky top-0 z-10 bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
        <a href="/teamonks" className="text-sm text-slate-500 hover:text-slate-800 transition">← Voltar</a>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 rounded-lg bg-orange-600 text-white text-sm font-semibold hover:bg-orange-700 transition"
        >
          Imprimir / Salvar como PDF
        </button>
      </div>

      {/* Document */}
      <div className="max-w-2xl mx-auto px-8 py-12 print:py-8 print:px-10">

        {/* Header */}
        <div className="mb-10 pb-6 border-b-4 border-orange-600">
          <p className="text-xs font-bold tracking-widest uppercase text-orange-600 mb-2">TEA.monks — Cartilha para Lideranças</p>
          <h1 className="text-3xl font-extrabold text-slate-900 leading-tight mb-3">
            Redefinindo Perspectivas
          </h1>
          <p className="text-base text-slate-500">
            Uma cartilha sobre neurodiversidade: conceitos essenciais, boas práticas de avaliação e o papel da liderança na construção de um ambiente inclusivo.
          </p>
        </div>

        {/* Intro */}
        <p className="text-sm text-slate-600 leading-relaxed mb-10">
          Nenhuma dica deste material deve ser entendida como &ldquo;receita&rdquo; — a adaptação e o bom funcionamento só acontecem com individualização e troca real entre liderança e pessoa liderada. O objetivo aqui é dar um ponto de partida conceitual e prático para guiar essa conversa.
        </p>

        {/* Conceitos */}
        <h2 className="text-lg font-bold text-slate-900 mb-4">Conceitos essenciais</h2>
        <div className="space-y-5 mb-10">
          {conceitos.map((c) => (
            <div key={c.term} className="border-l-2 border-orange-300 pl-4">
              <p className="font-semibold text-slate-900 text-sm mb-1">{c.term}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{c.def}</p>
            </div>
          ))}
        </div>

        {/* Práticas */}
        <h2 className="text-lg font-bold text-slate-900 mb-4">O que evitar (e o que fazer) na avaliação de desempenho</h2>
        {praticas.map((p) => (
          <div key={p.n} className="mb-8 flex gap-5">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-600 text-white text-xs font-black flex items-center justify-center">
              {p.n}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1.5">{p.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{p.body}</p>
            </div>
          </div>
        ))}

        {/* Callout */}
        <div className="mt-10 p-5 rounded-xl bg-orange-50 border-l-4 border-orange-600">
          <p className="text-sm font-semibold text-orange-900 mb-1">Por que isso importa</p>
          <p className="text-sm text-orange-800 leading-relaxed">
            Segundo a pesquisa &ldquo;Diversity Matters&rdquo; (McKinsey, 2015), a diversidade não apenas melhora a satisfação e reduz conflitos entre grupos — também impulsiona inovação e qualidade na tomada de decisão. Liderança inclusiva é o que converte essa diversidade em resultado real.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400">
          <span>TEA.monks © 2026 — teamonks.vercel.app</span>
          <span>Baseado na cartilha People Experience Brazil, Media.Monks (2023)</span>
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
