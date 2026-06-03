# AoE2 DE — Curso Completo (Sitio Web)

Sitio estático generado con **Astro + Starlight** a partir del contenido en `../aoe2-curso/`.

## Correr en local

```bash
npm install
npm run dev
# Abre http://localhost:4321/aoe2-curso/
```

## Buildear para producción

```bash
npm run build
# Output en ./dist/ — listo para subir a cualquier hosting
```

Para previsualizar el build antes de deployar:
```bash
npm run preview
```

---

## Deploy

### GitHub Pages (recomendado — gratis)

1. Creá un repo en GitHub (ej: `aoe2-curso`)
2. En `astro.config.mjs` cambiá:
   ```js
   site: 'https://TU_USUARIO.github.io',
   base: '/aoe2-curso',
   ```
3. Pusheá el código:
   ```bash
   git init && git add . && git commit -m "init"
   git remote add origin https://github.com/TU_USUARIO/aoe2-curso.git
   git push -u origin main
   ```
4. En GitHub → Settings → Pages → Source: **GitHub Actions**
5. El workflow `.github/workflows/deploy.yml` se encarga del resto automáticamente
6. URL final: `https://TU_USUARIO.github.io/aoe2-curso/`

### Netlify

**Opción A — Drag & drop:**
1. `npm run build`
2. Arrastrá la carpeta `dist/` a [netlify.com/drop](https://netlify.com/drop)

**Opción B — Conectar repo:**
1. Importá el repo en Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. En `astro.config.mjs` podés remover `base` si usás dominio propio

### Vercel

```bash
npm i -g vercel
vercel --prod
```
Vercel detecta Astro automáticamente.

### Cloudflare Pages

1. Importá el repo en Cloudflare Pages
2. Framework preset: **Astro**
3. Build command: `npm run build`
4. Build output directory: `dist`

---

## Agregar contenido nuevo

Cada página es un archivo `.md` en `src/content/docs/`. El frontmatter obligatorio:

```yaml
---
title: "Título de la página"
description: "Descripción breve (para SEO y Open Graph)"
sidebar:
  order: 5   # posición en el sidebar dentro de su grupo
---
```

Para agregar una nueva civilización:
1. Creá `src/content/docs/civilizaciones/nombre-civ.md`
2. Agregá la entrada en el sidebar de `astro.config.mjs`

### Callouts disponibles (Starlight)

```md
:::tip[Consejo]
Texto del tip.
:::

:::caution[Error Común]
Texto de advertencia.
:::

:::note[Caso Práctico]
Descripción del caso.
:::

:::danger[Peligro]
Algo crítico.
:::
```

---

## Stack técnico

| Herramienta | Versión | Rol |
|---|---|---|
| Astro | 5.x | Generador de sitio estático |
| Starlight | última | Framework de documentación |
| Inter | — | Fuente principal (Google Fonts) |
| JetBrains Mono | — | Fuente monospace (build orders) |

## Estructura del proyecto

```
aoe2-sitio/
├── .github/workflows/deploy.yml   # CI/CD para GitHub Pages
├── public/
│   ├── favicon.svg
│   └── aoe2-app.js                # JS de interactividad (barra progreso, copy, tooltips)
├── src/
│   ├── assets/
│   │   ├── logo-dark.svg
│   │   └── logo-light.svg
│   ├── content/docs/              # Todo el contenido Markdown
│   │   ├── index.mdx              # Home page
│   │   ├── 00-fundamentos/
│   │   ├── 01-nivel-basico/
│   │   ├── 02-nivel-intermedio/
│   │   ├── 03-nivel-avanzado/
│   │   ├── 04-nivel-experto/
│   │   ├── civilizaciones/
│   │   ├── unidades-y-contras/
│   │   ├── tecnologias/
│   │   └── recursos/
│   └── styles/custom.css          # Theme AoE2 (dark/light, colores, tipografía)
├── astro.config.mjs               # Configuración principal + sidebar
├── scripts/add-frontmatter.mjs    # Script de migración de contenido
└── package.json
```
