import { FileInput } from './FileInput.jsx';

export default {
  title: 'Formularios/FileInput',
  component: FileInput,
  argTypes: {
    multiple: { control: 'boolean' },
    accept: { control: 'text' },
  },
};

const ANCHO = { width: 420 };

export const PorDefecto = {
  render: () => (
    <div style={ANCHO}>
      <FileInput />
    </div>
  ),
};

export const Multiple = {
  render: () => (
    <div style={ANCHO}>
      <FileInput multiple label="Arrastra los comprobantes aquí" buttonLabel="Elegir comprobantes" />
    </div>
  ),
};

export const SoloImagenes = {
  render: () => (
    <div style={ANCHO}>
      <FileInput accept="image/*" label="Sube una foto del documento" />
    </div>
  ),
};

export const ConError = {
  render: () => (
    <div style={ANCHO}>
      <FileInput error="El archivo supera el tamaño máximo de 10 MB." />
    </div>
  ),
};
