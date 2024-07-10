// Create web server
// Create a web server that can listen to incoming HTTP requests on port 3000 and respond to it with a static HTML file that you have created.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
        }
        res.end();
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});