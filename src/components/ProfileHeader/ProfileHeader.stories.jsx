import { ProfileHeader } from './ProfileHeader.jsx';
import { Button } from '../Button/Button.jsx';

export default { title: 'Datos/ProfileHeader', component: ProfileHeader };

export const Cliente = {
  args: {
    name: 'Camila Prieto',
    username: '@camila_p',
    ringScore: 84,
    verified: true,
    meta: 'La Habana · Se unió en 2024 · Responde en ~5 min',
    stats: [
      { value: '233', label: 'Operaciones' },
      { value: '99%', label: 'Completadas' },
      { value: '4.9', label: 'Valoración' },
    ],
    action: <Button size="sm">Seguir</Button>,
  },
};

export const TiendaVendedor = {
  args: {
    name: 'TechHabana',
    username: '@techhabana',
    ringScore: 97,
    verified: true,
    meta: 'Electrónica y accesorios · Plaza, La Habana',
    stats: [
      { value: '1.2k', label: 'Ventas' },
      { value: '86', label: 'Productos' },
      { value: '4.8', label: 'Valoración' },
    ],
    action: (
      <Button size="sm" variant="secondary">
        Editar perfil
      </Button>
    ),
  },
};
