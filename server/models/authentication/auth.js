const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const findOrCreate = require('mongoose-findorcreate');

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

// const findUserByEmail = async (email, callback) => {
//   (async () => {
//     const client = await pool.connect()
//     try {
//       const result = await client.query(query.getInfo, [email]);
//       callback(null, result);
//     } finally {
//       client.release();
//     }
//   })().catch((err) => {
//     console.log(err.stack)
//   })
// };

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
var addNewId = function (data) {
  findUserById(data.googleId).then((user) => {
    if (!user) {
      var newUser = new User(data);
      newUser.save(function (err) {
        if (err) {
          console.log(err);
        };
      });
      console.log('new id user created:', newUser);
    }
    if (user) {
      console.log('user already exists with that id:', user);
      return user;
    }
  });
}

module.exports.connection = connection;
module.exports.user = User;
module.exports.addNewUser = addNewUser;
module.exports.addNewId = addNewId;
module.exports.findUserByEmail = findUserByEmail;

