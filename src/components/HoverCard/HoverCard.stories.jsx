import { HoverCard } from './HoverCard.jsx';
import { Avatar } from '../Avatar/Avatar.jsx';
import { Badge } from '../Badge/Badge.jsx';

export default {
  title: 'Superficies/HoverCard',
  component: HoverCard,
  argTypes: {
    position: { control: 'select', options: ['bottom', 'top'] },
  },
};

const PERFIL = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Avatar name="Camila Prieto" size={44} />
      <div>
        <p style={{ margin: 0, fontWeight: 700, color: 'var(--ga-ink)' }}>Camila Prieto</p>
        <p style={{ margin: 0, color: 'var(--ga-muted)' }}>En línea · responde en ~5 min</p>
      </div>
    </div>
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge variant="success">100% completadas</Badge>
      <Badge variant="neutral">3.392 operaciones</Badge>
    </div>
    <p style={{ margin: 0 }}>Acepta Zelle, transferencia y efectivo en La Habana.</p>
  </div>
);

export const PerfilDeCliente = {
  render: () => (
    <p style={{ color: 'var(--ga-ink-2)' }}>
      Pasa el cursor sobre{' '}
      <HoverCard trigger={<strong style={{ color: 'var(--ga-accent-bright)', cursor: 'pointer' }}>Camila Prieto</strong>}>
        {PERFIL}
      </HoverCard>{' '}
      para ver su perfil.
    </p>
  ),
};

export const PosicionSuperior = {
  render: () => (
    <div style={{ paddingTop: 220 }}>
      <HoverCard
        position="top"
        trigger={<Avatar name="Jorge Pérez" size={40} />}
      >
        {PERFIL}
      </HoverCard>
    </div>
  ),
};

export const ConTexto = {
  render: () => (
    <HoverCard trigger={<span style={{ textDecoration: 'underline', cursor: 'pointer' }}>¿Cómo se rastrea un envío?</span>}>
      <p style={{ margin: 0 }}>
        Gran Azul acompaña tu envío hasta la entrega. Si algo falla, nuestro equipo
        resuelve la disputa con el comprobante.
      </p>
    </HoverCard>
  ),
};
