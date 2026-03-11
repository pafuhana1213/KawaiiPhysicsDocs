import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, basename, extname } from 'path';

const SKIP_FILES = ['wind-noise-on.gif', 'move-scale-on.gif'];
const MIN_SIZE = 100 * 1024; // 100KB

const dirs = ['static/img', 'static/img/features'];

async function convertGifs() {
  let totalOriginal = 0;
  let totalConverted = 0;
  let count = 0;

  for (const dir of dirs) {
    let files;
    try {
      files = await readdir(dir);
    } catch {
      console.log(`Skipping ${dir} (not found)`);
      continue;
    }

    const gifs = files.filter(
      (f) => extname(f).toLowerCase() === '.gif' && !SKIP_FILES.includes(f)
    );

    for (const gif of gifs) {
      const inputPath = join(dir, gif);
      const outputPath = join(dir, basename(gif, '.gif') + '.webp');

      const { size: originalSize } = await stat(inputPath);
      if (originalSize < MIN_SIZE) {
        console.log(`Skipping ${inputPath} (${(originalSize / 1024).toFixed(0)}KB < 100KB)`);
        continue;
      }

      console.log(`Converting ${inputPath} (${(originalSize / 1024 / 1024).toFixed(1)}MB)...`);

      await sharp(inputPath, { animated: true })
        .webp({ quality: 75 })
        .toFile(outputPath);

      const { size: newSize } = await stat(outputPath);
      const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);

      console.log(
        `  → ${outputPath} (${(newSize / 1024 / 1024).toFixed(1)}MB, -${reduction}%)`
      );

      totalOriginal += originalSize;
      totalConverted += newSize;
      count++;
    }
  }

  console.log(`\nConverted ${count} files`);
  console.log(
    `Total: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB → ${(totalConverted / 1024 / 1024).toFixed(1)}MB (saved ${((totalOriginal - totalConverted) / 1024 / 1024).toFixed(1)}MB)`
  );
}

convertGifs().catch((err) => {
  console.error(err);
  process.exit(1);
});
