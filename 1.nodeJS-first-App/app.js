const http = require('http');

const routes = require('./routes')

// Way1
// const server = http.createServer(routes);

// Way 2, 3 & 4
console.log(routes.text);
const server = http.createServer(routes.handler);

server.listen(3000);