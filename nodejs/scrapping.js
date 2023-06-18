
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if(req.url === '/demo') {
    const filePath = path.join(__dirname, 'a.html');
    
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello nodejs');
});

server.listen(8080, 'localhost',() => {
  console.log('server is running on port 8080')
});