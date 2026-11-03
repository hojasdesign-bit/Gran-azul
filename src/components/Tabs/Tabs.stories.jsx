import React from 'react';
import { Tabs } from './Tabs.jsx';

export default {
  title: 'Superficies/Tabs',
  component: Tabs,
};

const baseTabs = [
  { id: 'comprar', label: 'Comprar' },
  { id: 'vender', label: 'Vender' },
  { id: 'historial', label: 'Historial' },
];

export const Interactivas = {
  render: () => {
    const [active, setActive] = React.useState('comprar');
    return <Tabs tabs={baseTabs} active={active} onChange={setActive} />;
  },
};

export const ConInsignias = {
  render: () => {
    const [active, setActive] = React.useState('envíos');
    return (
      <Tabs
        tabs={[
          { id: 'envíos', label: 'Envíos', badge: 12 },
          { id: 'ordenes', label: 'Mis órdenes', badge: 3 },
          { id: 'favoritos', label: 'Favoritos' },
        ]}
        active={active}
        onChange={setActive}
      />
    );
  },
};
