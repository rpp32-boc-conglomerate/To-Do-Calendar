const { Pool, Client } = require('pg');
const query = require('./queries.js');
require('dotenv').config();

const pool = new Pool({
  user: process.env.pgUser,
  password: process.env.pgPassword,
  database: process.env.pgDB,
  host: process.env.pgHost,
  port: 5432,
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