import React from 'react';
import styles from './FeaturedDestinations.module.css';
import { cn } from '../../utils.js';
import { DestinationCard } from '../DestinationCard/DestinationCard.jsx';
import { Icon } from '../Icon/Icon.jsx';

/**
 * FeaturedDestinations — destinos destacados en tarjetas amplias y el
 * resto como lista de enlaces, adaptado del patrón de destinos de la
 * referencia. Prioriza lo más buscado sin esconder el resto, y usa
 * DestinationCard (degradado + inicial, sin fotos copiadas).
 */
export function FeaturedDestinations({
  featured = [],
  others = [],
  othersTitle = 'Otros destinos',
  onOtherClick,
  className = '',
  ...rest
}) {
  return (
    <div className={cn(styles.root, className)} {...rest}>
      {featured.length > 0 && (
        <div className={styles.grid}>
          {featured.map((dest) => (
            <DestinationCard key={dest.title} title={dest.title} description={dest.description} badge={dest.badge} />
          ))}
        </div>
      )}
      {others.length > 0 && (
        <div className={styles.others}>
          <p className={styles.othersTitle}>{othersTitle}</p>
          <ul className={styles.othersList}>
            {others.map((name) => (
              <li key={name}>
                <button type="button" className={styles.otherLink} onClick={() => onOtherClick && onOtherClick(name)}>{name} <Icon name="arrow-right" size={14} /></button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
