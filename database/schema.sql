DROP DATABASE IF EXISTS tododb;
CREATE DATABASE tododb;

\c tododb;


-- I delete the category table because I think one item only have
-- one category

DROP table IF EXISTS users;
CREATE TABLE users (
  user_id SERIAL NOT NULL PRIMARY KEY,
  user_email TEXT NOT NULL UNIQUE
);

-- one users may have many calendars
DROP table IF EXISTS calendars;
CREATE TABLE calendars (
  calendar_id SERIAL NOT NULL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  calendar_owner VARCHAR(64) NOT NULL,
  CONSTRAINT fk_user
      FOREIGN KEY(user_id)
        REFERENCES users(user_id)
);

--  one calendars may have many todotiems
DROP table IF EXISTS todoitems;
CREATE TABLE todoitems (
  item_id SERIAL NOT NULL PRIMARY KEY,
  calendar_id INTEGER NOT NULL,
  item_title TEXT NULL,
  item_description text NOT NULL,
  item_category VARCHAR(64) NOT NULL,
  item_duration INTERVAL NOT NULL,
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL,
   CONSTRAINT fk_calendar
      FOREIGN KEY(calendar_id)
        REFERENCES calendars(calendar_id)
);


CREATE INDEX ON users (user_id);

CREATE INDEX ON calendars (calendar_id);

CREATE INDEX ON todoitems (item_id);


SELECT setval('users_user_id_seq', max(user_id)) from users;

SELECT setval('calendars_calendar_id_seq', max(calendar_id)) from calendars;

SELECT setval('todoitems_item_id_seq', max(item_id)) from todoitems;