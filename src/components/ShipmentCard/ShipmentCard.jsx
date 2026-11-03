import React from 'react';
import styles from './ShipmentCard.module.css';
import { cn } from '../../utils.js';

/** ShipmentCard — resumen de un envío con su código de rastreo. */
export function ShipmentCard({ code, status, origin = 'Estados Unidos', destination = 'Cuba', date, className = '', ...rest }) {
  return (
    <article className={cn(styles.root, className)} {...rest}>
      <div className={styles.top}><span className={styles.code}>{code}</span><span className={styles.status}>{status}</span></div>
      <p className={styles.route}>{origin} → {destination}</p>
      {date && <p className={styles.date}>{date}</p>}
    </article>
  );
}
