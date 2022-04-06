const registrationRouter = require('express').Router();
var cors = require('cors');

// registrationRouter.options('*', cors());

registrationRouter.route('/').get((req, res) => {
  console.log('get signup route');
  res.send('Signup List Router GET');
});



registrationRouter.route('/').post((req, res) => {
  console.log('post signup route');
  console.log(req.body);
  res.sendStatus(200);
});
module.exports = registrationRouter;