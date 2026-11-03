import { MetadataList } from './MetadataList.jsx';
import { Badge } from '../Badge/Badge.jsx';

export default {
  title: 'Datos/MetadataList',
  component: MetadataList,
  argTypes: {
    mono: { control: 'boolean' },
  },
};

const ORDEN = [
  { label: 'Precio', value: '1,01 CUP por USD' },
  { label: 'Cantidad', value: '500 USD' },
  { label: 'Red', value: 'Base' },
  { label: 'Método', value: 'Efectivo' },
  { label: 'Comisión', value: '0 USD' },
];

export const DetalleDeOrden = {
  render: () => (
    <div style={{ width: 380 }}>
      <MetadataList items={ORDEN} />
    </div>
  ),
};

export const Mono = {
  render: () => (
    <div style={{ width: 380 }}>
      <MetadataList
        mono
        items={[
          { label: 'Remitente', value: '0x7a3f…9f21' },
          { label: 'Hash', value: '0x9c12…44ab' },
          { label: 'Bloque', value: '24.813.502' },
        ]}
      />
    </div>
  ),
};

export const ConNodo = {
  render: () => (
    <div style={{ width: 380 }}>
      <MetadataList
        items={[
          { label: 'Estado', value: <Badge variant="success">Completada</Badge> },
          { label: 'Precio', value: '1,01 CUP por USD' },
          { label: 'Método', value: 'Efectivo' },
        ]}
      />
    </div>
  ),
};
