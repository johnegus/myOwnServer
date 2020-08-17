const http = require('http');

http.createServer(function (req, res) {
    if (req.url === "/OK") {
        console.log("Indbound 'OK' request being processed...");
        res.writeHead(200);
        res.end();
    }
    if (req.url === "/Bad-Request") {
        console.log("Server received your request but could not understand it");
        res.writeHead(400);
        res.end();
    }
    if (req.url === "/Created") {
        console.log("Your request was received and a new record was created as a result");
        res.writeHead(201);
        res.end();
    }
    if (req.url === "/Forbidden") {
        console.log("The resource you requested may exist, but you're not allowed to see it at all");
        res.writeHead(403);
        res.end();
    }
    if (req.url === "/Found") {
        console.log("This resource has been temporarilary moved");
        res.writeHead(302);
        res.end();
    }
    else {
        console.log("Requested page could not be found");
        res.writeHead(404);
        res.end();
    }
}).listen(3000, function () {
    console.log('Welcome to port 3000.');
});
