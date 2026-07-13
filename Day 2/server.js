const http = require('http');

const age = 22;

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>My First Node Server</title>
        </head>
        <body>
            <h1>Welcome to My Server 🚀</h1>
            <p>This page is generated using Node.js.</p>
            <hr>
            <h2>Age: ${age}</h2>
        </body>
        </html>
    `);

    res.write("<h2>Hello bro</h2>");
    res.write("<h3>E hello..</h3>");

    res.end();
}).listen(3500);

console.log("Server running on http://localhost:3500");