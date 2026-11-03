import { Skeleton } from './Skeleton.jsx';

export default {
  title: 'Datos/Skeleton',
  component: Skeleton,
  argTypes: {
    shape: { control: 'select', options: ['text', 'rect', 'circle'] },
  },
};

export const Texto = { args: { shape: 'text', width: 220 } };
export const Rectangulo = { args: { shape: 'rect', width: 320, height: 160 } };
export const Circulo = { args: { shape: 'circle', width: 56, height: 56 } };

export const TarjetaCargando = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Skeleton shape="circle" width={44} height={44} />
        <Skeleton shape="text" width={140} />
      </div>
      <Skeleton shape="rect" height={120} />
      <Skeleton shape="text" width="80%" />
      <Skeleton shape="text" width="60%" />
    </div>
  ),
};
