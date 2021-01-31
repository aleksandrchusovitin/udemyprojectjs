"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,

  start() {
    do {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    } while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count));
  },

  writeYourGenres() {
    // for (let i = 0; i < 3; i++) {
    //   do {
    //     personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
    //   } while (personalMovieDB.genres[i] == "" || personalMovieDB.genres[i] == null);
    // }

    let genres;
    do {
      genres = prompt(`Введите ваши любимые жанры через запятую`, "");
    } while (genres == "" || genres == null);

    personalMovieDB.genres = genres.toLowerCase().split(",").sort();

    personalMovieDB.genres.forEach((element, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${element}`);
    });
  },

  rememberMyFilms() {
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
  },

  detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Вы классический зритель");
    } else {
      console.log("Вы киноман");
    }
  },

  showMyDB(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB() {
    this.private = this.private ? false : true;
  },
};

personalMovieDB.start();
personalMovieDB.writeYourGenres();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.private);
