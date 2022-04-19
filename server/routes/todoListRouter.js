const todoListRouter = require('express').Router();
const query = require('../controllers/pg.js');


todoListRouter.get('/info', (req, res) => {
  const email = req.params.email || '1@qq.com';
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
  var calendarId = req.body.calendarId || 2;
  var category = req.body.category || 'do some homework';
  query.postCategory(calendarId, category, async (err, response) => {
    if (err) {
      res.status(400).send('post category error');
    } else {
      res.status(201).send('category posted');
    }
  });
});

todoListRouter.post('/item', async (req, res) => {
  var title = req.body.title || 'opoipoi with E';
  var description =  req.body.description || 'oipoipiwith E';
  var duration =  req.body.duration || 3600;
  var start =  req.body.start || '2022-04-20T10:30:20';
  var end_date =  req.body.end || '2022-04-20T11:30:20';
  var in_calendar =  req.body.inCalendar || true;
  var categoryId =  req.body.categoryId || 13;
  query.postItem(title, description, duration, start, end_date, in_calendar, categoryId, async (err, response) => {
    if (err) {
      res.status(400).send('post item error');
    } else {
      res.status(201).send('item posted');
    }
  });
});

todoListRouter.put('/updateCategory', async (req, res) => {
  var categoryId = req.body.categoryId || 11;
  var category = req.body.category || 'jumping';
  query.updateCategory(categoryId, category, async (err, response) => {
    if (err) {
      res.status(400).send('update category error');
    } else {
      res.status(201).send('category updated');
    }
  });
});

todoListRouter.put('/updateItem', async (req, res) => {
  var title = req.body.title || 'fishinging with B';
  var description =  req.body.description || 'eating with B';
  var duration =  req.body.duration || 7200;
  var start =  req.body.start || '2022-04-20T10:30:20';
  var end_date =  req.body.end || '2022-04-20T12:30:20';
  var in_calendar =  req.body.inCalendar || true;
  var itemId = req.body.itemId || 12;
  query.updateItem(title, description, duration, start, end_date, in_calendar, itemId, async (err, response) => {
    if (err) {
      res.status(400).send('updateItem error');
    } else {
      res.status(201).send('Item updated');
    }
  });
});

todoListRouter.delete('/deleteItem', async (req, res) => {
  var itemId = req.body.itemId || 1;
  query.deleteItem(itemId, async (err, response) => {
    if (err) {
      res.status(400).send('delete item error');
    } else {
      res.status(201).send('item deleted');
    }
  });
});

todoListRouter.delete('/deleteCategory', async (req, res) => {
  var categoryId = req.body.categoryId || 11;
  query.deleteCategory(categoryId, async (err, response) => {
    if (err) {
      res.status(400).send('deleteCategory error');
    } else {
      res.status(201).send('category deleted');
    }
  });
});

module.exports = todoListRouter;