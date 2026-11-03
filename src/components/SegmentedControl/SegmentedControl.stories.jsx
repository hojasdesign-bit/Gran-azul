import { useState } from 'react';
import { SegmentedControl } from './SegmentedControl.jsx';

export default { title: 'Formularios/SegmentedControl', component: SegmentedControl };

export const ComprarVender = {
  render: () => {
    const [v, setV] = useState('buy');
    return (
      <div style={{ width: 340 }}>
        <SegmentedControl
          ariaLabel="Tipo de operación"
          tone="accent"
          options={[
            { value: 'buy', label: 'Comprar' },
            { value: 'sell', label: 'Vender' },
          ]}
          value={v}
          onChange={setV}
        />
      </div>
    );
  },
};

export const TresSegmentos = {
  render: () => {
    const [v, setV] = useState('todo');
    return (
      <div style={{ width: 380 }}>
        <SegmentedControl
          ariaLabel="Filtro"
          options={[
            { value: 'todo', label: 'Todo' },
            { value: 'envío', label: 'Envío' },
            { value: 'fiat', label: 'Fíat' },
          ]}
          value={v}
          onChange={setV}
        />
      </div>
    );
  },
};
