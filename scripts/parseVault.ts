import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const VAULT_PATH = path.resolve(__dirname, '../vault');
const OUTPUT_PATH = path.resolve(__dirname, '../src/notes');
const ROUTE_FILE = path.resolve(__dirname, '../src/notes/routes.ts');
const WHITELIST = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../whitelist.config.json'), 'utf-8'));

function resolveWhitelistPaths(): string[] {
  const result: string[] = [];

  for (const entry of WHITELIST) {
    const fullPath = path.join(VAULT_PATH, entry);
    if (fs.existsSync(fullPath)) {
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath, result);
      } else if (fullPath.endsWith('.md')) {
        result.push(fullPath);
      }
    } else {
      console.warn(`⚠️  Whitelist entry does not exist: ${entry}`);
    }
  }

  return result;
}

function walk(dir: string, files: string[]) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      walk(full, files);
    } else if (file.endsWith('.md')) {
      files.push(full);
    }
  }
}

function parseMarkdown(content: string) {
  return content
    .replace(/^# (.*$)/gim, '<h1 className="text-3xl">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\[\[(.*?)\]\]/gim, (_, p1) => {
      const slug = p1.replace(/\.md$/, '').replace(/ /g, '-');
      return `<a href="/${slug}">${p1}</a>`;
    });
}

function mdFileToSlug(mdPath: string) {
  return path
    .relative(VAULT_PATH, mdPath)
    .replace(/\.md$/, '')
    .replace(/ /g, '-');
}

function generate() {
  const files = resolveWhitelistPaths();
  const routeEntries: string[] = [];

  for (const mdPath of files) {
    const content = fs.readFileSync(mdPath, 'utf-8');
    const parsed = parseMarkdown(content);
    const slug = mdFileToSlug(mdPath);
    const outPath = path.join(OUTPUT_PATH, `${slug}.tsx`);

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
  }

  const routesContent = `
import React from "react";

const routes = [
  ${routeEntries.join(',\n  ')}
];

export default routes;
`;

  fs.writeFileSync(ROUTE_FILE, routesContent.trim());
  console.log(`✅ Generated ${files.length} routes to ${ROUTE_FILE}`);
}

generate();