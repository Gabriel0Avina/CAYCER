# Plan 10/10 — SEO · GEO · AEO para caycer.ing

> Basado en la auditoría del 14/07/2026 (ver `seo-audit-caycer-ing-2026-07-14.pdf`).
> Puntajes actuales: SEO 3/10 · GEO 3/10 · AEO 2/10.
> Cada fase indica el puntaje estimado al completarla.

---

## Fase 0 — Emergencia técnica (1 día) → SEO 6, GEO 4, AEO 2

El objetivo de esta fase es que el sitio **exista** para Google. Nada de lo demás importa mientras el 86% de las URLs devuelva 404.

### 0.1 Crear `vercel.json` en la raíz del proyecto (15 min)
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
Con esto toda ruta profunda (`/servicios`, `/catalogo`, etc.) responde 200 con el shell de la SPA en lugar del 404 de Vercel.

### 0.2 Corregir dominio y canonical por página en `src/components/SEO.tsx` (1 h)
- Cambiar el default `url = "https://caycer.com.mx"` → `https://caycer.ing`.
- Aceptar un prop `path` y construir `canonical = https://caycer.ing + path`, de modo que **cada página tenga su propio canonical** (hoy todas comparten uno, y del dominio equivocado).
- Pasar el `path` desde cada página: `/`, `/servicios`, `/catalogo`, `/contacto`, `/servicios/{slug}`.

### 0.3 Corregir el NAP del schema en `src/pages/Home.tsx` (30 min)
El `homeSchema` actual declara Querétaro y un teléfono 442 — datos de otra empresa o placeholder. Sustituir con los datos reales (los mismos del footer):
- `streetAddress`: "Batalla de Puebla 3643, Col. El Tapatío"
- `addressLocality`: "San Pedro Tlaquepaque", `addressRegion`: "JAL", `postalCode`: "45588"
- `telephone`: "+523332601657"
- `geo`: coordenadas reales de la dirección
- `url` / `@id` / `image`: sobre `https://caycer.ing`
- `sameAs`: solo perfiles reales (Instagram `https://www.instagram.com/_caycer/`; agregar Facebook/LinkedIn cuando existan)

### 0.4 Arreglar `index.html` (15 min)
- `lang="en"` → `lang="es"`.
- Agregar meta description estática de respaldo + OG básicos (título, description, og:image) para el estado sin JavaScript.

### 0.5 Crear assets faltantes en `public/` (1 h)
- `og-image.png` (1200×630) con logo + tagline — hoy og:image apunta a un 404.
- `logo.png` — referenciado por el schema, hoy 404.

