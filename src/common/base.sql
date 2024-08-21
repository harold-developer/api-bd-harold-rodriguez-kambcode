-- 1. Create database

CREATE DATABASE API_Artists_Songs;

-- 2. Create table artists

CREATE TABLE Artists (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    bio VARCHAR(100),
	photoUrl VARCHAR(100) UNIQUE NOT NULL,
	"createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- 3. Create table songs

CREATE TABLE Songs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    artistsId INT REFERENCES Artists(id),
	releaseYear INT,
	duration INT,
	coverUrl VARCHAR(100) UNIQUE NOT NULL,
	"createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- 4. Create table references id 

CREATE TABLE artists_songs (
	id SERIAL PRIMARY KEY,
	artists_id INT REFERENCES artists(id) ON DELETE CASCADE,
	songs_id INT REFERENCES songs(id) ON DELETE CASCADE,
	"createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- 5. Relaciones entre la tablas

-- "uno a muchos" (One-to-Many) entre Artist y Song. 
-- Cada artista puede tener muchas canciones, pero cada canción pertenece a un único artista.

-- 6. Insertions de data base
-- 6.1 Inserciones de tabla de artistas

INSERT INTO Artists (name, bio, photoUrl, "createdAt", "updatedAt")
VALUES ('The Beatles', 
		'The Beatles were an English rock band formed in Liverpool.', 
		'https://picsum.photos/id/1015/400/400', NOW(), NOW()),

		('Adele', 
		'Adele is an English singer-songwriter known for her soulful voice.', 
		'https://picsum.photos/id/1016/400/400', NOW(), NOW());

-- 6.2 Inserciones de tabla de canciones

INSERT INTO Songs (title, artistsId, releaseYear, duration, coverUrl, "createdAt", "updatedAt")
VALUES ('Hey Jude', 1, 1968, 431, 'https://picsum.photos/id/1018/400/400', NOW(), NOW()),
		('Let It Be', 1, 1970, 243, 'https://picsum.photos/id/1020/400/400', NOW(), NOW()),
		('Rolling in the Deep', 2, 2010, 228, 'https://picsum.photos/id/1021/400/400', NOW(), NOW()),
		('Someone Like You', 2, 2011 , 284, 'https://picsum.photos/id/1022/400/400', NOW(), NOW()),
		('Hello', 2, 2015, 295, 'https://picsum.photos/id/1023/400/400', NOW(), NOW());

INSERT INTO artists_songs (Artists_id, Songs_id, "createdAt", "updatedAt")
VALUES  (1, 1, NOW(), NOW()),
		(1, 2, NOW(), NOW()),
		(2, 3, NOW(), NOW()),
		(2, 4, NOW(), NOW()),
		(2, 5, NOW(), NOW());

-- 7. Verificar la estructura

SELECT * FROM artists
SELECT * FROM songs
SELECT * FROM artists_songs