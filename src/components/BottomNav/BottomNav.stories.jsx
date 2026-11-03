import { useState } from 'react';
import { BottomNav } from './BottomNav.jsx';

export default { title: 'Superficies/BottomNav', component: BottomNav };

const I = {
  home: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 11.2 12 4l8 7.2V19a1.5 1.5 0 0 1-1.5 1.5h-4v-6h-5v6h-4A1.5 1.5 0 0 1 4 19v-7.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
  ),
  market: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 7.5h16M4 7.5l1.4-4h13.2l1.4 4M4 7.5v11A1.5 1.5 0 0 0 5.5 20h13A1.5 1.5 0 0 0 20 18.5v-11M9.5 20v-5.5h5V20" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
  ),
  orders: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 3.5h11A1.5 1.5 0 0 1 19.5 5v14A1.5 1.5 0 0 1 18 20.5H7A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5Z" stroke="currentColor" strokeWidth="1.8" /><path d="M9.5 8.5h6M9.5 12.5h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
  ),
  bell: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 16v-5.5a6 6 0 0 1 12 0V16l1.2 3H4.8L6 16Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M10 21a2.2 2.2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
  ),
  user: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.6" stroke="currentColor" strokeWidth="1.8" /><path d="M5 20c.8-3.2 3.6-5 7-5s6.2 1.8 7 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
  ),
};

const ITEMS = [
  { value: 'home', label: 'Inicio', icon: I.home },
  { value: 'market', label: 'Envíos', icon: I.market },
  { value: 'orders', label: 'Órdenes', icon: I.orders, badge: 2 },
  { value: 'alerts', label: 'Alertas', icon: I.bell, badge: 5 },
  { value: 'profile', label: 'Perfil', icon: I.user },
];

export const Envios = {
  render: () => {
    const [v, setV] = useState('market');
    return <BottomNav items={ITEMS} value={v} onNavigate={setV} />;
  },
};
