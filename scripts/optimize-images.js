const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGE_QUALITY = 80;
const MAX_WIDTH = 1920;

async function optimizeImage(inputPath, outputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Resize if image is too large
    if (metadata.width > MAX_WIDTH) {
      image.resize(MAX_WIDTH, null, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    // Optimize based on file type
    if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
      await image
        .jpeg({ quality: IMAGE_QUALITY, mozjpeg: true })
        .toFile(outputPath);
    } else if (metadata.format === 'png') {
      await image
        .png({ quality: IMAGE_QUALITY, compressionLevel: 9 })
        .toFile(outputPath);
    } else {
      // For other formats, just copy the file
      await fs.promises.copyFile(inputPath, outputPath);
    }

    console.log(`Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

async function processDirectory(dir) {
  const files = await fs.promises.readdir(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = await fs.promises.stat(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
      const outputPath = path.join(dir, `optimized_${file}`);
      await optimizeImage(fullPath, outputPath);
    }
  }
}

// Create optimized directory if it doesn't exist
const OPTIMIZED_DIR = path.join(PUBLIC_DIR, 'images/optimized');
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

// Process all images in the public directory
processDirectory(path.join(PUBLIC_DIR, 'images'))
  .then(() => console.log('Image optimization complete!'))
  .catch(error => console.error('Error during optimization:', error)); 