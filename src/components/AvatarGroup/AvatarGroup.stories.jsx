import { AvatarGroup } from './AvatarGroup.jsx';
import { Avatar } from '../Avatar/Avatar.jsx';

export default {
  title: 'Núcleo/AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    max: { control: 'number' },
  },
};

const EQUIPO = [
  { name: 'Camila Prieto' },
  { name: 'Jorge Pérez' },
  { name: 'Ana Díaz' },
  { name: 'Luis Mora' },
  { name: 'Marta Ruiz' },
  { name: 'Pedro Soto' },
];

export const PorDefecto = { args: { avatars: EQUIPO.slice(0, 3) } };
export const ConExceso = { args: { avatars: EQUIPO, max: 4 } };
export const Pequeno = { args: { avatars: EQUIPO.slice(0, 4), size: 'sm' } };

export const Tamanos = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <AvatarGroup avatars={EQUIPO.slice(0, 4)} size="sm" />
      <AvatarGroup avatars={EQUIPO.slice(0, 4)} size="md" />
    </div>
  ),
};

export const ConNodos = {
  render: () => (
    <AvatarGroup
      avatars={[<Avatar key="a" name="Camila Prieto" size={36} online />, <Avatar key="b" name="Jorge Pérez" size={36} />]}
      max={4}
    />
  ),
};
