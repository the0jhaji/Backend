const http=require('http');

http.createServer((req, res)=>{
    res.write("<h1>Adarsh is ml engineer</h1>");
    res.end("Byye");
}).listen(4000);