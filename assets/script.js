//creating js file to send to branch

// Will fetch the API below here:
fetch('https://superheroapi.com/api/10218611106695061/search/name', {
    mode: "no-cors"
}
  .then (function (data) {
    console.log(data);
  }))