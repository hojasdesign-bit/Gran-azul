# Gran Azul

Sitio de muestra con el sistema de diseño Gran Azul (repo `Gran-Azul-DS`).

**Solo para ver.** Réplica del producto completo, con marca Gran Azul:
tienda con buscador, categorías, favoritos y detalle; carrito con método
de envío y pedido demo; casillero; mis envíos con rastreo y avance de
estado demo; vender (crear tienda demo); precios con calculadora y
oficinas; y la home. Todo funciona en demo, sin backend ni pagos reales:
el carrito, los pedidos y las tiendas viven en el navegador y se pierden
al recargar. No se copian textos, marca, fotos ni código del producto de
referencia. No es el sitio comercial final y este paso puede cambiar en
el futuro.

- Marca: `#0075A7`, cian `#13C1DF`, noche `#071D2F`, tipografía DM Sans.
- Tokens con prefijo `--ga-*` en `src/tokens.css`.
- Tema claro por defecto, tema oscuro disponible.
- La calculadora muestra un resultado **demo** (10 lb = 30 USD en aéreo)
  y dice explícitamente que no son tarifas reales.

```bash
npm install
npm run dev
npm run build
```
