# Ever Ojeda · Landing page

Landing page de **Ever Ojeda, Licenciado en Higiene y Seguridad en el Trabajo**, orientada a empresas.
Hecha con [Astro](https://astro.build), HTML y CSS (sin frameworks de estilos).

## Comandos

| Comando            | Qué hace                                                                 |
| ------------------ | ------------------------------------------------------------------------ |
| `npm install`      | Instala las dependencias (solo la primera vez).                          |
| `npm run dev`      | Abre la web en modo desarrollo en `http://localhost:4321`.               |
| `npm run build`    | Genera la versión final en `dist/`.                                      |
| `npm run artifact` | Compila y crea `artifact/ever-ojeda.html`, el archivo único que se publica como Artifact. |

## Publicación en GitHub Pages

La web se publica sola en **https://ignaciozamo.github.io/Ever_Ojeda_LandingPage/** cada vez que se hace `git push` a `main`.
Lo hace el workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): compila con Astro y sube la carpeta `dist/`.

Configuración necesaria (una sola vez): en GitHub → **Settings → Pages → Build and deployment → Source**, elegir **GitHub Actions**.
El progreso de cada publicación se ve en la pestaña **Actions** del repositorio.

## Estructura

```
src/
├─ data/
│  ├─ site.ts          ← nombre, título y datos de contacto (WhatsApp, LinkedIn, correo)
│  ├─ companies.ts     ← empresas del carrusel
│  └─ photos.ts        ← fotos de obras (instrucciones para cargar fotos reales)
├─ styles/global.css   ← colores, tipografías, puntos de corte y clases compartidas
├─ layouts/Layout.astro← <head>, fuentes y estructura HTML
├─ pages/index.astro   ← orden de las secciones
└─ components/         ← una sección por archivo (cada uno explica qué hace al inicio)
   ├─ Header.astro       encabezado fijo + menú móvil
   ├─ Hero.astro         portada
   ├─ LogoCarousel.astro carrusel de empresas
   ├─ Benefits.astro     beneficios para la empresa + rubros
   ├─ Services.astro     servicios
   ├─ Process.astro      sobre mí + cómo trabajo
   ├─ Gallery.astro      fotos de obras con filtros y visor ampliado
   ├─ PhotoScene.astro   ilustraciones de ejemplo (hasta tener fotos reales)
   ├─ Testimonials.astro testimonios
   ├─ Faq.astro          preguntas frecuentes
   ├─ Contact.astro      contacto + formulario
   ├─ Footer.astro       contacto, enlaces y legales
   ├─ ContactIcon.astro  íconos de WhatsApp / LinkedIn / correo
   └─ Wave.astro         separador animado en forma de ola
scripts/to-artifact.mjs  ← convierte dist/index.html en el archivo del Artifact
```

## Responsive

Puntos de corte usados en todo el sitio:

- **Escritorio:** más de 1024px
- **Tablet:** 601px a 1024px (`@media (max-width: 1024px)`)
- **Móvil:** hasta 600px (`@media (max-width: 600px)`)

## Pendientes (contenido de ejemplo)

- [ ] Datos de contacto reales en `src/data/site.ts`.
- [ ] Empresas y logos reales en `src/data/companies.ts`.
- [ ] Testimonios reales en `src/components/Testimonials.astro`.
- [ ] Cifras de la portada y matrícula profesional.
- [ ] Foto de Ever en `src/components/Process.astro`.
- [ ] Fotos reales de obras en `public/obras/` + `src/data/photos.ts`.
- [ ] Conectar el formulario de contacto (ver bloque `ENVÍO` en `Contact.astro`).
