export function PostCard(props){
  let {sprites, name} = props;
  let urlPoster = sprites.front_default ? sprites.front_default : './App/assets/icons8-favicon-16.png'
  
  return `
     <article class='post-card'>
      <img src='${urlPoster}' alt='Cargando..'>
      <h2>${name}</h2>
     </article>
    `
}