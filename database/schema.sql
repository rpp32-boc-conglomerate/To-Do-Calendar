DROP DATABASE IF EXISTS "tododb";
CREATE DATABASE "tododb";

​\c tododb;

DROP table IF EXISTS "users";
CREATE TABLE "users" (
  "user_id" SERIAL NOT NULL PRIMARY KEY,
  "user_email" TEXT NOT NULL UNIQUE
);

DROP table IF EXISTS "categories";
CREATE TABLE "categories" (
  "category_id" INT GENERATED ALWAYS AS IDENTITY,
  "category" TEXT NOT NULL,
  PRIMARY KEY ("category_id")
);

-- happy to do this any way people want, but to avoid confusion, owner id now goes right in this table, no need for a lookup table or owner boolean

DROP table IF EXISTS "todoitems";
CREATE TABLE "todoitems" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "duration" INTERVAL NOT NULL,
  "start" TIMESTAMP NOT NULL,
  "end" TIMESTAMP NOT NULL,
  "in_calendar" BOOLEAN NOT NULL,
  "category_id" INTEGER NOT NULL,
  "owner_id" INTEGER NOT NULL,
  CONSTRAINT fk_category
    FOREIGN KEY("category_id")
      REFERENCES categories("category_id"),
  CONSTRAINT fk_owner
    FOREIGN KEY("owner_id")
      REFERENCES "users" ("user_id")
);

--we keep the lookup table to show shared calendars only
DROP table IF EXISTS "shared_lookup";
    CREATE TABLE "shared_lookup" (
      "user_id" INT NOT NULL,
      "todo_id" INT NOT NULL,
      CONSTRAINT fk_user
        FOREIGN KEY("user_id")
          REFERENCES users("user_id"),
      CONSTRAINT fk_todo
        FOREIGN KEY("todo_id")
          REFERENCES "todoitems"("id")
    );

CREATE INDEX ON "users" ("user_id");

CREATE INDEX ON "todoitems" ("id");