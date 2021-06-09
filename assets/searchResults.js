const inpSearch = document.getElementById('search');








//Var for movie name and character id's, for test
var movieName = "Batman"
var characterID = "215"
// Fetch Api OMDB, using var declared above 
// Api access key allows 1000 pulls per day
fetch(`https://omdbapi.com/?s=${movieName}&apikey=962b9827`)
  .then(response =>response.json())
  .then(data => console.log(data));
// Const url with proxy created by Max (DM with questions/problems/when project has been graded) using var declared above 
const url = `https://superheroproxy.herokuapp.com/api/10218611106695061/${characterID}/biography`;
console.log(url)
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  // To resovle any errors with the cors problem
  .catch(err=>console.log(err))

  