const app = require('./index.js');

const port = process.env.port || 3000;

const server = app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

server.on('error', console.error);