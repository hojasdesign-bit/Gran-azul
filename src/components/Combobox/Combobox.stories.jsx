import { useState } from 'react';
import { Combobox } from './Combobox.jsx';

export default { title: 'Formularios/Combobox', component: Combobox };

const OFICINAS = [
  { value: 'any', label: 'Cualquier oficina' },
  { value: 'miami', label: 'Miami, FL' },
  { value: 'orlando', label: 'Orlando, FL' },
  { value: 'tampa', label: 'Tampa, FL' },
  { value: 'houston', label: 'Houston, TX' },
  { value: 'dallas', label: 'Dallas, TX' },
  { value: 'charlotte', label: 'Charlotte, NC' },
  { value: 'las-vegas', label: 'Las Vegas, NV' },
  { value: 'chicago', label: 'Chicago, IL' },
];

function DemoOficina() {
  const [oficina, setOficina] = useState('any');
  return (
    <div style={{ width: 340, minHeight: 470 }}>
      <Combobox label="Oficina" panelTitle="Seleccionar oficina" searchPlaceholder="Buscar oficina…" value={oficina} options={OFICINAS} onChange={setOficina} />
    </div>
  );
}
export const Oficina = { render: () => <DemoOficina /> };

const METODOS = [
  { value: 'any', label: 'Cualquier método' },
  { value: 'efectivo', label: 'Efectivo' },
  { value: 'transferencia', label: 'Transferencia Bancaria' },
];

function DemoMetodo() {
  const [m, setM] = useState('any');
  return (
    <div style={{ width: 340, minHeight: 300 }}>
      <Combobox label="Método de envío" value={m} options={METODOS} onChange={setM} />
    </div>
  );
}
export const MetodoDeEnvio = { render: () => <DemoMetodo /> };

export const ConError = {
  args: { label: 'Oficina', placeholder: 'Selecciona una oficina', options: OFICINAS, error: 'La oficina es obligatoria para continuar.' },
};
