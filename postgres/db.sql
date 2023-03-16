create TABLE years(
    yearId SERIAL PRIMARY KEY,
    yearName INT
);

create TABLE countries(
    countryId SERIAL PRIMARY KEY,
    countryName VARCHAR(60)
);

create TABLE genres(
    genreId SERIAL PRIMARY KEY,
    genreName VARCHAR(40)
);

create TABLE directors(
    directorId SERIAL PRIMARY KEY,
    directorName VARCHAR(100),
    directorSurname VARCHAR(100)
);

create TABLE screenwriters(
    screenwriterId SERIAL PRIMARY KEY,
    screenwriterName VARCHAR(100),
    screenwriterSurname VARCHAR(100)
);

create TABLE producers(
    producerId SERIAL PRIMARY KEY,
    producerName VARCHAR(100),
    producerSurname VARCHAR(100)
);

create TABLE cameramans(
    cameramanId SERIAL PRIMARY KEY,
    cameramanName VARCHAR(100),
    cameramanSurname VARCHAR(100),
);

create TABLE composers(
    composerId SERIAL PRIMARY KEY,
    composerName VARCHAR(100),
    composerSurname VARCHAR(100)
);

create TABLE artists(
    artistId SERIAL PRIMARY KEY,
    artistName VARCHAR(100),
    artistSurname VARCHAR(100)
);

create TABLE editors(
    editorId SERIAL PRIMARY KEY,
    editorName VARCHAR(100),
    editorSurname VARCHAR(100)
);

create TABLE spectators(
    spectatorsId SERIAL PRIMARY KEY,
    countryId INT, FOREIGN KEY (countryId) REFERENCES countries (countryId),
    spectatorsAmount INT
);

create TABLE ageLimits(
    ageLimitId SERIAL PRIMARY KEY,
    ageLimitValue VARCHAR(3)
);

create TABLE ratingsMPAA(
    ratingMPAAId SERIAL PRIMARY KEY,
    ratingMPAAValue VARCHAR(5)
);

create TABLE actors(
    actorId SERIAL PRIMARY KEY,
    actorName VARCHAR(100),
    actorSurname VARCHAR(100)
);

create TABLE dubbingActors(
    dubbingActorId SERIAL PRIMARY KEY,
    dubbingActorName VARCHAR(100),
    dubbingActorSurname VARCHAR(100)
);

create TABLE mainCharacterActor(
    mainCharacterId SERIAL PRIMARY KEY,
    actorId INT,
    FOREIGN KEY (actorId) REFERENCES actors (actorId)
);

create TABLE dubbingCharacterActor(
    dubbingCharacterId SERIAL PRIMARY KEY,
    dubbingActorId INT,
    FOREIGN KEY (dubbingActorId) REFERENCES dubbingActors (dubbingActorId)
);

create TABLE films(
    filmId SERIAL PRIMARY KEY,
    name VARCHAR(255),
    year INT, FOREIGN KEY (year) REFERENCES years (yearId),
    country INT, FOREIGN KEY (country) REFERENCES countries (countryId),
    genre INT, FOREIGN KEY (genre) REFERENCES genres (genreId),
    director INT, FOREIGN KEY (director) REFERENCES directors (directorId),
    screenplay INT, FOREIGN KEY (screenplay) REFERENCES screenwriters (screenwriterId),
    producer INT, FOREIGN KEY (producer) REFERENCES producers (producerId),
    cameraman INT, FOREIGN KEY (cameraman) REFERENCES cameramans (cameramanId),
    composer INT, FOREIGN KEY (composer) REFERENCES composers (composerId),
    artist INT, FOREIGN KEY (artist) REFERENCES artists (artistId),
    editor INT, FOREIGN KEY (editor) REFERENCES editors (editorId),
    budget INT,
    marketing INT,
    feesUSA INT,
    feesWorld INT,
    spectator INT, FOREIGN KEY (spectator) REFERENCES spectators (spectatorsId),
    premiereRUS DATE,
    premiereWorld DATE,
    releaseDVD DATE,
    ageLimit INT, FOREIGN KEY (ageLimit) REFERENCES ageLimits (ageLimitId),
    ratingMPAA INT, FOREIGN KEY (ratingMPAA) REFERENCES ratingsMPAA (ratingMPAAId),
    timing INT,
    mainCharacter INT, FOREIGN KEY (mainCharacter) REFERENCES mainCharacterActor (mainCharacterId),
    dubbingCharacter INT, FOREIGN KEY (dubbingCharacter) REFERENCES dubbingCharacterActor (dubbingCharacterId)
);







    