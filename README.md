I am building a website that allows you to search up an episode number for Rick and Morty and it will tell you some details for the episode.

I used the Fetch API to pull data from the Rick and Morty API that I'm using for this project. 

I created a random image button that will show you random pictures of Rick and Morty. I used an addEventListener for this that repsonds to a 'click'. I created an array of the images of Rick and Morty and then created a randomizer using Math.random to choose an image at random when the button is clicked.

The approach I took to get this project completed was I started off by making all my .html, .js, and .css we're all linked properly. My next step was to get the website to use the API data successfully. Then I chose which keys I wanted to be displayed and added them in the .js. Then I had to figure out to make the random image button. Once the core functionalities of the website were there is when I decided to focus a bit more on the CSS.

An issue I ran into is I realized when I uploaded my site my images weren't working when I would push the button. That's because I had the images saved locally to my computer and I was using a local path to access the images. I figured out I have to use URLs for the images online so that they can be accessed from anyones device.

Link to the site: 
https://rick-and-morty-ep-browser.netlify.app/

I wanted to display character names from the episodes but they displayed URLS to the API instead of character names and I couldn't figure out how to change that.