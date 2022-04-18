const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const bocAuth = 'mongodb://localhost:27017/boc-auth';
const bocAuthOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
const connection = mongoose.createConnection(bocAuth, bocAuthOptions);

mongoose.connect(bocAuth, bocAuthOptions);

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  firstName: { type: String, required: false},
  googleId: { type: String, required: false},
  lastName: { type: String, required: false}
});

var User = new mongoose.model('User', UserSchema);

var findUserByEmail = async function (email, cb) {
    try{
      User.findOne( {email: email}, function (err, data) {
        if (err){
            console.log('findUserByEmail err:',err)
            cb(err)
        }
        else{
            cb(null, data)
        }
    });
    } catch(err) {
      cb(err);
    }
}


var findUserById = function (id) {
  return User.findOne( {googleId: id} );
}

var addNewUser = async function (data, cb) {
    var newUser = new User(data);
    newUser.save(function (err) {
      if (err) {
        console.log(err);
        cb(err);
      } else {
        console.log('new user created');
        cb(null, newUser)
      }
    });
}

module.exports.connection = connection;
module.exports.user = User;
module.exports.addNewUser = addNewUser;
module.exports.findUserByEmail = findUserByEmail;

