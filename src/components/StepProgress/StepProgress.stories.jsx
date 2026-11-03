import { StepProgress } from './StepProgress.jsx';

export default {
  title: 'Datos/StepProgress',
  component: StepProgress,
  argTypes: {
    variant: { control: 'select', options: ['default', 'compact'] },
  },
};

const PASOS = ['Elige monto', 'Método de pago', 'Verificación', 'Confirmación'];

export const EnCurso = { args: { steps: PASOS, current: 1 } };
export const Inicio = { args: { steps: PASOS, current: 0 } };
export const CasiListo = { args: { steps: PASOS, current: 3 } };
export const Compacto = { args: { steps: PASOS, current: 2, variant: 'compact' } };

export const Comparar = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <StepProgress steps={PASOS} current={1} />
      <StepProgress steps={PASOS} current={2} variant="compact" />
    </div>
  ),
};
