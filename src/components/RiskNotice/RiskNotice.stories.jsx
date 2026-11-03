import { RiskNotice } from './RiskNotice.jsx';

export default {
  title: 'Comercio/RiskNotice',
  component: RiskNotice,
};

export const PorDefecto = {
  args: {
    text: 'Los envíos pueden demorar por revisión aduanera o disponibilidad de transporte. Gran Azul te informa el estado en cada paso.',
  },
};

export const Personalizado = {
  args: {
    title: 'Importante',
    text: 'Verifica siempre la dirección de tu billetera antes de confirmar. Las transacciones en ruta son irreversibles.',
  },
};
