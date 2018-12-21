const http = require('http');

var server = http.createServer(
    (request,response)=>{
        response.end('Hello Node.js');
    }
);

server.listen(process.env.PORT || 8080);