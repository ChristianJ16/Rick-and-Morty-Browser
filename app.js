
  document.querySelector('form').addEventListener('submit',(e) => {  // looks for the first form element in the html and looks for the submit event when the the form is submitted it called the arrowfunction
    e.preventDefault() // prevents a page reload when the form is submitted
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
      document.querySelector('#name').innerText = json.name
      document.querySelector('#air_date').innerText = json.air_date
      document.querySelector('#episode').innerText = json.episode
    },
    (err) => {
      console.log(err) // console log if error
    })
  })

document.addEventListener("DOMContentLoaded", function(){ // listens for when the HTML document has finished loading
  const button = document.getElementById("randomImageButton") // selects the button element with the ID "randomImageButton"
  const image = document.getElementById("randomImage") // selects the image element with the ID "randomImage"
  button.addEventListener("click", function() { 
    const images = [ // array of the image URLs
    "https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png",
    "https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-moon-mod-download-35.png",
    "https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-mind-bending-season-mysteries-quidd-6.png",
    "https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-rick-face-kushmastafresh-deviantart-19.png",
    "https://www.freepnglogos.com/uploads/rick-and-morty-png/miami-rick-pocket-mortys-rick-and-morty-wiki-fandom-16.png",
    "https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-rick-morty-projectacademy-medium-17.png",
    "https://www.freepnglogos.com/uploads/rick-and-morty/rick-and-morty-background-rick-morty-wallpaper-speedpaint-youtube-2.jpg",

    ]
    const randomIndex = Math.floor(Math.random() * images.length)
    const randomImage = images[randomIndex] // selects a random image URL from the images array using the random index generated above this line
    image.src = randomImage // source of the images
  })
})
