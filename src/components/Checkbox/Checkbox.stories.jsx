import { useState } from 'react';
import { Checkbox } from './Checkbox.jsx';

export default {
  title: 'Formularios/Checkbox',
  component: Checkbox,
};

function DemoBasico() {
  const [marcado, setMarcado] = useState(false);
  return (
    <Checkbox checked={marcado} onChange={(e) => setMarcado(e.target.checked)}>
      Acepto los términos y condiciones
    </Checkbox>
  );
}

export const Basico = { render: () => <DemoBasico /> };

function DemoMarcado() {
  const [marcado, setMarcado] = useState(true);
  return (
    <Checkbox checked={marcado} onChange={(e) => setMarcado(e.target.checked)}>
      Guardar este método de pago
    </Checkbox>
  );
}

export const Marcado = { render: () => <DemoMarcado /> };

export const Deshabilitado = {
  args: { checked: false, disabled: true, children: 'Verificación de identidad (pendiente)' },
};

export const DeshabilitadoMarcado = {
  args: { checked: true, disabled: true, children: 'Correo verificado' },
};
