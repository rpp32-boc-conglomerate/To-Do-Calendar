const registrationRouter = require('express').Router();
var cors = require('cors');
const mongoDB = require('../../database/mongoDB.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
registrationRouter.options('*', cors());

registrationRouter.route('/').get((req, res) => {
  console.log('get signup route');
  res.send('Signup List Router GET');
});



// registrationRouter.route('/').post((req, res) => {
//   console.log('post signup route');
//   console.log(req.body);
//   res.sendStatus(200);
// });

registrationRouter.route('/').post((req, res) => {
  console.log('register page:', req.body);
  bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
    const newUser = new mongoDB.userModel({
      username: req.body.username,
      password: hash
    });
    let email = await mongoDB.userModel.findOne({ username: req.body.username });
    console.log('check existing email:', email === null);
    if (email === null) {
      newUser.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('account save into db')
          res.send(true);
        }
      })
    } else {
      res.send('existed')
    }
  })

});

<<<<<<< HEAD
=======

>>>>>>> ebc9ed8846bc263fd8bfae6410f802f5630a2439
module.exports = registrationRouter;