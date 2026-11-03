import { AppBar } from './AppBar.jsx';
import { Avatar } from '../Avatar/Avatar.jsx';

export default { title: 'Superficies/AppBar', component: AppBar };

const IconBtn = ({ children, label }) => (
  <button
    type="button"
    aria-label={label}
    style={{
      width: 38, height: 38, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      borderRadius: '50%', border: 0, background: 'var(--ga-surface-raised)', color: 'var(--ga-ink)', cursor: 'pointer',
    }}
  >
    {children}
  </button>
);

export const ConVolver = {
  args: {
    title: 'Orden ENV-048213',
    subtitle: 'Compra de USD · Camila P.',
    onBack: () => {},
    actions: (
      <IconBtn label="Más opciones">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.8" /><circle cx="12" cy="12" r="1.8" /><circle cx="12" cy="19" r="1.8" /></svg>
      </IconBtn>
    ),
  },
};

export const DePerfil = {
  args: {
    title: 'Mi perfil',
    subtitle: 'Nivel 2 · Verificado',
    actions: <Avatar name="Adrián Hojas" size={38} online />,
  },
};
