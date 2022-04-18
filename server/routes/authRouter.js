const authRouter    = require('express').Router();
const mongoose      = require('mongoose');
const session       = require('express-session');
const MongoStore    = require('connect-mongo');
const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt        = require('bcrypt');
const auth          = require('../models/authentication/auth.js');
const saltStrength  = 10;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const findOrCreate = require('mongoose-findorcreate');

const congolmerateSecret = 'superSecretSecrets';
const mongoStoreUrl = 'mongodb://localhost:27017/boc1';
const loginFailurePath = '/auth/failure';
const loginSuccessPath = '/auth/success';

authRouter.use(session({
  secret: congolmerateSecret,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: mongoStoreUrl}),
  ttl: 14 * 24 * 60 * 60 // = 14 days. Default
}));

authRouter.use(passport.initialize());
authRouter.use(passport.session());

passport.use(new LocalStrategy(
  {usernameField:"email", passwordField:"password"},
  function(usernameField, passwordField, cb) {
    console.log('local:', usernameField)
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

passport.use(new GoogleStrategy({
  clientID: '384082777651-3e339admf544k9oeu2bohree85k2uqrt.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: "http://localhost:3000/auth/google/home",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
  proxy:true
},
 function(accessToken, refreshToken, profile, email, cb) {
  auth.user.findOne({ email: email.emails[0].value }, function (err, result) {
    if (!result) {
      console.log('no result')
      let data = {
        email: email.emails[0].value,
        password: null,
        firstName: email.name.familyName,
        lastName: email.name.givenName,
        googleId: email.id
      };
      var newUser = new auth.user(data);
      newUser.save(function (err, result) {
        if (err) {
          console.log(err);
          cb(err);
        } else {
          cb(null, result);
        }
      });
    } else {
      console.log('user already existed:', result);
      cb(null, result);
    }
  });
}
));

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { username: user.email });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, user);
  });
});



// routes

authRouter.get("/google",
passport.authenticate('google', { scope: ["profile", "email"] })
);

authRouter.get("/google/home",
  passport.authenticate('google',
  {
    successRedirect: 'http://localhost:3001/',
    failureRedirect: "/auth/failure"
  }));

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
  res.status(200).send(true);
});

authRouter.get('/isLoggedIn', (req, res) => {
  let isAuth = req.isAuthenticated();
  console.log('isLoggedIn auth:', isAuth,  req.session);
  if (isAuth) {
    res.status(200).send({loggedIn: isAuth, info: req.session.passport.user.username})
  } else {
    res.send(isAuth);
  }
});

// optimize later with middleware that verifies this and /isloggedin

authRouter.route('/failure').get((req, res) => {
  console.log('failure');
  res.status(400).send(false);
});


authRouter.get('/logout', function(req, res) {
  console.log('logout auth:', req.isAuthenticated(), req.session);
   req.session.destroy(function (err) {
    res.send(false);
  });
});

module.exports = authRouter;