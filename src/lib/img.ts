// Normalizes paths to work in dev and on GitHub Pages
export const img = (p: string) =>
  `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`;
