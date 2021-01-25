"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  let lastWatchedMovie, filmRating;
  do {
    lastWatchedMovie = prompt("Один из последних просмотренных фильмов", "");
    filmRating = prompt("На сколько оцените его?", "");
  } while (
    lastWatchedMovie === "" ||
    filmRating === "" ||
    lastWatchedMovie === null ||
    filmRating === null ||
    lastWatchedMovie.length > 50
  );

  personalMovieDB.movies[lastWatchedMovie] = filmRating;
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("Вы классический зритель");
} else {
  console.log("Вы киноман");
}

console.log(personalMovieDB);
