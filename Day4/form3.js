const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    fs.readFile('html/form2.html', 'utf-8', (error, data) => {

        if (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            return res.end("Internal Server Error");
        }

        if (req.url === '/') {

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);

        }

        else if (req.url === "/submit" && req.method === "POST") {

            let dataBody = [];

            req.on('data', (chunk) => {
                dataBody.push(chunk);
            });

            req.on('end', () => {

                let rawData = Buffer.concat(dataBody).toString();

                console.log(rawData);

                res.writeHead(200, { "Content-Type": "text/html" });
                res.end("<h1>Data Submitted Successfully</h1>");
            });

        }

    });

}).listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});