import { useState } from 'react';
import { ChatComposer } from './ChatComposer.jsx';

export default { title: 'Comercio/ChatComposer', component: ChatComposer };

export const PorDefecto = {
  render: () => {
    const [v, setV] = useState('');
    return (
      <div style={{ width: 390 }}>
        <ChatComposer value={v} onChange={setV} onAttach={() => {}} onSend={() => setV('')} />
      </div>
    );
  },
};

export const ConTexto = {
  render: () => {
    const [v, setV] = useState('Ya te envié el comprobante');
    return (
      <div style={{ width: 390 }}>
        <ChatComposer value={v} onChange={setV} onSend={() => setV('')} />
      </div>
    );
  },
};
