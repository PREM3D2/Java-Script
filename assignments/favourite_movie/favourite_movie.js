const movies = [];

function favouriteMovie(operation, movie) {
    if (operation==="add"){
        movies.push(movie)
        return movies
    }
    else{
        movies.pop(movie)
        return movies
    }
    // Write your code here
}

module.exports = favouriteMovie;
