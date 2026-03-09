export const themeTokens = {
  brand: {
    50: '245 245 245',
    100: '229 229 229',
    200: '212 212 212',
    300: '163 163 163',
    400: '115 115 115',
    500: '82 82 82',
    600: '64 64 64',
    700: '38 38 38',
    800: '23 23 23',
    900: '10 10 10',
  },
  accent: {
    100: '250 250 250',
    200: '229 229 229',
    300: '212 212 212',
    400: '163 163 163',
    500: '115 115 115',
  },
  surface: {
    light: {
      base: '255 255 255',
      muted: '245 245 245',
      strong: '255 255 255',
    },
    dark: {
      base: '8 8 8',
      muted: '15 15 15',
      strong: '20 20 20',
    },
  },
  ink: {
    light: {
      50: '250 250 250',
      100: '229 229 229',
      300: '163 163 163',
      400: '115 115 115',
      500: '82 82 82',
      600: '60 60 60',
      700: '38 38 38',
      900: '10 10 10',
      950: '5 5 5',
    },
    dark: {
      50: '10 10 10',
      100: '38 38 38',
      300: '115 115 115',
      400: '163 163 163',
      500: '212 212 212',
      600: '229 229 229',
      700: '245 245 245',
      900: '255 255 255',
      950: '255 255 255',
    },
  },
  fonts: {
    display: {
      en: 'Source Serif 4',
      ar: 'IBM Plex Sans Arabic',
    },
    body: {
      en: 'Manrope',
      ar: 'IBM Plex Sans Arabic',
    },
  },
  radii: {
    sm: '14px',
    md: '22px',
    lg: '32px',
    xl: '40px',
    pill: '999px',
  },
  shadows: {
    soft: '0 14px 40px rgba(0, 0, 0, 0.06)',
    card: '0 24px 60px rgba(0, 0, 0, 0.14)',
  },
} as const;

export function applyThemeTokens() {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  root.style.setProperty('--font-display-en', themeTokens.fonts.display.en);
  root.style.setProperty('--font-display-ar', themeTokens.fonts.display.ar);
  root.style.setProperty('--font-body-en', themeTokens.fonts.body.en);
  root.style.setProperty('--font-body-ar', themeTokens.fonts.body.ar);
  root.style.setProperty('--font-display', themeTokens.fonts.display.en);
  root.style.setProperty('--font-body', themeTokens.fonts.body.en);
  root.style.setProperty('--radius-sm', themeTokens.radii.sm);
  root.style.setProperty('--radius-md', themeTokens.radii.md);
  root.style.setProperty('--radius-lg', themeTokens.radii.lg);
  root.style.setProperty('--radius-xl', themeTokens.radii.xl);
  root.style.setProperty('--radius-pill', themeTokens.radii.pill);
  root.style.setProperty('--shadow-soft', themeTokens.shadows.soft);
  root.style.setProperty('--shadow-card', themeTokens.shadows.card);

  Object.entries(themeTokens.brand).forEach(([key, value]) => root.style.setProperty(`--color-brand-${key}`, value));
  Object.entries(themeTokens.accent).forEach(([key, value]) => root.style.setProperty(`--color-accent-${key}`, value));

  Object.entries(themeTokens.surface.light).forEach(([key, value]) => root.style.setProperty(`--color-surface-light-${key}`, value));
  Object.entries(themeTokens.surface.dark).forEach(([key, value]) => root.style.setProperty(`--color-surface-dark-${key}`, value));
  Object.entries(themeTokens.ink.light).forEach(([key, value]) => root.style.setProperty(`--color-ink-light-${key}`, value));
  Object.entries(themeTokens.ink.dark).forEach(([key, value]) => root.style.setProperty(`--color-ink-dark-${key}`, value));
}
