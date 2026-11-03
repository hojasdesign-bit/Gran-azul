import { useState } from 'react';
import { Switch } from './Switch.jsx';

export default {
  title: 'Formularios/Switch',
  component: Switch,
};

function DemoApagado() {
  const [on, setOn] = useState(false);
  return <Switch checked={on} onChange={setOn} label="Recibir alertas de precio" />;
}

export const Apagado = { render: () => <DemoApagado /> };

function DemoEncendido() {
  const [on, setOn] = useState(true);
  return <Switch checked={on} onChange={setOn} label="Compras recurrentes" />;
}

export const Encendido = { render: () => <DemoEncendido /> };

export const Deshabilitado = {
  args: { checked: false, disabled: true, label: 'Retiros automáticos (no disponible)' },
};

export const SinEtiqueta = {
  args: { checked: true, 'aria-label': 'Activar modo oscuro' },
};

function DemoGrupo() {
  const [alertas, setAlertas] = useState(true);
  const [boletin, setBoletin] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Switch checked={alertas} onChange={setAlertas} label="Alertas de precio" />
      <Switch checked={boletin} onChange={setBoletin} label="Boletín semanal" />
      <Switch checked={false} onChange={() => {}} disabled label="API avanzada" />
    </div>
  );
}

export const Grupo = { render: () => <DemoGrupo /> };
