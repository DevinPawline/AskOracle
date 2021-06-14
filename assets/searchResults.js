// Fetch Api OMDB, using var declared above 
// Api access key allows 1000 pulls per day

$("#search").autocomplete({source: function(request, response){
  response(["Aquaman","Batman","Black Widow","Hulk","Iron Man","Oracle","Superman","Wonder Woman"])
}
})

var superheroELements;
searchOMDB();


function searchOMDB () {
  var inpSearch = document.location.search.split('=')[1]
  const proxy_url = `https://superheroproxy.herokuapp.com/api/10218611106695061/search/${inpSearch}`;
  fetch(proxy_url)
  .then (response => response.json())
  .then((SuperHeroData) => {
    console.log(SuperHeroData);
  superheroELements = `<h3 id="superhero">${SuperHeroData.results[0].name}</h3> <!--Superhero name here-->
  <p id="description">${SuperHeroData.results[0].work.occupation}</p> <!--Description of some sort here/ feel free to delete if we don't have this return-->`;
  console.log(superheroELements);
  const OMDB_url = `https://www.omdbapi.com/?apikey=682eb5a4&s=${inpSearch}`;
  fetch(OMDB_url)
  .then (response => response.json())
  .then((OMDBdata) => {
    console.log(OMDBdata);
    displayContent(OMDBdata, superheroELements);
  })
});
}

function displayContent (results, superheroELements) {
console.log(results.Search);
for(let i = 0; i < results.Search.length; i++){
    var movieposter = results.Search[i].Poster
    var moviename = results.Search[i].Title
    var release = results.Search[i].Year
  cards(moviename, movieposter, release, superheroELements);
}
}

function cards(moviename, movieposter,release, elements) {
  var cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.innerHTML=`
  <div class="card-image">
  <figure class="image is-4by3">
    <img src="${movieposter}" id="Pic" id="movieposter" alt="movie poster"> <!--Add movie poster here-->
  </figure>
</div>
<div class="card-content">
  <div class="media">
    <div class="media-content">
      <p class="title is-4" id="moviename">${moviename}</p> <!--Movie name goes here-->
    </div>
  </div>
  <div class="content2">
  ${superheroELements, elements}
      <p id="release date">Release Date:${release}</p> <!--Release date here-->
  </div>
</div>`;
  document.querySelector(".container").appendChild(cardDiv);

  //document.getElementById("movieposter").setAttribute("src", array[i]) //setting up posters to run through array
 console.log(cardDiv);
}
