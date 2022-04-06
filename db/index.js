const Pool = require('pg').Pool;

const pgSchemas = ['users', 'categories', 'todoItems'];
const postgresRole = 'main_user';

const schemaCodes = {
  "25007": "schema_and_data_statement_mixing_not_supported",
  "3F000": "invalid_schema_name",
  "42P06": "duplicate_schema",
  "42P15": "invalid_schema_definition",
  "42000": "syntax_error_or_access_rule_violation",
  "42601": "syntax_error"
};

const pool = new Pool({
  user: postgresRole,
  host: 'localhost',
  port: '5432',
  database: 'todoCal',
  password: 'main_1234'
});

pool.on('error', (err, client) => {
  console.error('Error: ', err);
});


/*

CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL,
  "name" VARCHAR(64) NOT NULL,
  "hash" VARCHAR(64) NOT NULL,
  PRIMARY KEY ("id")
);`

CREATE TABLE IF NOT EXISTS "categories" (
  "id" SERIAL,
  "name" VARCHAR(64) NOT NULL,
  PRIMARY KEY ("id")
);`

CREATE TABLE IF NOT EXISTS "todoItems" (
  "id" SERIAL,
  "itemName" VARCHAR(64) NOT NULL,
  "itemDesc" VARCHAR(255) NOT NULL,
  "duration" INTERVAL NOT NULL,
  "startDay" DATE NOT NULL,
  "startTime" TIME NOT NULL,
  "userID" INTEGER NOT NULL,
  "catagoryID" INTEGER NOT NULL,
  PRIMARY KEY ("id")
);`


*/