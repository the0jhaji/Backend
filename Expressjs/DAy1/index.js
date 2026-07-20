const express=require('express');
const app = express();
// console.log(app);
app.get("/",(req, res)=>{
    res.send("<h1>hello minions</h1>");
})
app.get("/minions",(req, res)=>{
    res.send("<h1>Mallo mini boss!</h1>    <img src='images.jpeg' >");
})
app.listen(3000);