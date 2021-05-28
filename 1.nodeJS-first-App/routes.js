const fs = require('fs');

const requestHandlers = (req, res) => {
    // console.log(req.url,req.method,req.headers);
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Submit to go</title></head>');
        res.write('<body><h1><form method="POST" action="/message"><input type="text" name = "message"/><button type="submit">Send</button></form></h1></body>');
        res.write('</html>');
        res.end();
        return;
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.write('<html>');
    res.write('<head><title>First time</title></head>');
    res.write('<body><h1>hello from my Node.js server!!!</h1></body>');
    res.write('</html>');
    res.end();
    // process.exit(); // to terminate the server
};

// Way 1
// module.exports = requestHandlers;

// Way 2
// module.exports = {
//     handler: requestHandlers,
//     text: 'Some hard coded text'
// };

// Way 3
// module.exports.handler = requestHandlers;
// module.exports.text = 'Some text';

// Way 4
exports.handler = requestHandlers;
exports.text = 'Some text';