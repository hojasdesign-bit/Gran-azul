import React from 'react';
import styles from './DestinationCard.module.css';
import { cn } from '../../utils.js';

/** DestinationCard — un destino en Cuba, sin foto copiada del home: degradado + inicial. `badge` marca un destino destacado (ej. «Más buscado»). */
export function DestinationCard({ title, description, badge, className = '', ...rest }) {
  return (
    <article className={cn(styles.root, className)} {...rest}>
      <div className={styles.cover} aria-hidden="true">{title ? title.slice(0, 1) : '•'}</div>
      {badge && <span className={styles.badge}>{badge}</span>}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
    </article>
  );
}
