/** Prefix an internal path with the configured base path (GitHub Pages safe). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

/** Count words the way the content checker does. */
export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/** Strip Markdown syntax from a body to estimate reading time. */
export function readingMinutes(markdown = ''): number {
  const plain = markdown
    .replace(/^#{1,6}\s.*$/gm, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`>]/g, '');
  return Math.max(1, Math.ceil(countWords(plain) / 225));
}
