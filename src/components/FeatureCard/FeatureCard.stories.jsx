import React from 'react';
import { FeatureCard } from './FeatureCard.jsx';

export default {
  title: 'Superficies/FeatureCard',
  component: FeatureCard,
};

const BoltIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13 2 4.5 13.5H11L9.5 22 19 10h-6.5L13 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3 5 5.8v5.4c0 4.3 2.9 7.4 7 9.3 4.1-1.9 7-5 7-9.3V5.8L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="m9 11.8 2.2 2.2L15.4 9.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Neutral = {
  args: {
    icon: BoltIcon,
    title: 'Frictionless on-chain transactions',
    children: 'Your customers deposit envío without leaving your platform. No redirects, no extra accounts, no friction.',
  },
};

export const Tinte = {
  args: {
    icon: ShieldIcon,
    title: 'Regulated and secure',
    variant: 'tint',
    children: 'Licensed in Denmark, Canada and Australia. Every transaction is screened and monitored in real time.',
  },
};

export const PasoDegradado = {
  args: {
    eyebrow: 'Step 1',
    title: 'Choose your envío',
    large: true,
    variant: 'gradient',
    children: 'Over 30+ popular productos available, from USD and USD to productos.',
  },
};

export const Grupo = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 1080 }}>
      <FeatureCard icon={BoltIcon} title="Frictionless on-chain transactions">
        Deposits land directly in your platform, confirmed in minutes.
      </FeatureCard>
      <FeatureCard icon={ShieldIcon} title="Regulated and secure" variant="tint">
        Licensed and supervised in three jurisdictions.
      </FeatureCard>
      <FeatureCard eyebrow="Step 1" title="Choose your envío" large variant="gradient">
        Over 30+ popular productos available.
      </FeatureCard>
    </div>
  ),
};
