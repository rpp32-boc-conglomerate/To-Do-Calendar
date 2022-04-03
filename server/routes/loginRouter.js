const loginRouter = require('express').Router();

loginRouter.route('/').get((req, res) => {
  console.log('login route');
  res.send('Login Router GET');
});

loginRouter.route('/newUser').get((req, res) => {
  console.log('login route 2');
  res.send('Login Router GET');
})

module.exports = loginRouter;