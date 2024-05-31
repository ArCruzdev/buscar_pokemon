import { PostCard } from "../components/PostCard.js";
import { ajax } from "./ajax.js";
import api from "./api.js";

export function infiniteScroll(){
    const d = document,
     w = window,
     $posts = d.getElementById('posts');
     let apiURL;
     let offset = 20;

     w.addEventListener('scroll', async e =>{
        let { scrollTop, clientHeight, scrollHeight} = d.documentElement
        let { hash } = w.location
        //console.log(scrollTop, scrollHeight, clientHeight)

        if (scrollTop + clientHeight > clientHeight) {
          offset += 20
          
          if(!hash || hash === '#/'){
            await ajax({
                url: `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`,
                cbSuccess: (data) => {
                    //console.log(data)
                    let html = ''
                    html += PostCard(data)
                    $posts.innerHTML += html
                }
              })
          }
          
        } 
     })
}