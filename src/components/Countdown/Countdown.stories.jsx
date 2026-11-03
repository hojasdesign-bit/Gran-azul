import { useEffect, useState } from 'react';
import { Countdown } from './Countdown.jsx';

export default { title: 'Datos/Countdown', component: Countdown };

export const PlazoPago = { args: { secondsLeft: 754, totalSeconds: 900, label: 'Tiempo para pagar' } };
export const Urgente = { args: { secondsLeft: 42, totalSeconds: 900, label: 'La orden está por expirar' } };

export const EnVivo = {
  render: () => {
    const [s, setS] = useState(180);
    useEffect(() => {
      const t = setInterval(() => setS((v) => (v > 0 ? v - 1 : 180)), 1000);
      return () => clearInterval(t);
    }, []);
    return <Countdown secondsLeft={s} totalSeconds={180} label="Tiempo para liberar fondos" size={88} />;
  },
};
