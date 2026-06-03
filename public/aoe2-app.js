/**
 * aoe2-app.js — Scripts de interactividad del sitio
 * Se carga en todas las páginas via head injection en astro.config.mjs
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initCopyButtons();
  initModuleProgress();
  initYouTubeLazyLoad();
  initGlossaryTooltips();
});

/* ── 1. Barra de progreso de scroll ──────────────────────── */
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.prepend(bar);

  window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    const scrolled = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
    bar.style.width = Math.min(scrolled, 100) + '%';
  }, { passive: true });
}

/* ── 2. Botones "copiar" en code blocks ──────────────────── */
function initCopyButtons() {
  document.querySelectorAll('pre').forEach(pre => {
    if (pre.querySelector('.copy-button')) return;

    const btn = document.createElement('button');
    btn.className = 'copy-button';
    btn.textContent = 'Copiar';
    btn.setAttribute('aria-label', 'Copiar código');
    btn.addEventListener('click', () => {
      const code = pre.querySelector('code');
      const text = code ? code.innerText : pre.innerText;
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = '✓ Copiado';
        setTimeout(() => { btn.textContent = 'Copiar'; }, 2000);
      });
    });
    pre.style.position = 'relative';
    pre.appendChild(btn);
  });
}

/* ── 3. Marcador de progreso por página ──────────────────── */
function initModuleProgress() {
  const main = document.querySelector('.sl-markdown-content');
  if (!main) return;

  const slug = window.location.pathname.replace(/\/$/, '').split('/').slice(-2).join('/');
  const key = 'aoe2-done-' + slug;
  const done = localStorage.getItem(key) === '1';

  const btn = document.createElement('button');
  btn.className = 'module-complete-btn' + (done ? ' done' : '');
  btn.innerHTML = done
    ? '✅ Módulo completado'
    : '☐ Marcar como completado';
  btn.setAttribute('aria-label', 'Marcar módulo como completado');

  btn.addEventListener('click', () => {
    const isDone = localStorage.getItem(key) === '1';
    if (isDone) {
      localStorage.removeItem(key);
      btn.className = 'module-complete-btn';
      btn.innerHTML = '☐ Marcar como completado';
    } else {
      localStorage.setItem(key, '1');
      btn.className = 'module-complete-btn done';
      btn.innerHTML = '✅ Módulo completado';
    }
    updateSidebarProgress();
  });

  main.appendChild(btn);
  updateSidebarProgress();
}

function updateSidebarProgress() {
  document.querySelectorAll('nav a[href]').forEach(link => {
    const href = link.getAttribute('href') || '';
    const slug = href.replace(/\/$/, '').split('/').slice(-2).join('/');
    const key = 'aoe2-done-' + slug;
    if (localStorage.getItem(key) === '1') {
      if (!link.querySelector('.done-indicator')) {
        const dot = document.createElement('span');
        dot.className = 'done-indicator';
        dot.textContent = ' ✓';
        dot.style.cssText = 'color: #d4a017; font-size: 0.75em; margin-left: 4px;';
        link.appendChild(dot);
      }
    }
  });
}

/* ── 4. YouTube lazy-load ────────────────────────────────── */
function initYouTubeLazyLoad() {
  // Busca links de YouTube en el contenido y crea thumbnails clickeables
  const content = document.querySelector('.sl-markdown-content');
  if (!content) return;

  // Detecta patrones: youtube.com/watch?v=XXXX o youtu.be/XXXX
  const ytPattern = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/g;

  // Procesa párrafos que son solo un link de YouTube
  content.querySelectorAll('p').forEach(p => {
    const text = p.textContent.trim();
    const match = ytPattern.exec(text);
    ytPattern.lastIndex = 0;

    if (match && text.length < 120) {
      const videoId = match[1];
      const wrapper = document.createElement('div');
      wrapper.className = 'yt-embed-wrapper';
      wrapper.setAttribute('role', 'button');
      wrapper.setAttribute('tabindex', '0');
      wrapper.setAttribute('aria-label', 'Reproducir video de YouTube');

      const img = document.createElement('img');
      img.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      img.alt = 'Miniatura del video';
      img.loading = 'lazy';

      const playBtn = document.createElement('div');
      playBtn.className = 'yt-play-btn';

      wrapper.appendChild(img);
      wrapper.appendChild(playBtn);

      const loadIframe = () => {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        iframe.allow = 'autoplay; encrypted-media';
        iframe.allowFullscreen = true;
        iframe.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:0;border-radius:10px;';
        wrapper.innerHTML = '';
        wrapper.appendChild(iframe);
      };

      wrapper.addEventListener('click', loadIframe);
      wrapper.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') loadIframe(); });

      p.replaceWith(wrapper);
    }
  });
}

