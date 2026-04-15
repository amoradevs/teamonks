"use client";
export default function PassoAPassoPCD() {
  return (
    <div className="min-h-screen bg-white">
      <div className="print:hidden sticky top-0 z-10 bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
        <a href="/teamonks" className="text-sm text-slate-500 hover:text-slate-800 transition">← Voltar</a>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition"
        >
          Imprimir / Salvar como PDF
        </button>
      </div>

      <div className="max-w-2xl mx-auto px-8 py-12 print:py-8 print:px-10">

        {/* Header */}
        <div className="mb-10 pb-6 border-b-4 border-green-600">
          <p className="text-xs font-bold tracking-widest uppercase text-green-600 mb-2">TEA.monks — Direitos & Legislação</p>
          <h1 className="text-3xl font-extrabold text-slate-900 leading-tight mb-3">
            Passo a Passo PCD
          </h1>
          <p className="text-base text-slate-500">
            Roteiro completo para a pessoa com TEA entender e acessar seus direitos como Pessoa com Deficiência no Brasil.
          </p>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-10">
          O TEA é reconhecido legalmente como deficiência no Brasil desde 2012 (Lei 12.764 — Lei Berenice Piana). Isso significa que você tem direitos concretos — na contratação, no trabalho e na seguridade social. Este guia explica o caminho prático, do laudo ao emprego.
        </p>

        {/* Steps */}
        {[
          {
            n: "01",
            title: "Obtenha o laudo de TEA",
            color: "bg-green-600",
            body: "O laudo médico é a base de tudo. Ele deve ser emitido por médico (psiquiatra, neurologista ou neuropediatra) ou psicólogo clínico, conter o CID F84 e descrever o diagnóstico de TEA. Guarde cópias físicas e digitais. Não tem prazo de validade fixo, mas alguns órgãos pedem laudos recentes (menos de 1 ou 2 anos).",
            items: [
              "Procure psiquiatra ou neurologista pelo SUS (CAPS, UBS) ou convênio",
              "Psicólogos também podem emitir laudo — verifique se o órgão receptor aceita",
              "Solicite que o laudo mencione explicitamente o CID F84 e 'Transtorno do Espectro Autista'",
            ],
          },
          {
            n: "02",
            title: "Solicite a CIPTEA",
            color: "bg-green-600",
            body: "A Carteira de Identificação da Pessoa com TEA (Lei 13.977/2020 — Lei Romeo Mion) é gratuita e garante atendimento prioritário. A emissão é feita pelo seu estado ou município. Apresente o laudo + RG + CPF + comprovante de residência no órgão responsável do seu estado.",
            items: [
              "SP: ciptea.sp.gov.br | MG: social.mg.gov.br | PR: parana.pr.gov.br",
              "RS: faders.rs.gov.br | BA: ciptea.sjdh.ba.gov.br | PE: sjdh.pe.gov.br",
              "GO: goias.gov.br/social | CE: ciptea.fortaleza.ce.gov.br | DF: sistemas.df.gov.br/cadpcd",
            ],
          },
          {
            n: "03",
            title: "Entenda a Lei de Cotas (Lei 8.213/91)",
            color: "bg-green-600",
            body: "Empresas com 100 ou mais empregados são obrigadas por lei a reservar de 2% a 5% das vagas para PCD. Como pessoa com TEA, você pode concorrer a essas vagas.",
            items: [
              "100 a 200 funcionários: 2% das vagas para PCD",
              "201 a 500 funcionários: 3% das vagas para PCD",
              "501 a 1.000 funcionários: 4% das vagas para PCD",
              "Acima de 1.001 funcionários: 5% das vagas para PCD",
              "A empresa não pode exigir 'aptidão plena e irrestrita' para a contratação (Art. 37, Lei 13.146/2015)",
            ],
          },
          {
            n: "04",
            title: "Registre-se como PCD no processo seletivo",
            color: "bg-green-600",
            body: "Ao se candidatar, informe que você é PCD e possui TEA. Isso direciona sua candidatura para as vagas de cota. Você não é obrigado a revelar sua condição antes da contratação, mas declarar como PCD é necessário para acessar as vagas reservadas.",
            items: [
              "Declare como PCD no formulário de candidatura quando houver essa opção",
              "Tenha o laudo disponível — ele pode ser solicitado na fase admissional",
              "Solicite acomodações razoáveis no processo seletivo (ex: tempo extra, sala silenciosa)",
              "A empresa não pode reprovar você apenas por ter TEA — isso é discriminação (Lei 13.146/2015, Art. 38)",
            ],
          },
          {
            n: "05",
            title: "Solicite acomodações razoáveis no trabalho",
            color: "bg-green-600",
            body: "Após a contratação, você tem direito a acomodações razoáveis — adaptações que permitam exercer suas funções sem desvantagem. Não é favor, é obrigação legal do empregador (Art. 2º e Art. 3º da LBI — Lei 13.146/2015).",
            items: [
              "Trabalho remoto ou híbrido para reduzir sobrecarga sensorial",
              "Comunicação de tarefas e feedbacks por escrito",
              "Horários flexíveis ou blocos de trabalho sem interrupção",
              "Local de trabalho mais silencioso ou uso de fone de ouvido",
              "Prazo adicional para tarefas que exijam processamento mais complexo",
              "Reuniões com pauta enviada com antecedência",
            ],
          },
          {
            n: "06",
            title: "Conheça a proteção contra demissão",
            color: "bg-green-600",
            body: "Pessoas com deficiência demitidas de vagas de cota têm proteção especial. A empresa só pode dispensar um PCD em vaga de cota se contratar outro PCD para substituir — caso contrário, a demissão pode ser contestada.",
            items: [
              "Guarde documentação do seu enquadramento como PCD na empresa",
              "Em caso de demissão, verifique se a empresa cumpriu a obrigação de substituição",
              "Procure o sindicato da categoria ou a Defensoria Pública em caso de demissão discriminatória",
              "O art. 93, §1º da Lei 8.213/91 protege a vaga de cota PCD",
            ],
          },
          {
            n: "07",
            title: "Acesse benefícios previdenciários se necessário",
            color: "bg-green-600",
            body: "Dependendo do perfil de suporte e da capacidade laboral, pode haver direito a benefícios do INSS. Consulte um advogado previdenciário ou a Defensoria Pública para avaliar seu caso.",
            items: [
              "BPC (Benefício de Prestação Continuada) — para quem não tem condições de trabalho e renda familiar baixa",
              "Aposentadoria por Invalidez — para incapacidade permanente para o trabalho",
              "Aposentadoria especial PCD — com tempo de contribuição reduzido para deficiência grave",
              "Isenção de IR para proventos de aposentadoria em alguns casos — consulte a Receita Federal",
            ],
          },
        ].map((step) => (
          <div key={step.n} className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className={`shrink-0 w-9 h-9 rounded-xl ${step.color} text-white text-xs font-black flex items-center justify-center`}>
                {step.n}
              </div>
              <h2 className="font-bold text-slate-900">{step.title}</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-3 pl-12">{step.body}</p>
            <ul className="pl-12 space-y-1.5">
              {step.items.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Legal refs */}
        <div className="mt-6 p-5 rounded-xl bg-green-50 border-l-4 border-green-600">
          <p className="text-sm font-bold text-green-900 mb-2">Principais leis de referência</p>
          <ul className="space-y-1 text-sm text-green-800">
            <li>• Lei 12.764/2012 — Lei Berenice Piana (TEA como deficiência)</li>
            <li>• Lei 13.146/2015 — Lei Brasileira de Inclusão (Estatuto da Pessoa com Deficiência)</li>
            <li>• Lei 13.977/2020 — Lei Romeo Mion (CIPTEA)</li>
            <li>• Lei 8.213/1991 — Lei de Cotas para PCD</li>
            <li>• Decreto 6.949/2009 — Convenção da ONU sobre Direitos das Pessoas com Deficiência</li>
          </ul>
        </div>

        <div className="mt-6 p-5 rounded-xl bg-slate-50 border border-slate-200">
          <p className="text-sm font-bold text-slate-800 mb-1">Precisa de apoio jurídico gratuito?</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            A <strong>Defensoria Pública</strong> atende gratuitamente pessoas que não têm condições de pagar advogado. Procure a Defensoria do seu estado para orientação sobre direitos trabalhistas e previdenciários relacionados ao TEA.
          </p>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400">
          <span>TEA.monks © 2026 — teamonks.vercel.app</span>
          <span>Referências: Planalto.gov.br, INSS, MTE</span>
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
