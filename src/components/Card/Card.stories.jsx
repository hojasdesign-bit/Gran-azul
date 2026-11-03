import { Card } from './Card.jsx';

export default {
  title: 'Núcleo/Card',
  component: Card,
  argTypes: {
    variant: { control: 'select', options: ['default', 'glow', 'gradient'] },
    padding: { control: 'select', options: ['sm', 'md', 'lg'] },
    hoverable: { control: 'boolean' },
  },
};

const demo = (titulo, texto) => (
  <>
    <h3 style={{ margin: '0 0 8px', fontSize: '1.125rem', fontWeight: 700 }}>{titulo}</h3>
    <p style={{ margin: 0, color: 'var(--ga-muted)', fontSize: '0.9375rem', lineHeight: 1.5 }}>{texto}</p>
  </>
);

export const Default = {
  args: { children: demo('Envío a Cuba', 'Envía un paquete a tu familia en Cuba de forma fácil y segura.') },
};

export const Glow = {
  args: { variant: 'glow', children: demo('Envío destacada', 'Tarjeta con resplandor azul para destacar contenido.') },
};

export const Gradient = {
  args: { variant: 'gradient', children: demo('Resumen de cartera', 'Fondo con degradado radial morado sobre la superficie.') },
};

export const Hoverable = {
  args: {
    hoverable: true,
    children: demo('Tarjeta interactiva', 'Pasa el cursor para ver el efecto de elevación.'),
  },
};

export const Rellenos = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <Card padding="sm">{demo('sm', 'Relleno pequeño.')}</Card>
      <Card padding="md">{demo('md', 'Relleno mediano.')}</Card>
      <Card padding="lg">{demo('lg', 'Relleno grande.')}</Card>
    </div>
  ),
};

export const Variantes = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
      <Card>{demo('Default', 'Superficie plana del sistema.')}</Card>
      <Card variant="glow">{demo('Glow', 'Con resplandor azul.')}</Card>
      <Card variant="gradient">{demo('Gradient', 'Con degradado radial morado.')}</Card>
    </div>
  ),
};
