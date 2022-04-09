const loginRouter = require('express').Router();

loginRouter.route('/').get((req, res) => {
  console.log('login route');
  res.send('Login Router GET');
});

loginRouter.route('/').post((req, res) => {
  console.log('login route post');
  res.send(true);
});

loginRouter.route('/newUser').get((req, res) => {
  console.log('login route 2');
  res.send('Login Router GET');
})

module.exports = loginRouter;