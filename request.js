
const apiRequest = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=eb01b0883507b03208cd7d04de655f36');
}

apiRequest()

const fetchMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=eb01b0883507b03208cd7d04de655f36&language=en-US&query=the');
    const data = await response.json()
    return data
}

const filterPuzzle = async () => {
    const movie = await fetchMovies()
    console.log(movie)
    const randomIndex = Math.floor(Math.random() * 20)
    console.log(randomIndex)
    const filteredMovie = movie.results[randomIndex].title
    return filteredMovie

}

fetchMovies()