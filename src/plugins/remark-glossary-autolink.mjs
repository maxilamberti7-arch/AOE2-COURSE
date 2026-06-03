/**
 * remark-glossary-autolink.mjs  (v2 — compatible con unist-util-visit v5)
 *
 * Reemplaza la PRIMERA aparición de cada término del glosario en cada página
 * con un <span> HTML con tooltip inline.
 *
 * Reglas:
 *  - Solo la primera aparición por término por página.
 *  - NO toca: headings, code (inline o block), links existentes, HTML nodes.
 *  - Acrónimos (FC, MAA, APM) son case-sensitive.
 *  - NO aplica en index.mdx (home).
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { visit, CONTINUE, SKIP } from 'unist-util-visit';

const __dirname = dirname(fileURLToPath(import.meta.url));
const GLOSARIO_PATH = join(__dirname, '..', 'data', 'glosario.json');

let glosarioCache = null;
function loadGlosario() {
  if (glosarioCache) return glosarioCache;
  try {
    glosarioCache = JSON.parse(readFileSync(GLOSARIO_PATH, 'utf8'));
    return glosarioCache;
  } catch (e) {
    console.warn('[remark-glossary] Error leyendo glosario.json:', e.message);
    return {};
  }
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildTooltipHTML(slug, entry, base) {
  const id  = `term-tt-${slug}`;
  const url = `${base}#${slug}`;
  return (
    `<span class="term-inline" role="button" tabindex="0" aria-describedby="${id}" data-slug="${esc(slug)}">` +
    `${esc(entry.termino)}` +
    `<span id="${id}" class="term-tooltip" role="tooltip">` +
    `<span class="term-tooltip-head">` +
    `<strong class="term-tooltip-name">${esc(entry.termino)}</strong>` +
    `<span class="term-tooltip-cat cat-${esc(entry.categoria)}">${esc(entry.categoria)}</span>` +
    `</span>` +
    `<span class="term-tooltip-def">${esc(entry.definicionCorta)}</span>` +
    `<a href="${esc(url)}" class="term-tooltip-link">Ver definición completa →</a>` +
    `</span>` +
    `</span>`
  );
}

/** Tipos de nodos cuyo contenido no debe ser procesado */
const BLOCK_SKIP = new Set(['code', 'yaml', 'toml', 'import', 'export', 'mdxjsEsm']);
const INLINE_SKIP = new Set(['inlineCode', 'link', 'linkReference', 'image', 'html',
  'mdxJsxTextElement', 'mdxJsxFlowElement', 'mdxFlowExpression', 'mdxTextExpression']);
const HEADING_TYPES = new Set(['heading']);

/**
 * Verifica si un texto es parte de un nodo que debería ignorarse
 * examinando el camino de ancestros.
 */
function shouldSkipParent(parent) {
  if (!parent) return true;
  return BLOCK_SKIP.has(parent.type)
    || INLINE_SKIP.has(parent.type)
    || HEADING_TYPES.has(parent.type);
}

export default function remarkGlossaryAutolink(options = {}) {
  const base = options.glosarioBase || '/AOE2-COURSE/recursos/glosario/';

  return function transformer(tree, file) {
    const glosario = loadGlosario();
    if (!glosario || !Object.keys(glosario).length) return;

    // No procesar el home
    const fp = (file.history && file.history[0]) || '';
    if (fp.endsWith('index.mdx') || fp.endsWith('index.md')) return;

    // Construir lista de patrones, ordenados por longitud desc
    const patterns = Object.entries(glosario)
      .map(([slug, entry]) => {
        const t = entry.termino;
        // Acrónimos: case-sensitive; resto: case-insensitive
        const isAcronym = /^[A-Z]{2,}$/.test(t);
        const escaped = t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const rx = new RegExp(`\\b${escaped}\\b`, isAcronym ? '' : 'i');
        return { slug, entry, rx };
      })
      .sort((a, b) => b.entry.termino.length - a.entry.termino.length);

    const processed = new Set(); // slugs ya insertados en esta página

    // Recopilar todos los nodos de texto candidatos primero,
    // luego procesarlos (evita problemas de mutación durante visit)
    const candidates = [];

    visit(tree, 'text', (node, index, parent) => {
      if (shouldSkipParent(parent)) return SKIP;
      if (typeof index !== 'number') return;
      candidates.push({ node, index, parent });
    });

    // Procesar en orden inverso de aparición para no invalidar índices anteriores
    // (en realidad procesamos de arriba abajo pero con splice seguro)
    for (const { node, index, parent } of candidates) {
      if (!node.value || !node.value.trim()) continue;

      let text = node.value;
      const replacements = [];

      for (const { slug, entry, rx } of patterns) {
        if (processed.has(slug)) continue;
        rx.lastIndex = 0;
        const m = rx.exec(text);
        if (m) {
          replacements.push({ at: m.index, len: m[0].length, slug, entry });
        }
      }

      if (replacements.length === 0) continue;

      // Ordenar por posición y eliminar solapamientos
      replacements.sort((a, b) => a.at - b.at);
      const clean = [];
      let end = -1;
      for (const r of replacements) {
        if (r.at >= end) { clean.push(r); end = r.at + r.len; }
      }

      // Construir nodos reemplazantes
      const newNodes = [];
      let cursor = 0;
      for (const r of clean) {
        if (r.at > cursor) {
          newNodes.push({ type: 'text', value: text.slice(cursor, r.at) });
        }
        newNodes.push({ type: 'html', value: buildTooltipHTML(r.slug, r.entry, base) });
        processed.add(r.slug);
        cursor = r.at + r.len;
      }
      if (cursor < text.length) {
        newNodes.push({ type: 'text', value: text.slice(cursor) });
      }

      // Reemplazar en el padre
      const idx = parent.children.indexOf(node);
      if (idx !== -1) {
        parent.children.splice(idx, 1, ...newNodes);
      }
    }
  };
}
