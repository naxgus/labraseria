# La Brasería

Web de una brasería (restaurante de cocina a la brasa), de una sola página, con estética oscura y elegante en blanco y dorado. Publicada en Netlify con despliegue automático desde GitHub.

- **Web en producción:** https://labraaseriia.netlify.app
- **Repositorio:** https://github.com/naxgus/labraseria

## Tecnologías utilizadas

| Tecnología | Versión | Para qué se usa |
|---|---|---|
| [Next.js](https://nextjs.org) (App Router) | 16.3.6 | Framework de la web |
| [React](https://react.dev) | 19.2.8 | Interfaz y componentes |
| [TypeScript](https://www.typescriptlang.org) | 5 | Tipado del código |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Estilos y diseño responsive |
| [ESLint](https://eslint.org) | 9 | Revisión de código |
| `next/font` (Google Fonts) | – | Tipografías Playfair Display (títulos) y Geist (texto) |
| [Node.js](https://nodejs.org) | 24 LTS en local · 22 en Netlify | Entorno de ejecución |
| [Git](https://git-scm.com) y [GitHub](https://github.com) | – | Control de versiones y repositorio |
| [GitHub CLI](https://cli.github.com) (`gh`) | 2.101 | Crear y gestionar el repositorio desde la terminal |
| [Netlify](https://www.netlify.com) y Netlify CLI | CLI 27.10 | Hosting y despliegue |
| `@netlify/plugin-nextjs` | – | Adaptador de Next.js para Netlify |
| [Claude Code](https://claude.com/claude-code) | – | Asistente de IA con el que se construyó el proyecto |

## Qué contiene la web

Una única página con navegación fija arriba y estas secciones:

1. **Inicio (hero):** ocupa toda la pantalla, con fondo oscuro, título "La Brasería", lema y botón "Ver carta".
2. **Sobre nosotros:** historia del local y tres datos destacados.
3. **Menú:** carta con tres categorías (Para empezar, A la brasa, Para cerrar), con nombre, descripción y precio de cada plato.
4. **Galería:** grid de 6 fotos, con huecos reservados hasta añadir las imágenes reales.
5. **Contacto:** dirección, horario, teléfono y formulario de reserva (nombre, teléfono, correo, fecha, hora, personas y comentarios).
6. **Footer:** nombre del restaurante y año, que se actualiza solo.

Detalles de diseño: paleta negro `#0b0908`, blanco y dorado `#d4af37`; scroll suave entre secciones; diseño adaptado a móvil, revisado a 375 px de ancho sin desbordamiento horizontal.

## Qué se hizo, paso a paso

1. **Entorno:** instalación y configuración de Node.js (con winget), de Git y de GitHub CLI. Se ajustó la política de scripts de PowerShell y la configuración de npm.
2. **Identidad y repositorio:** se inició sesión en GitHub, se configuró la identidad de git con el correo de privacidad de GitHub y se creó el repositorio `naxgus/labraseria`.
3. **Starter:** se generó el proyecto con `create-next-app` (Next.js + TypeScript + Tailwind CSS + ESLint + App Router) y se comprobó que compilaba.
4. **Entorno de vista previa:** se creó `.claude/launch.json` para arrancar el servidor de desarrollo desde Claude. Hubo que usar la ruta absoluta de Node porque la app no veía el PATH nuevo, y liberar el puerto 3000.
5. **Carpeta de imágenes:** `public/assets`, para las fotos del restaurante.
6. **Hero:** página principal a pantalla completa con fondo oscuro y texto blanco y dorado.
7. **Sobre nosotros y Menú:** dos secciones con el mismo estilo que el hero.
8. **Galería y Contacto:** grid de fotos y formulario de reserva básico.
9. **Navegación y footer:** barra fija con enlaces a cada sección y pie de página con el año.
10. **Móvil:** revisión a 375 px, con ajuste del desplazamiento de los anclas bajo la barra fija y del espaciado vertical.
11. **Publicación en Netlify:** sitio creado con Netlify CLI y renombrado a `labraaseriia`; deploy manual con `netlify deploy --prod`.
12. **Despliegue automático:** repositorio enlazado al sitio para que cada push a `main` publique la web. Los primeros deploys automáticos daban 404. Se resolvió añadiendo un `netlify.toml` que fija Node 22 y declara el plugin de Next.js.
13. **Repositorio público:** el repositorio se cambió de privado a público.

## Estructura del proyecto

```
├── public/
│   └── assets/            # Aquí van las imágenes del restaurante
├── src/app/
│   ├── layout.tsx         # Layout raíz, fuentes y metadatos
│   ├── page.tsx           # Página principal (todas las secciones)
│   ├── reservation-form.tsx  # Formulario de reserva (componente cliente)
│   └── globals.css        # Estilos globales y colores de la marca
├── netlify.toml           # Configuración de build y despliegue
└── package.json
```

## Cómo ejecutarlo en local

Requiere Node.js 20.9 o superior.

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:3000
npm run build    # build de producción
npm run lint     # revisión con ESLint
```

## Cómo publicar

El despliegue es automático: cada `git push` a la rama `main` lanza un build en Netlify y publica la web en un par de minutos. La configuración está en `netlify.toml`.

## Pendiente

- **Imágenes reales:** copiar las fotos a `public/assets` y añadir su ruta en la lista `gallery` de `src/app/page.tsx`.
- **Formulario de reserva:** por ahora solo muestra un mensaje de agradecimiento y **no envía los datos**. Falta conectarlo a Netlify Forms o a un servicio de correo.
- **Contenido real:** los textos, los platos, los precios, la dirección, el horario y el teléfono son de ejemplo.
