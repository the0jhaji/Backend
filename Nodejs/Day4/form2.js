const http = require('http');
const fs = require('fs');
const { error } = require('console');
http.createServer((req, res)=>{
    fs.readFile('html/form2.html', 'utf-8', (error, data)=>{
        if(error){
          res.writeHead(500, {"content-type":"text/plain"});

           res.write("<h1>error</h1>");
           return ;
        }
   
        if(req.url=='/'){
            res.writeHead(200, {"content-type":"text/html"});
            res.write(data);

        }
        else if(req.url="/submit"){
            res.write("<h1> Data submited</h1>");
        }

        res.end("test");
    });
}).listen(3000);