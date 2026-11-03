import { Textarea } from './Textarea.jsx';

export default { title: 'Formularios/Textarea', component: Textarea };

export const PorDefecto = {
  args: { label: 'Descripción del producto', placeholder: 'Cuenta qué vendes, su estado y la entrega…', rows: 4 },
};
export const ConAyuda = {
  args: { label: 'Nota para el comprador', hint: 'La verá solo quien abra una orden contigo.', placeholder: 'Ej.: pago solo desde cuenta propia…' },
};
export const ConError = {
  args: { label: 'Motivo de la disputa', error: 'Describe el problema con al menos 20 caracteres.', defaultValue: 'No llegó' },
};
