export function SearchCard(props){
    let { id, name, sprites, height } = props

    return `
    <article class='post-card'>
    <h2>${name}</h2>
     <figure>
      <img src='${sprites.front_default}' alt='${name}'>
        <figcaption>Primer Nombre: ${name} Nivel de poder: ${height}</figcaption>
     </figure>
   </article>
    `
}