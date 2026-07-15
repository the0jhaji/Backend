const http = require('http');
const fs = require('fs');
const queryString=require('querystring')
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
                let readableData=queryString.parse(rawData);
                console.log(rawData);
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(`
                    <h2>Name: ${readableData.name}</h2>
                    <h2>Email: ${readableData.email}</h2>
                    <h2>Password: ${readableData.password}</h2>
                `);
                res.end("<h1>Data Submitted Successfully</h1>");                res.end("<h1>Data Submitted Successfully</h1>");

            });

        }

    });

}).listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});