const calendarRouter = require('express').Router();

calendarRouter.route('/').get((req, res) => {
  console.log('calendar route');
  res.send('Calendar Router GET');
})

module.exports = calendarRouter;