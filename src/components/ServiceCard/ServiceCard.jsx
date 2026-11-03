import React from 'react';
import styles from './ServiceCard.module.css';
import { cn } from '../../utils.js';

/** ServiceCard — una de las 4 soluciones de Gran Azul del home. */
export function ServiceCard({ number, title, description, items = [], ctaLabel, onCta, className = '', featured = false, ...rest }) {
  return (
    <article className={cn(styles.root, featured && styles.featured, className)} {...rest}>
      {number && <span className={styles.number}>{number}</span>}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      {items.length > 0 && (
        <ul className={styles.list}>
          {items.map((item) => (<li key={item} className={styles.item}><span className={styles.check} aria-hidden="true">✓</span>{item}</li>))}
        </ul>
      )}
      {ctaLabel && <button type="button" className={styles.cta} onClick={onCta}>{ctaLabel} →</button>}
    </article>
  );
}
