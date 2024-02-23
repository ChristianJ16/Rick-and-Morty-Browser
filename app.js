
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
    })
  })


document.addEventListener("DOMContentLoaded", function(){
  const button = document.getElementById("randomImageButton")
  const image = document.getElementById("randomImage")
  button.addEventListener("click", function() {
    const images = [
      "rick-and-morty-30973.png",
      "rick-and-morty-30991.png",
      "rick-and-morty-30998.png",
      "rick-and-morty-31012.png",
      "rick-and-morty-31015.png",
      "rick-and-morty-31043.png",
    ]
    const randomIndex = Math.floor(Math.random() * images.length)
    const randomImage = images[randomIndex]
    image.src = "/Users/christianjansen/Desktop/mini-project/imgs/" + randomImage
  })
})
