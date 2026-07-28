import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Using dynamic import so we don't fail if sharp isn't installed yet
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function optimizeImages() {
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch (err) {
    console.error('Please install sharp: npm install sharp');
    process.exit(1);
  }

  const dirsToOptimize = [
    path.join(__dirname, 'public/2026.07.16-20260612T100209Z-3-001/my'),
    path.join(__dirname, 'public')
  ];

  for (const dir of dirsToOptimize) {
    try {
      const files = await fs.readdir(dir);
      for (const file of files) {
        if (!file.toLowerCase().endsWith('.jpg') && !file.toLowerCase().endsWith('.jpeg') && !file.toLowerCase().endsWith('.png')) {
          continue;
        }

        const filePath = path.join(dir, file);
        const stats = await fs.stat(filePath);
        
        // Skip if less than 1MB
        if (stats.size < 1024 * 1024) continue;

        console.log(`Optimizing ${file} (${(stats.size / 1024 / 1024).toFixed(2)} MB)...`);
        
        const tempPath = filePath + '.tmp';
        
        try {
          await sharp(filePath)
            .resize({ width: 1920, withoutEnlargement: true }) // resize to max 1920px width
            .jpeg({ quality: 75, progressive: true }) // optimize jpeg
            .toFile(tempPath);
            
          await fs.rename(tempPath, filePath);
          
          const newStats = await fs.stat(filePath);
          console.log(`  -> Done. New size: ${(newStats.size / 1024 / 1024).toFixed(2)} MB`);
        } catch (err) {
          console.error(`  -> Failed to optimize ${file}:`, err.message);
          // clean up temp file if exists
          try { await fs.unlink(tempPath); } catch (e) {}
        }
      }
    } catch (err) {
      if (err.code !== 'ENOTDIR' && err.code !== 'ENOENT') {
         console.error(`Error reading ${dir}:`, err);
      }
    }
  }
}

optimizeImages();
