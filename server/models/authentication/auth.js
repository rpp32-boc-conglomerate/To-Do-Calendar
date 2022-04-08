const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
// const validator = require("mongoose-unique-validator");

const mongooseDB = 'mongodb://localhost:27017/boc-auth';
mongoose.connect(mongooseDB, { useNewUrlParser: true, useUnifiedTopology: true});

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true},
  lastName: { type: String, required: true}
});


var User = mongoose.model('User', UserSchema);

var addNewUser = function (data) {
  var newUser = new User(data);
  newUser.save(function (err) {
    if (err) {
      // handle this error better
      console.log(err);
    };
  });
}

module.exports.user = User;
module.exports.addNewUser = addNewUser;
