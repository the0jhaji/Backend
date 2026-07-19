const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    // Server start hote hi har request par header read hoga
    const collectHeaderData = fs.readFileSync('html/header.html', 'utf-8');

    if (req.url === '/') {

        fs.readFile('html/home.html', 'utf-8', (err, data) => {

            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                return res.end('Error: Home file not found');
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });

            // Header + Home page send karo
            res.end(collectHeaderData + data);

        });

    }

    else if (req.url === '/styles.css') {

        fs.readFile('html/styles.css', 'utf-8', (err, data) => {

            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                return res.end('Error: CSS file not found');
            }

            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);

        });

    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Page Not Found');
    }

}).listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});