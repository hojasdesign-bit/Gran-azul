import { Grid } from './Grid.jsx';
import { Card } from '../Card/Card.jsx';
import { StatCard } from '../StatCard/StatCard.jsx';

export default {
  title: 'Núcleo/Grid',
  component: Grid,
  argTypes: {
    columns: { control: 'number' },
    gap: { control: 'select', options: [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 24, 32] },
    align: { control: 'select', options: ['start', 'center', 'end', 'stretch', 'baseline'] },
  },
};

const CAJA = (texto) => (
  <div
    style={{
      padding: '16px',
      borderRadius: 'var(--ga-radius-md)',
      background: 'var(--ga-surface-3)',
      color: 'var(--ga-ink)',
    }}
  >
    {texto}
  </div>
);

export const DosColumnas = {
  render: () => (
    <Grid>
      {CAJA('Comprar')}
      {CAJA('Vender')}
    </Grid>
  ),
};

export const TresColumnas = {
  render: () => (
    <Grid columns={3}>
      {CAJA('USD')}
      {CAJA('USD')}
      {CAJA('EURC')}
    </Grid>
  ),
};

export const ConTarjetas = {
  render: () => (
    <Grid columns={3} gap={6}>
      <StatCard label="Operaciones" value="3.392" />
      <StatCard label="Completadas" value="100%" />
      <StatCard label="Volumen" value="1,2 M USD" />
    </Grid>
  ),
};

export const ConGapAmplio = {
  render: () => (
    <Grid columns={2} gap={8}>
      <Card>Tarjeta uno con más aire entre columnas.</Card>
      <Card>Tarjeta dos con más aire entre columnas.</Card>
    </Grid>
  ),
};
