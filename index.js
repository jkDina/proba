const http = require('http');

const port = process.env.PORT || 8090;

http.createServer( function(request, response){
    response.end('It is works!');
}).listen(port);
