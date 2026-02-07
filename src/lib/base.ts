/** Base path for the site (e.g. '' or '/new_blog_2026'). Used for GitHub Pages subpath. */
export const BASE_URL = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '') || '';
