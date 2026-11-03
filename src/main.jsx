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
import { SectionHeading } from './components/SectionHeading/SectionHeading.jsx';
import { ServiceStatusList } from './components/ServiceStatusList/ServiceStatusList.jsx';
import { ShipmentCard } from './components/ShipmentCard/ShipmentCard.jsx';
import { ShippingCalculator } from './components/ShippingCalculator/ShippingCalculator.jsx';
import { TrackingSearch } from './components/TrackingSearch/TrackingSearch.jsx';
import { TrackingTimeline } from './components/TrackingTimeline/TrackingTimeline.jsx';

/**
 * Gran Azul — copia de estructura del sitio de referencia, con el sistema
 * de diseño Gran Azul y contenido propio. Solo para ver: no se copian
 * textos, marca, fotos ni código del sitio de referencia, y este paso
 * puede cambiar en el futuro. Los precios y tiendas son de ejemplo.
 */

const STORES = [
  { name: 'Tienda familiar', desc: 'Combos y productos para el hogar.', city: 'Miami, FL' },
  { name: 'Alimentos y bebidas', desc: 'Productos básicos y combos de comida.', city: 'Orlando, FL' },
  { name: 'Electrodomésticos', desc: 'Equipos para la casa, verificados.', city: 'Tampa, FL' },
  { name: 'Motos y vehículos', desc: 'Motos y repuestos con envío marítimo.', city: 'Houston, TX' },
];

const PRODUCTS = [
  { name: 'Combo familiar', old: 120, price: 99, save: 'Ahorra 21 USD', stock: 'En stock' },
  { name: 'Combo de alimentos', old: 85, price: 69, save: 'Ahorra 16 USD', stock: 'En stock' },
  { name: 'Electrodoméstico', old: 240, price: 199, save: 'Ahorra 41 USD', stock: 'En stock' },
  { name: 'Moto', old: 1450, price: 1299, save: 'Ahorra 151 USD', stock: 'Pocas unidades' },
];

const STEPS = [
  { number: '01', title: 'Crea tu envío', text: 'Elige qué quieres enviar y cómo quieres que llegue.' },
  { number: '02', title: 'Lo recibimos', text: 'Déjalo en una oficina o usa tu casillero virtual.' },
  { number: '03', title: 'Lo preparamos', text: 'Empacamos y documentamos tu envío con seguimiento.' },
  { number: '04', title: 'Tu familia recibe', text: 'Entrega puerta a puerta o recogida en oficina.' },
];

