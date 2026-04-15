import type { Metadata } from "next";
import "@/styles/teamonks-theme.css";

export const metadata: Metadata = {
  title: "TEAMONKS — TEA no Ambiente Corporativo",
  description:
    "Hub de inteligência e acolhimento focado em TEA no contexto corporativo.",
};

export default function TeamonksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)]">{children}</div>;
}
