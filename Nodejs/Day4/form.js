const http = require('http');
http.createServer((req, res)=>{
    res.writeHead(200, {"content-type":"text/html"});
    if(req.url=='/'){
        res.write(`
            <form action="/submit" method="post">
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="Email"/>
                <button> submit</button>
            </form>
            `);
    }
    else if(req.url="/submit"){
        res.write("<h1> Data submited</h1>");
    }

    res.end();
}).listen(3000);