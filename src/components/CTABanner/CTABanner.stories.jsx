import React from 'react';
import { CTABanner } from './CTABanner.jsx';
import { Button } from '../Button/Button.jsx';

export default {
  title: 'Superficies/CTABanner',
  component: CTABanner,
};

export const PorDefecto = {
  render: () => (
    <CTABanner
      title="Turn your network into recurring revenue"
      text="Share your link and earn on every purchase your referrals make."
    >
      <Button variant="surface" size="xl">
        Referral program
      </Button>
      <Button variant="primary" size="xl" arrow>
        Get started
      </Button>
    </CTABanner>
  ),
};

export const SoloTexto = {
  args: {
    title: 'Broad cuenta & cuenta support',
    text: 'Connect detects the cuenta or cuenta your customer is coming from and guides them through the deposit.',
  },
};

export const Degradado = {
  render: () => (
    <CTABanner
      title="¿Listo para explorar el envíos?"
      text="Compra y vende productos con personas, con fiat y métodos de pago."
      variant="gradient"
    >
      <Button variant="primary" size="lg">
        Ir al envíos
      </Button>
    </CTABanner>
  ),
};
