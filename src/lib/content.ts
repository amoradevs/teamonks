// TEAMONKS — Conteúdo curado dos 4 pilares

export interface ContentItem {
  id: string;
  title: string;
  body: string;
  tags: string[];
  pillar: "lideranca" | "colaboradores" | "conhecimento" | "legislacao";
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface Resource {
  title: string;
  url: string;
  description: string;
}

// ─── PILLAR 1: Liderança & Gestão ───────────────────────────────────────────
export const liderancaContent: ContentItem[] = [
  {
    id: "lider-01",
    pillar: "lideranca",
    title: "Liderando Equipes Neurodivergentes",
    tags: ["feedback", "comunicação", "gestão"],
    body: `Colaboradores TEA frequentemente processam informações de maneira diferente. Para liderar com eficácia:

**Feedback direto e específico**
- Evite ironias, subtextos ou metáforas ambíguas.
- Prefira: "Esse relatório ficou excelente porque os dados estão claros" a "Tá bom".
- Dê feedback por escrito sempre que possível — facilita o processamento.

**Ajustes de comunicação**
- Use e-mails ou mensagens escritas para instruções complexas.
- Forneça agendas de reunião com antecedência.
- Evite mudanças de última hora sem aviso prévio.

**Gestão de expectativas**
- Defina prazos e prioridades explicitamente.
- Documente combinados por escrito.
- Realize check-ins regulares e previsíveis (ex: toda segunda, 10h).`,
  },
  {
    id: "lider-02",
    pillar: "lideranca",
    title: "Líderes TEA — Transformando Diferenças em Força",
    tags: ["hiperfoco", "liderança", "potencial"],
    body: `Profissionais TEA em cargos de liderança possuem características únicas que, bem direcionadas, geram alto impacto:

**Hiperfoco**
Capacidade de concentração profunda em áreas de interesse. Um líder TEA com hiperfoco em produto pode identificar oportunidades que outros perdem.

**Atenção aos detalhes**
Processos, qualidade e consistência são naturalmente monitorados com precisão excepcional.

**Pensamento lógico e sistêmico**
Tendência a criar sistemas, documentações e fluxos eficientes. Transforma complexidade em clareza.

**Como potencializar:**
- Alinhe responsabilidades às áreas de hiperfoco.
- Forneça ambiente previsível (menos reuniões imprevistas, mais autonomia).
- Valorize a comunicação direta — sem leituras de contexto social implícitas.`,
  },
  {
    id: "lider-03",
    pillar: "lideranca",
    title: "Bullets de Boas Práticas para Gestores",
    tags: ["boas práticas", "inclusão", "dia a dia"],
    body: `Consulte este guia rápido em reuniões ou situações de crise:

✅ **Comunicação**
- Seja direto e objetivo.
- Confirme o entendimento ao final de conversas importantes.
- Evite sarcasmo e humor indireto.

✅ **Ambiente**
- Permita uso de fones de ouvido para redução de estímulos.
- Ofereça opção de trabalho remoto ou em local silencioso.
- Respeite necessidades sensoriais (iluminação, temperatura).

✅ **Reuniões**
- Envie pauta com antecedência (mín. 24h).
- Permita câmera desligada se necessário.
- Registre decisões por escrito após a reunião.

✅ **Crise/Sobrecarregamento**
- Não pressione por resposta imediata.
- Ofereça pausa de 5-15 minutos.
- Substitua reunião emergencial por mensagem escrita quando possível.`,
  },
];

// ─── PILLAR 2: Colaboradores TEA ────────────────────────────────────────────
export const colaboradoresContent: ContentItem[] = [
  {
    id: "colab-01",
    pillar: "colaboradores",
    title: "Carreira e Adaptação — Solicitando Acomodações Razoáveis",
    tags: ["acomodações", "carreira", "adaptação"],
    body: `Acomodações razoáveis são ajustes no ambiente de trabalho que permitem ao profissional TEA desempenhar sua função com eficácia. Você tem direito a solicitá-las.

**O que você pode pedir:**
- Trabalho remoto ou híbrido (redução de estímulos sensoriais).
- Horário flexível (para compromissos terapêuticos ou de maior produtividade).
- Instruções por escrito em vez de apenas verbais.
- Espaço de trabalho silencioso ou uso de fones de ouvido.
- Mais tempo em avaliações de desempenho, se necessário.

**Como solicitar:**
1. Agende uma conversa com RH ou gestor direto.
2. Explique como a acomodação impacta positivamente seu desempenho.
3. Não é necessário revelar o diagnóstico completo — você pode apenas descrever as necessidades.
4. Formalize por e-mail para registro.

**Seu desempenho vem primeiro. A acomodação é uma ferramenta, não um favor.**`,
  },
  {
    id: "colab-02",
    pillar: "colaboradores",
    title: "Direitos e Deveres do Colaborador TEA",
    tags: ["direitos", "legislação", "PCD"],
    body: `**Seus direitos no ambiente corporativo:**

📋 **Proteção contra discriminação**
A Lei Berenice Piana (Lei 12.764/2012) reconhece o autismo como deficiência. Discriminação por motivo de deficiência é crime (Lei 9.029/1995).

📋 **Estabilidade após cota PCD**
Colaboradores contratados pela cota de PCD têm estabilidade no emprego similar à gestante (jurisprudência consolidada em muitos tribunais).

📋 **Acomodações razoáveis**
Previstos na Convenção da ONU sobre Direitos das Pessoas com Deficiência (ratificada pelo Brasil com status constitucional).

**Seus deveres:**
- Cumprir com as atribuições do cargo.
- Comunicar necessidades de adaptação ao RH.
- Colaborar com o processo de ajuste do ambiente.
- Manter comportamento ético e profissional.`,
  },
  {
    id: "colab-03",
    pillar: "colaboradores",
    title: "Recursos Externos — Comunidades e Apoio",
    tags: ["recursos", "comunidade", "apoio"],
    body: `Organizações e recursos confiáveis para profissionais TEA e seus familiares:

**Organizações Internacionais**
- **ASAN (Autistic Self Advocacy Network):** Liderada por autistas, para autistas. Foco em autonomia e direitos civis.
- **Autism Speaks:** Recursos para famílias, pesquisa e consciência sobre TEA.

**Recursos Brasileiros**
- **ABRAÇA (Associação Brasileira para Ação por Direitos das Pessoas com Autismo)**
- **Movimento Orgulho Autista Brasil**
- **educadiversidade.unesp.br** — Material científico e educacional sobre TEA.

**Profissionais de Saúde**
- Psicólogos com especialização em TEA (CRP).
- Psiquiatras para diagnóstico e acompanhamento.
- Terapeutas ocupacionais para integração sensorial.

**Grupos Online**
- Comunidades no Reddit (r/brasil_autistas), Facebook e Discord especializados.`,
  },
];

// ─── PILLAR 3: Conhecimento Geral ───────────────────────────────────────────
export const conhecimentoContent: ContentItem[] = [
  {
    id: "conhec-01",
    pillar: "conhecimento",
    title: "Base DSM-5 — Entendendo o TEA em Linguagem Natural",
    tags: ["DSM-5", "diagnóstico", "ciência"],
    body: `O **Transtorno do Espectro Autista (TEA)** é definido pelo Manual Diagnóstico e Estatístico de Transtornos Mentais (DSM-5) por dois eixos principais:

**1. Diferenças na comunicação e interação social**
- Dificuldades em reciprocidade emocional (ex: iniciar/manter conversas).
- Padrões de comunicação não verbal diferentes (contato visual, expressões).
- Dificuldades em desenvolver e manter relacionamentos conforme esperado.

**2. Padrões restritos e repetitivos de comportamento**
- Movimentos repetitivos (stimming) ou uso repetitivo de objetos/fala.
- Insistência em rotinas e resistência a mudanças.
- Interesses muito intensos e focados (hiperfoco).
- Hiper ou hipo-sensibilidade sensorial (som, luz, toque, textura).

**Diagnóstico Tardio em Adultos**
É cada vez mais comum. Muitos adultos, especialmente mulheres, foram mascarando (camouflaging) sintomas a vida toda. O diagnóstico tardio frequentemente traz alívio e autocompreensão.

**O TEA é um espectro:** não existe "mais" ou "menos" autista, mas diferentes perfis com diferentes necessidades e forças.`,
  },
  {
    id: "conhec-02",
    pillar: "conhecimento",
    title: "Mitos e Verdades sobre TEA",
    tags: ["mitos", "preconceito", "educação"],
    body: `**❌ MITO: Autismo é coisa de criança.**
✅ VERDADE: O TEA é uma condição neurológica permanente. Crianças com TEA se tornam adultos com TEA.

**❌ MITO: Todos os autistas são gênios ou têm habilidades extraordinárias.**
✅ VERDADE: O TEA é um espectro diverso. Algumas pessoas têm altas habilidades em áreas específicas, outras não. Não existe "superpoder" garantido.

**❌ MITO: Autistas não têm empatia.**
✅ VERDADE: Autistas frequentemente têm empatia intensa — o desafio é na expressão e interpretação de sinais sociais, não na ausência de sentimento.

**❌ MITO: Vacinas causam autismo.**
✅ VERDADE: Esta afirmação foi baseada em um estudo fraudulento e desacreditado. Nenhuma evidência científica suporta essa relação.

**❌ MITO: Autistas não querem relações sociais.**
✅ VERDADE: Muitos autistas desejam profundamente conexões sociais, mas podem ter dificuldades com os códigos sociais implícitos.

**❌ MITO: Terapias "curam" o autismo.**
✅ VERDADE: O TEA não é uma doença que precisa de cura. Terapias buscam desenvolver habilidades e bem-estar, respeitando a neurodivergência.`,
  },
];

// ─── PILLAR 4: Enquadramento PCD & Legislação ───────────────────────────────
export const legislacaoContent: ContentItem[] = [
  {
    id: "leg-01",
    pillar: "legislacao",
    title: "Lei Berenice Piana — Benefícios do Enquadramento",
    tags: ["lei", "PCD", "benefícios", "autismo"],
    body: `A **Lei 12.764/2012 (Lei Berenice Piana)** reconhece o autismo como deficiência para todos os efeitos legais no Brasil. Isso significa:

**O que muda com o enquadramento:**
- Acesso à cota de PCD em empresas (Lei 8.213/91).
- Direito a benefícios previdenciários específicos.
- Proteção legal contra discriminação no trabalho.
- Acesso a serviços de saúde especializados pelo SUS.
- Prioridade em filas de atendimento em repartições públicas.

**Lei de Cotas (Lei 8.213/91):**
Empresas com 100 ou mais funcionários são obrigadas a preencher de 2% a 5% dos cargos com beneficiários reabilitados ou PCD:
- 100 a 200 funcionários → 2%
- 201 a 500 → 3%
- 501 a 1.000 → 4%
- Acima de 1.001 → 5%

**Importante:** O enquadramento é uma escolha do colaborador. Você não é obrigado a se enquadrar como PCD.`,
  },
  {
    id: "leg-02",
    pillar: "legislacao",
    title: "Passo a Passo — Como se Enquadrar como PCD",
    tags: ["passo a passo", "enquadramento", "laudo", "RH"],
    body: `**Guia prático para o enquadramento como PCD (TEA) na empresa:**

**Passo 1 — Obtenha o laudo médico**
- Procure um psiquiatra ou neurologista.
- Solicite laudo com CID-10 (F84.0 a F84.9) ou DSM-5.
- O laudo deve conter: diagnóstico, CRM do médico e descrição do quadro.

**Passo 2 — Reúna a documentação**
- Laudo médico original.
- RG e CPF.
- Carteira de trabalho.
- Comprovante de residência.

**Passo 3 — Contate o RH**
- Informe que deseja se enquadrar como PCD pela Lei de Cotas.
- Entregue a documentação ao setor de RH ou DP.
- Solicite protocolo de recebimento.

**Passo 4 — Aguarde o processo**
- A empresa registrará seu enquadramento no e-Social e RAIS.
- Você receberá confirmação formal.
- O processo normalmente leva de 5 a 15 dias úteis.

**Passo 5 — Mantenha documentos atualizados**
- Laudos podem ter prazo de validade (verifique com o RH).
- Guarde cópias de todos os documentos entregues.

💡 **Dica:** O enquadramento não altera seu salário nem suas funções. Ele apenas garante suas proteções legais.`,
  },
];

// ─── GLOSSÁRIO ───────────────────────────────────────────────────────────────
export const glossario: GlossaryTerm[] = [
  { term: "Stimming", definition: "Comportamentos repetitivos auto-estimulantes (ex: balançar o corpo, tamborilar dedos). Funcionam como autorregulação emocional e sensorial." },
  { term: "Masking / Camouflaging", definition: "Processo de suprimir ou disfarçar características autistas para se adequar a normas sociais. Pode ser exaustivo e prejudicial a longo prazo." },
  { term: "Meltdown", definition: "Resposta intensa e involuntária à sobrecarga sensorial ou emocional. Não é birra — é uma perda temporária do controle regulatório." },
  { term: "Shutdown", definition: "Retirada de estímulos sociais e comunicativos em resposta à sobrecarga. A pessoa pode ficar quieta, imóvel ou sem responder." },
  { term: "Neurodivergência", definition: "Termo guarda-chuva que descreve variações neurológicas (TEA, TDAH, dislexia, etc.) que diferem do padrão neurotípico." },
  { term: "Neurotípico", definition: "Pessoa cujo desenvolvimento neurológico segue o padrão considerado 'típico' pela sociedade." },
  { term: "Hiperfoco", definition: "Capacidade de concentração intensa e prolongada em tópicos de interesse. Pode ser uma grande força profissional quando bem direcionado." },
  { term: "Sensibilidade Sensorial", definition: "Resposta exacerbada ou reduzida a estímulos sensoriais (sons, luzes, texturas, cheiros). Pode causar desconforto significativo em ambientes não adaptados." },
  { term: "Diagnóstico Tardio", definition: "Diagnóstico de TEA recebido na adolescência ou vida adulta, após anos de masking ou falta de acesso a avaliação especializada." },
  { term: "Acomodação Razoável", definition: "Ajuste no ambiente ou processo de trabalho que permite à pessoa com deficiência desempenhar suas funções. É um direito garantido pela legislação brasileira e internacional." },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const faqItems: FAQItem[] = [
  {
    category: "Diagnóstico",
    question: "Preciso de diagnóstico formal para solicitar acomodações?",
    answer: "Não necessariamente. Você pode descrever suas necessidades ao RH sem revelar o diagnóstico. Porém, para enquadramento como PCD e acesso à cota, o laudo médico formal é necessário.",
  },
  {
    category: "Diagnóstico",
    question: "Onde posso buscar diagnóstico de TEA em adultos?",
    answer: "Psiquiatras e neuropsicólogos são os profissionais habilitados. O SUS oferece avaliação pelo CAPS (Centro de Atenção Psicossocial). Planos de saúde costumam cobrir avaliação neuropsicológica.",
  },
  {
    category: "Trabalho",
    question: "Meu empregador pode me demitir por ser autista?",
    answer: "Não. Discriminação por deficiência é ilegal (Lei 9.029/1995). Além disso, colaboradores PCD cotistas têm estabilidade no emprego reconhecida por jurisprudência.",
  },
  {
    category: "Trabalho",
    question: "Preciso contar para toda a empresa que sou autista?",
    answer: "Não. Você decide com quem compartilha seu diagnóstico. Apenas o RH precisa saber para processar o enquadramento como PCD, e eles têm sigilo profissional.",
  },
  {
    category: "Gestão",
    question: "Como dar feedback para um colaborador TEA?",
    answer: "Seja direto, específico e positivo. Evite ironias. Prefira comunicação escrita. Exemplifique com situações concretas. Evite críticas vagas como 'precisa melhorar a postura'.",
  },
  {
    category: "Gestão",
    question: "O que fazer quando um colaborador TEA está sobrecarregado?",
    answer: "Ofereça uma pausa (5-15 min). Evite pressão por resposta imediata. Substitua reunião por mensagem escrita. Reduza estímulos do ambiente se possível.",
  },
  {
    category: "Legislação",
    question: "Toda empresa é obrigada a ter cota PCD?",
    answer: "Empresas com 100 ou mais funcionários, sim. Abaixo de 100 funcionários, a cota não é obrigatória pela Lei 8.213/91.",
  },
  {
    category: "Legislação",
    question: "O enquadramento como PCD muda meu salário?",
    answer: "Não. O enquadramento não altera remuneração, cargo ou funções. Ele apenas garante proteções legais e acesso à cota.",
  },
];

// ─── RECURSOS EXTERNOS ───────────────────────────────────────────────────────
export const recursos: Resource[] = [
  { title: "ASAN — Autistic Self Advocacy Network", url: "https://autisticadvocacy.org", description: "Organização liderada por autistas focada em direitos civis e autonomia." },
  { title: "Autism Speaks", url: "https://www.autismspeaks.org", description: "Recursos para famílias, pesquisa e ferramentas de suporte." },
  { title: "UNESP — Educadiversidade", url: "https://educadiversidade.unesp.br", description: "Material científico e educacional sobre TEA e neurodiversidade." },
  { title: "ABRAÇA", url: "https://abraca.org.br", description: "Associação Brasileira para Ação por Direitos das Pessoas com Autismo." },
];

// ─── SEARCH INDEX ─────────────────────────────────────────────────────────────
export const allContent: ContentItem[] = [
  ...liderancaContent,
  ...colaboradoresContent,
  ...conhecimentoContent,
  ...legislacaoContent,
];

export function searchContent(query: string): ContentItem[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return allContent.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.body.toLowerCase().includes(q) ||
      item.tags.some((tag) => tag.toLowerCase().includes(q))
  );
}
