class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => (movie.rating == "PG") || (movie.rating == "PG13") );
    }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG13");

const movies = [
    new Movie ("Casino Royale","Eon Production","PG13"),
    new Movie ("Spectre","Eon Production","R"),
    new Movie ("Skyfall","Eon Production","R"),
    new Movie ("Die Another Day","Eon Production","PG2"),
    new Movie ("Tomorrow Never Dies","Eon Production","R"),
    new Movie("The Dark Knight", "Warner Bros.", "PG13"),
    new Movie ("Pirates of the Caribbean-1","Walt Disney Pictures"),
    new Movie ("Pirates of the Caribbean-2","Walt Disney Pictures"),
    new Movie ("Pirates of the Caribbean-3","Walt Disney Pictures")
];

const pgMovies = Movie.getPG(movies);         // st
// const pgMovies1 = casinoRoyale.getPG(movies); // non-st?

console.log(pgMovies);
// console.log(pgMovies1);
// console.log(casinoRoyale);

// static , non




