import { useState } from 'react';
import { Banner } from './Banner.jsx';
import { Button } from '../Button/Button.jsx';

export default {
  title: 'Datos/Banner',
  component: Banner,
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'danger'] },
    dismissible: { control: 'boolean' },
  },
};

export const Informativo = {
  args: {
    variant: 'info',
    title: 'Mantenimiento programado',
    children: 'El envíos envío estará en pausa el domingo de 03:00 a 04:00.',
  },
};

export const Exito = {
  args: {
    variant: 'success',
    title: 'Verificación completada',
    children: 'Tu identidad quedó verificada y ya puedes publicar envíos.',
  },
};

function CierreDemo() {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return (
      <Button variant="secondary" onClick={() => setVisible(true)}>
        Mostrar anuncio de nuevo
      </Button>
    );
  }
  return (
    <Banner variant="warning" title="Revisa tu comprobante" dismissible onClose={() => setVisible(false)}>
      La orden vence en 15 minutos si no confirmas el pago.
    </Banner>
  );
}

export const ConCierre = {
  render: () => <CierreDemo />,
};

export const Variantes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Banner variant="info" title="Nuevo par disponible">
        Ya puedes intercambiar USD por CUP en el envíos.
      </Banner>
      <Banner variant="success">Tu envío se publicó correctamente.</Banner>
      <Banner variant="warning" title="Tasa actualizada">
        La tasa de referencia cambió hace 5 minutos.
      </Banner>
      <Banner variant="danger" title="Pago rechazado">
        El comprobante no coincide con el monto de la orden.
      </Banner>
      <Banner
        variant="info"
        title="Completa tu perfil"
        action={<Button variant="secondary">Completar perfil</Button>}
      >
        Añade tu método de pago favorito para publicar más rápido.
      </Banner>
    </div>
  ),
};
