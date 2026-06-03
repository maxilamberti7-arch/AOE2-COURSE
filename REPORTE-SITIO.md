# REPORTE DEL SITIO — AoE2 DE Curso Completo

## Actualización: Home Medieval + Glosario (14/05/2026)

| Feature | Estado |
|---|---|
| Home rediseñado con estética medieval épica | ✅ |
| Fuentes Cinzel + Cormorant Garamond (solo en home) | ✅ |
| SVG shield logo + iconos de nivel inline | ✅ |
| Hero con grain texture CSS + gradiente "atardecer" | ✅ |
| 5 cards de niveles + tabla ELO → módulo | ✅ |
| Quote de Hera con tipografía serif | ✅ |
| Footer con atribución game-icons + disclaimer Microsoft | ✅ |
| glosario.json con 78 términos | ✅ |
| Página /glosario con buscador + filtros + nav alfabética | ✅ |
| Componente Term.astro para uso en .mdx | ✅ |
| Plugin remark auto-linking (77 páginas afectadas) | ✅ |
| CSS tooltips global en custom.css | ✅ |
| Home excluido del plugin (0 tooltips) | ✅ |

---


## Stack Final

| Herramienta | Versión | Decisión |
|---|---|---|
| **Astro** | 5.x | Generador estático, build output puro HTML/CSS/JS |
| **Starlight** | última | Framework de docs con sidebar, búsqueda y dark mode incluidos |
| **Node.js** | 24.15.0 | Entorno de build |
| **Inter** | — | Fuente principal (Google Fonts, font-display: swap) |
| **JetBrains Mono** | — | Fuente monospace para build orders y code blocks |

**¿Por qué Astro + Starlight?**
- Starlight provee sidebar, búsqueda full-text (Pagefind), dark/light mode, TOC, paginación anterior/siguiente — todo sin configuración extra.
- Build output es HTML estático puro: funciona en GitHub Pages, Netlify, Vercel, Cloudflare Pages o abierto directamente como `file://`.
- 0 JS innecesario en runtime (solo el JS custom que escribimos para barra de progreso, tooltips y YouTube lazy-load).

---

## Páginas Generadas

| Sección | Páginas |
|---|---|
| Home | 1 |
| 00 — Fundamentos | 4 |
| 01 — Nivel Básico | 5 |
| 02 — Nivel Intermedio | 5 |
| 03 — Nivel Avanzado | 5 |
| 04 — Nivel Experto | 4 |
| Civilizaciones | 49 (index + 48 fichas) |
| Unidades y Contras | 8 |
| Tecnologías | 3 |
| Recursos | 3 |
| 404 + sitemap + otros | ~-3 |
| **Total HTML** | **84 páginas** |

---

## Funcionalidades implementadas

| Feature | Estado | Implementación |
|---|---|---|
| Sidebar colapsable por sección | ✅ | Starlight nativo |
| Búsqueda full-text | ✅ | Pagefind (Starlight nativo) |
| Dark / Light mode con persistencia | ✅ | Starlight nativo |
| TOC (tabla de contenidos) del artículo | ✅ | Starlight nativo |
| Botones Anterior / Siguiente | ✅ | Starlight nativo |
| Barra de progreso de scroll | ✅ | `aoe2-app.js` |
| Botones "Copiar" en code blocks | ✅ | `aoe2-app.js` |
| Checkbox "Módulo completado" (localStorage) | ✅ | `aoe2-app.js` |
| YouTube lazy-load (thumbnail → iframe) | ✅ | `aoe2-app.js` |
| Tooltips de glosario inline | ✅ | `aoe2-app.js` |
| Callouts (tip/caution/danger/note) | ✅ | Starlight `:::` syntax |
| Tablas estilizadas con hover | ✅ | `custom.css` |
| Badges de tier (CSS puro) | ✅ | `custom.css` |
| Sitemap automático | ✅ | Astro nativo |
| GitHub Actions CI/CD | ✅ | `.github/workflows/deploy.yml` |
| Responsive / mobile | ✅ | Starlight + media queries |
| Open Graph / SEO meta tags | ✅ | Starlight nativo |

---

## Lighthouse Scores Esperados

| Métrica | Score Esperado | Razón |
|---|---|---|
| Performance | 95–100 | HTML estático, JS mínimo, fuentes con swap, lazy loading |
| Accessibility | 95–100 | Starlight es AAA por defecto, contraste correcto |
| Best Practices | 100 | HTTPS, sin warnings de consola, assets modernos |
| SEO | 100 | Meta tags, sitemap, robots.txt, estructura semántica |

> Para medir: `npm run build && npm run preview` → abrir Lighthouse en Chrome DevTools.

---

## Pendientes y Limitaciones

1. **Filtros interactivos de civilizaciones** (por tier/mapa/estilo): diseñado en el spec original, no implementado en esta versión. Requeriría un componente Astro/JS adicional con un JSON de datos de civs. Baja prioridad, el sidebar colapsado por tier cumple la misma función navegable.

2. **Filtro "¿qué te están haciendo?" en la matriz de counters**: pendiente. Necesitaría convertir la tabla de counters a JSON y renderizarla con un componente interactivo.

3. **`<CivCard />`** para la página índice de civilizaciones: no implementado. La página usa el Markdown generado. Para cards visuales, convertir `civilizaciones/index.md` a `.mdx` con componente Astro.

4. **Tooltips del glosario**: implementados vía DOM manipulation en `aoe2-app.js`. Si el contenido de una página es muy largo, puede haber leve lag. Solución: implementar como plugin de remark en el pipeline de build.

5. **Videos de YouTube**: los links en el contenido están marcados como "pendientes de verificación". El lazy-loader los convierte a embeds cuando el párrafo contiene exclusivamente un link de YouTube. Verificar y actualizar links en cada archivo de módulo.

6. **`base` en astro.config.mjs**: está hardcodeado a `/aoe2-curso`. Cambiar a tu repo name antes de deployar a GitHub Pages. Para Netlify/Vercel con dominio propio, remover el `base`.

7. **Fuentes offline**: si el sitio se abre como `file://` sin internet, las fuentes de Google Fonts no cargarán. Solución: usar `fontsource` packages para bundlear las fuentes localmente (`npm install @fontsource/inter @fontsource/jetbrains-mono`).

---

## Cómo agregar el próximo patch de AoE2

1. Actualizar los archivos `.md` correspondientes en `aoe2-curso/` (el contenido fuente).
2. Copiarlos a `aoe2-sitio/src/content/docs/` sobreescribiendo los existentes.
3. `npm run build` → las páginas se regeneran automáticamente.
4. Push al repo → GitHub Actions deployea en ~2 minutos.
