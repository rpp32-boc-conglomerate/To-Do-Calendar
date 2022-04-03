const todoListRouter = require('express').Router();

todoListRouter.route('/').get((req, res) => {
  console.log('toDO route');
  res.send('Todo List Router GET');
})

module.exports = todoListRouter;