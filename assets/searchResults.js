// Fetch Api OMDB, using var declared above 
// Api access key allows 1000 pulls per day
var movieName = "Iron Man" //04 web api activity 6 / 3rd party api's // server side 6 api script.js -> targeting input


$("#search").autocomplete({source: function(request, response){
  response(["Iron Man", "Hulk", "Black Widow", "Thor"])
}
})

searchOMDB();


function searchOMDB () {

  var mySuoerHeroElemnts= 
  const OMDB_url = `https://www.omdbapi.com/?apikey=682eb5a4&s=${movieName}`;
  fetch(OMDB_url)
  .then (response => response.json())
  .then((jsonData) => {
    console.log(jsonData);
    displayContent(jsonData,mySuoerHeroElemnts);
  });
}

function displayContent (results) {
console.log(results.Search);
for(let i = 0; i < results.Search.length; i++){
/* document.getElementById('moviename').innerHTML += '<li>'+
  "<p>" + results.Search[i].Title + "</p>" + 
  '</li>'; */
  var movieposter = results.Search[i].Poster
  //var moviename = results.Search[i].
  cards(results.Search[i].Title, results.Search[i].Year, results.Search[i].Poster);
}
}




// function searchSuperheroApi (characterID) {
//   const proxy_url = `https://superheroproxy.herokuapp.com/api/10218611106695061/${characterID}/biography`;
//   fetch(proxy_url)
//   .then (response => response.json())
//   .then((jsonData) => {
//     console.log(jsonData); //change name
//   });
// }




function cards(moviename, release, movieposter) {
  var cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.innerHTML=`
  <div class="card-image">
  <figure class="image is-4by3">
    <img src="${movieposter}" id="Pic" id="movieposter" alt="Placeholder image"> <!--Add movie poster here-->
  </figure>
</div>
<div class="card-content">
  <div class="media">
    <div class="media-content">
      <p class="title is-4" id="moviename">${moviename}</p> <!--Movie name goes here-->
    </div>
  </div>

  <div class="content">
      <h3 id="superhero">${0}</h3> <!--Superhero name here-->
      <p id="description">${0}</p> <!--Description of some sort here/ feel free to delete if we don't have this return-->
      <p id="release date">Release Date:${release}</p> <!--Release date here-->
  </div>
</div>`;
  document.querySelector(".container").appendChild(cardDiv);

  //document.getElementById("movieposter").setAttribute("src", array[i]) //setting up posters to run through array
 console.log(cardDiv);
}
