const http=require('http');
const userData=[
        {
        name:"Adarsh",
        age:21,
        email:"adarsh@gmail.com"
        },{
        name:"Aman",
        age:21,
        email:"aman@gmail.com"
        },{
        name:"Ojha",
        age:21,
        email:"ojha@gmail.com"
        }
];
http.createServer((req, res)=>{
    res.setHeader("Content-Type", "aplication/json");
    res.write(JSON.stringify(userData));
    res.end();
}).listen(3000);
console.log("Server running on http://localhost:3000");