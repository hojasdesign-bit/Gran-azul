import { Stack } from './Stack.jsx';
import { Card } from '../Card/Card.jsx';

export default {
  title: 'Núcleo/Stack',
  component: Stack,
  argTypes: {
    direction: { control: 'select', options: ['vertical', 'horizontal'] },
    gap: { control: 'select', options: [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 24, 32] },
    align: { control: 'select', options: ['start', 'center', 'end', 'stretch', 'baseline'] },
    justify: { control: 'select', options: ['start', 'center', 'end', 'between', 'around', 'evenly'] },
    wrap: { control: 'boolean' },
  },
};

const CAJA = (texto) => (
  <div
    style={{
      padding: '12px 20px',
      borderRadius: 'var(--ga-radius-md)',
      background: 'var(--ga-surface-3)',
      color: 'var(--ga-ink)',
    }}
  >
    {texto}
  </div>
);

export const Vertical = {
  render: () => (
    <Stack>
      {CAJA('Primero')}
      {CAJA('Segundo')}
      {CAJA('Tercero')}
    </Stack>
  ),
};

export const Horizontal = {
  render: () => (
    <Stack direction="horizontal" align="center">
      {CAJA('Comprar')}
      {CAJA('Vender')}
      {CAJA('Historial')}
    </Stack>
  ),
};

export const ConAlineacion = {
  render: () => (
    <Stack direction="horizontal" justify="between" align="center">
      <span style={{ color: 'var(--ga-ink)', fontWeight: 700 }}>Saldo disponible</span>
      <span style={{ color: 'var(--ga-muted)' }}>1.250 USD</span>
    </Stack>
  ),
};

export const ConTarjetas = {
  render: () => (
    <Stack gap={6}>
      <Card>Tarjeta uno: resumen de la orden activa.</Card>
      <Card>Tarjeta dos: métodos de pago guardados.</Card>
    </Stack>
  ),
};
