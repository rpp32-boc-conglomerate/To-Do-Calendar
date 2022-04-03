const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const app = express();

const loginRouter = require('./routes/loginRouter.js');
const registrationRouter = require('./routes/registrationRouter.js');
const todoListRouter = require('./routes/todoListRouter.js');
const calendarRouter = require('./routes/calendarRouter.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/login', loginRouter);
app.use('/signup', registrationRouter);
app.use('/todoList', todoListRouter);
app.use('/calendar', calendarRouter);

app.get('/', (req, res) => {
  res.send('GET request');
});

app.post('', (req, res) => {
  res.send('POST request');
});

app.get('/api', (req, res) => {
  console.log('api route');
  res.send({ message: 'Welcome to to-do-calendar-backend!' });
});

app.get('/signup2', (req, res) => {
  console.log('signup2 route');
  res.send('ohayo');
});

export default app;