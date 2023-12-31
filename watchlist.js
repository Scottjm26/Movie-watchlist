function render(data){
let newWatchlist = document.getElementById("updated-movie-list")
newWatchlist.innerHTML = ``
if(localStorage.length===0 ){
    newWatchlist.innerHTML += 
    `<p id = "no-response-watchlist">
      Unable to find what you're looking for. Please try another search.</p>
      <a href ="index.html" id = "another-search-button"> ➕  Let's add some movies!</a>`
    }
    else{
for (let i = 0; i < localStorage.length; i++){
    const data = localStorage.key(i)
  

 fetch(`https://www.omdbapi.com/?i=${data}&apikey=704fc511`)
    .then(res => res.json())
    .then(data =>{ console.log(data)
       


newWatchlist.innerHTML += 
    `<div id="watchlist-list">
        <img id = "movie-poster" src="${data.Poster}"/>

    <div id = "title-synopsis">
        <div id="movie-title-rating"><h3 id="title">${data.Title}</h3>
            <h2 id="rating">⭐${data.imdbRating}</h2>
        </div>

        <div id="time-genre-button">
            <p>${data.Runtime}</p>
            <p>${data.Genre}</p>
            
            <button data-id ="${data.imdbID}" id = "watchlist-add-button">➖ Remove</button>
        </div>
    
        <div id="plot">${data.Plot}
        </div>
    </div>
</div>`
})}}}
render()

document.addEventListener("click", async function(e) {
    
    const movieId = e.target.dataset.id
    localStorage.removeItem(movieId)
    
render()
})