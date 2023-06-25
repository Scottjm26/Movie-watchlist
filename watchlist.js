let newWatchlist = document.getElementById("updated-movie-list")
newWatchlist.innerHTML = ``
let data = JSON.parse(localStorage.getItem(`idOfMovie`))

newWatchlist.innerHTML += 
    `<div id="new-movie-list">
        <img id = "movie-poster" src="${data.Poster}"/>

    <div id = "title-synopsis">
        <div id="movie-title-rating"><h3 id="title">${data.Title}</h3>
            <h2 id="rating">⭐${data.imdbRating}</h2>
        </div>

        <div id="time-genre-button">
            <p>${data.Runtime}</p>
            <p>${data.Genre}</p>
            <button data-id ="${data.imdbID}" id = "watchlist-add-button">➕ Remove</button>
        </div>
    
        <div id="plot">${data.Plot}
        </div>
    </div>
</div>`
