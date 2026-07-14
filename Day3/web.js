const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    fs.readFile('html/home.html', 'utf-8', (err, data) => {

        if (err) {
            res.writeHead(500, {
                "Content-Type": "text/plain"
            });

            res.write("Internal Server Error");
            return res.end();
        }

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.write(data);
        res.end();
    });

}).listen(3500);

console.log("Server running on http://localhost:3500");