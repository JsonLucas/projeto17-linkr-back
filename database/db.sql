CREATE DATABASE "linkr";
USE "linkr";
CREATE TABLE "users" (
	"id" serial NOT NULL PRIMARY KEY,
	"name" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	"createDate" DATE DEFAULT NOW()
);

CREATE TABLE "sessions" (
	"id" serial NOT NULL PRIMARY KEY,
	"token" TEXT NOT NULL,
	"idUser" INTEGER NOT NULL REFERENCES "users"("id"),
	"createDate" DATE DEFAULT NOW()
);

CREATE TABLE "posts" (
	"id" serial NOT NULL PRIMARY KEY,
	"link" TEXT NOT NULL,
	"commenter" TEXT,
	"idUser" INTEGER NOT NULL REFERENCES "users"("id"),
	"likes" INTEGER NOT NULL DEFAULT 0,
	"createDate" DATE DEFAULT NOW(),
	"isDelete" BOOLEAN NOT NULL DEFAULT false,
	"deleteDate" DATE
);

CREATE TABLE "hashtags" (
	"id" serial NOT NULL,
	"postId" INTEGER NOT NULL REFERENCES "posts"("id"),
	"hashtagName" TEXT NOT NULL
);