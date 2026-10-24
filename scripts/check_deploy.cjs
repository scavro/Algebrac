const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'dist');
const config = JSON.parse(fs.readFileSync(path.join(root, 'wrangler.jsonc'), 'utf8'));
assert.equal(config.assets.directory, './dist');
assert.equal(config.main, undefined, 'El despliegue solo sirve archivos estáticos.');
assert.equal(config.assets.run_worker_first, undefined);
const files = [];
function visit(dir = '') {
  for (const entry of fs.readdirSync(path.join(out, dir), { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const relative = path.join(dir, entry.name);
    if (entry.isDirectory()) visit(relative); else files.push(relative);
  }
}
visit();
const digest = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
for (const file of files) {
  assert.match(file, /^(index\.html|assets\/|materiales\/|revision\/auditoria-fuentes\.md$)/);
  assert.equal(digest(path.join(out, file)), digest(path.join(root, file)), file);
  assert(fs.statSync(path.join(out, file)).size <= 25 * 1024 * 1024, file);
}
for (const forbidden of ['.git', 'node_modules', 'scripts', '.env', 'README.md'])
  assert(!fs.existsSync(path.join(out, forbidden)), 'No publicar: ' + forbidden);
const html = fs.readFileSync(path.join(out, 'index.html'), 'utf8');
for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const resource = match[1];
  if (resource.startsWith('#') || /^https?:/.test(resource)) continue;
  assert(fs.existsSync(path.join(out, decodeURI(resource))), resource);
}
const css = fs.readFileSync(path.join(out, 'assets/vendor/katex/katex.min.css'), 'utf8');
for (const match of css.matchAll(/url\(([^)]+)\)/g))
  assert(fs.existsSync(path.join(out, 'assets/vendor/katex', match[1])), match[1]);
assert(files.length < 20000);
console.log(`Despliegue estático comprobado: ${files.length} archivos idénticos a sus originales; recursos y fuentes presentes.`);
