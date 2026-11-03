import { ProductCard } from './ProductCard.jsx';

export default { title: 'Comercio/ProductCard', component: ProductCard };

function Img({ emoji, bg }) {
  return (
    <span
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '100%', height: '100%', background: bg, fontSize: 64,
      }}
      aria-hidden="true"
    >
      {emoji}
    </span>
  );
}

export const PorDefecto = {
  args: {
    image: <Img emoji="🎧" bg="linear-gradient(135deg,#2b2b30,#17171a)" />,
    title: 'Auriculares Bluetooth con cancelación de ruido',
    price: '$45.00',
    oldPrice: '$60.00',
    rating: 4.5,
    ratingCount: 128,
    badge: '-25%',
    onAdd: () => {},
  },
};

export const Rejilla = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 760 }}>
      <ProductCard
        image={<Img emoji="📱" bg="linear-gradient(135deg,#233,#122)" />}
        title="Funda reforzada para iPhone 15"
        price="$12.50"
        rating={4.8}
        ratingCount={342}
        badge="Quedan 3"
        onAdd={() => {}}
      />
      <ProductCard
        image={<Img emoji="⌚" bg="linear-gradient(135deg,#33254d,#17102a)" />}
        title="Smartwatch deportivo GPS"
        price="$89.99"
        oldPrice="$120.00"
        rating={4.6}
        ratingCount={98}
        badge="-25%"
        onAdd={() => {}}
      />
      <ProductCard
        image={<Img emoji="🔋" bg="linear-gradient(135deg,#12332a,#0a1f19)" />}
        title="Power bank 20,000 mAh carga rápida"
        price="$28.00"
        rating={4.9}
        ratingCount={511}
        onAdd={() => {}}
      />
    </div>
  ),
};
