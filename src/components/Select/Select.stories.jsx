import { useState } from 'react';
import { Select } from './Select.jsx';

export default {
  title: 'Formularios/Select',
  component: Select,
};

const PAISES = [
  { value: 'es', label: 'España' },
  { value: 'mx', label: 'México' },
  { value: 'ar', label: 'Argentina' },
  { value: 'co', label: 'Colombia' },
];

function DemoBasico() {
  const [valor, setValor] = useState('');
  return (
    <div style={{ maxWidth: 420 }}>
      <Select
        label="País"
        options={PAISES}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        hint="Determina los métodos de pago disponibles."
      />
    </div>
  );
}

export const Basico = { render: () => <DemoBasico /> };

export const ConError = {
  args: {
    label: 'Método de pago',
    options: [
      { value: 'tarjeta', label: 'Tarjeta de crédito/débito' },
      { value: 'transferencia', label: 'Transferencia bancaria' },
      { value: 'applepay', label: 'Apple Pay' },
    ],
    error: 'Selecciona un método de pago para continuar.',
  },
  render: (args) => (
    <div style={{ maxWidth: 420 }}>
      <Select {...args} />
    </div>
  ),
};

export const OpcionesDeTexto = {
  args: {
    label: 'Moneda fiduciaria',
    options: ['USD', 'EUR', 'GBP', 'MXN'],
    defaultValue: 'USD',
  },
  render: (args) => (
    <div style={{ maxWidth: 420 }}>
      <Select {...args} />
    </div>
  ),
};
