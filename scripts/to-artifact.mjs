// Convierte dist/index.html (salida de Astro) en un único archivo listo para publicar
// como Artifact: sin <!doctype>, <html>, <head> ni <body> (el visor los agrega).
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { extname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Tipos de imagen que se incrustan dentro del HTML (el Artifact no puede
// cargar archivos sueltos de /public, así que se convierten a data: URI).
const MIME = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.avif': 'image/avif' };

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');

const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? '';
const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';

const title = head.match(/<title>[\s\S]*?<\/title>/i)?.[0] ?? '<title>Ever Ojeda</title>';
const metas = head.match(/<meta name="claude:[^>]*>/gi) ?? [];
const links = head.match(/<link[^>]*>/gi) ?? [];
const styles = head.match(/<style[^>]*>[\s\S]*?<\/style>/gi) ?? [];
const scripts = head.match(/<script[^>]*>[\s\S]*?<\/script>/gi) ?? [];

if (/<link[^>]*rel="stylesheet"[^>]*href="\/_astro/i.test(head)) {
  throw new Error('Hay hojas de estilo externas en /_astro: revisá build.inlineStylesheets.');
}

/** Reemplaza src="/ruta/imagen.jpg" por la imagen incrustada (fotos de /public/obras, etc.). */
function inlineImages(html) {
  return html.replace(/src="(\/[^"]+)"/g, (match, path) => {
    const mime = MIME[extname(path).toLowerCase()];
    const file = fileURLToPath(new URL(`../dist${decodeURI(path)}`, import.meta.url));
    if (!mime || !existsSync(file)) return match;
    return `src="data:${mime};base64,${readFileSync(file).toString('base64')}"`;
  });
}

const out = [title, ...metas, ...links, ...styles, ...scripts, inlineImages(body.trim())].join('\n') + '\n';

mkdirSync(new URL('../artifact/', import.meta.url), { recursive: true });
writeFileSync(new URL('../artifact/ever-ojeda.html', import.meta.url), out);
console.log(`artifact/ever-ojeda.html (${(out.length / 1024).toFixed(1)} KB)`);
