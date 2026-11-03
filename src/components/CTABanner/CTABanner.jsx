import React from 'react';
import styles from './CTABanner.module.css';
import { cn } from '../../utils.js';

/**
 * CTABanner — banda horizontal de llamada a la acción (radio 16,
 * tinte azul, padding 32): título y texto a la izquierda,
 * acciones a la derecha. Patrón del banner de referidos del sitio.
 * Con `variant="gradient"` pasa al CTA de las páginas de contenido
 * (como el del glosario): lavado azul en degradado, radio 8 y
 * título 24/32.
 */
export function CTABanner({ title, text, variant = 'tint', children, className = '', ...rest }) {
  return (
    <section className={cn(styles.banner, variant === 'gradient' && styles.gradient, className)} {...rest}>
      <div className={styles.copy}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {text && <p className={styles.text}>{text}</p>}
      </div>
      {children && <div className={styles.actions}>{children}</div>}
    </section>
  );
}
