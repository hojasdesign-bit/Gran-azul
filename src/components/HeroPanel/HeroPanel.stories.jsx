import { HeroPanel } from './HeroPanel.jsx';

export default {
  title: 'Comercio/HeroPanel',
  component: HeroPanel,
};

export const PorDefecto = {
  render: () => (
    <HeroPanel>
      <h2 style={{ margin: 0, fontSize: 'var(--ga-text-h2)', letterSpacing: 'var(--ga-tracking-tight)' }}>
        Envío a Cuba en minutos
      </h2>
      <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: 'var(--ga-text-body-lg)', lineHeight: 1.6 }}>
        Más de 50 soluciones disponibles con tu tarjeta, transferencia o Apple Pay.
      </p>
      <button
        type="button"
        style={{
          padding: '15px 32px',
          border: 0,
          borderRadius: 'var(--ga-radius-sm)',
          background: 'var(--ga-gradient-accent)',
          color: '#fff',
          fontWeight: 700,
          fontSize: 'var(--ga-text-body)',
          cursor: 'pointer',
        }}
      >
        Empezar ahora
      </button>
    </HeroPanel>
  ),
};
