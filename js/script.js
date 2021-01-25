"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const lastWatchedMovie1 = prompt('Один из последних просмотренных фильмов', '');
const filmRating1 = prompt('На сколько оцените его?', '');

const lastWatchedMovie2 = prompt('Один из последних просмотренных фильмов', '');
const filmRating2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastWatchedMovie1] = filmRating1;
personalMovieDB.movies[lastWatchedMovie2] = filmRating2;

console.log(personalMovieDB);