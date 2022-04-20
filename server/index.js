const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const localStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRouter.js');
const todoListRouter = require('./routes/todoListRouter.js');
const shareRouter = require('./routes/shareRouter.js');

// const compression = require('compression');
// var expressStaticGzip = require('express-static-gzip');

// app.use(compression());
// app.use(expressStaticGzip(__dirname + '/../client/dist', {
//   enableBrotli: true
// }));

app.use(cors({
  credentials: true,
  origin: "http://localhost:3001",
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/auth', authRouter);
app.use('/todoList', todoListRouter);
app.use('/share', shareRouter);



module.exports = app;
