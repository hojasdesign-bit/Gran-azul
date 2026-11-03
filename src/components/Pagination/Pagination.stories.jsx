import React from 'react';
import { Pagination } from './Pagination.jsx';

export default {
  title: 'Superficies/Pagination',
  component: Pagination,
};

export const Interactiva = {
  render: () => {
    const [page, setPage] = React.useState(1);
    return <Pagination page={page} totalPages={5} onChange={setPage} />;
  },
};

export const MuchasPaginas = {
  render: () => {
    const [page, setPage] = React.useState(8);
    return <Pagination page={page} totalPages={24} onChange={setPage} />;
  },
};

export const AlFinal = {
  args: { page: 10, totalPages: 10, onChange: () => {} },
};

export const CuadradaRedondeada = {
  render: () => {
    const [page, setPage] = React.useState(8);
    return <Pagination page={page} totalPages={24} onChange={setPage} shape="rounded" />;
  },
};

const Fila = ({ label, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <span style={{ fontSize: 12, color: 'var(--ga-label)' }}>{label}</span>
    {children}
  </div>
);

export const Formas = {
  render: () => {
    const [a, setA] = React.useState(3);
    const [b, setB] = React.useState(3);
    const [c, setC] = React.useState(3);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Fila label="Píldora">
          <Pagination page={a} totalPages={9} onChange={setA} />
        </Fila>
        <Fila label="Cuadrada redondeada">
          <Pagination page={b} totalPages={9} onChange={setB} shape="rounded" />
        </Fila>
        <Fila label="Cuadrada sin borde">
          <Pagination page={c} totalPages={9} onChange={setC} shape="soft" />
        </Fila>
      </div>
    );
  },
};

export const CuadradaSinBorde = {
  render: () => {
    const [page, setPage] = React.useState(8);
    return <Pagination page={page} totalPages={24} onChange={setPage} shape="soft" />;
  },
};
