import { Header } from "./components/Header.js";
import { Posts } from './components/Posts.js'
import { Loader } from './components/Loader.js'
import { Router } from "./components/Router.js";
import { infiniteScroll } from "./helpers/infinite_scroll.js";

export function App(){
    const d = document,
     $root = d.getElementById('root');

    $root.innerHTML = null
     $root.appendChild(Header())
     $root.appendChild(Posts())
     $root.appendChild(Loader())

     Router()
     infiniteScroll()

     }

