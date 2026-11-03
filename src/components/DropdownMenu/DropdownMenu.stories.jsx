import { DropdownMenu } from './DropdownMenu.jsx';

export default { title: 'Superficies/DropdownMenu', component: DropdownMenu };

const SOCIALS = [
  { label: 'X', href: '#', icon: (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>) },
  { label: 'LinkedIn', href: '#', icon: (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><text x="12" y="17" textAnchor="middle" fontSize="11" fontWeight="800" fill="currentColor">in</text></svg>) },
  { label: 'Instagram', href: '#', icon: (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" /></svg>) },
];

const LINKS = [
  { label: 'Blog', href: '#' },
  { label: 'Glosario', href: '#' },
  { label: 'Legal', href: '#' },
  { label: 'FAQ', href: '#' },
];

const SOLUCIONES = [
  { label: 'Enviar a Cuba', href: '#' },
  { label: 'Comprar para Cuba', href: '#' },
  { label: 'Trámites legales', href: '#' },
  { label: 'Viajar a Cuba', href: '#' },
  { label: 'Rastrear envío', href: '#' },
  { label: 'Oficinas en EE. UU.', href: '#' },
];

const Bar = (Story) => (
  <div style={{ minHeight: 380 }}>
    <div style={{ position: 'relative', height: 64, background: 'var(--ga-bg)', borderBottom: '1px solid var(--ga-border)' }}>
      <Story />
    </div>
  </div>
);

export const Soluciones = {
  args: {
    dropdown: {
      intro: { title: 'Enviar a Cuba', description: 'Haz llegar lo que más importa a tu familia en Cuba, de la forma más fácil y segura.' },
      coins: SOLUCIONES,
      links: LINKS,
      socials: SOCIALS,
    },
  },
  decorators: [Bar],
};

export const Tarjetas = {
  args: {
    dropdown: {
      cards: [
        { title: 'Enviar a Cuba', description: 'Casillero virtual, puerta a puerta y oficinas Gran Azul.', href: '#' },
        { title: 'Comprar para Cuba', description: 'Combos familiares, alimentos y electrodomésticos para tu familia.', href: '#' },
      ],
      banner: { title: 'Rastrea tu envío', description: 'Ingresa tu número de seguimiento y conoce el estado en tiempo real.', ctaLabel: 'Rastrear envío', href: '#' },
      links: LINKS,
      socials: SOCIALS,
    },
  },
  decorators: [Bar],
};

export const Enlaces = {
  args: {
    dropdown: {
      primaryLinks: [
        { label: 'Sobre nosotros', href: '#' },
        { label: 'Empleos', href: '#' },
        { label: 'Prensa', href: '#' },
        { label: 'Contacto', href: '#' },
      ],
      links: LINKS,
      socials: SOCIALS,
    },
  },
  decorators: [Bar],
};
