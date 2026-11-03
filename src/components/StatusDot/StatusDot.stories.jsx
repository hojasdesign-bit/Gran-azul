import { StatusDot } from './StatusDot.jsx';

export default {
  title: 'Datos/StatusDot',
  component: StatusDot,
  argTypes: {
    variant: { control: 'select', options: ['online', 'live', 'busy', 'offline', 'danger'] },
    size: { control: 'select', options: ['sm', 'md'] },
  },
};

export const EnLinea = { args: { variant: 'online' } };
export const EnVivo = { args: { variant: 'live' } };
export const Ocupado = { args: { variant: 'busy' } };
export const Desconectado = { args: { variant: 'offline' } };
export const Error = { args: { variant: 'danger' } };

export const Variantes = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', fontFamily: 'var(--ga-font-sans)', color: 'var(--ga-ink-2)' }}>
      {[
        ['online', 'En línea'],
        ['live', 'En vivo'],
        ['busy', 'Ocupado'],
        ['offline', 'Desconectado'],
        ['danger', 'Error'],
      ].map(([variant, text]) => (
        <span key={variant} style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}>
          <StatusDot variant={variant} />
          {text}
        </span>
      ))}
    </div>
  ),
};

export const Tamanos = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <StatusDot variant="live" size="sm" />
      <StatusDot variant="live" size="md" />
    </div>
  ),
};
