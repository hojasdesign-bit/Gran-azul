import React from 'react';
import { Drawer } from './Drawer.jsx';

export default {
  title: 'Superficies/Drawer',
  component: Drawer,
  argTypes: {
    position: { control: 'select', options: ['right', 'bottom'] },
  },
};

const openBtn = (onClick, label) => (
  <button
    type="button"
    onClick={onClick}
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
    {label}
  </button>
);

export const Lateral = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        {openBtn(() => setOpen(true), 'Abrir drawer lateral')}
        <Drawer open={open} onClose={() => setOpen(false)} title="Método de pago" position="right">
          <p style={{ marginTop: 0 }}>Elige cómo quieres pagar tu compra de envío.</p>
        </Drawer>
      </div>
    );
  },
};

export const Inferior = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        {openBtn(() => setOpen(true), 'Abrir drawer inferior')}
        <Drawer open={open} onClose={() => setOpen(false)} title="Resumen de la orden" position="bottom">
          <p style={{ marginTop: 0 }}>
            Panel inferior ideal para móviles: resumen del pedido antes de confirmar.
          </p>
        </Drawer>
      </div>
    );
  },
};
