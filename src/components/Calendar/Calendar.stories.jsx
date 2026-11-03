import { useState } from 'react';
import { Calendar } from './Calendar.jsx';

// Hoy a medianoche, calculado al cargar el módulo (evita Date en render).
const HOY_MEDIANOCHE = (() => {
  const dia = new Date();
  dia.setHours(0, 0, 0, 0);
  return dia;
})();

export default {
  title: 'Formularios/Calendar',
  component: Calendar,
};

function Demo({ isDisabled }) {
  const [seleccionado, setSeleccionado] = useState(() => new Date());
  return (
    <div style={{ fontFamily: 'var(--ga-font-sans)', color: 'var(--ga-ink-2)' }}>
      <Calendar selected={seleccionado} onSelect={setSeleccionado} isDisabled={isDisabled} />
      <p style={{ marginTop: 12 }}>
        Seleccionado:{' '}
        {seleccionado
          ? seleccionado.toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' })
          : 'ninguno'}
      </p>
    </div>
  );
}

export const PorDefecto = {
  render: () => <Demo />,
};

function SinSeleccionDemo() {
  const [seleccionado, setSeleccionado] = useState(null);
  return (
    <div>
      <Calendar selected={seleccionado} onSelect={setSeleccionado} />
      <p style={{ marginTop: 12, fontFamily: 'var(--ga-font-sans)', color: 'var(--ga-ink-2)' }}>
        Seleccionado: {seleccionado ? seleccionado.toLocaleDateString('es') : 'ninguno'}
      </p>
    </div>
  );
}

export const SinSeleccion = {
  render: () => <SinSeleccionDemo />,
};

export const ConFinesDeSemanaDeshabilitados = {
  render: () => <Demo isDisabled={(fecha) => fecha.getDay() === 0 || fecha.getDay() === 6} />,
};

function PasadoDeshabilitadoDemo() {
  return <Demo isDisabled={(fecha) => fecha < HOY_MEDIANOCHE} />;
}

export const ConPasadoDeshabilitado = {
  render: () => <PasadoDeshabilitadoDemo />,
};
