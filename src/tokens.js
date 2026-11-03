/* Tokens de Gran Azul DS como objeto JS (para theming programático) */
export const tokens = {
  color: {
    bg: 'var(--ga-bg)',
    surface: 'var(--ga-surface)',
    ink: 'var(--ga-ink)',
    muted: 'var(--ga-muted)',
    accent: 'var(--ga-accent)',
    accentHover: 'var(--ga-accent-hover)',
    accentDeep: 'var(--ga-accent-deep)',
    accentMid: 'var(--ga-accent-mid)',
    lavender: 'var(--ga-lavender)',
    label: 'var(--ga-label)',
    popularBg: 'var(--ga-popular-bg)',
    popularText: 'var(--ga-popular-text)',
  },
  radius: {
    xs: 'var(--ga-radius-xs)',
    sm: 'var(--ga-radius-sm)',
    md: 'var(--ga-radius-md)',
    tile: 'var(--ga-radius-tile)',
    lg: 'var(--ga-radius-lg)',
    card: 'var(--ga-radius-card)',
    xl: 'var(--ga-radius-xl)',
    xxl: 'var(--ga-radius-2xl)',
    pill: 'var(--ga-radius-pill)',
  },
  font: {
    display: 'var(--ga-font-display)',
    sans: 'var(--ga-font-sans)',
    mono: 'var(--ga-font-mono)',
  },
};

export const themeAttribute = 'data-theme';
export const themes = ['oscuro', 'claro'];
