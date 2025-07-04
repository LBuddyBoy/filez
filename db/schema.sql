DROP DATABASE IF EXISTS filez;

CREATE DATABASE filez;

\c filez;

CREATE TABLE folders(
    id SERIAL PRIMARY KEY,
    name TEXT not null    
);

CREATE TABLE files(
    id SERIAL PRIMARY KEY,
    name TEXT not null,
    size INTEGER,
    folder_id INTEGER REFERENCES folders(id) ON DELETE CASCADE
);

