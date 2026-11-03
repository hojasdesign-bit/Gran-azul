import { TrustBadge } from './TrustBadge.jsx';

export default {
  title: 'Comercio/TrustBadge',
  component: TrustBadge,
  argTypes: {
    icon: { control: 'select', options: ['shield', 'check', 'lock'] },
  },
};

export const Escudo = {
  args: {
    icon: 'shield',
    title: 'Compra protegida',
    text: 'Tus fondos están asegurados durante todo el proceso de compra.',
  },
};

export const Candado = {
  args: {
    icon: 'lock',
    title: 'Datos cifrados',
    text: 'Toda tu información viaja cifrada de extremo a extremo.',
  },
};

export const Grupo = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 360 }}>
      <TrustBadge icon="shield" title="Compra protegida" text="Tus fondos están asegurados durante todo el proceso." />
      <TrustBadge icon="check" title="Verificado" text="Proveedor regulado en múltiples jurisdicciones." />
      <TrustBadge icon="lock" title="Datos cifrados" text="Información protegida de extremo a extremo." />
    </div>
  ),
};
