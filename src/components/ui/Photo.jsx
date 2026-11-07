import {fallbackImage} from '../../data/images';
export default function Photo({src,alt,fallback=fallbackImage,...props}){return <img src={src} alt={alt} onError={e=>{const el=e.currentTarget;if(el.dataset.fb)return;el.dataset.fb='1';el.src=fallback}} {...props}/>}
