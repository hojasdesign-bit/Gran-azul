import { FeaturedDestinations } from './FeaturedDestinations.jsx';

export default { title: 'Gran Azul/FeaturedDestinations', component: FeaturedDestinations };

export const Basico = {
  args: {
    featured: [
      { title: 'La Habana', description: 'La capital, primer destino de la mayoría de envíos.', badge: 'Más buscado' },
      { title: 'Santiago de Cuba', description: 'Oriente, con recogida en oficina.', badge: null },
      { title: 'Varadero', description: 'Destino de descanso y visitas.', badge: null },
    ],
    others: ['Camagüey', 'Holguín', 'Santa Clara', 'Cienfuegos', 'Matanzas'],
  },
};
