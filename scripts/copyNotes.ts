import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VAULT_PATH = path.resolve(__dirname, '../vault'); // symlinked vault
const OUTPUT_PATH = path.resolve(__dirname, '../content');
const WHITELIST_FILE = path.resolve(__dirname, '../whitelist.config.json');

// Read whitelist
const WHITELIST: string[] = JSON.parse(fs.readFileSync(WHITELIST_FILE, 'utf-8'));

// Ensure output directory exists
fs.rmSync(OUTPUT_PATH, { recursive: true, force: true });
fs.mkdirSync(OUTPUT_PATH, { recursive: true });

// Recursively walk directories and copy `.md` files
function walkAndCopy(src: string, base: string) {
  for (const file of fs.readdirSync(src)) {
    const full = path.join(src, file);
    const relative = path.relative(base, full);
    const dest = path.join(OUTPUT_PATH, relative);

    if (fs.statSync(full).isDirectory()) {
      fs.mkdirSync(dest, { recursive: true });
      walkAndCopy(full, base);
    } else if (file.endsWith('.md')) {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(full, dest);
      console.log(`📄 Copied: ${relative}`);
    }
  }
}

// Copy entries from whitelist
for (const entry of WHITELIST) {
  const fullPath = path.join(VAULT_PATH, entry);
  if (!fs.existsSync(fullPath)) {
    console.warn(`⚠️  Skipping non-existent: ${entry}`);
    continue;
  }

  if (fs.statSync(fullPath).isDirectory()) {
    walkAndCopy(fullPath, VAULT_PATH);
  } else if (entry.endsWith('.md')) {
    const dest = path.join(OUTPUT_PATH, entry);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(fullPath, dest);
    console.log(`📄 Copied: ${entry}`);
  }
}

console.log('✅ Whitelisted notes copied.');