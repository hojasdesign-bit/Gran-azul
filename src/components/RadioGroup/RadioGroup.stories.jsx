import { useState } from 'react';
import { RadioGroup } from './RadioGroup.jsx';

export default {
  title: 'Formularios/RadioGroup',
  component: RadioGroup,
};

const METODOS = [
  { value: 'tarjeta', label: 'Tarjeta', hint: 'Visa · Mastercard — acreditación inmediata' },
  { value: 'transferencia', label: 'Transferencia bancaria', hint: '1–2 días hábiles, sin comisión' },
  { value: 'applepay', label: 'Apple Pay', hint: 'Confirmación con tu dispositivo' },
];

function DemoBasico() {
  const [metodo, setMetodo] = useState('tarjeta');
  return (
    <div style={{ maxWidth: 420 }}>
      <RadioGroup
        name="metodo-pago"
        legend="Método de pago"
        options={METODOS}
        value={metodo}
        onChange={setMetodo}
      />
    </div>
  );
}

export const Basico = { render: () => <DemoBasico /> };

function DemoSinAyuda() {
  const [red, setRed] = useState('envio');
  return (
    <RadioGroup
      name="red"
      legend="Red"
      options={[
        { value: 'envio', label: 'paquete' },
        { value: 'miami', label: 'Miami' },
        { value: 'solana', label: 'Orlando' },
      ]}
      value={red}
      onChange={setRed}
    />
  );
}

export const SinAyuda = { render: () => <DemoSinAyuda /> };
