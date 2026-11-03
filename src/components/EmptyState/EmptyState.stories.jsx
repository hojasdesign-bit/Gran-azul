import { EmptyState } from './EmptyState.jsx';

export default {
  title: 'Datos/EmptyState',
  component: EmptyState,
};

const IconoBusqueda = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="7.2" stroke="currentColor" strokeWidth="1.8" />
    <path d="m16.5 16.5 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconoCartera = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h11A2.5 2.5 0 0 1 19 7.5V18a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 3 17V7.5Z" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3 9.5h16" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

export const SinResultados = {
  args: {
    icon: IconoBusqueda,
    title: 'Sin resultados',
    description: 'No encontramos soluciones con ese nombre. Prueba con otro término.',
  },
};

export const CarteraVacia = {
  args: {
    icon: IconoCartera,
    title: 'Aún no tienes activos',
    description: 'Compra tu primera envío en menos de 5 minutos con tarjeta o transferencia.',
    action: (
      <button
        type="button"
        style={{
          padding: '12px 24px',
          borderRadius: 'var(--ga-radius-sm)',
          border: 0,
          background: 'var(--ga-accent)',
          color: 'var(--ga-on-accent)',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Comprar ahora
      </button>
    ),
  },
};
