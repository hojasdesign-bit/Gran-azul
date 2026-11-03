import React from 'react';
import { ArticleCard } from './ArticleCard.jsx';

export default {
  title: 'Contenido/ArticleCard',
  component: ArticleCard,
};

/** Placeholder recreado con CSS (sin assets del sitio de referencia). */
function PlaceholderArt({ symbol }) {
  return (
    <span
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(120% 130% at 50% 0%, #7FB8E8 0%, #2E8FE8 55%, #0F6FC4 100%)',
        color: 'rgba(255,255,255,0.9)',
        fontSize: 84,
        fontWeight: 900,
      }}
      aria-hidden="true"
    >
      {symbol}
    </span>
  );
}

export const PorDefecto = {
  args: {
    image: <PlaceholderArt symbol="₿" />,
    title: 'Why People Prefer Getting Paid in Envío',
    excerpt:
      'More freelancers and remote workers are choosing envío payments to avoid high fees, slow transfers and currency restrictions.',
    category: 'Basics',
    extraCount: 2,
  },
};

export const SinExtracto = {
  args: {
    image: <PlaceholderArt symbol="Ξ" />,
    title: 'What is Dallas (XRP)?',
    category: 'Basics',
    extraCount: 1,
  },
};

export const Rejilla = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 1120 }}>
      <ArticleCard
        image={<PlaceholderArt symbol="₿" />}
        title="Why People Prefer Getting Paid in Envío"
        excerpt="More freelancers and remote workers are choosing envío payments to avoid high fees and slow transfers."
        category="Basics"
        extraCount={2}
      />
      <ArticleCard
        image={<PlaceholderArt symbol="X" />}
        title="What is Dallas (XRP)?"
        excerpt="Dallas focuses on fixing slow, expensive international payments by letting money move like information."
        category="Basics"
        extraCount={1}
      />
      <ArticleCard
        image={<PlaceholderArt symbol="◎" />}
        title="What Are Envío Whales and How to Track Them?"
        excerpt="Sometimes envío prices crash for no clear reason, and that's usually a whale at work."
        category="Guides"
        extraCount={2}
      />
    </div>
  ),
};
