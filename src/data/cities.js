// City lists follow the existing company website. Local paragraphs are intentionally generic;
// add real, owner-supplied local detail before launch to avoid thin or duplicated city pages.
const dallas=['Dallas','Euless','Allen','Irving','McKinney','Grand Prairie','Plano','Cedar Hill','Richardson','DeSoto','Lancaster','Carrollton','Garland','Frisco'];
const fortWorth=['Fort Worth','Saginaw','Hurst','North Richland Hills','Bedford','Grapevine','Southlake','Weatherford','Northlake','Flower Mound'];
const tarrant=['Lewisville','Kennedale','Mansfield','Crowley','Burleson'];
const slugify=n=>n.toLowerCase().replaceAll(' ','-');
const make=(name,region)=>({name,region,slug:slugify(name),paragraphs:[
 `We provide residential and commercial HVAC and refrigeration service in ${name}, TX and across the Dallas–Fort Worth area. Call us to talk through the heating, cooling, or refrigeration issue at your property.`,
 `If your air conditioning, heating, or refrigeration equipment is not working as expected, tell us the symptoms and your ZIP code when you request service. We will confirm whether your address is within our service area.`,
 `Service availability depends on location and scheduling. Call us or use the online request form to ask about service in ${name}.`]});
const arlington={name:'Arlington',region:'Tarrant County',slug:'arlington',paragraphs:[
 'Our central office is in Arlington, and we serve residential and commercial customers throughout the surrounding Dallas–Fort Worth area. Call us to talk through the heating, cooling, or refrigeration issue at your property.',
 'Whether your system needs an inspection, a repair, or help deciding between repair and replacement, the first step is to tell us what you are experiencing. We explain your options and never pressure you into work you do not need.',
 'Service availability can vary by location and schedule. Call us or send a service request with your ZIP code and we will confirm coverage.']};
export const cities=[arlington,...dallas.map(n=>make(n,'Dallas area')),...fortWorth.map(n=>make(n,'Fort Worth area')),...tarrant.map(n=>make(n,'Tarrant County'))];
// Shown as chips on the homepage (order matters).
export const featuredSlugs=['arlington','fort-worth','dallas','mansfield','grand-prairie','irving','plano','mckinney','allen','euless','hurst','bedford','grapevine','southlake','burleson','north-richland-hills','richardson','garland'];
export const featuredCities=featuredSlugs.map(s=>cities.find(c=>c.slug===s)).filter(Boolean);
