const fs = require('fs-extra');
const path = require('path');

async function build() {
  const src = path.resolve(__dirname);
  const out = path.resolve(__dirname, 'dist');

  // Remove existing dist and recreate
  await fs.remove(out);
  await fs.mkdirp(out);

  const exclude = new Set(['node_modules', '.git', '.github', 'dist', 'package-lock.json', 'package.json']);

  // Copy each top-level entry (file or folder) except excluded ones.
  const entries = await fs.readdir(src);
  for (const name of entries) {
    if (exclude.has(name)) continue;
    const srcPath = path.join(src, name);
    const destPath = path.join(out, name);
    await fs.copy(srcPath, destPath);
  }

  // Prevent GitHub Pages from ignoring files that start with underscore
  await fs.ensureFile(path.join(out, '.nojekyll'));
  console.log('Build complete — output in', out);
}

build().catch(err => { console.error(err); process.exit(1); });
