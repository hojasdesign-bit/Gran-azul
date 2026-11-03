import { useState } from 'react';
import { Slider } from './Slider.jsx';

export default {
  title: 'Formularios/Slider',
  component: Slider,
};

function DemoBasico() {
  const [valor, setValor] = useState(50);
  return (
    <div style={{ maxWidth: 420 }}>
      <Slider label="Porcentaje de compra" value={valor} onChange={setValor} showValue formatValue={(v) => `${v}%`} />
    </div>
  );
}

export const Basico = { render: () => <DemoBasico /> };

function DemoSinValor() {
  const [valor, setValor] = useState(25);
  return (
    <div style={{ maxWidth: 420 }}>
      <Slider label="Riesgo" min={0} max={10} value={valor} onChange={setValor} />
    </div>
  );
}

export const SinValor = { render: () => <DemoSinValor /> };

function DemoRango() {
  const [valor, setValor] = useState(500);
  return (
    <div style={{ maxWidth: 420 }}>
      <Slider
        label="Monto mensual"
        min={100}
        max={5000}
        step={50}
        value={valor}
        onChange={setValor}
        showValue
        formatValue={(v) => `$${v.toLocaleString('es')}`}
      />
    </div>
  );
}

export const RangoPersonalizado = { render: () => <DemoRango /> };

export const Deshabilitado = {
  args: { label: 'Límite diario', value: 70, showValue: true, disabled: true, onChange: () => {} },
  render: (args) => (
    <div style={{ maxWidth: 420 }}>
      <Slider {...args} />
    </div>
  ),
};
