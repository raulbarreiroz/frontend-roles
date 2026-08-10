# Setup — Atlas Design System (senior)

Shell host con design tokens, remotes simulados (checkout/catalog/profile) y Service Worker offline.

## Requisitos
- Node.js 18+
- npm

## Arrancar

```bash
cd atlas-ds
npm install
npm run dev
```

Para build + preview (útil para probar el SW):

```bash
cd atlas-ds
npm run build
npm run preview
```

## Cómo probar
1. Cambia entre pestañas Catálogo / Checkout / Perfil (remotes stub).
2. En preview/HTTPS local, revisa que el SW registre (`SW: ready` en el header).
3. Lee `federation/module-federation.config.js` para el sketch de remotes reales.
4. Stories de ejemplo en `stories/Button.stories.jsx` (Storybook opcional).

Más contexto: `ARCHITECTURE.md`.
