
export async function ajax(props) {
  const { url, cbSuccess } = props;

  await fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
      //console.log(json)
      for (let i = 0; i < json.results.length; i++) {
        fetch(json.results[i].url)
          .then(res => res.ok ? res.json() : Promise.reject(res))
          .then(json => cbSuccess(json))
          .catch(err => {
            let message = err.statusText || 'Ocurrio un error al acceder a la API'

            document.getElementById('posts').innerHTML = `
             <div class='error'>
              <p>Error ${err.status}: ${message}</p>
             </div>
            `
            console.log(err);
          })
      }
    })
    .catch(err => {
      let message = err.statusText || 'Ocurrio un error al acceder a la API'

      document.getElementById('posts').innerHTML = `
         <div class='error'>
          <p>Error ${err.status}: ${message}</p>
         </div>
        `
      console.log(err);
    })
}

export async function pokemon(props){
  let {url, cbSuccess} = props
  await fetch(url)
     .then(res => res.ok ? res.json() : Promise.reject(res))
     .then(json => cbSuccess(json))
     .catch(err => {
        let message = err.statusTex || 'Ocurrio un error al acceder al a API'

        document.getElementById('posts').innerHTML = `
         <div class='error'>
          <p>Error${err.status}: ${message}</p>
         </div>
        `;
        document.querySelector('.loader').style.display = 'none'
        console.log(err);
     })
}


