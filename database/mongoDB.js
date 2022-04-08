const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');

mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  .then(()=> {
    console.log("database connection successful");
  })
  .catch((err)=> {
    console.log("something wrong", err);
  });
 const userSchema =  new mongoose.Schema({
    username: String,
    password: String,
  });
  // const secret = 'somelongstring';
  // userSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password'] });
  // userSchema.plugin(passportLocalMongoose);
  const userModel = mongoose.model('userModel', userSchema);

  module.exports.userModel = userModel;