import React from 'react';
import styles from './FlightCard.module.css';
import { cn } from '../../utils.js';

/** FlightCard — un vuelo de Gran Azul, sin aerolínea inventada. */
export function FlightCard({ origin, destination, date, duration, price, currency = 'USD', ctaLabel = 'Ver vuelo', onCta, className = '', ...rest }) {
  return (
    <article className={cn(styles.root, className)} {...rest}>
      <p className={styles.route}>{origin} → {destination}</p>
      <p className={styles.meta}>{date}{duration ? ` · ${duration}` : ''}</p>
      <div className={styles.bottom}><span className={styles.price}>{price} {currency}</span>{ctaLabel && <button type="button" className={styles.cta} onClick={onCta}>{ctaLabel} →</button>}</div>
    </article>
  );
}
