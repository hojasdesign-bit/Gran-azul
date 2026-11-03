import React from 'react';
import {
  Airplane01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Building01Icon,
  Cancel01Icon,
  CargoShipIcon,
  ChevronDownIcon,
  Clock01Icon,
  ContainerTruck01Icon,
  DeliveryBox01Icon,
  FilterHorizontalIcon,
  Home01Icon,
  Location01Icon,
  Menu01Icon,
  MinusSignIcon,
  PackageIcon,
  PlusSignIcon,
  Search01Icon,
  Shield01Icon,
  StarIcon,
  Tick01Icon,
  UserIcon,
  Wallet01Icon,
} from '@hugeicons/core-free-icons';

const ICONS = {
  search: Search01Icon,
  package: PackageIcon,
  airplane: Airplane01Icon,
  ship: CargoShipIcon,
  truck: ContainerTruck01Icon,
  delivery: DeliveryBox01Icon,
  location: Location01Icon,
  building: Building01Icon,
  clock: Clock01Icon,
  shield: Shield01Icon,
  star: StarIcon,
  check: Tick01Icon,
  'arrow-right': ArrowRight01Icon,
  'arrow-left': ArrowLeft01Icon,
  'chevron-down': ChevronDownIcon,
  cancel: Cancel01Icon,
  plus: PlusSignIcon,
  minus: MinusSignIcon,
  home: Home01Icon,
  wallet: Wallet01Icon,
  user: UserIcon,
  menu: Menu01Icon,
  filter: FilterHorizontalIcon,
};

export const ICON_NAMES = Object.keys(ICONS);

/**
 * Icon — iconos HugeIcons, estilo Stroke Rounded, grosor 1.8 del DS.
 * Los datos vienen del paquete oficial gratuito (@hugeicons/core-free-icons,
 * rejilla 24×24, grosor por defecto 1.5) y aquí se normalizan a 1.8 con
 * stroke currentColor, para que el icono herede el color del texto.
 * Tamaños de uso: 16 (botones/texto), 20 (controles) y 24 (navegación).
 */
export function Icon({ name, size = 24, label, className = '', ...rest }) {
  const data = ICONS[name];
  if (!data) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
      className={className}
      style={{ flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' }}
      {...rest}
    >
      {data.map(([tag, props]) => {
        const { key, ...attrs } = props || {};
        const Tag = tag;
        return <Tag key={key} {...attrs} stroke="currentColor" strokeWidth={1.8} />;
      })}
    </svg>
  );
}
