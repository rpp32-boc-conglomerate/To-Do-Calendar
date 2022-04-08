const authRouter   = require('express').Router();
const session       = require('express-session');
const passport      = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt        = require('bcrypt');
const auth          = require('../models/authentication/auth.js');
const saltStrength  = 10;
// const hbs        = require('express-handlebars');
// const app        = express();

authRouter.use(session({
  secret: "verygoodsecret",
  resave: false,
  saveUninitialized: true,
  // store: new MongoStore({mongooseConnection: mongoose.connection})
}));

authRouter.use(passport.initialize());
authRouter.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  auth.User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new localStrategy({ usernameField: "email" }, (email, password, done) => {
    User.findOne({ email: email })
      .then(user => {
        if (!user) {
          const newUser = new auth.User({ email, password });
          // Hash password before saving in database
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => {
                  return done(null, user);
                })
                .catch(err => {
                  return done(null, false, { message: err });
                });
            });
          });
        // Return other user
        } else {
          // Match password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                return done(null, user);
            } else {
                return done(null, false, { message: "Wrong password" });
            }
          });
        }
      })
      .catch(err => {
          return done(null, false, { message: err });
      });
  })
);

passport.use(new localStrategy(
  function(username, password, done) {
    auth.User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));


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
  console.log(req.body);
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


authRouter.route('/testRoute').get((req, res) => {
  console.log('testRoute');
  res.send('Login Router GET');
});


authRouter.route('/login').get((req, res) => {
  console.log('login route');
  console.log(req.body);
  res.send('Login Router GET');
});

authRouter.post('/password', (req, res) => {
  console.log('in password post');
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  });
});

authRouter.route('/').post((req, res) => {
  console.log('login post route');
  console.log(req.body);
  res.send('Login Router POST');
});



authRouter.route('/').get((req, res) => {
  console.log('get signup route');
  res.send('Signup List Router GET');
});



module.exports = authRouter;