"use strict";

let numberOfFilms;

function start() {
  do {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  } while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
  }
}

writeYourGenres();

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else {
    console.log("Вы киноман");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.private);
