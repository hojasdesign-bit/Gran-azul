import React, { useMemo, useState } from 'react';
import styles from './QuoteOptions.module.css';
import { cn } from '../../utils.js';
import { Icon } from '../Icon/Icon.jsx';

const BADGE_LABELS = {
  best: 'Mejor valor',
  fastest: 'Más rápido',
  cheapest: 'Más económico',
};

/**
 * QuoteOptions — opciones de envío comparables, adaptadas del patrón de
 * cotización por tabla de la referencia, con diseño propio de Gran Azul.
 * En escritorio es una tabla; en móvil cada opción es una tarjeta, sin
 * scroll horizontal. Los datos son de ejemplo: el componente no inventa
 * transportistas ni tarifas reales, solo muestra las opciones que se le pasan.
 */
export function QuoteOptions({
  options = [],
  currency = 'USD',
  sort = 'price',
  onSortChange,
  selectedId = null,
  onSelect,
  className = '',
  ...rest
}) {
  const [internalSort, setInternalSort] = useState(sort);
  const currentSort = onSortChange ? sort : internalSort;
  const changeSort = (next) => {
    if (onSortChange) onSortChange(next);
    else setInternalSort(next);
  };
  const daysOf = (text) => {
    const m = String(text || '').match(/(\d+)/);
    return m ? Number(m[1]) : 999;
  };
  const sorted = useMemo(() => {
    const list = [...options];
    if (currentSort === 'time') list.sort((a, b) => daysOf(a.delivery) - daysOf(b.delivery));
    else list.sort((a, b) => a.price - b.price);
    return list;
  }, [options, currentSort]);

  return (
    <div className={cn(styles.root, className)} {...rest}>
      <div className={styles.sortBar}>
        <span className={styles.sortLabel}>Ordenar por</span>
        <div className={styles.sortGroup} role="group" aria-label="Ordenar opciones">
          <button type="button" className={cn(styles.sortBtn, currentSort === 'price' && styles.sortActive)} aria-pressed={currentSort === 'price'} onClick={() => changeSort('price')}>Precio</button>
          <button type="button" className={cn(styles.sortBtn, currentSort === 'time' && styles.sortActive)} aria-pressed={currentSort === 'time'} onClick={() => changeSort('time')}>Entrega</button>
        </div>
      </div>
      <div className={styles.header} aria-hidden="true">
        <span>Opción</span><span>Entrega</span><span>Rastreo</span><span>Valoración</span><span>Entrega</span><span>Impuestos</span><span>Total</span><span />
      </div>
      <ul className={styles.list}>
        {sorted.map((opt) => (
          <li key={opt.id} className={cn(styles.option, selectedId === opt.id && styles.selected)}>
            <div className={styles.cell}>
              <span className={styles.method}>{opt.method}</span>
              {opt.badge && <span className={cn(styles.badge, styles[`badge-${opt.badge}`])}>{BADGE_LABELS[opt.badge] || opt.badge}</span>}
            </div>
            <div className={styles.cell}><span className={styles.cellLabel}>Entrega</span>{opt.delivery}</div>
            <div className={styles.cell}><span className={styles.cellLabel}>Rastreo</span>{opt.tracking}</div>
            <div className={styles.cell}><span className={styles.cellLabel}>Valoración</span><span className={styles.rating} aria-label={`${opt.rating} de 5`}><Icon name="star" size={14} /> {opt.rating}</span></div>
            <div className={styles.cell}><span className={styles.cellLabel}>Entrega</span>{opt.deliveryType}</div>
            <div className={styles.cell}><span className={styles.cellLabel}>Impuestos</span>{opt.taxes === null || opt.taxes === undefined ? 'Incluidos' : `+ ${opt.taxes} ${currency}`}</div>
            <div className={styles.cell}>
              <span className={styles.cellLabel}>Total</span>
              <span className={styles.total}>
                {opt.oldPrice && <s className={styles.oldPrice}>{opt.oldPrice} {currency}</s>}
                <strong>{opt.price} {currency}</strong>
              </span>
            </div>
            <div className={styles.cell}>
              <button type="button" className={styles.cta} onClick={() => onSelect && onSelect(opt)}>
                {selectedId === opt.id ? 'Elegida ✓' : 'Elegir'}
              </button>
            </div>
          </li>
        ))}
      </ul>
      {sorted.length === 0 && <p className={styles.empty}>Sin opciones para mostrar.</p>}
    </div>
  );
}
