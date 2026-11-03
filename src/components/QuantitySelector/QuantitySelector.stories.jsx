import { useState } from 'react';
import { QuantitySelector } from './QuantitySelector.jsx';

export default { title: 'Formularios/QuantitySelector', component: QuantitySelector };

export const PorDefecto = {
  render: () => {
    const [n, setN] = useState(2);
    return <QuantitySelector value={n} onChange={setN} max={10} />;
  },
};

export const Pequeno = {
  render: () => {
    const [n, setN] = useState(1);
    return <QuantitySelector value={n} onChange={setN} size="sm" max={5} />;
  },
};
