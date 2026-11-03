import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './tokens.css';
import './base.css';
import './site.css';
import { Accordion } from './components/Accordion/Accordion.jsx';
import { Button } from './components/Button/Button.jsx';
import { CTABanner } from './components/CTABanner/CTABanner.jsx';
import { FeaturedDestinations } from './components/FeaturedDestinations/FeaturedDestinations.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { HeroPanel } from './components/HeroPanel/HeroPanel.jsx';
import { OfficeCard } from './components/OfficeCard/OfficeCard.jsx';
import { QuoteOptions } from './components/QuoteOptions/QuoteOptions.jsx';
import { SectionHeading } from './components/SectionHeading/SectionHeading.jsx';
import { ServiceCard } from './components/ServiceCard/ServiceCard.jsx';
import { ServiceStatusList } from './components/ServiceStatusList/ServiceStatusList.jsx';
import { ShipmentCard } from './components/ShipmentCard/ShipmentCard.jsx';
import { ShippingCalculator } from './components/ShippingCalculator/ShippingCalculator.jsx';
import { TrackingSearch } from './components/TrackingSearch/TrackingSearch.jsx';
import { TrackingTimeline } from './components/TrackingTimeline/TrackingTimeline.jsx';

/**
 * Gran Azul — sitio de muestra con el sistema de diseño Gran Azul.
 * Solo para ver: la estructura sigue los patrones habituales de un sitio
 * de envíos (héroe con rastreo, opciones comparables, pasos, destinos,
 * calculadora, oficinas, estado y preguntas), con contenido propio de
 * Gran Azul. No es el sitio comercial final.
 */

const SERVICES = [
  { number: '01', title: 'Enviar a Cuba', description: 'Haz llegar lo que más importa de la forma más fácil y segura.', items: ['Casillero virtual', 'Puerta a puerta', 'Oficinas Gran Azul', 'Carga comercial'], ctaLabel: 'Ver opciones', featured: true },
  { number: '02', title: 'Comprar para Cuba', description: 'Productos y soluciones para tu familia.', items: ['Combos familiares', 'Alimentos y bebidas', 'Electrodomésticos', 'Motos y vehículos', 'Ofertas especiales'], ctaLabel: 'Ver productos' },
  { number: '03', title: 'Trámites legales', description: 'Gestiona tus documentos desde cualquier lugar.', items: ['Documentos', 'Legalizaciones', 'Poderes y autorizaciones', 'Gestiones internacionales'], ctaLabel: 'Conocer trámites' },
  { number: '04', title: 'Viajar a Cuba', description: 'Vuelos, hoteles y experiencias para volver a lo que importa.', items: ['Vuelos', 'Hoteles', 'Traslados', 'Experiencias'], ctaLabel: 'Ver viajes' },
];

const QUOTE_OPTIONS = [
  { id: 'aereo-expres', method: 'Aéreo exprés', delivery: '3-5 días', tracking: 'Excelente', rating: 4.9, deliveryType: 'Puerta a puerta', taxes: null, price: 42, oldPrice: 50, badge: 'fastest' },
  { id: 'aereo', method: 'Aéreo', delivery: '7-10 días', tracking: 'Bueno', rating: 4.7, deliveryType: 'Puerta a puerta', taxes: null, price: 30, badge: 'best' },
  { id: 'maritimo', method: 'Marítimo', delivery: '20-30 días', tracking: 'Básico', rating: 4.5, deliveryType: 'Recogida en oficina', taxes: 4, price: 20, badge: 'cheapest' },
];

const OFFICES = [
  ['Miami', 'FL'], ['Orlando', 'FL'], ['Tampa', 'FL'], ['Houston', 'TX'],
  ['Dallas', 'TX'], ['Charlotte', 'NC'], ['Las Vegas', 'NV'], ['Chicago', 'IL'],
];

const STATUS_ITEMS = [
  { name: 'Envíos aéreos', description: 'Miami, Orlando y Tampa', status: 'available' },
  { name: 'Envíos marítimos', description: 'Carga comercial y personal', status: 'available' },
  { name: 'Compra para Cuba', description: 'Tiendas verificadas', status: 'review' },
  { name: 'Trámites legales', description: 'Documentación y poderes', status: 'soon' },
];

const FAQ_ITEMS = [
  { title: '¿Cómo rastreo mi envío?', content: 'Escribe tu número de seguimiento en el buscador del inicio y verás el estado de tu envío. Esta página es una muestra: cualquier código muestra un envío de ejemplo.' },
  { title: '¿Cuánto tarda un envío a Cuba?', content: 'Depende del método: el aéreo exprés es el más rápido, el aéreo estándar es el equilibrio entre tiempo y precio, y el marítimo es el más económico. La tabla de opciones compara los tres.' },
  { title: '¿Puedo enviar desde cualquier ciudad de EE. UU.?', content: 'Gran Azul atiende en más de 15 oficinas en EE. UU., con recogida en oficina y entrega puerta a puerta según el método que elijas.' },
  { title: '¿Las tarifas de la calculadora son reales?', content: 'No. La calculadora muestra un ejemplo demo (10 lb = 30 USD en aéreo) para ver el componente. Las tarifas reales se confirman al cotizar tu envío.' },
];

