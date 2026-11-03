import { useState } from 'react';
import { Chip } from './Chip.jsx';

export default {
  title: 'Datos/Chip',
  component: Chip,
};

export const Normal = { args: { children: '$100' } };
export const Seleccionado = { args: { children: '$200', selected: true } };

const MONTOS = ['$100', '$200', '$500', '$1k'];

export const MontosRapidos = {
  render: () => {
    const [activo, setActivo] = useState('$200');
    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {MONTOS.map((m) => (
          <Chip key={m} selected={activo === m} onClick={() => setActivo(m)}>
            {m}
          </Chip>
        ))}
      </div>
    );
  },
};

export const Todos = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Chip>$100</Chip>
      <Chip selected>$200</Chip>
      <Chip>$500</Chip>
      <Chip>$1k</Chip>
      <Chip disabled>Deshabilitado</Chip>
    </div>
  ),
};

const CATEGORIAS = ['All posts', 'paquete', 'Ruta', 'Envíocurrency', 'DeFi', 'Miami', 'NFT', 'Web3'];

export const FiltrosDelBlog = {
  render: () => {
    const [activa, setActiva] = useState('All posts');
    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {CATEGORIAS.map((cat) => (
          <Chip key={cat} size="lg" selected={activa === cat} onClick={() => setActiva(cat)}>
            {cat}
          </Chip>
        ))}
      </div>
    );
  },
};
