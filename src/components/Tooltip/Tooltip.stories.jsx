import { Tooltip } from './Tooltip.jsx';

export default {
  title: 'Datos/Tooltip',
  component: Tooltip,
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
};

const Boton = ({ children }) => (
  <button
    type="button"
    style={{
      padding: '10px 18px',
      borderRadius: 'var(--ga-radius-sm)',
      border: '1px solid var(--ga-border-strong)',
      background: 'var(--ga-surface)',
      color: 'var(--ga-ink)',
      fontWeight: 600,
      cursor: 'pointer',
    }}
  >
    {children}
  </button>
);

export const Arriba = {
  args: { content: 'La comisión ya está incluida en el total.', children: <Boton>Pasa el cursor</Boton> },
};

export const Abajo = {
  args: { position: 'bottom', content: 'Verificación de identidad requerida.', children: <Boton>Abajo</Boton> },
};

export const Izquierda = {
  args: { position: 'left', content: 'Tasa actualizada hace 12 segundos.', children: <Boton>Izquierda</Boton> },
};

export const Derecha = {
  args: { position: 'right', content: 'Recibirás el equivalente en USD.', children: <Boton>Derecha</Boton> },
};

export const Posiciones = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', padding: 48, justifyContent: 'center' }}>
      <Tooltip content="Tooltip arriba" position="top"><Boton>Arriba</Boton></Tooltip>
      <Tooltip content="Tooltip abajo" position="bottom"><Boton>Abajo</Boton></Tooltip>
      <Tooltip content="Tooltip izquierda" position="left"><Boton>Izquierda</Boton></Tooltip>
      <Tooltip content="Tooltip derecha" position="right"><Boton>Derecha</Boton></Tooltip>
    </div>
  ),
};
