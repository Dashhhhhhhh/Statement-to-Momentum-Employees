/** React Router basename: leading slash, no trailing slash (Vite adds trailing slash to BASE_URL). */
export function routerBasename(): string | undefined {
  const raw = import.meta.env.BASE_URL
  const trimmed = raw.replace(/\/$/, '')
  return trimmed === '' ? undefined : trimmed
}
