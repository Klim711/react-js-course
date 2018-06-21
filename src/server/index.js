import express from 'express';

import handleRender from './handleRender';

const port = 8000;
const server = express();

server.use(express.static('dist'));
server.get('/', handleRender);

server.listen(port, () => {
  console.log(`Serving at http://localhost:${port}`);
});