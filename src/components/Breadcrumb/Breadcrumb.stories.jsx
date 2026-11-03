import { Breadcrumb } from './Breadcrumb.jsx';

export default {
  title: 'Datos/Breadcrumb',
  component: Breadcrumb,
};

export const Basico = {
  args: {
    items: [
      { label: 'Inicio', href: '#' },
      { label: 'Comprar', href: '#' },
      { label: 'paquete' },
    ],
  },
};

export const Largo = {
  args: {
    items: [
      { label: 'Inicio', href: '#' },
      { label: 'Soluciones', href: '#' },
      { label: 'Soluciones', href: '#' },
      { label: 'Miami', href: '#' },
      { label: 'Enviar a Cuba' },
    ],
  },
};
