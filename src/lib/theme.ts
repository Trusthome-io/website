// Thème clair / sombre. Par défaut, le site suit le réglage du système ;
// un clic sur le bouton mémorise le choix du visiteur.

export const THEME_KEY = "th_theme";
export type Theme = "light" | "dark";

// Exécuté dans <head> avant l'affichage pour éviter un flash de la mauvaise couleur.
// Sans choix mémorisé, suit aussi les changements du système pendant la visite.
export const themeScript = `(function(){try{var k="${THEME_KEY}",d=document.documentElement,m=window.matchMedia("(prefers-color-scheme: dark)");function a(t){d.dataset.theme=t;var c=document.querySelector('meta[name="theme-color"]');if(c)c.setAttribute("content",t==="dark"?"#08122a":"#f7f8fa");}var s=localStorage.getItem(k);a(s==="light"||s==="dark"?s:m.matches?"dark":"light");m.addEventListener("change",function(e){if(!localStorage.getItem(k))a(e.matches?"dark":"light");});}catch(e){}})();`;

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#08122a" : "#f7f8fa");
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Stockage indisponible (navigation privée) : le choix vaut pour cette page seulement.
  }
}
