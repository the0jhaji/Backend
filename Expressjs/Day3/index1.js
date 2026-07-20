import express from "express";
import about from "../pages/about.js";
import login from "../pages/login.js";
import home from "../pages/home.js";
const app = express();
app.get("/",(req, res)=>{
    res.send(home());
});
app.get("/about",(req, res)=>{
    res.send(about());
});
app.get("/login",(req, res)=>{
   res.send(login());
});
app.post("/submit",(req, res)=>{
    res.send("<h1>Data submited </h1>");
});

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`Port ${PORT} is busy. Trying ${PORT + 1}...`);
        app.listen(PORT + 1, () => {
            console.log(`Server running on http://localhost:${PORT + 1}`);
        });
    } else {
        console.error(err);
    }
});