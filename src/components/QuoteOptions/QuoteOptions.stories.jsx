import { useState } from 'react';
import { QuoteOptions } from './QuoteOptions.jsx';

export default { title: 'Gran Azul/QuoteOptions', component: QuoteOptions };

const OPCIONES = [
  { id: 'aereo-expres', method: 'Aéreo exprés', delivery: '3-5 días', tracking: 'Excelente', rating: 4.9, deliveryType: 'Puerta a puerta', taxes: null, price: 42, oldPrice: 50, badge: 'fastest' },
  { id: 'aereo', method: 'Aéreo', delivery: '7-10 días', tracking: 'Bueno', rating: 4.7, deliveryType: 'Puerta a puerta', taxes: null, price: 30, badge: 'best' },
  { id: 'maritimo', method: 'Marítimo', delivery: '20-30 días', tracking: 'Básico', rating: 4.5, deliveryType: 'Recogida en oficina', taxes: 4, price: 20, badge: 'cheapest' },
];

function Demo() {
  const [selectedId, setSelectedId] = useState('aereo');
  return <QuoteOptions options={OPCIONES} selectedId={selectedId} onSelect={(opt) => setSelectedId(opt.id)} />;
}

export const Basico = { render: () => <Demo /> };
export const SoloAereo = { args: { options: OPCIONES.slice(0, 2) } };
