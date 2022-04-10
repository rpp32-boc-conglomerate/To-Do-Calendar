const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
// const validator = require("mongoose-unique-validator");

const bocAuth = 'mongodb://localhost:27017/boc-auth';
const bocAuthOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
const connection = mongoose.createConnection(bocAuth, bocAuthOptions);

mongoose.connect(bocAuth, bocAuthOptions);

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true},
  lastName: { type: String, required: true}
});

var User = mongoose.model('User', UserSchema);

var findUserByEmail = function (email) {
  return User.findOne( {email: email} );
}

var addNewUser = function (data) {
  findUserByEmail(data.email).then((user) => {
    if (!user) {
      var newUser = new User(data);
      newUser.save(function (err) {
        if (err) {
          console.log(err);
        };
      });
      console.log('new user created');
    }
    if (user) {
      console.log('user already exists with that email');
    }
  });
}



module.exports.connection = connection;

module.exports.user = User;
module.exports.addNewUser = addNewUser;
module.exports.findUserByEmail = findUserByEmail;

