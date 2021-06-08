//creating js file to send to branch
var movieName = "Batman"
var characterID = "215"
// Will fetch the API below here:
fetch(`https://omdbapi.com/?s=${movieName}&apikey=962b9827`)
  .then(response =>response.json())
  .then(data => console.log(data));
const url = `https://superheroproxy.herokuapp.com/api/10218611106695061/${characterID}/biography`;
console.log(url)
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err=>console.log(err))

  