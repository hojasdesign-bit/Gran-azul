import { ComparisonBar } from './ComparisonBar.jsx';

export default { title: 'Datos/ComparisonBar', component: ComparisonBar };

export const Completadas = {
  args: { label: 'Operaciones completadas', value: 100, benchmark: 73 },
};

export const Volumen = {
  args: { label: 'Volumen relativo', value: 62, benchmark: 45 },
};

export const HistorialDePerfil = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 26, width: 420 }}>
      <ComparisonBar label="Operaciones completadas" value={100} benchmark={73} />
      <ComparisonBar label="Tiempo de respuesta" value={88} benchmark={70} />
      <ComparisonBar label="Liberación a tiempo" value={95} benchmark={81} />
    </div>
  ),
};
