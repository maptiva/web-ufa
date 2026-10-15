// Optimiza las fotos originales (JPG) a WebP para la galería.
// Uso: node scripts/optimizar-galeria.mjs
// Lee de: ../imagenes/fotos marisa trabajando/*.jpg (fuera del repo)
// Escribe en: src/assets/galeria/*.webp (máx 1200px, calidad 78)
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, '..', 'imagenes', 'fotos marisa trabajando');
const outDir = join(root, 'src', 'assets', 'galeria');

await mkdir(outDir, { recursive: true });
const files = (await readdir(srcDir))
  .filter((f) => /\.jpe?g$/i.test(f))
  .sort();

let totalIn = 0;
for (const f of files) {
  const name = f.replace(/\.[^.]+$/, '');
  const inp = join(srcDir, f);
  const out = join(outDir, `${name}.webp`);
  const metaIn = await sharp(inp).metadata();
  totalIn += metaIn.size ?? 0;
  await sharp(inp)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(out);
  console.log(`${f} -> ${name}.webp`);
}
console.log(`OK: ${files.length} fotos (${Math.round(totalIn / 1024)} KB originales)`);
