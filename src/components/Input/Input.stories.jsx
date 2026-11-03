import { useState } from 'react';
import { Input } from './Input.jsx';

export default {
  title: 'Formularios/Input',
  component: Input,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export const Basico = {
  args: { label: 'Nombre completo', placeholder: 'Escribe tu nombre' },
};

export const ConHint = {
  args: {
    label: 'Dirección de billetera',
    placeholder: '0x…',
    hint: 'Aquí recibirás tu compra. Revisa que la red sea la correcta.',
  },
};

export const ConError = {
  args: {
    label: 'Correo electrónico',
    placeholder: 'tucorreo@ejemplo.com',
    defaultValue: 'correo-invalido',
    error: 'Ingresa un correo electrónico válido.',
  },
};

export const Deshabilitado = {
  args: { label: 'Código de referido', placeholder: 'ABCD-1234', disabled: true },
};

export const Tamaños = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 420 }}>
      <Input size="sm" label="Pequeño (sm)" placeholder="Texto…" />
      <Input size="md" label="Mediano (md)" placeholder="Texto…" />
      <Input size="lg" label="Grande (lg)" placeholder="Texto…" />
    </div>
  ),
};

function DemoInteractivo() {
  const [valor, setValor] = useState('');
  return (
    <div style={{ maxWidth: 420 }}>
      <Input
        label="Monto a invertir"
        placeholder="0.00"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        hint={valor ? `Vas a comprar con ${valor} USD` : 'Escribe el monto en USD.'}
      />
    </div>
  );
}

export const Interactivo = { render: () => <DemoInteractivo /> };
