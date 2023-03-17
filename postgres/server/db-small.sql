create TABLE genres(
    genreId SERIAL PRIMARY KEY,
    genreName VARCHAR(100)
);

create TABLE films(
    filmId SERIAL PRIMARY KEY,
    filmName VARCHAR(255),
    filmYear INT
);

create TABLE filmGenre(
    filmId INT, FOREIGN KEY (filmId) REFERENCES films (filmId),
    genreId INT, FOREIGN KEY (genreId) REFERENCES genres (genreId)
);
