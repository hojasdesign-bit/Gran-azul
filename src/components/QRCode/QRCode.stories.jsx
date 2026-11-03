import { QRCode } from './QRCode.jsx';

export default { title: 'Comercio/QRCode', component: QRCode };

export const CuentaBase = {
  args: { value: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', label: 'USD · Red Base' },
};

export const AliasDePago = {
  args: { value: 'juan.granazul', label: 'Alias Envíos Pago', size: 168 },
};

export const SinMarco = {
  args: { value: 'UQDemoAddress0000', showValue: false, framed: false, size: 148 },
};
