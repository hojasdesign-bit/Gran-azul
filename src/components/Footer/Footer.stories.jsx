import { Footer } from './Footer.jsx';

export default { title: 'Superficies/Footer', component: Footer };

export const Basico = {
  args: {
    links: [
      { label: 'Inicio', href: '#' },
      { label: 'Docs', href: '#' },
      { label: 'Precios', href: '#' },
      { label: 'Legal', href: '#' },
      { label: 'Privacidad', href: '#' },
    ],
    copyright: 'Copyright 2026 Gran Azul DS. Todos los derechos reservados.',
  },
  decorators: [(Story) => <div style={{ padding: '0 24px' }}><Story /></div>],
};
