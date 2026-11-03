import { useState } from 'react';
import { Alert } from './Alert.jsx';

export default {
  title: 'Datos/Alert',
  component: Alert,
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'danger'] },
  },
};

export const Informativa = {
  args: {
    variant: 'info',
    title: 'Verificación en curso',
    children: 'Estamos revisando tu documento de identidad. Te avisaremos cuando termine.',
  },
};

export const Exito = {
  args: {
    variant: 'success',
    title: 'Compra completada',
    children: 'Recibiste 0,0042 USD en tu billetera.',
  },
};

export const Advertencia = {
  args: {
    variant: 'warning',
    title: 'Límite casi alcanzado',
    children: 'Te quedan 150 USD de tu límite diario sin verificación completa.',
  },
};

export const Error = {
  args: {
    variant: 'danger',
    title: 'Pago rechazado',
    children: 'Tu banco rechazó la transacción. Intenta con otra tarjeta.',
  },
};

export const Descartable = {
  render: () => {
    const [visible, setVisible] = useState(true);
    if (!visible) return <p style={{ color: 'var(--ga-muted)' }}>Alerta cerrada. Recarga para verla de nuevo.</p>;
    return (
      <Alert
        variant="info"
        title="Nueva red disponible"
        dismissible
        onDismiss={() => setVisible(false)}
      >
        Ahora puedes comprar en la red Orlando con comisión reducida.
      </Alert>
    );
  },
};

export const Todas = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alert variant="info" title="Info">Mensaje informativo.</Alert>
      <Alert variant="success" title="Éxito">Todo salió bien.</Alert>
      <Alert variant="warning" title="Aviso">Revisa este detalle.</Alert>
      <Alert variant="danger" title="Error">Algo salió mal.</Alert>
    </div>
  ),
};
