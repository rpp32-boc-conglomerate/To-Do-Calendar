require ('dotenv').config()
const pg = require('pg');
const pgtools = require('pgtools');

const config = {
  user: 'postgres',
  password: process.env.PGPASS,
  port: 5432,
  host: 'localhost'
}

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
      "id" SERIAL,
      "name" VARCHAR(64) NOT NULL,
      "userID" INTEGER NOT NULL,
      PRIMARY KEY ("id")
    );`;

  execute(queryText2)
  .then(result => {
    if (result) {
        console.log('category table created: ', result);
    }
  })

  const queryText3 = `
    CREATE TABLE IF NOT EXISTS "todoItems" (
      "id" SERIAL,
      "title" VARCHAR(64) NOT NULL,
      "description" VARCHAR(255) NOT NULL,
      "duration" INTERVAL NOT NULL,
      "start" TIMESTAMP NOT NULL,
      "end" TIME NOT NULL,
      "allDay" BOOLEAN NOT NULL
      "userID" INTEGER NOT NULL,
      "categoryID" INTEGER NOT NULL,
      PRIMARY KEY ("id")
    );`;

  execute(queryText3)
  .then(result => {
    if (result) {
        console.log('to do item table created: ', result);
        db.end();
    }
  })
}



