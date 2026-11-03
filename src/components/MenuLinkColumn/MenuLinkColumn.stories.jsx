import { MenuLinkColumn } from './MenuLinkColumn.jsx';

export default { title: 'Superficies/MenuLinkColumn', component: MenuLinkColumn };

const SOCIALS = [
  { label: 'X', href: '#', icon: (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>) },
  { label: 'LinkedIn', href: '#', icon: (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><text x="12" y="17" textAnchor="middle" fontSize="11" fontWeight="800" fill="currentColor">in</text></svg>) },
  { label: 'Instagram', href: '#', icon: (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" /></svg>) },
];

export const ConRedes = {
  args: {
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Glosario', href: '#' },
      { label: 'Legal', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
    socials: SOCIALS,
  },
};
