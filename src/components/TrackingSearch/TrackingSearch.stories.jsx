import { useState } from 'react';
import { TrackingSearch } from './TrackingSearch.jsx';

export default { title: 'Gran Azul/TrackingSearch', component: TrackingSearch };

function Demo() {
  const [code, setCode] = useState('');
  return (
    <div style={{ maxWidth: 640 }}>
      <TrackingSearch onSearch={setCode} />
      {code && <p style={{ color: 'var(--ga-muted)' }}>Demo: buscarías el código <strong style={{ color: 'var(--ga-ink)' }}>{code}</strong> (sin rastreo real).</p>}
    </div>
  );
}

export const Basico = { render: () => <Demo /> };
export const SinEtiqueta = { args: { label: '' } };
