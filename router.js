const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') req.url = '/index.html' 
    let pathHTML = path.join(__dirname, 'public', req.url);
    fs.readFile(pathHTML, (err, content) => {
        if (err) throw err;
        res.writeHead(200);
        res.end(content);
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}`);
});