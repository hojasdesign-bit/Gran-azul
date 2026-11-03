import { ChatBubble } from './ChatBubble.jsx';

export default { title: 'Comercio/ChatBubble', component: ChatBubble };

export const Conversacion = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 380 }}>
      <ChatBubble from="them" text="Hola, gracias por tu orden. ¿Desde qué banco pagas?" time="9:41" />
      <ChatBubble from="me" text="Hola. Ya hice la transferencia, te adjunto el comprobante." time="9:43" read />
      <ChatBubble from="them" text="Perfecto, lo reviso y libero los fondos ahora mismo." time="9:44" />
      <ChatBubble from="me" text="¡Gracias!" time="9:44" read />
    </div>
  ),
};

export const Propia = { args: { from: 'me', text: 'Pago enviado, quedó al pendiente.', time: '10:02', read: true } };
export const Ajena = { args: { from: 'them', text: 'Recibido, reviso en un momento.', time: '10:03' } };
