const todoListRouter = require('express').Router();
const query = require('../controllers/pg.js');


todoListRouter.get('/info', (req, res) => {
  const email = req.query.email;
  try {
    query.getInfo(email, async(err, response) => {
      if (err) {
        res.status(400).send('get question error');
      } else {
        const result = { results: response.rows };
        res.status(200).send(result);
      }
    });
  } catch(error) {
    console.error(error);
    res.send({data: error});
  }
});

todoListRouter.post('/category', async (req, res) => {
  var calendarId = req.body.calendarId;
  var category = req.body.category;
  query.postCategory(calendarId, category, async (err, response) => {
    if (err) {
      res.status(400).send('post category error');
    } else {
      res.status(201).send('category posted');
    }
  });
});

todoListRouter.post('/item', async (req, res) => {
  var title = req.body.title;
  var description =  req.body.description;
  var duration =  req.body.duration;
  var start =  req.body.start;
  var end_date =  req.body.end;
  var in_calendar =  req.body.inCalendar;
  var categoryId =  req.body.categoryId;
  query.postItem(title, description, duration, start, end_date, in_calendar, categoryId, async (err, response) => {
    if (err) {
      res.status(400).send('post item error');
    } else {
      res.status(201).send('item posted');
    }
  });
});

todoListRouter.put('/updateCategory', async (req, res) => {
  var categoryId = req.body.categoryId;
  var category = req.body.category;
  query.updateCategory(categoryId, category, async (err, response) => {
    if (err) {
      res.status(400).send('update category error');
    } else {
      res.status(201).send('category updated');
    }
  });
});

todoListRouter.put('/updateItem', async (req, res) => {
  var title = req.body.title;
  var description =  req.body.description;
  var duration =  req.body.duration;
  var start =  req.body.start;
  var end_date =  req.body.end;
  var in_calendar =  req.body.inCalendar;
  var itemId = req.body.itemId;
  query.updateItem(title, description, duration, start, end_date, in_calendar, itemId, async (err, response) => {
    if (err) {
      res.status(400).send('updateItem error');
    } else {
      res.status(201).send('Item updated');
    }
  });
});

todoListRouter.put('/deleteItem', async (req, res) => {
  var itemId = req.body.itemId;
  query.deleteItem(itemId, async (err, response) => {
    if (err) {
      res.status(400).send('delete item error');
    } else {
      res.status(201).send('item deleted');
    }
  });
});

todoListRouter.put('/deleteCategory', async (req, res) => {
  var categoryId = req.body.categoryId;
  query.deleteCategory(categoryId, async (err, response) => {
    if (err) {
      res.status(400).send('deleteCategory error');
    } else {
      res.status(201).send('category deleted');
    }
  });
});

module.exports = todoListRouter;