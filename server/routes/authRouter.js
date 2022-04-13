const authRouter    = require('express').Router();
const mongoose      = require('mongoose');
const session       = require('express-session');
const MongoStore    = require('connect-mongo');
const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt        = require('bcrypt');
const auth          = require('../models/authentication/auth.js');
const saltStrength  = 10;
// const hbs        = require('express-handlebars');
// const bodyParser = require('body-parser');

const congolmerateSecret = 'superSecretSecrets';
const mongoStoreUrl = 'mongodb://localhost:27017/boc-auth-store';
const loginFailurePath = '/auth/failure';
const loginSuccessPath = '/auth/success';

authRouter.use(session({
  secret: congolmerateSecret,
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: mongoStoreUrl}),
  ttl: 14 * 24 * 60 * 60 // = 14 days. Default
}));

authRouter.use(passport.initialize());
authRouter.use(passport.session());

passport.use(new LocalStrategy(
  {usernameField:"email", passwordField:"password"},
  function(usernameField, passwordField, cb) {
    auth.findUserByEmail(usernameField).then((info, err) => {
      console.log('info: ', info);
      if (err)    { return cb(err)};
      if (!info)  { return cb(null, false)};
      // password verification
      var hash = info.password;
      return bcrypt.compare(passwordField, hash, function(err, result) {
        if (!result) {
          return cb(null, false, { message: 'Incorrect username or password.' })
        }
        return cb(null, info)
      })
    })
  }
));


passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { username: user.email });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
};

function isLoggedOut(req, res, next) {
  if (!req.isAuthenticated()) return next();
  res.redirect('/');
};

// routes
authRouter.post("/register", async (req, res) => {
  try {
    const hashedPw = await bcrypt.hash(req.body.password, saltStrength);
    const insertResult = await auth.addNewUser({
      email: req.body.email,
      password: hashedPw,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    });
    res.send(insertResult);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
});


authRouter.post('/login', passport.authenticate('local', {
  successRedirect: '/auth/success',
  failureRedirect: '/auth/failure',
  failureMessage: true
}));



authRouter.route('/success').get((req, res) => {
  console.log('success');
  res.sendStatus(200);
});


authRouter.route('/failure').get((req, res) => {
  console.log('failure');
  res.sendStatus(200);
});


authRouter.route('/').post((req, res) => {
  console.log('auth / route');
  console.log(req.body);
  res.send('Login Router POST');
});



authRouter.route('/').get((req, res) => {
  console.log('get signup route');
  res.send('Signup List Router GET');
});

authRouter.post('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

module.exports = authRouter;