import { useState } from 'react';
import { OptionRow } from './OptionRow.jsx';

export default {
  title: 'Formularios/OptionRow',
  component: OptionRow,
};

export const MetodosDePago = {
  render: () => {
    const [sel, setSel] = useState('googlepay');
    const fee = '1.75% Comisión';
    return (
      <div role="radiogroup" aria-label="Método de pago" style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 360 }}>
        <OptionRow
          icon={<span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--ga-brand)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}></span>}
          label="Apple Pay"
          meta={fee}
          selected={sel === 'applepay'}
          onClick={() => setSel('applepay')}
        />
        <OptionRow
          icon={<span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--ga-brand)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}></span>}
          label="Card"
          meta={fee}
          selected={sel === 'card'}
          onClick={() => setSel('card')}
        />
        <OptionRow
          icon={<span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--ga-brand)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>G</span>}
          label="Google Pay"
          meta={fee}
          selected={sel === 'googlepay'}
          onClick={() => setSel('googlepay')}
        />
      </div>
    );
  },
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

export const Paises = {
  render: () => {
    const [sel, setSel] = useState('AR');
    return (
      <div role="radiogroup" aria-label="País" style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 360 }}>
        {PAISES.map((p) => (
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
    );
  },
};

export const Simple = {
  args: {
    label: 'paquete',
    code: 'USD',
    icon: <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--ga-brand)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>B</span>,
    selected: true,
  },
};
