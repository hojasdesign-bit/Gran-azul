import { Button } from './Button.jsx';

export default {
  title: 'Núcleo/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'dark', 'surface', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
};

export const Primary = { args: { children: 'Enviar a Cuba', arrow: true } };
export const Secondary = { args: { variant: 'secondary', children: 'Ver cómo funciona' } };
export const Ghost = { args: { variant: 'ghost', children: 'Cancelar' } };
export const Dark = { args: { variant: 'dark', children: 'Enviar a Cuba', fullWidth: true } };
export const Loading = { args: { children: 'Procesando pago', loading: true } };
export const Disabled = { args: { children: 'Enviar a Cuba', disabled: true } };

export const ExtraGrande = { args: { size: 'xl', children: 'Enviar a Cuba', arrow: true } };
export const Superficie = { args: { variant: 'surface', size: 'xl', children: 'Read the docs', arrow: true } };
export const Contorno = { args: { variant: 'outline', size: 'xl', children: 'Get started', arrow: true } };

export const Tamaños = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="sm">Pequeño</Button>
      <Button size="md">Mediano</Button>
      <Button size="lg">Grande</Button>
      <Button size="xl">Extra grande</Button>
    </div>
  ),
};
