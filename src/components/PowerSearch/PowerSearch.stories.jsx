import { useState } from 'react';
import { PowerSearch } from './PowerSearch.jsx';

export default {
  title: 'Formularios/PowerSearch',
  component: PowerSearch,
};

const SCOPES = [
  { id: 'envíos', label: 'Envíos' },
  { id: 'clientes', label: 'Clientes' },
  { id: 'ordenes', label: 'Órdenes' },
];

const SUGERENCIAS = [
  { id: 's1', label: 'Enviar a Cuba con CUP', hint: 'Soluciones', scope: 'envíos' },
  { id: 's2', label: 'Rastrear envío por número', hint: 'Soluciones', scope: 'envíos' },
  { id: 's3', label: 'Camila Prieto', hint: '100% completadas', scope: 'clientes' },
  { id: 's4', label: 'Jorge Pérez', hint: '3.102 operaciones', scope: 'clientes' },
  { id: 's5', label: 'Orden #4821', hint: 'En curso', scope: 'ordenes' },
  { id: 's6', label: 'Guía de rastreo', hint: 'Ayuda' },
];

const RECIENTES = ['USD CUP', 'Zelle', 'Camila Prieto'];

function Demo({ scopes = SCOPES, suggestions = SUGERENCIAS, recents = RECIENTES }) {
  const [ultima, setUltima] = useState(null);
  return (
    <div>
      <PowerSearch
        scopes={scopes}
        suggestions={suggestions}
        recents={recents}
        placeholder="Buscar envíos, clientes u órdenes…"
        onSearch={(query, scopeId) => setUltima(`Búsqueda: «${query}» en ${scopeId || 'todo'}`)}
        onSelect={(item) => setUltima(`Elegido: ${item.label}`)}
      />
      <p style={{ margin: '12px 0 0', color: 'var(--ga-muted)', fontSize: 'var(--ga-text-body-sm)' }}>
        {ultima || 'Pulsa en el campo para ver los recientes; escribe para filtrar.'}
      </p>
    </div>
  );
}

export const Completo = {
  render: () => <Demo />,
};

export const SinAmbitos = {
  render: () => <Demo scopes={[]} />,
};

export const SoloRecientes = {
  render: () => <Demo suggestions={[]} recents={RECIENTES} />,
};

export const Vacio = {
  render: () => <Demo suggestions={[]} recents={[]} />,
};
