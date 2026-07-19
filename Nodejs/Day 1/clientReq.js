const http=require("http");
http.createServer((req, res)=>{
    if(req.url=="/"){
        res.write("<h1>Home Page</h1>");
    }else if(req.url=="/about"){
        res.write("<h1>About Page</h1>");
    }else if(req.url=="/contact"){
        res.write("<h1>Contact Page</h1>");
    }else{
        res.write("<h1>404</h1>");
    }
    res.end();
    console.log(req.url);
}).listen(4000);