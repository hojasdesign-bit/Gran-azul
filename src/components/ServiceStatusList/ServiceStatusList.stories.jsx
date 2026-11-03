import { ServiceStatusList } from './ServiceStatusList.jsx';

export default { title: 'Gran Azul/ServiceStatusList', component: ServiceStatusList };

export const Basico = {
  args: {
    items: [
      { name: 'Envíos aéreos', description: 'Miami, Orlando y Tampa', status: 'available' },
      { name: 'Envíos marítimos', description: 'Carga comercial y personal', status: 'available' },
      { name: 'Compra para Cuba', description: 'Tiendas verificadas', status: 'review' },
      { name: 'Trámites legales', description: 'Documentación y poderes', status: 'soon' },
    ],
  },
};
