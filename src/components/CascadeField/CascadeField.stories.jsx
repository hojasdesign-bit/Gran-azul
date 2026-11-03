import { useState } from 'react';
import { CascadeField } from './CascadeField.jsx';

export default { title: 'Formularios/CascadeField', component: CascadeField };

const SOLUCIONES = [
  { value: 'enviar', label: 'Enviar a Cuba', description: 'Casillero virtual, puerta a puerta y oficinas', options: [{ value: 'casillero', label: 'Casillero virtual' }, { value: 'puerta', label: 'Puerta a puerta' }, { value: 'oficina', label: 'Oficinas Gran Azul' }] },
  { value: 'comprar', label: 'Comprar para Cuba', description: 'Combos, alimentos y electrodomésticos', options: [{ value: 'combos', label: 'Combos familiares' }, { value: 'alimentos', label: 'Alimentos y bebidas' }, { value: 'electro', label: 'Electrodomésticos' }] },
  { value: 'tramites', label: 'Trámites legales', description: 'Documentos y legalizaciones', options: [{ value: 'documentos', label: 'Documentos' }, { value: 'legalizaciones', label: 'Legalizaciones' }] },
  { value: 'viajar', label: 'Viajar a Cuba', description: 'Vuelos, hoteles y traslados', options: [{ value: 'vuelos', label: 'Vuelos' }, { value: 'hoteles', label: 'Hoteles' }, { value: 'traslados', label: 'Traslados' }] },
];

function DemoSolucion() {
  const [v, setV] = useState({ first: null, second: null });
  return (
    <div style={{ width: 460, minHeight: 380 }}>
      <CascadeField label="Solución y opción" options={SOLUCIONES} value={v} onChange={setV} firstPlaceholder="Escribe o elige una solución" secondPlaceholder="Elige una opción" firstAriaLabel="Solución" secondAriaLabel="Opción" hint="La opción depende de la solución elegida." />
      <p style={{ marginTop: 14, color: 'var(--ga-muted)', fontSize: '0.875rem' }}>Selección: <strong style={{ color: 'var(--ga-ink)' }}>{v.first || '—'}{v.second ? ` · ${v.second}` : ''}</strong></p>
    </div>
  );
}
export const SolucionYOpcion = { render: () => <DemoSolucion /> };

function DemoPrecargado() {
  const [v, setV] = useState({ first: 'enviar', second: 'puerta' });
  return (
    <div style={{ width: 460, minHeight: 380 }}>
      <CascadeField label="Solución y opción" options={SOLUCIONES} value={v} onChange={setV} firstPlaceholder="Escribe o elige una solución" secondPlaceholder="Elige una opción" firstAriaLabel="Solución" secondAriaLabel="Opción" />
    </div>
  );
}
export const Precargado = { render: () => <DemoPrecargado /> };
