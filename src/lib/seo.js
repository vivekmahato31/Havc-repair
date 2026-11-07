export const siteUrl='https://txhvacrepair.com';
export function pageMeta(title,description,path='/'){return {title,description,canonical:`${siteUrl}${path}`};}
export const businessSchema={ '@context':'https://schema.org','@type':'HVACBusiness',name:'Texas HVAC Repair',url:siteUrl,email:'info@txhvacrepair.com',areaServed:['Dallas–Fort Worth','Arlington','Dallas County','Tarrant County'],sameAs:['https://www.facebook.com/texashvacrepair']};
