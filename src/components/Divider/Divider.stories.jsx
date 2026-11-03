import { Divider } from './Divider.jsx';

export default {
  title: 'Datos/Divider',
  component: Divider,
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
};

export const Simple = { args: {} };

export const ConEtiqueta = { args: { label: 'o continúa con' } };

export const Vertical = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', height: 48 }}>
      <span style={{ color: 'var(--ga-ink-2)' }}>Tarjeta</span>
      <Divider orientation="vertical" />
      <span style={{ color: 'var(--ga-ink-2)' }}>Transferencia</span>
      <Divider orientation="vertical" />
      <span style={{ color: 'var(--ga-ink-2)' }}>Apple Pay</span>
    </div>
  ),
};
