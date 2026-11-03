import React, { useState } from 'react';
import styles from './TrackingSearch.module.css';
import { cn } from '../../utils.js';
import { Icon } from '../Icon/Icon.jsx';

/**
 * TrackingSearch — buscador de rastreo integrado, pensado para ir dentro
 * del héroe: campo alargado con botón dentro, a la derecha. No rastrea
 * nada por sí solo: entrega el código a onSearch y el resultado lo
 * muestra quien lo usa (por ejemplo, ShipmentCard + TrackingTimeline).
 */
export function TrackingSearch({
  label = 'Rastrea tu envío',
  placeholder = 'Ej. GA-123456',
  buttonLabel = 'Rastrear',
  defaultValue = '',
  onSearch,
  className = '',
  ...rest
}) {
  const [code, setCode] = useState(defaultValue);
  const submit = (e) => {
    e.preventDefault();
    if (onSearch && code.trim()) onSearch(code.trim());
  };
  return (
    <form className={cn(styles.root, className)} onSubmit={submit} {...rest}>
      {label && <label className={styles.label} htmlFor="ga-tracking-search">{label}</label>}
      <div className={styles.field}>
        <span className={styles.icon} aria-hidden="true"><Icon name="search" size={20} /></span>
        <input
          id="ga-tracking-search"
          className={styles.input}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder={placeholder}
          aria-label={label || 'Código de rastreo'}
        />
        <button type="submit" className={styles.button}>{buttonLabel}</button>
      </div>
    </form>
  );
}
