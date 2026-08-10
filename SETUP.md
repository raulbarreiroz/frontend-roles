# Setup — Analytics Desk (semi-senior)

Dashboard con charts, filtros, infinite scroll y sesión/carrito en Zustand.

## Requisitos
- Node.js 18+
- npm

## Arrancar

```bash
cd analytics-desk
npm install
npm run dev
```

Abre el puerto que muestre Vite (suele ser `http://localhost:5173`).

## Cómo probar
1. Pulsa **Entrar (demo)** y confirma que aparece el usuario.
2. Filtra eventos por texto y fechas; espera el debounce (~300ms).
3. Pulsa **Cargar más** para el infinite scroll.
4. Añade eventos al carrito y recarga: el estado debe persistir (localStorage vía Zustand).

Los datos salen de `analytics-desk/src/mocks/metrics.js` (no hace falta backend).
