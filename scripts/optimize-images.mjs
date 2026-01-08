import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC_DIR = './public';
const TARGET_QUALITY = 80;
const MAX_WIDTH = 1920;

async function optimizeImages() {
  console.log('Starting image optimization...\n');

  const files = await readdir(PUBLIC_DIR);
  const imageFiles = files.filter(file =>
    ['.jpg', '.jpeg', '.png'].includes(extname(file).toLowerCase())
  );

  for (const file of imageFiles) {
    const filePath = join(PUBLIC_DIR, file);
    const tempPath = join(PUBLIC_DIR, `_temp_${file}`);
    const stats = await stat(filePath);
    const originalSize = stats.size;

    // Skip small files (under 50KB)
    if (originalSize < 50 * 1024) {
      console.log(`Skipping ${file} (already small: ${(originalSize / 1024).toFixed(1)}KB)`);
      continue;
    }

    try {
      const image = sharp(filePath);
      const metadata = await image.metadata();

      let pipeline = sharp(filePath); // Create fresh pipeline

      // Resize if too wide
      if (metadata.width && metadata.width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
      }

      // Optimize based on format
      if (extname(file).toLowerCase() === '.png') {
        await pipeline.png({ quality: TARGET_QUALITY, compressionLevel: 9 }).toFile(tempPath);
      } else {
        await pipeline.jpeg({ quality: TARGET_QUALITY, mozjpeg: true }).toFile(tempPath);
      }

      const newStats = await stat(tempPath);
      const newSize = newStats.size;

      // Only replace if smaller
      if (newSize < originalSize) {
        await unlink(filePath);
        await rename(tempPath, filePath);
        const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
        console.log(`✓ ${file}: ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
      } else {
        await unlink(tempPath);
        console.log(`○ ${file}: Already optimized (${(originalSize / 1024).toFixed(1)}KB)`);
      }
    } catch (err) {
      console.error(`✗ Error optimizing ${file}:`, err.message);
      // Clean up temp file if exists
      try {
        await unlink(tempPath);
      } catch {}
    }
  }

  console.log('\nImage optimization complete!');
}

optimizeImages().catch(console.error);
