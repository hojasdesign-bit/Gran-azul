import { Badge } from './Badge.jsx';

export default {
  title: 'Datos/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['lavender', 'accent', 'success', 'warning', 'danger', 'neutral', 'dark'],
    },
    size: { control: 'select', options: ['sm', 'md'] },
  },
};

export const MasPopular = { args: { variant: 'lavender', children: 'Más popular' } };
export const Exito = { args: { variant: 'success', children: 'Verificado' } };
export const Advertencia = { args: { variant: 'warning', children: 'Revisión pendiente' } };
export const Error = { args: { variant: 'danger', children: 'Fallido' } };
export const Pequeno = { args: { variant: 'accent', size: 'sm', children: 'Nuevo' } };

export const Variantes = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="lavender">Más popular</Badge>
      <Badge variant="accent">En vivo</Badge>
      <Badge variant="success">Completada</Badge>
      <Badge variant="warning">Pendiente</Badge>
      <Badge variant="danger">Rechazada</Badge>
      <Badge variant="neutral">Borrador</Badge>
      <Badge variant="dark">Pro</Badge>
    </div>
  ),
};

export const Tamanos = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Badge size="sm" variant="accent">Pequeño</Badge>
      <Badge size="md" variant="accent">Mediano</Badge>
    </div>
  ),
};
