const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const localStrategy		= require('passport-local').Strategy;
const bodyParser = require('body-parser');
const queries = require('../database/pg.js');


const authRouter = require('./routes/authRouter.js');
const todoListRouter = require('./routes/todoListRouter.js');
const calendarRouter = require('./routes/calendarRouter.js');

app.use(cors({
  credentials: true,
  // origin: "http://localhost:3001",
  origin: "http://192.168.1.87:3001"
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/auth', authRouter);
app.use('/todoList', todoListRouter);
app.use('/calendar', calendarRouter);

app.get('/info', (req, res) => {
  const email = '1@qq.com';
  try {
    queries.getInfo(email, async(err, response) => {
      if (err) {
        res.status(400).send('get info error');
      } else {
        const result = { result: response.rows };
        res.status(200).send(result);
      }
    });
  } catch(error) {
    console.error(error);
    res.send({data: error});
  }
});

app.post('', (req, res) => {
  res.send('POST request');
});


module.exports = app;