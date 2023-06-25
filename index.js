document.getElementById("watchlist-button").addEventListener("click", function(){
    document.body.innerHTML = `a href = "watchlist.html"`
    
})


let search = document.getElementById("search-input").value
document.getElementById("search-input").onchange = function() {
  search = this.value;
  }

let movieList = document.getElementById("movie-list")
document.getElementById("search-button").addEventListener("click", getMovies)

function getMovies(){
movieList.innerHTML = ``
fetch(`https://www.omdbapi.com/?s=${search}&apikey=704fc511`)
    .then(res => res.json())
    .then(data =>{ 
        let movieArray = data.Search
        for(i=0; i < movieArray.length; i++){
        let imdbId = movieArray[i].imdbID

    fetch(`https://www.omdbapi.com/?i=${imdbId}&apikey=704fc511`)
    .then(res => res.json())
    .then(data =>{ console.log(data)

    movieList.innerHTML +=
    `<div id="new-movie-list">
        <img id = "movie-poster" src="${data.Poster}"/>

    <div id = "title-synopsis">
        <div id="movie-title-rating"><h3 id="title">${data.Title}</h3>
            <h2 id="rating">⭐${data.imdbRating}</h2>
        </div>

        <div id="time-genre-button">
            <p>${data.Runtime}</p>
            <p>${data.Genre}</p>
            <button data-id ="${data.imdbID}" id = "watchlist-add-button">➕ Watchlist</button>
        </div>
    
        <div id="plot">${data.Plot}
        </div>
    </div>
</div>`
})}

})
}
document.addEventListener("click", async function(e) {
    
    const movieId = e.target.dataset.id
    
    response = await fetch(
        `https://www.omdbapi.com/?i=${movieId}&apikey=704fc511`
    )
    
    const newData = await response.json()
    console.log(movieId)
    
    localStorage.setItem(movieId,JSON.stringify(newData))
})