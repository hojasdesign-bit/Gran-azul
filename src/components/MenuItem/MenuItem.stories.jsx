import { useState } from 'react';
import { MenuItem } from './MenuItem.jsx';
import { Switch } from '../Switch/Switch.jsx';

export default {
  title: 'Datos/MenuItem',
  component: MenuItem,
};

const I = {
  list: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M8.5 6h12M8.5 12h12M8.5 18h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><circle cx="4" cy="6" r="1.3" fill="currentColor" /><circle cx="4" cy="12" r="1.3" fill="currentColor" /><circle cx="4" cy="18" r="1.3" fill="currentColor" /></svg>
  ),
  folder: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" /><path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" /></svg>
  ),
  sun: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" /><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5 5l1.8 1.8M17.2 17.2 19 19M19 5l-1.8 1.8M6.8 17.2 5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
  ),
  info: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" /><path d="M12 11v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><circle cx="12" cy="7.8" r="1.3" fill="currentColor" /></svg>
  ),
  shield: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3 5 5.8v5.4c0 4.3 2.9 7.4 7 9.3 4.1-1.9 7-5 7-9.3V5.8L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
  ),
  chat: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v7a2.5 2.5 0 0 1-2.5 2.5H12l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 12.5v-7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><circle cx="18.6" cy="4.4" r="2" fill="#22c55e" stroke="var(--ga-panel-bg)" strokeWidth="1.2" /></svg>
  ),
  logout: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M14 4h-7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7M10 12h11M18 8.5 21.5 12 18 15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
};

export const MenuDeCuenta = {
  render: () => {
    const [oscuro, setOscuro] = useState(true);
    return (
      <div style={{ width: 360, background: 'var(--ga-panel-bg)', borderRadius: 28, padding: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <span style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--ga-surface-raised)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
            A
          </span>
          <span style={{ flex: 1 }}>
            <span style={{ display: 'block', fontWeight: 600 }}>¡Hola Adrian!</span>
            <span style={{ display: 'block', color: 'var(--ga-muted)', fontSize: 13 }}>hojas.design@gmail.com</span>
          </span>
        </div>
        <MenuItem icon={I.list} label="Historial De Pagos" />
        <MenuItem icon={I.folder} label="Direcciones Guardadas" />
        <MenuItem
          icon={I.sun}
          label="Tema"
          trailing={<Switch checked={oscuro} onChange={(v) => setOscuro(v)} aria-label="Tema oscuro" />}
        />
        <MenuItem icon={I.info} label="Términos De Uso" trailing="external" />
        <MenuItem icon={I.shield} label="Política De Privacidad" trailing="external" />
        <MenuItem icon={I.chat} label="Contactar Soporte" trailing="external" />
        <div style={{ marginTop: 24 }}>
          <MenuItem icon={I.logout} label="Cerrar Sesión" />
        </div>
      </div>
    );
  },
};

export const Simple = { args: { icon: I.list, label: 'Historial De Pagos' } };
export const EnlaceExterno = { args: { icon: I.info, label: 'Términos De Uso', trailing: 'external' } };
export const SinCierre = { args: { icon: I.folder, label: 'Direcciones Guardadas', trailing: 'none' } };
