import { useState } from 'react';
import { AmountField } from './AmountField.jsx';

export default { title: 'Formularios/AmountField', component: AmountField };

const MONEDA = { code: 'USD', symbol: '$', color: '#0075A7' };

function DemoBasico() {
  const [valor, setValor] = useState('');
  return (
    <div style={{ maxWidth: 420 }}>
      <AmountField label="Monto a enviar" value={valor} onChange={(e) => setValor(e.target.value)} currency={MONEDA} onCurrencyClick={() => alert('Abrir selector de moneda')} />
    </div>
  );
}
export const Basico = { render: () => <DemoBasico /> };

function DemoRecibe() {
  const [valor, setValor] = useState('250');
  return (
    <div style={{ maxWidth: 420 }}>
      <AmountField label="Monto estimado" value={valor} onChange={(e) => setValor(e.target.value)} currency={MONEDA} onCurrencyClick={() => alert('Abrir selector de moneda')} />
    </div>
  );
}
export const Estimado = { render: () => <DemoRecibe /> };

export const SoloLectura = {
  args: { label: 'Monto estimado', value: '98.50', currency: MONEDA, readOnly: true },
  render: (args) => (<div style={{ maxWidth: 420 }}><AmountField {...args} /></div>),
};

export const SinSelector = {
  render: () => (<div style={{ maxWidth: 420 }}><AmountField label="Monto" value="250" currency={MONEDA} /></div>),
};
