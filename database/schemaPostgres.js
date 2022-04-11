require ('dotenv').config()
const pg = require('pg');
const pgtools = require('pgtools');

const config = {
  user: 'postgres',
  password: process.env.PGPASS,
  port: 5432,
  host: 'localhost'
}

// let client = new pg.Client(config)
// client.connect()
// .then(() => console.log('connect to database'))
// .catch((err) => console.log('error in connect to db', err))
//drop db, if needed uncomment to use

// pgtools.dropdb(config, 'tododb', function (err, res) {
//   if (err) {
//     console.error(err);
//     process.exit(-1);
//   }
//   console.log(res);
// });
console.log('pgtools', pgtools)
pgtools.dropdb(config, 'tododb', function (err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(res, 'created tables');
  addTables();
});

let addTables = function() {

  const db = new pg.Pool({
    host: 'localhost',
    database: 'tododb',
    user: 'postgres',
    password: process.env.PGPASS,
    port: 5432
   });

   const execute = async (query) => {
    try {
        await db.connect();     // gets connection
        await db.query(query);  // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
  };

  const queryText1 = `
    CREATE TABLE IF NOT EXISTS "users" (
      "user_id" INT GENERATED ALWAYS AS IDENTITY,
      "email" VARCHAR(64) NOT NULL,
      PRIMARY KEY ("user_id")
    );`;

  const queryText2 = `
    CREATE TABLE IF NOT EXISTS "categories" (
      "category_id" INT GENERATED ALWAYS AS IDENTITY,
      "name" VARCHAR(64) NOT NULL,
      PRIMARY KEY ("category_id")
    );`;
//inCalendar
  const queryText3 = `
    CREATE TABLE IF NOT EXISTS "todoitems" (
      "id" SERIAL,
      "title" VARCHAR(64) NOT NULL,
      "description" VARCHAR(255) NOT NULL,
      "duration" INTERVAL NOT NULL,
      "start" TIMESTAMP NOT NULL,
      "end" TIMESTAMP NOT NULL,
      "inCalendar" BOOLEAN NOT NULL,
      "category_id" INTEGER NOT NULL,
      PRIMARY KEY ("id"),
      CONSTRAINT fk_category
        FOREIGN KEY("category_id")
          REFERENCES categories("category_id")
    );`;
      //beware of camel case userToDoLookup
    const queryText4 = `
    CREATE TABLE IF NOT EXISTS "userToDoLookup" (
      "user_id" INT NOT NULL,
      "todo_id" INT NOT NULL,
      "owner" BOOLEAN NOT NULL,
      CONSTRAINT fk_user
        FOREIGN KEY("user_id")
          REFERENCES users("user_id"),
      CONSTRAINT fk_todo
        FOREIGN KEY("todo_id")
          REFERENCES todoitems("id")
    );`;

    execute(queryText1)
      .then(function(result) {
        console.log('user table created: ', result);
        return execute(queryText2);
      })
      .then(function(result) {
        console.log('category table created: ', result);
        return execute(queryText3);
      })
      .then(function(result) {
        console.log('to do item table created: ', result);
        return execute(queryText4);
      })
      .then(function(result) {
        console.log('lookup table created: ', result);
        db.end();
      })
}



