const app = require('./index.js');
// const compression = require('compression');
// const expressStaticGzip = require('express-static-gzip');

// app.use(compression());
// app.use(expressStaticGzip(__dirname + '/../client/dist', {
//   enableBrotli: true
// }));

const port = process.env.port || 3000;

const server = app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

server.on('error', console.error);