// Fetch Api OMDB, using var declared above 
// Api access key allows 1000 pulls per day
var movieName = "Iron Man"

$("#search").autocomplete({source: function(request, response){
  response(["Iron Man", "Hulk", "Black Widow", "Thor"])
}
})

searchOMDB();


function searchOMDB () {
  const OMDB_url = `https://www.omdbapi.com/?apikey=682eb5a4&s=${movieName}`;
  fetch(OMDB_url)
  .then (response => response.json())
  .then((jsonData) => {
    console.log(jsonData);
    displayContent(jsonData);
  });
}

function displayContent (results) {
console.log(results.Search);
for(let i = 0; i < results.Search.length; i++){
document.getElementById('moviename').innerHTML += '<li>'+
  "<p>" + results.Search[i].Title + "</p>" + 
  '</li>';
}
}




// function searchSuperheroApi (characterID) {
//   const proxy_url = `https://superheroproxy.herokuapp.com/api/10218611106695061/${characterID}/biography`;
//   fetch(proxy_url)
//   .then (response => response.json())
//   .then((jsonData) => {
//     console.log(jsonData);
//   });
// }
