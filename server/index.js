const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
// const mongoDB = require('../database/mongoDB.js');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const localStrategy		= require('passport-local').Strategy;
const bodyParser = require('body-parser');

const authRouter = require('./routes/authRouter.js');
const todoListRouter = require('./routes/todoListRouter.js');
const calendarRouter = require('./routes/calendarRouter.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(session({
//   secret: 'somelonglongstring',
//   resave: false,
//   saveUninitialized: false,
// }))
// app.use(passport.initialize());
// app.use(passport.session());
// passport.serializeUser(function (user, done) {
// 	done(null, user.id);
// });
// passport.deserializeUser(function (id, done) {
// 	mongoDB.userModel.findById(id, function (err, user) {
// 		done(err, user);
// 	});
// });

app.use('/auth', authRouter);
app.use('/todoList', todoListRouter);
app.use('/calendar', calendarRouter);

app.get('', (req, res) => {
  res.send('GET request');
});

app.post('', (req, res) => {
  res.send('POST request');
});


module.exports = app;