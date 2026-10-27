// One route contract for the static host, browser and development server.
// Hosting may remove .html or add a directory slash; both are valid URLs.
export const aliases = Object.freeze({
  home:'index.html', services:'service.html', solutions:'service.html',
  'about-us':'about.html', 'contact-us':'contact.html',
  'product-catalogue':'products.html', 'clean-room-equipment-suppliers-in-hyderabad':'index.html',
  'clean-room-equipment':'cleanroomequipment.html', 'hvac-services':'hvacservices.html',
  'mep-contractors':'mepcontractors.html', 'facility-engineering-services':'facilityengservices.html',
  'clean-room-panels':'cleanroompanels.html', 'clean-room-doors':'cleanroomdoors.html',
  'air-handling-unit':'airhandlingunit.html', 'air-shower':'airshower.html',
  'biosafety-cabinet':'biosafetycabinet.html', 'static-passbox':'staticpassbox.html',
  'dynamic-passbox':'dynamicpassbox.html', 'lab-furniture':'labfurniture.html',
  'ss-furniture':'ssfurnitures.html'
});

export function resolvePage(pathname, filenames) {
  let path;
  try {path=decodeURIComponent(pathname).split(/[?#]/)[0].replace(/^\/+|\/+$/g,'').toLowerCase();}
  catch {return null;}
  if(!path || path==='index' || path==='index.html') return 'index.html';
  if(path.includes('/') || path.includes('..')) return null;
  const stem=path.replace(/\.html$/,'');
  if(aliases[stem])return aliases[stem];
  return filenames.find(name=>name.toLowerCase()===`${stem}.html`)||null;
}

export function pagePath(filename) {
  return filename==='index.html'?'/':`/${filename.replace(/\.html$/,'')}`;
}
