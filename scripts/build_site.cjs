// Empaquetado estático: no genera contenido ni modifica los originales.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'dist');
const marker = '.algebrac-generated';
const markerText = 'Generado por scripts/build_site.cjs\n';
const files = ['index.html', 'revision/auditoria-fuentes.md'];
const materials = [
  'Algebra_IA (1).pdf', 'Ejercicios_Tema_I.pdf',
  'Libro_AlgebraParaIngenieros_2a_edicion_junio2014 (1).pdf',
  'EjerciciosdeAlgebraParaIngenieros2edicion2014.pdf',
  'Calendario (1).png', 'Calificaciones.txt'
];
files.push(...materials.map(name => 'materiales/' + name));
function collect(dir) {
  for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const relative = dir + '/' + entry.name;
    if (entry.isSymbolicLink()) throw Error('No se publican enlaces simbólicos: ' + relative);
    if (entry.isDirectory()) collect(relative);
    else if (entry.isFile()) files.push(relative);
  }
}
collect('assets');
for (const relative of files) {
  const info = fs.lstatSync(path.join(root, relative));
  if (!info.isFile() || info.isSymbolicLink()) throw Error('Recurso no válido: ' + relative);
  if (info.size > 25 * 1024 * 1024) throw Error('Supera 25 MiB: ' + relative);
}
if (files.length > 20000) throw Error('Se supera el límite de archivos del plan gratuito.');
if (fs.existsSync(out)) {
  const existingMarker = path.join(out, marker);
  if (fs.lstatSync(out).isSymbolicLink() || !fs.existsSync(existingMarker) ||
      fs.readFileSync(existingMarker, 'utf8') !== markerText) {
    throw Error('dist ya existe y no lo creó este script. Se conserva sin modificar.');
  }
  fs.rmSync(out, { recursive: true });
}
fs.mkdirSync(out);
fs.writeFileSync(path.join(out, marker), markerText);
fs.writeFileSync(path.join(out, '.assetsignore'), marker + '\n.assetsignore\n');
let bytes = 0, largest = { file: '', bytes: 0 };
for (const relative of files) {
  const destination = path.join(out, relative);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(path.join(root, relative), destination);
  const size = fs.statSync(destination).size;
  bytes += size;
  if (size > largest.bytes) largest = { file: relative, bytes: size };
}
console.log(JSON.stringify({ directory: 'dist', files: files.length, bytes, largest }, null, 2));
