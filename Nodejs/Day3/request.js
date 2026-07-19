const http=require('http');
http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url=='/login'){
        res.write("<h1>login</h1>");
    }else if(req.url=='/'){
            res.write("<h1>Home</h1>");

    }else{
         res.write("<h1>other page</h1>");
    }
    res.end();
}).listen(3000)
console.log("Server running on http://localhost:3000");