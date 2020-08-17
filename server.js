const http = require('http');

http.createServer(function(req, res){
    res.end();
}).listen(3000, function(){
    console.log('Welcome to port 3000.');
});