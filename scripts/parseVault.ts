import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VAULT_PATH = path.resolve(__dirname, '../vault');
const OUTPUT_PATH = path.resolve(__dirname, '../src/notes');
const ROUTE_FILE = path.resolve(__dirname, '../src/notes/routes.ts');
const WHITELIST = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../whitelist.config.json'), 'utf-8'));

const fileMap = new Map<string, string>(); // base name → relative path

function walkAndMap(dir: string, collected: string[]) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      walkAndMap(full, collected);
    } else if (file.endsWith('.md')) {
      collected.push(full);
      const relative = path.relative(VAULT_PATH, full);
      const baseName = path.basename(file, '.md');
      if (!fileMap.has(baseName)) {
        fileMap.set(baseName, relative);
      }
    }
  }
}

function resolveWhitelistPaths(): string[] {
  const result: string[] = [];

  for (const entry of WHITELIST) {
    const fullPath = path.join(VAULT_PATH, entry);
    if (fs.existsSync(fullPath)) {
      if (fs.statSync(fullPath).isDirectory()) {
        walkAndMap(fullPath, result);
      } else if (fullPath.endsWith('.md')) {
        result.push(fullPath);
        const baseName = path.basename(fullPath, '.md');
        fileMap.set(baseName, path.relative(VAULT_PATH, fullPath));
      }
    } else {
      console.warn(`⚠️  Whitelist entry does not exist: ${entry}`);
    }
  }

  return result;
}

function mdFileToSlug(mdPath: string) {
  return path
    .relative(VAULT_PATH, mdPath)
    .replace(/\.md$/, '')
    .replace(/ /g, '-');
}

function resolveWikilinkSlug(rawLink: string): string | null {
  if (rawLink.includes("/")) {
    // Absolute path (e.g. folder/note)
    const parts = rawLink.split("/").map((p) => p.replace(/ /g, '-'));
    const candidatePath = parts.join('/') + '.md';

    for (const [_, relPath] of fileMap.entries()) {
      if (relPath.replace(/ /g, '-') === candidatePath) {
        return relPath.replace(/\.md$/, '').replace(/ /g, '-');
      }
    }
  } else {
    // Basename match
    const matched = fileMap.get(rawLink);
    if (matched) {
      return matched.replace(/\.md$/, '').replace(/ /g, '-');
    }
  }

  return null; // not found
}

function parseMarkdown(content: string) {
  return content
    .replace(/^# (.*$)/gim, '<h1 className="text-3xl">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\[\[([^\|\]]+)(\|([^\]]+))?\]\]/g, (_, rawTarget: string, _pipe, displayText?: string) => {
      const target = rawTarget.trim();
      const display = (displayText || path.basename(target)).trim();
      const linkSlug = resolveWikilinkSlug(target);
      if (linkSlug) {
        return `<a className="text-blue-600 underline" href="/notes/${linkSlug}">${display}</a>`;
      } else {
        return `<span className="text-red-500">[[${rawTarget}${_pipe || ''}]]</span>`;
      }
    });
}

function generate() {
  const files = resolveWhitelistPaths();
  const routeEntries: string[] = [];
  const folders = new Map<string, { notes: string[]; subdirs: Set<string> }>();

  for (const mdPath of files) {
    const content = fs.readFileSync(mdPath, 'utf-8');
    const parsed = parseMarkdown(content);
    const slug = mdFileToSlug(mdPath);
    const outPath = path.join(OUTPUT_PATH, `${slug}.tsx`);
    const relVault = path.relative(VAULT_PATH, mdPath);
    const parentDir = path.dirname(relVault);

    fs.mkdirSync(path.dirname(outPath), { recursive: true });

    fs.writeFileSync(
      outPath,
      `
export default function Page() {
  return (
    <>
${parsed}
    </>
  );
}
`.trim()
    );

    routeEntries.push(
      `{ slug: "${slug}", component: React.lazy(() => import("@/notes/${slug}")) }`
    );

    if (!folders.has(parentDir)) {
      folders.set(parentDir, { notes: [], subdirs: new Set() });
    }
    folders.get(parentDir)!.notes.push(slug);
  }

  for (const dir of folders.keys()) {
    const parent = path.dirname(dir);
    if (!folders.has(parent)) {
      folders.set(parent, { notes: [], subdirs: new Set() });
    }
    folders.get(parent)!.subdirs.add(dir);
  }

  for (const [dir, { notes, subdirs }] of folders.entries()) {
    const indexPath = path.join(OUTPUT_PATH, dir, 'index.tsx');
    fs.mkdirSync(path.dirname(indexPath), { recursive: true });

    const noteLinks = notes.map(
      (n) => `<li><a className="text-blue-600 underline" href="/notes/${n}">${n.split('/').pop()}</a></li>`
    );
    const subdirLinks = [...subdirs].map(
      (d) => `<li><a className="text-blue-600 underline" href="/notes/${d}/">${path.basename(d)}</a></li>`
    );

    fs.writeFileSync(
      indexPath,
      `
export default function FolderIndex() {
  return (
    <div className="prose">
      <h1>Index of ${dir || 'vault'}</h1>
      ${subdirLinks.length > 0 ? `<h2>Folders</h2><ul>${subdirLinks.join('\n')}</ul>` : ''}
      ${noteLinks.length > 0 ? `<h2>Notes</h2><ul>${noteLinks.join('\n')}</ul>` : ''}
    </div>
  );
}
`.trim()
    );

    const slugPath = dir === '.' ? '' : `${dir.replace(/ /g, '-')}/`;
    const routeSlug = `${slugPath}`;
    
    routeEntries.push(
      `{ slug: "${routeSlug}", component: React.lazy(() => import("@/notes/${slugPath}")) }`
    );
  }

  const routesContent = `
import React from "react";

const routes = [
  ${routeEntries.join(',\n  ')}
];

export default routes;
`;

  fs.writeFileSync(ROUTE_FILE, routesContent.trim());
  console.log(`✅ Generated ${files.length} notes and ${folders.size} index pages → ${ROUTE_FILE}`);
}

generate();