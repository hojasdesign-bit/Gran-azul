import { MenuCard } from './MenuCard.jsx';

export default { title: 'Superficies/MenuCard', component: MenuCard };

export const Tarjetas = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 720 }}>
      <MenuCard title="Rampa de compra" description="Deja que tus usuarios compren y vendan envío con métodos de pago locales." />
      <MenuCard title="Comprar para Cuba" description="Deja que tus usuarios depositen directo desde sus cuentas de cuenta y cuentas." />
    </div>
  ),
};
