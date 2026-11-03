import { VerifiedBadge } from './VerifiedBadge.jsx';

export default { title: 'Datos/VerifiedBadge', component: VerifiedBadge };

export const Variantes = {
  render: () => (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
      <VerifiedBadge />
      <VerifiedBadge variant="premium" />
      <VerifiedBadge variant="success" />
      <VerifiedBadge size={22} />
    </div>
  ),
};

export const ConEtiqueta = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <VerifiedBadge showLabel />
      <VerifiedBadge variant="premium" showLabel />
    </div>
  ),
};

export const JuntoAlNombre = {
  render: () => (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontWeight: 700, color: 'var(--ga-ink)', fontSize: '1rem' }}>
      granazul <VerifiedBadge variant="premium" />
    </span>
  ),
};
