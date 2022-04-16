const { Pool, Client } = require('pg');
const query = require('./queries.js');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASS,
  database: process.env.PGDB,
  port: process.env.PGPORT,
  host: process.env.PGHost
});

const getInfo = async (email, callback) => {
  (async () => {
    const client = await pool.connect()
    try {
      const result = await client.query(query.getInfo, [email]);
      callback(null, result);
    } finally {
      client.release();
    }
  })().catch((err) => {
    console.log(err.stack)
  })
};

module.exports = {
  getInfo,
}