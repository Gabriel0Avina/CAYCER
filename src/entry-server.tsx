import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import type { HelmetServerState } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { blogPosts } from './features/blog/postsData';

/**
 * Punto de entrada del prerender (ver prerender.mjs).
 * Renderiza una ruta a HTML estático y devuelve además los tags
 * de <head> que react-helmet-async generó para esa página.
 */
export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );

  const { helmet } = helmetContext;
  const head = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .filter(Boolean)
        .join('\n  ')
    : '';

  return { html, head };
}

export interface PrerenderRoute {
  path: string;
  /** `null` deja la ruta fuera del sitemap (páginas legales y el 404). */
  sitemap: { lastmod: string; priority: number } | null;
}

/** Última revisión de las páginas estáticas. Actualizar al editarlas. */
const STATIC_LASTMOD = '2026-07-30';

/**
 * Rutas a prerenderizar y su presencia en el sitemap, en un solo lugar.
 *
 * prerender.mjs consume esta lista para generar tanto el HTML por ruta como
 * public/sitemap.xml, de modo que publicar un artículo nuevo solo requiera
 * agregarlo a blogPosts: antes la lista de rutas y el sitemap se editaban por
 * separado y se desincronizaban solos.
 */
export const routes: PrerenderRoute[] = [
  { path: '/', sitemap: { lastmod: STATIC_LASTMOD, priority: 1.0 } },
  { path: '/servicios', sitemap: { lastmod: STATIC_LASTMOD, priority: 0.8 } },
  { path: '/catalogo', sitemap: { lastmod: STATIC_LASTMOD, priority: 0.8 } },
  { path: '/nosotros', sitemap: { lastmod: STATIC_LASTMOD, priority: 0.7 } },
  { path: '/contacto', sitemap: { lastmod: STATIC_LASTMOD, priority: 0.8 } },
  { path: '/servicios/calificacion', sitemap: { lastmod: STATIC_LASTMOD, priority: 0.7 } },
  { path: '/servicios/calibracion', sitemap: { lastmod: STATIC_LASTMOD, priority: 0.7 } },
  { path: '/servicios/validacion', sitemap: { lastmod: STATIC_LASTMOD, priority: 0.7 } },
  { path: '/sectores/farmaceutico', sitemap: { lastmod: STATIC_LASTMOD, priority: 0.7 } },
  { path: '/sectores/alimenticio', sitemap: { lastmod: STATIC_LASTMOD, priority: 0.7 } },
  { path: '/sectores/quimico', sitemap: { lastmod: STATIC_LASTMOD, priority: 0.7 } },
  { path: '/sectores/hospitalario', sitemap: { lastmod: STATIC_LASTMOD, priority: 0.7 } },
  { path: '/blog', sitemap: { lastmod: STATIC_LASTMOD, priority: 0.8 } },
  ...blogPosts.map(
    (post): PrerenderRoute => ({
      path: `/blog/${post.slug}`,
      sitemap: { lastmod: post.dateModified, priority: 0.7 },
    })
  ),
  { path: '/preguntas-frecuentes', sitemap: { lastmod: STATIC_LASTMOD, priority: 0.6 } },
  { path: '/terminos', sitemap: null },
  { path: '/cookies', sitemap: null },
  // Sin ruta propia: cae en el catch-all NotFound → dist/client/404.html
  { path: '/404', sitemap: null },
];

/**
 * URLs del sitemap que no son rutas de React: los PDFs oficiales servidos
 * desde /public. Se indexan por su cuenta y por eso viven aquí.
 */
export const extraSitemapUrls = [
  '/acreditacion-temperatura.pdf',
  '/acreditacion-humedad.pdf',
  '/acreditacion-mediciones-especiales.pdf',
  '/aprobacion-temperatura.pdf',
  '/aprobacion-humedad.pdf',
  '/aprobacion-mediciones-especiales.pdf',
].map((path) => ({ path, lastmod: STATIC_LASTMOD, priority: 0.5 }));
