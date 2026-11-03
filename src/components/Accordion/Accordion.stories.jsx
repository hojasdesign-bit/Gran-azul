import { Accordion } from './Accordion.jsx';

export default {
  title: 'Superficies/Accordion',
  component: Accordion,
};

const faq = [
  {
    title: '¿Necesito verificar mi identidad?',
    content:
      'Para montos bajos puedes comprar solo con tu correo electrónico. Montos mayores requieren una verificación de identidad rápida que tarda unos minutos.',
  },
  {
    title: '¿Cuánto tarda en llegar mi envío?',
    content:
      'La mayoría de las órdenes se completan en menos de 10 minutos. Las transferencias bancarias pueden tardar de 1 a 3 días laborables.',
  },
  {
    title: '¿Qué comisiones aplican?',
    content:
      'La comisión depende del método de pago: tarjeta 1.75%, transferencia bancaria 0.5%. El tipo de cambio se muestra siempre antes de confirmar.',
  },
];

export const UnaAbierta = {
  args: { items: faq, defaultOpen: [0] },
};

export const Multiples = {
  args: { items: faq, allowMultiple: true, defaultOpen: [0, 1] },
};
