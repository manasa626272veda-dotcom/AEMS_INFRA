import data from './data.json';
export const {products,services,pages}=data;
export function productImage(product){const featured=['home-crp.png','home-passbox.png','home-airshower.png','home-ahu.png','hvac-system.png'];return featured.includes(product[3])?'assets/img/'+product[3]:(pages[product[0]]?.images?.[0]||'assets/img/'+product[3]);}
