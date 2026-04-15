"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, ZoomIn, ZoomOut, Contrast } from "lucide-react";

export function AccessibilityControls() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [contrast, setContrast] = useState<"normal" | "high">("normal");
  const [fontScale, setFontScale] = useState(1);

  useEffect(() => {
    const stored = localStorage.getItem("teamonks-a11y");
    if (stored) {
      const prefs = JSON.parse(stored);
      setTheme(prefs.theme ?? "light");
      setContrast(prefs.contrast ?? "normal");
      setFontScale(prefs.fontScale ?? 1);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.contrast = contrast;
    document.documentElement.style.setProperty("--font-scale", String(fontScale));
    localStorage.setItem("teamonks-a11y", JSON.stringify({ theme, contrast, fontScale }));
  }, [theme, contrast, fontScale]);

  const btnClass =
    "p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition";

  return (
    <div className="flex items-center gap-1.5" aria-label="Controles de acessibilidade">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={btnClass}
        title={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
        aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
      >
        {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
      </button>
      <button
        onClick={() => setContrast(contrast === "normal" ? "high" : "normal")}
        className={btnClass}
        title="Alternar alto contraste"
        aria-label="Alternar alto contraste"
      >
        <Contrast size={16} />
      </button>
      <button
        onClick={() => setFontScale(Math.min(fontScale + 0.1, 1.5))}
        className={btnClass}
        title="Aumentar fonte"
        aria-label="Aumentar fonte"
      >
        <ZoomIn size={16} />
      </button>
      <button
        onClick={() => setFontScale(Math.max(fontScale - 0.1, 0.8))}
        className={btnClass}
        title="Diminuir fonte"
        aria-label="Diminuir fonte"
      >
        <ZoomOut size={16} />
      </button>
    </div>
  );
}
