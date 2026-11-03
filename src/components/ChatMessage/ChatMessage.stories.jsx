import { ChatMessage } from './ChatMessage.jsx';

export default {
  title: 'Comercio/ChatMessage',
  component: ChatMessage,
  argTypes: {
    variant: { control: 'select', options: ['incoming', 'outgoing', 'system'] },
    status: { control: 'select', options: ['sent', 'read'] },
  },
};

export const Entrante = {
  args: {
    author: 'Camila Prieto',
    time: '9:41',
    children: 'Hola, gracias por tu orden. ¿Desde qué banco pagas?',
  },
};

export const SalienteLeido = {
  args: {
    author: 'Tú',
    time: '9:43',
    variant: 'outgoing',
    status: 'read',
    children: 'Hola. Ya hice la transferencia, te adjunto el comprobante.',
  },
};

export const Sistema = {
  args: {
    variant: 'system',
    time: '9:40',
    children: 'La orden fue creada',
  },
};

export const Conversacion = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 420 }}>
      <ChatMessage variant="system" time="9:40">
        La orden fue creada
      </ChatMessage>
      <ChatMessage author="Camila Prieto" time="9:41">
        Hola, gracias por tu orden. ¿Desde qué banco pagas?
      </ChatMessage>
      <ChatMessage author="Tú" time="9:43" variant="outgoing" status="read">
        Hola. Ya hice la transferencia, te adjunto el comprobante.
      </ChatMessage>
      <ChatMessage author="Camila Prieto" time="9:44">
        Perfecto, lo reviso y libero los fondos ahora mismo.
      </ChatMessage>
      <ChatMessage author="Tú" time="9:44" variant="outgoing" status="sent">
        ¡Gracias!
      </ChatMessage>
    </div>
  ),
};
