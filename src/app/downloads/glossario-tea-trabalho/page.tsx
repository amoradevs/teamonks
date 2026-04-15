"use client";
export default function GlossarioTEA() {
  const terms = [
    {
      term: "TEA — Transtorno do Espectro Autista",
      def: "Condição neurológica do desenvolvimento caracterizada por diferenças na comunicação social e padrões de comportamento restritos ou repetitivos. Não é doença — é uma forma diferente de processar o mundo.",
    },
    {
      term: "Espectro",
      def: "O autismo é chamado de 'espectro' porque se manifesta de formas muito diferentes em cada pessoa. Não existe um único perfil de autista — o espectro abrange desde pessoas com alta necessidade de suporte até pessoas com funcionamento muito independente.",
    },
    {
      term: "Neurodivergência / Neurodivergente",
      def: "Termo que descreve pessoas cujo desenvolvimento neurológico é atípico, incluindo TEA, TDAH, dislexia, entre outros. Neurotípico é o oposto: desenvolvimento considerado padrão pela maioria.",
    },
    {
      term: "Masking (Camuflagem Social)",
      def: "Processo pelo qual pessoas com TEA imitam comportamentos sociais esperados para parecer neurotípicas. Exige enorme esforço cognitivo e emocional, e é mais comum em mulheres. O masking prolongado leva ao burnout autista.",
    },
    {
      term: "Hiperfoco",
      def: "Capacidade de concentração intensa e prolongada em um tema ou tarefa de alto interesse. No trabalho, pode resultar em produtividade e profundidade excepcionais quando alinhado às atribuições corretas.",
    },
    {
      term: "Hipersensibilidade Sensorial",
      def: "Processamento amplificado de estímulos do ambiente: barulho, luz, cheiros, texturas e temperatura. O que parece normal para a maioria pode ser genuinamente doloroso ou perturbador para uma pessoa com TEA.",
    },
    {
      term: "Função Executiva",
      def: "Conjunto de habilidades cognitivas que inclui planejamento, organização, início de tarefas, controle emocional e memória de trabalho. Pessoas com TEA podem ter função executiva atípica — o que explica dificuldades com multitarefas ou prazos.",
    },
    {
      term: "Meltdown",
      def: "Resposta involuntária a sobrecarga sensorial ou emocional intensa. Não é birra ou manipulação — é uma perda temporária de controle causada por excesso de estímulos. Requer ambiente calmo e ausência de pressão.",
    },
    {
      term: "Shutdown",
      def: "Resposta oposta ao meltdown: retraimento e 'desligamento' como proteção à sobrecarga. A pessoa pode parar de responder, falar ou reagir. Também não é escolha — é resposta neurológica ao limite.",
    },
    {
      term: "Burnout Autista",
      def: "Estado de esgotamento profundo resultante de esforço prolongado de camuflagem social, sobrecarga sensorial acumulada e falta de suporte adequado. Diferente do burnout comum, pode durar meses e afetar funções básicas.",
    },
    {
      term: "Acomodações Razoáveis",
      def: "Adaptações no ambiente ou nas condições de trabalho que permitem à pessoa com deficiência ou neurodivergência exercer suas funções com igualdade. São obrigação legal do empregador (Lei 13.146/2015) — não favor.",
    },
    {
      term: "Comunicação Literal",
      def: "Tendência a interpretar linguagem de forma literal, sem inferir subentendidos, ironia ou duplo sentido. Metáforas, piadas de contexto e feedbacks vagos frequentemente não são interpretados como o emissor pretendia.",
    },
    {
      term: "Dupla Empatia",
      def: "Conceito do pesquisador Damian Milton que descreve o problema de comunicação entre autistas e não-autistas como bidirecional. Não é que autistas 'não têm empatia' — é que os dois grupos processam sinais sociais de formas diferentes.",
    },
    {
      term: "CIPTEA",
      def: "Carteira de Identificação da Pessoa com Transtorno do Espectro Autista. Documento gratuito garantido pela Lei nº 13.977/2020 (Lei Romeo Mion) que assegura atendimento prioritário em serviços públicos e privados.",
    },
    {
      term: "CID F84",
      def: "Código do Transtorno Global do Desenvolvimento / TEA na Classificação Internacional de Doenças (CID-10). É o código usado em laudos médicos para fins legais, previdenciários e de enquadramento como PCD.",
    },
    {
      term: "PCD — Pessoa com Deficiência",
      def: "Categoria legal que inclui pessoas com TEA (Lei 12.764/2012). O enquadramento como PCD garante acesso à cota de vagas (Lei 8.213/91), proteção contra demissão discriminatória e outros direitos trabalhistas.",
    },
    {
      term: "Rotinas e Previsibilidade",
      def: "Estruturas fundamentais para o funcionamento de muitas pessoas com TEA. Mudanças imprevistas têm custo cognitivo real. Comunicar alterações com antecedência e explicar o motivo reduz significativamente a ansiedade e o impacto.",
    },
    {
      term: "Processamento Assíncrono",
      def: "Necessidade de mais tempo para processar informações, especialmente em contextos sociais ou emocionalmente carregados. Silêncio em reuniões ou demora para responder frequentemente são sinais de processamento em andamento, não desinteresse.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="print:hidden sticky top-0 z-10 bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
        <a href="/teamonks" className="text-sm text-slate-500 hover:text-slate-800 transition">← Voltar</a>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 transition"
        >
          Imprimir / Salvar como PDF
        </button>
      </div>

      <div className="max-w-2xl mx-auto px-8 py-12 print:py-8 print:px-10">

        {/* Header */}
        <div className="mb-10 pb-6 border-b-4 border-purple-600">
          <p className="text-xs font-bold tracking-widest uppercase text-purple-600 mb-2">TEA.monks — Glossário</p>
          <h1 className="text-3xl font-extrabold text-slate-900 leading-tight mb-3">
            Glossário TEA no Trabalho
          </h1>
          <p className="text-base text-slate-500">
            Os termos fundamentais sobre neurodiversidade que todo profissional deveria conhecer — explicados de forma clara e sem jargão clínico.
          </p>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-10">
          Entender o vocabulário é o primeiro passo para uma comunicação mais precisa e um ambiente mais inclusivo. Este glossário reúne os conceitos mais relevantes para o contexto corporativo.
        </p>

        <div className="space-y-6">
          {terms.map((t) => (
            <div key={t.term} className="border-l-2 border-purple-300 pl-4">
              <p className="font-bold text-slate-900 text-sm mb-1">{t.term}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{t.def}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 rounded-xl bg-purple-50 border-l-4 border-purple-600">
          <p className="text-sm font-semibold text-purple-900 mb-1">Importante</p>
          <p className="text-sm text-purple-800 leading-relaxed">
            Nenhum termo substitui o conhecimento direto da pessoa. Use este glossário como ponto de partida, não como manual definitivo. Pergunte, ouça e adapte.
          </p>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400">
          <span>TEA.monks © 2026 — teamonks.vercel.app</span>
          <span>Baseado em APA, DSM-5, OMS e ASAN</span>
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
