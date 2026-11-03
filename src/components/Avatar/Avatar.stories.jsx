import { Avatar } from './Avatar.jsx';

export default { title: 'Núcleo/Avatar', component: Avatar };

export const Iniciales = { args: { name: 'Adrián Hojas', size: 48 } };
export const EnLinea = { args: { name: 'Camila Prieto', size: 48, online: true } };
export const ConAnilloDeScore = { args: { name: 'Jorge Pérez', size: 56, ringScore: 84, online: true } };

export const Tamanos = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar name="Ana Díaz" size={32} />
      <Avatar name="Ana Díaz" size={40} />
      <Avatar name="Ana Díaz" size={56} ringScore={62} />
      <Avatar name="Ana Díaz" size={72} ringScore={97} online />
    </div>
  ),
};

const Uso = ({ label, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
    {children}
    <span style={{ fontSize: 12, color: 'var(--ga-label)' }}>{label}</span>
  </div>
);

export const Formas = () => (
  <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>
    <Uso label="Persona · envío">
      <Avatar name="Camila Prieto" size={56} ringScore={84} online />
    </Uso>
    <Uso label="Tienda">
      <Avatar name="TecnoShop" size={56} shape="rounded" />
    </Uso>
    <Uso label="Tienda con foto">
      <Avatar name="La Esquina" size={56} shape="rounded" ringScore={92}
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=112&q=60" />
    </Uso>
    <Uso label="App / marca">
      <Avatar name="Voltaje" size={56} shape="rounded" />
    </Uso>
    <Uso label="Persona pequeña">
      <Avatar name="Ana Díaz" size={40} />
    </Uso>
    <Uso label="Tienda pequeña">
      <Avatar name="TecnoShop" size={40} shape="rounded" />
    </Uso>
  </div>
);
