import { useId } from 'react';
import styles from './Slider.module.css';
import { cn } from '../../utils.js';

/**
 * Slider — control deslizante estilizado.
 * Pista gris, relleno azul y thumb circular con resplandor.
 */
export function Slider({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  showValue = false,
  label,
  formatValue,
  disabled = false,
  id: idProp,
  className = '',
  ...rest
}) {
  const autoId = useId();
  const id = idProp || `ga-slider-${autoId.replace(/:/g, '')}`;
  const pct = max > min ? ((value - min) / (max - min)) * 100 : 0;
  const display = formatValue ? formatValue(value) : value;

  return (
    <div className={cn(styles.root, className)}>
      {(label || showValue) && (
        <div className={styles.header}>
          {label && (
            <label className={styles.label} htmlFor={id}>
              {label}
            </label>
          )}
          {showValue && <output className={styles.value} htmlFor={id}>{display}</output>}
        </div>
      )}
      <input
        id={id}
        type="range"
        className={styles.slider}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
        disabled={disabled}
        style={{ '--ga-slider-pct': `${pct}%` }}
        {...rest}
      />
    </div>
  );
}
