const http=require("http");

const userData=[
    {
        name:"Adarsh",
        age:22,
        email:"adarsh@gmail.com"
    },
     {
        name:"ojha",
        age:22,
        email:"ojha@gmail.com"
    },
     {
        name:"amar",
        age:32,
        email:"amar@gmail.com"
    }
];
http.createServer((req, res)=>{
    res.setHeader("Content-Type", "appliction/json");
    res.write(JSON.stringify(userData));
    res.end();
}).listen(4000);