### 0.6 Redesplegar y verificar (30 min)
- `npm run build` + deploy.
- Verificar: todas las URLs del sitemap responden 200; canonical correcto; schema con NAP real (validar en https://validator.schema.org y https://search.google.com/test/rich-results).

---

## Fase 1 — Renderizado indexable + presencia (1 semana) → SEO 8, GEO 6, AEO 3

El objetivo es que el contenido sea visible **sin ejecutar JavaScript** — requisito para crawlers de IA y aceleración enorme para Google.

### 1.1 Prerender / SSG (1–2 días) — la decisión técnica más importante
Opciones, de menor a mayor esfuerzo:

| Opción | Esfuerzo | Resultado |
|---|---|---|
| A. `vite-prerender-plugin` o `react-snap` sobre el stack actual | 1–2 días | Las 7 rutas se generan como HTML estático en build. Suficiente para un sitio de contenido estático como este. **Recomendada.** |
| B. Migrar a Astro (islands + React donde haga falta) | 1–2 semanas | HTML estático perfecto, JS mínimo, mejor Core Web Vitals. Ideal si se planea el blog de Fase 3. |
| C. Migrar a Next.js (SSR/SSG) | 1–2 semanas | Máxima flexibilidad, más complejidad operativa. |

Criterio: si el blog de Fase 3 va en serio, considerar B desde ahora para no migrar dos veces. Si se quiere resultado esta semana, A.

### 1.2 Higiene de rutas (2 h)
- Ruta 404 catch-all en React Router (`path="*"`) con página útil (enlaces a servicios/contacto).
- Crear `/terminos` y `/cookies` (el footer ya los enlaza — hoy dan página en blanco).

### 1.3 Google Search Console + Business Profile (2 h)
- Alta de `caycer.ing` en Search Console, enviar sitemap, pedir indexación de las 7 URLs.
- Crear/reclamar **Google Business Profile**: categoría "Laboratorio de calibración", NAP idéntico al footer, fotos del laboratorio, horario. Esto es la señal local #1 para AEO/voz.
- Bing Webmaster Tools (alimenta a Copilot/ChatGPT search).

### 1.4 Coherencia de entidad (1 h)
- Unificar emails al dominio actual o documentar la relación entre caycer.ing y caycer.com.mx (ideal: redirect 301 del dominio viejo al nuevo si aún se posee).
- Reparar íconos sociales `href="#"` del footer.

---

## Fase 2 — Arquitectura de contenido (2–4 semanas) → SEO 9, GEO 8, AEO 8

El objetivo es cubrir las búsquedas con intención y dar a los motores de IA algo citable y estructurado.

### 2.1 Página **Nosotros** (E-E-A-T) (2–3 días)
- Historia, misión, equipo con nombres/roles/credenciales (los "autores" del sitio).
- Acreditaciones en detalle: qué significa EMA T-225, H-98, ME-57, NMX-EC-17025 — con enlaces a las fuentes oficiales (ema.org.mx, CENAM).
- Fotos reales del laboratorio y equipo (no stock).
- Schema `Organization` consolidado + `Person` para responsables técnicos.

### 2.2 Página **FAQ** con `FAQPage` schema (2 días) — la palanca AEO #1
15–20 preguntas reales de clientes como H2/H3 en forma de pregunta, cada una con respuesta directa de 40–60 palabras en el primer párrafo:
- "¿Qué es la calificación de equipos (DQ, IQ, OQ, PQ)?"
- "¿Cada cuánto debo calibrar mis termómetros?"
- "¿Qué diferencia hay entre calibración, calificación y validación?"
- "¿Qué es la trazabilidad al CENAM?"
- "¿Qué exige el Suplemento de la FEUM para cadena de frío?" *(citar numeral exacto; nunca atribuir requisitos a COFEPRIS)*
- "¿Cuánto tarda un mapeo térmico?"

### 2.3 Enriquecer páginas de servicio (3–4 días)
- Definición tipo snippet al inicio de cada servicio ("La calibración es…" — el patrón que ya existe en calificación, replicarlo).
- **Tabla comparativa** de alcances por acreditación (magnitud / rango / código EMA) — candidata a table snippet.
- Proceso DQ→IQ→OQ→PQ como pasos numerados + `HowTo` schema.
- Schema `Service` por página con `areaServed`, `provider` → Organization.
- Enlaces internos entre servicios relacionados y hacia FAQ.

### 2.4 Páginas por **sector** (1 semana — ya previstas en ARCHITECTURE.md)
`/sectores/farmaceutico`, `/alimenticio`, `/quimico`, `/hospitalario` — cada una responde "¿qué necesita mi industria?": normas aplicables, servicios relevantes, caso típico. Multiplica la cobertura de long-tail B2B.

### 2.5 Catálogo con `Product` schema (1 día)
Los 14 productos ya tienen marca, modelo y specs — marcar cada uno con `Product` + `brand` + `additionalProperty` (rangos).

### 2.6 Prueba social (continuo)
- 3–5 testimonios con nombre, cargo y empresa (o logos de clientes con permiso).
- Sección "Clientes que confían en nosotros" en home.

---

## Fase 3 — Autoridad y frescura (mes 2–3, luego continuo) → SEO 10, GEO 10, AEO 10

El último tramo a 10/10 no es técnico: es demostrar autoridad sostenida. Sin esto, el techo real es ~8.

### 3.1 Blog técnico (2 artículos/mes mínimo)
**Ventaja injusta de CAYCER: los 15 carruseles de Instagram ya producidos son artículos de blog casi listos** (cadena de frío, mapeo térmico, FEUM, checklist de frío, acreditaciones EMA, transporte refrigerado…). Reutilizar ese contenido como artículos de 1,200–2,000 palabras con:
- Encabezados en pregunta + respuesta directa (AEO).
- Datos y rangos específicos citables (GEO).
- Autor con credenciales + `Article` schema con `author` y `datePublished`.
- Fechas de actualización visibles.

Pilares: cadena de frío farmacéutica · calificación de equipos · normativa (FEUM/NOM/ISO) · metrología práctica.

### 3.2 Backlinks y menciones (continuo)
- Directorio de laboratorios acreditados de EMA (enlace de máxima autoridad temática).
- Cámaras/asociaciones industriales de Jalisco, directorios B2B farmacéuticos.
- Artículos invitados en medios del sector farmacéutico mexicano.
- Los carruseles de Instagram enlazando al blog (señal social + tráfico).

### 3.3 Contenido original citable (1 estudio/trimestre)
Lo que más citan los motores generativos: datos que no existen en otro lado. Ejemplos de bajo costo con datos propios anonimizados:
- "X% de los almacenes que mapeamos en 2026 tenían puntos fuera de 2–8 °C"
- Guía descargable: checklist de calificación de cámara fría (lead magnet + citas).

### 3.4 Medición y mantenimiento (mensual)
- Search Console: cobertura de indexación, consultas, CTR.
- PageSpeed Insights / Core Web Vitals (objetivo: todo verde; Astro/prerender ayuda).
- Verificar citaciones en IA: preguntar a ChatGPT/Perplexity "laboratorio de calibración acreditado EMA en Guadalajara" y monitorear si aparece CAYCER.
- Re-auditar con esta misma skill cada trimestre.

---

## Resumen de impacto por fase

| Fase | Duración | SEO | GEO | AEO |
|---|---|---|---|---|
| Hoy | — | 3 | 3 | 2 |
| 0 · Emergencia técnica | 1 día | 6 | 4 | 2 |
| 1 · Prerender + presencia | 1 semana | 8 | 6 | 3 |
| 2 · Arquitectura de contenido | 2–4 semanas | 9 | 8 | 8 |
| 3 · Autoridad y frescura | 2–3 meses y continuo | **10** | **10** | **10** |

## Reglas de contenido a respetar siempre (marca/legal)
- Nunca la palabra "garantía" → usar "respaldo".
- Nunca atribuir requisitos a COFEPRIS; el Suplemento FEUM se cita con numeral exacto.
- "Ingeniería" con I mayúscula.
- NAP idéntico en todo lugar: footer = schema = Google Business Profile.
