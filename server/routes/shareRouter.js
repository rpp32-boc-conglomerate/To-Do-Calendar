const shareRouter   = require('express').Router({ mergeParams : true });
const shareDB = require('../controllers/pg.js');
var bodyParser = require('body-parser');

shareRouter.use(bodyParser.json());
shareRouter.use(bodyParser.urlencoded({extended: false}));


shareRouter.route('/sharedWithUser').get((req, res) => {
  var email = req.query.email;
  console.log('email:', email);
  console.log('shared with user route');

  shareDB.getSharedWithUser(email).then((result) => {
    res.send(result.rows);
  })
  .catch((err) => {
    console.log('err 2 in query');
    res.sendStatus(500);
  })
});


shareRouter.route('/sharedByUser').get((req, res) => {
  var email = req.query.email;

  console.log('in shared By User:', email);
  shareDB.getSharedByUser(email).then((result) => {
    console.log('result is:', result);
    res.send(result.rows);
  })
  .catch((err) => {
    console.log('err is: ', err)
    res.sendStatus(500);
  })
});

shareRouter.route('/deleteFromShares').delete((req, res) => {
  var email = req.query.email;

  shareDB.deleteFromShares(email).then((result) => {
    res.send(result.rows);
  })
  .catch((err) => {
    res.sendStatus(500);
  })
});


shareRouter.route('/insertToShares').post((req, res) => {
  var newDBEntry = req.body.email;

  shareDB.insertToShares(newDBEntry).then((result) => {
    console.log(result);
    res.send(result.rows);
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
});



module.exports = shareRouter;