// TEAMONKS — Conteúdo curado, profundo e com fontes

export type PillarId = "lideranca" | "colaboradores" | "conhecimento" | "legislacao";

export interface Source {
  label: string;
  org: string;
  url: string;
}

export interface MythItem {
  myth: string;
  truth: string;
}

export interface Section {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  myths?: MythItem[];   // pares mito/verdade com ícones
  highlight?: string;
  note?: string;
}

export interface ContentCard {
  id: string;
  pillar: PillarId;
  icon: string;
  title: string;
  subtitle: string;
  tags: string[];
  summary: string;
  sections: Section[];
  sources?: Source[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  example?: string;
}

// ═══════════════════════════════════════════════════════
//  PILAR 1 — LIDERANÇA & GESTÃO
// ═══════════════════════════════════════════════════════

export const liderancaCards: ContentCard[] = [
  {
    id: "lid-01",
    pillar: "lideranca",
    icon: "🧠",
    title: "O que é TEA na Prática — Panorama para Líderes",
    subtitle: "O essencial para entender o espectro antes de gerir",
    tags: ["Fundamentos", "Espectro"],
    summary:
      "Entender o TEA não é memorizar critérios clínicos — é reconhecer que cada colaborador funciona de forma genuinamente diferente, com forças e desafios únicos.",
    sections: [
      {
        heading: "O espectro é amplo e cada pessoa é única",
        paragraphs: [
          "O Transtorno do Espectro Autista (TEA) é uma condição neurológica do desenvolvimento que afeta como uma pessoa processa informações, se comunica e interage socialmente. A palavra-chave é espectro: não existe um 'tipo padrão' de autista.",
          "Dois colaboradores com o mesmo diagnóstico podem ter perfis completamente opostos. Um pode ser extremamente verbal e sociável, mas ter dificuldades com mudanças de rotina. Outro pode evitar conversas mas ter habilidade excepcional de concentração por horas em tarefas complexas.",
        ],
        highlight:
          "Regra de ouro: se você conhece uma pessoa com TEA, você conhece UMA pessoa com TEA. Nunca generalize.",
      },
      {
        heading: "O que você provavelmente vai observar no trabalho",
        paragraphs: [
          "Nem tudo é visível. A maioria dos adultos TEA passou anos aprendendo a 'se encaixar' socialmente — um processo chamado masking. O que você vê no dia a dia pode ser apenas a superfície.",
        ],
        bullets: [
          "Preferência por comunicação escrita e instruções detalhadas em vez de conversas informais",
          "Dificuldade com ambiguidades, ironia ou feedback 'nas entrelinhas'",
          "Hiperfoco em projetos de interesse — produtividade excepcional quando engajado",
          "Sensibilidade a estímulos do ambiente (ruído, luz, temperatura, cheiros)",
          "Rotinas e previsibilidade são fundamentais para o desempenho",
          "Processamento assíncrono: pode precisar de mais tempo para responder, mas a resposta será precisa",
        ],
      },
      {
        heading: "Por que isso importa para você como líder",
        paragraphs: [
          "Ambientes de trabalho foram projetados para pessoas neurotípicas: open spaces barulhentos, reuniões imprevistas, feedback implícito e hierarquias sociais não ditas. Para um colaborador TEA, navegar esses ambientes consome energia cognitiva enorme — antes mesmo de começar o trabalho de fato.",
          "Pequenos ajustes da sua parte liberam essa energia para o que realmente importa: a entrega.",
        ],
      },
    ],
    sources: [
      { label: "DSM-5 — Critérios Diagnósticos para TEA", org: "APA", url: "https://www.psychiatry.org/psychiatrists/practice/dsm" },
      { label: "Autism at Work Employer Toolkit", org: "Autism Speaks", url: "https://www.autismspeaks.org/autism-work-employer-toolkit" },
      { label: "Neurodiversidade no Trabalho", org: "UNESP Educadiversidade", url: "https://educadiversidade.unesp.br" },
    ],
  },
  {
    id: "lid-02",
    pillar: "lideranca",
    icon: "💬",
    title: "Comunicação Efetiva — Feedback que Realmente Funciona",
    subtitle: "Como adaptar sua comunicação sem perder a autenticidade",
    tags: ["Comunicação", "Feedback"],
    summary:
      "A maioria dos problemas de desempenho com colaboradores TEA não é falta de capacidade — é uma falha de comunicação. Feedback vago, irônico ou implícito simplesmente não chega.",
    sections: [
      {
        heading: "Por que o feedback tradicional falha",
        paragraphs: [
          "Expressões como 'precisa melhorar a postura', 'falta proatividade' ou 'poderia se comunicar melhor' são ambíguas por natureza. Para a maioria das pessoas, o contexto social preenche essas lacunas automaticamente. Para uma pessoa com TEA, esse preenchimento automático não existe — a mensagem chega literalmente, sem a camada de contexto implícito.",
          "O resultado: o colaborador genuinamente não sabe o que mudar. Não é resistência, é processamento diferente.",
        ],
      },
      {
        heading: "O modelo BECC — Feedback que funciona",
        paragraphs: [
          "Use a estrutura: Comportamento específico → Efeito observável → Consequência clara → Caminho de melhoria.",
        ],
        myths: [
          {
            myth: "Vago: 'Você precisa ser mais proativo nas reuniões'",
            truth: "BECC: 'Na reunião de segunda, você ficou em silêncio quando perguntei sobre o projeto X (comportamento/efeito). Isso dificultou a tomada de decisão do time (consequência). Na próxima, envio a pauta com 24h de antecedência para você preparar pontos (caminho)'",
          },
          {
            myth: "Vago: 'Preciso que você melhore o relacionamento com a equipe'",
            truth: "BECC: 'Nos últimos 3 check-ins, você não respondeu às mensagens de João em até 24h. Isso atrasou 2 entregas. Vamos combinar: resposta em até 4h úteis para mensagens com urgência marcada?'",
          },
        ],
        highlight: "Sempre coloque feedback por escrito após a conversa. Facilita o processamento e serve como referência.",
      },
      {
        heading: "Ajustes práticos de comunicação",
        bullets: [
          "Envie a pauta de reuniões com no mínimo 24h de antecedência",
          "Confirme o entendimento ao final: 'Você pode resumir o que combinamos?'",
          "Prefira e-mail ou mensagem escrita para instruções complexas ou que precisem ser consultadas",
          "Evite sarcasmo, ironia, metáforas ambíguas e subentendidos",
          "Diga exatamente o que você quer, quando quer e em qual formato",
          "Se precisar de mudança de última hora, comunique o motivo — o 'porquê' facilita a adaptação",
        ],
      },
      {
        heading: "Reuniões mais inclusivas",
        bullets: [
          "Permita câmera desligada — o esforço de manter linguagem corporal 'adequada' é exaustivo",
          "Grave reuniões importantes ou envie resumo escrito",
          "Respeite o tempo de processamento: não interprete silêncio como desinteresse",
          "Faça perguntas diretas: 'João, o que você pensa sobre isso?' em vez de esperar participação espontânea",
        ],
      },
    ],
    sources: [
      { label: "Communication Strategies for Autism in the Workplace", org: "ASAN", url: "https://autisticadvocacy.org/policy/employment/" },
      { label: "Autism-Friendly Workplaces", org: "National Autistic Society UK", url: "https://www.autism.org.uk/advice-and-guidance/topics/employment/employers" },
    ],
  },
  {
    id: "lid-03",
    pillar: "lideranca",
    icon: "🏗️",
    title: "Gestão e Ambiente — Estrutura que Libera Potencial",
    subtitle: "Adaptações simples que transformam o desempenho",
    tags: ["Gestão", "Ambiente", "Acomodações"],
    summary:
      "A maioria das acomodações eficazes não custa nada. Estrutura, previsibilidade e flexibilidade sensorial são os pilares que liberam o alto desempenho.",
    sections: [
      {
        heading: "A importância da estrutura e previsibilidade",
        paragraphs: [
          "Incerteza consome energia cognitiva. Para um colaborador TEA, cada variável imprevista exige processamento extra — e esse gasto energético vem do mesmo 'orçamento' que seria usado para o trabalho.",
          "Estrutura não significa rigidez. Significa previsibilidade suficiente para que a energia criativa e produtiva esteja disponível para o trabalho, não para navegar o caos.",
        ],
        bullets: [
          "Check-ins regulares e previsíveis (mesmo horário e formato toda semana)",
          "Prioridades claras e escritas — evite depender da pessoa para 'ler' o que é mais urgente",
          "Prazos intermediários para projetos longos, não só a data final",
          "Mudanças de processo comunicadas com antecedência e motivo explicado",
          "OKRs e expectativas documentados, não apenas verbalizados em reunião",
        ],
      },
      {
        heading: "Sensibilidade sensorial — o invisível que importa",
        paragraphs: [
          "Open spaces, iluminação fluorescente, conversas paralelas, música ambiente — elementos 'normais' do escritório podem ser genuinamente dolorosos para quem tem hipersensibilidade sensorial. Isso não é exagero ou frescura: é uma resposta neurológica diferente a estímulos.",
        ],
        bullets: [
          "Permita uso de fones de ouvido sem interpretação negativa",
          "Ofereça opção de trabalho em local silencioso ou home office em dias de alta demanda cognitiva",
          "Respeite necessidades de temperatura, iluminação e espaço pessoal",
          "Evite reuniões em ambientes muito barulhentos ou visualmente agitados quando possível",
        ],
        highlight:
          "Pergunte diretamente: 'Tem alguma condição de ambiente que facilitaria seu trabalho?' Cada pessoa sabe melhor do que ninguém o que precisa.",
      },
      {
        heading: "Acomodações de baixo custo e alto impacto",
        bullets: [
          "Trabalho remoto ou híbrido — remove sobrecarga sensorial e social do escritório",
          "Horário flexível — permite alinhar pico de produtividade e compromissos terapêuticos",
          "Instruções por escrito em vez de apenas verbais",
          "Prazo estendido para avaliações e processos seletivos internos",
          "Reunião de alinhamento semanal individual (1:1) previsível",
          "Opção de participar de eventos sociais sem obrigatoriedade",
        ],
      },
    ],
    sources: [
      { label: "Job Accommodation Network — Autism Solutions", org: "JAN (EUA)", url: "https://askjan.org/disabilities/Autism-Spectrum-Disorder.cfm" },
      { label: "Reasonable Adjustments for Autism", org: "National Autistic Society UK", url: "https://www.autism.org.uk/advice-and-guidance/topics/employment/employers/reasonable-adjustments" },
    ],
  },
  {
    id: "lid-04",
    pillar: "lideranca",
    icon: "⚡",
    title: "Crises e Sobrecarga — Como Agir",
    subtitle: "Meltdown, shutdown e o que fazer quando acontece",
    tags: ["Crises", "Sobrecarga", "Suporte"],
    summary:
      "Sobrecarga não é fraqueza. É uma resposta neurológica a um sistema que atingiu seu limite. Saber reconhecer e agir corretamente faz toda a diferença.",
    sections: [
      {
        heading: "Meltdown vs Shutdown — entendendo a diferença",
        paragraphs: [
          "Quando a sobrecarga atinge o limite, o cérebro autista pode responder de duas formas principais, ambas involuntárias e não manipuladoras.",
        ],
        bullets: [
          "Meltdown: resposta externalizante — agitação, choro, fala desorganizada, dificuldade de se mover. Parece uma explosão emocional, mas é uma perda temporária de regulação neurológica",
          "Shutdown: resposta internalizante — silêncio, imobilidade, monossilabismo, incapacidade de processar informações. Parece indiferença, mas é o sistema 'entrando em modo de segurança'",
        ],
        highlight:
          "Nenhum dos dois é comportamento intencional ou manipulação. São respostas neurológicas involuntárias.",
      },
      {
        heading: "O que fazer — protocolo prático",
        bullets: [
          "Ofereça um espaço tranquilo e privado para se recuperar",
          "Reduza estímulos: luz, som, presença de pessoas",
          "Não exija resposta ou explicação imediata",
          "Diga apenas: 'Estou aqui, pode levar o tempo que precisar'",
          "Não toque sem permissão explícita",
          "Adie qualquer conversa sobre o ocorrido para depois da recuperação",
        ],
      },
      {
        heading: "O que evitar",
        bullets: [
          "Pressionar por explicação durante a crise",
          "Ignorar ou sair sem dizer nada",
          "Chamar atenção da pessoa na frente de outros",
          "Tratar como drama ou reação exagerada",
          "Ameaças ou ultimatos ('se continuar assim...')",
          "Tocar sem pedir permissão antes",
        ],
      },
      {
        heading: "Prevenção — identificando gatilhos comuns",
        paragraphs: [
          "Crises quase nunca acontecem do nada. Existem sinais de sobrecarga acumulada que, se identificados, permitem agir preventivamente.",
        ],
        bullets: [
          "Mudanças imprevistas de agenda ou prioridades",
          "Sobrecarga de tarefas simultâneas sem priorização clara",
          "Ambiente sensorial muito exigente por período prolongado",
          "Interações sociais muito intensas ou ambíguas",
          "Falta de pausas durante o dia",
          "Deadlines múltiplos no mesmo período",
        ],
      },
    ],
    sources: [
      { label: "Understanding Autistic Burnout", org: "Autistic Science Person", url: "https://autisticscienceperson.com/autistic-burnout-101/" },
      { label: "Meltdowns: a guide for autistic people", org: "National Autistic Society UK", url: "https://www.autism.org.uk/advice-and-guidance/topics/behaviour/meltdowns" },
    ],
  },
  {
    id: "lid-05",
    pillar: "lideranca",
    icon: "🚀",
    title: "Líderes TEA — Diferenças como Vantagem Estratégica",
    subtitle: "Como hiperfoco, precisão e pensamento sistêmico criam líderes excepcionais",
    tags: ["Liderança", "Desenvolvimento"],
    summary:
      "Profissionais TEA em posição de liderança trazem habilidades raras ao papel. O desafio é criar o ambiente certo para que essas forças apareçam.",
    sections: [
      {
        heading: "Forças naturais frequentemente presentes em líderes TEA",
        paragraphs: [
          "Não existe perfil único — mas certas forças aparecem com frequência em líderes autistas bem suportados.",
        ],
        bullets: [
          "Hiperfoco: capacidade de concentração profunda e prolongada em problemas complexos — o oposto da superficialidade executiva comum",
          "Atenção aos detalhes: processos, dados e inconsistências são identificados naturalmente, antes que se tornem problemas",
          "Pensamento sistêmico: tendência a criar estruturas, documentações e fluxos claros — organizações se beneficiam disso",
          "Comunicação direta: sem jogos políticos, sem subentendidos, sem microagências — o que é dito é o que é dito",
          "Comprometimento ético: alta aversão a injustiças e inconsistências nas regras — valioso em culturas organizacionais saudáveis",
          "Inovação: pensar fora dos padrões sociais estabelecidos frequentemente gera soluções que outros não enxergam",
        ],
      },
      {
        heading: "Como criar o ambiente para que isso apareça",
        bullets: [
          "Alinhe responsabilidades às áreas de hiperfoco — não force papéis genéricos de gestão",
          "Forneça autonomia real, não apenas no discurso",
          "Minimize reuniões imprevistas — ofereça rotas de acesso estruturadas",
          "Valorize resultados acima de 'presença social' ou 'carisma'",
          "Crie espaço para feedback honesto — líderes TEA tipicamente apreciam e respondem bem a críticas diretas e construtivas",
          "Respeite o estilo de comunicação — e-mail pode ser tão válido quanto a 'conversa de corredor'",
        ],
        highlight:
          "Empresas como Microsoft, SAP e JPMorgan criaram programas específicos de contratação neurodiversa — e reportam desempenho 30% acima da média nessas posições.",
      },
    ],
    sources: [
      { label: "Neurodiversity as Competitive Advantage", org: "Harvard Business Review", url: "https://hbr.org/2017/05/neurodiversity-as-a-competitive-advantage" },
      { label: "Microsoft Autism Hiring Program", org: "Microsoft", url: "https://www.microsoft.com/en-us/diversity/inside-microsoft/cross-disability/autism-hiring" },
    ],
  },
];

// ═══════════════════════════════════════════════════════
//  PILAR 2 — COLABORADORES TEA
// ═══════════════════════════════════════════════════════

export const colaboradoresCards: ContentCard[] = [
  {
    id: "col-01",
    pillar: "colaboradores",
    icon: "🪞",
    title: "Conhecendo Seu Perfil TEA no Trabalho",
    subtitle: "Autoconhecimento como primeiro passo para a carreira",
    tags: ["Autoconhecimento", "Identidade"],
    summary:
      "Entender como seu cérebro funciona não é limitar-se — é ter o mapa para navegar ambientes que não foram projetados para você.",
    sections: [
      {
        heading: "Seu perfil é único — e isso é real",
        paragraphs: [
          "O espectro autista é amplo e cada pessoa tem uma combinação única de forças, desafios e gatilhos. Autoconhecimento não é um exercício de autoajuda: é uma ferramenta de performance.",
          "Perguntas úteis para mapear seu perfil profissional:",
        ],
        bullets: [
          "Em que tipo de tarefa você entra em estado de fluxo (total concentração e prazer)?",
          "O que te drena mais energia no trabalho: interações sociais, ambiguidade, sensorialidade, mudanças?",
          "Quais condições de ambiente aumentam sua produtividade?",
          "Como você prefere receber feedback — escrito ou verbal, imediato ou agendado?",
          "Qual o seu sinal de que está chegando na sobrecarga?",
        ],
      },
      {
        heading: "Masking — o custo de se encaixar",
        paragraphs: [
          "Masking é o processo de suprimir ou imitar comportamentos para parecer neurotípico. Inclui forçar contato visual, imitar expressões, ensaiar conversas, conter stims. É exaustivo e, a longo prazo, pode levar ao burnout autista.",
          "Identificar onde você usa masking no trabalho não significa 'largar tudo'. Significa escolher conscientemente onde e quando essa energia faz sentido gastar — e onde não faz.",
        ],
        highlight: "Burnout autista é real, documentado e diferente do burnout comum. Pode levar meses de recuperação. Prevenção começa pelo autoconhecimento.",
      },
    ],
    sources: [
      { label: "Autistic Burnout — Research Overview", org: "Autism Research Institute", url: "https://www.autism.org/autistic-burnout/" },
      { label: "The Autistic Self Advocacy Network", org: "ASAN", url: "https://autisticadvocacy.org" },
    ],
  },
  {
    id: "col-02",
    pillar: "colaboradores",
    icon: "⚖️",
    title: "Seus Direitos no Trabalho",
    subtitle: "O que a lei garante para você — de forma clara",
    tags: ["Direitos", "Legislação"],
    summary:
      "A Lei Berenice Piana e a Convenção da ONU garantem proteções reais. Conhecê-las é o primeiro passo para exigi-las.",
    sections: [
      {
        heading: "Proteções legais que você já tem",
        bullets: [
          "Proteção contra discriminação por deficiência (Lei 9.029/1995 e Lei 13.146/2015)",
          "Reconhecimento do autismo como deficiência para todos os efeitos legais (Lei 12.764/2012)",
          "Direito a acomodações razoáveis no ambiente de trabalho (Convenção da ONU, Art. 5°)",
          "Acesso à cota de PCD em empresas com 100+ funcionários (Lei 8.213/91)",
          "Estabilidade no emprego para cotistas PCD (jurisprudência consolidada em TRT e TST)",
          "Prioridade em atendimento em repartições públicas e serviços",
        ],
      },
      {
        heading: "O que é discriminação — exemplos práticos",
        bullets: [
          "Ser preterido em promoções explicitamente por causa do diagnóstico",
          "Ter seu desempenho avaliado com critérios que não consideram as acomodações devidas",
          "Sofrer comentários depreciativos sobre sua condição",
          "Ser demitido após revelar o diagnóstico sem justa causa documentada",
          "Ter pedidos de acomodação ignorados sistematicamente",
        ],
        note: "Se você passou por isso, documente por escrito (e-mails, mensagens) e consulte um advogado trabalhista ou a DRT (Delegacia Regional do Trabalho).",
      },
      {
        heading: "Você não é obrigado a revelar o diagnóstico",
        paragraphs: [
          "Você pode solicitar acomodações descrevendo suas necessidades funcionais sem mencionar o diagnóstico. Para enquadramento PCD e acesso à cota, o laudo formal é necessário — mas mesmo assim só o RH precisa ter acesso.",
        ],
      },
    ],
    sources: [
      { label: "Lei 12.764/2012 — Lei Berenice Piana", org: "Planalto.gov.br", url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm" },
      { label: "Convenção sobre Direitos das Pessoas com Deficiência (ONU)", org: "ONU / SDH Brasil", url: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/decreto/d6949.htm" },
      { label: "Lei 13.146/2015 — Lei Brasileira de Inclusão", org: "Planalto.gov.br", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm" },
    ],
  },
  {
    id: "col-03",
    pillar: "colaboradores",
    icon: "🤲",
    title: "Como Solicitar Acomodações Razoáveis",
    subtitle: "Passo a passo para pedir o que você precisa com confiança",
    tags: ["Acomodações", "Carreira"],
    summary:
      "Acomodações razoáveis não são favores — são direitos. E solicitá-las de forma estruturada aumenta muito a chance de sucesso.",
    sections: [
      {
        heading: "O que são acomodações razoáveis",
        paragraphs: [
          "São ajustes no trabalho, processo ou ambiente que permitem a uma pessoa com deficiência desempenhar suas funções com equidade. 'Razoável' significa que não causem ônus desproporcional ao empregador — na prática, a maioria das acomodações eficazes não tem custo algum.",
        ],
        bullets: [
          "Trabalho remoto ou híbrido",
          "Horário flexível (mesmo carga horária, horários ajustados)",
          "Instruções por escrito em vez de apenas verbais",
          "Prazo adicional para avaliações e processos internos",
          "Espaço silencioso ou permissão para usar fones de ouvido",
          "Check-ins regulares com feedback claro e direto",
          "Adequação do tipo de tarefa ao perfil cognitivo",
        ],
      },
      {
        heading: "Como fazer o pedido — script prático",
        paragraphs: [
          "Você não precisa revelar o diagnóstico para solicitar acomodações. Foque nas necessidades funcionais:",
        ],
        bullets: [
          "1. Agende uma conversa com RH ou gestor: 'Gostaria de conversar sobre ajustes que poderiam melhorar meu desempenho'",
          "2. Descreva a necessidade: 'Tenho mais facilidade para processar instruções por escrito. Seria possível enviar os briefings por e-mail antes das reuniões?'",
          "3. Conecte ao resultado: 'Isso me ajuda a chegar mais preparado e contribuir melhor'",
          "4. Formalize por e-mail: envie um resumo escrito do que foi combinado",
        ],
        highlight: "Se precisar mencionar o diagnóstico, faça com o RH — eles têm dever de sigilo. Não é obrigação divulgar para colegas ou gestor direto.",
      },
    ],
    sources: [
      { label: "Autism at Work — Employee Guide", org: "Autism Speaks", url: "https://www.autismspeaks.org/autism-work" },
      { label: "Job Accommodation Network", org: "JAN", url: "https://askjan.org" },
    ],
  },
  {
    id: "col-04",
    pillar: "colaboradores",
    icon: "📈",
    title: "Desenvolvendo sua Carreira com TEA",
    subtitle: "Estratégias para crescer usando suas forças reais",
    tags: ["Carreira", "Desenvolvimento"],
    summary:
      "Progressão de carreira com TEA não é adaptar-se ao que o mercado quer — é encontrar o cruzamento entre suas forças e o que o mercado valoriza.",
    sections: [
      {
        heading: "Identifique e posicione suas forças",
        paragraphs: [
          "Muitas das características do TEA são altamente valorizadas em contextos específicos. O desafio é identificá-las, nomeá-las e colocá-las no lugar certo.",
        ],
        bullets: [
          "Hiperfoco → ideal para pesquisa, análise profunda, QA, desenvolvimento de software, ciência de dados",
          "Atenção a detalhes → auditoria, revisão técnica, controle de qualidade, conformidade",
          "Pensamento sistêmico → arquitetura de sistemas, processos, documentação, análise de risco",
          "Comunicação direta → áreas técnicas, relações com clientes que valorizam clareza, advocacy",
          "Padrões éticos elevados → compliance, áreas jurídicas, RH, políticas públicas",
        ],
      },
      {
        heading: "Lidando com a política informal do trabalho",
        paragraphs: [
          "Muito da progressão de carreira acontece em espaços informais que podem ser desafiadores: happy hours, conversas de corredor, jogos políticos sutis. Algumas estratégias:",
        ],
        bullets: [
          "Construa aliados que te conheçam e possam ser seu 'intérprete social' quando necessário",
          "Documente suas entregas — resultados objetivos falam mais alto que carisma",
          "Peça feedback explícito regularmente: 'O que posso fazer de forma diferente para X?'",
          "Identifique mentores que valorizem seu estilo de trabalho",
          "Considere coaches especializados em neurodiversidade corporativa",
        ],
      },
    ],
    sources: [
      { label: "Neurodiversity in the Workplace", org: "CIPD UK", url: "https://www.cipd.org/en/knowledge/guides/neurodiversity-work/" },
    ],
  },
];

// ═══════════════════════════════════════════════════════
//  PILAR 3 — CONHECIMENTO GERAL
// ═══════════════════════════════════════════════════════

export const conhecimentoCards: ContentCard[] = [
  {
    id: "con-01",
    pillar: "conhecimento",
    icon: "🧬",
    title: "O que é TEA — Base Científica em Linguagem Real",
    subtitle: "DSM-5 e OMS traduzidos para o dia a dia",
    tags: ["DSM-5", "Fundamentos"],
    summary:
      "O TEA é definido por dois eixos principais: diferenças na comunicação social e padrões restritos de comportamento. Mas a definição clínica é só o começo.",
    sections: [
      {
        heading: "A definição clínica (DSM-5)",
        paragraphs: [
          "O Manual Diagnóstico e Estatístico de Transtornos Mentais (DSM-5, APA, 2013) define o TEA por dois domínios:",
        ],
        bullets: [
          "Domínio A — Déficits persistentes na comunicação e interação social em múltiplos contextos: dificuldades na reciprocidade socioemocional, em comportamentos comunicativos não verbais, em desenvolver e manter relacionamentos",
          "Domínio B — Padrões restritos e repetitivos de comportamento: movimentos ou falas repetitivas (stimming), insistência em rotinas, interesses fixos e intensos, hiper ou hipossensibilidade sensorial",
          "Critério adicional: sintomas presentes desde o início do desenvolvimento (mas podem ser mascarados e só aparecer mais tarde)",
          "Critério adicional: causam prejuízo clinicamente significativo no funcionamento",
        ],
        note: "Os sintomas devem ser avaliados por profissional habilitado. Autodiagnóstico pode ser válido como ponto de partida, mas o laudo formal é necessário para acesso a direitos.",
      },
      {
        heading: "O que o diagnóstico não diz",
        paragraphs: [
          "O DSM-5 descreve padrões, não pessoas. Ele não captura a riqueza de como cada pessoa com TEA vive, trabalha, ama, processa e contribui para o mundo.",
        ],
        bullets: [
          "Não prevê nível de inteligência — TEA ocorre em todos os perfis cognitivos",
          "Não determina capacidade de trabalho, relacionamentos ou vida independente",
          "Não inclui as forças — hiperfoco, atenção a detalhes, memória, pensamento lógico",
          "Não é estático — com suporte adequado, muitas habilidades se desenvolvem ao longo da vida",
        ],
      },
    ],
    sources: [
      { label: "DSM-5 — Diagnostic Criteria for ASD", org: "American Psychiatric Association", url: "https://www.psychiatry.org/psychiatrists/practice/dsm" },
      { label: "ICD-11 — Autism Spectrum Disorder", org: "World Health Organization", url: "https://icd.who.int/ct11/icd11_mms/en/release#/http%3A%2F%2Fid.who.int%2Ficd%2Fentity%2F437815624" },
    ],
  },
  {
    id: "con-02",
    pillar: "conhecimento",
    icon: "🌈",
    title: "O Espectro — Por que 'Cada TEA é Único'",
    subtitle: "Entendendo a diversidade dentro do diagnóstico",
    tags: ["Espectro", "Diversidade"],
    summary:
      "A palavra 'espectro' não significa uma linha de leve a severo. Significa um conjunto de dimensões que se combinam de formas infinitamente diferentes.",
    sections: [
      {
        heading: "O mito do espectro como escala",
        paragraphs: [
          "Muitas pessoas imaginam o espectro como um termômetro: de 'levemente autista' a 'severamente autista'. Essa visualização está errada e causa danos reais.",
          "Uma forma mais precisa: imagine múltiplos eixos simultâneos. Uma pessoa pode ter comunicação verbal avançada mas hipersensibilidade sensorial intensa. Outra pode ter dificuldades de fala mas habilidades de memória excecionais. A combinação é única em cada pessoa.",
        ],
        highlight: "'Você não parece autista' é o exemplo clássico de como essa incompreensão do espectro causa dano. Implica que existe um 'parecer autista' padrão — o que não existe.",
      },
      {
        heading: "Dimensões que variam no espectro",
        bullets: [
          "Comunicação verbal: de não-verbal a altamente eloquente",
          "Sensibilidade sensorial: hiper (intensidade excessiva) ou hipo (intensidade reduzida) em qualquer sentido",
          "Funções executivas: planejamento, organização, flexibilidade cognitiva",
          "Socialização: preferências que variam de alta socialização a introversão intensa",
          "Nível de suporte necessário: varia ao longo da vida e conforme o ambiente",
          "Co-ocorrências: TDAH, dislexia, ansiedade, depressão, TOC frequentemente co-ocorrem com TEA",
        ],
      },
      {
        heading: "Por que isso importa na prática",
        paragraphs: [
          "Quando você conhece uma pessoa com TEA, você conhece UMA pessoa com TEA. Cada colaborador, familiar ou paciente tem seu próprio perfil. Abordagens 'prontas' raramente funcionam — o que funciona é perguntar, ouvir e adaptar.",
        ],
      },
    ],
    sources: [
      { label: "Understanding the Spectrum", org: "Thinking Person's Guide to Autism", url: "https://www.thinkingautismguide.com/2016/02/understanding-spectrum.html" },
      { label: "Autism and Sensory Processing", org: "Autism Research Institute", url: "https://www.autism.org/sensory-processing/" },
    ],
  },
  {
    id: "con-03",
    pillar: "conhecimento",
    icon: "🔍",
    title: "Diagnóstico Tardio em Adultos",
    subtitle: "Por que tantos adultos só descobrem o TEA depois dos 30, 40 ou 50 anos",
    tags: ["Diagnóstico", "Adultos"],
    summary:
      "O diagnóstico tardio é cada vez mais comum — especialmente em mulheres e pessoas negras. Entender por que ajuda a receber o diagnóstico com mais compaixão.",
    sections: [
      {
        heading: "Por que o diagnóstico veio tão tarde",
        paragraphs: [
          "Os critérios diagnósticos do DSM foram desenvolvidos inicialmente com base em meninos brancos com sintomas mais evidentes. Isso criou um viés enorme que excluiu:",
        ],
        bullets: [
          "Mulheres e pessoas não-binárias — que frequentemente mascaram com mais eficiência desde cedo",
          "Pessoas negras e de outras etnias — menos encaminhadas a especialistas por vieses no sistema de saúde",
          "Adultos de alta inteligência — que compensavam dificuldades com estratégias cognitivas",
          "Pessoas em classes sociais menos favorecidas — sem acesso a avaliação especializada",
        ],
      },
      {
        heading: "Como o masking prolonga o não-diagnóstico",
        paragraphs: [
          "Masking — suprimir características autistas para parecer neurotípico — é exaustivo e frequentemente inconsciente. Muitos adultos passaram décadas com a sensação de 'ser diferente' sem saber por quê, tentando se encaixar com esforço extraordinário que passava despercebido.",
        ],
        highlight: "Para muitos adultos, o diagnóstico tardio traz alívio imediato: 'Não sou preguiçoso, ansioso sem razão ou antissocial. Meu cérebro funciona de outra forma.'",
      },
      {
        heading: "O que fazer com um diagnóstico tardio",
        bullets: [
          "Permita-se processar — pode vir com alívio, tristeza, raiva, ou tudo junto",
          "Busque grupos de apoio de adultos TEA — a troca com pares é inestimável",
          "Revisite sua história com a nova lente — muita coisa faz sentido diferente",
          "Considere terapia com profissional familiarizado com TEA em adultos",
          "Avalie se e quando revelar no trabalho — não há obrigação",
        ],
      },
    ],
    sources: [
      { label: "Late Diagnosis of Autism in Adults", org: "Autistica UK", url: "https://www.autistica.org.uk/what-is-autism/signs-and-symptoms/late-diagnosis" },
      { label: "Autism and Gender", org: "ASAN", url: "https://autisticadvocacy.org/resources/autism-and-gender/" },
    ],
  },
  {
    id: "con-04",
    pillar: "conhecimento",
    icon: "🚫",
    title: "Mitos e Verdades — Desconstruindo Preconceitos",
    subtitle: "As crenças mais comuns sobre TEA — e o que a ciência diz",
    tags: ["Mitos", "Educação"],
    summary:
      "Preconceitos sobre TEA causam danos reais: diagnósticos perdidos, oportunidades negadas e exclusão. Desmontar esses mitos é um ato de inclusão.",
    sections: [
      {
        myths: [
          { myth: "Autismo é coisa de criança", truth: "TEA é uma condição neurológica permanente. Crianças com TEA crescem e se tornam adultos com TEA." },
          { myth: "Autistas não têm empatia", truth: "Muitos autistas têm empatia intensa — o desafio está na expressão e interpretação de sinais sociais implícitos, não na ausência de sentimento. Existe o conceito de 'dupla empatia'." },
          { myth: "Todo autista é gênio ou tem habilidade extraordinária", truth: "TEA ocorre em todos os perfis cognitivos. Não há 'superpoder' garantido." },
          { myth: "Vacinas causam autismo", truth: "Esta afirmação vem de um estudo fraudulento e retratado. Nenhuma evidência científica robusta suporta essa relação." },
          { myth: "Autistas não querem relações sociais", truth: "Muitos autistas desejam profundamente conexões — mas podem ter dificuldades com os códigos sociais implícitos." },
          { myth: "'Você não parece autista'", truth: "Não existe um jeito de 'parecer autista'. Esta frase invalida o diagnóstico e o sofrimento real da pessoa." },
          { myth: "Terapia cura o autismo", truth: "TEA não é doença que precisa de cura. Terapias de qualidade desenvolvem habilidades e bem-estar, respeitando a neurodivergência." },
          { myth: "É só preguiça ou falta de esforço", truth: "O que parece preguiça frequentemente é sobrecarga cognitiva real, burnout autista ou inadequação do ambiente." },
        ],
      },
      {
        heading: "O problema do duplo padrão",
        paragraphs: [
          "Quando um neurotípico tem dificuldade com algo, diz-se 'é difícil para ele'. Quando um autista tem a mesma dificuldade, frequentemente diz-se 'é teimosia' ou 'falta de esforço'. Esse duplo padrão permeia desde diagnósticos até avaliações de desempenho no trabalho.",
        ],
      },
    ],
    sources: [
      { label: "Autism Myths vs Facts", org: "Autism Speaks", url: "https://www.autismspeaks.org/autism-facts-and-figures" },
      { label: "The Double Empathy Problem", org: "Dr. Damian Milton — Sage Journals", url: "https://journals.sagepub.com/doi/10.1177/1362361312442842" },
      { label: "Vaccines Do Not Cause Autism", org: "CDC", url: "https://www.cdc.gov/vaccinesafety/concerns/autism.html" },
    ],
  },
  {
    id: "con-05",
    pillar: "conhecimento",
    icon: "♀",
    title: "TEA em Mulheres — O Diagnóstico Invisível",
    subtitle: "Por que tantas mulheres autistas chegam à vida adulta sem diagnóstico",
    tags: ["Mulheres", "Diagnóstico", "Masking"],
    summary:
      "Mulheres com TEA são sistematicamente subdiagnosticadas. Não porque o autismo seja diferente nelas — mas porque os critérios diagnósticos foram construídos quase que exclusivamente a partir de estudos com meninos e homens.",
    sections: [
      {
        heading: "O problema do diagnóstico tardio",
        paragraphs: [
          "Historicamente, o TEA foi descrito e estudado com base em populações majoritariamente masculinas. Isso criou um viés profundo: os critérios clínicos refletem o perfil de apresentação mais comum em meninos — comportamentos mais externalizados, interesses restritos evidentes e menor habilidade de camuflagem social.",
          "Mulheres e meninas, em geral, desenvolvem com mais eficiência o chamado masking (ou camuflagem): o processo de observar, imitar e reproduzir comportamentos sociais esperados para parecer 'neurotípicas'. O resultado é uma aparência de adequação social que frequentemente engana profissionais de saúde, professores, familiares — e a própria pessoa.",
        ],
        highlight:
          "Estudos indicam que mulheres autistas recebem diagnóstico em média 5 a 10 anos mais tarde do que homens. Muitas chegam à vida adulta — e ao mercado de trabalho — sem nunca ter recebido suporte adequado.",
      },
      {
        heading: "Como o masking se manifesta no trabalho",
        paragraphs: [
          "A camuflagem social tem um custo altíssimo. A energia gasta em imitar comportamentos esperados, manter contato visual forçado, simular interesse em conversas sociais e suprimir reações autênticas leva ao chamado burnout autista — um colapso profundo que vai muito além do esgotamento comum.",
        ],
        bullets: [
          "Perfeccionismo extremo como mecanismo de compensação por inseguranças não nomeadas",
          "Ansiedade crônica antes de reuniões, apresentações ou interações sociais não roteirizadas",
          "Esgotamento desproporcional após jornadas de trabalho consideradas 'normais' por colegas",
          "Dificuldade em estabelecer limites por medo de parecer 'difícil' ou 'exagerada'",
          "Hipersensibilidade a críticas — especialmente quando ligadas a habilidades sociais",
          "Sensação constante de 'ser diferente', mesmo sem conseguir nomear por quê",
        ],
      },
      {
        heading: "Comorbidades frequentemente mascaradas",
        paragraphs: [
          "Antes do diagnóstico de TEA, mulheres frequentemente acumulam diagnósticos secundários que tratam sintomas sem chegar à causa. É comum o histórico incluir:",
        ],
        bullets: [
          "Transtorno de Ansiedade Generalizada (TAG)",
          "Depressão recorrente",
          "TDAH — frequentemente diagnosticado antes do TEA",
          "Transtorno Alimentar",
          "Transtorno de Personalidade Borderline (diagnóstico errôneo frequente)",
        ],
        note: "Esses diagnósticos não são necessariamente incorretos — mas tratar apenas eles sem identificar o TEA subjacente limita profundamente a eficácia do suporte.",
      },
      {
        heading: "O que muda com o diagnóstico tardio",
        paragraphs: [
          "Receber o diagnóstico na vida adulta, mesmo que tardio, tende a ser profundamente transformador. Muitas mulheres descrevem o diagnóstico como 'finalmente entender a própria história' — e passam a ressignificar décadas de experiências que antes pareciam falhas pessoais.",
          "No ambiente de trabalho, o diagnóstico permite acessar acomodações razoáveis legalmente garantidas, comunicar necessidades com mais clareza e, muitas vezes, reconhecer e preservar pontos fortes que antes eram vistos como excentricidades.",
        ],
        highlight:
          "Como aponta a Psicóloga Lygia Pereira, especialista em TEA feminino: 'O diagnóstico não muda quem você é. Ele muda como você entende quem você sempre foi.'",
      },
      {
        heading: "Como líderes e RH podem apoiar",
        bullets: [
          "Não presumir que ausência de comportamentos 'clássicos' significa ausência de TEA",
          "Acolher pedidos de acomodação sem exigir que a pessoa 'prove' sua condição continuamente",
          "Evitar comentários como 'você não parece autista' — especialmente para mulheres",
          "Criar canais de feedback escrito — muitas mulheres com TEA comunicam melhor por texto",
          "Reconhecer que burnout autista em mulheres frequentemente é lido como 'crise emocional' — e precisa de suporte especializado",
          "Incentivar o acesso a processos seletivos sem que habilidades sociais sejam critério eliminatório para cargos técnicos",
        ],
      },
    ],
    sources: [
      { label: "Sex/Gender Differences and Autism", org: "Ferri et al. — Frontiers in Psychiatry", url: "https://www.frontiersin.org/articles/10.3389/fpsyt.2018.00219/full" },
      { label: "Camouflaging Autistic Traits", org: "Hull et al. — Journal of Autism and Developmental Disorders", url: "https://link.springer.com/article/10.1007/s10803-017-3166-5" },
      { label: "Late Diagnosis of ASD in Women", org: "Leedham et al. — Autism in Adulthood", url: "https://www.liebertpub.com/doi/10.1089/aut.2019.0004" },
      { label: "Psicóloga Lygia Pereira — TEA em Mulheres", org: "Instagram @lygiapereirapsico", url: "https://www.instagram.com/lygiapereirapsico" },
    ],
  },
  {
    id: "con-06",
    pillar: "conhecimento",
    icon: "card",
    title: "CIPTEA — Carteira de Identificação da Pessoa com TEA",
    subtitle: "Lei Romeo Mion (Lei nº 13.977/2020) — o que é, o que garante e como solicitar",
    tags: ["CIPTEA", "Direitos", "Documentos"],
    summary:
      "A CIPTEA é um documento gratuito, nacional e oficial que identifica a pessoa com TEA e garante atendimento prioritário em serviços públicos e privados. Criada pela Lei Romeo Mion, ela existe para reduzir barreiras concretas no dia a dia.",
    sections: [
      {
        heading: "O que é a CIPTEA",
        paragraphs: [
          "A Carteira de Identificação da Pessoa com Transtorno do Espectro Autista (CIPTEA) foi criada pela Lei nº 13.977/2020, conhecida como Lei Romeo Mion — em homenagem ao filho do apresentador Marcos Mion, que tem TEA.",
          "É um documento de porte voluntário, gratuito e emitido pelos estados e municípios. Não substitui o laudo médico, mas facilita a identificação rápida em situações onde o autismo não é visível — e garante direitos sem que a pessoa precise explicar ou justificar sua condição repetidamente.",
        ],
        highlight:
          "A CIPTEA não exige nenhuma comprovação de 'grau de autismo'. Qualquer pessoa com diagnóstico de TEA tem direito ao documento — independentemente do perfil de suporte ou funcionalidade.",
      },
      {
        heading: "O que a CIPTEA garante na prática",
        bullets: [
          "Atendimento prioritário em filas e serviços públicos e privados (saúde, bancos, cartórios, repartições)",
          "Acesso prioritário em unidades de saúde, hospitais e prontos-socorros",
          "Prioridade em programas habitacionais, educação e assistência social",
          "Facilita o acesso a benefícios do INSS e enquadramento como PCD",
          "Dispensa de explicações repetidas em cada atendimento — o documento fala por si",
          "Reduz situações de constrangimento em contextos de crise ou sobrecarga sensorial",
          "Pode ser apresentado em processos seletivos para vagas de PCD",
        ],
      },
      {
        heading: "O que vem escrito na carteira",
        paragraphs: [
          "A carteira contém: nome completo, foto, data de nascimento, filiação, número do CPF, número do documento, QR Code de autenticação e o texto 'Pessoa com Transtorno do Espectro Autista — Atendimento Prioritário'. Não contém informações sobre nível de suporte ou capacidade funcional.",
        ],
      },
      {
        heading: "Como solicitar — documentos geralmente exigidos",
        bullets: [
          "Laudo médico com diagnóstico de TEA (CID F84) assinado por médico ou psicólogo",
          "Documento de identidade com foto (RG ou CNH)",
          "CPF",
          "Comprovante de residência",
          "Foto recente (em alguns estados)",
          "Para menores de idade: documentos do responsável legal",
        ],
        note: "Os requisitos exatos variam por estado. Consulte o portal do seu estado abaixo antes de reunir os documentos.",
      },
      {
        heading: "Solicite no seu estado",
        paragraphs: [
          "A emissão é feita pelos estados e municípios. Acesse diretamente o portal oficial do seu estado nas fontes abaixo — cada link leva à página de solicitação.",
        ],
      },
    ],
    sources: [
      { label: "Lei nº 13.977/2020 — Lei Romeo Mion (texto integral)", org: "Planalto.gov.br", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l13977.htm" },
      { label: "CIPTEA — Portal São Paulo", org: "Governo do Estado de SP", url: "https://ciptea.sp.gov.br/" },
      { label: "CIPTEA — Minas Gerais", org: "Secretaria de Desenvolvimento Social MG", url: "https://social.mg.gov.br/direitos-humanos/acoes-e-servicos/ciptea" },
      { label: "CIPTEA — Paraná", org: "Portal de Serviços do Paraná", url: "https://www.parana.pr.gov.br/servicos/Cidadania/Direitos/Solicitar-a-Carteira-do-Autista-gwoBgeNz" },
      { label: "CIPTEA — Rio Grande do Sul", org: "FADERS-RS", url: "https://faders.rs.gov.br/carteira-de-identificacao-da-pessoa-com-transtorno-do-espectro-autista-ciptea" },
      { label: "CIPTEA — Bahia", org: "SJDH Bahia", url: "http://www.ciptea.sjdh.ba.gov.br/" },
      { label: "CIPTEA — Pernambuco", org: "SJDHVPS Pernambuco", url: "https://www.sjdh.pe.gov.br/cadastramento-da-carteira-do-autismo/" },
      { label: "CIPTEA — Goiás", org: "Governo de Goiás", url: "https://goias.gov.br/social/carteira-de-identificacao-do-autista/" },
      { label: "CIPTEA — Fortaleza / Ceará", org: "Prefeitura de Fortaleza", url: "https://ciptea.fortaleza.ce.gov.br/" },
      { label: "CIPTEA — Distrito Federal", org: "GDF — CadPCD", url: "https://sistemas.df.gov.br/cadpcd/login" },
    ],
  },
];

// ═══════════════════════════════════════════════════════
//  PILAR 4 — ENQUADRAMENTO PCD & LEGISLAÇÃO
// ═══════════════════════════════════════════════════════

export const legislacaoCards: ContentCard[] = [
  {
    id: "leg-01",
    pillar: "legislacao",
    icon: "📜",
    title: "Lei Berenice Piana — Seus Direitos na Íntegra",
    subtitle: "A lei que transformou o autismo em deficiência protegida no Brasil",
    tags: ["Lei", "Direitos"],
    summary:
      "A Lei 12.764/2012 reconhece o TEA como deficiência para todos os efeitos legais. Entender o que isso significa na prática muda o que você pode exigir.",
    sections: [
      {
        heading: "O que a lei garante",
        bullets: [
          "Reconhecimento do autismo como deficiência para todos os efeitos legais no Brasil",
          "Acesso a educação, saúde, assistência social e previdência social",
          "Proteção contra discriminação por qualquer instituição pública ou privada",
          "Acesso a acompanhante especializado em classes de ensino regular",
          "Atenção integral à saúde pelo SUS, incluindo diagnóstico e intervenção terapêutica",
        ],
      },
      {
        heading: "Lei 13.146/2015 — Lei Brasileira de Inclusão (LBI)",
        paragraphs: [
          "Conhecida como Estatuto da Pessoa com Deficiência, a LBI ampliou e detalhou os direitos. Artigos relevantes para o trabalho:",
        ],
        bullets: [
          "Art. 34: Direito ao trabalho em igualdade de oportunidades",
          "Art. 37: Proibição de exigência de aptidão plena e irrestrita para contratação",
          "Art. 38: Qualquer ato discriminatório é nulo de pleno direito",
          "Art. 39: Empresa com 100+ empregados deve reservar cargos para PCD (Lei 8.213/91)",
          "Acomodações razoáveis são obrigação do empregador, não favor",
        ],
      },
      {
        heading: "Proteção internacional",
        paragraphs: [
          "O Brasil ratificou a Convenção sobre os Direitos das Pessoas com Deficiência da ONU (Decreto 6.949/2009) com equivalência constitucional — ou seja, ela está acima de leis ordinárias.",
        ],
        highlight: "Artigo 27 da Convenção da ONU: garante o direito ao trabalho em igualdade com as demais pessoas, incluindo acomodações razoáveis.",
      },
    ],
    sources: [
      { label: "Lei 12.764/2012 — Íntegra", org: "Planalto.gov.br", url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm" },
      { label: "Lei 13.146/2015 — Estatuto PCD", org: "Planalto.gov.br", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm" },
      { label: "Convenção ONU sobre Direitos PCD", org: "ONU / Planalto.gov.br", url: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/decreto/d6949.htm" },
    ],
  },
  {
    id: "leg-02",
    pillar: "legislacao",
    icon: "🏢",
    title: "Lei de Cotas — Como Funciona na Prática",
    subtitle: "Percentuais obrigatórios, cálculo e o que muda para você",
    tags: ["Cotas", "PCD"],
    summary:
      "A Lei 8.213/91 obriga empresas a reservar vagas para PCD. Entender como funciona ajuda a saber seus direitos antes de qualquer processo seletivo.",
    sections: [
      {
        heading: "Percentuais obrigatórios",
        bullets: [
          "100 a 200 funcionários → 2% das vagas reservadas para PCD",
          "201 a 500 funcionários → 3%",
          "501 a 1.000 funcionários → 4%",
          "Acima de 1.001 funcionários → 5%",
        ],
      },
      {
        heading: "O que isso significa para você",
        bullets: [
          "Empresas elegíveis têm obrigação legal de manter essas vagas preenchidas — não é caridade",
          "Você pode concorrer explicitamente como candidato PCD em processos seletivos",
          "Processos seletivos para PCD devem ter critérios equivalentes às vagas regulares, adaptados quando necessário",
          "A contratação pela cota não significa cargo inferior ou salário diferente",
          "Demissão de cotista PCD sem substituição por outro PCD pode gerar autuação do Ministério do Trabalho",
        ],
        highlight: "Cotistas PCD têm estabilidade no emprego reconhecida por jurisprudência do TST — similar à estabilidade de gestante em muitos TRTs.",
      },
      {
        heading: "Formalização no e-Social",
        paragraphs: [
          "Após o enquadramento, a empresa registra sua condição PCD no e-Social e RAIS (Relação Anual de Informações Sociais). Esse registro é o que gera as proteções legais. Peça confirmação escrita de que foi registrado.",
        ],
      },
    ],
    sources: [
      { label: "Lei 8.213/91 — Lei de Benefícios da Previdência", org: "Planalto.gov.br", url: "https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm" },
      { label: "Nota Técnica — Cota PCD", org: "Ministério do Trabalho e Emprego", url: "https://www.gov.br/trabalho-e-emprego/pt-br" },
    ],
  },
  {
    id: "leg-03",
    pillar: "legislacao",
    icon: "📋",
    title: "Passo a Passo — Enquadramento como PCD",
    subtitle: "Do laudo ao registro: guia completo sem jargão",
    tags: ["Enquadramento", "Passo a Passo"],
    summary:
      "O enquadramento como PCD é um processo documentável e previsível. Com o laudo certo e os passos corretos, é mais simples do que parece.",
    sections: [
      {
        heading: "Passo 1 — Obtenha o laudo médico",
        bullets: [
          "Profissional habilitado: psiquiatra ou neurologista (CRM ativo)",
          "O laudo deve conter: diagnóstico de TEA, CID-10 correspondente (F84.0 a F84.9), CRM do médico, data de emissão",
          "Com o DSM-5: referência à classificação como alternativa ao CID-10",
          "Muitos planos de saúde cobrem a consulta para diagnóstico",
          "SUS: encaminhamento pelo médico de família para psiquiatra ou neurologia",
        ],
      },
      {
        heading: "Passo 2 — Reúna a documentação",
        bullets: [
          "Laudo médico original + cópia",
          "RG e CPF",
          "Carteira de trabalho (física ou digital)",
          "Comprovante de residência atualizado",
        ],
      },
      {
        heading: "Passo 3 — Contate o RH da empresa",
        bullets: [
          "Informe que deseja se enquadrar como PCD pela Lei de Cotas (Lei 8.213/91)",
          "Entregue documentação e solicite protocolo de recebimento por escrito",
          "Pergunte sobre o prazo de processamento e como você será informado",
          "Guarde cópia de tudo que entregou",
        ],
      },
      {
        heading: "Passo 4 — Acompanhe o registro",
        bullets: [
          "A empresa tem obrigação de registrar no e-Social e RAIS",
          "Você pode verificar seu registro no e-Social pelo portal do trabalhador",
          "Processo típico: 5 a 15 dias úteis",
          "Se não houver feedback no prazo, cobre por e-mail — deixe rastro",
        ],
        note: "O enquadramento não altera salário, cargo ou função. Garante apenas suas proteções legais e acesso à estabilidade.",
      },
      {
        heading: "Passo 5 — Mantenha documentação atualizada",
        bullets: [
          "Alguns RHs pedem renovação periódica do laudo — verifique a política interna",
          "Guarde cópias digitais de tudo em local seguro",
          "Se trocar de emprego, o processo se repete na nova empresa",
        ],
      },
    ],
    sources: [
      { label: "Como obter benefícios PCD — Guia Prático", org: "FENPB", url: "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/fiscalizacao-trabalho/inclusao-de-pessoas-com-deficiencia/pessoas-com-deficiencia" },
    ],
  },
  {
    id: "leg-04",
    pillar: "legislacao",
    icon: "🛡️",
    title: "Proteção Contra Discriminação",
    subtitle: "O que é discriminação, como reconhecê-la e o que fazer",
    tags: ["Discriminação", "Proteção"],
    summary:
      "Discriminação por deficiência é crime no Brasil. Saber reconhecê-la e documentá-la é o primeiro passo para se proteger.",
    sections: [
      {
        heading: "O que configura discriminação por deficiência",
        bullets: [
          "Demissão sem justa causa após revelação do diagnóstico",
          "Preterição em promoções com menção explícita ou implícita à deficiência",
          "Negação sistemática de acomodações razoáveis documentadas",
          "Comentários depreciativos sobre capacidade relacionados à condição",
          "Exclusão de processos seletivos internos sem fundamentação objetiva",
          "Ambiente hostil que torne o trabalho insustentável (assédio moral)",
        ],
      },
      {
        heading: "Como documentar — o que salva",
        bullets: [
          "Salve e-mails, mensagens e qualquer comunicação escrita que registre o problema",
          "Anote datas, horários, pessoas presentes e o que foi dito",
          "Envie e-mails formalizando conversas verbais: 'Conforme conversado...'",
          "Se houver testemunhas, anote os nomes",
          "Nunca delete comunicações que possam ser relevantes",
        ],
        highlight: "Documentação é tudo em processos trabalhistas. O que não está escrito, para o juiz, não aconteceu.",
      },
      {
        heading: "Para onde ir",
        bullets: [
          "RH da empresa — primeiro passo, registre a denúncia formalmente",
          "DRT (Delegacia Regional do Trabalho) — denúncia de violações trabalhistas",
          "MPT (Ministério Público do Trabalho) — casos mais graves ou recorrentes",
          "Advogado trabalhista — para ação judicial (primeiro ano gratuito para CTPS assinada)",
          "OAB — serviço de assistência jurídica gratuita",
        ],
      },
    ],
    sources: [
      { label: "Lei 9.029/1995 — Práticas Discriminatórias", org: "Planalto.gov.br", url: "https://www.planalto.gov.br/ccivil_03/leis/l9029.htm" },
      { label: "Denúncia — Ministério Público do Trabalho", org: "MPT", url: "https://www.pgt.mpt.mp.br/ouvidoria/" },
    ],
  },
  {
    id: "leg-05",
    pillar: "legislacao",
    icon: "card",
    title: "Lei Romeo Mion — CIPTEA na Prática",
    subtitle: "Lei nº 13.977/2020: o que garante, como solicitar e por que importa",
    tags: ["Lei Romeo Mion", "CIPTEA", "Documentos"],
    summary:
      "A Lei Romeo Mion criou a Carteira de Identificação da Pessoa com TEA (CIPTEA) — documento gratuito que garante atendimento prioritário e facilita o acesso a direitos sem que a pessoa precise se explicar repetidamente.",
    sections: [
      {
        heading: "O que é a Lei Romeo Mion",
        paragraphs: [
          "A Lei nº 13.977, sancionada em 8 de janeiro de 2020, ficou conhecida como Lei Romeo Mion — em homenagem ao filho do apresentador Marcos Mion, que tem TEA.",
          "Ela criou a CIPTEA (Carteira de Identificação da Pessoa com Transtorno do Espectro Autista), documento oficial, gratuito e de abrangência nacional, emitido por estados e municípios.",
        ],
      },
      {
        heading: "O que a CIPTEA garante",
        bullets: [
          "Atendimento prioritário em serviços públicos e privados (saúde, educação, bancos, comércio)",
          "Identificação imediata da condição sem necessidade de apresentar laudo a cada situação",
          "Acesso facilitado a benefícios e políticas públicas voltadas ao TEA",
          "Validade nacional — emitida em qualquer estado, reconhecida em todo o Brasil",
        ],
        highlight: "A CIPTEA não substitui o laudo médico, mas evita que a pessoa precise se justificar repetidamente para acessar direitos que já são seus.",
      },
      {
        heading: "Como solicitar",
        bullets: [
          "Acesse o portal digital do seu estado ou município (links nas fontes abaixo)",
          "Tenha em mãos: laudo médico com CID-10 F84, documento de identidade, CPF e foto recente",
          "A emissão é gratuita e o prazo varia por estado — em geral de 5 a 30 dias úteis",
          "A carteira tem validade de 5 anos e pode ser renovada",
        ],
      },
      {
        heading: "No ambiente de trabalho",
        paragraphs: [
          "Apresentar a CIPTEA ao RH é uma forma objetiva de comunicar o diagnóstico sem precisar expor detalhes clínicos. Facilita a solicitação de acomodações razoáveis e o enquadramento como PCD na empresa.",
        ],
        bullets: [
          "Use para formalizar solicitações de acomodações junto ao RH",
          "Não é obrigatório apresentá-la — é um direito, não uma exigência",
          "Combinada com laudo médico, fortalece o pedido de enquadramento PCD",
        ],
      },
    ],
    sources: [
      { label: "Lei nº 13.977/2020 — Lei Romeo Mion (texto integral)", org: "Planalto.gov.br", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l13977.htm" },
      { label: "CIPTEA — Portal São Paulo", org: "Governo do Estado de SP", url: "https://ciptea.sp.gov.br/" },
      { label: "CIPTEA — Minas Gerais", org: "Secretaria de Desenvolvimento Social MG", url: "https://social.mg.gov.br/direitos-humanos/acoes-e-servicos/ciptea" },
      { label: "CIPTEA — Paraná", org: "Portal de Serviços do Paraná", url: "https://www.parana.pr.gov.br/servicos/Cidadania/Direitos/Solicitar-a-Carteira-do-Autista-gwoBgeNz" },
    ],
  },
];

// ═══════════════════════════════════════════════════════
//  FAQ
// ═══════════════════════════════════════════════════════

export const faqItems: FAQItem[] = [
  {
    category: "Diagnóstico",
    question: "Preciso de diagnóstico formal para solicitar acomodações no trabalho?",
    answer:
      "Não necessariamente. Você pode descrever suas necessidades funcionais ao RH sem mencionar o diagnóstico. Para enquadramento como PCD e acesso à cota, o laudo médico formal é necessário.",
  },
  {
    category: "Diagnóstico",
    question: "Onde posso buscar diagnóstico de TEA como adulto?",
    answer:
      "Psiquiatras e neuropsicólogos são os profissionais habilitados. O SUS oferece avaliação pelo CAPS (Centro de Atenção Psicossocial). Planos de saúde geralmente cobrem avaliação neuropsicológica.",
  },
  {
    category: "Trabalho",
    question: "Meu empregador pode me demitir por ser autista?",
    answer:
      "Não. Discriminação por deficiência é ilegal (Lei 9.029/1995 e Lei 13.146/2015). Além disso, colaboradores PCD cotistas têm estabilidade no emprego reconhecida por jurisprudência do TST.",
  },
  {
    category: "Trabalho",
    question: "Preciso contar para toda a empresa que sou autista?",
    answer:
      "Não. Você decide com quem compartilha seu diagnóstico. Apenas o RH precisa saber para processar o enquadramento como PCD, e eles têm dever de sigilo profissional.",
  },
  {
    category: "Gestão",
    question: "Como dar feedback para um colaborador TEA?",
    answer:
      "Seja direto, específico e positivo. Evite ironias e subentendidos. Prefira comunicação escrita. Exemplifique com situações concretas. Evite críticas vagas como 'precisa melhorar a postura'.",
  },
  {
    category: "Gestão",
    question: "O que fazer quando um colaborador está em sobrecarga (meltdown ou shutdown)?",
    answer:
      "Ofereça espaço tranquilo e privado. Reduza estímulos. Não exija resposta imediata. Diga apenas: 'Estou aqui, pode levar o tempo que precisar.' Não toque sem permissão. Adie qualquer conversa sobre o ocorrido.",
  },
  {
    category: "Legislação",
    question: "Toda empresa é obrigada a ter cota PCD?",
    answer:
      "Empresas com 100 ou mais funcionários, sim. Abaixo de 100 funcionários, a cota não é obrigatória pela Lei 8.213/91.",
  },
  {
    category: "Legislação",
    question: "O enquadramento como PCD muda meu salário ou cargo?",
    answer:
      "Não. O enquadramento não altera remuneração, cargo ou funções. Ele garante proteções legais, acesso à cota e estabilidade no emprego.",
  },
];

// ═══════════════════════════════════════════════════════
//  GLOSSÁRIO
// ═══════════════════════════════════════════════════════

export const glossario: GlossaryTerm[] = [
  {
    term: "Stimming",
    definition: "Comportamentos repetitivos de autoestimulação — balançar o corpo, tamborinar dedos, repetir sons. Funcionam como autorregulação emocional e sensorial. São naturais e saudáveis.",
    example: "Usar um spinner, mascar objetos, balançar levemente enquanto trabalha",
  },
  {
    term: "Masking / Camouflaging",
    definition: "Processo de suprimir ou imitar comportamentos neurotípicos para 'se encaixar'. Pode ser inconsciente e aprendido desde a infância. Exaustivo a longo prazo — associado ao burnout autista.",
    example: "Forçar contato visual, ensaiar conversas, conter stims em público",
  },
  {
    term: "Meltdown",
    definition: "Resposta intensa e involuntária à sobrecarga sensorial ou emocional. Não é birra — é uma perda temporária do controle regulatório. A pessoa não escolhe ter um meltdown.",
    example: "Choro intenso, agitação, dificuldade de comunicar, necessidade urgente de sair do ambiente",
  },
  {
    term: "Shutdown",
    definition: "Retirada interna em resposta à sobrecarga. A pessoa fica quieta, imóvel ou sem responder — não por indiferença, mas porque o sistema nervoso entrou em modo de proteção.",
    example: "Monossilabismo repentino, 'olhar vazio', dificuldade de mover ou falar",
  },
  {
    term: "Hiperfoco",
    definition: "Estado de concentração intensa e prolongada em tópicos de interesse. Pode ser uma grande força profissional — mas também dificultar a transição entre tarefas.",
    example: "Trabalhar 6 horas seguidas em um problema sem perceber o tempo passar",
  },
  {
    term: "Neurodivergência",
    definition: "Termo guarda-chuva para variações neurológicas que diferem do padrão neurotípico. Inclui TEA, TDAH, dislexia, TOC, bipolaridade, entre outros.",
  },
  {
    term: "Neurotípico",
    definition: "Pessoa cujo desenvolvimento neurológico segue o padrão considerado 'típico' pela sociedade. É uma referência descritiva, não um julgamento de valor.",
  },
  {
    term: "Dupla Empatia",
    definition: "Teoria que propõe que dificuldades de comunicação entre autistas e não-autistas são bidirecionais — ambos os grupos têm dificuldade de entender o outro, não só os autistas.",
    example: "Não-autistas também têm dificuldade de interpretar comunicação direta e literal",
  },
  {
    term: "Burnout Autista",
    definition: "Estado de exaustão profunda causado por esforço prolongado de masking e sobrecarga sensorial/social. Diferente do burnout comum — pode incluir regressão de habilidades e meses de recuperação.",
  },
  {
    term: "Acomodação Razoável",
    definition: "Ajuste no ambiente ou processo de trabalho que permite desempenho equitativo. É um direito garantido pela legislação brasileira e pela Convenção da ONU — não um favor.",
    example: "Trabalho remoto, instruções por escrito, flexibilidade de horário",
  },
  {
    term: "Sensibilidade Sensorial",
    definition: "Resposta exacerbada (hiper) ou reduzida (hipo) a estímulos sensoriais. Pode envolver qualquer sentido: som, luz, toque, textura, cheiro, temperatura, propriocepção.",
  },
  {
    term: "Diagnóstico Tardio",
    definition: "Diagnóstico de TEA recebido na adolescência ou vida adulta. Cada vez mais comum, especialmente em mulheres e pessoas negras — historicamente sub-diagnosticadas.",
  },
];

// ═══════════════════════════════════════════════════════
//  ÍNDICE E BUSCA
// ═══════════════════════════════════════════════════════

export const allCards: ContentCard[] = [
  ...liderancaCards,
  ...colaboradoresCards,
  ...conhecimentoCards,
  ...legislacaoCards,
];

export function searchCards(query: string): ContentCard[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return allCards.filter(
    (c) =>
      c.title.toLowerCase().includes(q) ||
      c.subtitle.toLowerCase().includes(q) ||
      c.summary.toLowerCase().includes(q) ||
      c.tags.some((t) => t.toLowerCase().includes(q)) ||
      c.sections.some(
        (s) =>
          s.heading?.toLowerCase().includes(q) ||
          s.paragraphs?.some((p) => p.toLowerCase().includes(q)) ||
          s.bullets?.some((b) => b.toLowerCase().includes(q))
      )
  );
}

export const PILLAR_META: Record<PillarId, { label: string; icon: string; color: string; description: string }> = {
  lideranca: {
    label: "Liderança & Gestão",
    icon: "🧭",
    color: "indigo",
    description: "Como criar ambientes onde colaboradores TEA entregam o melhor de si",
  },
  colaboradores: {
    label: "Colaboradores TEA",
    icon: "🤝",
    color: "violet",
    description: "Direitos, carreira e acomodações para profissionais no espectro",
  },
  conhecimento: {
    label: "Conhecimento Geral",
    icon: "🔬",
    color: "emerald",
    description: "Base científica, espectro, mitos e glossário interativo sobre TEA",
  },
  legislacao: {
    label: "Enquadramento PCD & Legislação",
    icon: "⚖️",
    color: "amber",
    description: "Leis, cotas e passo a passo para enquadramento como PCD no Brasil",
  },
};

export function getPillarCards(pillar: PillarId): ContentCard[] {
  return allCards.filter((c) => c.pillar === pillar);
}
