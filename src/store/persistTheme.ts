const KEY = "theme";

export function loadThemeMode(): ThemeModel["mode"] | undefined {
  const raw = localStorage.getItem(KEY);
  if (raw === "light" || raw === "dark") return raw;
  return undefined;
}

export function saveThemeMode(mode: ThemeModel["mode"]) {
  localStorage.setItem(KEY, mode);
}
