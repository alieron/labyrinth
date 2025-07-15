export function trimRelPath(str: string | undefined): string | undefined {
  return str && str
    .replace(/^(content\/)/, "") // Trim content directory
    .replace(/(\.md)$/, ""); // Trim .md extension
}

export function toSlug(str: string): string {
  return str
    .trim()
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .replace(/[\u0000-\u001F\u007F]+/g, '') // Remove control characters
    // .replace(/[^\w\-&³]/g, '') // Optional: remove unwanted characters
    .replace(/-{2,}/g, '-'); // Collapse multiple dashes
}