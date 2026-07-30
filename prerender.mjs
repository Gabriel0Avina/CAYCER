/**
 * Prerender: genera HTML estático por ruta después del build, y con él
 * el sitemap.xml.
 *
 * Corre como último paso de `npm run build`:
 *   1. vite build --outDir dist/client   → assets + template
 *   2. vite build --ssr ...              → dist/server/entry-server.js
 *   3. node prerender.mjs                → un index.html por ruta con su
 *      contenido y meta tags (title, canonical, OG, JSON-LD) ya en el HTML,
 *      visible para crawlers que no ejecutan JavaScript, más el sitemap.
 *
 * La lista de rutas vive en src/entry-server.tsx, junto con los artículos del
 * blog: publicar uno nuevo no requiere tocar este archivo ni el sitemap.
 */
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://caycer.ing';

const template = fs.readFileSync('dist/client/index.html', 'utf-8');
const { render, routes, extraSitemapUrls } = await import('./dist/server/entry-server.js');

for (const { path: url } of routes) {
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

// Sitemap: rutas indexables + los PDFs oficiales.
const sitemapEntries = [
  ...routes
    .filter((r) => r.sitemap)
    .map((r) => ({ path: r.path, ...r.sitemap })),
  ...extraSitemapUrls,
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    ({ path: p, lastmod, priority }) => `  <url>
    <loc>${SITE}${p === '/' ? '/' : p}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

// Se escribe en dist/client (lo que se sirve) y en public/ para que el archivo
// versionado en git refleje siempre lo último generado.
fs.writeFileSync('dist/client/sitemap.xml', sitemap);
fs.writeFileSync('public/sitemap.xml', sitemap);

console.log(`\nPrerender completo: ${routes.length} rutas.`);
console.log(`Sitemap generado: ${sitemapEntries.length} URLs.`);
