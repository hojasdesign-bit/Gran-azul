import { useState } from 'react';
import { RatingStars } from './RatingStars.jsx';

export default { title: 'Núcleo/RatingStars', component: RatingStars };

export const Lectura = { args: { value: 4.5, size: 18 } };
export const Perfecta = { args: { value: 5, size: 18 } };
export const Baja = { args: { value: 2.3, size: 18 } };

export const Interactiva = {
  render: () => {
    const [v, setV] = useState(4);
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <RatingStars value={v} size={22} onRate={setV} />
        <span style={{ color: 'var(--ga-muted)', fontSize: 14 }}>{v} de 5</span>
      </div>
    );
  },
};
