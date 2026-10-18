// The production domain is not decided yet (#6). NEXT_PUBLIC_SITE_URL overrides;
// on Vercel the production URL is provided at build time; locally it is localhost.
function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const siteUrl = new URL(resolveSiteUrl());

export const siteName = "Santtu Kumpulainen";
export const siteRole = "Software Development Student";
export const siteTitle = `${siteName} | ${siteRole}`;
export const siteDescription =
  "Portfolio of a final-year software development student interested in application development, backend systems, networking and infrastructure.";
