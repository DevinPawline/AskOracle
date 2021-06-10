// Fetch Api OMDB, using var declared above 
// Api access key allows 1000 pulls per day
var movieName = "Iron Man";

function searchOMDB () {
  const OMDB_url = `https://www.omdbapi.com/?apikey=682eb5a4&s=${movieName}`;
  fetch(OMDB_url)
  .then (response => response.json())
  .then((jsonData) => {
    console.log(jsonData);
    const results = jsonData.map(element => element.movie.name);
    renderResults(results);
  });
}

function renderResults (results) {
  const list = document.getElementById("content");
  list.innerHTML = "";
  results.forEach(result => {
    const element = document.createElement("li");
    element.innerText = result;
    list.appendChild(element);
  });
}


// function searchSuperheroApi (characterID) {
//   const proxy_url = `https://superheroproxy.herokuapp.com/api/10218611106695061/${characterID}/biography`;
//   fetch(proxy_url)
//   .then (response => response.json())
//   .then((jsonData) => {
//     console.log(jsonData);
//   });
// }


$("#search").autocomplete({source: function(request, response){
  response(["Iron Man", "Hulk", "Black Widow"])
}

})

function handleSubmit()
document.getElementById("myButton").onclick = function () {
  location.href = "./NewSearchPage.html";
};
