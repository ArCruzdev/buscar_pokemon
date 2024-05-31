export function SearchForm() {
  const $form = document.createElement('form'),
    $input = document.createElement('input');
  $input.name = 'search';
  $input.type = 'search';
  $input.placeholder = 'Pikachu..,Bulbasaur..Charmander..';

  $form.classList.add('form-search')
  $form.appendChild($input)

  document.addEventListener('search', e=> {
    if(!e.target.matches("input[type='search")) return false
    if(!e.target.value) localStorage.removeItem('apSearch')
  })

  document.addEventListener('submit', e => {
    if(!e.target.matches('.form-search')) return false
    e.preventDefault()
    localStorage.setItem('apSearch',e.target.search.value.toLowerCase())
    location.hash = `#/search?search=${e.target.search.value}`
  })

  return $form
}