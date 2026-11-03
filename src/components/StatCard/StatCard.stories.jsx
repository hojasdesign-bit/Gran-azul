import { StatCard } from './StatCard.jsx';

export default {
  title: 'Datos/StatCard',
  component: StatCard,
  argTypes: {
    trend: { control: 'select', options: ['up', 'down', null] },
  },
};

export const Basica = { args: { label: 'Volumen 24h', value: '$2,4 M' } };
export const AlAlza = { args: { label: 'Precio USD', value: '$98.420', delta: '+2,4 % hoy', trend: 'up' } };
export const AlaBaja = { args: { label: 'Precio USD', value: '$3.120', delta: '-1,1 % hoy', trend: 'down' } };

export const Fila = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
      <StatCard label="Precio USD" value="$98.420" delta="+2,4 % hoy" trend="up" />
      <StatCard label="Precio USD" value="$3.120" delta="-1,1 % hoy" trend="down" />
      <StatCard label="Usuarios activos" value="128.540" delta="+8,2 % este mes" trend="up" />
      <StatCard label="Comisión media" value="1,9 %" />
    </div>
  ),
};
