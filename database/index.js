require ('dotenv').config()
const pg = require('pg');
const pgtools = require('pgtools');

const config = {
  user: 'postgres',
  password: process.env.PGPASS,
  port: 5432,
  host: 'localhost'
}

//drop db, if needed uncomment to use

// pgtools.dropdb(config, 'tododb', function (err, res) {
//   if (err) {
//     console.error(err);
//     process.exit(-1);
//   }
//   console.log(res);
// });

pgtools.createdb(config, 'tododb', function (err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(res);
  addTables();
});

let addTables = function() {

  const db = new pg.Pool({
    host: 'localhost',
    database: 'tododb',
    user: 'postgres',
    password: process.env.PGPASS,
    port: '5432'
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

  const queryText2 = `
    CREATE TABLE IF NOT EXISTS "categories" (
      "category_id" INT GENERATED ALWAYS AS IDENTITY,
      "name" VARCHAR(64) NOT NULL,
      PRIMARY KEY ("category_id")
    );`;

  const queryText3 = `
    CREATE TABLE IF NOT EXISTS "todoItems" (
      "todo_id" SERIAL,
      "itemName" VARCHAR(64) NOT NULL,
      "itemDesc" VARCHAR(255) NOT NULL,
      "duration" INTERVAL NOT NULL,
      "startDay" DATE NOT NULL,
      "startTime" TIME NOT NULL,
      "inCalendar" BOOLEAN NOT NULL,
      "user_id" INTEGER NOT NULL,
      "category_id" INTEGER NOT NULL,
      PRIMARY KEY ("todo_id"),
      CONSTRAINT fk_category
        FOREIGN KEY("category_id")
          REFERENCES categories("category_id")
    );`;

    execute(queryText2)
      .then(function(result) {
        console.log('category table created: ', result);
        return execute(queryText3)
      })
      .then(function(result) {
        console.log('to do item table created: ', result);
        db.end();
      })
}



