import { Field } from './Field.jsx';
import { Input } from '../Input/Input.jsx';

export default {
  title: 'Formularios/Field',
  component: Field,
  argTypes: {
    required: { control: 'boolean' },
  },
};

const ANCHO = { width: 360 };

export const ConInput = {
  render: () => (
    <div style={ANCHO}>
      <Field id="monto" label="Monto a vender" hint="Entre 10 y 10.000 USD por orden.">
        <Input placeholder="500" />
      </Field>
    </div>
  ),
};

export const Requerido = {
  render: () => (
    <div style={ANCHO}>
      <Field id="alias" label="Alias del anunciante" required>
        <Input placeholder="tucambio" />
      </Field>
    </div>
  ),
};

export const ConError = {
  render: () => (
    <div style={ANCHO}>
      <Field id="correo" label="Correo" error="Escribe un correo válido.">
        <Input placeholder="tu@correo.com" />
      </Field>
    </div>
  ),
};

export const SinEtiqueta = {
  render: () => (
    <div style={ANCHO}>
      <Field hint="Sin etiqueta: solo ayuda debajo.">
        <Input placeholder="Solo control y ayuda" />
      </Field>
    </div>
  ),
};
