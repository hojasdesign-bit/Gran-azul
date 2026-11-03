import React, { useMemo, useState } from 'react';
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
import { ServiceStatusList } from './components/ServiceStatusList/ServiceStatusList.jsx';
import { ShipmentCard } from './components/ShipmentCard/ShipmentCard.jsx';
import { ShippingCalculator } from './components/ShippingCalculator/ShippingCalculator.jsx';
import { TrackingSearch } from './components/TrackingSearch/TrackingSearch.jsx';
import { TrackingTimeline } from './components/TrackingTimeline/TrackingTimeline.jsx';
import { CATEGORIES, PRODUCTS, SHIPPING_OPTIONS, STORES, storeName } from './data.js';

/**
 * Gran Azul — réplica del producto completo, con marca Gran Azul y textos
 * propios. Solo para ver: no se copian marca, textos, fotos ni código del
 * producto de referencia. Todo funciona en demo, sin backend ni pagos
 * reales: el carrito, el casillero, los pedidos y las tiendas viven en el
 * navegador y se pierden al recargar. Precios y tiendas son de ejemplo.
 */

const OFFICES = [
  ['Miami', 'FL'], ['Orlando', 'FL'], ['Tampa', 'FL'], ['Houston', 'TX'],
  ['Dallas', 'TX'], ['Charlotte', 'NC'], ['Las Vegas', 'NV'], ['Chicago', 'IL'],
];

const ORDER_STEPS = ['Recibido', 'Procesado', 'Enviado', 'En Cuba', 'Entregado'];

const STATUS_ITEMS = [
  { name: 'Envíos aéreos', description: 'Miami, Orlando y Tampa', status: 'available' },
  { name: 'Envíos marítimos', description: 'Carga comercial y personal', status: 'available' },
  { name: 'Compra para Cuba', description: 'Tiendas verificadas', status: 'review' },
  { name: 'Trámites legales', description: 'Documentación y poderes', status: 'soon' },
];

function money(n) { return `${n} USD`; }

