import { useState } from 'react';
import { BottomSheet } from './BottomSheet.jsx';

export default {
  title: 'Superficies/BottomSheet',
  component: BottomSheet,
};

function Demo({ title = 'Confirmar orden', children }) {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{
          padding: '10px 18px',
          border: 0,
          borderRadius: 'var(--ga-radius-pill)',
          background: 'var(--ga-accent)',
          color: 'var(--ga-on-accent)',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Abrir hoja
      </button>
      <BottomSheet open={open} onClose={() => setOpen(false)} title={title}>
        {children}
      </BottomSheet>
    </div>
  );
}

const CONTENIDO = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, color: 'var(--ga-ink-2)', fontSize: 'var(--ga-text-body-sm)' }}>
    <p style={{ margin: 0 }}>Vendes 500 USD y recibes 495 USD por Zelle.</p>
    <p style={{ margin: 0 }}>El vendedor tiene 100% de completadas en 3.392 operaciones.</p>
    <button
      type="button"
      style={{
        padding: '12px',
        border: 0,
        borderRadius: 'var(--ga-radius-pill)',
        background: 'var(--ga-accent)',
        color: 'var(--ga-on-accent)',
        fontWeight: 600,
        cursor: 'pointer',
      }}
    >
      Confirmar venta
    </button>
  </div>
);

export const ConTitulo = {
  render: () => <Demo>{CONTENIDO}</Demo>,
};

export const SinTitulo = {
  render: () => <Demo title={undefined}>{CONTENIDO}</Demo>,
};

export const ContenidoLargo = {
  render: () => (
    <Demo title="Términos de la orden">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, color: 'var(--ga-ink-2)', fontSize: 'var(--ga-text-body-sm)' }}>
        {Array.from({ length: 12 }, (_, i) => (
          <p key={i} style={{ margin: 0 }}>
            Párrafo {i + 1}: el pago debe completarse en la ventana acordada y el comprobante debe mostrar el monto exacto.
          </p>
        ))}
      </div>
    </Demo>
  ),
};
