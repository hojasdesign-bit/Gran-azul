import React, { useState } from 'react';
import styles from './WeightInput.module.css';
import { cn } from '../../utils.js';
import { SegmentedControl } from '../SegmentedControl/SegmentedControl.jsx';

/**
 * WeightInput — peso con botones −/+ y, al lado, un switch lb/kg.
 * El valor siempre va en la unidad activa; si no se controla la unidad
 * desde fuera (sin onUnitChange), el switch la gestiona internamente.
 */
export function WeightInput({
  label = 'Peso',
  value = 0,
  onChange,
  unit = 'lb',
  onUnitChange,
  units = ['lb', 'kg'],
  min = 0,
  step = 1,
  className = '',
  ...rest
}) {
  const [internalUnit, setInternalUnit] = useState(unit);
  const currentUnit = onUnitChange ? unit : internalUnit;
  const set = (next) => onChange && onChange(Math.max(min, next));
  const changeUnit = (next) => {
    if (onUnitChange) onUnitChange(next);
    else setInternalUnit(next);
  };
  return (
    <div className={cn(styles.root, className)} {...rest}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.controls}>
        <div className={styles.row}>
          <button type="button" className={styles.btn} onClick={() => set((value || 0) - step)} aria-label="Quitar peso">−</button>
          <input className={styles.input} type="number" value={value} min={min} step={step} onChange={(e) => set(Number(e.target.value) || 0)} aria-label={label} />
          <button type="button" className={styles.btn} onClick={() => set((value || 0) + step)} aria-label="Añadir peso">+</button>
        </div>
        <SegmentedControl
          options={units.map((u) => ({ value: u, label: u.toUpperCase() }))}
          value={currentUnit}
          onChange={changeUnit}
          ariaLabel="Unidad de peso"
          style={{ width: 'auto', flexShrink: 0 }}
        />
      </div>
    </div>
  );
}
