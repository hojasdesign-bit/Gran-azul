import { useState } from 'react';
import { SearchInput } from './SearchInput.jsx';

export default {
  title: 'Formularios/SearchInput',
  component: SearchInput,
};

function DemoBasico() {
  const [texto, setTexto] = useState('');
  return (
    <div style={{ maxWidth: 420 }}>
      <SearchInput
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Buscar monedas…"
      />
    </div>
  );
}

export const Basico = { render: () => <DemoBasico /> };

function DemoConTexto() {
  const [texto, setTexto] = useState('envio');
  return (
    <div style={{ maxWidth: 420 }}>
      <SearchInput
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Buscar monedas…"
      />
      <p style={{ color: 'var(--ga-muted)', fontSize: '0.875rem' }}>
        Buscando: <strong style={{ color: 'var(--ga-ink)' }}>{texto || '—'}</strong>
      </p>
    </div>
  );
}

export const ConTexto = { render: () => <DemoConTexto /> };

function DemoOnClear() {
  const [texto, setTexto] = useState('miami');
  const [limpiezas, setLimpiezas] = useState(0);
  return (
    <div style={{ maxWidth: 420 }}>
      <SearchInput
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onClear={() => setLimpiezas((n) => n + 1)}
        placeholder="Buscar monedas…"
        aria-label="Buscar en el catálogo"
      />
      <p style={{ color: 'var(--ga-muted)', fontSize: '0.875rem' }}>
        Veces que se limpió: <strong style={{ color: 'var(--ga-ink)' }}>{limpiezas}</strong>
      </p>
    </div>
  );
}

export const ConOnClear = { render: () => <DemoOnClear /> };
