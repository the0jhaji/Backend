const http = require('http');
const userForm=require('./userForm')

http.createServer((req, res) => {
    res.writeHead(200, {"content-type":"text/html"});
    if(req.url=='/'){
        userForm(req, res);

    }else if(req.url=='/submit'){
        userDataSubmit(req, res);
    }
    res.end();
}).listen(3500);

console.log("Server running on http://localhost:3500");