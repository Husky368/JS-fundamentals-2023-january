function movies(declaration) {
    class movie {
        constructor(name, director, data) {
            this.movieName = name
            this.director = director
            this.data = data
        }
    }
    let myMovies = []
    //name, director, and date.
    // •    "addMovie {movie name}" – add the movie
    // •	"{movie name} directedBy {director}" – check if the movie exists and then add the director
    // •	"{movie name} onDate {date}" – check if the movie exists and then add the date

    for (let movieInfo of declaration) {
        if (movieInfo.includes('addMovie')) {
            movieInfo = movieInfo.replace('addMovie ', '')
            let newName = new movie(movieInfo)
            myMovies.push(newName)
        }
        else if (movieInfo.includes('directedBy')) {
            movieInfo =  movieInfo.split(' ')
            let index = movieInfo.indexOf("directedBy")
            let director = movieInfo.splice(index).join(' ').replace('directedBy', '')
            let newDirector = new movie(director)
            myMovies.push(newDirector)
        }
    }
} movies(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'])
