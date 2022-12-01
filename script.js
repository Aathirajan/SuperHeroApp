let search = document.getElementById('search')
let searchinput = document.getElementById('searchinput')

let herobtn = document.getElementById('herobtn')
let superapi = 'https://superheroapi.com/api.php/3361563447441329'


let superheroapi = (id) => {
  fetch(`${superapi}/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)

      document.getElementById('image').innerHTML = `<h2>${json.name}</h2><img src="${json.image.url}" height=300 width=300/>${powerstats(json)}`
    })
}

let searchhero = (name) => {
  fetch(`${superapi}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      let hero = json.results[0]
      console.log(hero)
      document.getElementById('image').innerHTML =
        `<h2>${name.toUpperCase()}</h2><img src="${hero.image.url}" height=300 width=300/>${powerstats(hero)}`
    }
    )
}

let powerstats = (sphero) => {
  let stats = Object.keys(sphero.powerstats).map(stat => {
    return `<p>${stat.toUpperCase()} :${sphero.powerstats[stat]}</p>`
  })
  console.log(stats.join(''))
  return stats.join('')
}


let randomnum = () => {
  let noofheros = 731
  return Math.floor(Math.random() * noofheros) + 1
}

herobtn.onclick = () => superheroapi(randomnum())
search.onclick = () => searchhero(searchinput.value)
