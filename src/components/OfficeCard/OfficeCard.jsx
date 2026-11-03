import React from 'react';
import styles from './OfficeCard.module.css';
import { cn } from '../../utils.js';

/** OfficeCard — una oficina de Gran Azul en EE. UU. Solo ciudad y estado, sin dirección inventada. */
export function OfficeCard({ city, state, note = 'Atención personalizada en tu ciudad', ctaLabel = 'Ver oficina', onCta, className = '', ...rest }) {
  return (
    <article className={cn(styles.root, className)} {...rest}>
      <span className={styles.pin} aria-hidden="true">⌖</span>
      <h3 className={styles.city}>{city}, {state}</h3>
      <p className={styles.note}>{note}</p>
      {ctaLabel && <button type="button" className={styles.cta} onClick={onCta}>{ctaLabel} →</button>}
    </article>
  );
}
