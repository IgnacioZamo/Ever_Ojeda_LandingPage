// @ts-check
import { defineConfig } from 'astro/config';

// Los estilos se incrustan en el HTML para que la página funcione como un solo archivo
// (necesario para publicarla como Artifact).
export default defineConfig({
  build: {
    inlineStylesheets: 'always',
  },
});
