/** Datos demo del producto Gran Azul. Precios, tiendas y paquetes son de
 * ejemplo para la muestra: no son precios, tiendas ni envíos reales. */

export const STORES = [
  { id: 'familiar', name: 'Tienda familiar', desc: 'Combos y productos para el hogar.', city: 'Miami, FL' },
  { id: 'alimentos', name: 'Alimentos y bebidas', desc: 'Productos básicos y combos de comida.', city: 'Orlando, FL' },
  { id: 'electro', name: 'Electrodomésticos', desc: 'Equipos para la casa, verificados.', city: 'Tampa, FL' },
  { id: 'motos', name: 'Motos y vehículos', desc: 'Motos y repuestos con envío marítimo.', city: 'Houston, TX' },
];

export const CATEGORIES = ['Todos', 'Combos', 'Alimentos', 'Electrodomésticos', 'Hogar', 'Motos'];

export const PRODUCTS = [
  { id: 'p1', name: 'Combo familiar', category: 'Combos', store: 'familiar', price: 99, oldPrice: 120, stock: 'En stock', rating: 4.9, desc: 'Combo para el hogar con productos básicos y de aseo.' },
  { id: 'p2', name: 'Combo de alimentos', category: 'Alimentos', store: 'alimentos', price: 69, oldPrice: 85, stock: 'En stock', rating: 4.8, desc: 'Alimentos enlatados, arroz, aceite y productos básicos.' },
  { id: 'p3', name: 'Electrodoméstico', category: 'Electrodomésticos', store: 'electro', price: 199, oldPrice: 240, stock: 'En stock', rating: 4.7, desc: 'Equipo para la casa, verificado antes de enviar.' },
  { id: 'p4', name: 'Moto', category: 'Motos', store: 'motos', price: 1299, oldPrice: 1450, stock: 'Pocas unidades', rating: 4.6, desc: 'Moto con envío marítimo y documentación gestionada.' },
  { id: 'p5', name: 'Combo de aseo', category: 'Combos', store: 'familiar', price: 45, oldPrice: 58, stock: 'En stock', rating: 4.8, desc: 'Aseo personal y del hogar para toda la familia.' },
  { id: 'p6', name: 'Café y dulces', category: 'Alimentos', store: 'alimentos', price: 32, oldPrice: 40, stock: 'En stock', rating: 4.9, desc: 'Café, dulces y productos para compartir.' },
  { id: 'p7', name: 'Ventilador', category: 'Electrodomésticos', store: 'electro', price: 89, oldPrice: 110, stock: 'En stock', rating: 4.5, desc: 'Ventilador para la casa, embalado para envío.' },
  { id: 'p8', name: 'Juego de sábanas', category: 'Hogar', store: 'familiar', price: 54, oldPrice: 70, stock: 'En stock', rating: 4.7, desc: 'Ropa de cama para el hogar.' },
  { id: 'p9', name: 'Repuesto de moto', category: 'Motos', store: 'motos', price: 120, oldPrice: 150, stock: 'En stock', rating: 4.6, desc: 'Repuestos con envío marítimo.' },
  { id: 'p10', name: 'Combo de limpieza', category: 'Hogar', store: 'familiar', price: 38, oldPrice: 49, stock: 'En stock', rating: 4.8, desc: 'Limpieza del hogar en un solo combo.' },
  { id: 'p11', name: 'Arroz y granos', category: 'Alimentos', store: 'alimentos', price: 48, oldPrice: 60, stock: 'En stock', rating: 4.9, desc: 'Granos básicos para la cocina familiar.' },
  { id: 'p12', name: 'Olla arrocera', category: 'Electrodomésticos', store: 'electro', price: 75, oldPrice: 95, stock: 'Pocas unidades', rating: 4.7, desc: 'Olla arrocera eléctrica, verificada antes de enviar.' },
];

export const SHIPPING_OPTIONS = [
  { id: 'aereo-expres', method: 'Aéreo exprés', delivery: '3-5 días', tracking: 'Excelente', rating: 4.9, deliveryType: 'Puerta a puerta', taxes: null, price: 42, oldPrice: 50, badge: 'fastest' },
  { id: 'aereo', method: 'Aéreo', delivery: '7-10 días', tracking: 'Bueno', rating: 4.7, deliveryType: 'Puerta a puerta', taxes: null, price: 30, badge: 'best' },
  { id: 'maritimo', method: 'Marítimo', delivery: '20-30 días', tracking: 'Básico', rating: 4.5, deliveryType: 'Recogida en oficina', taxes: 4, price: 20, badge: 'cheapest' },
];

export function storeName(id) {
  const s = STORES.find((x) => x.id === id);
  return s ? s.name : 'Tienda';
}
