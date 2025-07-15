export const BASE = "labyrinth";

export function resolveBase(path: string): string {
  return `/${BASE}/${path}`.replace(/\/\/+/g, '/');
}