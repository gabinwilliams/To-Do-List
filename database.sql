
-- DB Name: weekend-to-do-app

-- DATABASE SCHEME

CREATE TABLE todo (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
	"complete" BOOLEAN DEFAULT FALSE
);

-- DUMMY DATA
INSERT INTO "todo" ("task") VALUES ('Task to make this app'), ('To workout at least 30min each day'), ('Make a healthy meal each day');
