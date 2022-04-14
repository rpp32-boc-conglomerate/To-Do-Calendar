DROP DATABASE IF EXISTS tododb;
CREATE DATABASE tododb;

\c tododb;



DROP table IF EXISTS users;
CREATE TABLE users (
  user_id SERIAL NOT NULL PRIMARY KEY,
  user_email TEXT NOT NULL
);
\COPY users (user_id, user_email) FROM './user.csv' DELIMITER ',' CSV HEADER;

DROP table IF EXISTS calendars;
CREATE TABLE calendars (
  calendar_id SERIAL NOT NULL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  calendar_owner VARCHAR(64) NOT NULL,
  CONSTRAINT fk_user
      FOREIGN KEY(user_id)
        REFERENCES users(user_id)
);
\COPY calendars (calendar_id, user_id, calendar_owner) FROM './calendar.csv' DELIMITER ',' CSV HEADER;

DROP table IF EXISTS categories;
CREATE TABLE categories (
  category_id SERIAL NOT NULL PRIMARY KEY,
  calendar_id INTEGER NOT NULL,
  category TEXT NOT NULL,
  CONSTRAINT fk_calendar
    FOREIGN KEY(calendar_id)
      REFERENCES calendars(calendar_id)
);
\COPY categories (category_id, calendar_id, category) FROM './category.csv' DELIMITER ',' CSV HEADER;

-- -- happy to do this any way people want, but to avoid confusion, owner id now goes right in this table, no need for a lookup table or owner boolean
DROP table IF EXISTS todoitems;
CREATE TABLE todoitems (
  id SERIAL NOT NULL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  duration INTERVAL NOT NULL,
  start TIMESTAMP NOT NULL,
  end TIMESTAMP NOT NULL,
  in_calendar BOOLEAN NOT NULL,
  category_id INTEGER NOT NULL,
  CONSTRAINT fk_category
    FOREIGN KEY(category_id)
      REFERENCES categories(category_id)
);
\COPY todoitems (id, title, description, duration, start, end, in_calendar, category_id) FROM './items.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX ON "users" ("user_id");
CREATE INDEX ON "calendars" ("calendar_id");
CREATE INDEX ON "categories" ("category_id");
CREATE INDEX ON "todoitems" ("item_id");

SELECT setval('users_user_id_seq', max(user_id)) from users;

SELECT setval('calendars_calendar_id_seq', max(calendar_id)) from calendars;

SELECT setval('categories_category_id_seq', max(category_id)) from categories;

SELECT setval('todoitems_item_id_seq', max(item_id)) from todoitems;

