const { Pool, Client } = require('pg');
const query = require('.././models/main_functions/queries.js');
require('dotenv').config();

// user: postgres
// host: '54.209.199.189',
// port: '5432',
// database: 'tododb',

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

const postCategory = (calendarId, category, callback) => {
  (async () => {
    const client = await pool.connect()
    try {
      const result = await client.query(query.postCategory, [calendarId, category]);
      callback(null, 'Category Posted');
    } finally {
      client.release();
    }
  })().catch((err) => {
    console.log(err.stack)
  })
};

const postItem = (title, description, duration, start, end_date, in_calendar, category_id, callback) => {
  (async () => {
    const client = await pool.connect()
    try {
      const result = await client.query(query.postItem, [title, description, duration, start, end_date, in_calendar, category_id]);
      callback(null, 'Item Posted');
    } finally {
      client.release();
    }
  })().catch((err) => {
    console.log(err.stack)
  })
};

const updateCategory = (categoryId, category, callback) => {
  (async () => {
    const client = await pool.connect()
    try {
      const result = await client.query(query.updateCategory, [categoryId, category]);
      callback(null, result);
    } finally {
      client.release();
    }
  })().catch((err) => {
    console.log(err.stack)
  })
};

const updateItem = (title, description, duration, start, end_date, in_calendar, itemId, callback) => {
  (async () => {
    const client = await pool.connect()
    try {
      const result = await client.query(query.updateItem, [title, description, duration, start, end_date, in_calendar, itemId]);
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
  postCategory,
  postItem,
  updateCategory,
  updateItem
}