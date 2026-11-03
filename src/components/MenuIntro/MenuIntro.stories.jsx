import { MenuIntro } from './MenuIntro.jsx';

export default { title: 'Superficies/MenuIntro', component: MenuIntro };

export const Basico = {
  args: {
    title: 'Enviar a Cuba',
    description: 'Envío a Cuba al instante con tarjeta, transferencia, Apple Pay, Google Pay o tu método local favorito.',
  },
  decorators: [(Story) => <div style={{ width: 366 }}><Story /></div>],
};
