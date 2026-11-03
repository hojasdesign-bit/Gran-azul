import { PageBackground } from './PageBackground.jsx';
import { Heading } from '../Heading/Heading.jsx';
import { Text } from '../Text/Text.jsx';

export default { title: 'Superficies/PageBackground', component: PageBackground };

const Demo = () => (
  <div style={{ position: 'relative', zIndex: 1, minHeight: 520, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, textAlign: 'center', padding: 24 }}>
    <Heading level="display">Envío a Cuba al instante</Heading>
    <Text tone="muted">El resplandor azul queda detrás del contenido, como en la página de referencia.</Text>
  </div>
);

export const ConResplandor = {
  args: {},
  render: () => (<><PageBackground /><Demo /></>),
};

export const Centrado = {
  args: { position: 'center' },
  render: (args) => (<><PageBackground {...args} /><Demo /></>),
};

export const SinResplandor = {
  args: { glow: false },
  render: (args) => (<><PageBackground {...args} /><Demo /></>),
};
