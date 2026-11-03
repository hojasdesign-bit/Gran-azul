import { Heading } from './Heading.jsx';

export default { title: 'Texto/Heading', component: Heading };

export const Niveles = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Heading level="display-xl">Titular display XL</Heading>
      <Heading level="display">Titular display</Heading>
      <Heading level="h1">Titular H1</Heading>
      <Heading level="h2">Titular H2</Heading>
      <Heading level="h3">Titular H3</Heading>
      <Heading level="h4">Titular H4</Heading>
    </div>
  ),
};

export const Tonos = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Heading level="h2">Tono tinta</Heading>
      <Heading level="h2" tone="muted">Tono atenuado</Heading>
      <Heading level="h2" tone="accent">Tono acento</Heading>
    </div>
  ),
};
