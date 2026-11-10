// @ts-check
import { defineConfig } from 'astro/config';

/**
 * CONFIGURACIÓN DE ASTRO
 * ------------------------------------------------------------------
 * - inlineStylesheets: 'always' → los estilos quedan dentro del HTML,
 *   así la página funciona como un solo archivo (necesario para el Artifact).
 * - site / base: dónde se publica la web. En GitHub Pages la web vive en
 *   https://ignaciozamo.github.io/Ever_Ojeda_LandingPage/, por eso el
 *   workflow (.github/workflows/deploy.yml) define SITE_URL y BASE_PATH.
 *   En local (npm run dev / build / artifact) se usa la raíz "/".
 */
export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH ?? '/',
  build: {
    inlineStylesheets: 'always',
  },
});
