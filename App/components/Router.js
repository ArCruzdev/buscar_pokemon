import api from "../helpers/api.js";
import { ajax, pokemon } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { SearchCard } from "./SearchCard.js";

export async function Router(){
    const d = document,
     w = window,
     $posts = d.getElementById('posts');

     let { hash } = location;

     //console.log(hash);
     $posts.innerHTML = ''

     if(!hash || hash === '#/'){
         await ajax({
             url: api.API,
             cbSuccess: (data)=>{
                 //console.log(data)
                 $posts.innerHTML += PostCard(data);
               }
            })
         }else if(hash.includes('#/search')){
            let query = localStorage.getItem('apSearch')
            if(!query) {
               d.querySelector('.loader').style.display = 'none'
               return false 
            }

            await pokemon({
               url: `${api.API_SEARCH}${query}`,
               cbSuccess: (search) => {
                  console.log(search)
                  let html = ''
                  $posts.innerHTML += SearchCard(search)
               }
            })
         }else{
            
         }
         d.querySelector('.loader').style.display = 'none'
}