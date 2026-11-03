import { IconButton } from './IconButton.jsx';

export default { title: 'Núcleo/IconButton', component: IconButton };

const I = {
  copy: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="1.8" /></svg>),
  qr: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" /><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" /><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" /><path d="M14 14h3v3h-3zM21 14v.01M14 21v.01M18 18h3v3h-3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>),
  pause: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 5v14M15 5v14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>),
  eye: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" /></svg>),
  trash: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M9 7V4h6v3M6.5 7l1 13h9l1-13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>),
};

export const Variantes = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <IconButton label="Copiar (ghost)">{I.copy}</IconButton>
      <IconButton label="Ver QR (surface)" variant="surface">{I.qr}</IconButton>
      <IconButton label="Pausar (outline)" variant="outline">{I.pause}</IconButton>
      <IconButton label="Ver detalle (accent)" variant="accent">{I.eye}</IconButton>
      <IconButton label="Eliminar (danger)" variant="danger">{I.trash}</IconButton>
    </div>
  ),
};

export const Tamanos = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <IconButton label="Copiar pequeño" size="sm" variant="surface">{I.copy}</IconButton>
      <IconButton label="Copiar mediano" size="md" variant="surface">{I.copy}</IconButton>
      <IconButton label="Copiar grande" size="lg" variant="surface">{I.copy}</IconButton>
      <IconButton label="Copiar deshabilitado" variant="surface" disabled>{I.copy}</IconButton>
    </div>
  ),
};

export const AccionesDeEnvio = {
  render: () => (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center', padding: 12, border: '1px solid var(--ga-border)', borderRadius: 12, width: 'fit-content' }}>
      <IconButton label="Pausar envío">{I.pause}</IconButton>
      <IconButton label="Ver detalles">{I.eye}</IconButton>
      <IconButton label="Eliminar envío" variant="danger">{I.trash}</IconButton>
    </div>
  ),
};
