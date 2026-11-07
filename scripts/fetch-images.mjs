// Downloads the existing site's images (owner's own assets) into public/images/original.
// Run locally: npm run fetch-images   (requires Node 18+ and internet access)
import fs from 'node:fs';import path from 'node:path';
const base1='https://txhvacrepair.com/wp-content/uploads/',base2='https://txheatingair.com/wp-content/uploads/';
const files={
 'logo-main.png':base2+'2021/09/Website_Logo-Alpha.png',
 'icon-texas.png':base1+'2021/09/cropped-Texas_Icon-Transparent-270x270.png',
 'icon-mobile.png':base2+'2021/09/Texas_Icon-Mobile.png',
 'logo-alt.png':base2+'2021/09/HVAC-Logo-Transparent-1.png',
 'tech-stock.png':base1+'2022/06/HVAC_Stock_Tech_for_Home_Page-removebg-preview.png',
 'residential-ac.jpg':base1+'2021/09/Texas-HVAC-Repair-Residential-AC.jpg',
 'quality-service.jpg':base2+'2021/09/Quality-Service.jpg',
 'quality-parts.jpg':base2+'2021/09/Quality-Parts.jpg',
 'services-heating.jpg':base2+'2021/09/Services-Heating.jpg',
 'services-ac.jpg':base2+'2021/09/Services-AC.jpg',
 'services-leak-repair.jpg':base2+'2021/09/Services-Leak-Repair.jpg'};
const out=path.join(process.cwd(),'public','images','original');fs.mkdirSync(out,{recursive:true});
for(const [name,url] of Object.entries(files)){try{const r=await fetch(url);if(!r.ok)throw Error(r.status);fs.writeFileSync(path.join(out,name),Buffer.from(await r.arrayBuffer()));console.log('ok  ',name);}catch(e){console.log('FAIL',name,url,String(e.message||e));}}
