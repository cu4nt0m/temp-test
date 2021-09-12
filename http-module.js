const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('example res ')
    }
    if(req.url === '/about') {
        res.end('here is about page');
    }
    res.end(`
    <h1>Opps!</h1>
    <p>we cant find the page</p>
    <a href="/">back home</a>
    `)
});

server.listen(5000);