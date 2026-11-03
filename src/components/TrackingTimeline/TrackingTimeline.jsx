import React from 'react';
import styles from './TrackingTimeline.module.css';
import { cn } from '../../utils.js';

const DEFAULT_STEPS = ['Recogido', 'En tránsito', 'En Cuba', 'Entregado'];

/** TrackingTimeline — pasos del rastreador del home: Recogido / En tránsito / En Cuba / Entregado. */
export function TrackingTimeline({ steps = DEFAULT_STEPS, current = 1, className = '', ...rest }) {
  return (
    <ol className={cn(styles.root, className)} {...rest}>
      {steps.map((step, i) => (
        <li key={step} className={cn(styles.step, i < current && styles.done, i === current && styles.current)}>
          <span className={styles.dot} aria-hidden="true">{i < current ? '✓' : i + 1}</span>
          <span className={styles.label}>{step}</span>
        </li>
      ))}
    </ol>
  );
}
