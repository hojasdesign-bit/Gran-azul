import { useId } from 'react';
import styles from './AmountField.module.css';
import { cn } from '../../utils.js';


/**
 * AmountField — fila de monto para un envío.
 * Etiqueta pequeña arriba, input numérico grande en negrita y
 * botón píldora selector de moneda con icono, código y chevron.
 */
export function AmountField({
  label = 'Usted paga',
  value,
  onChange,
  currency = { code: 'USD', symbol: '$', color: '#0075A7' },
  onCurrencyClick,
  readOnly = false,
  id: idProp,
  className = '',
  ...rest
}) {
  const autoId = useId();
  const id = idProp || `ga-amount-${autoId.replace(/:/g, '')}`;

  return (
    <div className={cn(styles.root, className)}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={styles.row}>
        <input
          id={id}
          type="text"
          inputMode="decimal"
          className={styles.amount}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          placeholder="0"
          aria-label={label || 'Monto'}
          {...rest}
        />
        <button
          type="button"
          className={styles.currencyPill}
          onClick={onCurrencyClick}
          aria-label={onCurrencyClick ? `Cambiar moneda, actual: ${currency.code}` : `Moneda: ${currency.code}`}
          aria-haspopup={onCurrencyClick ? 'dialog' : undefined}
        >
          <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--ga-brand)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>{(currency.symbol || currency.code || '?').slice(0, 1)}</span>
          <span className={styles.code}>{currency.code}</span>
          <svg className={styles.chevron} width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
