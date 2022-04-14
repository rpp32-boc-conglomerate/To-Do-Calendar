const Pool = require('pg').Pool;
require ('dotenv').config();

const postgresRole = 'postgres';
console.log('im here');

const pool = new Pool({
  user: postgresRole,
  host: '54.209.199.189',
  port: '5432',
  database: 'tododb',
  password: process.env.PGPASS
});

pool.on('error', (err, client) => {
  console.error('Error: ', err);
});

const query = `SELECT * from todoitems`;

(async () => {
  try {
      const client = await pool.connect();
      const res = await client.query(query);

      for (let row of res.rows) {
          console.log(row);
      }
  } catch (err) {
      console.error(err);
  }
})();

module.exports = {

}