const ADVANTAGES = [
  { title: 'Seguimiento en tiempo real', text: 'Rastrea tu envío desde que sale hasta que llega.' },
  { title: 'Preparación el mismo día', text: 'Procesamos tu envío con rapidez en nuestras oficinas.' },
  { title: 'Comparación de tarifas', text: 'Aéreo exprés, aéreo y marítimo, lado a lado.' },
  { title: 'Oficinas en EE. UU.', text: 'Más de 15 oficinas para atenderte en persona.' },
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

function Site() {
  const [theme, setTheme] = useState('claro');
  const [tracked, setTracked] = useState(null);

  return (
    <div data-theme={theme} className="ga-site">
      <header className="ga-site-header">
        <a className="ga-site-brand" href="#">
          <img src="/logo/gran-azul-completo.svg" alt="Gran Azul" width="120" height="37" />
          <span>Gran Azul</span>
        </a>
        <nav className="ga-site-nav" aria-label="Principal">
          <a href="#tiendas">Tiendas</a>
          <a href="#productos">Productos</a>
          <a href="#pasos">Cómo funciona</a>
          <a href="#destinos">Destinos</a>
          <a href="#precios">Precios</a>
          <a href="#oficinas">Oficinas</a>
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

        <section className="ga-site-section" id="tiendas">
          <SectionHeading
            eyebrow="Tiendas verificadas"
            title="Compra en tiendas verificadas para Cuba"
            text="Tiendas de ejemplo para la muestra, con su ubicación y distintivo de verificación."
          />
          <div className="ga-site-grid">
            {STORES.map((s) => (
              <article key={s.name} className="ga-site-card">
                <div className="ga-site-card-cover" aria-hidden="true">{s.name.slice(0, 1)}</div>
                <span className="ga-site-badge">Verificada</span>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <p className="ga-site-card-meta">{s.city}</p>
              </article>
            ))}
          </div>
          <p className="ga-site-more"><a href="#productos">Ver todas las tiendas</a></p>
        </section>

        <section className="ga-site-section" id="productos">
          <SectionHeading
            eyebrow="Productos destacados"
            title="Lo más buscado para enviar a Cuba"
            text="Precios de ejemplo para la muestra, no precios reales."
          />
          <div className="ga-site-grid">
            {PRODUCTS.map((p) => (
              <article key={p.name} className="ga-site-card">
                <span className="ga-site-badge">Oferta</span>
                <h3>{p.name}</h3>
                <p className="ga-site-card-meta">{p.stock}</p>
                <p><s>{p.old} USD</s> <strong>{p.price} USD</strong></p>
                <p className="ga-site-card-meta">{p.save} · Envío incluido en la muestra</p>
                <Button>Añadir</Button>
              </article>
            ))}
          </div>
          <p className="ga-site-more"><a href="#precios">Ver más productos</a></p>
        </section>

        <section className="ga-site-section">
          <SectionHeading
            eyebrow="Enviar, comprar y gestionar en un solo lugar"
            title="Todo lo que necesitas para estar más cerca de Cuba"
            text="Envíos, compras, trámites legales y viajes, con seguimiento en cada paso."
          />
          <div className="ga-site-value-actions">
            <Button>Enviar a Cuba</Button>
            <Button variant="secondary">Comprar para Cuba</Button>
          </div>
          <ul className="ga-site-points">
            <li>Puerta a puerta y recogida en oficina</li>
            <li>Rastreo en tiempo real</li>
            <li>Más de 15 oficinas en EE. UU.</li>
          </ul>
          <p className="ga-site-more"><a href="#precios">Ver precios</a></p>
        </section>

        <section className="ga-site-section" id="pasos">
          <SectionHeading
            eyebrow="Cómo funciona"
            title="Enviar es así de simple"
          />
          <div className="ga-site-grid">
            {STEPS.map((s) => (
              <article key={s.number} className="ga-site-card">
                <span className="ga-site-step-number">{s.number}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
          <p className="ga-site-more"><a href="#precios">Conocer más el servicio</a></p>
        </section>

        <section className="ga-site-section" id="integraciones">
          <SectionHeading
            eyebrow="Servicios e integraciones"
            title="Qué está disponible hoy"
          />
          <ServiceStatusList items={STATUS_ITEMS} />
          <p className="ga-site-more"><a href="#destinos">Ver todos los servicios</a></p>
        </section>

        <section className="ga-site-section ga-site-two-col">
          <div>
            <SectionHeading align="left" level="h1" eyebrow="Para vendedores" title="Abre tu tienda con Gran Azul" text="Vende para Cuba con seguimiento, oficinas y entregas gestionadas." />
            <ul className="ga-site-checklist">
              <li>Publica tus productos para envíos a Cuba</li>
              <li>Seguimiento y entregas gestionadas</li>
              <li>Atención en más de 15 oficinas</li>
            </ul>
            <Button>Abrir una tienda</Button>
          </div>
          <div className="ga-site-card">
            <h3>Vender con Gran Azul</h3>
            <ul className="ga-site-checklist">
              <li>Alcance a familias en EE. UU. y Cuba</li>
              <li>Logística de envío incluida</li>
              <li>Soporte en cada entrega</li>
            </ul>
          </div>
        </section>

        <section className="ga-site-section">
          <SectionHeading
            eyebrow="Funcionalidades"
            title="Todo lo que hace la plataforma"
          />
          <Accordion
            defaultOpen={[0]}
            items={[
              { title: 'Envíos a Cuba', content: 'Aéreo exprés, aéreo y marítimo, con puerta a puerta o recogida en oficina y rastreo en tiempo real.' },
              { title: 'Comprar para Cuba', content: 'Tiendas verificadas y productos destacados para enviar a tu familia.' },
              { title: 'Trámites legales', content: 'Documentos, legalizaciones, poderes y autorizaciones gestionados desde cualquier lugar.' },
              { title: 'Viajar a Cuba', content: 'Vuelos, hoteles, traslados y experiencias para volver a lo que importa.' },
            ]}
          />
        </section>

        <section className="ga-site-section">
          <SectionHeading
            eyebrow="Ventajas"
            title="Por qué enviar con Gran Azul"
          />
          <div className="ga-site-grid">
            {ADVANTAGES.map((a) => (
              <article key={a.title} className="ga-site-card">
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </article>
            ))}
          </div>
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
          <p className="ga-site-more"><a href="#precios">Iniciar un envío</a></p>
        </section>

        <section className="ga-site-section">
          <SectionHeading
            eyebrow="Casillero"
            title="Tu casillero para enviar a Cuba"
            text="Recibe tus compras en tu casillero y envíalas cuando quieras."
          />
          <Accordion
            items={[
              { title: 'Casillero virtual', content: 'Usa tu dirección de casillero para recibir compras en EE. UU. y enviarlas a Cuba.' },
              { title: 'Puerta a puerta', content: 'Recogemos y entregamos tu envío, con rastreo en cada paso.' },
            ]}
          />
          <div className="ga-site-stats">
            <div><strong>15+</strong><span>Oficinas en EE. UU.</span></div>
            <div><strong>3</strong><span>Métodos de envío</span></div>
            <div><strong>4</strong><span>Soluciones</span></div>
            <div><strong>5</strong><span>Pasos de seguimiento</span></div>
          </div>
        </section>

        <section className="ga-site-section ga-site-two-col" id="precios">
          <div>
            <SectionHeading align="left" level="h1" eyebrow="Precios" title="Calcula tu envío" text="Peso y método, con el resultado marcado como ejemplo demo." />
            <ShippingCalculator />
          </div>
          <div id="oficinas">
            <SectionHeading align="left" level="h1" eyebrow="Siempre cerca de ti" title="Nuestras oficinas en Estados Unidos" text="Más de 15 oficinas en las principales ciudades para ofrecerte un mejor servicio." />
            <div className="ga-site-offices">
              {OFFICES.map(([city, state]) => <OfficeCard key={city} city={city} state={state} />)}
            </div>
          </div>
        </section>

        <section className="ga-site-section">
          <CTABanner title="¿Listo para enviar a Cuba?" text="Empieza por rastrear un envío o calcular el tuyo: esta es una muestra con el sistema de diseño Gran Azul.">
            <Button>Enviar a Cuba</Button>
          </CTABanner>
        </section>

        <section className="ga-site-section">
          <form className="ga-site-newsletter" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="ga-newsletter">Recibe novedades de Gran Azul</label>
            <div>
              <input id="ga-newsletter" type="email" placeholder="tu@correo.com" />
              <Button type="submit">Suscribirme</Button>
            </div>
            <p className="ga-site-card-meta">Muestra sin envío real: el formulario no guarda ningún correo.</p>
          </form>
        </section>
      </main>

      <Footer
        links={[
          { label: 'Tiendas', href: '#tiendas' },
          { label: 'Productos', href: '#productos' },
          { label: 'Destinos', href: '#destinos' },
          { label: 'Precios', href: '#precios' },
          { label: 'Oficinas', href: '#oficinas' },
        ]}
        copyright="© 2026 Gran Azul · Sitio de muestra con el sistema de diseño, no un sitio comercial real."
      />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<Site />);
