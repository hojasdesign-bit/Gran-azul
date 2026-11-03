import { Toast } from './Toast.jsx';

export default { title: 'Datos/Toast', component: Toast };

export const Exito = {
  args: { variant: 'success', title: 'Pago marcado como enviado', message: 'El vendedor tiene 15 minutos para liberar los fondos.', onClose: () => {} },
};
export const ErrorRed = {
  args: { variant: 'error', title: 'No se pudo publicar la envío', message: 'Revisa tu conexión e inténtalo de nuevo.', onClose: () => {} },
};

export const Grupo = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Toast variant="success" title="Orden completada" message="Recibiste 250 USD en tu cuenta." onClose={() => {}} />
      <Toast variant="warning" title="La orden expira en 5 minutos" message="Si no pagas, se cancelará automáticamente." onClose={() => {}} />
      <Toast variant="info" title="Nuevo mensaje del vendedor" message="«Ya revisé el pago, libero ahora mismo.»" onClose={() => {}} />
    </div>
  ),
};
