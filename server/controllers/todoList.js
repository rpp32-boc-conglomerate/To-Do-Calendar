const Pool = require('pg').Pool;

const postgresRole = 'main_user';

const pool = new Pool({
  user: postgresRole,
  host: 'localhost',
  port: '5432',
  database: 'todocal',
  password: 'main_1234'
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