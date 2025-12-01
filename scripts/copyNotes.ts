import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ignore from 'ignore';
import { toSlug } from '../src/utils/slug';
import { resolveBase } from '../src/utils/resolve';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VAULT_PATH = path.resolve(__dirname, '../vault'); // symlinked vault
const OUTPUT_PATH = path.resolve(__dirname, '../content'); // output directory for astro content
const ASSET_OUTPUT_PATH = path.resolve(__dirname, '../public/assets'); // output directory for embedded images
const INCLUDE_FILE = path.resolve(__dirname, '../content.include'); // include file

// Read whitelist
const INCLUDE: ignore.Ignore = ignore().add(fs.readFileSync(INCLUDE_FILE, 'utf-8'));
const NOTE_MAP: Map<string, string> = new Map(); // file name => relative path
const FILE_LIST: { full: string, relative: string, dest: string }[] = [];
const ASSET_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];

// Ensure output directory exists
fs.rmSync(OUTPUT_PATH, { recursive: true, force: true });
fs.mkdirSync(OUTPUT_PATH, { recursive: true });
fs.rmSync(ASSET_OUTPUT_PATH, { recursive: true, force: true });
fs.mkdirSync(ASSET_OUTPUT_PATH, { recursive: true });

// Recursively walk directories and collect .md files if they are in the include file
function walkWithInclude(root: string) {
  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      const relative = path.relative(root, full).replace(/\\/g, '/');

      const relativeForMatch = entry.isDirectory() ? relative + '/' : relative;

      const included = INCLUDE.ignores(relativeForMatch);

      if (entry.isDirectory()) {
        walk(full);
        continue;
      }

      // only accept included markdown files
      if (
        included &&
        entry.isFile() &&
        relative.endsWith('.md') &&
        !/^[~_]/.test(entry.name)
      ) {
        const dest = path.join(OUTPUT_PATH, relative);
        FILE_LIST.push({ full, relative, dest });
      }
    }
  }

  walk(root);
}

function toResolvedLink(filePath: string | undefined, alias: string | undefined, heading: string | undefined) {
  if (!filePath) {
    return `[${alias ?? heading ?? ''}](#${heading})`;
  } else {
    const noteName = path.basename(filePath);
    const endpoint = NOTE_MAP.get(filePath) ?? NOTE_MAP.get(noteName);
    let href = endpoint ? resolveBase(`/notes/${endpoint}`) : '#'; // Handle absent notes
    let displayText = alias ?? (filePath ? `${filePath}${heading ? ` > ${heading}` : ''}` : heading);
    if (heading) href += `#${toSlug(heading)}`;
    return `[${displayText}](${href})`;
  }
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
        console.log(`🖼️ Copied asset: ${filename}`);
        found = true;
        return;
      }
    }
  }

  walkAndCopyAsset(VAULT_PATH);

  if (!found) {
    console.warn(`⚠️ Asset not found: ${filename}`);
  }
}

function resolveLinks(content: string): string {
  const wikilinkRegex = /(?<!\!)\[\[([^|\]#]*?)(?:#([^\]|\\]*))?(?:\\?)(?:\|([^\]]+))?\]\]/g;
  const standardLinkRegex = /\[([^\[]+?)\]\(([^)#]+?)(?:\.md)?(?:#([^\)]+))\)/g;

  // Convert standard markdown links
  content = content.replace(standardLinkRegex, (match, alias, filePath, heading) => {
    if (/^https?:\/\//.test(filePath)) {
      return match;
    } else {
      return toResolvedLink(filePath, alias, heading);
    }
  });

  // Convert wikilinks
  content = content.replace(wikilinkRegex, (_, filePath, heading, alias) => toResolvedLink(filePath, alias, heading));

  return content;
}

function extractNavLinks(content: string): string {
  let prev: string | undefined;
  let next: string | undefined;

  content = content.replace(/\[Previous\]\((.+?)\)/, (_, link) => {
    if (link && link !== '#') prev = link;
    return '';
  });

  content = content.replace(/\[Next\]\((.+?)\)/, (_, link) => {
    if (link && link !== '#') next = link;
    return '';
  });

  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n/);
  let newFrontmatter: string;
  if (frontmatterMatch) {
    newFrontmatter = frontmatterMatch[1];

    if (newFrontmatter.match("\nprev:")) {
      newFrontmatter = newFrontmatter.replace(/^prev: "\[.*\]\((.*)\)"\n?/m, 'prev: $1\n');
    } else if (prev) {
      newFrontmatter += `\nprev: ${prev}`;
    }

    if (newFrontmatter.match("\nnext:")) {
      newFrontmatter = newFrontmatter.replace(/^next: "\[.*\]\((.*)\)"\n?/m, 'next: $1\n');
    } else if (next) {
      newFrontmatter += `\nnext: ${next}`;
    }

    newFrontmatter = newFrontmatter;
    content = content.replace(/^---\n[\s\S]*?\n---\n/, '');
  } else {
    newFrontmatter = `${prev ? `prev: ${prev}` : ''}\n${next ? `next: ${next}` : ''}`.trim();
  }

  return `---\n${newFrontmatter}\n---\n${content}`;
}

// Step 1: Walk and collect all markdown files from include file
walkWithInclude(VAULT_PATH);

// Step 2: Build NOTE_MAP
for (const { relative } of FILE_LIST) {
  const key = path.basename(relative, '.md');
  const value = toSlug(relative.replace(/\\/g, '/').replace(/\.md$/, '')) ?? '';
  NOTE_MAP.set(key, value);
}

// Step 3: Copy and transform markdown files
for (const { full, relative, dest } of FILE_LIST) {
  const content = fs.readFileSync(full, 'utf-8');

  // Detect embedded images and copy assets
  const imageRegex = /!\[\[([^|\\\]]+)/g;
  let match: RegExpExecArray | null;
  while ((match = imageRegex.exec(content)) !== null) {
    copyAssetIfExists(match[1]);
  }

  const resolvedContent = resolveLinks(content);
  const finalContent = extractNavLinks(resolvedContent);

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, finalContent, 'utf-8');
  console.log(`📄 Processed and copied: ${relative}`);
}

console.log('✅ Included notes copied and links resolved.');