function Site() {
  const [theme, setTheme] = useState('claro');
  const [tracked, setTracked] = useState(null);
  const [selectedId, setSelectedId] = useState('aereo');

  return (
    <div data-theme={theme} className="ga-site">
      <header className="ga-site-header">
        <a className="ga-site-brand" href="#">
          <img src="/logo/gran-azul-completo.svg" alt="Gran Azul" width="120" height="37" />
          <span>Gran Azul</span>
        </a>
        <nav className="ga-site-nav" aria-label="Principal">
          <a href="#servicios">Enviar a Cuba</a>
          <a href="#opciones">Opciones</a>
          <a href="#destinos">Destinos</a>
          <a href="#calculadora">Calculadora</a>
          <a href="#oficinas">Oficinas</a>
          <a href="#preguntas">Preguntas</a>
        </nav>
        <div className="ga-site-header-actions">
          <Button variant="secondary" onClick={() => setTheme(theme === 'claro' ? 'oscuro' : 'claro')}>
            {theme === 'claro' ? 'Modo oscuro' : 'Modo claro'}
          </Button>
          <Button>Enviar a Cuba</Button>
        </div>
      </header>

      <main>
        <HeroPanel>
          <p className="ga-site-eyebrow">Familias sin fronteras</p>
          <h1>Más cerca de Cuba, estés donde estés</h1>
          <p className="ga-site-hero-text">
            Envíos, compras, viajes y trámites legales, con la confianza de un equipo que te acompaña.
          </p>
          <TrackingSearch onSearch={(code) => setTracked(code)} />
          <p className="ga-site-trust">Seguro y confiable · Miles de familias ya confían en nosotros · Más de 15 oficinas en EE. UU.</p>
        </HeroPanel>

        {tracked && (
          <section className="ga-site-section" aria-label="Resultado del rastreo">
            <div className="ga-site-track-result">
              <ShipmentCard code={tracked} status="En tránsito" date="Ejemplo demo" />
              <TrackingTimeline current={1} />
            </div>
          </section>
        )}

        <section className="ga-site-section" id="servicios">
          <SectionHeading
            eyebrow="Nuestras soluciones"
            title="Todo lo que puedes hacer con Gran Azul"
            text="Cuatro formas de estar más cerca de los tuyos."
          />
          <div className="ga-site-grid">
            {SERVICES.map((s) => <ServiceCard key={s.number} {...s} />)}
          </div>
        </section>

        <section className="ga-site-section" id="opciones">
          <SectionHeading
            eyebrow="Cotiza tu envío"
            title="Compara tus opciones de envío"
            text="Elige por precio o por tiempo de entrega. Precios de ejemplo para la muestra, no tarifas reales."
          />
          <QuoteOptions options={QUOTE_OPTIONS} selectedId={selectedId} onSelect={(opt) => setSelectedId(opt.id)} />
        </section>

        <section className="ga-site-section" id="pasos">
          <SectionHeading
            eyebrow="Tu envío, paso a paso"
            title="Un proceso simple, seguro y transparente"
          />
          <TrackingTimeline
            steps={['Compras', 'Lo recibimos', 'Procesamos', 'Enviamos', 'Tu familia recibe']}
            current={2}
          />
        </section>

        <section className="ga-site-section" id="destinos">
          <SectionHeading
            eyebrow="Destinos"
            title="Destinos destacados en Cuba"
            text="Los destinos más buscados y el resto de la lista."
          />
          <FeaturedDestinations
            featured={[
              { title: 'La Habana', description: 'La capital, primer destino de la mayoría de envíos.', badge: 'Más buscado' },
              { title: 'Santiago de Cuba', description: 'Oriente, con recogida en oficina.', badge: null },
              { title: 'Varadero', description: 'Destino de descanso y visitas.', badge: null },
            ]}
            others={['Camagüey', 'Holguín', 'Santa Clara', 'Cienfuegos', 'Matanzas']}
          />
        </section>

        <section className="ga-site-section ga-site-two-col" id="calculadora">
          <div>
            <SectionHeading align="left" level="h1" eyebrow="Calculadora" title="Calcula tu envío" text="Peso y método, con el resultado marcado como ejemplo demo." />
            <ShippingCalculator />
          </div>
          <div id="oficinas">
            <SectionHeading align="left" level="h1" eyebrow="Siempre cerca de ti" title="Nuestras oficinas en Estados Unidos" text="Más de 15 oficinas en las principales ciudades para ofrecerte un mejor servicio." />
            <div className="ga-site-offices">
              {OFFICES.map(([city, state]) => <OfficeCard key={city} city={city} state={state} />)}
            </div>
          </div>
        </section>

        <section className="ga-site-section" id="estado">
          <SectionHeading
            eyebrow="Estado de los servicios"
            title="Qué está disponible hoy"
          />
          <ServiceStatusList items={STATUS_ITEMS} />
        </section>

        <section className="ga-site-section" id="preguntas">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Dudas habituales antes de enviar"
          />
          <Accordion items={FAQ_ITEMS} defaultOpen={[0]} />
        </section>

        <section className="ga-site-section">
          <CTABanner title="¿Listo para enviar a Cuba?" text="Empieza por rastrear un envío o calcular el tuyo: esta es una muestra con el sistema de diseño Gran Azul.">
            <Button>Enviar a Cuba</Button>
          </CTABanner>
        </section>
      </main>

      <Footer
        links={[
          { label: 'Enviar a Cuba', href: '#servicios' },
          { label: 'Opciones', href: '#opciones' },
          { label: 'Destinos', href: '#destinos' },
          { label: 'Calculadora', href: '#calculadora' },
          { label: 'Oficinas', href: '#oficinas' },
          { label: 'Preguntas', href: '#preguntas' },
        ]}
        copyright="© 2026 Gran Azul · Sitio de muestra con el sistema de diseño, no un sitio comercial real."
      />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<Site />);
