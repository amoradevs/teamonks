# TEAMONKS

Hub de conhecimento sobre TEA (Transtorno do Espectro Autista) no ambiente corporativo, desenvolvido para líderes, colaboradores e RH da Monks.

**Live:** [teamonks.vercel.app/teamonks](https://teamonks.vercel.app/teamonks)

---

## Stack

- **Next.js 15** — App Router, SSR/SSG
- **TypeScript**
- **Tailwind CSS v4** — dark mode via `@custom-variant dark`
- **Groq SDK** — llama-3.3-70b-versatile (agente TEAGO)
- **Lucide React** — ícones
- **Vercel** — deploy contínuo

---

## Funcionalidades

### Pilares de conteúdo
Quatro pilares com cards expansíveis, filtros por tag e fontes citadas:
- **Liderança & Gestão** — práticas inclusivas para líderes
- **Colaboradores TEA** — direitos, carreira e acomodações
- **Conhecimento Geral** — espectro, mitos, burnout autista, masking
- **Enquadramento PCD & Legislação** — Lei 12.764/2012, Lei 13.146/2015, Lei 13.977/2020

### TEAGO — Agente Virtual
Widget de chat flutuante com zoom no hover. Powered by Groq (llama-3.3-70b-versatile).
- Responde dúvidas sobre TEA no trabalho, direitos e neurodiversidade
- Histórico de conversa por sessão
- Sugestões de perguntas na abertura
- Botão **Copiar** em cada resposta (copia para clipboard, compatível com qualquer doc)
- Atalho de contato direto com RH

### Busca global
Busca em tempo real por título, tags e conteúdo de todos os cards.

### Downloads
Guias em PDF prontos para reuniões e treinamentos:
- Guia do Gestor Inclusivo
- Glossário TEA no Trabalho
- Passo a Passo PCD

### Acessibilidade
Controles de fonte e modo escuro via `AccessibilityControls`.

---

## Estrutura

```
src/
├── app/
│   ├── teamonks/                  # Home e páginas de pilar
│   │   ├── page.tsx
│   │   └── [pillar]/page.tsx
│   └── api/teago/route.ts         # API do agente TEAGO (Groq)
├── components/teamonks/
│   ├── ContactWidget.tsx          # Widget TEAGO com chat
│   ├── PillarPage.tsx             # Página de pilar com filtros
│   ├── SearchBar.tsx              # Busca global
│   ├── FAQ.tsx
│   └── AccessibilityControls.tsx
└── lib/
    ├── content.ts                 # Cards, pilares e busca
    └── icons.ts                   # Mapa de ícones Lucide
```

---

## Variáveis de Ambiente

```env
GROQ_API_KEY=your_groq_api_key
```

Configurar no Vercel em **Settings → Environment Variables**.

---

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000/teamonks](http://localhost:3000/teamonks).
