-- 1. Create database

CREATE DATABASE API_Artists_Song;

-- 2. Create table artists

CREATE TABLE Artists (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    bio VARCHAR(100),
	photoUrl VARCHAR(100) UNIQUE NOT NULL
);

-- 3. Create table songs

CREATE TABLE Songs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    artistId INT REFERENCES Artists(id),
	releaseYear INT,
	duration INT,
	coverUrl VARCHAR(100) UNIQUE NOT NULL
);

-- 4. Create table references id 

CREATE TABLE artists_songs (
	id SERIAL PRIMARY KEY,
	artists_id INT REFERENCES artists(id) ON DELETE CASCADE,
	songs_id INT REFERENCES songs(id) ON DELETE CASCADE
);

-- 5. Relaciones entre la tablas

-- "uno a muchos" (One-to-Many) entre Artist y Song. 
-- Cada artista puede tener muchas canciones, pero cada canción pertenece a un único artista.

-- 6. Insertions de data base
-- 6.1 Inserciones de tabla de artistas

INSERT INTO Artists (name, bio, photoUrl)
VALUES ('The Beatles', 
		'The Beatles were an English rock band formed in Liverpool.', 
		'https://picsum.photos/id/1015/400/400'),

		('Adele', 
		'Adele is an English singer-songwriter known for her soulful voice.', 
		'https://picsum.photos/id/1016/400/400');

-- 6.2 Inserciones de tabla de canciones

INSERT INTO Songs (title, artistId, releaseYear, duration, coverUrl)
VALUES ('Hey Jude', 1, 1968, 431, 'https://picsum.photos/id/1018/400/400'),
		('Let It Be', 1, 1970, 243, 'https://picsum.photos/id/1020/400/400'),
		('Rolling in the Deep', 2, 2010, 228, 'https://picsum.photos/id/1021/400/400'),
		('Someone Like You', 2, 2011 , 284, 'https://picsum.photos/id/1022/400/400'),
		('Hello', 2, 2015, 295, 'https://picsum.photos/id/1023/400/400');

INSERT INTO artists_songs (Artists_id, Songs_id)
VALUES  (1, 1),
		(1, 2),
		(2, 3),
		(2, 4),
		(2, 5);

-- 7. Verificar la estructura

SELECT * FROM artists
SELECT * FROM songs
SELECT * FROM artists_songs