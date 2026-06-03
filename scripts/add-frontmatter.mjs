/**
 * add-frontmatter.mjs
 * Agrega frontmatter de Starlight a todos los .md que no lo tengan.
 * Uso: node scripts/add-frontmatter.mjs (desde la raíz de aoe2-sitio/)
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DOCS_DIR = join(__dirname, '..', 'src', 'content', 'docs');

const FOLDER_META = {
  '00-fundamentos':      { order: 1 },
  '01-nivel-basico':     { order: 2 },
  '02-nivel-intermedio': { order: 3 },
  '03-nivel-avanzado':   { order: 4 },
  '04-nivel-experto':    { order: 5 },
  'civilizaciones':      { order: 6 },
  'unidades-y-contras':  { order: 7 },
  'tecnologias':         { order: 8 },
  'recursos':            { order: 9 },
};

function slugToTitle(slug) {
  return slug.replace(/^\d+-/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function extractH1(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function extractDescription(content) {
  const lines = content.split('\n');
  for (const line of lines) {
    const t = line.trim();
    if (t && !t.startsWith('#') && !t.startsWith('!') && !t.startsWith('|') && !t.startsWith('>') && t.length > 20) {
      return t.substring(0, 150).replace(/[*_`[\]]/g, '') + (t.length > 150 ? '…' : '');
    }
  }
  return 'Curso de Age of Empires II DE';
}

function processFile(filePath, folderName) {
  let content = readFileSync(filePath, 'utf8');
  if (content.startsWith('---')) return;

  const fileName = basename(filePath, '.md');
  const h1 = extractH1(content);
  const title = (h1 || slugToTitle(fileName)).replace(/"/g, "'");
  const bodyWithoutH1 = h1 ? content.replace(/^#\s+.+\n(\n)?/, '') : content;
  const description = extractDescription(bodyWithoutH1).replace(/"/g, "'");
  const orderMatch = fileName.match(/^(\d+)/);
  const fileOrder = orderMatch ? parseInt(orderMatch[1]) : 50;

  const fm = `---\ntitle: "${title}"\ndescription: "${description}"\nsidebar:\n  order: ${fileOrder}\n---\n\n`;

  writeFileSync(filePath, fm + bodyWithoutH1, 'utf8');
  console.log(`✓ ${folderName}/${fileName}`);
}

function walkDir(dir, folderName) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      walkDir(fullPath, entry);
    } else if (entry.endsWith('.md')) {
      processFile(fullPath, folderName);
    }
  }
}

console.log('Procesando archivos en:', DOCS_DIR, '\n');
walkDir(DOCS_DIR, 'root');
console.log('\n✅ Frontmatter agregado.');
