const http = require('http');
const fs = require('fs')

const hostname = 'localhost';
const port = 9000;


const respond = (res, filepath) => fs.readFile(filepath, function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data, 'utf-8');
 });


const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        respond(res, './src/index.html')

    } else if (req.url === '/banner.html') {
        respond(res, './src/banner.html')
    }
 })

 server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });