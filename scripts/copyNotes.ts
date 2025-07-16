import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { toSlug } from '../src/utils/slug';
import { resolveBase } from '../src/utils/resolve';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VAULT_PATH = path.resolve(__dirname, '../vault'); // symlinked vault
const OUTPUT_PATH = path.resolve(__dirname, '../content'); // output directory for astro content
const ASSET_OUTPUT_PATH = path.resolve(__dirname, '../public/assets'); // output directory for embedded images
const WHITELIST_FILE = path.resolve(__dirname, '../whitelist.config.json');

// Read whitelist
const WHITELIST: string[] = JSON.parse(fs.readFileSync(WHITELIST_FILE, 'utf-8'));
const NOTE_MAP: Map<string, string> = new Map(); // file name => relative path
const FILE_LIST: { full: string, relative: string, dest: string }[] = [];
const ASSET_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];

// Ensure output directory exists
fs.rmSync(OUTPUT_PATH, { recursive: true, force: true });
fs.mkdirSync(OUTPUT_PATH, { recursive: true });
fs.rmSync(ASSET_OUTPUT_PATH, { recursive: true, force: true });
fs.mkdirSync(ASSET_OUTPUT_PATH, { recursive: true });

// Recursively walk directories and collect `.md` files
function walkVault(src: string, base: string) {
  for (const file of fs.readdirSync(src)) {
    const full = path.join(src, file);
    const relative = path.relative(base, full);
    const dest = path.join(OUTPUT_PATH, relative);

    if (fs.statSync(full).isDirectory()) {
      walkVault(full, base);
    } else if (file.endsWith('.md') && !(/^[~_]/.test(file))) {
      FILE_LIST.push({ full, relative, dest });
    }
  }
}

function toResolvedLink(filePath: string, alias?: string, heading?: string) {
  const pageName = path.basename(filePath);
  let href = resolveBase(`/notes/${NOTE_MAP.get(filePath) ?? NOTE_MAP.get(pageName)}`);
  let displayText = alias ?? `${pageName}${heading ? ` > ${heading}` : ''}`;
  if (heading) href += `#${toSlug(heading)}`;
  return `[${displayText}](${href})`;
}

function copyAssetIfExists(filename: string) {
  let found = false;

  function walkAndCopyAsset(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        walkAndCopyAsset(fullPath);
      } else if (
        entry.isFile() &&
        path.basename(entry.name) === filename &&
        ASSET_EXTENSIONS.includes(path.extname(filename).toLowerCase())
      ) {
        const dest = path.join(ASSET_OUTPUT_PATH, filename);
        fs.copyFileSync(fullPath, dest);
        console.log(`🖼️  Copied asset: ${filename}`);
        found = true;
        return;
      }
    }
  }

  walkAndCopyAsset(VAULT_PATH);

  if (!found) {
    console.warn(`⚠️  Asset not found: ${filename}`);
  }
}

function resolveLinks(content: string): string {
  const wikilinkRegex = /(?<!\!)\[\[([^\]|#]+?)(?:\.md)?(?:#([^\]|]+))?(?:\|([^\]]+))?\]\]/g;
  const standardLinkRegex = /\[(.+?)\]\(([^)#]+?)(?:\.md)?(?:#([^\)]+))?\)/g;
  const imageEmbedRegex = /!\[\[([^|\]]+)(?:\|(\d*)(?:x(\d*))?)?\]\]/g;

  // Convert standard markdown links
  content = content.replace(standardLinkRegex, (match, alias, filePath, heading) => {
    if (!filePath.includes('http')) {
      return toResolvedLink(filePath, alias, heading);
    } else {
      return match;
    }
  });

  // Convert wikilinks
  content = content.replace(wikilinkRegex, (_, filePath, heading, alias) => toResolvedLink(filePath, alias, heading));

  // Convert image embeds
  content = content.replace(imageEmbedRegex, (_, name, width, height) => {
    const assetPath = resolveBase(`/assets/${name}`);
    let dimensionProps = width ? ` width=\"${width}\"` : '';
    dimensionProps += height ? `  height=\"${height}\"` : '';
    return `<img src="${assetPath}" alt="${name}" class="mx-auto object-fill" style="${width ? `width:${width}px;${height ? `aspect-ratio:${width}/${height}` : '' }` : ''}" />`
  });

  return content;
}

// Step 1: Walk and collect all markdown files from whitelist
for (const entry of WHITELIST) {
  const fullPath = path.join(VAULT_PATH, entry);
  if (!fs.existsSync(fullPath)) {
    console.warn(`⚠️  Skipping non-existent: ${entry}`);
    continue;
  }

  if (fs.statSync(fullPath).isDirectory()) {
    walkVault(fullPath, VAULT_PATH);
  } else if (entry.endsWith('.md')) {
    const relative = path.relative(VAULT_PATH, fullPath);
    const dest = path.join(OUTPUT_PATH, relative);
    FILE_LIST.push({ full: fullPath, relative, dest });
  }
}

// Step 2: Build NOTE_MAP
for (const { relative } of FILE_LIST) {
  const key = path.basename(relative, '.md');
  const value = toSlug(relative.replace(/\\/g, '/').replace(/\.md$/, ''));
  NOTE_MAP.set(key, value);
}

// Step 3: Copy and transform markdown files
for (const { full, relative, dest } of FILE_LIST) {
  const content = fs.readFileSync(full, 'utf-8');

  // Detect embedded images and copy assets
  const imageRegex = /!\[\[([^|\]]+)/g;
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    copyAssetIfExists(match[1]);
  }

  const processed = resolveLinks(content);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, processed, 'utf-8');
  console.log(`📄 Processed and copied: ${relative}`);
}

console.log('✅ Whitelisted notes copied and links resolved.');