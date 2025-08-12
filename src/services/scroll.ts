export const clamp = (v: number, min = 0, max = 1) => Math.min(Math.max(v, min), max);

export const mapRange = (v: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
  const t = clamp((v - inMin) / (inMax - inMin), 0, 1);
  return outMin + (outMax - outMin) * t;
};

// «кусок» таймлайна: из progress берём интервал [a,b] и нормализуем в [0,1]
export const slice = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
