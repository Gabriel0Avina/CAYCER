/**
 * Prerender: genera HTML estático por ruta después del build.
 *
 * Corre como último paso de `npm run build`:
 *   1. vite build --outDir dist/client   → assets + template
 *   2. vite build --ssr ...              → dist/server/entry-server.js
 *   3. node prerender.mjs                → un index.html por ruta con su
 *      contenido y meta tags (title, canonical, OG, JSON-LD) ya en el HTML,
 *      visible para crawlers que no ejecutan JavaScript.
 */
import fs from 'node:fs';
import path from 'node:path';

const routes = [
  '/',
  '/servicios',
  '/catalogo',
  '/contacto',
  '/servicios/calificacion',
  '/servicios/calibracion',
  '/servicios/validacion',
  '/sectores/farmaceutico',
  '/sectores/alimenticio',
  '/sectores/quimico',
  '/sectores/hospitalario',
  '/preguntas-frecuentes',
  '/terminos',
  '/cookies',
  '/404', // sin ruta propia: cae en el catch-all NotFound → dist/client/404.html
];

const template = fs.readFileSync('dist/client/index.html', 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

for (const url of routes) {
  const { html, head } = render(url);

  const page = template
    .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const file =
    url === '/' ? 'dist/client/index.html'
    : url === '/404' ? 'dist/client/404.html'
    : `dist/client${url}/index.html`;

  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page);
  console.log(`✓ ${url} → ${file} (${Math.round(page.length / 1024)} KB)`);
}

console.log(`\nPrerender completo: ${routes.length} rutas.`);
