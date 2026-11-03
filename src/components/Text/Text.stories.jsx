import { Text } from './Text.jsx';

export default { title: 'Texto/Text', component: Text };

export const Tamanos = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Text size="body-lg">Texto grande (18px): compra envío al instante con tu método favorito.</Text>
      <Text>Texto base (16px): compra envío al instante con tu método favorito.</Text>
      <Text size="body-sm">Texto pequeño (14px): compra envío al instante con tu método favorito.</Text>
      <Text size="caption">Leyenda (12px): compra envío al instante con tu método favorito.</Text>
      <Text size="micro">Micro (11px): compra envío al instante con tu método favorito.</Text>
    </div>
  ),
};

export const Tonos = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Text>Tono tinta</Text>
      <Text tone="ink-2">Tono tinta secundaria</Text>
      <Text tone="muted">Tono atenuado</Text>
      <Text tone="label">Tono etiqueta</Text>
      <Text tone="accent">Tono acento</Text>
    </div>
  ),
};
