import React from 'react';
import styles from './ServiceStatusList.module.css';
import { cn } from '../../utils.js';

const STATUS = {
  available: { label: 'Disponible', dot: styles.dotAvailable },
  review: { label: 'En revisión', dot: styles.dotReview },
  soon: { label: 'Próximamente', dot: styles.dotSoon },
};

/**
 * ServiceStatusList — lista de servicios, métodos o destinos con su
 * estado, adaptada del bloque de integraciones de la referencia y
 * mejorada: el estado se ve con punto y etiqueta, y lo que aún no
 * está listo no se oculta, se marca como tal.
 */
export function ServiceStatusList({ items = [], className = '', ...rest }) {
  return (
    <ul className={cn(styles.root, className)} {...rest}>
      {items.map((item) => {
        const status = STATUS[item.status] || STATUS.soon;
        return (
          <li key={item.name} className={styles.item}>
            <span className={cn(styles.dot, status.dot)} aria-hidden="true" />
            <div className={styles.main}>
              <span className={styles.name}>{item.name}</span>
              {item.description && <span className={styles.description}>{item.description}</span>}
            </div>
            <span className={styles.status}>{status.label}</span>
          </li>
        );
      })}
    </ul>
  );
}
