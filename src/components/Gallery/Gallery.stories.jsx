import { Gallery } from './Gallery.jsx';

export default { title: 'Contenido/Gallery', component: Gallery };

function Img({ emoji, bg }) {
  return (
    <span
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '100%', height: '100%', background: bg, fontSize: 84,
      }}
      aria-hidden="true"
    >
      {emoji}
    </span>
  );
}

export const Producto = {
  args: {
    alt: 'Auriculares Bluetooth',
    images: [
      <Img emoji="🎧" bg="linear-gradient(135deg,#2b2b30,#17171a)" />,
      <Img emoji="🎧" bg="linear-gradient(135deg,#33254d,#17102a)" />,
      <Img emoji="🔌" bg="linear-gradient(135deg,#12332a,#0a1f19)" />,
      <Img emoji="📦" bg="linear-gradient(135deg,#3a3325,#211d12)" />,
    ],
  },
};
