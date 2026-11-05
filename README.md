# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Personalizar el portafolio

El contenido está en `content/es/` y `content/en/`. Actualiza ambas versiones:

- `home.yml`: presentación y `milestones` de la línea de tiempo. Los hitos actuales son ejemplos.
- `projects/*.yml`: los tres proyectos actuales son ejemplos (`sample: true`). Cambia título, descripción, estado, tecnologías, `role`, `challenge` y `outcome`; añade `repository` y `demo` cuando existan enlaces reales. `featured: true` muestra el proyecto en Inicio (máximo tres, ordenados por `order`). Cambia `sample` a `false` cuando hayas añadido tu información.
- Las maquetas SVG están en `public/images/projects/`. Para usar una captura real, guarda una imagen en `public/images/projects/` y actualiza `image` (p. ej. `/images/projects/mi-proyecto.webp`) e `imageAlt`. Se recomienda una proporción 3:2.
- `about-me.yml`: cambia `personalNote` y, opcionalmente, añade `portrait: /images/mi-foto.webp` y `portraitAlt`. Sin foto aparece una ilustración de brújula.
- `contact.yml`: canales de contacto. El formulario abre la aplicación de correo; no utiliza un servicio de envío.
- Para habilitar las descargas, añade `public/cv/cv-es.pdf` y/o `public/cv/cv-en.pdf` y reinicia el servidor o recompila. No se ofrecen descargas de archivos ausentes.
- Los textos de interfaz están en `i18n/locales/`. Habilidades conserva su contenido y estructura.

## Adaptación y compatibilidad

La interfaz se adapta desde 320 px, con menú móvil, idioma dentro del menú en pantallas pequeñas, controles táctiles y formularios de al menos 16 px para evitar el zoom automático de iOS. Los enlaces sociales también están disponibles en el pie de página. Los detalles de proyectos usan HTML nativo y funcionan sin depender del hover.

Las animaciones respetan `prefers-reduced-motion`. El donut tiene pausa manual y se detiene fuera de pantalla o cuando la pestaña está oculta. El contenido de las secciones permanece visible si las animaciones o IntersectionObserver no están disponibles.

El soporte mínimo de la base Tailwind 4 es Safari 16.4, Chrome 111 y Firefox 128: https://tailwindcss.com/docs/compatibility. Las comprobaciones de tamaños de pantalla en escritorio no sustituyen una prueba en dispositivos iOS/Android reales.
