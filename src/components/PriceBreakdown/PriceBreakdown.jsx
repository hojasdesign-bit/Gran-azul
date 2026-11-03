import React from 'react';
import styles from './PriceBreakdown.module.css';
import { cn } from '../../utils.js';

/** PriceBreakdown — desglose de un envío: filas + total. */
export function PriceBreakdown({ rows = [], total, currency = 'USD', className = '', ...rest }) {
  return (
    <div className={cn(styles.root, className)} {...rest}>
      {rows.map((row) => (
        <div key={row.label} className={styles.row}><span>{row.label}</span><span>{row.value} {currency}</span></div>
      ))}
      {total !== undefined && <div className={cn(styles.row, styles.total)}><span>Total</span><span>{total} {currency}</span></div>}
    </div>
  );
}
