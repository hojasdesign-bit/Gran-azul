import { Icon, ICON_NAMES } from './Icon.jsx';

export default { title: 'Gran Azul/Icon', component: Icon };

/**
 * Iconografía del DS — definición en Storybook:
 * fuente HugeIcons (https://hugeicons.com/icons), estilo Stroke Rounded,
 * grosor 1.8, stroke currentColor, fill none, linecap/linejoin round,
 * rejilla 24×24. Solid solo para estado relleno, nunca como estilo general.
 */
export const Galeria = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: 16, color: 'var(--ga-ink)', fontFamily: 'var(--ga-font-sans)' }}>
      {ICON_NAMES.map((name) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: 16, border: '1px solid var(--ga-border)', borderRadius: 16 }}>
          <Icon name={name} size={24} />
          <span style={{ fontSize: 12, color: 'var(--ga-muted)' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};

export const Tamanos = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, color: 'var(--ga-ink)' }}>
      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}><Icon name="package" size={16} /><small>16 px</small></span>
      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}><Icon name="package" size={20} /><small>20 px</small></span>
      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}><Icon name="package" size={24} /><small>24 px</small></span>
    </div>
  ),
};

export const Basico = { args: { name: 'package', size: 24 } };
