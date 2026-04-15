"use client";

import { useEffect, useState } from "react";

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
    localStorage.setItem(
      "teamonks-a11y",
      JSON.stringify({ theme, contrast, fontScale })
    );
  }, [theme, contrast, fontScale]);

  return (
    <div className="flex items-center gap-3 text-sm">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="px-3 py-1 rounded-full border border-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
        aria-label="Alternar modo escuro"
      >
        {theme === "light" ? "🌙 Escuro" : "☀️ Claro"}
      </button>
      <button
        onClick={() => setContrast(contrast === "normal" ? "high" : "normal")}
        className="px-3 py-1 rounded-full border border-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
        aria-label="Alternar alto contraste"
      >
        {contrast === "normal" ? "🔆 Alto Contraste" : "🔅 Normal"}
      </button>
      <button
        onClick={() => setFontScale(Math.min(fontScale + 0.1, 1.5))}
        className="px-2 py-1 rounded-full border border-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
        aria-label="Aumentar fonte"
      >
        A+
      </button>
      <button
        onClick={() => setFontScale(Math.max(fontScale - 0.1, 0.8))}
        className="px-2 py-1 rounded-full border border-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
        aria-label="Diminuir fonte"
      >
        A-
      </button>
    </div>
  );
}