function App() {
  const [theme, setTheme] = useState('claro');
  const [view, setView] = useState('home');
  const [tracked, setTracked] = useState(null);
  const [cart, setCart] = useState([]);
  const [favs, setFavs] = useState([]);
  const [orders, setOrders] = useState([]);
  const [myStores, setMyStores] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todos');
  const [detail, setDetail] = useState(null);
  const [shipId, setShipId] = useState('aereo');
  const [storeForm, setStoreForm] = useState({ name: '', category: 'Combos', desc: '' });

  const cartCount = cart.reduce((a, c) => a + c.qty, 0);
  const cartItems = cart.map((c) => ({ ...PRODUCTS.find((p) => p.id === c.id), qty: c.qty })).filter((p) => p.id);
  const subtotal = cartItems.reduce((a, p) => a + p.price * p.qty, 0);
  const shipping = SHIPPING_OPTIONS.find((o) => o.id === shipId) || SHIPPING_OPTIONS[1];
  const shippingCost = shipping.price + (shipping.taxes || 0);
  const total = subtotal + shippingCost;

  const addToCart = (id, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((c) => c.id === id);
      if (found) return prev.map((c) => (c.id === id ? { ...c, qty: c.qty + qty } : c));
      return [...prev, { id, qty }];
    });
  };
  const setQty = (id, qty) => {
    if (qty <= 0) setCart((prev) => prev.filter((c) => c.id !== id));
    else setCart((prev) => prev.map((c) => (c.id === id ? { ...c, qty } : c)));
  };
  const toggleFav = (id) => setFavs((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));

  const checkout = () => {
    if (cart.length === 0) return;
    const code = `GA-${100001 + orders.length * 7}`;
    setOrders((prev) => [{ code, items: cartItems, total, shipping: shipping.method, step: 0 }, ...prev]);
    setCart([]);
    setView('orders');
  };

  const filtered = useMemo(() => PRODUCTS.filter((p) =>
    (category === 'Todos' || p.category === category) &&
    (search.trim() === '' || p.name.toLowerCase().includes(search.toLowerCase()))
  ), [category, search]);

  const go = (v) => { setView(v); window.scrollTo(0, 0); };

  const nav = [
    ['home', 'Inicio'], ['shop', 'Tienda'], ['locker', 'Casillero'],
    ['orders', 'Mis envíos'], ['sell', 'Vender'], ['precios', 'Precios'],
  ];

  return (
    <div data-theme={theme} className="ga-site">
      <header className="ga-site-header">
        <button type="button" className="ga-site-brand" onClick={() => go('home')}>
          <img src="/logo/gran-azul-completo.svg" alt="Gran Azul" width="120" height="37" />
          <span>Gran Azul</span>
        </button>
        <nav className="ga-site-nav" aria-label="Principal">
          {nav.map(([v, label]) => (
            <button key={v} type="button" className={view === v ? 'ga-site-nav-active' : ''} onClick={() => go(v)}>{label}</button>
          ))}
        </nav>
        <div className="ga-site-header-actions">
          <Button variant="secondary" onClick={() => setTheme(theme === 'claro' ? 'oscuro' : 'claro')}>
            {theme === 'claro' ? 'Modo oscuro' : 'Modo claro'}
          </Button>
          <Button onClick={() => go('cart')}>Carrito ({cartCount})</Button>
        </div>
      </header>

      <main>
        {view === 'home' && (
          <>
            <HeroPanel>
              <p className="ga-site-eyebrow">Familias sin fronteras</p>
              <h1>Más cerca de Cuba, estés donde estés</h1>
              <p className="ga-site-hero-text">Envíos, compras, viajes y trámites legales, con la confianza de un equipo que te acompaña.</p>
              <TrackingSearch onSearch={(code) => { setTracked(code); go('orders'); }} />
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
            <section className="ga-site-section">
              <SectionHeading eyebrow="Tiendas verificadas" title="Compra en tiendas verificadas para Cuba" text="Tiendas de ejemplo para la muestra." />
              <div className="ga-site-grid">
                {STORES.map((s) => (
                  <article key={s.id} className="ga-site-card">
                    <div className="ga-site-card-cover" aria-hidden="true">{s.name.slice(0, 1)}</div>
                    <span className="ga-site-badge">Verificada</span>
                    <h3>{s.name}</h3>
                    <p>{s.desc}</p>
                    <p className="ga-site-card-meta">{s.city}</p>
                  </article>
                ))}
              </div>
              <p className="ga-site-more"><button type="button" className="ga-site-link" onClick={() => go('shop')}>Ir a la tienda</button></p>
            </section>
            <section className="ga-site-section">
              <SectionHeading eyebrow="Productos destacados" title="Lo más buscado para enviar a Cuba" text="Precios de ejemplo para la muestra, no precios reales." />
              <div className="ga-site-grid">
                {PRODUCTS.slice(0, 4).map((p) => (
                  <article key={p.id} className="ga-site-card">
                    <span className="ga-site-badge">Oferta</span>
                    <h3>{p.name}</h3>
                    <p className="ga-site-card-meta">{p.stock} · {storeName(p.store)}</p>
                    <p><s>{p.oldPrice} USD</s> <strong>{p.price} USD</strong></p>
                    <Button onClick={() => addToCart(p.id)}>Añadir</Button>
                  </article>
                ))}
              </div>
            </section>
            <section className="ga-site-section">
              <SectionHeading eyebrow="Cómo funciona" title="Enviar es así de simple" />
              <TrackingTimeline steps={['Compras', 'Lo recibimos', 'Procesamos', 'Enviamos', 'Tu familia recibe']} current={2} />
            </section>
            <section className="ga-site-section">
              <SectionHeading eyebrow="Destinos" title="Destinos destacados en Cuba" />
              <FeaturedDestinations
                featured={[
                  { title: 'La Habana', description: 'La capital, primer destino de la mayoría de envíos.', badge: 'Más buscado' },
                  { title: 'Santiago de Cuba', description: 'Oriente, con recogida en oficina.', badge: null },
                  { title: 'Varadero', description: 'Destino de descanso y visitas.', badge: null },
                ]}
                others={['Camagüey', 'Holguín', 'Santa Clara', 'Cienfuegos', 'Matanzas']}
              />
            </section>
            <section className="ga-site-section ga-site-two-col">
              <div>
                <SectionHeading align="left" level="h1" eyebrow="Precios" title="Calcula tu envío" text="Peso y método, con el resultado marcado como ejemplo demo." />
                <ShippingCalculator />
              </div>
              <div>
                <SectionHeading align="left" level="h1" eyebrow="Siempre cerca de ti" title="Nuestras oficinas en Estados Unidos" text="Más de 15 oficinas en las principales ciudades." />
                <div className="ga-site-offices">
                  {OFFICES.map(([city, state]) => <OfficeCard key={city} city={city} state={state} />)}
                </div>
              </div>
            </section>
            <section className="ga-site-section">
              <CTABanner title="¿Listo para enviar a Cuba?" text="Empieza por la tienda o calcula tu envío: esta es una muestra con el sistema de diseño Gran Azul.">
                <Button onClick={() => go('shop')}>Ir a la tienda</Button>
              </CTABanner>
            </section>
          </>
        )}

        {view === 'shop' && (
          <section className="ga-site-section">
            <SectionHeading eyebrow="Tienda" title="Productos para enviar a Cuba" text="Busca por nombre o filtra por categoría. Todo es demo: añadir al carrito no compra nada real." />
            <div className="ga-shop-toolbar">
              <input className="ga-shop-search" placeholder="Buscar producto…" value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Buscar producto" />
              <div className="ga-shop-filters" role="group" aria-label="Categoría">
                {CATEGORIES.map((c) => (
                  <button key={c} type="button" className={category === c ? 'ga-shop-filter-active' : ''} onClick={() => setCategory(c)}>{c}</button>
                ))}
              </div>
            </div>
            {filtered.length === 0 && <p className="ga-site-card-meta">Sin productos para esa búsqueda.</p>}
            <div className="ga-site-grid">
              {filtered.map((p) => (
                <article key={p.id} className="ga-site-card">
                  <div className="ga-site-card-cover" aria-hidden="true">{p.name.slice(0, 1)}</div>
                  <span className="ga-site-badge">{p.category}</span>
                  <h3>{p.name}</h3>
                  <p className="ga-site-card-meta">{storeName(p.store)} · {p.stock} · ★ {p.rating}</p>
                  <p><s>{p.oldPrice} USD</s> <strong>{p.price} USD</strong></p>
                  <div className="ga-shop-card-actions">
                    <Button onClick={() => addToCart(p.id)}>Añadir</Button>
                    <Button variant="secondary" onClick={() => setDetail(p)}>Ver</Button>
                    <button type="button" className="ga-shop-fav" aria-label="Favorito" onClick={() => toggleFav(p.id)}>{favs.includes(p.id) ? '♥' : '♡'}</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {detail && (
          <div className="ga-modal-backdrop" role="presentation" onClick={() => setDetail(null)}>
            <div className="ga-modal" role="dialog" aria-modal="true" aria-label={detail.name} onClick={(e) => e.stopPropagation()}>
              <h2>{detail.name}</h2>
              <p className="ga-site-card-meta">{storeName(detail.store)} · {detail.category} · {detail.stock} · ★ {detail.rating}</p>
              <p>{detail.desc}</p>
              <p><s>{detail.oldPrice} USD</s> <strong>{detail.price} USD</strong></p>
              <div className="ga-shop-card-actions">
                <Button onClick={() => { addToCart(detail.id); setDetail(null); go('cart'); }}>Añadir e ir al carrito</Button>
                <Button variant="secondary" onClick={() => setDetail(null)}>Cerrar</Button>
              </div>
            </div>
          </div>
        )}

        {view === 'cart' && (
          <section className="ga-site-section">
            <SectionHeading eyebrow="Carrito" title="Tu carrito" text="Revisa tus productos y elige el método de envío. La compra es demo: no se cobra nada real." />
            {cartItems.length === 0 ? (
              <p>Tu carrito está vacío. <button type="button" className="ga-site-link" onClick={() => go('shop')}>Ir a la tienda</button></p>
            ) : (
              <>
                <div className="ga-cart-list">
                  {cartItems.map((p) => (
                    <div key={p.id} className="ga-cart-row">
                      <div><strong>{p.name}</strong><p className="ga-site-card-meta">{storeName(p.store)} · {p.price} USD</p></div>
                      <div className="ga-cart-qty">
                        <button type="button" onClick={() => setQty(p.id, p.qty - 1)} aria-label="Quitar uno">−</button>
                        <span>{p.qty}</span>
                        <button type="button" onClick={() => setQty(p.id, p.qty + 1)} aria-label="Añadir uno">+</button>
                      </div>
                      <strong>{p.price * p.qty} USD</strong>
                    </div>
                  ))}
                </div>
                <div className="ga-site-section">
                  <SectionHeading eyebrow="Envío" title="Elige tu método de envío" />
                  <QuoteOptions options={SHIPPING_OPTIONS} selectedId={shipId} onSelect={(opt) => setShipId(opt.id)} />
                </div>
                <div className="ga-cart-total">
                  <p>Subtotal: {money(subtotal)}</p>
                  <p>Envío ({shipping.method}): {money(shippingCost)}</p>
                  <p><strong>Total: {money(total)}</strong></p>
                  <Button onClick={checkout}>Confirmar pedido demo</Button>
                </div>
              </>
            )}
          </section>
        )}

        {view === 'locker' && (
          <section className="ga-site-section">
            <SectionHeading eyebrow="Casillero" title="Tu casillero en EE. UU." text="Tu dirección demo para recibir compras y enviarlas a Cuba." />
            <div className="ga-site-card">
              <h3>Casillero GA-1234</h3>
              <p>Dirección demo: Miami, FL, EE. UU. · A nombre de Usuario demo</p>
              <p className="ga-site-card-meta">Los paquetes que recibas aquí aparecen abajo. Todo es demo.</p>
            </div>
            <div className="ga-site-grid" style={{ marginTop: 16 }}>
              {[
                { id: 'GA-P1', name: 'Combo familiar', status: 'Recibido en casillero' },
                { id: 'GA-P2', name: 'Electrodoméstico', status: 'En revisión' },
              ].map((pkg) => (
                <article key={pkg.id} className="ga-site-card">
                  <h3>{pkg.name}</h3>
                  <p className="ga-site-card-meta">{pkg.id} · {pkg.status}</p>
                  <Button onClick={() => { setOrders((prev) => [{ code: pkg.id, items: [], total: 0, shipping: 'Aéreo', step: 0 }, ...prev]); go('orders'); }}>Enviar a Cuba</Button>
                </article>
              ))}
            </div>
          </section>
        )}

        {view === 'orders' && (
          <section className="ga-site-section">
            <SectionHeading eyebrow="Mis envíos" title="Rastrea tus envíos" text="Busca un código o revisa tus pedidos demo. Avanzar el estado es solo una demo." />
            <TrackingSearch onSearch={(code) => setTracked(code)} />
            {tracked && (
              <div className="ga-site-track-result" style={{ marginTop: 16 }}>
                <ShipmentCard code={tracked} status="En tránsito" date="Ejemplo demo" />
                <TrackingTimeline current={1} />
              </div>
            )}
            {orders.length === 0 && <p style={{ marginTop: 16 }}>Aún no tienes pedidos demo. Crea uno desde la tienda o desde tu casillero.</p>}
            <div style={{ display: 'grid', gap: 24, marginTop: 24 }}>
              {orders.map((o) => (
                <div key={o.code} className="ga-site-card">
                  <h3>Pedido {o.code}</h3>
                  <p className="ga-site-card-meta">{o.shipping} · Total: {money(o.total)} · Paso: {ORDER_STEPS[o.step]}</p>
                  {o.items.length > 0 && <p>{o.items.map((i) => `${i.qty} × ${i.name}`).join(', ')}</p>}
                  <TrackingTimeline steps={ORDER_STEPS} current={o.step} />
                  <div style={{ marginTop: 12 }}>
                    <Button variant="secondary" onClick={() => setOrders((prev) => prev.map((x) => (x.code === o.code ? { ...x, step: Math.min(4, x.step + 1) } : x)))}>Avanzar estado (demo)</Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {view === 'sell' && (
          <section className="ga-site-section">
            <SectionHeading eyebrow="Vender" title="Abre tu tienda con Gran Azul" text="Completa el formulario demo y tu tienda aparece en tu lista. No se publica nada real." />
            <form className="ga-form" onSubmit={(e) => { e.preventDefault(); if (!storeForm.name.trim()) return; setMyStores((prev) => [...prev, storeForm]); setStoreForm({ name: '', category: 'Combos', desc: '' }); }}>
              <label>Nombre de tu tienda
                <input value={storeForm.name} onChange={(e) => setStoreForm({ ...storeForm, name: e.target.value })} placeholder="Ej. Mi tienda" />
              </label>
              <label>Categoría
                <select value={storeForm.category} onChange={(e) => setStoreForm({ ...storeForm, category: e.target.value })}>
                  {CATEGORIES.filter((c) => c !== 'Todos').map((c) => <option key={c}>{c}</option>)}
                </select>
              </label>
              <label>Descripción
                <input value={storeForm.desc} onChange={(e) => setStoreForm({ ...storeForm, desc: e.target.value })} placeholder="Qué vendes" />
              </label>
              <Button type="submit">Crear tienda demo</Button>
            </form>
            {myStores.length > 0 && (
              <div className="ga-site-grid" style={{ marginTop: 24 }}>
                {myStores.map((s, i) => (
                  <article key={i} className="ga-site-card">
                    <span className="ga-site-badge">Tu tienda (demo)</span>
                    <h3>{s.name}</h3>
                    <p>{s.desc}</p>
                    <p className="ga-site-card-meta">{s.category}</p>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}

        {view === 'precios' && (
          <>
            <section className="ga-site-section">
              <SectionHeading eyebrow="Precios" title="Compara tus opciones de envío" text="Precios de ejemplo para la muestra, no tarifas reales." />
              <QuoteOptions options={SHIPPING_OPTIONS} selectedId={shipId} onSelect={(opt) => setShipId(opt.id)} />
            </section>
            <section className="ga-site-section">
              <SectionHeading eyebrow="Servicios" title="Qué está disponible hoy" />
              <ServiceStatusList items={STATUS_ITEMS} />
            </section>
            <section className="ga-site-section ga-site-two-col">
              <div>
                <SectionHeading align="left" level="h1" eyebrow="Calculadora" title="Calcula tu envío" text="Peso y método, con el resultado marcado como ejemplo demo." />
                <ShippingCalculator />
              </div>
              <div>
                <SectionHeading align="left" level="h1" eyebrow="Siempre cerca de ti" title="Nuestras oficinas en Estados Unidos" text="Más de 15 oficinas en las principales ciudades." />
                <div className="ga-site-offices">
                  {OFFICES.map(([city, state]) => <OfficeCard key={city} city={city} state={state} />)}
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer
        links={[
          { label: 'Tienda', href: '#', },
        ]}
        copyright="© 2026 Gran Azul · Réplica demo del producto, con marca Gran Azul. No es un sitio comercial real: no hay pagos, cuentas ni envíos reales."
      />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