/* ── 5. Tooltips del glosario ────────────────────────────── */
const GLOSARIO = {
  'drush': 'Dark Rush: ataque con milicia en Dark Age antes de subir de edad',
  'FC': 'Fast Castle: estrategia de subir a Castle Age rápido sin presión feudal',
  'MAA': 'Men-at-Arms: milicia mejorada disponible en Feudal Age',
  'smush': 'Explotar el pop cap del rival borrando casas con catapultas',
  'snipe': 'Matar un villager o unidad clave específica del oponente',
  'deer push': 'Empujar ciervos hacia el TC del rival para obligarlos a gastar comida',
  'lure boar': 'Atraer un jabalí al TC para matarlo y aprovechar su comida',
  'boom': 'Estrategia de expansión económica agresiva sin atacar early',
  'fast imp': 'Fast Imperial: subir a Imperial Age más rápido de lo normal',
  'scout rush': 'Presión temprana con scouts en Feudal Age',
  'archer rush': 'Presión con arqueros en Feudal Age',
  'flush': 'Ataque feudal agresivo (scouts o arqueros)',
  'timing attack': 'Ataque calculado para llegar con máxima fuerza en el peor momento para el rival',
  'all-in': 'Apuesta total: si el ataque falla, la economía no recupera',
  'idle TC': 'Town Center sin producir villagers — tiempo perdido crítico',
  'APM': 'Actions Per Minute: acciones por minuto, indicador de velocidad de juego',
  'micro': 'Micromanagement: control preciso de unidades individuales en combate',
  'macro': 'Macromanagement: gestión económica y de producción en paralelo al combate',
  'GG': 'Good Game: expresión de rendición o final de partida',
  'DM': 'Deathmatch: modo de juego con recursos infinitos',
  'RM': 'Random Map: modo estándar de juego competitivo',
  'TC': 'Town Center: centro urbano, edificio principal de producción de villagers',
  'UU': 'Unique Unit: unidad única de cada civilización, entrenada en el Castillo',
  'UT': 'Unique Tech: tecnología única de cada civilización',
};

function initGlossaryTooltips() {
  const content = document.querySelector('.sl-markdown-content');
  if (!content) return;

  // Solo procesar nodos de texto en párrafos y listas, no en code/pre
  const walker = document.createTreeWalker(
    content,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: node => {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName.toLowerCase();
        if (['code', 'pre', 'a', 'h1', 'h2', 'h3', 'h4'].includes(tag)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const terms = Object.keys(GLOSARIO).sort((a, b) => b.length - a.length);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    let text = node.textContent;
    let modified = false;
    const frag = document.createDocumentFragment();
    let remaining = text;

    terms.forEach(term => {
      if (!remaining.toLowerCase().includes(term.toLowerCase())) return;
      const regex = new RegExp(`\\b(${term})\\b`, 'i');
      if (regex.test(remaining)) {
        modified = true;
      }
    });

    if (!modified) return;

    // Procesar el primer término encontrado (evitar re-procesamiento)
    for (const term of terms) {
      const regex = new RegExp(`\\b(${term})\\b`, 'i');
      if (!regex.test(remaining)) continue;

      const parts = remaining.split(regex);
      remaining = '';
      parts.forEach((part, i) => {
        if (regex.test(part)) {
          const span = document.createElement('span');
          span.textContent = part;
          span.style.cssText = 'border-bottom: 1px dashed #d4a017; cursor: help; color: inherit;';
          span.title = GLOSARIO[term] || GLOSARIO[term.toLowerCase()];
          frag.appendChild(span);
        } else {
          frag.appendChild(document.createTextNode(part));
        }
      });
      node.parentNode.replaceChild(frag, node);
      break; // una sola pasada por nodo para evitar recursión infinita
    }
  });
}
