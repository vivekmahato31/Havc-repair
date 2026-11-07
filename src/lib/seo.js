// Preview deployments use their own URL and are noindexed until the owner approves launch.
// Set VITE_SITE_URL to the final domain and VITE_ALLOW_INDEXING=true at launch.
export const siteUrl=(import.meta.env.VITE_SITE_URL||'https://havc-repair-jg2h.vercel.app').replace(/\/$/,'');
export const allowIndexing=import.meta.env.VITE_ALLOW_INDEXING==='true';
export function pageMeta(title,description,path='/'){return {title,description,canonical:`${siteUrl}${path}`};}
export const businessSchema={ '@context':'https://schema.org','@type':'HVACBusiness',name:'Texas HVAC Repair',url:siteUrl,email:'info@txhvacrepair.com',telephone:'+18172600888',areaServed:['Dallas–Fort Worth','Arlington','Dallas County','Tarrant County'],sameAs:['https://www.facebook.com/texashvacrepair']};
