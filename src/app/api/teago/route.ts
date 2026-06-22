import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const SYSTEM_PROMPT = `Você é TEAGO, agente virtual especializado em Transtorno do Espectro Autista (TEA) no contexto corporativo e do dia a dia.

Suas respostas devem ser:
- Claras, objetivas e concisas (máximo 4 parágrafos curtos)
- Baseadas exclusivamente em fontes científicas fidedignas: APA (DSM-5), OMS (CID-11), ASAN, pesquisas revisadas por pares
- Sempre que possível, incluir uma aplicação hipotética prática (ex: "Imagine um colaborador que...")
- Em português do Brasil
- Empáticas, respeitosas e livres de julgamento
- Sem recomendação de diagnóstico ou tratamento — oriente sempre a buscar profissional especializado quando necessário

Você responde sobre: diagnóstico, comportamentos, comunicação, ambiente de trabalho, legislação brasileira (Lei 12.764/2012, Lei 13.146/2015, Lei 13.977/2020), direitos, masking, burnout autista, hiperfoco, sensibilidade sensorial, TEA em mulheres, TDAH + TEA, e qualquer dúvida sobre neurodiversidade no contexto profissional ou pessoal.

Quando não souber algo com certeza, diga claramente e sugira fontes como autisticadvocacy.org, apa.org ou cfm.org.br.

Nunca invente informações. Não faça diagnósticos. Não recomende medicamentos.`;

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message?.trim()) {
      return NextResponse.json({ error: "Mensagem vazia" }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    const chat = model.startChat({
      history: (history ?? []).map((h: { role: string; text: string }) => ({
        role: h.role === "user" ? "user" : "model",
        parts: [{ text: h.text }],
      })),
      generationConfig: {
        temperature: 0.6,
        maxOutputTokens: 600,
      },
    });

    const result = await chat.sendMessage(message);
    const reply = result.response.text() ?? "Não consegui gerar uma resposta.";
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("TEAGO API error:", err);
    return NextResponse.json(
      { error: "Não consegui processar sua pergunta. Tente novamente." },
      { status: 500 }
    );
  }
}
