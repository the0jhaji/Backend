const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.write("<h1>Hello bro</h1>");
    res.write("<h1>E hello..</h1>");

    res.end();
}).listen(3500);

console.log("Server running on http://localhost:3500");