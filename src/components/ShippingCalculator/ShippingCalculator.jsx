import React, { useState } from 'react';
import styles from './ShippingCalculator.module.css';
import { cn } from '../../utils.js';
import { WeightInput } from '../WeightInput/WeightInput.jsx';
import { SegmentedControl } from '../SegmentedControl/SegmentedControl.jsx';

const LB_POR_KG = 2.20462;

/** ShippingCalculator — peso + método aéreo/marítimo. El resultado es SOLO un ejemplo demo, no una tarifa real de Gran Azul. Las tarifas son por libra, así que un peso en kg se convierte a lb para el cálculo. */
export function ShippingCalculator({ airRate = 3, seaRate = 2, className = '', ...rest }) {
  const [peso, setPeso] = useState(10);
  const [unidad, setUnidad] = useState('lb');
  const [metodo, setMetodo] = useState('aereo');
  const rate = metodo === 'aereo' ? airRate : seaRate;
  const pesoLb = unidad === 'kg' ? peso * LB_POR_KG : peso;
  const total = pesoLb * rate;
  const totalTexto = Number.isInteger(total) ? String(total) : total.toFixed(2);
  const cambiarUnidad = (next) => {
    if (next === unidad) return;
    setPeso(next === 'kg' ? Math.round((peso / LB_POR_KG) * 10) / 10 : Math.round(peso * LB_POR_KG));
    setUnidad(next);
  };
  return (
    <div className={cn(styles.root, className)} {...rest}>
      <h3 className={styles.title}>Calcula tu envío</h3>
      <WeightInput
        label="Peso del paquete"
        value={peso}
        onChange={setPeso}
        unit={unidad}
        onUnitChange={cambiarUnidad}
        step={unidad === 'kg' ? 0.5 : 1}
      />
      <SegmentedControl
        options={[
          { value: 'aereo', label: 'Aéreo' },
          { value: 'maritimo', label: 'Marítimo' },
        ]}
        value={metodo}
        onChange={setMetodo}
        ariaLabel="Método de envío"
      />
      <p className={styles.result}>
        Ejemplo demo: <strong>{totalTexto} USD</strong>
        {unidad === 'kg'
          ? ` (${peso} kg ≈ ${Math.round(pesoLb * 10) / 10} lb × ${rate} USD/lb)`
          : ` (${peso} lb × ${rate} USD/lb)`}
      </p>
      <p className={styles.demo}>Solo un ejemplo para la demo. No son tarifas reales de Gran Azul.</p>
    </div>
  );
}
