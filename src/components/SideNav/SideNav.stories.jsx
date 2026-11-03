import { useState } from 'react';
import { SideNav } from './SideNav.jsx';

export default {
  title: 'Superficies/SideNav',
  component: SideNav,
};

const MERCADO = 'M';
const ORDENES = 'O';
const BILLETERA = 'B';
const AJUSTES = 'A';

const ITEMS = [
  { section: 'Operar' },
  { id: 'envíos', label: 'Envíos', icon: MERCADO },
  { id: 'ordenes', label: 'Mis órdenes', icon: ORDENES, badge: 3 },
  { id: 'billetera', label: 'Billetera', icon: BILLETERA },
  { section: 'Cuenta' },
  { id: 'ajustes', label: 'Ajustes', icon: AJUSTES },
  { id: 'ayuda', label: 'Ayuda', disabled: true },
];

function Demo() {
  const [active, setActive] = useState('ordenes');
  return (
    <div style={{ width: 240 }}>
      <SideNav items={ITEMS} activeId={active} onSelect={setActive} />
      <p style={{ margin: '16px 0 0', color: 'var(--ga-muted)', fontSize: 'var(--ga-text-body-sm)' }}>
        Destino activo: {active}
      </p>
    </div>
  );
}

export const ConEstado = {
  render: () => <Demo />,
};

export const ConSecciones = {
  args: { items: ITEMS, activeId: 'envíos' },
  render: (args) => (
    <div style={{ width: 240 }}>
      <SideNav {...args} />
    </div>
  ),
};

export const Simple = {
  render: () => (
    <div style={{ width: 240 }}>
      <SideNav
        items={[
          { id: 'a', label: 'Resumen' },
          { id: 'b', label: 'Actividad' },
          { id: 'c', label: 'Seguridad' },
        ]}
        activeId="b"
      />
    </div>
  ),
};
