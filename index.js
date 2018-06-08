const http = require('http');

const port = process.env.PORT || 80;

http.createServer( function(request, response){
    response.end('It is works!');
}).listen(port);
