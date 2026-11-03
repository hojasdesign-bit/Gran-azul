import { Link } from './Link.jsx';

export default {
  title: 'Núcleo/Link',
  component: Link,
  argTypes: {
    variant: { control: 'select', options: ['accent', 'muted', 'inherit'] },
    underline: { control: 'select', options: ['hover', 'always', 'none'] },
    external: { control: 'boolean' },
  },
};

export const Acento = {
  args: { href: '#', children: 'Ver todas las envíos' },
};

export const Variantes = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
      <Link href="#">Enlace de marca</Link>
      <Link href="#" variant="muted">
        Enlace secundario
      </Link>
      <Link href="#" variant="inherit">
        Enlace heredado
      </Link>
      <Link href="#" underline="always">
        Siempre subrayado
      </Link>
      <Link href="#" underline="none">
        Nunca subrayado
      </Link>
    </div>
  ),
};

export const Externo = {
  render: () => (
    <Link href="https://example.com" external>
      Documentación de la red
    </Link>
  ),
};

export const EnParrafo = {
  render: () => (
    <p style={{ color: 'var(--ga-ink-2)', lineHeight: 1.6 }}>
      Para vender necesitas verificar tu identidad. Consulta los{' '}
      <Link href="#">términos del envíos</Link> y la{' '}
      <Link href="#" variant="muted">
        política de disputas
      </Link>{' '}
      antes de publicar tu primera envío.
    </p>
  ),
};
