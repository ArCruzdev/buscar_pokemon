export function Menu() {
  const $menu = document.createElement('nav');
  $menu.classList.add('menu');
  $menu.innerHTML = `
      <a href='/#'>Home</a>
      <span>-</span>
      <a href='/#search'>Busqueda</a>
      <span>-</span>
      <a href='https://github.com/ArCruzdev/buscar_pokemon' target='_blank' rel='noopener'>Codigo githube</a>
     `
  return $menu
}