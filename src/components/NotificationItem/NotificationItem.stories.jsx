import { NotificationItem } from './NotificationItem.jsx';
import { Avatar } from '../Avatar/Avatar.jsx';

export default { title: 'Datos/NotificationItem', component: NotificationItem };

const I = {
  check: (
    <svg width="18" height="18" viewBox="0 0 14 14" fill="none"><path d="M2.5 7.5l3 3 6-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  bell: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 16v-5.5a6 6 0 0 1 12 0V16l1.2 3H4.8L6 16Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M10 21a2.2 2.2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
  ),
};

export const Centro = {
  render: () => (
    <div style={{ width: 390, display: 'flex', flexDirection: 'column', gap: 4 }}>
      <NotificationItem
        icon={I.check}
        title="Fondos liberados"
        text="Camila P. liberó 250 USD de la orden ENV-048213."
        time="ahora"
        unread
        onClick={() => {}}
      />
      <NotificationItem
        icon={<Avatar name="Jorge Pérez" size={40} />}
        title="Nueva valoración"
        text="Jorge P. te dejó 5 estrellas: «Rápido y confiable.»"
        time="hace 2 h"
        unread
        onClick={() => {}}
      />
      <NotificationItem
        icon={I.bell}
        title="Bajada de precio"
        text="Una envío que sigues bajó a 1.02 USD por USD."
        time="ayer"
        onClick={() => {}}
      />
    </div>
  ),
};
