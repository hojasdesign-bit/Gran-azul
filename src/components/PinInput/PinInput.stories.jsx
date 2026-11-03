import { useState } from 'react';
import { PinInput } from './PinInput.jsx';

export default { title: 'Formularios/PinInput', component: PinInput };

export const PinDeBanca = {
  render: () => {
    const [pin, setPin] = useState('');
    return <PinInput label="PIN de la banca" value={pin} onChange={setPin} />;
  },
};

export const CodigoSeis = {
  render: () => {
    const [pin, setPin] = useState('483');
    return <PinInput label="Código de verificación" length={6} value={pin} onChange={setPin} />;
  },
};

export const ConError = {
  render: () => {
    const [pin, setPin] = useState('0000');
    return <PinInput label="PIN de la banca" value={pin} onChange={setPin} error />;
  },
};
