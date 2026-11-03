import { useState } from 'react';
import { Panel } from './Panel.jsx';
import { SearchInput } from '../SearchInput/SearchInput.jsx';
import { OptionRow } from '../OptionRow/OptionRow.jsx';

export default {
  title: 'Superficies/Panel',
  component: Panel,
};

function PaisDot({ code, color }) {
  return (
    <span
      style={{
        width: 24, height: 24, borderRadius: '50%', background: color, color: '#fff',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 9, fontWeight: 700,
      }}
      aria-hidden="true"
    >
      {code}
    </span>
  );
}

const PAISES = [
  { name: 'Albania', code: 'AL', color: '#e41e20' },
  { name: 'Andorra', code: 'AD', color: '#d21034' },
  { name: 'Angola', code: 'AO', color: '#cc092f' },
  { name: 'Anguila', code: 'AI', color: '#012169' },
  { name: 'Antigua y Barbuda', code: 'AG', color: '#ce1126' },
  { name: 'Argentina', code: 'AR', color: '#74acdf' },
  { name: 'Armenia', code: 'AM', color: '#d90012' },
];

export const SeleccionarPais = {
  render: () => {
    const [sel, setSel] = useState('AL');
    const [q, setQ] = useState('');
    const lista = PAISES.filter((p) => `${p.name} ${p.code}`.toLowerCase().includes(q.toLowerCase()));
    return (
      <Panel title="Seleccionar país" onBack={() => {}}>
        <SearchInput value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar país" aria-label="Buscar país" />
        <div role="radiogroup" aria-label="País" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {lista.map((p) => (
            <OptionRow
              key={p.code}
              icon={<PaisDot code={p.code} color={p.color} />}
              label={p.name}
              code={p.code}
              selected={sel === p.code}
              onClick={() => setSel(p.code)}
            />
          ))}
        </div>
      </Panel>
    );
  },
};

export const PagarCon = {
  render: () => {
    const [sel, setSel] = useState('googlepay');
    const [q, setQ] = useState('');
    const fee = '1.75% Comisión';
    const pais = (
      <span
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 4, height: 30, padding: '0 8px',
          borderRadius: 999, background: 'var(--ga-surface-raised)', fontSize: 13, fontWeight: 600,
        }}
      >
        <PaisDot code="US" color="#3c3b6e" /> ▾
      </span>
    );
    return (
      <Panel title="Pagar con" onBack={() => {}} backIcon="chevron" actions={pais}>
        <SearchInput value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar métodos de pago" aria-label="Buscar métodos de pago" />
        <p style={{ margin: 0, fontWeight: 600 }}>Popular en Estados Unidos</p>
        <div role="radiogroup" aria-label="Método de pago" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <OptionRow icon={<span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--ga-brand)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}></span>} label="Apple Pay" meta={fee} selected={sel === 'applepay'} onClick={() => setSel('applepay')} />
          <OptionRow icon={<span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--ga-brand)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}></span>} label="Card" meta={fee} selected={sel === 'card'} onClick={() => setSel('card')} />
          <OptionRow icon={<span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--ga-brand)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>G</span>} label="Google Pay" meta={fee} selected={sel === 'googlepay'} onClick={() => setSel('googlepay')} />
        </div>
      </Panel>
    );
  },
};
