import { useState } from 'react';
import { CommandPalette } from './CommandPalette.jsx';

export default {
  title: 'Superficies/CommandPalette',
  component: CommandPalette,
  argTypes: {
    placeholder: { control: 'text' },
  },
};

const ITEMS = [
  { id: 'enviar-cuba', label: 'Enviar a Cuba', hint: 'Soluciones', section: 'Acciones', icon: '$' },
  { id: 'rastrear-envio', label: 'Rastrear envío', hint: 'Soluciones', section: 'Acciones', icon: '₮' },
  { id: 'crear-envío', label: 'Crear envío', hint: 'Publica un anuncio', section: 'Acciones' },
  { id: 'envíos', label: 'Ir al envíos', shortcut: 'G M', section: 'Navegación' },
  { id: 'ordenes', label: 'Ir a mis órdenes', shortcut: 'G O', section: 'Navegación' },
  { id: 'billetera', label: 'Ir a la billetera', shortcut: 'G B', section: 'Navegación' },
  { id: 'base', label: 'Red Base', hint: 'Cadena', section: 'Redes' },
  { id: 'polygon', label: 'Red Tampa', hint: 'Cadena', section: 'Redes' },
];

function Demo({ items = ITEMS, ...args }) {
  const [open, setOpen] = useState(true);
  const [elegido, setElegido] = useState(null);
  return (
    <div style={{ fontFamily: 'var(--ga-font-sans)', color: 'var(--ga-ink-2)' }}>
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
        Abrir paleta
      </button>
      {elegido && <p style={{ marginTop: 12 }}>Elegido: {elegido.label}</p>}
      <CommandPalette
        open={open}
        onClose={() => setOpen(false)}
        items={items}
        onSelect={(item) => {
          setElegido(item);
          setOpen(false);
        }}
        {...args}
      />
    </div>
  );
}

export const PorDefecto = {
  render: () => <Demo />,
};

export const SinResultados = {
  render: () => <Demo items={[]} />,
};

export const SinSecciones = {
  render: () => (
    <Demo
      items={[
        { id: 'a', label: 'Enviar a Cuba' },
        { id: 'b', label: 'Rastrear envío' },
        { id: 'c', label: 'Ver órdenes' },
      ]}
    />
  ),
};
