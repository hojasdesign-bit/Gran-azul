import React from 'react';
import { Modal } from './Modal.jsx';

export default {
  title: 'Superficies/Modal',
  component: Modal,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export const Abierto = {
  args: {
    open: true,
    title: 'Confirmar compra',
    children: 'Vas a comprar 0.0042 USD por $250. Revisa el resumen antes de continuar con el pago.',
    footer: 'Botones de acción',
  },
};

export const Pequeño = {
  args: {
    open: true,
    size: 'sm',
    title: 'Sesión iniciada',
    children: 'Tu billetera se conectó correctamente.',
  },
};

export const Grande = {
  args: {
    open: true,
    size: 'lg',
    title: 'Términos del servicio',
    children:
      'Contenido largo del modal: aquí irían los términos y condiciones del servicio de compra de soluciones. El cuerpo del modal hace scroll si el contenido supera la altura disponible.',
  },
};

export const Interactivo = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          style={{
            padding: '12px 24px',
            borderRadius: 12,
            border: 0,
            background: 'var(--ga-accent)',
            color: '#fff',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Abrir modal
        </button>
        <Modal open={open} onClose={() => setOpen(false)} title="Enviar a Cuba">
          <p style={{ margin: 0 }}>
            Pulsa Escape, haz clic fuera del panel o usa el botón de cerrar para salir.
          </p>
        </Modal>
      </div>
    );
  },
};
