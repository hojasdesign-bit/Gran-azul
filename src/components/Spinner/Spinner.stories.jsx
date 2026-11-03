import { Spinner } from './Spinner.jsx';

export default {
  title: 'Datos/Spinner',
  component: Spinner,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['accent', 'neutral'] },
  },
};

export const PorDefecto = { args: {} };
export const Grande = { args: { size: 'lg' } };
export const Neutro = { args: { variant: 'neutral' } };

export const Tamanos = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

export const EnBoton = {
  render: () => (
    <button
      type="button"
      style={{
        display: 'inline-flex',
        gap: 8,
        alignItems: 'center',
        padding: '10px 18px',
        border: 0,
        borderRadius: 'var(--ga-radius-pill)',
        background: 'var(--ga-accent)',
        color: 'var(--ga-on-accent)',
        fontFamily: 'var(--ga-font-sans)',
        fontWeight: 600,
      }}
    >
      <Spinner size="sm" variant="neutral" />
      Confirmando…
    </button>
  ),
};
