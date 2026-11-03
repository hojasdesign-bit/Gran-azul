import { ProgressBar } from './ProgressBar.jsx';

export default { title: 'Núcleo/ProgressBar', component: ProgressBar };

export const PorDefecto = { args: { value: 68, label: 'Verificación de identidad', showLabel: true } };
export const Completa = { args: { value: 100, variant: 'success', label: 'Fondos liberados', showLabel: true } };
export const CasiAgotado = { args: { value: 12, variant: 'danger', label: 'Disponible', showLabel: true } };

export const Grupo = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 320 }}>
      <ProgressBar value={80} label="Nivel 2 · KYC" showLabel />
      <ProgressBar value={45} variant="warning" label="Tiempo restante de la orden" showLabel />
      <ProgressBar value={100} variant="success" label="Pago confirmado" showLabel />
    </div>
  ),
};
