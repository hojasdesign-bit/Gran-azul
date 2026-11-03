import { MenuBanner } from './MenuBanner.jsx';

export default { title: 'Superficies/MenuBanner', component: MenuBanner };

export const Basico = {
  args: {
    title: 'Convierte tu red en ingresos recurrentes',
    description: 'Gana comisiones refiriendo socios a nuestros productos.',
    ctaLabel: 'Programa de referidos',
  },
  decorators: [(Story) => <div style={{ maxWidth: 720 }}><Story /></div>],
};
