//creating js file to send to branch

// Will fetch the API below here:
fetch('https://comicvine.gamespot.com/api/documentation#toc-0-2/movies/name', {mode: "no-cors"})
  .then(response => response.text())
  .then(data => console.log(data));

  fetch('https://superheroapi.com/api/10218611106695061/character-id/biography', {mode: "no-cors"})
  .then(response => response.text())
  .then(data => console.log(data));