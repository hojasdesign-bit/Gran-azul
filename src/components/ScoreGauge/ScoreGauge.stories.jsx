import { ScoreGauge } from './ScoreGauge.jsx';

export default { title: 'Datos/ScoreGauge', component: ScoreGauge };

export const AltoPotencial = { args: { score: 86, label: 'Alto potencial', caption: 'Score general' } };
export const Medio = { args: { score: 64, label: 'En crecimiento', caption: 'Score general' } };
export const Bajo = { args: { score: 38, label: 'Necesita mejorar', caption: 'Score general' } };

export const Niveles = {
  render: () => (
    <div style={{ display: 'flex', gap: 36, alignItems: 'flex-start' }}>
      <ScoreGauge score={97} size={110} label="Clase Top" />
      <ScoreGauge score={86} size={110} label="Alto potencial" />
      <ScoreGauge score={64} size={110} label="En crecimiento" />
    </div>
  ),
};
