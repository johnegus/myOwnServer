const http = require('http');

http.createServer(function (req, res) {
    if (req.url === "/OK") {
        console.log("Inbound 'OK' request being processed...");
        // res.setHeader("Content-Type", "text/html")
        res.writeHead(200);
        res.write("<html><body><h1>Your Request is being processed!</h1></body></html>")
        res.end();
    }

    else if (req.url === "/Created") {
        console.log("Your request was received and a new record was created as a result");
        res.writeHead(201);
        res.end();
    }
    else if (res.url === '/Moved-Permanently') {
        console.log('The resource you requested is in a totally new location.');
        res.writeHead(301);
        res.end;
    }
    else if (req.url === "/Found") {
        console.log("This resource has been temporarilary moved");
        res.writeHead(302, { Location: "http://localHost:300/Created" });
        res.end();
    }
    else if (req.url === "/Bad-Request") {
        console.log("Server received your request but could not understand it");
        res.writeHead(400);
        res.end();
    }
    else if (res.url === '/Unauthorized') {
        console.log('The resource you requested my exist, but you are not allowed to see it without authentication');
        res.writeHead(401);
        res.end;
    }
    else if (req.url === "/Forbidden") {
        console.log("The resource you requested may exist, but you're not allowed to see it at all");
        res.writeHead(403);
        res.end();
    }
    else if (req.url === "/Not-Found") {
        console.log("Server could not find requested resource.");
        res.writeHead(404);
        res.end();
    }
    else if (req.url === "/Internal-Server-Error") {
        console.log('The request was recieved and the server tried to process it but something went awry');
        res.writeHead(500);
        res.end();
    }

    else if (req.url === "/Gateway-Timeout") {
        console.log("The server didn't respond in time.");
        res.writeHead(504);
        res.end();
    }

}).listen(3000, function () {
    console.log('Welcome to port 3000.');
});
