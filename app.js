window.onload = (e) => {
  document.querySelector('form').addEventListener('submit',(e) => {
    e.preventDefault()
    const userInput = document.querySelector('input[type="text"]').value

    fetch('https://rickandmortyapi.com/api/episode/' + userInput).then(
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
      const air_date = document.querySelector('#air_date')
      air_date.innerText = json.air_date
      const episode = document.querySelector('#episode')
      episode.innerText = json.episode
    },
    (err) => {
      console.log(err)
    }
  )
  })
}