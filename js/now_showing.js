const searchInput = document.querySelector('#search-input');
const movieCards = document.querySelectorAll('.movie-card');


searchInput.addEventListener('input', () => {
  const userInput = searchInput.value.toLowerCase();
  movieCards.forEach(movieCard => {
    const movieTitle = movieCard.querySelector('h2').textContent.toLowerCase();
    if (movieTitle.includes(userInput)) {
      movieCard.style.display = 'block';
    } else {
      movieCard.style.display = 'none';
    }
  });
});

function filterMovies() {
    var selectedGenre = document.getElementById("genre-select").value;
    var movieCards = document.getElementsByClassName("movie-card");
    for (var i = 0; i < movieCards.length; i++) {
      var genres = movieCards[i].classList;
      if (selectedGenre === "" || genres.contains(selectedGenre)) {
        movieCards[i].style.display = "block";
      } else {
        movieCards[i].style.display = "none";
      }
    }
}
  

  