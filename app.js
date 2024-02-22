window.onload = (e) => {
  fetch('https://rickandmortyapi.com/api/character/2').then(
    (data) => {
    return data.json()
  }, 
  (err) => {
    console.log(err)
  }
  ).then(
    (json) => {
      console.log(json)
      const name = document.querySelector('#name')
      name.innerText = json.name
      const status = document.querySelector('#status')
      status.innerText = json.status
      const species = document.querySelector('#species')
      species.innerText = json.species
    },
    (err) => {
      console.log(err)
    }
  )

}