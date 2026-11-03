import { useState } from 'react';
import { Popover } from './Popover.jsx';
import { Button } from '../Button/Button.jsx';

export default {
  title: 'Superficies/Popover',
  component: Popover,
  argTypes: {
    position: { control: 'select', options: ['bottom', 'top'] },
  },
};

function Demo({ title, position = 'bottom', initialOpen = true, children }) {
  const [open, setOpen] = useState(initialOpen);
  return (
    <div>
      <Popover
        title={title}
        position={position}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<Button variant="secondary">Mostrar opciones</Button>}
      >
        {children}
      </Popover>
      {!open && (
        <p style={{ margin: '12px 0 0', color: 'var(--ga-muted)', fontSize: 'var(--ga-text-body-sm)' }}>
          Panel cerrado: pulsa el botón para abrirlo de nuevo.
        </p>
      )}
    </div>
  );
}

export const PorDefecto = {
  render: () => (
    <Demo title="Acciones de la envío">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <button type="button" style={{ textAlign: 'left', padding: '8px 0', border: 0, background: 'none', color: 'var(--ga-ink-2)', cursor: 'pointer' }}>
          Editar envío
        </button>
        <button type="button" style={{ textAlign: 'left', padding: '8px 0', border: 0, background: 'none', color: 'var(--ga-ink-2)', cursor: 'pointer' }}>
          Pausar envío
        </button>
        <button type="button" style={{ textAlign: 'left', padding: '8px 0', border: 0, background: 'none', color: 'var(--ga-danger)', cursor: 'pointer' }}>
          Eliminar envío
        </button>
      </div>
    </Demo>
  ),
};

export const SinTitulo = {
  render: () => (
    <Demo title={undefined}>
      <p>El precio se actualiza cada 60 segundos según la tasa de referencia.</p>
    </Demo>
  ),
};

export const PosicionSuperior = {
  render: () => (
    <div style={{ paddingTop: 260 }}>
      <Demo title="Detalle de la comisión" position="top">
        <p>Comisión de la plataforma: 0,5% sobre el monto. Sin cargos ocultos.</p>
      </Demo>
    </div>
  ),
};
