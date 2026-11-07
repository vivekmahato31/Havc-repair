// Run `npm run fetch-images` on a machine that can reach the old site to download these into public/images/original.
// If a file is missing, <Photo/> falls back to the placeholder SVG.
export const images={
  hero:'/images/original/residential-ac.jpg',
  acRepair:'/images/original/services-ac.jpg',
  heating:'/images/original/services-heating.jpg',
  leak:'/images/original/services-leak-repair.jpg',
  installation:'/images/original/quality-parts.jpg',
  maintenance:'/images/original/quality-service.jpg',
};
export const fallbackImage='/images/hero-placeholder.svg';
