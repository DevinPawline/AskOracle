// Fetch Api OMDB, using var declared above 
// Api access key allows 1000 pulls per day
function searchOMDB () {
  const OMDB_url = `https://omdbapi.com/?apikey=962b9827&`;
  fetch(OMDB_url)
  .then (response => response.json())
  .then((jsonData) => {
    console.log(jsonData);
    const results = jsonData.map(element => element.movie.name);
    renderResults(results);
  });
}

// function renderResults (results) {
//   const list = document.getElementById("resultsList");
//   list.innerHTML = "";
//   results.forEach(result => {
//     const element = document.createElement("li");
//     element.innerText = result;
//     list.appendChild(element);
//   });
// }


// function searchSuperheroApi (characterID) {
//   const proxy_url = `https://superheroproxy.herokuapp.com/api/10218611106695061/${characterID}/biography`;
//   fetch(proxy_url)
//   .then (response => response.json())
//   .then((jsonData) => {
//     console.log(jsonData);
//   });
// }

let searchTimeoutToken = 0; 

window.onload = () => {
  const inpSearchElement = document.getElementById('search');
  inpSearchElement.onkeyup = (event) => {

    clearTimeout(searchTimeoutToken);
    
    if (inpSearchElement.value.length === 0) {
      return;
    }
    
    searchTimeoutToken = setTimeout(() => {
      searchOMDB(inpSearchElement.value);
    }, 250);
  };
}
